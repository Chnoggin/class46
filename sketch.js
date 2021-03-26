var player1, player1Img;
var player2, player2Img;
var database;
var gameState = 0;
var playerCount = 0;

var form;
var game;
var player;

var players;

var allPlayers;
var score = 0;






function preload() {
  player1Img = loadImage("fighter1.png");
  player2Img = loadImage("fighter2.png");
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  
}
function draw() {
  background("black");
  if(playerCount === 2) {
    game.update(1);
  }
  if(gameState === 1) {
 clear();
 game.play();
  }
  if(gameState === 2) {
    game.end();
  }
  //drawSprites();
}
