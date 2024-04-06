const collectVehicleText = 'Use this item to collect the vehicle!';
const collectItemText = 'Equip this item to on a vehicle!';

let accum = '';
const inventoryItems = [/*
  {
    imgSrc: 'vehicles/1970-oldie-444.png',
    description: `${collectVehicleText}`,
    btnClass: 'use-one',
    btnFunc: 'oldieInven()'
  },
  {
    imgSrc: 'vehicles/gcw-r38.png',
    description: `${collectVehicleText}`,
    btnClass: 'use-two',
    btnFunc: 'gcwInven()'
  },
  {
    imgSrc: 'vehicles/genesis-119-turbo-g.png',
    description: `${collectVehicleText}`,
    btnClass: 'use-three',
    btnFunc: 'gtgInven()'
  },
  {
    imgSrc: 'car-parts/advanced-fuel-injection-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-four',
    btnFunc: 'afieInven()'
  },
  {
    imgSrc: 'car-parts/designer-steering-wheel.png',
    description: `${collectItemText}`,
    btnClass: 'use-five',
    btnFunc: 'dsInven()'
  },
  {
    imgSrc: 'car-parts/duel-racing-exhaust.png',
    description: `${collectItemText}`,
    btnClass: 'use-six',
    btnFunc: 'dreInven()'
  },
  {
    imgSrc: 'car-parts/fancy-headlights.png',
    description: `${collectItemText}`,
    btnClass: 'use-seven',
    btnFunc: 'fhInven()'
  },
  {
    imgSrc: 'car-parts/fancy-hood-ornament.png',
    description: `${collectItemText}`,
    btnClass: 'use-eight',
    btnFunc: 'fhoInven()'
  },
  {
    imgSrc: 'car-parts/high-end-spark-plug.png',
    description: `${collectItemText}`,
    btnClass: 'use-nine',
    btnFunc: 'hespInven()'
  },
  {
    imgSrc: 'car-parts/high-tech-fuel-injection-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-ten',
    btnFunc: 'htfieInven()'
  },
  {
    imgSrc: 'car-parts/luxurious-hood-ornament.png',
    description: `${collectItemText}`,
    btnClass: 'use-eleven',
    btnFunc: 'lhoInven()'
  },
  {
    imgSrc: 'car-parts/luxurious-interior.png',
    description: `${collectItemText}`,
    btnClass: 'use-twelve',
    btnFunc: 'liInven()'
  },
  {
    imgSrc: 'car-parts/luxury-gold-embedded-rims.png',
    description: `${collectItemText}`,
    btnClass: 'use-thirteen',
    btnFunc: 'lgerInven()'
  },
  {
    imgSrc: 'car-parts/luxury-steering-wheel.png',
    description: `${collectItemText}`,
    btnClass: 'use-fourteen',
    btnFunc: 'lswInven()'
  },
  {
    imgSrc: 'car-parts/mystery-corp-high-tech-super-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-fifteen',
    btnFunc: 'mchtseInven()'
  },
  {
    imgSrc: 'car-parts/penny-corp-basic-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-sixteen',
    btnFunc: 'pcbeInven()'
  },
  {
    imgSrc: 'car-parts/penny-corp-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-seventeen',
    btnFunc: 'pceInven()'
  },
  {
    imgSrc: 'car-parts/penny-corp-exhaust.png',
    description: `${collectItemText}`,
    btnClass: 'use-eighteen',
    btnFunc: 'pcexInven()'
  },
  {
    imgSrc: 'car-parts/penny-corp-steering-wheel.png',
    description: `${collectItemText}`,
    btnClass: 'use-nineteen',
    btnFunc: 'pcsInven()'
  },
  {
    imgSrc: 'car-parts/quality-brake-disc.png',
    description: `${collectItemText}`,
    btnClass: 'use-twenty',
    btnFunc: 'qbdInven()'
  },
  {
    imgSrc: 'car-parts/racing-exhaust-with-flame.png',
    description: `${collectItemText}`,
    btnClass: 'use-twenty-one',
    btnFunc: 'rewfInven()'
  },
  {
    imgSrc: 'car-parts/spark-plug.png',
    description: `${collectItemText}`,
    btnClass: 'use-twenty-two',
    btnFunc: 'spInven()'
  },
  {
    imgSrc: 'car-parts/stanley-stevenson-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-twenty-three',
    btnFunc: 'ssInven()'
  },
  {
    imgSrc: 'car-parts/super-luxurious-hood-ornament.png',
    description: `${collectItemText}`,
    btnClass: 'use-twenty-four',
    btnFunc: 'slhoInven()'
  },
  {
    imgSrc: 'car-parts/v2-deluxe-bicycle-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-twenty-five',
    btnFunc: 'dbeInven()'
  },
  {
    imgSrc: 'car-parts/v4-high-end-motorbike-engine.png',
    description: `${collectItemText}`,
    btnClass: 'use-twenty-six',
    btnFunc: 'hemeInven()'
  }
*/]

