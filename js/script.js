let lblWord, lblHint, lblTimer, lblInput;
let myInterval;

//#region pageInet
const pageInit = () => {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  let wordObject = words[randomWordIndex];
 
  wordCheck = wordObject.word;
  lblWord.innerHTML = scrambleWord(wordObject.word);

  lblHint.innerHTML = wordObject.hint;

  startTimer();
};
//#endregion

//#region scramble
function scrambleWord(bb) {
  
  return bb.split('').sort(() => 0.5 - Math.random()).join('');
}
//#endregion

//#region changeTimer
const changeTimer = () => {
  let timerValue = parseInt(lblTimer.innerHTML);
  if (timerValue <= 0) {
    clearInterval(myInterval);
    pageInit();
  } else lblTimer.innerHTML = timerValue - 1;
};
//#endregion

//#region startTimer
const startTimer = () => {
  lblTimer.innerHTML = 100;
  myInterval = setInterval(changeTimer, 1000);
};
//#endregion

//#region check button
const check = document.getElementById("checkWord").addEventListener('click', (e) => {
  e.preventDefault();
  let checked = lblInput.value;
let tomato = wordCheck;
  if (checked.toLowerCase() === tomato) {
    alert('Correct!');
 
  } else {
    alert('Incorrect!');
  }
});
//#endregion

//#region refresh button
const refresh = document.getElementById("refreshWord").addEventListener('click', () => {
  pageInit();
});
//#endregion

window.addEventListener("DOMContentLoaded", () => {
  lblWord = document.getElementById("scrambleWord");
  lblHint = document.getElementById("hint");
  lblTimer = document.getElementById("timer");
  lblInput = document.getElementById("inputWord");
  pageInit();

});