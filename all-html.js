function displayGuidelinesBtn() {
  document.querySelector('.gallery').style.backgroundColor = '#333';
  
  document.querySelector('.gallery').style.color = 'white';

  document.querySelector('.missions').style.backgroundColor = '#333';
  document.querySelector('.missions').style.color = 'white';
  
 document.querySelector('.race').style.backgroundColor = '#333';
  document.querySelector('.race').style.color = 'white';
  
  document.querySelector('.challenges').style.backgroundColor = '#333';
  document.querySelector('.challenges').style.color = 'white';
  
  document.querySelector('.inventory').style.backgroundColor = '#333';
  document.querySelector('.inventory').style.color = 'white';
  
   document.querySelector('.shop').style.backgroundColor = '#333';
  document.querySelector('.shop').style.color = 'white';
  
  document.querySelector('.vehicles').style.backgroundColor = '#333';
  document.querySelector('.vehicles').style.color = 'white';
  
   document.querySelector('.progress').style.backgroundColor = '#333';
  document.querySelector('.progress').style.color = 'white';
  
   document.querySelector('.practice').style.backgroundColor = '#333';
  document.querySelector('.practice').style.color = 'white';
 
    document.querySelector('.home').style.backgroundColor = '#333';
  document.querySelector('.home').style.color = 'white';
  
  document.querySelector('.achievements').style.backgroundColor = '#333';
  document.querySelector('.achievements').style.color = 'white';
  
  document.querySelector('.storyline').style.backgroundColor = '#333';
  document.querySelector('.storyline').style.color = 'white';
  
  document.querySelector('.guidelines').style.backgroundColor = 'white';
  document.querySelector('.guidelines').style.color = 'black';
  
document.querySelector('.vip').style.backgroundColor = '#333';
  document.querySelector('.vip').style.color = 'white';
}

function displayHome() {
document.querySelector('.home-page').innerHTML = `<section class="-page">
  <section class="first-row">
  <div class="row-div-1" id="guidelines">
   <img src="guidelines.jpg" class="guidelines-img" onclick="displayGuidelinesPage(); displayGuidelinesBtn();">
  </div> 
  <div class="row-div-2"></div>
  </section>
   
  <section class="second-row">
  <div class="row-div-3"></div> 
  <div class="row-div-4"></div>
  </section>
  
  <section class="third-row">
  <div class="row-div-5"></div>
  </section>
</section>
  <button class="l-1" style="display: none;"></button>
  <button class="l-2" style="display: none;"></button>
   <button class="l-3" style="display: none;"></button>
    <button class="l-4" style="display: none;"></button>
     <button class="l-5" style="display: none;"></button>
`;
}
displayHome();
displayHomePage();

function displayRace() {
document.querySelector('.race-page').innerHTML = 
`<section class="race-page">
  <div class="boder-bt">
  <img src="downtown.png" class="race-img">
  <div class="description">
  <p><span class="title-arena">ADRENALINE CITY: DOWNTOWN</span> <br>
 The heart of the city. The cold hard streets. Many a racer got their stripes here. Mainly MCM territory.
 </p>
  </div>
  <button class="race-btn race-btn-1 loc-1" onclick="locationOne(); race();">Race</button>
  </div>
  
  <aside class="popup">
  <p>You came in...</p>
  <h3 class="position">3rd Place</h3>
  <p>it supplied your team with <img src="in-game-cash.png" class="in-game-cash"> <span class="cash"></span> and  gained <span class="exp">50</span> experience in the race</p>
  <button class="okay-btn" onclick="document.querySelector('.popup').classList.remove('show')">Okay</button>
  </aside>
  
  <div class="boder-bt" id="loc-2">
  <img src="highways.png" class="race-img-2 race-img">
  <div class="description">
  <p class="d-p-2">
    <p class="available a-2">Available at level <span>3</span></p>
  </p>
  </div>
  <button class="race-btn l-2"  id="l-2" onclick="locationTwo();">Race</button>
  </div>
  
  <div class="boder-bt" id="loc-3">
  <img src="hills.png" class="race-img-3 race-img">
  <div class="description">
  <p class="d-p-3">
    <p class="available a-3">Available at level <span>6</span></p>
  </p>
  </div>
  <button class="race-btn l-3" id="l-3" onclick="locationThree();">Race</button>
  </div>
  
  <div class="boder-bt" id="loc-4">
  <img src="outskirts.png" class="race-img-4 race-img">
  <div class="description">
  <p class="d-p-4">
    <p class="available a-4">Available at level <span>9</span></p>
  </p>
  </div>
  <button class="race-btn l-4" id="l-4" onclick="locationFour();">Race</button>
  </div>
  
  <div class="boder-bt" id="loc-5">
  <img src="racing-circuit.png" class="race-img-5 race-img">
  <div class="description">
  <p class="d-p-5">
    <p class="available a-5">Available at level <span>25</span></p>
  </p>
  </div>
  <button class="race-btn l-5" id="l-5" onclick="locationFive();">Race</button>
  </div>
  
   <div class="border-bt" id="loc-6">
  <img src="grand-prix.png" class="race-img-6 race-img">
  <div class="description">
  <p class="d-p-6">
    <p class="available a-6">Available at level <span>35</span></p>
  </p>
  </div>
  <button class="race-btn l-6" id="l-6" onclick="locationSix();">Race</button>
  </div>
  
</section>

 <!-- <p class="available first-open one">Available at level: <span>3</span></p>
  <p class="available second-open two">Available at level: <span>6</span.</p>
  <p class="available third-open three">Available at level: <span>9</span.</p>
  <p class="available fourth-open four">Available at level: <span>25</span> </p>
  <p class="available fifth-open five">Available at level: <span>35</span> </p>
  -->
`;
}
displayRace();

