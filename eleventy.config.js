export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");


    return {
        markdowntemplateengine: "njk",
    }
}
