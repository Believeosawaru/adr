let mins = 4;
let sec = 0;

let fuel = 10 //JSON.parse(localStorage.getItem('fuel'));

function fuelTimer() {
const intervalId = setInterval(() => {
  sec -= 1;
  
  if (sec < 0) {
    sec = 59;
    mins -= 1;
    
    if (mins < 1) {
      fuel += 1;
      document.querySelector('.total-fuel').innerHTML = fuel;
      mins = 3;
    }
  }
  
  if (fuel === 10) {
    clearInterval(intervalId);
  }
  
  if (sec < 10)
   {
     document.querySelector('.fuel-timer').innerHTML = `${mins}: 0${sec}`
   } else {
     document.querySelector('.fuel-timer').innerHTML = `${mins}: ${sec}`
   }

  localStorage.setItem('fuel', JSON.stringify(fuel));
}, 1000)
}
fuelTimer()
document.querySelector('.total-fuel').innerHTML = fuel;