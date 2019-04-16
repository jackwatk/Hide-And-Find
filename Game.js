'use strict';
class Game {
  constructor (canvasElement) {
    this.gameIsOver = false;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.lives = 1;

    this.initialPositionPole = {
      x: 40,
      y: 40
    };
    this.player = null;
    this.player2 = null;
    this.animation = null;
    this.computerPlayersAmount = 33;
    this.polesAmount = 5;
    this.computerPlayers = [];
    this.poles = [];
    this.playerTouchingComputerPlayer = false;
    this.computerPlayerAttacked = false;
    this.playersTouching = false;
    this.playerPressed = [];
    this.playerKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'p', 'a', 'd', 'w', 's', '1'];
    this.winner = -1;
    this.enemyAttacked = false;
    this.dieTimeout = null;
    this.gameOverCallback = null;
    // smoke bombs
    this.smokeBombs = [];
  }

  start () {
    this.gameIsOver = false;
    this.startLoop();
  }
  startLoop () {
    // player instance
  // player1
    this.player = new Player(this.canvasElement);
    // player2
    this.player2 = new Player(this.canvasElement);
    // ComputerPlayer instance
    for (let i = 0; i < this.computerPlayersAmount; i++) {
      this.computerPlayers.push(new ComputerPlayer(this.canvasElement));
    }
    // poles instance
    for (let i = 0; i < this.polesAmount; i++) {
    // top left
      if (i === 0) {
        this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
      }
      // top right
      if (i === 1) {
        this.initialPositionPole = {
          x: 600,
          y: 40
        };
        this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
      }
      // bottom left
      if (i === 2) {
        this.initialPositionPole = {
          x: 40,
          y: 320
        };
        this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
      }
      // middle
      if (i === 3) {
        this.initialPositionPole = {
          x: 320,
          y: 200
        };
        this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
      }
      // bottom right
      if (i === 4) {
        this.initialPositionPole = {
          x: 600,
          y: 320
        };
        this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
      }

      // button handling for player
      // change to switch
      this.handleKeyUp = event => {
        this.player.setDirectionX(0);
        this.player.setDirectionY(0);
        this.player2.setDirectionX(0);
        this.player2.setDirectionY(0);
        let eventKeyIndex = this.playerPressed.indexOf(event.key);
        this.playerPressed.splice(eventKeyIndex, 1);
        if (this.playerPressed.length) {
          this.handleKey();
        }
      };

      this.handleKey = event => {
        if (event) {
          if (this.playerKeys.includes(event.key) && !this.playerPressed.includes(event.key)) {
            this.playerPressed.push(event.key);
          }
        }

        this.playerPressed.forEach((key) => {
          if (key === 'ArrowLeft') {
            this.player.setDirectionX(-1);
          };
          if (key === 'ArrowRight') {
            this.player.setDirectionX(1);
          }
          if (key === 'ArrowUp') {
            this.player.setDirectionY(-1);
          }
          if (key === 'ArrowDown') {
            this.player.setDirectionY(1);
          }
          if (key === 'a') {
            this.player2.setDirectionX(-1);
          }
          if (key === 'd') {
            this.player2.setDirectionX(1);
          }
          if (key === 'w') {
            this.player2.setDirectionY(-1);
          }
          if (key === 's') {
            this.player2.setDirectionY(1);
          }
        });
      };
    }
  }

// end of Game
}
const poleSound = new Audio('pole.wav');
const attackSound = new Audio('attack.wav');
const attackSound2 = new Audio('attacking.wav');
const fallSound = new Audio('fall.wav');

