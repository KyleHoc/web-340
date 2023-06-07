//Title: index.js
//Author: Kyle Hochdoerfer
//Date: 6/07/23
//Description: JavaScript for displaying team objects to the console

//Apply strict mode to the entire file
"use strict";

//Import teamManager from team-manager.js
const teamManager = require('./team-manager')

//Use getTeams from team-manager to declare an array of team objects
const teams = teamManager.getTeams();

//Use getTeam to declare two individual team objects
const bulls = teamManager.getTeam("Chicago Bulls");
const celtics = teamManager.getTeam("Boston Celtics");

//Output a header for displaying all teams
console.log("-- DISPLAYING TEAMS --")
//For every team in the teams array
for (let team of teams){
    //Output all team information to the console
    console.log(teamManager.displayTeam(team))
}

//Output the information of the two individual team objects to the console
console.log("-- DISPLAYING A SINGLE TEAM --\n" + teamManager.displayTeam(bulls))
console.log("-- DISPLAYING A SINGLE TEAM --\n" + teamManager.displayTeam(celtics));