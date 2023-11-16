const wkhtmltopdf = require("wkhtmltopdf");

async function generateWkhtml(url, type) {
  // URL
  wkhtmltopdf(url, {
    pageSize: "letter",
    output: `wkhtml-document-${type}.pdf`,
  });

  // HTML
  //   wkhtmltopdf("<h1>Test</h1><p>Hello world</p>").pipe(res);

  // Stream input and output
  //   var stream = wkhtmltopdf(fs.createReadStream("file.html"));

  // output to a file directly
  //   wkhtmltopdf("http://apple.com/", { output: "out.pdf" });
}

module.exports = {
  generateWkhtml,
};
