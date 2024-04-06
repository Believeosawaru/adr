function purchasePopup() {
  document.querySelector('.purchase-popup').classList.add('purchase-p-show')
}

function exitPurchasePopup() {
  document.querySelector('.purchase-popup').classList.remove('purchase-p-show')
}

function purchaseVehicles() {
document.querySelector('.purchase-car-parts').style.display = 'none'
  document.querySelector('.purchase-vehicles').style.display = 'block'
document.querySelector('.purchase-packages').style.display = 'none'
}

function purchaseCarParts() {
document.querySelector('.purchase-car-parts').style.display = 'block'
  document.querySelector('.purchase-vehicles').style.display = 'none'
document.querySelector('.purchase-packages').style.display = 'none'
  document.querySelector('.purchase-car-parts').innerHTML = `
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/car-parts/v2-deluxe-bicycle-engine.png" class="purchase-image">
  </div>
  <p>"V2 Deluxe Bicycle Engine"</p>
  <button onclick="purchasePopup(); deluxeEngine()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/car-parts/luxurious-hood-ornament.png" class="purchase-image">
  </div>
  <p>"Luxurious Hood Ornament"</p>
  <button onclick="purchasePopup(); luxHoodOrnament();">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/car-parts/v4-high-end-motorbike-engine.png" class="purchase-image">
  </div>
  <p>"V4 High End Motorbike Engine"</p>
  <button onclick="purchasePopup(); highEndBikeEngine()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/car-parts/high-tech-fuel-injection-engine.png" class="purchase-image">
  </div>
  <p>"High Tech Fuel Injection Engine"</p>
  <button onclick="purchasePopup(); highTechInjection();">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/car-parts/quality-shock-breakers.png" class="purchase-image">
  </div>
  <p>"Quality Shock Breakers"</p>
  <button onclick="purchasePopup(); shockBreakers()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/car-parts/luxury-steering-wheel.png" class="purchase-image">
  </div>
  <p>"Luxury Steering Wheel"</p>
  <button onclick="purchasePopup(); luxSteeringWheel();">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/car-parts/quality-brake-disc.png" class="purchase-image">
  </div>
  <p>"Quality Brake Disc"</p>
  <button onclick="purchasePopup(); qualityDisc()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/car-parts/high-end-spark-plug.png" class="purchase-image">
  </div>
  <p>"High End Spark Plug"</p>
  <button onclick="purchasePopup(); highEndSparkPlug();">View</button>
  </div> 
  </section>
  `
}

function purchasePackages() {
document.querySelector('.purchase-car-parts').style.display = 'none'
  document.querySelector('.purchase-vehicles').style.display = 'none'
document.querySelector('.purchase-packages').style.display = 'block'

document.querySelector('.purchase-packages').innerHTML = `
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/packages/single-nitro-booster.png" class="purchase-image">
  </div>
  <p>"SINGLE NITRO BOOSTER"</p>
  <button onclick="purchasePopup(); singleNitro()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/packages/5-pack-nitro-booster.png" class="purchase-image">
  </div>
  <p>"FIVE PACK NITRO BOSSTER"</p>
  <button onclick="purchasePopup(); fiveNitro();">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
  <img src="/packages/single-fuel-package.png" class="purchase-image">
  </div>
  <p>"SINGLE FUEL PACKAGE"</p>
  <button onclick="purchasePopup(); singleFuel()">View</button>
  </div> 
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
   <img src="/packages/big-fuel-package.png" class="purchase-image">
  </div>
  <p>"BIG FUEL PACKAGE"</p>
  <button onclick="purchasePopup(); bigFuel();">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/packages/mega-fuel-package.png" class="purchase-image">
  </div>
  <p>"MEGA FUEL PACKAGE"</p>
  <button onclick="purchasePopup(); megaFuel()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
  <img src="/packages/reduction-one.jpg" class="purchase-image">
  </div>
  <p>"REDUCTION TIMER -1"</p>
  <button onclick="purchasePopup(); reductionOne()">View</button>
  </div> 
  </section>

  <section class="first-row">
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/packages/reduction-two.jpg" class="purchase-image">
  </div>
  <p>"REDUCTION TIMER -2"</p>
  <button onclick="purchasePopup(); reductionTwo();">View</button>
  </div> 
    <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/packages/reduction-three.jpg" class="purchase-image">
  </div>
  <p>"REDUCTION TIMER -3"</p>
  <button onclick="purchasePopup(); reductionThree()">View</button>
  </div> 
  </section>

  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
   <img src="/packages/sponsorship-two.jpg" class="purchase-image">
  </div>
  <p>"SPONSORSHIP BONUS X2"</p>
  <button onclick="purchasePopup(); sponsorshipTwo();">View</button>
  </div> 
    <div class="row-div-1" id="div-2">
  <div class="img--txt">
  <img src="/packages/sponsorship-three.jpg" class="purchase-image">
  </div>
  <p>"SPONSORSHIP BONUS X3"</p>
  <button onclick="purchasePopup(); sponsorshipThree()">View</button>
  </div> 
  </section>
  
    <section class="first-row">
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/packages/weekly-pass.jpg" class="purchase-image">
  </div>
  <p>"WEEK PASS"</p>
  <button onclick="purchasePopup(); weeklyPass();">View</button>
  </div> 
    <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/packages/monthly-pass.jpg" class="purchase-image">
  </div>
  <p>"MONTH PASS"</p>
  <button onclick="purchasePopup(); monthlyPass()">View</button>
  </div> 
  </section>

`
}

