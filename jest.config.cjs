// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // or 'jsdom' for browser-like environment
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  // Add any other Jest configurations as needed
};
