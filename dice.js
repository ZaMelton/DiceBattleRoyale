"use strict";

var playerOne = {
    firstName: "Zac",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerTwo = {
    firstName: "Sean",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerThree = {
    firstName: "Aaron",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerFour = {
    firstName: "Jacob",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerFive = {
    firstName: "Abraham",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerSix = {
    firstName: "Nevin",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerSeven = {
    firstName: "Brett",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerEight = {
    firstName: "Mike",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerNine = {
    firstName: "David",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
}
var playerTen = {
    firstName: "Dejan",
    score: 0,
    alive: true,
    wins: 0,
    losses: 0
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
}

function midRound(){
    for(let i = 0; i < players.length; i++){
        players[i].score = rollAllDice();
    }

    players.sort(function(a,b) {return a.score - b.score;});
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
}

function runGame(){
    if(round > 6){
        resetGame();
    }
    document.getElementById("diceImage").src = "";
    document.getElementById("playButton").innerHTML = "Next Round";
    if(round <= 3){
        round ++;
        if(round > 1) {
            deleteTable();
            removePlayer();
            removePlayer();
        }
        earlyRound();
        printInformation();
    }
    else if(round > 3 && round < 6){
        round ++;
        deleteTable();
        removePlayer();
        midRound();
        printInformation();
    }
    else{
        deleteTable();
        finalRound();
        removePlayer();
        players[0].wins += 1;
        displayWinner();
        document.getElementById("playButton").innerHTML = "Play Again";
        round++;
    }
}

function resetGame(){
    deleteWinnerTable();
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

function printInformation(){
    var tableHead = document.getElementById("tableHead")
    var head = tableHead.insertRow();
    var th1 = head.insertCell();
    var th2 = head.insertCell();
    var th3 = head.insertCell();
    th1.innerHTML = "Round: " + round;
    th2.innerHTML = "Score";
    th3.innerHTML = "Record"
    for(let i = 0; i < players.length; i++){
        var tableBody = document.getElementById("tableData");
        var row = tableBody.insertRow();
        var td1 = row.insertCell();
        var td2 = row.insertCell();
        var td3 = row.insertCell();
        td1.innerHTML = players[i].firstName;
        td2.innerHTML = players[i].score;
        td3.innerHTML = players[i].wins + "-" + players[i].losses;
    }
}

function deleteTable(){
    document.getElementById("tableHead").deleteRow(0);
    for(let i = 0; i < players.length; i++){
        document.getElementById("tableData").deleteRow(0);
    }
}

function deleteWinnerTable(){
    document.getElementById("winnerTable").deleteRow(0);
}

function displayWinner(){
    var winnerTable = document.getElementById("winnerTable")
    var winnerRow = winnerTable.insertRow();
    var winner = winnerRow.insertCell();
    winner.innerHTML = players[0].firstName + " Wins!";
}

//another way of making a table
//currently unused
function printTable(){
    var th = '<tr class = "table-dark" ><td>Round: ' + round + '</td><td> Score</td></tr>';
    for(let i = players.length - 1; i >= 0; i--){
        if(players[i].alive){
            var aliveTr = '<tr class = "table-success">';
            aliveTr += '<td>' + players[i].firstName + '</td>';
            aliveTr += '<td>' + players[i].score + '</td>';
            aliveTr += '</tr>'
            th += aliveTr;
        }

        if(!players[i].alive){
            var deadTr = '<tr class = "table-danger">';
            deadTr += '<td>' + players[i].firstName + '</td>';
            deadTr += '<td>' + players[i].score + '</td>';
            deadTr += '</tr>'
            th += deadTr;
        }
    }
    document.getElementById("playersTest").innerHTML = th;
}

function removePlayer(){
    players[0].losses += 1;
    players.shift();
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
    return rollD4() + rollD6() + rollD8() + rollD10() + + rollD12() + rollD20();
}