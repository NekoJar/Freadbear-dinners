module.exports = {
  framework: "react",
  files: ["src/**/*.test.js"], // Adjust the file pattern according to your project structure
  preprocessors: {
    "**/*.js": ["babel"],
  },
  reporters: ["spec"],
  browsers: ["chrome"], // You can change this to other supported browsers
};
