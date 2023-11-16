// @ts-check
const playwright = require("playwright");
async function generatePlayWright(url, type) {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  await page.pdf({ path: `playwright-document-${type}.pdf` });
  await browser.close();
}

module.exports = {
  generatePlayWright,
};
