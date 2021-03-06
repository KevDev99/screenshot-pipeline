const puppeteer = require("puppeteer");

describe("Browser testing", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("make a screenshot", async () => {
    await page.goto("http://localhost:9999");
    await page.screenshot({ path: "screenshot.png" });
  });
  afterAll(async () => {
    await browser.close();
  });
});
