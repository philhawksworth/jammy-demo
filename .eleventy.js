module.exports = function(eleventyConfig) {


  // grabbing env vars
  const {
    CONTEXT
  } = process.env;

  console.log('CONTEXT :>> ', CONTEXT);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      data: CONTEXT == "production" ? "../data/prod" : "../data/stage"
    }
  };

};
