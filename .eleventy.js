export default function (eleventyConfig) {
  eleventyConfig.ignores.add("AGENTS.md");
  eleventyConfig.addPassthroughCopy("assets");

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
