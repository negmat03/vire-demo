module.exports = function (eleventyConfig) {
  // il CSS viene copiato cosi' com'e'
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/kuvat");

  // GitHub Pages: senza .nojekyll ignora le cartelle che iniziano con _
  eleventyConfig.on("eleventy.after", async ({ dir }) => {
    const fs = require("fs");
    fs.writeFileSync(dir.output + "/.nojekyll", "");
  });

  // sitemap.xml e robots.txt generati in automatico
  eleventyConfig.addCollection("pagine", (c) =>
    c.getFilteredByGlob("src/*.njk").filter((p) => p.data.inSitemap !== false)
  );

  // scorciatoia bilingue: {{ "Palvelut" | t("Services") }}
  // stampa entrambe le lingue, il JS in pagina mostra quella scelta
  eleventyConfig.addFilter("t", function (fi, en) {
    const esc = (s) => String(s).replace(/"/g, "&quot;");
    return `<span data-fi="${esc(fi)}" data-en="${esc(en)}">${fi}</span>`;
  });

  // In locale il sito sta sulla radice; per GitHub Pages serve il prefisso
  // della sottocartella. Lo passa lo script "build:pages" in package.json.
  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: { input: "src", output: "docs", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