function displayChallenges() {
  document.querySelector('.challenges-page').innerHTML = `
   <div class="challenges-page">
   <div class="history-refresh">
    <button onclick="showChal();">Challenge History</button>
    <button><i class="fa fa-refresh"></i></button>
   </div>
    <div class="box box-1">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerOne(); challenge();">Challenge</button>
    </div>
    </div>
    
       <div class="box box-2">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn"onclick="challengerTwo(); challenge();">Challenge</button>
    </div>
    </div>
    
       <div class="box box-3">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerThr(); challenge();">Challenge</button>
    </div>
    </div>
    
       <div class="box box-4">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerFour(); challenge()">Challenge</button>
    </div>
    </div>
    
       <div class="box box-5">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerFive(); challenge();">Challenge</button>
    </div>
    </div>
    
       <div class="box box-6">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerSix(); challenge();">Challenge</button>
    </div>
    </div>
    
       <div class="box box-7">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerSev(); challenge();">Challenge</button>
    </div>
    </div>
    
    <div>
 <svg class="exit-ch" onclick="closeChal()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
    <div>
    <div class="challenge-pop">
     <div class="challenge-result">
      <p>Mark challenged you and <span class="main-result">won</span>.</p>
      <p>You lost $5000</p>
     </div>
     
     <div class="challenge-result win">
      <p>Damina challenged you and <span class="main-result">lost</span>.</p>
      <p>You won $3400</p>
     </div>
     
     <div class="challenge-result win">
      <p>Simon challenged you and <span class="main-result">lost</span>.</p>
      <p>You won $6000</p>
     </div>
     
     <div class="challenge-result lose">
      <p>Jane challenged you and <span class="main-result">won</span>.</p>
      <p>You lost $3000</p>
     </div>
     
     <div class="challenge-result win">
      <p>Nikita challenged you and <span class="main-result">lost</span>.</p>
      <p>You won $2900</p>
     </div>
     
     <div class="challenge-result">
      <p>Joe challenged you and <span class="main-result">won</span>.</p>
      <p>You lost $5000</p>
     </div>
     
     <div class="challenge-result win">
      <p>Dion challenged you and <span class="main-result">lost</span>.</p>
      <p>You won $3400</p>
     </div>
     
     <div class="challenge-result win">
      <p>Lionel challenged you and <span class="main-result">won</span>.</p>
      <p>You lost $6000</p>
     </div>
     
     <div class="challenge-result lose">
      <p>Neil challenged you and <span class="main-result">won</span>.</p>
      <p>You lost $3000</p>
     </div>
     
     <div class="challenge-result win">
      <p>Silona challenged you and <span class="main-result">lost</span>.</p>
      <p>You won $2900</p>
     </div>
    </div>
    </div>
       <div class="box box-8">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn"     onclick="challengerEight(); challenge();">Challenge</button>
    </div>
    </div>
    
       <div class="box box-9">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerNine(); challenge();">Challenge</button>
    </div>
    </div>
    
       <div class="box box-10">
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerTen(); challenge();">Challenge</button>
    </div>
    </div>
   </div>
  `
}
displayChallenges();

function displayPurchase() {
  document.querySelector('.purchase-page').innerHTML = `
  <div class="purchase-popup">
 <svg id="purchase-shop" onclick="exitPurchasePopup()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
   <p class="purchase-text"></p>
  </div>
  <div class="shop-tabs">
   <button onclick="purchaseVehicles();">Vehicles</button>
   <button>Items</button>
   <button onclick="purchasePackages();">Packages</button>
   <button onclick="purchaseCarParts();">Car parts</button>
  </div>
  <section class="purchase-page">
  <div class="purchase-vehicles">
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/vehicles/the-pinnacle.png" class="purchase-image">
  <p>Available at level 30</p>
  </div>
  <p>"The Pinnacle"</p>
  <button onclick="purchasePopup(); pinnacle()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/vehicles/the-black-death.png" class="purchase-image">
   <p>Available at level 30</p>
  </div>
  <p>"The Black Death"</p>
  <button onclick="purchasePopup(); blackDeath()">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
  <img src="/vehicles/the-scarlett.png" class="purchase-image">
  <p>Available at level 30</p>
  </div>
  <p>"The Scarlett"</p>
  <button onclick="purchasePopup(); theScarlett()">View</button>
  </div> 
 <div class="row-div-1" id="row-div-1">
 <div class="img--txt">
  <img src="/vehicles/the-king.png" class="purchase-image">
  <p>Available at level 30</p>
  </div>
  <p>"The King"</p>
  <button onclick="purchasePopup(); theKing()">View</button>
  </div> 
  </section>
   
  <section class="third-row">
 <div class="row-div-1 flat--div" id="flat--div">
 <div class="img--txt">
  <img src="/vehicles/the-golden-tricycle.png" class="flat--img">
  <p class="level--available">Available at level 30</p>
  </div>
  <p>"The Golden Tricycle"</p>
  <button class="view-btn" onclick="purchasePopup(); goldenTricycle()">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/vehicles/the-royalty-gold.png" class="purchase-image">
  <p>Available at level 30</p>
  </div>
  <p>"The Royalty" <br> (Gold Edition)</p>
  <button onclick="purchasePopup(); theRoyaltyGold()">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/vehicles/the-streak.png" class="purchase-image">
   <p>Available at level 30</p>
  </div>
  <p>"The Streak" <br> (Platinum Edition)</p>
  <button onclick="purchasePopup(); theStreak()">View</button>
  </div> 
  </section>
  
  <section class="third-row">
 <div class="row-div-1 flat--div" id="flat--div">
 <div class="img--txt">
  <img src="/vehicles/gold-plated.png" class="flat--img">
  <p class="level--available">Available at level 30</p>
  </div>
  <p>"The Golden Bicycle"</p>
  <button class="view-btn" onclick="purchasePopup(); goldenBicycle()">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/vehicles/the-brute.png" class="purchase-image">
   <p>Available at level 30</p>
  </div>
  <p>"The Brute" <br> (Gold Edition)</p>
  <button onclick="purchasePopup(); theBrute()">View</button>
  </div> 
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/vehicles/the-streak-gold.png" class="purchase-image">
  <p>Available at level 30</p>
  </div>
  <p>"The Streak" <br> (Gold Edition)</p>
  <button onclick="purchasePopup(); theStreakGold()">View</button>
  </div> 
  </section>
  
  <section class="third-row">
 <div class="row-div-1 flat--div" id="flat--div">
 <div class="img--txt">
  <img src="/vehicles/the-challenge.png" class="flat--img">
  <p class="level--available">Available at level 30</p>
  </div>
  <p>"The Challenge"</p>
  <button class="view-btn" onclick="purchasePopup(); theChallenge()">View</button>
  </div> 
  </section>
  
  <section class="first-row">
  <div class="row-div-1" id="row-div-1">
  <div class="img--txt">
  <img src="/vehicles/the-panther.png" class="purchase-image">
  <p>Available at level 30</p>
  </div>
  <p>"The Panther" <br> (Gold Edition)</p>
  <button onclick="purchasePopup(); thePanther();">View</button>
  </div> 
  <div class="row-div-1" id="div-2">
  <div class="img--txt">
   <img src="/vehicles/the-aero.png" class="purchase-image">
   <p>Available at level 30</p>
  </div>
  <p>"The Aero" <br> (Platinum Edition)</p>
  <button onclick="purchasePopup(); theAero()">View</button>
  </div> 
  </section>
  
  <section class="third-row">
 <div class="row-div-1 flat--div" id="flat--div">
 <div class="img--txt">
  <img src="/vehicles/the-royalty.png" class="flat--img">
  <p class="level--available">Available at level 30</p>
  </div>
  <p>"The Royalty"</p>
  <button class="view-btn" onclick="purchasePopup(); theRoyalty()">View</button>
  </div> 
  </div>
  <div class="purchase-car-parts">
  </div>
  <div class="purchase-packages">
  </div>
  </section>
  </section>
  `
}
displayPurchase();

