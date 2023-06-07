//Title: teams.js
//Author: Kyle Hochdoerfer
//Date: 6/07/23
//Description: JavaScript for creating and exporting Team objects

//Apply strict mode to the entire file
"use strict";

//Declare a Team class with a name, mascot, and player count
class Team{
    //Initialize the name, mascot, and player count of a team object
    constructor(name, mascot, playerCount){
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

//Export the team object
module.exports = Team;