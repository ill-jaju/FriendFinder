var friends = require('../data/friends.js'); //loads dummy data

module.exports = function(app) { //routes

    app.get('/api/friends', function(req, res) { //get request
        res.json(friends)
    });

    app.post('/api/friends', function(req, res) { //post data
    
    });

};