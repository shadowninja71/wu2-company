import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    



    return {
        markdowntemplateengine: "njk",
    }
}
