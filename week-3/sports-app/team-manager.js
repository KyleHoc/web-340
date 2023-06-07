//Title: team-manager.js
//Author: Kyle Hochdoerfer
//Date: 6/07/23
//Description: JavaScript for declaring an array of team objects and getting
//             and displaying objects in the array

//Apply strict mode to the entire file
"use strict";

//Import the team object from teams.js
const Team = require('./team')

//Declare an array containing information on five sports teams
let teams = [new Team('Chicago Bulls', 'Benny the Bull', 17),
             new Team('Toronto Raptors', 'The Raptor', 17),
             new Team('Boston Celtics', 'Lucky the Leprechaun', 17),
             new Team('Charlotte Hornets', 'Hugo the Hornet', 17),
             new Team('Houston Rockets', 'Clutch the Bear', 17)];

//Declare and export a function to get all team information
module.exports.getTeams = function(){
    //Return the teams array
    return teams;
};

//Declare and export a function to get a single team object from the array using the name
module.exports.getTeam = function(name){
    //For every team in the teams array:
    for(let team of teams){
        //If the team name matches the name parameter
        if(team.name === name){
            //Return the matching team object
            return team;
        }
    }
}

//Declare and export a function to return a formatted string containing team information
module.exports.displayTeam = function(team){
    //Return the formatted string
    return "Name: " + team.name + '\nMascot: ' + team.mascot + '\nPlayer Count: ' + team.playerCount + '\n';
}