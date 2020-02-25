"use strict";

var playerOne = {
    firstName: "Zac",
    score: 0
}
var playerTwo = {
    firstName: "Sean",
    score: 0
}
var playerThree = {
    firstName: "Aaron",
    score: 0
}
var playerFour = {
    firstName: "Jacob",
    score: 0
}
var playerFive = {
    firstName: "Abraham",
    score: 0
}
var playerSix = {
    firstName: "Nevin",
    score: 0
}
var playerSeven = {
    firstName: "Brett",
    score: 0
}
var playerEight = {
    firstName: "Mike",
    score: 0
}
var playerNine = {
    firstName: "David",
    score: 0
}
var playerTen = {
    firstName: "Dejan",
    score: 0
}

var players = [];
var players = [
    playerOne,
    playerTwo,
    playerThree,
    playerFour,
    playerFive,
    playerSix,
    playerSeven,
    playerEight,
    playerNine,
    playerTen
]

var round = 0;

function earlyRound(){
    for(let i = 0; i < players.length; i++){
        players[i].score = rollAllDice();
    }

    players.sort(function(a,b) {return a.score - b.score;});
    printInformation();
    //let loserOne = players.shift();
    //alert(loserOne.firstName + " had a low score of " + loserOne.score + ". They have been eliminated.")

    //let loserTwo = players.shift();
    //alert(loserTwo.firstName + " had a low score of " + loserTwo.score + ". They have been eliminated.")
}

function midRound(){
    for(let i = 0; i < players.length; i++){
        players[i].score = rollAllDice();
    }

    players.sort(function(a,b) {return a.score - b.score;});
    printInformation();
    //let loserOne = players.shift();
    //alert(loserOne.firstName + " had a low score of " + loserOne.score + ". They have been eliminated.")
}

function finalRound(){
    for(let i = 0; i < players.length; i++){
        switch(rollD4()){
            case 1: players[i].score = rollD20();
            case 2: players[i].score = rollD20();
            case 3: players[i].score = rollD20();
            case 4: players[i].score = rollD20();
        }
    }
    players.sort(function(a,b) {return a.score - b.score;});
    printInformation();
    //alert(loserOne.firstName + " had a low score of " + loserOne.score + ". They have been eliminated.")

    let winner = players[1];
    alert(winner.firstName + " wins!")
}

function runGame(){
    if(round <= 3){
        round ++;
        if(round > 1) {
            deleteTable();
            removePlayer();
            removePlayer();
        }
        earlyRound();
    }
    else if(round > 3 && round < 6){
        round ++;
        deleteTable();
        removePlayer();
        midRound();
    }
    else{
        alert("Final Round!")
        deleteTable();
        finalRound();
        //removePlayer();
        deleteTable();
        players = [
            playerOne,
            playerTwo,
            playerThree,
            playerFour,
            playerFive,
            playerSix,
            playerSeven,
            playerEight,
            playerNine,
            playerTen
        ]
        round = 0;
    }
}

function rollD4(){
    return Math.floor((Math.random() * 4 + 1))
}

function rollD6(){
    return Math.floor((Math.random() * 6 + 1))
}

function rollD8(){
    return Math.floor((Math.random() * 8 + 1))
}

function rollD10(){
    return Math.floor((Math.random() * 10 + 1))
}

function rollD12(){
    return Math.floor((Math.random() * 12 + 1))
}

function rollD20(){
    return Math.floor((Math.random() * 20 + 1))
}

function rollAllDice(){
    return rollD4() + rollD6() + rollD8() + rollD10();
}

function printInformation(){
    
    for(let i = 0; i < players.length; i++){
        var tableBody = document.getElementById("tableData");
        var row = tableBody.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.innerHTML = players[i].firstName;
        cell2.innerHTML = players[i].score;
    }
}

function deleteTable(){
    for(let i = 0; i < players.length; i++){
        document.getElementById("tableData").deleteRow(0);
    }
}

function removePlayer(){
    players.shift();
}
