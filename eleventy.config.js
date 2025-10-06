export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");



    return {
        markdowntemplateengine: "njk",
    }
}