/* pin */
function pinnacle() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-pinnacle.png" class="shop-img">
 <p><span>Name:</span> "The Pinacle" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 2,000,000, $100<br> <span>Details:</span> The Pinnacle is the most powerful car made to date. No other car can compete.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-speed"></div>
        </div>
        <div class="black-brdr">
        <div id="stat-two-pin-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-accl"></div>
        </div>
        <div class="black-brdr">
       <div id="stat-two-pin-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-hand"></div>
        </div>
        <div class="black-brdr">
        <div id="stat-two-pin-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-steer"></div>
        </div>
        <div class="black-brdr">
        <div id="stat-two-pin-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-pin-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-drift"></div>
        </div>
        <div class="black-brdr">
        <div id="stat-two-pin-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-shine"></div>
        </div>
        <div class="black-brdr">
        <div id="stat-two-pin-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-noise"></div>
        </div>
        <div class="black-brdr">
        <div id="stat-two-pin-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-pin-bling"></div>
        </div>
        <div class="black-brdr">
        <div id="stat-two-pin-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy: <br> <img src="in-game-cash.png" class="in-game-cash"> 2,000,000</button>
<button class="shopping-btn">Buy: <br> $100</button>
       </div>
  `
}

/* bd */
function blackDeath() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-black-death.png" class="shop-img">
 <p><span>Name:</span> "The Black Death" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000, $100<br> <span>Details:</span> Pure beauty and pure power. Fear it.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-speed"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-b-d-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-accl"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-b-d-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-b-d-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-b-d-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
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
 <button class="shopping-btn">Buy; <br> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000</button>
<button class="shopping-btn">Buy: <br> $100</button>
       </div>
  `
}

/* tsc */
function theScarlett() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-scarlett.png" class="shop-img">
 <p><span>Name:</span> "The Scarlett" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000, $80<br> <span>Details:</span> Sleek, powerful, fast, superb.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-speed"></div>
        </div>
        <div class="black-brdr">
          <div id="stat-two-tsc-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-tsc-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-shine"></div>
        </div>
        <div class="black-brdr">
          <div id="stat-two-tsc-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tsc-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

/* king */
function theKing() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-king.png" class="shop-img">
 <p><span>Name:</span> "The King" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000, $100<br> <span>Details:</span> The King has almost no equal. It is simple perfection.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-speed"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-king-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-accl"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-king-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-war-f-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-king-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000</button>
<button class="shopping-btn">Buy: <br> $100</button>
       </div>
  `
}

/* gold-t */
function goldenTricycle() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-golden-tricycle.png" class="shop-img">
 <p><span>Name:</span> "The Golden Tricycle" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,000,000, $60<br> <span>Details:</span> The Ultimate Status vehicle. You don't need it, it won't win you any races, but you still want it and you know i</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>60 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>60 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-t-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>60 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>60 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-t-bling"></div>
        </div>
        <div class="black-brdr">
          <div id="stat-two-gold-t-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,000,000</button>
<button class="shopping-btn">Buy: <br> $60</button>
       </div>
  `
}

