var path = require('path'); //dependency

module.exports = function(app) { //routing
    app.get("/survey", function(req, res){ //get request
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    app.use(function(req, res){ //home default if no matching
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    })
}