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
    firstName: "Paul",
    score: 0
}

var players = []

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

function standardRound(){

    for(let i = 0; i < players.length; i++){
        players[i].score = rollAllDice();
    }

    players.sort(function(a,b) {return a.score - b.score;});
    
    let loserOne = players.shift();
    alert(loserOne.firstName + " had a low score of " + loserOne.score + ". They have been eliminated.")
    let loserTwo = players.shift();
    alert(loserTwo.firstName + " had a low score of " + loserTwo.score + ". They have been eliminated.")
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

function rollAllDice(){
    return rollD4() + rollD6() + rollD8() + rollD10();
}

function rollD20(){
    return Math.floor((Math.random() * 20 + 1))
}