/* gold-b */
function goldenBicycle() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/gold-plated.png" class="shop-img">
 <p><span>Name:</span> "The Golden Bicycle" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000, $100<br> <span>Details:</span> The most amazing motorbike ever created.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-speed"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-accl"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-hand"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-steer"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-drift"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-shine"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-noise"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-gold-b-bling"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-gold-b-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000</button>
<button class="shopping-btn">Buy: <br> $100</button>
       </div>
  `
}

/* r-g */
function theRoyaltyGold() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-royalty-gold.png" class="shop-img">
 <p><span>Name:</span> "The Royalty (Gold Edition)" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000, $100<br> <span>Details:</span> Arguably the most luxurious car available.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-hand"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-r-g-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-r-g-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-shine"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-r-g-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-r-g-bling"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-r-g-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,800,000</button>
<button class="shopping-btn">Buy: <br> $100</button>
       </div>
  `
}

/* br */
function theBrute() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-brute.png" class="shop-img">
 <p><span>Name:</span> "The Brute (Gold Edition)" <br> <span>Price:</span>  <img src="in-game-cash.png" class="in-game-cash"> 1,600,000, $80<br> <span>Details:</span> Powerful, sexy, attractive, luxurious. You want style? This car is yours!</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-br-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-br-bling"></div>
        </div>
        <div class="black-brdr">
          <div id="stat-two-br-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,600,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

/* s-g */
function theStreakGold() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-streak-gold.png" class="shop-img">
 <p><span>Name:</span> "The Streak (Gold Edition)" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,500,000, $80<br> <span>Details:</span> Fast, shiny, gorgeous. You'll want this puppy too.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-s-g-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-g-bling"></div>
        </div>
        <div class="black-brdr">
          <div id="stat-two-s-g-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,500,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

/* s */
function theStreak() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-streak.png" class="shop-img">
 <p><span>Name:</span> "The Streak" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,600,000, $80<br> <span>Details:</span> Fast, shiny, gorgeous. You'll want this puppy.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-s-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-s-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br> <img src="in-game-cash.png" class="in-game-cash"> 1,600,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

/* tc */
function theChallenge() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-challenge.png" class="shop-img">
 <p><span>Name:</span> "The Challenge" <br> <span>Price:</span> <img src="in-game-cash.png" class="in-game-cash"> 1,500,000, $80<br> <span>Details:</span> There is no messing around. This is your dream car.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-tc-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tc-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br>  <img src="in-game-cash.png" class="in-game-cash"> 1,500,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

/* tp */
function thePanther() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-panther.png" class="shop-img">
 <p><span>Name:</span> "The Panther" <br> <span>Price:</span>  <img src="in-game-cash.png" class="in-game-cash"> 1,600,000, $80<br> <span>Details:</span> She roars, you listen. Then you run. But it'll be too late. </p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-war-f-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tp-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br>  <img src="in-game-cash.png" class="in-game-cash"> 1,600,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

/* ta */
function theAero() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-aero.png" class="shop-img">
 <p><span>Name:</span> "The Aero" <br> <span>Price:</span>  <img src="in-game-cash.png" class="in-game-cash"> 1,600,000, $80<br> <span>Details:</span> The Aerodynamic, or Aero for short, can't be missed no matter how fast she goes.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 500</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-war-f-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-ta-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 500</p>
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
 <button class="shopping-btn">Buy <br>  <img src="in-game-cash.png" class="in-game-cash"> 1,600,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

/* tr */
function theRoyalty() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/vehicles/the-royalty.png" class="shop-img">
 <p><span>Name:</span> "The Royalty" <br> <span>Price:</span>  <img src="in-game-cash.png" class="in-game-cash"> 1,800,000, $80<br> <span>Details:</span> Arguably the most luxurious car available. After the Gold Edition.</p>
       <h4 class="stats-txt pop-stat">STATS</h4>
      <div class="statistics pop-statistics">
      
       <div class="stats-zero-m">
        <p>SPEED</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-speed"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
         <p>ACCELERATION</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-accl"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
        <p>HANDLING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-hand"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr
        "></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>STEERING</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-steer"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>POWER</p>
       <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-power"></div>
        </div>
        <div class="black-brdr">
         <div id="stat-two-tr-power"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>DRIFTING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-drift"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
       <div class="stats-zero-m">
         <p>SHINE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-shine"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>NOISE</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-noise"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>80 / 450</p>
       </div>
       
    <div class="stats-zero-m">
        <p>BLING</p>
    <div class="black-round-brdr">
        <div class="first-stat black-brdr"><div id="stat-one-tr-bling"></div>
        </div>
        <div class="black-brdr"></div>
        <div class="black-brdr"></div>
        <div class="last-stat black-brdr"></div>
        </div> 
         <p>100 / 450</p>
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
 <button class="shopping-btn">Buy <br>  <img src="in-game-cash.png" class="in-game-cash"> 1,800,000</button>