Game.prototype.startLoop = function () {
  // player instance
  // player1
  this.player = new Player(this.canvasElement);
  // player2
  this.player2 = new Player(this.canvasElement);
  // ComputerPlayer instance
  for (var i = 0; i < this.computerPlayersAmount; i++) {
    this.computerPlayers.push(new ComputerPlayer(this.canvasElement));
  }
  // poles instance
  for (var i = 0; i < this.polesAmount; i++) {
    // top left
    if (i === 0) {
      this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
    }
    // top right
    if (i === 1) {
      this.initialPositionPole = {
        x: this.canvasElement.width - this.poles[0].size,
        y: 40
      };
      this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
    }
    // bottom left
    if (i === 2) {
      this.initialPositionPole = {
        x: 40,
        y: this.canvasElement.height - this.poles[0].size - 40
      };
      this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
    }
    // bottom right
    if (i === 3) {
      this.initialPositionPole = {
        x: this.canvasElement.width - this.poles[0].size,
        y: this.canvasElement.height - this.poles[0].size - 40
      };
      this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
    }
    // middle
    if (i === 4) {
      this.initialPositionPole = {
        x: ((this.poles[0].x + this.poles[3].x) / 2) - this.poles[0].size / 2,
        y: (this.poles[0].y + this.poles[3].y) / 2 - this.poles[0].size / 2
      };
      this.poles.push(new Pole(this.canvasElement, this.initialPositionPole));
    }
  }
  // get context

  // button handling for player
  // change to switch
  this.handleKeyUp = function (event) {
    this.player.setDirectionX(0);
    this.player.setDirectionY(0);
    this.player2.setDirectionX(0);
    this.player2.setDirectionY(0);
    var eventKeyIndex = this.playerPressed.indexOf(event.key);
    this.playerPressed.splice(eventKeyIndex, 1);
    if (this.playerPressed.length) {
      this.handleKey();
    }
  }.bind(this);

  this.handleKey = function (event) {
    if (event) {
      if (this.playerKeys.includes(event.key) && !this.playerPressed.includes(event.key)) {
        this.playerPressed.push(event.key);
      }
    }

    this.playerPressed.forEach(function (key) {
      if (key === 'ArrowLeft') {
        this.player.setDirectionX(-1);
      };
      if (key === 'ArrowRight') {
        this.player.setDirectionX(1);
      }
      if (key === 'ArrowUp') {
        this.player.setDirectionY(-1);
      }
      if (key === 'ArrowDown') {
        this.player.setDirectionY(1);
      }
      if (key === 'a') {
        this.player2.setDirectionX(-1);
      }
      if (key === 'd') {
        this.player2.setDirectionX(1);
      }
      if (key === 'w') {
        this.player2.setDirectionY(-1);
      }
      if (key === 's') {
        this.player2.setDirectionY(1);
      }
      if (key === 'p') {
        this.smokeBombs.push(new Smokebomb(this.canvasElement, this.player.x, this.player.y));
      }
      if (key === '1') {
        this.smokeBombs.push(new Smokebomb(this.canvasElement, this.player2.x, this.player2.y));
      }
    }.bind(this));
  }.bind(this);
  // player1

  document.addEventListener('keydown', this.handleKey);
  document.addEventListener('keyup', this.handleKeyUp);
  document.addEventListener('keydown', this.handleAttack);

  this.handleAttack = function (event) {
    // attack player
    if (event.key === 'l' && this.playersTouching) {
      this.winner = 0;
      attackSound.play();
      this.playersTouching = false;
      fallSound.play();
      this.player.runAnimation.die();
      this.dieTimeout = setTimeout(this.finishGame.bind(this), 1000);
      if (this.player.DirectionX === -1 || this.player.DirectionY === -1) {
        this.player.runAnimation.knightAttackLeft();
      } else if (this.player.DirectionX === 1 || this.player.DirectionY === 1) {
        this.player.runAnimation.knightAttack();
      }
    } else if (event.key === 'l' && this.playerTouchingComputerPlayer) {
      this.enemyAttacked = true;
      attackSound2.play();
      if (this.player.DirectionX === -1 || this.player.DirectionY === -1) {
        this.player.runAnimation.knightAttackLeft();
      } else if (this.player.DirectionX === 1 || this.player.DirectionY === 1) {
        this.player.runAnimation.knightAttack();
      }
    }
    // missed attack
    else if (event.key === 'l') {
      this.player.runAnimation.knightAttack();
      attackSound2.play();
      if (this.player.DirectionX === -1 || this.player.DirectionY === -1) {
        this.player.runAnimation.knightAttackLeft();
      } else if (this.player.DirectionX === 1 || this.player.DirectionY === 1) {
        this.player.runAnimation.knightAttack();
      }
    }
  }.bind(this);

  // player1
  document.addEventListener('keydown', this.handleAttack);

  // back to idle
  document.addEventListener('keyup', this.backToIdle);

  // change to switch

  // player 2 attack
  this.handlePlayer2Attack = function (event) {
    if (event.key === 'z' && this.playersTouching) {
      this.winner = 1;
      attackSound.play();
      this.playersTouching = false;
      this.player.runAnimation.die();
      fallSound.play();
      this.dieTimeout = setTimeout(this.finishGame, 5000);
    } else if (event.key === 'z') {
      this.player2.runAnimation.knightAttack();
      attackSound2.play();
    } else if (event.key === 'z' && this.collidedEnemy) {
      this.enemyAttacked = true;
    }
  }.bind(this);
  // player2
  // document.addEventListener('keydown', this.handlePlayer2Key);

  document.addEventListener('keydown', this.handlePlayer2Attack);

  var gameLoop = function () {
    this.clearAll();
    this.drawAll();
    this.updateAll();
    this.checkAllCollisions();

    if (this.player.chimeCount === 5) {
      this.winner = 2;
      this.finishGame();
    }
    if (this.player2.chimeCount === 5) {
      this.winner = 3;
      this.finishGame();
    }

    if (!this.gameIsOver) {
      requestAnimationFrame(gameLoop);
    }
  }.bind(this);

  gameLoop();
};

