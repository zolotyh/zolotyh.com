import Typograf from "typograf";

const tpRu = new Typograf({ locale: ["ru", "en-US"] });
const tpEn = new Typograf({ locale: ["en-US"] });

export default function (eleventyConfig) {
  eleventyConfig.ignores.add("AGENTS.md");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  eleventyConfig.addTransform("typograf", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) {
      return content;
    }
    const tp = this.page.lang === "en" ? tpEn : tpRu;
    return tp.execute(content);
  });

  eleventyConfig.addFilter("groupbyYearDesc", (arr) => {
    const groups = new Map();
    for (const item of arr) {
      if (!groups.has(item.year)) {
        groups.set(item.year, []);
      }
      groups.get(item.year).push(item);
    }
    return [...groups.entries()];
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