function displayShop() { 
  document.querySelector('.shop-page').innerHTML = `
  <div class="shop-popup">
 <svg id="exit-shop" onclick="exitShopPopup()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
   <p class="shop-text"></p>
  </div>
  <div class="shop-tabs">
   <button onclick="shopVehicles();">Vehicles</button>
   <button>Items</button>
   <button onclick="nitroCarParts();">Nitro</button>
   <button onclick="shopCarParts();">Car parts</button>
  </div>
  
  <div class="insufficient-funds">
  <p>Insufficient Funds!</p>
  </div>

  <div class="shop-vehicles grid-way"></div>
  <div class="shop-car-parts grid-way"></div>
  <div class="nitro-car-parts grid-way"></div>
  </section>
  `
}
displayShop();

function displayPractice() {
  document.querySelector('.practice-page').innerHTML = `
  <div class="practice-page">
  <div style="position: sticky;">
  <h3>Upgrade Your Skills</h3>
  <p>Each skill point cost $100 to train, enter in the amount of skill points you'll like to train for in the box next to the skill you want and press practice to complete training</p>
  <div class="point-amount">
  <p>your points</p>
  <p>amount</p>
  </div>
  </div>
  
  <div class="practice-sec">
  <div>
  <img src="power.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Power</h4>
  <p>What is a vehicle without the power of the engine? <br>
  The more powerful the engine the more likely you are to win.</p>
  </div>
  
  <div class="input-point">
  <p class="power-total">0</p>
  <p><input type="number" class="power" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
  <div class="practice-sec">
  <div>
  <img src="drifting.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Drifting</h4>
  <p>Sharp turns, crazy corners. <br> Knowing how to drift through them, <br> can mean the difference between winning <br> and losing.</p>
  </div>
  
  <div class="input-point">
  <p class="drift-total">0</p>
  <p><input type="number" class="drift" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
  <div class="practice-sec">
  <div>
  <img src="shine.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Shine</h4>
  <p>If your car doesn't shine, <br> nobody is going to want <br> to look at you win. <br> How your car looks is just as important as how you win..</p>
  </div>
  
  <div class="input-point">
  <p class="shine-total">0</p>
  <p><input type="number" class="shine" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
   <div class="practice-sec">
  <div>
  <img src="noise.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Noise</h4>
  <p>Having heads turn and those chills down your spine whenever you <br> rev your engine, is just <br> the perfect feeling. <br> Make some noise!</p>
  </div>
  
  <div class="input-point">
  <p class="noise-total">0</p>
  <p><input type="number" class="noise"  oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
   <div class="practice-sec">
  <div>
  <img src="handling.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Handling</h4>
  <p>How you handle your car through corners and at high speed, when you <br> shift gears, when you <br> speed up and slow down, it all matters.
     <br> Be the best!</p>
  </div>
  
  <div class="input-point">
  <p class="handling-total">0</p>
  <p><input type="number" class="handling" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
   <div class="practice-sec">
  <div>
  <img src="bling.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Bling</h4>
  <p>Sure, having a car is nice. <br>
  But having a car with <br> loads of extras, that's nicer! Pimp your car to have all it will ever need!</p>
  </div>
  
  <div class="input-point">
  <p class="bling-total">0</p>
  <p><input type="number" class="bling" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
 <div class="practice-sec">
  <div>
  <img src="acceleration.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Acceleration</h4>
  <p>The faster you are able <br> to accelerate, the faster <br> you can pick up momentum. Being good at acceleration is a crucial skill.</p>
  </div>
  
  <div class="input-point">
  <p class="acceleration-total">0</p>
  <p><input type="number" class="acceleration" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
  
 <div class="practice-sec">
  <div>
  <img src="speed.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Speed</h4>
  <p>Having speed means <br> being fast. Being fast <br> means leaving others in your rearview mirror. Don't be slow. Be fast.</p>
  </div>
  
  <div class="input-point">
  <p class="speed-total">0</p>
  <p><input type="number" class="speed" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  
  
 <div class="practice-sec">
  <div>
  <img src="steering.png" class="skill-img">
  </div>
  <div class="text">
  <h4>Steering</h4>
  <p>Knowing when to turn the steering wheel, how far and how fast, might <br> just make you the best driver around. <br> Get familiar with your steering wheel. Own it.</p>
  </div>
  
  <div class="input-point">
  <p class="steering-total">0</p>
  <p><input type="number" class="steering" oninput="this.value = this.value.replace(/[^0-9]/g, '')"> X 100</p>
  </div>
  
  </div>
  </div>
  
  <div class="practice-btn">
  <button class="practice-button js-practice-button" onclick="showPop()">Practice</button>
  </div>
  <div class="practice-pop">
   <p>
    Your have successfully increased your power by 
    <span class="power-value">0</span>, drifting by <span class ="drift-value">0</span>,
     shine by <span class="shine-value">0</span>, noise by <span class="noise-value">0</span>,
      handling by <span class="handling-value">0</span>, bling by <span class="bling-value">0
      </span>, acceleratiion by <span class="acceleration-value">0</span>,  
      speed by <span class="speed-value">0</span>, steering by 
      <span class="steering-value">0</span>.
    </p>
    <button class="remove-btn" onclick="removePop()">Okay</button>
  </div>
  `
}
displayPractice();

