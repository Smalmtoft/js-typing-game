// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;


function addWordToDOM() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    word.innerText = randomWord;
  }
  
  
  function updateScore() {
    score++;
    scoreEl.innerText = score;
  }
  
  addWordToDOM();
  
  
  text.addEventListener("input", () => {
    const insertedText = text.value.trim();
  
    if (insertedText === randomWord) {
      updateScore();
      addWordToDOM();
      time += 5;
      text.value = "";
    }
  });

 
  function updateTime() {
    const timeInterval = setInterval(() => {
      time--;
      timeEl.innerText = time;
  
      if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
      }
    }, 1000);
  }
  
  function gameOver() {
    endgameEl.style.display = "flex";
    endgameEl.innerHTML = `
      <h1>Game over</h1>
      <p>Want to go again?</p>
      <button class="button-play-again" onclick="location.reload()">Play again</button>
    `;
  }
  
  updateTime();
  
  
  
  
  
  

