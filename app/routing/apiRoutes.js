var path = require("path")

var friends = require("../data/friends.js")

module.exports = function(app){

    app.get("/api/friends", function (req, res) {
        res.json(friends);    
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newFriendScores = newFriend.scores;
        var scoresArray = [];
        var friendsMatch = ;
        var differencesArray = [];
        var bestMatch = 0;

        var newUserFriend = {
            name: newFriend.name,
            picture: newFriend.picture,
            scores: []
        };

    });




};

