const commandLineArgs = require("command-line-args");
const { generatePlayWright } = require("./playwright");
const { generateWkhtml } = require("./wkhtml");

const fn = async () => {
  const options = commandLineArgs([
    {
      name: "tool",
      type: String,
    },
    {
      name: "url",
      type: String,
    },
  ]);

  const { tool, url } = options;

  const toolTypes = {
    playwright: generatePlayWright,
    wkhtml: generateWkhtml,
  };

  const urlTypes = {
    1: "https://sparksuite.github.io/simple-html-invoice-template/",
    2: "https://nirajrajgor.github.io/html-invoice-templates/",
    3: "https://nirajrajgor.github.io/html-invoice-templates/invoice1/invoice1.html",
    4: "https://nirajrajgor.github.io/html-invoice-templates/invoice2/invoice2.html",
    5: "https://nirajrajgor.github.io/html-invoice-templates/invoice3/invoice3.html",
  };

  const generateFn = toolTypes[tool];

  await generateFn(urlTypes[url], url);
  console.log("Done");
};

if (require.main === module) {
  fn(process.argv).then(process.exit).catch(console.error);
}