function displayGallery() {
  document.querySelector('.gallery-page').innerHTML = `
  <div class="gallery-page">
  
  <h4 class="mcm">MCM</h4>
  <div class="border-div">
  <div class="long-border"></div>
  <div class="short-border"></div>
  </div>
  
  <div class="mcm-gang">

     <div class="g-container">
      <div class="g-thecard g-thecard-1">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-1">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-1">
       <div class="images-div">
       <p>DONNIE SOLANO</p>
       <img src="donnie-solano.jpg" class="character-img donnie" onclick="characterPopup(); donnie();">
       </div>
      </div>
      </div>
      </div>
      </div>


      <div class="g-container">
      <div class="g-thecard g-thecard-2">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-2">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-2">
       <div class="images-div">
       <p>JOSEPH SOLANO</p>
       <img src="joey.jpg" class="character-img" onclick="characterPopup(); joey();">
       </div>
      </div>
      </div>
      </div>
      </div>

      <div class="g-container">
      <div class="g-thecard g-thecard-3">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-3">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-3">
       <div class="images-div">
       <p>MICKY STABLE</p>
       <img src="micky.jpg" class="character-img" onclick="characterPopup(); micky();">
       </div>
      </div>
      </div>
      </div>
      </div>
  
  </div>

  <div class="mcm-gang">

     <div class="g-container">
      <div class="g-thecard g-thecard-4">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-4">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-4">
       <div class="images-div">
       <p>AMANDA</p>
       <img src="amanda.jpg" class="character-img" onclick="characterPopup(); amanda();">
       </div>
      </div>
      </div>
      </div>
      </div>


      <div class="g-container">
      <div class="g-thecard g-thecard-5">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-5">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-5">    
      <div class="images-div">
      <p>SALINE</p>
      <img src="saline.jpg" class="character-img" onclick="characterPopup(); saline();">
      </div>
      </div>
      </div>
      </div>
      </div>

      <div class="g-container">
      <div class="g-thecard g-thecard-6">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-6">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-6">
       <div class="images-div">
      <p>FREDDY FROTH</p>
      <img src="freddy.jpg" class="character-img" onclick="characterPopup(); freddy();">
      </div>
      </div>
      </div>
      </div>
      </div>
  
  </div>

  <div class="mcm-gang">

     <div class="g-container">
      <div class="g-thecard g-thecard-7">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-7">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-7">
       <div class="images-div">
       <p>SIMON O'SULIVAN </p>
      <img src="simon.jpg" class="character-img" onclick="characterPopup(); simon();">
       </div>
      </div>
      </div>
      </div>
      </div>
  
  </div>
  
 <h4>BBG</h4>
  <div class="border-div">
  <div class="long-border"></div>
  <div class="short-border"></div>
  </div>

    <div class="mcm-gang">

     <div class="g-container">
      <div class="g-thecard g-thecard-8">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-8">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-8">
       <div class="images-div">
        <p>BRICKER</p>
        <img src="brick.png" class="character-img" onclick="characterPopup(); brick();">
        </div>
      </div>
      </div>
      </div>
      </div>


      <div class="g-container">
      <div class="g-thecard g-thecard-9">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-9">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-9">
       <div class="images-div">
       <p>RICKY</p>
       <img src="ricky.png" class="character-img" onclick="characterPopup(); ricky();">
       </div>
      </div>
      </div>
      </div>
      </div>

      <div class="g-container">
      <div class="g-thecard g-thecard-10">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-10">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-10">
       <div class="images-div">
        <p>BRUTUS BOVINE</p>
        <img src="brutus.png" class="character-img" onclick="characterPopup(); brutus();">
        </div>
      </div>
      </div>
      </div>
      </div>
  
  </div>

  <div class="mcm-gang">

     <div class="g-container">
      <div class="g-thecard g-thecard-11">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-11">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-11">
       <div class="images-div">
        <p>SAMANTHA</p>
        <img src="samantha.jpg" class="character-img" onclick="characterPopup(); samantha();">
        </div>
      </div>
      </div>
      </div>
      </div>


      <div class="g-container">
      <div class="g-thecard g-thecard-12">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-12">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-12">    
       <div class="images-div">
       <p>CLETUS</p>
       <img src="cletus.png" class="character-img" onclick="characterPopup(); cletus();">
       </div>
      </div>
      </div>
      </div>
      </div>

      <div class="g-container">
      <div class="g-thecard g-thecard-13">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-13">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-13">
       <div class="images-div">
        <p>TONY</p>
        <img src="tony.png" class="character-img" onclick="characterPopup(); tony();">
        </div>
      </div>
      </div>
      </div>
      </div>
  
  </div> 
  
 <h4>MDC</h4>
  <div class="border-div">
  <div class="long-border"></div>
  <div class="short-border"></div>
  </div>

  

    <div class="mcm-gang">

     <div class="g-container">
      <div class="g-thecard g-thecard-14">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-14">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-14">
       <div class="images-div">
       <p>MIMIKO</p>
       <img src="mimiko.png" class="character-img" onclick="characterPopup(); mimiko();">
       </div>
      </div>
      </div>
      </div>
      </div>


      <div class="g-container">
      <div class="g-thecard g-thecard-15">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-15">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-15">
       <div class="images-div">
        <p>ICHIRO</p>
        <img src="ichiro.png" class="character-img" onclick="characterPopup(); ichiro();">
        </div>
      </div>
      </div>
      </div>
      </div>

      <div class="g-container">
      <div class="g-thecard g-thecard-16">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-16">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-16">
       <div class="images-div">
       <p>REN & RIKU</p>
       <img src="ren-riku.png" class="character-img" onclick="characterPopup(); renRiku();">
       </div>
      </div>
      </div>
      </div>
      </div>
  
  </div>

  <div class="mcm-gang">

     <div class="g-container">
      <div class="g-thecard g-thecard-17">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-17">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-17">
       <div class="images-div">
        <p>UMI</p>
        <img src="umi.png" class="character-img" onclick="characterPopup(); umi();">
        </div>
      </div>
      </div>
      </div>
      </div>


      <div class="g-container">
      <div class="g-thecard g-thecard-18">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-18">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-18">    
       <div class="images-div">
      <p>GAIJIN</p>
      <img src="gaijin.png" class="character-img" onclick="characterPopup(); gaijin();">
      </div>
      </div>
      </div>
      </div>
      </div>

      <div class="g-container">
      <div class="g-thecard g-thecard-19">
       <div class="g-frontcard"> 
       <!-- front card -->
       <div class="padlock-div padlock-div-19">
       <p>NOT AVAILABLE</p>
       <img src="padlock.jpg" class="padlock-img">
      </div>
       </div>
       
       
       <div class="g-backcard"> 
       <div class="g-thecard-19">
       <div class="images-div">
       <p>ACCOUNTANT</p>
       <img src="the-accountant.png" class="character-img" onclick="characterPopup(); accountant();">
       </div>
      </div>
      </div>
      </div>
      </div>
  
  </div> 
  
  
  
 <h4>ECE</h4>
  <div class="border-div">
  <div class="long-border"></div>
  <div class="short-border"></div>
  </div>
 
  <div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-20">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-20">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-20">
    <div class="images-div">
    <p>DEMETRIUS</p>
    <img src="demetrius.png" class="character-img" onclick="characterPopup(); demetrius();">
    </div>
   </div>
   </div>
   </div>
   </div>


   <div class="g-container">
   <div class="g-thecard g-thecard-21">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-21">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-21">
    <div class="images-div">
    <p>JAZMIN</p>
    <img src="jazmin.png" class="character-img" onclick="characterPopup(); jazmin();">
    </div>
   </div>
   </div>
   </div>
   </div>

   <div class="g-container">
   <div class="g-thecard g-thecard-22">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-22">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-22">
    <div class="images-div">
    <p>TERRENCE</p>
    <img src="terrence.png" class="character-img" onclick="characterPopup(); terrence();">
    </div>
   </div>
   </div>
   </div>
   </div>

</div>

<div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-23">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-23">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-23">
    <div class="images-div">
    <p>MAURICE</p>
    <img src="maurice.png" class="character-img" onclick="characterPopup(); maurice();">
    </div>
   </div>
   </div>
   </div>
   </div>


   <div class="g-container">
   <div class="g-thecard g-thecard-24">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-24">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-24">    
    <div class="images-div">
    <p>DARYLL</p>
    <img src="daryll.png" class="character-img" onclick="characterPopup(); daryll();">
    </div>
   </div>
   </div>
   </div>
   </div>

   <div class="g-container">
   <div class="g-thecard g-thecard-25">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-25">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-25">
    <div class="images-div">
    <p>KAIRO</p>
    <img src="cairo.png" class="character-img" onclick="characterPopup(); cairo();">
    </div>  
   </div>
   </div>
   </div>
   </div>

</div>

<div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-26">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-26">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-26">
    <div class="images-div">
    <p>SHELLY</p>
    <img src="shelly.png" class="character-img" onclick="characterPopup(); shelly();">
    </div>
   </div>
   </div>
   </div>
   </div>

</div>
  
 <h4>EMERGENCY CREW</h4>
  <div class="border-div">
  <div class="long-border em-l-border"></div>
  <div class="short-border em-s-border"></div>
  </div>
 
  
  <div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-27">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-27">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-27">
    <div class="images-div">
    <p>SHERIFF HARLAN</p>
    <img src="harlan.png" class="character-img" onclick="characterPopup(); harlan();">
    </div>
   </div>
   </div>
   </div>
   </div>


   <div class="g-container">
   <div class="g-thecard g-thecard-28">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-28">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-28">
    <div class="images-div">
    <p>DEPUTY CONRAD</p>
    <img src="conrad.png" class="character-img" onclick="characterPopup(); conrad();">
    </div>
   </div>
   </div>
   </div>
   </div>

   <div class="g-container">
   <div class="g-thecard g-thecard-29">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-29">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-29">
    <div class="images-div">
    <p>JESSICA (EMT)</p>
    <img src="jessy.png" class="character-img" onclick="characterPopup(); jessy();">
    </div>
   </div>
   </div>
   </div>
   </div>

</div>

<div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-30">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-30">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-30">
    <div class="images-div">
    <p>DOCTOR SANJAY</p>
    <img src="sanjay.png" class="character-img" onclick="characterPopup(); sanjay();">
    </div>
   </div>
   </div>
   </div>
   </div>


   <div class="g-container">
   <div class="g-thecard g-thecard-31">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-31">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-31">    
    <div class="images-div">
    <p>MARSHALL STEVE</p>
    <img src="steve.png" class="character-img" onclick="characterPopup(); steve();">
    </div>
   </div>
   </div>
   </div>
   </div>

</div>
  

  
 <h4>SPECIAL CHARACTERS</h4>
  <div class="border-div">
  <div class="long-border sc-l-border"></div>
  <div class="short-border sc-s-border"></div>
  </div>
 
  <div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-32">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-32">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-32">
    <div class="images-div">
    <p>MR OWENS</p>
    <img src="owens.png" class="character-img" onclick="characterPopup(); owens();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-33">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-33">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-33">
    <div class="images-div">
    <p>THE THIEF</p>
    <img src="theif.png" class="character-img" onclick="characterPopup(); thief();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
   <div class="g-container">
   <div class="g-thecard g-thecard-34">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-34">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-34">
    <div class="images-div">
    <p>MYSTERY MAN</p>
    <img src="mystery-man.png" class="character-img" onclick="characterPopup(); mysteryMan();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  </div>
  
  <div class="mcm-gang">
  
  <div class="g-container">
   <div class="g-thecard g-thecard-35">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-35">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-35">
    <div class="images-div">
    <p>MYSTERY DRIVER</p>
    <img src="mystery-driver.png" class="character-img" onclick="characterPopup(); mysteryDriver();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-36">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-36">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-36">    
    <div class="images-div">
    <p>THE CLOWN</p>
    <img src="clown.png" class="character-img" onclick="characterPopup(); clown();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
   <div class="g-container">
   <div class="g-thecard g-thecard-37">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-37">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-37">
    <div class="images-div">
    <p>REPRESENTATIVE</p>
    <img src="representative.png" class="character-img" onclick="characterPopup(); rep();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  </div> 
  
 <h4>FEDERAL AGENTS</h4>
  <div class="border-div">
  <div class="long-border fa-l-border"></div>
  <div class="short-border fa-s-border"></div>
  </div>
 
  <div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-38">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-38">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-38">
    <div class="images-div">
    <p>AGENT SMITH</p>
    <img src="smith.png" class="character-img" onclick="characterPopup(); smith();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-39">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-39">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-39">
    <div class="images-div">
    <p>AGENTS S & W</p>
    <img src="white-swinbourne.png" class="character-img" onclick="characterPopup(); whiteSwin();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
   <div class="g-container">
   <div class="g-thecard g-thecard-40">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-40">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-40">
    <div class="images-div">
    <p>AGENT ROB</p>
    <img src="rob.png" class="character-img" onclick="characterPopup(); rob();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  </div>
  
 <h4>VILLIANS</h4>
  <div class="border-div">
  <div class="long-border v-l-border"></div>
  <div class="short-border v-s-border"></div>
  </div>
 
   <div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-41">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-41">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-41">
    <div class="images-div">
    <p>DARIUS HARVELL</p>
    <img src="harvell.png" class="character-img" onclick="characterPopup(); harvell();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-42">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-42">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-42">
    <div class="images-div">
    <p>MYSTERY BIKER</p>
    <img src="mystery-biker.png" class="character-img" onclick="characterPopup(); mysteryBiker();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
   <div class="g-container">
   <div class="g-thecard g-thecard-43">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-43">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-43">
    <div class="images-div">
    <p>MAZE</p>
    <img src="maze.png" class="character-img" onclick="characterPopup(); maze();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  </div>
  
  <div class="mcm-gang">
  
  <div class="g-container">
   <div class="g-thecard g-thecard-44">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-44">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-44">
    <div class="images-div">
    <p>PENNEY</p>
    <img src="penny.png" class="character-img" onclick="characterPopup(); penny();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-45">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-45">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-45">    
    <div class="images-div">
    <p>MRS ROBITAILLE</p>
    <img src="robitaille.png" class="character-img" onclick="characterPopup(); robitaille();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
   <div class="g-container">
   <div class="g-thecard g-thecard-46">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-46">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-46">
    <div class="images-div">
    <p>MR DIAZ</p>
    <img src="diaz.png" class="character-img" onclick="characterPopup(); diaz();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  </div> 
  
  </div>
  
 <h4>CITY CHARACTERS</h4>
  <div class="border-div">
  <div class="long-border c-l-border"></div>
  <div class="short-border c-s-border"></div>
  </div>
 
  <div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-47">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-47">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-47">
    <div class="images-div">
    <p>BRIAN</p>
    <img src="brian.png" class="character-img" onclick="characterPopup(); brian();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-48">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-48">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-48">
    <div class="images-div">
    <p>EVENT <br>
    ORGANIZER</p>
    <img src="event.png" class="character-img" onclick="characterPopup(); eventPlanner();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
   <div class="g-container">
   <div class="g-thecard g-thecard-49">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-49">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-49">
    <div class="images-div">
    <p>DARREN</p>
    <img src="darren.png" class="character-img" onclick="characterPopup(); darren();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  </div>
  
  <div class="mcm-gang">
  
  <div class="g-container">
   <div class="g-thecard g-thecard-50">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-50">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-50">
    <div class="images-div">
    <p>MR FRANCO</p>
    <img src="franco.png" class="character-img" onclick="characterPopup(); franco();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-51">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-51">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-51">    
    <div class="images-div">
    <p>STANLEY</p>
    <img src="stanley.png" class="character-img" onclick="characterPopup(); stanley();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
   <div class="g-container">
   <div class="g-thecard g-thecard-52">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-52">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-52">
    <div class="images-div">
    <p>HEATHER</p>
    <img src="heather.png" class="character-img" onclick="characterPopup(); heather();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  </div> 
  <div class="mcm-gang">

  <div class="g-container">
   <div class="g-thecard g-thecard-53">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-53">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-53">
    <div class="images-div">
    <p>SEBASTIAN</p>
    <img src="sebastian.png" class="character-img" onclick="characterPopup(); sebastian();">
    </div>
   </div>
   </div>
   </div>
   </div>
  
  
   <div class="g-container">
   <div class="g-thecard g-thecard-54">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-54">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-54">
    <div class="images-div">
    <p>BARTEK</p>
    <img src="bartek.png" class="character-img" onclick="characterPopup(); bartek();">
    </div>  
   </div>
   </div>
   </div>
   </div>

   <div class="g-container">
   <div class="g-thecard g-thecard-55">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-55">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-55">
    <div class="images-div">
    <p>SYLVESTER</p>
    <img src="sylvester.png" class="character-img" onclick="characterPopup(); sylvester();">
    </div>
   </div>
   </div>
   </div>
   </div>

   <div class="g-container">
   <div class="g-thecard g-thecard-56">
    <div class="g-frontcard"> 
    <!-- front card -->
    <div class="padlock-div padlock-div-56">
    <p>NOT AVAILABLE</p>
    <img src="padlock.jpg" class="padlock-img">
   </div>
    </div>
    
    
    <div class="g-backcard"> 
    <div class="g-thecard-56">
    <div class="images-div">
  <p>BUNWI</p>
  <img src="bunwi.png" class="character-img" onclick="characterPopup(); bunwi();">
  </div>
   </div>
   </div>
   </div>
   </div>
  
  </div> 
  <!-- popup with char details -->
  <div class="drop-center">
  <div class="char-details">
  </div>
  </div>
  </div>
  
  <button class="l-1" style="display: none;"></button>
  <button class="l-2" style="display: none;"></button>
  <button class="l-3" style="display: none;"></button>
  <button class="l-4" style="display: none;"></button>
  <button class="l-5" style="display: none;"></button>`;
}
displayGallery();

