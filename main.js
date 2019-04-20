'use strict';

const buildDom = html => {
  var div = document.createElement('div');
  div.innerHTML = html;
  // increase children number if you want more divs declared later
  return div.children[0];
};

function main () {
  var splashScreen;
  var gameScreen;
  var gameOverScreen;

  var startButton;
  var restartButton;
  var quitButton;
  var playerName = localStorage.setItem('name1', 'Player 1');
  var playerTwoName = localStorage.setItem('name2', 'Player 2');
  var header2;
  var enemySelect;
  var smokeSelect;
  var timeSelect;
  var playerOne;
  var playerTwo;
  var player1Name;
  var player2Name;
  var music = new Audio()
  music.src = "music.wav"


  function buildSplash () {
    music.play();
 
    splashScreen = buildDom(
      `<main class="splash-container">
            <div class = "container">
            <h1>Hide And Find</h1>
            <div class="button-container">
            <button class="btn-start">Start</button>
            <a class="btn-instruction">
                    <span class="instruction-header">Instructions</span>
                    <ul>Rules
                        <li>All Characters look the same</li>
                        <li>Two are players - the rest are computer players<li>
                    </ul>
                    <ul> To WIN!
                        <li>Find the other player and attack them<li>
                        <li>OR - touch all 5 poles (they ding, so you'll be easier to find)</li>
                    </ul>
                    <ul id ="buttons">Buttons
                        <li>PLAYER 1 (Arrows - <span id="keyboard">L</span> to attack, <span id="keyboard">P</span> for smokebomb)</li>
                        <li>PLAYER 2 (AWSD - <span id="keyboard">Z</span> to attack, <span id="keyboard">1</span> for smokebomb)<li>
                    </ul>
                    <div class="images-instructions">
                     <div class="knight-image-left"><p>You</p> <img class="instruction-image" src="knight.png"></div>
                     <div class ="knight-image-right"><p>Player 2</p> <img class="instruction-image" src="knight.png"></div>
                     <div class ="knight-image-right"><p>Them</p> <img class="instruction-image" src="knight.png"></div>
                    </div>

            </a>
            </div>
            <div class="settings">
            <label for="enemy-count">How Many Enemies?</label>
            <select id="enemy-count">
                <option value="38">--Please choose an option--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <label for="smoke-count">How Many Smoke Bombs?</label>
            <select id="smoke-count">
                <option value="1">--Please choose an option--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <label for="time-count">How Long?</label>
            <select id="time-count">
                <option value="1">--Please choose an option--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p>Player one:</p> <input type="text" value="player one" id="player-one" name="playerOneName"><br>
            <p>Player two:</p> <input type="text" value="player two" id="player-two" name="playerTwoName"><br>
          
            </div>
            </div>
            <iframe src="music.wav" allow="autoplay" style="display:none" id="iframeAudio"></iframe> 
            </main>`);

    document.body.append(splashScreen);
    enemySelect = document.querySelector('#enemy-count');
    smokeSelect = document.querySelector('#smoke-count');
    timeSelect = document.querySelector('#time-count');
    playerOne = document.querySelector('#player-one')
    playerTwo = document.querySelector('#player-two')
    startButton = document.querySelector('.btn-start');
    startButton.addEventListener('click', destroySplash);
  }
  buildSplash();

  function destroySplash () {
    splashScreen.remove();
    music.pause();
    music.currentTime = 0;
    startButton.removeEventListener('click', destroySplash);
    buildGameScreen();
  }

  function buildGameScreen () {
    gameScreen = buildDom(
      `<main>     
        <canvas></canvas> 
        <button class="quit-button">Quit</button>
          
      </main>`);

    document.body.append(gameScreen);
    const gameContainerElement = document.querySelector('main');

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);
    const enemyCount = enemySelect.value; 
    const smokeCount = smokeSelect.value;
    const time = timeSelect.value;
    player1Name = playerOne.value;
    player2Name = playerTwo.value;
   // const poleCount = poleSelect.value
    var game = new Game(canvasElement,enemyCount, smokeCount, time);
    game.start();

    quitButton = document.querySelector('button');
    quitButton.addEventListener('click', destroyGameScreen);

    game.onGameOverCallBack(destroyGameScreen);
  }

  function destroyGameScreen (winner) {
    gameScreen.remove();
    buildGameOverScreen(winner);
  }

  function buildGameOverScreen (winner) {
    gameOverScreen = buildDom(
      `<main class="game-over">     
            <h1>Game over!</h1> 
            <h2 class="winner"></h2>
            <button>Restart</button>  
            <iframe src="silence.wav" allow="autoplay" style="display:none" id="iframeAudio"></iframe> 
            <audio id="player" autoplay loop>
            <source src="laughing.mp3" type="audio/mp3">
            </audio>
          </main>`);
    document.body.append(gameOverScreen);
    header2 = document.querySelector('.winner');

    if (winner === 0) {
      header2.innerText =  `${player1Name} won!`;
    } else if (winner === 1) {
      header2.innerText = `${player2Name} won!`;
    } else if (winner === 2) {
      header2.innerText = `${player1Name} touched all poles!`;
    } else if (winner === 3) {
      header2.innerText = `${player1Name} touched all poles!`;
    }else if (winner === 4) {
      header2.innerText = 'Time Ran Out You Cowards!';
    } else {
      header2.innerText = 'You quit :(';
    }

    restartButton = document.querySelector('button');
    restartButton.addEventListener('click', destroyGameOverScreen);
  }

  function destroyGameOverScreen () {
    gameOverScreen.remove();
    restartButton.removeEventListener('click', destroyGameOverScreen);
    buildSplash();
  }
}

window.addEventListener('load', main);
