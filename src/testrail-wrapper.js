var TestRail = require('testrail-api');
var config = require('./config/config');

var testRail = new TestRail({
    host: config.testRailHost,
    user: config.testRailEmail,
    password: config.testRailAPIKey    
});

testRail.getProjects(/*FILTERS=*/{}, function (err, response, projects) {
    console.log(projects);
});

testRail.getRuns(/*PROJECT_ID=*/7, /*FILTERS=*/{}, function (err, response, runs) {
    console.log(runs);
});