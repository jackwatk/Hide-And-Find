Hide And Find

## Description
The objective of the game is as such. Imagine that there is a canvas (room) and it is full with completely identical characters and 5 spread around poles. They move around randomly inside the room in all different directions. However two of these characters are actually players. They must locate themselves, and then try to win by either killing the other player (with a collision and space bar) or touch all 5 poles (every pole touched will result in a sound, making them easier to locate).


## MVP (CANVAS)
MVP definition, deliverables.
As a MVP I will build the game with the objective of finding the right character out of a group in order to win, I will then add in the poles and later the extra player.

## Backlog

Extra Player

Poles - Collisions - Play Sound

computerPlayer falls over if incorrectly stabbed

Player can use Smokebomb to avoid detection

Animation - sprite - changes when walk or attack - also plays sound

Timer

Enter Name - on splash screen

Sound affects - on attack, fall down, pole walk through, and mystery reveal

Light up where winner was before changing screen
Mobile version




## Data structure
Classes and methods definition.
```
Game.js

Game() {
	this.gameIsOver
	this.canvasElement
	this.width
	this.height
	this.Lives
	this.initialPosition
	this.ctx(‘2d’)
	player = new Player()
	computerPlayer = new ComputerPlayer;
	poles = new Pole()
		
}
Game.prototype.start(){
	buildDOM()
	addEventListener
this.startLoop()
)}

Game.prototype.startLoop(){
	loop(){
	

//update all{
	this.player.update()
	this.computerPlayer.update()
	this.pole.update()
	

//colideCheckerall
//check if player collided with a computer player
	this.checkIfPlayerCollidedWithComputerPlayer()

//check if player collided with a player
	this.checkIfPlayerCollidedWithPlayer()

//check if pole collided with a player
	this.checkIfPoleCollidedWithPlayer()

//check if player is near edge of canvas and not let them past
	this.player(isInScreen())

//check if computerPlayer is near edge and get them to turn around
	this.compuerPlayer.filter(isInScreen))
	}

// clear all function
	ctx.clearRect();
	
//draw
	this.player.draw()
	this.computerPlayers.draw()
	this.poles.draw()
	frameRateFunction(loop)
	}
	frameRateFunction(loop)
	)
}
}

```
Player.js
```
Player(canvasElement, lives){
	This.x
	This.y
	This.canvasElement
	This.etx
	This.speed
	This.Direction
}

	Player.prototype.update()
	Player.prototype.draw()
	Player.prototype.SetDirection()
	Player.prototype.collidedWithPlayer()
	Player.prototype.collidedWithComputerPlayer()
	Player.prototype.collidedWithPole()

```
Computer Player.js
```
ComputerPlayer(canvasElement, speed) {
	function randomiseStartLocation(
	This.x // to be randomised
	This.y // to be randomised)
	This.size //same as player
	This.canvasElement
	This.ctx
	This.direction // to be randomised
	This.speed

}

	Computerplayer.prototype.update()
	randomiseDirection()
	randomiseMovement

	Computerplayer.prototype.draw()
	Computerplayer.prototype.isInScreen()
```
Poles(backlog)
```

Pole(CanvasElement){
	This.x
	This.y
	This.size
	This.canvasElement
}

	Pole.prototype.update()
	Pole.prototype.draw()
	Pole.prototype.playSound()

```











## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen - opening screen that will allow you to select how many ninjas you want, the time, your name and player 2s name.
- gameScreen - the general game screen that will load the content of the game with the canvas
- gameoverScreen - reveals where the winner was in the background, then fades in the winning text.

Main.js

SplashScreen

buildSplash()

destroySplash() 

addEventListener(-build GameScreen())

GameScreen

buildGameScreen()

create new Game()

game.start()

destroyGameScreen()

GameOver

buildGameOverScreen()

destroyGameOverScreen()

addEventListener(-buildSplash())



## Task
Task definition in order of priority

Create Files

Repo & Git

Build Main

3 States Transitions

Build Game

checkIfGameOver

Build Loop

Build Player

Build ComputerPlayer

Move Player

Add Random Movement to ComputerPlayer

1 ComputerPlayer moving randomly around

ComputerPlayers moving randimly around

Border Collisons

Collisons between computerPlayer and Player

Testing

Lives

List of Functions
Game

start()

buildDom()

getCanvasContext()

startLoop()

Loop()

UpdateAll()

ClearAll()

DrawAll()

Player

ComputerPlayer

Pole

CanvasElement

Initial Position

checkCollisonBorder()

checkCollisonWithPlayer()

checkCollisionWithPole()

checkCollisionWithComputerPlayer()

endGame()

onGameOverCallback()


Player

update();

draw();

setDirection();

collidesWithComputerPlayer();

checkCollisionwithComputerPlayer();

collidesWithPole();

checkCollisionwithPole();

collidesWithPlayer();

checkCollisionwithPlayer();

X:

Y:

Etx:

canvasElement

Speed

Direction

IsInCanvas()


ComputerPlayer

update();

draw();

setDirection();

randomlyMove();

collidesWithPlayer();

checkCollisionwithPlayer();

X:

Y:

Etx:

canvasElement

Speed

Direction

IsInCanvas()

Poles

update();

draw();

playSound();

collidesWithPlayer();

checkCollisionwithPlayer();

X:

Y:

Etx:

canvasElement

IsInCanvas()




## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)


