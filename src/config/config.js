module.exports = {
    regressionRun: process.env.REGRESSION_RUN === "true" ? true : false,
    testRailHost: `${process.env.TESTRAIL_URL || "https://yourcompanyname.testrail.io"}`,
    testRailProjectName: "YourProjectName",
    testRailRegressionSuiteName: "Regression",
    testRailSectionName: `projectname-${process.env.ENVIRONMENT || "dev"}`,
    testRailSuiteName: `suitename-${process.env.ENVIRONMENT || "dev"}`,
    testRailEmail:"youremailaddress",
    testRailAPIKey: "yourtestrailapikey"
};
