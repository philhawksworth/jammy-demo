module.exports = function(eleventyConfig) {

   // grabbing env vars
   const {
    DATA_CONTEXT,
    CONTEXT
  } = process.env;


  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      data: `../data/${DATA_CONTEXT}`
    }
  };

};
