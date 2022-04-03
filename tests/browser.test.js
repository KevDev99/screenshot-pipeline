const puppeteer = require("puppeteer");

test("create screenshot", () => {
  (async () => {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:9999");
    await page.screenshot({ path: "screenshot.png" });

    await browser.close();
  })();
});