function displayVehicle() {
  document.querySelector('.vehicle-page').innerHTML = `
     <div class="sell-popup">
      <p>
     Are you sure you want to sell this vehicle?
     </p>
     <p>The vehicle will become available in the Shop, but will cost the original price to buy. 
      </p> 
      <button>Yes, Sell</button>
      <button onclick="exitVehicle()">No, Cancel</button>
 <svg id="exit-sales" onclick="exitVehicle()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
     </div>
      <div class="v-header">
      <div style="display: flex; justify-content: center;">
      <button onclick="myVehicles();">YOUR VEHICLES</button>
      <button onclick="muscleCars();">MUSCLE CARS</button>
      <button onclick="exoticCars();">EXOTIC CARS</button>
      <button onclick="driftCars();">DRIFT CARS</button>
      </div>
      <div style="display: flex; justify-content: center;">
      <button style="margin-right: 5px;" onclick="bikes();">BIKES</button>
      <button>OTHERS</button>
      <button>RARE</button>
      </div>
     </div>
    <div class="your-cars">
     <h4>These Are Your Current Vehicles.
    </div>
   <div class="muscle-cars">   
   </div>
   <div class="drift-cars">
   </div>
   <div class="exotic-cars">
   </div>
   <div class="bikes">
   </div>
  `
}
displayVehicle();

