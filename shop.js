const shopItemsVehicles = [
  {
    name: 'The Parachute',
    id: 'fa-3-ra-sa-ta-3-ta-2-ma',
    imageSrc: '/vehicles/parachute.png',
    classId: 'row-div-1',
    btnFunc: 'parachute()',
    availability: ''
  },
  {
    name: 'The War Fighter',
    id: 'sa-2-ca-4-na-da-3-ta-2-ma',
    imageSrc: '/vehicles/war-fighter.png',
    classId: 'div-2',
    btnFunc: 'warFighter()',
    availability: 'Available at level 30'
  },
  {
    name: 'The Private Jet',
    id: 'ta-ha-3-ra-da-3-ta-2-ma',
    imageSrc: '/vehicles/private-jet.png',
    classId: 'div-2',
    btnFunc: 'privateJet()',
    availability: ''
  }
]

const shopItemsParts = [
  {
    name: 'Penny Corp. Steering Wheel',
    id: 'fa-3-ra-sa-ta-pa-1-ra-ta',
    imageSrc: '/car-parts/penny-corp-steering-wheel.png',
    classId: 'row-div-1',
    btnFunc: 'pcSteering()',
    availability: ''
  },
  {
    name: 'Stanley Stevenson Twin Engine',
    id: 'sa-2-ca-4-na-da-pa-1-ra-ta',
    imageSrc: '/car-parts/stanley-stevenson-engine.png',
    classId: 'div-2',
    btnFunc: 'ssEngine()',
    availability: ''
  },
  {
    name: 'Penny Corp. Basic Engine',
    id: 'ta-ha-3-ra-da-3-ta-2-ma',
    imageSrc: '/car-parts/penny-corp-basic-engine.png',
    classId: 'div-2',
    btnFunc: 'pcBasicEngine()',
    availability: ''
  },
  {
    name: 'Penny Corp. Basic Exhaust',
    id: 'fa-4-5-ra-ta-ha-3-ta-2-ma',
    imageSrc: '/car-parts/penny-corp-exhaust.png',
    classId: 'row-div-1',
    btnFunc: 'pcExhaust()',
    availability: ''
  },
  {
    name: 'Fancy Hood Ornament',
    id: 'fa-3-fa-ta-ha-3-ta-2-ma',
    imageSrc: '/car-parts/fancy-hood-ornament.png',
    classId: 'row-div-1',
    btnFunc: 'hoodOrnament()',
    availability: ''
  },
  {
    name: 'Basic Spark Plug',
    id: 'sa-3-xa-ta-ha-3-ta-2-ma',
    imageSrc: '/car-parts/spark-plug.png',
    classId: 'div-2',
    btnFunc: 'sparkPlug()',
    availability: ''
  },
  {
    name: 'Penny Corp. Complex Engine',
    id: 'sa-2-va-2-na-3-ta-2-ma',
    imageSrc: '/car-parts/penny-corp-engine.png',
    classId: 'div-2',
    btnFunc: 'pcCompEngine()',
    availability: ''
  },
  {
    name: 'Designer Steering Wheel',
    id: 'ea-3-ga-ha-ta-3-ta-2-ma',
    imageSrc: '/car-parts/designer-steering-wheel.png',
    classId: 'row-div-1',
    btnFunc: 'designerWheel()',
    availability: ''
  }
]

const shopItemsNitro = [
  {
    name: 'Advanced Fuel Injection Engine',
    id: 'fa-3-ra-sa-ta-na-3-ta-ra-4',
    imageSrc: '/car-parts/advanced-fuel-injection-engine.png',
    classId: 'row-div-1',
    btnFunc: 'advancedEjection()',
    availability: ''
  },
  {
    name: 'Racing Exhaust with flame',
    id: 'sa-2-ca-4-na-da-na-3-ta-ra-4',
    imageSrc: '/car-parts/racing-exhaust-with-flame.png',
    classId: 'div-2',
    btnFunc: 'exhaustFlame()',
    availability: ''
  },
  {
    name: 'Duel Racing Exhaust',
    id: 'ta-ha-3-ra-da-na-3-ta-ra-4',
    imageSrc: '/car-parts/duel-racing-exhaust.png',
    classId: 'div-2',
    btnFunc: 'duelRacingExhaust()',
    availability: ''
  },
  {
    name: 'Luxurious Interior',
    id: 'fa-4-5-ra-ta-ha-na-3-ta-ra-4',
    imageSrc: '/car-parts/luxurious-interior.png',
    classId: 'row-div-1',
    btnFunc: 'luxInterior()',
    availability: ''
  },
  {
    name: 'Fancy Headlights',
    id: 'fa-3-fa-ta-ha-na-3-ta-ra-4',
    imageSrc: '/car-parts/fancy-headlights.png',
    classId: 'row-div-1',
    btnFunc: 'fancyHeadlights()',
    availability: ''
  },
  {
    name: 'Super Luxurious Hood Ornament',
    id: 'sa-3-xa-ta-ha-na-3-ta-ra-4',
    imageSrc: '/car-parts/super-luxurious-hood-ornament.png',
    classId: 'div-2',
    btnFunc: 'superLuxOrnament()',
    availability: ''
  },
  {
    name: 'Luxury Gold Embedded Rims',
    id: 'sa-2-va-2-na-na-3-ta-ra-4',
    imageSrc: '/car-parts/luxury-gold-embedded-rims.png',
    classId: 'div-2',
    btnFunc: 'luxGoldRims()',
    availability: ''
  },
  {
    name: 'Mystery Corp. High Tech Super Engine',
    id: 'ea-3-ga-ha-ta-na-3-ta-ra-4',
    imageSrc: '/car-parts/mystery-corp-high-tech-super-engine.png',
    classId: 'row-div-1',
    btnFunc: 'mysteryHighEngine()',
    availability: ''
  }
]