Game.prototype.updateAll = function () {
  // player
  this.player.update();
  this.player2.update();
  // computer Players
  this.computerPlayers.forEach(function (computerPlayer) {
    computerPlayer.update();
  });

  // poles
};
Game.prototype.drawAll = function () {
  // player
  this.player.draw();
  this.player2.draw();
  // computerPlayers
  this.computerPlayers.forEach(function (computerPlayer) {
    computerPlayer.draw();
  });

  // poles
  this.poles.forEach(function (pole) {
    pole.draw();
  });
  this.smokeBombs ? this.smokeBombs.forEach((smokebomb) => smokebomb.draw()) : null;
};

Game.prototype.clearAll = function () {
  this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
};
Game.prototype.checkAllCollisions = function () {
  // check computer player collisions
  this.computerPlayers.forEach(function (computerPlayer) {
    if (this.player.collidesWithComputerPlayer(computerPlayer) && this.enemyAttacked) {
      computerPlayer.runAnimation.die();
      this.enemyAttacked = false;
      console.log('colliding & attacked');
    } else if (this.player.collidesWithComputerPlayer(computerPlayer)) {
      this.playerTouchingComputerPlayer = true;
    } else {
      this.playerTouchingComputerPlayer = false;
    }
  }.bind(this));
  // check pole collisions
  this.poles.forEach(function (pole) {
    if (this.player.collidesWithPole(pole) && pole.hasChimedForPlayer === false) {
      pole.hasChimedForPlayer = true;
      this.player.chimeCount = this.player.chimeCount + 1;

      poleSound.play();
    } else if (this.player2.collidesWithPole(pole) && pole.hasChimedForPlayer2 === false) {
      pole.hasChimedForPlayer2 = true;
      this.player2.chimeCount = this.player2.chimeCount + 1;

      poleSound.play();
    }
  }.bind(this));
  // check player collisions

  if (this.player.collidesWithPlayer(this.player2)) {
    this.playersTouching = true;
  } else {
    this.playersTouching = false;
  }
};

Game.prototype.onGameOverCallBack = function (callback) {
  this.gameOverCallback = callback;
};

Game.prototype.finishGame = function () {
  document.removeEventListener('keydown', this.handleKey);
  document.removeEventListener('keyup', this.handleKeyUp);
  document.removeEventListener('keydown', this.handleAttack);
  document.removeEventListener('keydown', this.handleAttack);
  document.removeEventListener('keyup', this.backToIdle);
  this.gameOverCallback(this.winner);

  this.gameIsOver = true;
};
