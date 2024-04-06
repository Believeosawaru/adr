function clickableBtn() {
document.querySelector('.race').addEventListener('click', () => {
  document.querySelector('.race-btn').classList.add('auto-pointer');
})
}
 
function unclickableBtn() {
  document.querySelector('.race-btn').classList.remove('auto-pointer');
  console.log('hello')
}

let timeOne = 10; // JSON.parse(localStorage.getItem('timeOne'));
let timeTwo = 120;
let timeThree = 240;
let timeFour = 480;
let timeFive = 600;
let timeSix =  900;

let raced = 0;
let totalRaced = 0;

let cash = 2000; //JSON.parse(localStorage.getItem('cash'));
let exp = 0 //JSON.parse(localStorage.getItem('exp'));;
let gCoins = 0 //JSON.parse(localStorage.getItem('gCoins'));;;
let nitro = 0;

let repPoints = 0;

function locationOne() {
  const id = setInterval(() => {
    timeOne--;
    
    document.querySelector('.loc-1').innerHTML = `${timeOne}s`;
    
    localStorage.setItem('timeOne', JSON.stringify(timeOne));
    
    document.querySelector('.loc-1').disabled = true;
    
      if (timeOne === 0) {
    clearInterval(id);
    
    timeOne = 10;

    localStorage.removeItem('timeOne')
   
    document.querySelector('.loc-1').disabled = false;
    
    document.querySelector('.loc-1').innerHTML = 'Race';
  }
  }, 1000);
  
  document.querySelector('.popup').classList.add('show');
  
  console.log(simulateRace())
}

function locationTwo() {
  const id = setInterval(() => {
    timeTwo--;
    
    document.querySelector('.l-2').innerHTML = `${timeTwo}s`;
    
    document.querySelector('.l-2').disabled = true;
    
      if (timeTwo === 0) {
    clearInterval(id);
    
    timeTwo = 120;
    
    document.querySelector('.l-2').innerHTML = 'Race';
    
    document.querySelector('.l-2').disabled = false;
  }
  }, 1000);
  document.querySelector('.popup').classList.add('show');
  
  console.log(simulateRace())
}

function locationThree() {
  const id = setInterval(() => {
    timeThree--;
    
    document.querySelector('.l-3').innerHTML = `${timeThree}s`;
    
    document.querySelector('.l-3').disabled = true;
    
      if (timeThree === 0) {
    clearInterval(id);
    
    timeThree = 240;
    
    document.querySelector('.l-3').disabled = false;
    
    document.querySelector('.l-3').innerHTML = 'Race';
  }
  }, 1000);
  document.querySelector('.popup').classList.add('show');
  
  console.log(simulateRace())
}

function locationFour() {
  const id = setInterval(() => {
    timeFour--;
    
    document.querySelector('.l-4').innerHTML = `${timeFour}s`;
    
    document.querySelector('.l-4').disabled = true;
    
      if (timeFour === 0) {
    clearInterval(id);
    
    timeFour = 480;
    
    document.querySelector('.l-4').disabled = false;
    
    document.querySelector('.l-4').innerHTML = 'Race';
  }
  }, 1000);
  document.querySelector('.popup').classList.add('show');
  
  console.log(simulateRace())
}

function locationFive() {
  const id = setInterval(() => {
    timeFive--;
    
    document.querySelector('.l-5').innerHTML = `${timeFive}s`;
    
    document.querySelector('.l-5').disabled = true;
    
      if (timeFive === 0) {
    clearInterval(id);
    
    timeFive = 600;
    
    document.querySelector('.l-5').disabled = false;
    
    document.querySelector('.l-5').innerHTML = 'Race';
  }
  }, 1000);
  
  document.querySelector('.popup').classList.add('show');
  
  console.log(simulateRace())
}

function locationSix() {

  const id = setInterval(() => {
    timeSix--;
    
    document.querySelector('.l-6').innerHTML = `${timeSix}s`;
    
    document.querySelector('.l-6').disabled = true;
    
      if (timeSix === 0) {
    clearInterval(id);
    
    timeSix = 600;
    
    document.querySelector('.l-6').disabled = false;
    
    document.querySelector('.l-6').innerHTML = 'Race';
  }
  }, 1000);
  
  document.querySelector('.popup').classList.add('show');
  
  console.log(simulateRace())
}