function displayInventory() {
document.querySelector('.inventory-page').innerHTML = `
<div class="third-row">
<div class="inven-popup">
 <svg id="purchase-shop" onclick="exitInvenPopup()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>

<p>Congratulations!</p>
<p>You received <span class="car-recieved"></span></p>
<p>Go check it out on the vehicle's page!</p>
<div class="inven-btn-div">
<button>View</button>
</div>
</div>
</div>
   <div class="inven-page">
    
   </div>
`
}
displayInventory();

function displayMissions() {
  document.querySelector('.missions-page').innerHTML = `
  <div class="mission-page display">
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="missions-page-p">
   It's a dark and rainy night, as you drive on a poorly lit road. <br> As you come around a bend, you stumble upon a car crash....
   </p>
   <p class="missions-page-p">
     You see a person laying by the side of the road. It doesn't look good. You stop the car and approach the scene, not knowing what you will find...
   </p>
  <div class="next-btn-div" style="margin-top: 20px;">
  <button class="next-btn-1 next-btn" onclick="nextOne();">Next</button>
  </div>
  </div>
  `
}
displayMissions();

function displayAchieved() {
  document.querySelector('.achieved-page').innerHTML = `
  <div class="achieved-page">
   <h3>Achievements</h3>
   <div style="display: grid; place-items: center; margin: ;">
   <div class="border-1"></div>
   <div class="border-2"></div>
   </div>
   <div class="tracked">
    <h3>TOTAL RACES:</h3>
    <p>ADRENALINE CITY: DOWNTOWN <span class="downtown-raced">(0)</span></p>
    <p>ADRENALINE CITY: HIGHWAYS <span>(0)</span></p>
    <p>ADRENALINE CITY: THE HILLS <span>(0)</span></p>
    <p>ADRENALINE CITY: RACING CIRCUIT <span>(0)</span></p>
    <p>ADRENALINE CITY: THE GRAND PRIX <span>(0)</span></p>
    <p>ADRENALINE CITY: THE OUTSKIRTS <span>(0)</span></p>
   </div>
   <div class="tracked">
    <h3>TOTAL VS CHALLENGES:</h3>
    <p>MUSCLE CAR MOTORS <span>(0)</span></p>
    <p>EXOTIC CUSTOM ESSENTIALS <span>(0)</span></p>
    <p>BRICKER'S BIKER GANG <span>(0)</span></p>
    <p>MIMIKO'S DRIFTING CREW <span>(0)</span></p>
   </div>
  <div class="tracked">
    <h3>TOTAL SKILL POINTS:</h3>
    <p>POWER <span>(0)</span></p>
    <p>DRIFTING <span>(0)</span></p>
    <p>SHINE <span>(0)</span></p>
    <p>NOISE <span>(0)</span></p>
    <p>HANDLING <span>(0)</span></p>
    <p>BLING <span>(0)</span></p>
    <p>ACCELERATION <span>(0)</span></p>
    <p>SPEED <span>(0)</span></p>
    <p>STEERING <span>(0)</span></p>
   </div>
   <div class="tracked">
    <h3>TOTAL VEHICLES:</h3>
    <p>CHROME <span>(0)</span></p>
    <p>BRONZE <span>(0)</span></p>
    <p>SILVER <span>(0)</span></p>
    <p>GOLD <span>(0)</span></p>
    <p>PLATINUM <span>(0)</span></p>
   </div>
   <div class="tracked">
    <h3>TIME SPENT IN GAME:</h3>
    <p>TOTAL DAYS <span class="days-spent-in-game">(0)</span></p>
    <p>TOTAL HOURS <span class="hours-spent-in-game">(0)</span></p>
    <p>TOTAL MINUTES <span class="mins-spent-in-game">(0)</span></p>
    <p>TOTAL SECONDS <span class="secs-spent-in-game">(0)</span></p>
    <p>CHARACTERS UNLOCKED <span class="characters-unlocked">(0 / 59)</span></p>
   </div>
   <div class="tracked">
    <h3>IN-GAME VALUEABLES:</h3>
    <p>TOTAL <img src="in-game-cash.png" class="in-game-cash"> SPENT <span class="cash-spent-in-game">(0)</span></p>
    <p>TOTAL <img src="in-game-cash.png" class="in-game-cash"> EARNED <span class="cash-earned-in-game">(0)</span></p>
    <p>TOTAL NITROUS SPENT <span>(0)</span></p>
    <p>TOTAL NITROUS OBTAINED <span>(0)</span></p>
    <p>TOTAL GANG COINS SPENT <span class="g-coins-spent-in-game">(0)</span></p>
    <p>TOTAL GANG COINS EARNED <span class="g-coins-earned-in-game">(0)</span></p>
    <p>TOTAL REPUTATION SPENT <span class="rep-spent-in-game">(0)</span></p>
    <p>TOTAL REPUTATION EARNED <span class="rep-earned-in-game">(0)</span></p>
   </div>
  </div>
  `
}
displayAchieved();

