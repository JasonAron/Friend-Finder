var path = require("path")

var friends = require("../data/friends.js")

var app = require("express");

module.exports = function (app, newFriend) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
            var newFriend = req.body;
            var newFriendScores = newFriend.scores;
            var scoresArray = [];
            var friendsMatch;
            var differencesArray = [];
            var bestMatch = 0;

            var newUserFriend = {
                name: newFriend.name,
                picture: newFriend.picture,
                scores: []
            };


            // New friends Scores array
            for (var i = 0; i < newFriendScores.length; i++) {
                scoresArray.push(parseInt(newFriendScores))
            };
            newUserFriend.scores = scoresArray;

            // Differences in scores array
            for (var i = 0; i < friends.length; i++) {
                var differences = 0;
                for (var j = 0; j < newUserFriend.scores.length; j++) {
                    differences += Math.abs(newUserFriend.scores[j] - friends[i].scores[j]);
                };
                differencesArray.push(differences);
            };

            // Find the best match and set it to the [i] of differencesArray
            for (var i = 1; i < differencesArray.length; i++) {
                if (differencesArray[i] <= differencesArray[bestMatch]) {
                    bestMatch = i;
                };
            };

            var bestFriend = friends[bestMatch];
            res.json(bestFriend);
            friends.push(newUserFriend);
        });
    };