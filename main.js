'use strict';

function buildDom(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    // increase children number if you want more divs declared later
    return div.children[0];
}

function main(){
    var splashScreen;
    var gameScreen;
    var gameOverScreen;

    var startButton;
    var restartButton;
    var quitButton;
    var playerName = localStorage.setItem('name1', 'Player 1');
    var playerTwoName = localStorage.setItem('name2', 'Player 2');
    var header2;

   
    function buildSplash() {
        splashScreen =  buildDom(
            `<main>
            <div class = "container">
            <h1>Hide And Find</h1>
            <div class="eye"><img src="hide.png"></div>
            <div class="container">
            <button class="btn-start">Start</button>
            <a class="btn-instruction">
                    <span>Instructions</span>
                    <ul>Rules
                        <li>All Characters look the same</li>
                        <li>Two are players - the rest are computer players<li>
                    </ul>
                    <ul> To WIN!
                        <li>Find the other player and attack them<li>
                        <li>OR - touch all 5 poles (they ding, so you'll be easier to find)</li>
                    </ul>
                    <ul id ="buttons">Buttons
                        <li>PLAYER 1 (Arrows - <span id="keyboard">L</span> to attack)</li>
                        <li>PLAYER 2 (AWSD - <span id="keyboard">Z</span> to attack)<li>
                    </ul>
                     <div class="knight-image-left"><p>You</p> <img class="instruction-image" src="knight.png"></div>
                     <div class ="knight-image-right"><p>The guy she tells you not to worry about</p> <img class="instruction-image" src="knight.png"></div>
                    

            </a>
            </div>
            </div>
            </main>`)

        document.body.append(splashScreen);

        startButton = document.querySelector('.btn-start');

        startButton.addEventListener('click',destroySplash);
    }
    buildSplash();

    function destroySplash(){
        splashScreen.remove();
        startButton.removeEventListener('click',destroySplash);
        buildGameScreen();
    }

    function buildGameScreen(){
        gameScreen = buildDom(
        `<main>     
        <canvas width="700px" height="500px"></canvas> 
        <button>Quit</button>  
      </main>`)

        document.body.append(gameScreen);
        var canvasElement = document.querySelector('canvas')
        
        var game = new Game(canvasElement);
        game.start();
        quitButton = document.querySelector('button');
        quitButton.addEventListener('click',destroyGameScreen);
        
        game.onGameOverCallBack(destroyGameScreen);
    }

    function destroyGameScreen(winner){
        gameScreen.remove();
        buildGameOverScreen(winner);

    }

    function buildGameOverScreen(winner){
        gameOverScreen = buildDom(
            `<main>     
            <h1>Game over!</h1> 
            <h2 class="winner"></h2>
            <button>Restart</button>  
          </main>`)
          document.body.append(gameOverScreen);
          header2 = document.querySelector('.winner');
          
          if(winner === 0){
          header2.innerText = localStorage.getItem('name1') + " won!";
          } else if(winner === 1){
            header2.innerText = localStorage.getItem('name2') + " won!";
          } else if(winner === 2){
            header2.innerText = localStorage.getItem('name1') + " touched all poles!";
          }else if(winner === 3){
            header2.innerText = localStorage.getItem('name2') + " touched all poles!";
          }
          
          
          else{
              header2.innerText = "You quit :("
          }
          
        restartButton = document.querySelector('button');
        restartButton.addEventListener('click',destroyGameOverScreen); 
            
    }

    function destroyGameOverScreen(){

        gameOverScreen.remove();
        restartButton.removeEventListener('click', destroyGameOverScreen);
        buildSplash();

    }
}

window.addEventListener('load', main);