<button class="shopping-btn">Buy: <br> $80</button>
       </div>
  `
}

function deluxeEngine() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/v2-deluxe-bicycle-engine.png" class="shop-img">
 <p><span>Name:</span> "V2 Deluxe Bicycle Engine" <br> <span>Price:</span> $30<br> <span>Details:</span> A V2 Deluxe engine that packs a punch.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +20</p>
    <p class="bold">Acceleration: +30</p>
    <p class="bold">Speed: +30</p>
 <button class="shopping-btn">Buy $30</button>
  `
}

function luxHoodOrnament() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/luxurious-hood-ornament.png" style="width: 40%; height: 120px;" class="shop-img">
 <p><span>Name:</span> "Luxurious Hood Ornament" <br> <span>Price:</span> $15<br> <span>Details:</span>A symbol of status.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Bling: +40</p>
    <p class="bold">Shine: +40</p>
 <button class="shopping-btn">Buy $15</button>
  `
}

function highEndBikeEngine() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/v4-high-end-motorbike-engine.png" class="shop-img">
 <p><span>Name:</span> "V4 High End Motorbike Engine" <br> <span>Price:</span> $40<br> <span>Details:</span>A High End Engine to leave the competition in your dust trail.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +60</p>
    <p class="bold">Acceleration: +60</p>
    <p class="bold">Power: +60</p>
 <button class="shopping-btn">Buy $40</button>
  `
}

function highTechInjection() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/high-tech-fuel-injection-engine.png" class="shop-img">
 <p><span>Name:</span> "High Tech Fuel Injection Engine" <br> <span>Price:</span> $60<br> <span>Details:</span>This high tech fuel injection engine is a must have for any racer!</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +60</p>
    <p class="bold">Acceleration: +60</p>
    <p class="bold">Power: +60</p>
 <button class="shopping-btn">Buy $60</button>
  `
}

function shockBreakers() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/quality-shock-breakers.png" class="shop-img">
 <p><span>Name:</span> "Quality Shock Breakers " <br> <span>Price:</span> $20<br> <span>Details:</span>Handling your car and maintaining speed is much easier with these shock Breakers.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +40</p>
    <p class="bold">Handling: +40</p>
    <p class="bold">Comfort: +40</p>
 <button class="shopping-btn">Buy $20</button>
  `
}

function luxSteeringWheel() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/luxury-steering-wheel.png" style="width: 40%; height: 110px;" class="shop-img">
 <p><span>Name:</span> "Luxury Steering Wheel" <br> <span>Price:</span> $20<br> <span>Details:</span>Any driver wants to steer like a pro. But there is nothing wrong with doing so in style either.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Handling: +40</p>
    <p class="bold">Steering: +40</p>
    <p class="bold">Bling: +40</p>
 <button class="shopping-btn">Buy (No price)???</button>
  `
}
 
function qualityDisc() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/quality-brake-disc.png" class="shop-img">
 <p><span>Name:</span> "Quality Brake Disc " <br> <span>Price:</span> $15 <br> <span>Details:</span>Without these brake disks, handling your car just isn't the same.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Handling: +30</p>
    <p class="bold">Steering: +30</p>
 <button class="shopping-btn">Buy $15</button>
  `
}

function highEndSparkPlug() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/car-parts/high-end-spark-plug.png" class="shop-img">
 <p><span>Name:</span> "High End Spark Plug" <br> <span>Price:</span> $30 <br> <span>Details:</span>Utilizing the latest technology to provide you with more speed and power.</p>
       <h4>STATS</h4>
    <p class="bold margin-top">Speed: +35</p>
    <p class="bold">Power: +35</p>
 <button class="shopping-btn">Buy $30</button>
  `
}

function singleNitro() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/single-nitro-booster.png" class="shop-img">
 <p><span>Name:</span> "SINGLE NITRO BOOSTER" <br> <span>Price:</span> $2<br> <span>Details:</span>Can be bought once per day only</p>
 <button class="shopping-btn">Purchase now $2</button>
  `
}