function simulateRace() {
    // Define the probabilities for each position
   // const probabilities = [0.04, 0.09, 0.12, 0.25, 0.20];
    
    const probabilities = [
      1,//0.04, 
      0.09,
      0.12, 
      0.25, 
      0.20
    ];
    
    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    
    let result = "";
    
    // Determine the position based on probabilities
    for (let i = 0; i < probabilities.length; i++) {
        if (randomValue < probabilities[i]) {
            switch (i) {
                case 0:
                    result = '1st Place';
                    break;
                    
                case 1:
                    result = '2nd Place';
                    break;
                    
                case 2:
                    result = '3rd Place';
                    break;
                    
                case 3:
                    result = '4th Place';
                    break;
                    
                case 4:
                    result = '5th Place';
                    break;
                    
            }
            break;
        }
    }
    document.querySelector('.position').innerHTML = result;
    
 const random = Math.random() 
     
   if (result === '') {
 
     if (random > 0 && random < 1 / 3) {
       result = '3rd Place';
       
      document.querySelector('.position').innerHTML = '3rd Place';
     }
     else if (random > 1 / 3 && random < 2 / 3) {
       result = '4th Place';
       
       document.querySelector('.position').innerHTML = '4th Place';
       
     } else if (random > 2 / 3 && random < 1) {
       result = '5th Place';
       
       document.querySelector('.position').innerHTML = '5th Place';
     }
    }
    
    if (result === '1st Place') {
      cash += 750;
      exp += 300;
      
      document.querySelector('.cash').innerHTML = 750;
      document.querySelector('.exp').innerHTML = 300;
    } else if (result === '2nd Place') {
      cash += 500;
      exp += 200;
      
      document.querySelector('.cash').innerHTML = 500;
      document.querySelector('.exp').innerHTML = 200;
    } else if (result === '3rd Place') {
      cash += 250;
      exp += 100;
      
      document.querySelector('.cash').innerHTML = 250;
      document.querySelector('.exp').innerHTML = 100;
    } else if (result === '4th Place') {
        if (random > 0 && random < 1 / 3)
        {
          cash += 200;
          exp += 30;
          
      document.querySelector('.cash').innerHTML = 200;
      document.querySelector('.exp').innerHTML = 30;
        } else if (random > 1 / 3 && random < 2 / 3) {
          cash += 25;
          exp += 35;
          
      document.querySelector('.cash').innerHTML = 25;
      document.querySelector('.exp').innerHTML = 35;
        } else if (random > 2 / 3 && random < 1) {
          cash += 10;
          exp += 50;
          
      document.querySelector('.cash').innerHTML = 10;
      document.querySelector('.exp').innerHTML = 50;
        }
    } else if (result === '5th Place') {
      if (random > 0 && random < 1 / 3)
        {
          cash += 1;
          exp += 10;
          
      document.querySelector('.cash').innerHTML = 1;
      document.querySelector('.exp').innerHTML = 10;
        } else if (random > 1 / 3 && random < 2 / 3) {
          cash += 20;
          exp += 5;
          
      document.querySelector('.cash').innerHTML = 20;
      document.querySelector('.exp').innerHTML = 5;
        } else if (random > 2 / 3 && random < 1) {
          cash += 100;
          exp += 8;
          
      document.querySelector('.cash').innerHTML = 6;
      document.querySelector('.exp').innerHTML = 8;
        }
    }
    console.log(`${cash} && ${exp}`)
    
    localStorage.setItem('cash', JSON.stringify(cash));
    localStorage.setItem('exp', JSON.stringify(exp));
    
    document.querySelector('.total-exp').innerHTML = exp;
    document.querySelector('.total-cash').innerHTML = cash;
    
   if (result === '4th Place' || result === '5th Place') {
     
     document.querySelector('.popup').classList.add('reddish');
   } else {
     document.querySelector('.popup').classList.remove('reddish');
   }
    
    return result;
}

function race() {
  allExpHandle();
  
  raced += 1;
  totalRaced += 1;
 
  localStorage.setItem('raced', JSON.stringify(raced))
  
  console.log(raced)
  
  if (raced === 3) {
    unclickableBtn();
  }
}

const expOne = document.querySelector('.exp-1')
const expTwo = document.querySelector('.exp-2')
const expThree = document.querySelector('.exp-3')
const expFour = document.querySelector('.exp-4')
const expFive = document.querySelector('.exp-5')

/*function nextMissionsOne() {
  if (raced === 3) {
    document.querySelector('.missions-1-btn').style.display = 'block';
    document.querySelector('.missions-1-progress').innerHTML = raced;
    
    raced = 0;
    
    localStorage.setItem('raced', JSON.stringify(raced));
  }
  
  if (raced === 2) {
    document.querySelector('.missions-1-progress').innerHTML = 2;
  }
  
  if (raced === 1) {
    document.querySelector('.missions-1-progress').innerHTML = 1;
  }
}

function nextMissionsTwo() {
  if (raced === 3) {
    document.querySelector('.missions-2-btn').style.display = 'block';
    document.querySelector('.missions-2-progress').innerHTML = raced;
    
    raced = 0;
    
    localStorage.setItem('raced', JSON.stringify(raced));
  }
  
  if (raced === 2) {
    document.querySelector('.missions-2-progress').innerHTML = raced;
  }
  
  if (raced === 1) {
    document.querySelector('.missions-2-progress').innerHTML = raced;
  }
}
*/
// Simulate a race by calling the function

document.querySelector('.total-exp').innerHTML = exp;
document.querySelector('.total-cash').innerHTML = cash;
 document.querySelector('.total-gcoins').innerHTML = gCoins;