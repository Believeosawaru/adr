document.querySelector('.achievements').addEventListener('click', () => {
   document.querySelector('.downtown-raced').innerHTML = `(${totalRaced})`;
   
  document.querySelector('.mins-spent-in-game').innerHTML = `(${minsInGame})`
   
   document.querySelector('.characters-unlocked').innerHTML = `(${cUnlocked} / 59)`;
   
   document.querySelector('.cash-earned-in-game').innerHTML = `(${moneyEarned})`;

   document.querySelector('.cash-spent-in-game').innerHTML = `(${moneySpent})`;

   document.querySelector('.g-coins-earned-in-game').innerHTML = `(${gCoinsEarned})`;

   document.querySelector('.rep-earned-in-game').innerHTML = `(${repEarned})`;
})

let daysInGame = 0;
let hoursInGame = 0;
let minsInGame = 0;
let secsInGame = 0;

function startTimer() {
  setInterval(() => {
    secsInGame += 1;
    document.querySelector('.secs-spent-in-game').innerHTML = `(${secsInGame})`
    
     if (secsInGame < 10) {
        document.querySelector('.secs-spent-in-game').innerHTML = `(0${secsInGame})`
      }
    
     if (secsInGame === 60) {
      secsInGame = 0;
      minsInGame += 1;
      document.querySelector('.mins-spent-in-game').innerHTML = `(${minsInGame})`
    }
     if (minsInGame === 60) {
      minsInGame = 0;
      hoursInGame += 1;
      document.querySelector('.hours-spent-in-game').innerHTML = `(${hoursInGame})`
    }
     if (hoursInGame === 24) {
      hoursInGame = 0;
      daysInGame += 1;
      document.querySelector('.days-spent-in-game').innerHTML = `(${daysInGame})`
    }
     
  }, 1000)
}

startTimer();