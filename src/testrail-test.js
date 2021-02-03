const get = require('request');
var config = require('./config/config');
var auth = Buffer.from(config.testRailEmail + ":" + config.testRailAPIKey).toString('base64');

const options = {
    method: "GET",
    url: config.testRailHost + "/index.php?/api/v2/get_runs/7",
    headers: {
        "Authorization": "Basic " + auth,
        "Content-Type": "application/json"
    }
};

get(options, (error, response, body) => {
    if ((JSON.parse(response["body"])["error"])) {
        console.log((JSON.parse(response["body"])["error"] + '-> Could not connect to Testrail '));
    }
    else {
        console.log("Successfully connected to Testrail!");
        var site = JSON.parse(body);
        console.log(site);
    }
});