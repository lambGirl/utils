module.exports = {
    testRegex: "/test/.*.[jt]sx?$",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    collectCoverage: true,
};