function lengthFix() {
  if (inventoryItems.length === 1) {
    // document.querySelector('.inven-page').style.backgroundColor = 'blue'
  // document.querySelector('.in-item').style.width = '50%'
} else {
  // document.querySelector('.in-item').style.width = '90%';
}
}
//lengthFix()

function oldieInven() {
  document.querySelector('.item-0').remove();
}

function gcwInven() {
  document.querySelector('.item-1').remove();
}

 function gtgInven() {
  document.querySelector('.item-2').remove();
}

function afieInven() {
  document.querySelector('.item-3').remove();
}

function dsInven() {
  document.querySelector('.item-4').remove();
}

function dreInven() {
  document.querySelector('.item-5').remove();
}

function fhInven() {
  document.querySelector('.item-6').remove();
}

function fhoInven() {
  document.querySelector('.item-7').remove();
}

function hespInven() {
  document.querySelector('.item-8').remove();
}

function htfieInven() {
  document.querySelector('.item-9').remove();
}

function lhoInven() {
  document.querySelector('.item-10').remove();
}

function liInven() {
  document.querySelector('.item-11').remove();
}

function lgerInven() {
  document.querySelector('.item-12').remove();
}

function lswInven() {
  document.querySelector('.item-13').remove();
}

function mchtseInven() {
  document.querySelector('.item-14').remove();
}

function pcbeInven() {
  document.querySelector('.item-15').remove();
}

function pceInven() {
  document.querySelector('.item-16').remove();
}

function pcexInven() {
  document.querySelector('.item-17').remove();
}

function pcsInven() {
  document.querySelector('.item-18').remove();
}

function qbdInven() {
  document.querySelector('.item-19').remove();
}

function rewfInven() {
  document.querySelector('.item-20').remove();
}

function spInven() {
  document.querySelector('.item-21').remove();
}

function ssInven() {
  document.querySelector('.item-22').remove();
}

function slhoInven() {
  document.querySelector('.item-23').remove();
}

function dbeInven() {
  document.querySelector('.item-24').remove();
}

function hemeInven() {
  document.querySelector('.item-25').remove();
}
function displayGoodies() {
  accum = '';
inventoryItems.forEach((item, index) => {
  const html = `
  <div class="in-item item-${index} gtg-item">
  <div class="third-row"><img src="${item.imgSrc}" class="in-image"></div>
  <p>${item.description}</p>
  <button class="use-btn ${item.btnClass}" onclick="lengthFix(); ${item.btnFunc};">Use</button>
 </div>
  `;
  accum += html;
})
document.querySelector('.inven-page').innerHTML = accum;
}
displayGoodies()


function invenPopup() {
  document.querySelector('.inven-popup').classList.add('inven-show')
}

function exitInvenPopup() {
  document.querySelector('.inven-popup').classList.remove('inven-show')
}