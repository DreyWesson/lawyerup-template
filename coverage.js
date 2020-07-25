const puppeteer = require("puppeteer");
// Include to be able to export files w/ node
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Begin collecting CSS coverage data
  await Promise.all([page.coverage.startCSSCoverage()]);

  // Visit desired page
  await page.goto("http://127.0.0.1:5502/src/index.html");

  //Stop collection and retrieve the coverage iterator
  const cssCoverage = await Promise.all([page.coverage.stopCSSCoverage()]);

  //Investigate CSS Coverage and Extract Used CSS
  const css_coverage = [...cssCoverage];
  let css_used_bytes = 0;
  let css_total_bytes = 0;
  let covered_css = "";

  for (const entry of css_coverage[0]) {
    css_total_bytes += entry.text.length;
    console.log(`Total Bytes for ${entry.url}: ${entry.text.length}`);

    for (const range of entry.ranges) {
      css_used_bytes += range.end - range.start - 1;
      covered_css += entry.text.slice(range.start, range.end) + "\n";
    }
  }

  console.log(`Total Bytes of CSS: ${css_total_bytes}`);
  console.log(`Used Bytes of CSS: ${css_used_bytes}`);
  fs.writeFile("./exported_css.css", covered_css, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  await browser.close();
})();