let accumulatorOne = '';
let accumulatorTwo = '';
let accumulatorThree = '';

shopItemsVehicles.forEach((item, index) => {
  const html = `
  <div class="shop-div" id="${item.classId}">
  <div class="img--txt">
  <img src="${item.imageSrc}" class="purchase-image">
  <p>${item.availability}</p>
  </div>
  <p>"${item.name}"</p>
  <button class="shop-vehicles-btn-${index}" onclick="shopPopup(); ${item.btnFunc}">View</button>
  <div class="third-row">
  <div class="not-available shop-vehicles-${index}"><p>NOT AVAILABLE</p></div>
  </div>
  </div> 
  `
  accumulatorOne += html;
})
document.querySelector('.shop-vehicles').innerHTML = accumulatorOne;

shopItemsParts.forEach((item, index) => {
  const html = `
  <div class="shop-div" id="${item.classId}">
  <div class="img--txt">
  <img src="${item.imageSrc}" class="purchase-image">
  <p>${item.availability}</p>
  </div>
  <p>"${item.name}"</p>
  <button class="shop-parts-btn-${index}" onclick="shopPopup(); ${item.btnFunc}">View</button>
  <div class="third-row">
  <div class="not-available shop-parts-${index}"><p>NOT AVAILABLE</p></div>
  </div>
  </div> 
  `
  accumulatorTwo += html;
})
document.querySelector('.shop-car-parts').innerHTML = accumulatorTwo;

shopItemsNitro.forEach((item, index) => {
  const html = `
  <div class="shop-div" id="${item.classId}">
  <div class="img--txt">
  <img src="${item.imageSrc}" class="purchase-image">
  <p>${item.availability}</p>
  </div>
  <p>"${item.name}"</p>
  <button class="shop-nitro-btn-${index}" onclick="shopPopup(); ${item.btnFunc}">View</button>
  <div class="third-row">
  <div class="not-available shop-nitro-${index}"><p>NOT AVAILABLE</p></div>
  </div>
  </div> 
  `
  accumulatorThree += html;
})
document.querySelector('.nitro-car-parts').innerHTML = accumulatorThree;


function shopPopup() {
  document.querySelector('.shop-popup').classList.add('shop-p-show')
}

function exitShopPopup() {
  document.querySelector('.shop-popup').classList.remove('shop-p-show')
}

function shopCarParts() {
  document.querySelector('.shop-vehicles').style.display = 'none'
  document.querySelector('.nitro-car-parts').style.display = 'none'
  document.querySelector('.shop-car-parts').style.display = 'grid'
}

function shopVehicles() {
  document.querySelector('.shop-car-parts').style.display = 'none'
  document.querySelector('.shop-vehicles').style.display = 'grid'
document.querySelector('.nitro-car-parts').style.display = 'none'
}
shopVehicles()

function nitroCarParts() {
  document.querySelector('.shop-car-parts').style.display = 'none'
  document.querySelector('.shop-vehicles').style.display = 'none'
  document.querySelector('.nitro-car-parts').style.display = 'grid'
}

function parachute() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/vehicles/parachute.png" class="shop-img">
 <p><span>Name:</span> "Parachute" <br> <span>Price:</span> $10,000 <br> <span>Details:</span> used for specific missions</p>
 <button class="shopping-btn" onclick="buyParachute();">Buy</button>
  `
}

function warFighter() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/vehicles/war-fighter.png" class="shop-img">
 <p><span>Name:</span> "The War Fighter" <br> <span>Price:</span> $1,500,000 <br> <span>Details:</span> You're going to need this, eventually. And for good reason. Save up! Available at level 30, can't do challenges, only specific races during specific missions.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-war-f-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-war-f-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
      <div class="stats-zero-m">
         <p>MASTERY <i class="fa fa-star"></i></p>
        <div class="star-st" style="margin-top: -7px;">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
       </div> 
       </div> 
 <button class="shopping-btn" onclick="buyWarFighter();">Buy</button>
       </div>
  `
}

