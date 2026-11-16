// ตรวจการ์ด P0.1: เปิดหน้าเว็บขนาดมือถือ เพิ่มผู้เล่น ให้แต้ม ปิด/เปิดใหม่ แล้วดูว่าแต้มยังอยู่
// รัน: node tests/check.js   (ต้องมี playwright: npm install แล้ว npx playwright install chromium)
const { chromium } = require("playwright");
const path = require("path");
const { pathToFileURL } = require("url");
const assert = require("assert");

const url = pathToFileURL(path.join(__dirname, "..", "index.html")).href;
const shot = process.argv[2]; // ถ้าใส่ path จะบันทึกภาพหน้าจอ

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 412, height: 915 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "th-TH",
  });
  let page = await context.newPage();
  await page.goto(url);

  const add = async (name) => { await page.fill("#nameInput", name); await page.click("#addBtn"); };
  const scores = () => page.$$eval("li", lis => lis.map(li => [li.querySelector(".name").textContent,
    parseInt(li.querySelector(".score").firstChild.textContent, 10)]));

  // ชื่อว่าง / ชื่อซ้ำ ต้องไม่ถูกเพิ่ม
  await add("   ");
  assert.strictEqual((await scores()).length, 0, "empty name must not be added");
  for (const n of ["แม่", "พ่อ", "น้องมิว"]) await add(n);
  await add("แม่");
  assert.strictEqual((await scores()).length, 3, "duplicate name must not be added");

  // ให้แต้ม: แม่ +3, พ่อ +1 −1 −1, น้องมิว +5
  const tap = async (i, cls, times) => { for (let k = 0; k < times; k++) await page.locator("li").nth(i).locator("." + cls).tap(); };
  await tap(0, "plus", 3); await tap(1, "plus", 1); await tap(1, "minus", 2); await tap(2, "plus", 5);
  const expected = [["แม่", 3], ["พ่อ", -1], ["น้องมิว", 5]];
  assert.deepStrictEqual(await scores(), expected, "scores after tapping");

  // ปุ่มต้องใหญ่พอสำหรับนิ้ว (อย่างน้อย 48px)
  const box = await page.locator("li .plus").first().boundingBox();
  assert.ok(box.width >= 48 && box.height >= 48, "button too small: " + JSON.stringify(box));

  // รีโหลด
  await page.reload();
  assert.deepStrictEqual(await scores(), expected, "scores after reload");

  // ปิดแท็บ แล้วเปิดใหม่ (ข้อมูลยังอยู่ในเบราว์เซอร์เดิม)
  await page.close();
  page = await context.newPage();
  await page.goto(url);
  assert.deepStrictEqual(await scores(), expected, "scores after closing and reopening");

  // สูงสุด 6 คน
  for (const n of ["ยาย", "ตา", "ป้า"]) await add(n);
  assert.strictEqual(await page.isDisabled("#addBtn"), true, "add button must be disabled at 6 players");
  assert.strictEqual((await scores()).length, 6);
  await page.reload();
  assert.strictEqual((await scores()).length, 6, "6 players after reload");

  // ไม่มี error ในหน้า
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.reload();
  assert.deepStrictEqual(errors, []);

  if (shot) await page.screenshot({ path: shot, fullPage: true });
  await browser.close();
  console.log("PASS: P0.1 scoreboard — add players, score, reload, reopen, max 6");
})().catch(e => { console.error("FAIL:", e.message); process.exit(1); });