function fiveNitro() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/5-pack-nitro-booster.png" class="shop-img">
 <p><span>Name:</span> "FIVE NITRO BOSSTER" <br> <span>Price:</span> $10<br> <span>Details:</span>Can only be bought once per week</p>
 <button class="shopping-btn">Purchase now $10</button>
  `
}

function singleFuel() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/single-fuel-package.png" class="shop-img">
 <p><span>Name:</span> "SINGLE FUEL PACKAGE" <br> <span>Price:</span> $1.99<br> <span>Details:</span>Can be bought three times a day max</p>
 <button class="shopping-btn">Purchase now $1.99</button>
  `
}

function bigFuel() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/big-fuel-package.png" class="shop-img">
 <p><span>Name:</span> "BIG FUEL PACKAGE" <br> <span>Price:</span> $19.99<br> <span>Details:</span>Can be bought once per day only</p>
 <button class="shopping-btn">Purchase now $19.99</button>
  `
}

function megaFuel() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/mega-fuel-package.png" class="shop-img">
 <p><span>Name:</span> "MEGA FUEL PACKAGE" <br> <span>Price:</span> $99.99<br> <span>Details:</span>Can be bought only once per month</p>
 <button class="shopping-btn">Purchase now $99.99</button>
  `
}

function reductionOne() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/reduction-one.jpg" class="shop-img">
 <p><span>Name:</span> "REDUCTION ONE" <br> <span>Price:</span> $4.99<br> <span>Details:</span> Can be bought only once per month</p>
 <button class="shopping-btn">Purchase now $4.99</button>
  `
}

function reductionTwo() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/reduction-two.jpg" class="shop-img">
 <p><span>Name:</span> "REDUCTION TWO" <br> <span>Price:</span> $9.99<br> <span>Details:</span> Can be bought only once per month</p>
 <button class="shopping-btn">Purchase now $9.99</button>
  `
}

function reductionThree() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/reduction-three.jpg" class="shop-img">
 <p><span>Name:</span> "REDUCTION THREE" <br> <span>Price:</span> $14.99<br> <span>Details:</span> Can be bought only once per month</p>
 <button class="shopping-btn">Purchase now $14.99</button>
  `
}

function sponsorshipTwo() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/sponsorship-two.jpg" class="shop-img">
 <p><span>Name:</span> "SPONSORSHIP TWO" <br> <span>Price:</span> $0.99<br>
  <span>Details:</span> Can be bought twice a day<br>
  <span>Descrription:</span> Doubles all $ and EXP from races and challenges for 1 hour</p>
 <button class="shopping-btn">Purchase now $0.99</button>
  `
}

function sponsorshipThree() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/sponsorship-three.jpg" class="shop-img">
 <p><span>Name:</span> "SPONSORSHIP THREE" <br> <span>Price:</span> $4.99<br>
  <span>Details:</span> Can be bought twice a day<br>
  <span>Descrription:</span> Doubles all $ and EXP from races and challenges for 1 hour</p>
 <button class="shopping-btn">Purchase now $4.99</button>
  `
}

 function weeklyPass() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/weekly-pass.jpg" class="shop-img">
 <p><span>Name:</span> "WEEK PASS" <br> <span>Price:</span> $29.99<br>
  <span>Daily rewards:</span> <br>
   20 fuel<br>
   1 Nitro Booster<br>
   <img src="in-game-cash.png" class="in-game-cash"> 2000
<br>
 <button class="shopping-btn">Purchase now $29.99</button>
  `
}

 function monthlyPass() {
  document.querySelector('.purchase-text').innerHTML = `
 <img src="/packages/monthly-pass.jpg" class="shop-img">
 <p><span>Name:</span> "MONTH PASS" <br> <span>Price:</span> $99.99<br>
  <span>Daily rewards:</span> <br>
   30 fuel<br>
   1 Nitro Booster<br>
   <img src="in-game-cash.png" class="in-game-cash"> 5000
<br>
 <button class="shopping-btn">Purchase now $99.99</button>
  `
}