function privateJet() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/vehicles/private-jet.png" class="shop-img">
 <p><span>Name:</span> "The Private Jet" <br> <span>Price:</span> $1,000,000 <br> <span>Details:</span> Sometimes, you're going to have to travel in style, and a car won't cut it. But where will this take you? Can't do challenges, only specific races during specific missions.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-p-j-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>20 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-p-j-f-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>30 / 100</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>00 / 100</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>00 / 100</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-p-j-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>00 / 100</p>
       </div>
       
      <div class="stats-zero-m">
         <p>MASTERY <i class="fa fa-star"></i></p>
        <div class="star-st" style="margin-top: -7px;">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
       </div> 
       </div> 
 <button class="shopping-btn" onclick="buyPrivateJet();">Buy</button>
       </div>
  `
}

function pcSteering() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/penny-corp-steering-wheel.png" class="shop-img">
 <p><span>Name:</span> "Penny Corp. Steering Wheel" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,000 <br> <span>Details:</span> A luxurious steering wheel for style and comfort</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Handling: +15</p>
    <p class="bold">Steering: +15</p>
 <button class="shopping-btn" onclick="buyPcSteering();">Buy <img src="in-game-cash.png" class="in-game-cash"> 1,000</button>
  `
}

function ssEngine() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/stanley-stevenson-engine.png" class="shop-img">
 <p><span>Name:</span> "Stanley Stevenson Twin Engine" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 5,000 <br> <span>Details:</span> A two stroke Stanley Stevenson engine for a bit of extra power and speed (For Bikes Only)</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +10</p>
    <p class="bold">Steering: +15</p>
    <p class="bold">Power: +15</p>
 <button class="shopping-btn" onclick="buySsEngine();">Buy <img src="in-game-cash.png" class="in-game-cash"> 5,000</button>
  `
}

function pcBasicEngine() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/penny-corp-basic-engine.png" class="shop-img">
 <p><span>Name:</span> "Penny Corp. Basic Engine" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 10,000 <br> <span>Details:</span> A basic engine that will get you from A to B.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +15</p>
    <p class="bold">Steering: +15</p>
    <p class="bold">Power: +15</p>
 <button class="shopping-btn" onclick="buyPcBasicEngine();">Buy <img src="in-game-cash.png" class="in-game-cash"> 10,000</button>
  `
}

function pcExhaust() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/penny-corp-basic-engine.png" class="shop-img">
 <p><span>Name:</span> "Penny Corp. Basic Exhaust" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,000 <br> <span>Details:</span> A Basic Exhaust </p>
       <h4>STATS</h4>
    <p class="bold margin-top">Power: +10</p>
    <p class="bold">Noise: +10</p>
 <button class="shopping-btn" onclick="buyPcExhaust();">Buy <img src="in-game-cash.png" class="in-game-cash"> 1,000</button>
  `
}

function hoodOrnament() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/fancy-hood-ornament.png" class="shop-img">
 <p><span>Name:</span> "Fancy Hood Ornament" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 8,000 <br> <span>Details:</span> A fancy Hood Ornament
 </p>
       <h4>STATS</h4>
    <p class="bold margin-top">Shine: +15</p>
    <p class="bold">Bling: +15</p>
 <button class="shopping-btn" onclick="buyHoodOrnament();">Buy <img src="in-game-cash.png" class="in-game-cash"> 8,000</button>
  `
}

function sparkPlug() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/spark-plug.png" class="shop-img">
 <p><span>Name:</span> "Basic Spark Plugs" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 2,000 <br> <span>Details:</span>A simple and basic Spark Plug</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Acceleration: +5</p>
    <p class="bold">Power: +5</p>
 <button class="shopping-btn" onclick="buySparkPlug();">Buy <img src="in-game-cash.png" class="in-game-cash"> 2,000</button>
  `
}

function pcCompEngine() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/penny-corp-engine.png" class="shop-img">
 <p><span>Name:</span> "Penny Corp. Complex Engine" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 20,000 <br> <span>Details:</span>A complex Engine useful for most cars</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +30</p>
    <p class="bold">Acceleration: +30</p>
    <p class="bold">Power: +30</p>
    <p class="bold">Noise: +30</p>
 <button class="shopping-btn" onclick="buyPcCompEngine();">Buy <img src="in-game-cash.png" class="in-game-cash"> 20,000</button>
  `
}