function displayStory() {
  document.querySelector('.story-page').innerHTML = `
  <div class="third-row c-g-btns">
    <button class="story-line-btns" onclick="openCrew();">CREW</button>
    <button class="story-line-btns" onclick="openGeneral();">GENERAL</button>
   </div>

   <div class="general-div">
   <div class="story-page-tabs">

   <div class="story-tab-blue">
    <h4 onclick="changeToTab();">Act 1: NEW BEGINNINGS</h4>
   </div>

   </div>

    <div class="story-tab-select no-display"></div>

    <div class="story-page-text no-display"></div>
    </div>

    <div class="crew-div">
    <div class="story-page-tabs-2">

    <div class="story-tab-blue">
     <h4 onclick="changeToTabTwo();">Act 1: NEW BEGINNINGS (2)</h4>
    </div>
 
    </div>
 
     <div class="story-tab-select-2 no-display"></div>
 
     <div class="story-page-text-2 no-display"></div>
    </div>
  `
}
displayStory();

function displayGuidelines() {
  document.querySelector('.guidelines-page').innerHTML = `
  <div class="guide-div">
  <p style="text-align: center; font-family: 'Rubik Distressed', sans-serif; margin-bottom: 25px;">Adrenaline Racing Guidelines<p>
    <div class="border-div">
  <div class="longer-border"></div>
  <div class="shorter-border"></div>
  </div>

<p class="sheriff">Index</p>
 <p class="sheriff"><a href="#general-guidelines">General Guidelines<a></p>
 <p class="sheriff"><a href="#home-link">Home<a></p>
 <p class="sheriff"><a href="#missions-link">Missions<a></p>
 <p class="sheriff"><a href="#race-link">Race<a></p>
 <p class="sheriff"><a href="#challenge-link">Challenge<a></p>
 <p class="sheriff"><a href="#inventory-link">Inventory<a></p>
 <p class="sheriff"><a href="#shop-link">Shop<a></p>
 <p class="sheriff"><a href="#vehicles-link">Vehicles<a></p>
 <p class="sheriff"><a href="#purchase-link">Purchase<a></p>
 <p class="sheriff"><a href="#skills-link">Skills<a></p>
 <p class="sheriff"><a href="#gallery-link">Gallery<a></p>
 <p class="sheriff"><a href="#achievements-link">Achievements<a></p>
 <p class="sheriff"><a href="#storyline-link">Storyline<a></p>
 <p class="sheriff">
 <p class="sheriff"><a href="#more-link">More Info<a>


<div class="general-guidelines">

<p class="sheriff" id="alin">General Guidelines:</p>

<p>What is Adrenaline Racing all about?<p>

<p>Adrenaline Racing is an immersive storyline based click game, where the goal is to do missions for your crew, do races and challenge other players, collect as many vehicles as you can, collect as many car parts as you can and improve the overall stats of your vehicles to become the best you can possibly be, in Adrenaline City. 
<p>

<p>
Ranking, reputation, boasting rights how and what you upgrade and improve: it will all play a role.
Meet more than 50 characters, each with their own story, purpose, background and personality, to understand more and more what goes down in Adrenaline City and why. Unravel the backgrounds, back stories, history and lives of each member of the 4 active crews, as well as everybody else in Adrenaline City, in weekly missions.
<p>
</div>

<p class="sheriff" id="alin">Home:</p>
<p id="home-link">
On this page you will find links to useful information, update info, contact info, event info and more!
<p>

<p class="sheriff" id="alin">Missions:</p>
<p id="missions-link">
On this page you will be able to progress through the storyline every week, meet the characters and gain rewards for completing missions. Be sure to check this page frequently for new missions!
</p>

<p class="sheriff" id="alin">Race:</p>
<p id="race-link">
The Race page will allow players to test their stats in different locations, gain rewards and complete certain missions. Your PRIMARY VEHICLE will always be the vehicle you race with and race results are random.
</p>

<p class="sheriff" id="alin">Challenge:</p>
<p id="challenge-link">
The challenge page allows players to go head to head against other players in the game. The stats of the PRIMARY VEHICLE of both players will be pitted against each other and those with overall better stats is more likely to win.
</p>
<p>
You can check your CHALLENGE HISTORY (up to the last 20 challenges), defeat rival players and “earn” their cash by winning. A maximum of 3 challenges per day can be WON against any one other player, but you can lose as often as you choose, losing your cash.
</p>
<p>
This page will also hold future surprises yet to be introduced after level 30. Everything you do in game will matter on this page!!!
</p>

<p class="sheriff" id="alin">Inventory:</p>
<p id="Inventory-link">
Visit this page to see all your collected car parts and (unopened) items. Through this page you will be able to open it equip items and collect vehicles.
</p>

<p class="sheriff" id="alin">Shop:</p>
<p id="shop-link">
On this page you will be able to purchase vehicles, car parts and items with 4 currencies: In game <img src="in-game-cash.png" class="in-game-cash">, nitro, reputation points and crew/gang coins.
</p>

<p class="sheriff" id="alin">Vehicle:</p>
<p id="vehicle-link">
Here you will find all your obtained vehicles. You may see their stats, add modifications, see overall ranking, equip or un-equip car parts and select a primary vehicle. Almost 300 vehicles are currently obtainable in game, so you'll have plenty to collect!
</p>

<p class="sheriff" id="alin">Purchase:</p>
<p id="purchase-link">
Here players can buy cars, car parts, items and packages to improve their account with real money. This page is and will always be a choice and therefor almost everything here can also be obtained with in game $. But not everything. 
</p>

<p class="sheriff" id="alin">Skills:</p>
<p id="skills-link">
This is one of the most important pages in game, as a lot of what you will decide to do here, will reflect in your account. Certain surprises in game will be directly linked to this page, so use your in game $ wisely.  Any points added can never be reset or changed. Once you add them, they become permanently active on ALL vehicles you own.
</p>

<p class="sheriff" id="alin">Gallery:</p>
<p id="gallery-link">
On this page you can always return to read about all the characters you have met through missions in game. You can read their profiles and remind yourself of their personalities.
</p>

<p class="sheriff" id="alin">Achievements:</p>
<p id="achievements-link">
Almost everything you do in game will be tracked and recorded. You can always check to see what you have accomplished so far and secret rewards will be granted for reaching milestones. 
</p>

<p class="sheriff" id="alin">Storyline:</p>
<p id="storyline-link">
Forgot to read properly what happened in previous missions or simply forgot? Come to this page to refresh your memory about the storyline you're currently playing so you can fully immerse yourself in what's going on!
</p>

<p id="more-link"></p>
<p class="sheriff" id="alin">MORE INFO:</p>
</p>

<p class="sheriff" id="alin">VIP Page:</p>
<p id="vip-link">
The VIP page displays rewards to be collected and earned tor reaching certain payment milestones. Only paying players of the game will be able to earn and collect these rewards. 
</p>
<p>
Incentives for topping up are displayed clearly and precisely in order to encourage players to support the game and further development. Spending in game is entirely a choice and those that do, will be rewarded accordingly! </p>

<p class="sheriff" id="alin">Events:</p>
<p id="events-link">
An Events Page will be introduced during special days or moments. Event conditions will be clearly indicated during the event and appropriate rewards can be earned by all players.
</p>


<p class="sheriff" id="alin">Facebook Community:</p>
<p id="fb-link">
Every crew has their own Facebook Group. Only players that are a part of that crew can join that Group, by providing a specific CODE upon application. This code will be clearly visible and indicated within your account and will always be accessible. 
</p>
<p>
Due to a high volume or availability, it may take some time before your application is verified and accepted, but after that players may enjoy specific, weekend events that result in appropriate rewards for participants. Details will be provided during the Event in the Facebook Group.
</p>
<p>
There will also be the opportunity to boast, motivate, communicate and enjoy with other crew members within the Group.
</p>

<p class="sheriff" id="alin">Future Expansions:</p>
<p id="future-exp-link">
After level 30, the majority of cars, car parts and functions will become available. New expansion will include: GARAGE (where car parts may be upgraded to have better stats) as well as CUSTOMIZATION (where cars may be customized to contain modifications that will directly improve and increase the overall stats of your vehicles.
</p>
</div>
  `
}
displayGuidelines();

