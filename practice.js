let powerTotal = 0;
let shineTotal = 0;
let blingTotal = 0;
let driftTotal = 0;
let noiseTotal = 0;
let handlingTotal = 0;
let acclTotal = 0;
let speedTotal = 0;
let steerTotal = 0;
 
function deductCash(points) {
  cash -= points * 100;
  document.querySelector('.total-cash').innerHTML = cash
}

/////////////////////////////
const powerInput = document.querySelector('.power');
const shineInput = document.querySelector('.shine');
const blingInput = document.querySelector('.bling'); 
const driftInput = document.querySelector('.drift');
const noiseInput = document.querySelector('.noise');
const handlingInput = document.querySelector('.handling');
const acclInput = document.querySelector('.acceleration');
const speedInput = document.querySelector('.speed');
const steerInput = document.querySelector('.steering');

const powerValue = powerInput.value;
const isValid = /^\d+$/.test(powerValue);

function validateInput() {
  //  if (isNaN(5)) {
  //   console.log('invalid')
  //  } else {
  //   console.log('valid')
  //  }
  if (isNaN(parseInt(powerValue))) {
    console.log(typeof(parseInt(powerValue)))
  } else {
    console.log(99)
  }
}

const valueObj = {
    power: 0,
    shine: 0,
    bling: 0,
    drift: 0,
    noise: 0,
    handling: 0,
    acceleration: 0,
    speed: 0,
    steering: 0
}
/////////////////////////////////


function showPop() {
 document.querySelector('.practice-pop').classList.add('show-pop');

/////////////////////////////////////
if (cash > 1) {
if (powerInput.value === '') {
  powerInput.value = 0;
  document.querySelector('.power-value').innerHTML = 0;
} else {
  powerTotal += parseInt(powerInput.value);
  valueObj.power += parseInt(powerInput.value);
  document.querySelector('.power-value').innerHTML = powerInput.value;
  deductCash(powerInput.value)
}

if (shineInput.value === '') {
  shineInput.value = 0;
  document.querySelector('.shine-value').innerHTML = 0;
} else {
 shineTotal += parseInt(shineInput.value);
 valueObj.shine += parseInt(shineInput.value);
 document.querySelector('.shine-value').innerHTML = shineInput.value;
 deductCash(shineInput.value)
}

if (blingInput.value === '') {
  blingInput.value = 0;
  document.querySelector('.bling-value').innerHTML = 0;
} else {
 blingTotal += parseInt(blingInput.value);
 valueObj.bling += parseInt(blingInput.value);
 document.querySelector('.bling-value').innerHTML = blingInput.value;
 deductCash(blingInput.value)
}

if (driftInput.value === '') {
  driftInput.value = 0;
  document.querySelector('.drift-value').innerHTML = 0;
}
else {
  driftTotal += parseInt(driftInput.value);
  valueObj.drift += parseInt(driftInput.value);
  document.querySelector('.drift-value').innerHTML = driftInput.value;
  deductCash(driftInput.value)
}

if (noiseInput.value === '') {
  noiseInput.value = 0;
  document.querySelector('.noise-value').innerHTML = 0;
}
else {
 noiseTotal += parseInt(noiseInput.value);
 valueObj.noise += parseInt(noiseInput.value);
 document.querySelector('.noise-value').innerHTML = noiseInput.value;
 deductCash(noiseInput.value)
}

if (handlingInput.value === '') {
    handlingInput.value = 0;
    document.querySelector('.handling-value').innerHTML = 0;
} else { 
  handlingTotal += parseInt(handlingInput.value);
  valueObj.handling += parseInt(handlingInput.value);
  document.querySelector('.handling-value').innerHTML = handlingInput.value;
  deductCash(handlingInput.value)
}

if (acclInput.value === '') {
    acclInput.value = 0;
    document.querySelector('.acceleration-value').innerHTML = 0;
} else { 
  acclTotal += parseInt(acclInput.value);
  valueObj.acceleration += parseInt(acclInput.value);
  document.querySelector('.acceleration-value').innerHTML = acclInput.value;
  deductCash(acclInput.value)
}

if (speedInput.value === '') {
    speedInput.value = 0;
    document.querySelector('.speed-value').innerHTML = 0;
} else { 
  speedTotal += parseInt(speedInput.value);
  valueObj.speed += parseInt(speedInput.value);
  document.querySelector('.speed-value').innerHTML = speedInput.value;
  deductCash(speedInput.value)
}

if (steerInput.value === '') {
    steerInput.value = 0;
    document.querySelector('.steering-value').innerHTML = 0;
} else { 
  steerTotal += parseInt(steerInput.value);
  valueObj.steering += parseInt(steerInput.value);
  document.querySelector('.steering-value').innerHTML = steerInput.value;
  deductCash(steerInput.value)
}

}

else {
    console.log('no cash')
}

console.log(valueObj)
//////////////////////////////////////

//////////////////////////////////////

 document.querySelector('.shine-total').innerHTML = parseInt(shineTotal);
 document.querySelector('.bling-total').innerHTML = parseInt(blingTotal);
 document.querySelector('.speed-total').innerHTML = parseInt(speedTotal);
 document.querySelector('.noise-total').innerHTML = parseInt(noiseTotal);
 document.querySelector('.handling-total').innerHTML = parseInt(handlingTotal);
 document.querySelector('.drift-total').innerHTML = parseInt(driftTotal);
 document.querySelector('.steering-total').innerHTML = parseInt(steerTotal);
 document.querySelector('.power-total').innerHTML = parseInt(powerTotal);
 document.querySelector('.acceleration-total').innerHTML = parseInt(acclTotal);
/////////////////////////////////////

if (powerTotal === NaN) {
   document.querySelector('.power-total').innerHTML = 0;
} else {
    document.querySelector('.power-total').innerHTML = parseInt(powerTotal);
}
  ////////////////////////
  powerInput.value = '';
  shineInput.value = '';
  blingInput.value = '';
  driftInput.value = '';
  noiseInput.value = '';
  handlingInput.value = ''; 
  speedInput.value = '';
  steerInput.value = '';
  acclInput.value = ''; 
  /////////////////////////
}

function removePop() {
  document.querySelector('.practice-pop').classList.remove('show-pop')
}