function designerWheel() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/designer-steering-wheel.png" class="shop-img">
 <p><span>Name:</span> "Designer Steering Wheel" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 2,500 <br> <span>Details:</span>A designer Steering Wheel for better comfort and control </p>
       <h4>STATS</h4>
    <p class="bold margin-top">Handling: +20</p>
    <p class="bold">Steering: +20</p>
 <button class="shopping-btn" onclick="buyDesignerWheel();">Buy <img src="in-game-cash.png" class="in-game-cash"> 2,500</button>
  `
}

function advancedEjection() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/advanced-fuel-injection-engine.png" class="shop-img">
 <p><span>Name:</span> "Advanced Fuel Injection Engine" <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 25 <br> <span>Details:</span> This Advanced Fuel Injection Engine is sure to leave your opponents wondering.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +75</p>
    <p class="bold">Acceleration: +75</p>
    <p class="bold">Power: +75</p>
    <p class="bold">Noise: +25</p>
 <button class="shopping-btn" onclick="buyAdvanvcecEjection();">Buy <img src="nitro.png" class="in-game-cash"> 25</button>
  `
}

function exhaustFlame() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/racing-exhaust-with-flame.png" style="height: 130px;" class="shop-img">
 <p><span>Name:</span> "Racing Exhaust with flame" <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 25 <br> <span>Details:</span> Flames are cool. Flame out you your exhaust is cooler!</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Acceleration: +75</p>
    <p class="bold">Noise: +75</p>
    <p class="bold">Bling: +25</p>
 <button class="shopping-btn" onclick="buyExhaustFlame();">Buy <img src="nitro.png" class="in-game-cash"> 25</button>
  `
}

function duelRacingExhaust() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/duel-racing-exhaust.png" class="shop-img">
 <p><span>Name:</span> "Duel Racing Exhaust" <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 17 <br> <span>Details:</span> This efficient fuel exhaust system will allow greater driving comfort.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Acceleration: +25</p>
    <p class="bold">Comfort: +25</p>
 <button class="shopping-btn" onclick="buyDuelRacingExhaust();">Buy <img src="nitro.png" class="in-game-cash"> 17</button>
  `
}

function luxInterior() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/luxurious-interior.png" class="shop-img">
 <p><span>Name:</span> "Luxurious Interior " <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 50 <br> <span>Details:</span> A full luxurious Interior package.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Handling: +25</p>
    <p class="bold">Steering: +25</p>
    <p class="bold">Bling: +50</p>
    <p class="bold">Comfort: +50</p>
 <button class="shopping-btn" onclick="buyLuxInterior();">Buy <img src="nitro.png" class="in-game-cash"> 50</button>
  `
}

function fancyHeadlights() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/fancy-headlights.png" class="shop-img">
 <p><span>Name:</span> "Fancy Headlights" <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 15 <br> <span>Details:</span> A full luxurious Interior package.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Shine: +25</p>
    <p class="bold">Bling: +25</p>
 <button class="shopping-btn" onclick="buyFancyHeadlights();">Buy <img src="nitro.png" class="in-game-cash"> 15</button>
  `
}

function superLuxOrnament() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/super-luxurious-hood-ornament.png" class="shop-img">
 <p><span>Name:</span> "Super Luxurious Hood Ornament" <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 20 <br> <span>Details:</span> Status is everything. And this hood ornament displays plenty</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Shine: +40</p>
    <p class="bold">Bling: +40</p>
 <button class="shopping-btn" onclick="buySuperLuxOrnament();">Buy <img src="nitro.png" class="in-game-cash"> 20</button>
  `
}

function luxGoldRims() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/luxury-gold-embedded-rims.png" class="shop-img">
 <p><span>Name:</span> "Luxury Gold Embedded Rims" <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 50 <br> <span>Details:</span> It almost doesn’t get more Luxurious than this! A must have for any lucurious racer!</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Shine: +70</p>
    <p class="bold">Bling: +70</p>
 <button class="shopping-btn" onclick="buyLuxGoldRims();">Buy <img src="nitro.png" class="in-game-cash"> 50</button>
  `
}

function mysteryHighEngine() {
  document.querySelector('.shop-text').innerHTML = `
 <img src="/car-parts/mystery-corp-high-tech-super-engine.png" class="shop-img">
 <p><span>Name:</span> "Mystery Corp. High Tech Super Engine" <br> <span>Price:</span> <img src="nitro.png" class="in-game-cash"> 100 <br> <span>Details:</span> The Ultimate Engine anyone wants to have.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +100</p>
    <p class="bold">Acceleration: +100</p>
    <p class="bold">Power: +100</p>
    <p class="bold">Noise: +50</p>
    <p class="bold">Bling: +50</p>
 <button class="shopping-btn" onclick="buyMysteryHighEngine();">Buy <img src="nitro.png" class="in-game-cash"> 100</button>
  `
}