function displayVip() {
  document.querySelector('.vip-page').innerHTML = `
  <div class="gray-bg">
  <p class="level--vip">Current VIP Level: 0</p>
  <div class="vip-exp-div">
   <div class="vip-exp-1"></div>
   <div class="vip-exp-2"></div>
   <div class="vip-exp-3"></div>
   <div class="vip-exp-4"></div>
   <div class="vip-exp-5"></div>
   <div class="vip-exp-6"></div>
   <div class="vip-exp-7"></div>
   <div class="vip-exp-8"></div>
   <div class="vip-exp-9"></div>
   <div class="vip-exp-10"></div>
   <div class="vip-exp-11"></div>
   <div class="vip-exp-12"></div>
   <div class="vip-exp-13"></div>
   <div class="vip-exp-14"></div>
   <div class="vip-exp-15"></div>
   <div class="vip-exp-16"></div>
   <div class="vip-exp-17"></div>
   <div class="vip-exp-18"></div>
   <div class="vip-exp-19"></div>
   <div class="vip-exp-20"></div>
  </div>
  <div class="vip-div">
 <p class="sheriff"> VIP LEVEL 1: </p>

 <p class="price-vip">First time Top Up of any amount.</p>
 Rewards:
 <p><img src="in-game-cash.png" class="in-game-cash"> 2000</p>
 <p>1 Nitro Booster</p>
 <button>Collect</button>
  <div class="div-of-boxes">
   <img src="nitro.png" class="tiny-boxes">
  </div>
  </div>
  <div class="lefty"><i class="fa fa-arrow-left" onclick="vipTwenty();"></i></div>
  <div class="righty"><i class="fa fa-arrow-right" onclick="vipTwo();"></i></div>
  </div>
  `
}
displayVip();

////// Page displays //////////

function displayHomePage() {
 document.querySelector('.home-page').style.display = 'block'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayRacePage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'block'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayChallengesPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'block'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayPurchasePage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'block'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayShopPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'block'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayGalleryPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'block'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayVehiclePage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'block'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayInventoryPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'block'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayMissionsPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'block'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayStoryPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'block'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayPracticePage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'block'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayAchievedPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'block'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'none'
}

function displayGuidelinesPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'block'
document.querySelector('.vip-page').style.display = 'none'
}

function displayVipPage() {
document.querySelector('.home-page').style.display = 'none'
document.querySelector('.race-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.inventory-page').style.display = 'none'
document.querySelector('.shop-page').style.display = 'none'
document.querySelector('.challenges-page').style.display = 'none'
document.querySelector('.purchase-page').style.display = 'none'
document.querySelector('.practice-page').style.display = 'none'
document.querySelector('.gallery-page').style.display = 'none'
document.querySelector('.vehicle-page').style.display = 'none'
document.querySelector('.missions-page').style.display = 'none'
document.querySelector('.achieved-page').style.display = 'none'
document.querySelector('.story-page').style.display = 'none'
document.querySelector('.guidelines-page').style.display = 'none'
document.querySelector('.vip-page').style.display = 'block'
}

document.querySelector('.home').addEventListener('click', () => {
  displayHomePage();
})

document.querySelector('.race').addEventListener('click', () => {
  displayRacePage();
})

document.querySelector('.missions').addEventListener('click', () => {
  displayMissionsPage();
})

document.querySelector('.practice').addEventListener('click', () => {
  displayPracticePage();
})

document.querySelector('.challenges').addEventListener('click', () => {
  displayChallengesPage();
})

document.querySelector('.shop').addEventListener('click', () => {
  displayShopPage();
})

document.querySelector('.gallery').addEventListener('click', () => {
  displayGalleryPage();
})

document.querySelector('.progress').addEventListener('click', () => {
  displayPurchasePage();
})

document.querySelector('.vehicles').addEventListener('click', () => {
  displayVehiclePage();
})

document.querySelector('.inventory').addEventListener('click', () => {
  displayInventoryPage();
})

document.querySelector('.achievements').addEventListener('click', () => {
  displayAchievedPage();
})

document.querySelector('.storyline').addEventListener('click', () => {
  displayStoryPage();
})

document.querySelector('.guidelines').addEventListener('click', () => {
  displayGuidelinesPage();
})

document.querySelector('.vip').addEventListener('click', () => {
  displayVipPage();
})