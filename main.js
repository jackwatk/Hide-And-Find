'use strict';
console.log("linked");
function buildDom(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
}
function main(){
    var splashScreen;
    var gameScreen;
    var gameOverScreen;

    var startButton;
    var restartButton;
    var quitButton;
    var game = new Game();
    buildSplash();
    function buildSplash() {
        splashScreen =  buildDom(
            `<main>
            <h1>Hide And Find</h1>
            <button>Start</button>
            </main>`)

        document.body.append(splashScreen);

        startButton = document.querySelector('button');

        startButton.addEventListener('click',destroySplash);
    }

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
        //var game = new Game();
        game.start();
        quitButton = document.querySelector('button');
        quitButton.addEventListener('click',destroyGameScreen);
    }

    function destroyGameScreen(){
        gameScreen.remove();
        game.gameIsOver = true;
        buildGameOverScreen();
    }

    function buildGameOverScreen(){
        gameOverScreen = buildDom(
            `<main>     
            <h1>Game over!</h1> 
            <button>Restart</button>  
          </main>`)
          document.body.append(gameOverScreen);
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
debugger;