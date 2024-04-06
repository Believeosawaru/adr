//let raced = 0;
let cUnlocked = 0;
let moneyEarned = 0;
let moneySpent = 0;
let gCoinsEarned = 0;
let totalRep = 0;
let repEarned = 0;
let rep = 0;

let playerLevel = 1;
let level = 1;
// JSON.parse(localStorage.getItem('level'));

function openYouSure() {
  document.querySelector('.you-sure').classList.add('you-s-open')
}

function closeYouSure() {
  document.querySelector('.you-sure').classList.remove('you-s-open')
}

function pickCrew() {
  document.querySelector('.crew-details').classList.add('show-char')
}
function closeCrew() {
  document.querySelector('.crew-details').classList.remove('show-char')
}
function mcmCrew() {
  document.querySelector('.crew-details').innerHTML = `
  <div class="you-sure">
  <p> Are you sure you want to join Donnie Solano's Muscle Car Crew?</p>
  <p>You can't switch crews until much later in the game</p>
  <div class="third-row">
  <button onclick="mcmMissions();">Yes</button>
   <button onclick="closeYouSure()">No</button>
   </div>
  </div>
  <div class="third-row"><img src="donnie-solano.jpg" class="inner-img"></div>
  <p><span class="bold-text">Name:</span> Donnie Solano</p>
  <p><span class="bold-text">Age:</span> 38</p>
  <p><span class="bold-text">Ethnicity:</span> American Italian</p>
  <p><span class="bold-text">Title:</span> Leader</p>
  <p><span class="bold-text">Gang:</span> Muscle Car Motors</p> 
  <p> <span class="bold-text">Personality:</span> Donnie is the leader of the Muscle cars Crew. Donnie is direct, strong, doesnt cut corners and knows what he wants. He is proud of what he does and knows how to do it. Donnie will want no nonsense work to be done, doesnt appreciate slacking and expects orders to be followed. Donnie is a man who protects those he cares about, has a tough exterior but a big heart.
  </p>
   <p>
    <span class="bold-text">Role:</span> Being part of Donnie's crew will mean going hard. Donnie always wants results from missions, not excuses. He wants the best because he believes he is the best. During missions for Donnies crew, he will constantly remind you to push yourself to your limits in order to improve yourself.
   </p>
   <button onclick="openYouSure()">Join</button>
   <button onclick="closeCrew()">Don't Join</button>
 <svg class="ex" style="right: -1px;" onclick="closeCrew()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
  `
}

function mdCrew() {
  document.querySelector('.crew-details').innerHTML = `
  <div class="you-sure">
  <p> Are you sure you want to join Mimiko's Drifting Crew?</p>
  <p>You can't switch crews until much later in the game</p>
  <div class="third-row">
  <button>Yes</button>
   <button onclick="closeYouSure()">No</button>
   </div>
  </div>
<div class="third-row"><img src="mimiko.png" class="inner-img"></div>
  <p><span class="bold-text">Name:</span>
  Mimiko Matsumoto  </p>
  <p><span class="bold-text">Age:</span> 30</p>
  <p><span class="bold-text">Ethnicity:</span> Asian Japanese</p>
  <p><span class="bold-text">Title:</span> 
   Leader </p>
  <p><span class="bold-text">Gang:</span> Mimiko's Drifting Crew </p> 
  <p> <span class="bold-text">Personality:</span> Mimiko is relentless. There is no stopping or bargaining with this lady. She likes order, respect, results. If you don't improve, she WILL punish or shame you. She can be cruel at times, but once you get to know her more, you realize that it all has a reason and purpose. Mimiko won't let her guard down, even for a second and not for anyone... Except... Maybe for one person.
   </p>
   <p>
    <span class="bold-text">Role:</span> As the leader of the Mimiko Drifting Crew, Mimiko herself has to make sure everything goes right. Because failure is not an option. Therefore, the majority of the jobs will come from her. And you better do them the right way, because there is no wrong way!
   </p>
   <button onclick="openYouSure()">Join</button>
   <button onclick="closeCrew()">Don't Join</button>
 <svg class="ex" style="right: -1px;" onclick="closeCrew()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
  `
}

function eceCrew() {
  document.querySelector('.crew-details').innerHTML = `
  <div class="you-sure">
  <p> Are you sure you want to join Demetrius' Exotic Custom Essentials?</p>
  <p>You can't switch crews until much later in the game</p>
  <div class="third-row">
  <button>Yes</button>
   <button onclick="closeYouSure()">No</button>
   </div>
  </div>
  <div class="third-row"><img src="demetrius.png" class="inner-img"></div>
  <p><span class="bold-text">Name:
  Demetrius (Demo) Harvell 
  </span>
   </p>
  <p><span class="bold-text">Age:</span> 
  32</p>
  <p><span class="bold-text">Ethnicity:</span> African American </p>
  <p><span class="bold-text">Title:</span> 
   Leader </p>
  <p><span class="bold-text">Gang:</span> Exotic Custom Essentials </p> 
  <p> <span class="bold-text">Personality:</span> The cool, the slick, the sly! Demetrius Harvell is a man who is always clear about everything and knows his likes from his dislikes. He's respectful, articulate, cool and calm, until he isn't. Demetrius likes his Bling Bling and is a total ladies man. He wines, he dines, he rolls in class. Nothing is too expensive for Demetrius, if what you pay for, is quality. But don't get on his bad side, because if you do, Demetrius won't hesitate to set you straight!
   </p>
   <p>
    <span class="bold-text">Role:</span> Demetrius will provide you with the majority of the jobs for the Exotic Cars Crew. He will remain unimpressed with you for a long time, until you finally have proven yourself enough. Then, he will take it more easy on you in his communication and praise. But for a while, you will just have to handle his unimpressed attitude toward you joining his crew. Once you're in though, you're in for life!
   </p>
   <button onclick="openYouSure()">Join</button>
   <button onclick="closeCrew()">Don't Join</button>
 <svg class="ex" style="right: -1px;" onclick="closeCrew()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
  `
}

function bbgCrew() {
  document.querySelector('.crew-details').innerHTML = `
  <div class="you-sure">
  <p> Are you sure you want to join Bricker's Bike Gang?</p>
  <p>You can't switch crews until much later in the game</p>
  <div class="third-row">
  <button>Yes</button>
   <button onclick="closeYouSure()">No</button>
   </div>
  </div>
  <div class="third-row"><img src="brick.png" class="inner-img"></div>
  <p><span class="bold-text">Name:</span> Bricker (THE BRICK)<p>
  <p><span class="bold-text">Age:</span> 41</p>
  <p><span class="bold-text">Ethnicity:</span> American</p>
  <p><span class="bold-text">Title:</span> Leader</p>
  <p><span class="bold-text">Gang:</span> Bricker's Biker Gang  </p> 
  <p> <span class="bold-text">Personality:</span> Being a biker is a lifestyle. But it isn't easy. Bricker however, makes it look flawless. Most people think that bikers can't drive cars, and Bricker thinks that's stupid. He's also happy to prove you wrong. Bricker is in many ways like... A brick. He's tough, stone cold and rough. Does that make him unfriendly? Only when he has to be. Otherwise Bricker is a straight shooter with little feelings or concerns about others. You stay out of his way, or he goes out of his way to make way.
   </p>
   <p>
    <span class="bold-text">Role:</span> Bricker says it how it is. And how it is, is how it's going to be. Don't like it? Tough luck, because whatever Bricker says, goes. No ifs ands or buts. Bricker will tell you what to do, when to do it, and if you need to know, why to do it. But he doesn't always have time to. So he's not the only one who bosses you around.
   </p>
   <button onclick="openYouSure()">Join</button>
   <button onclick="closeCrew()">Don't Join</button>
 <svg class="ex" style="right: -1px;" onclick="closeCrew()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
  `
}

function clickableBtn() {
document.querySelector('.race').addEventListener('click', () => {
  document.querySelector('.race-btn').classList.add('auto-pointer');
})
}
 
function unclickableBtn() {
document.querySelector('.race').addEventListener('click', () => {
  if (raced === 3 || raced === 6 || raced === 9 || raced === 12)
  document.querySelector('.race-btn').classList.remove('auto-pointer');
})
if (raced === 3 || raced === 6 || raced === 9 || raced === 12) {
}
console.log(raced)
}

//document.querySelector('.player-level').innerHTML = level;
function nextTo() {
  document.querySelector('.mission-page').innerHTML = `
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

function nextOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mystery-man.png" class="person-img"><span class="text-span">STRANGER</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      "Please... Help me...."
     </span></p>
    <p class="missions-page-p margin-topper"> 
     You dial 911 and report the accident. It takes at least 15 minutes for the ambulance to arrive. A woman gets out of the ambulance and rushes to the victim.
    </p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTo();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwo();">Next</button>
   `
}

function nextTwo() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/jessy.png" class="person-img"><span class="text-span">JESSY THE EMT</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Wow, that looks like a nasty crash! Good thing you drove by when you did! I got it from here. Please follow me into town. The authorities will want to question you.
     </span></p>
     <p class="missions-page-p third-row">...</p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextOne();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextThree();">Next</button>
   `
}

function nextThree() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
     <p class="missions-page-p third-row">
     As you approach the hospital, you park your car and notice a cop already waiting for you. He sees you too and starts walking towards you.
     </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/harlan.png" class="person-img"><span class="text-span">HARLAN THE SHERIFF</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Good evening, stranger.
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwo();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextFour();">Next</button>
   `
}

function nextFour() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/harlan.png" class="person-img"><span class="text-span">HARLAN THE SHERIFF</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Are you the one who called in the accident? My name is Harlan, I'm the Sheriff here in Adrenaline City. Would like to ask you some questions, if you don't mind.
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThree();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextFive();">Next</button>
   `
}

function nextFive() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/harlan.png" class="person-img"><span class="text-span">HARLAN THE SHERIFF</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Did you notice any other vehicles in the area? How long after you arrived did you call 911? Was there any other person you ...
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFour();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextSix();">Next</button>
   `
}

function nextSix() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
  <p class="missions-page-p">
    The questions luckily didn't take too long, you weren't looking for any trouble.  Once the Sheriff was satisfied, you feel tired and decide to go to a Hotel nearby to get some shut-eye.
  </p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFive();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextSeven();">Next</button>
   `
}

function nextSeven() {
  cash -= 60;
  moneySpent += 60;
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/franco.png" class="person-img"><span class="text-span">MR FRANCO: THE HOTEL MANAGER</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Welcome to Hotel Adrenaline! How may we serve you today, sir? A room for the night? That's no problem at all, sir! That'll be $60, please.
     </span></p>
     <p class="missions-page-p third-row">***$60 Deducted***</p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSix();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextEight();">Next</button>
   `
}

function nextEight() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="missions-page-p">	The following morning you decide to check up on the victim, after you had some breakfast. The Hospital receptionist informs you of the room number and you make your way to the elevator. As you approach the room, you notice that there is a person sitting upright on the bed, all bandaged up.
   </p>

  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSeven();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextNine();">Next</button>
   `
}

function nextNine() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="missions-page-p">	
   "At least he's alive", you catch yourself thinking.
   </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Hey! Look at you! My saviour! Ah, man, that was a close one, dude!
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextEight();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTen();">Next</button>
   `
}

function nextTen() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
   I don't think I'd be here today if you hadn't come by! Freddy Froth's the name, put her here
     </span></p>
     <p class="missions-page-p margin-topper">You awkwardly shake hands...</p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextNine();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextEleven();">Next</button>
   `
}

function nextEleven() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="missions-page-p">	
   </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
   Heck, dude! That's a firm grip you got there! Go easy on Freddy, won't you? Hahaha. Ah man, I really don't think I'd be here if it wasn't for you, stranger.
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTen();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwelve();">Next</button>
   `
}

function nextTwelve() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
    Would you mind to do me a huge favour? My phone broke in the accident and I have no way of letting my people know what happened to me. They'll be really worried! 
  You don't mind? Man, you're the best!
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextEleven();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextThirteen();">Next</button>
   `
}

function nextThirteen() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
    Freddy owes you big time! Here, I'll write down the address, in case you can't find the place. Thank you so much, man! Hope you won't have too much trouble finding the place.
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTweleve();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextFourteen();">Next</button>
   `
}

function nextFourteen() {
  if (raced !== 3) {
  clickableBtn();
  }
  document.querySelector('.missions').addEventListener('click', () => {
   
   nextFourteenTwo();
   
    document.querySelector('.missions-1-progress').innerHTML = raced;
  })
  if (raced === 3) {
    document.querySelector('.race-btn').classList.remove('auto-pointer');
  }
  
 document.querySelector('.missions').addEventListener('click', () => {
   if (raced === 3) {
   document.querySelector('.missions-1-btn').style.display = 'block';
   }
 })

  
 function nextFourteenTwo() {
 document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>  
   <p class="missions-page-p third-row">
    PROLOGUE MISSION: 
    </p>
    <p class="missions-page-p third-row"> "Finding Muscle Car Motors"
   </p>
   <p class="missions-page-p">
    Drive around town until you find Muscle Car Motors. Race three times in Adrenaline City: DOWNTOWN
    </p>
    <p class="missions-page-p reddo third-row">
   Progress: &nbsp; <span class="missions-1-progress">0</span>/3
   </p>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn missions-btn missions-1-btn" onclick="nextFifteen();">Next</button>
   `
 }
 nextFourteenTwo();
}

function nextFifteen() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="missions-page-p">
    You finally find the MCM headquarters. You park your car in front and are immediately approached by a very tough looking guy. "This ought to be fun", you tell yourself.
    </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/micky.jpg" class="person-img"><span class="text-span">MICKY (THE FIST) STABLE</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
    What do you want?
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextSixteen();">Next</button>
   `
}

function nextSixteen() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="missions-page-p">
   You explain what happened the night before and how Freddy asked you to come here.
   </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/micky.jpg" class="person-img"><span class="text-span">MICKY (THE FIST) STABLE</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
     The name's Micky. Follow me. The Boss will want to see you.
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFifteen();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextSeventeen();">Next</button>
   `
}

function nextSeventeen() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="missions-page-p">
   You follow Micky into a massive warehouse filled with muscle cars and people. This looks like a serious place. Curious eyes follow you, as you walk further into the building. You walk up some stairs, still following Micky and he knocks on a door. As he walks in, he says:
   </p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixteen();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextEighteen();">Next</button>
   `
}

function nextEighteen() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/micky.jpg" class="person-img"><span class="text-span">MICKY (THE FIST) STABLE</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
     Wait here.
     </span></p>
     <p class="missions-page-p">
      Through the blinds of the office window, you see Micky talking to someone who has their back turned. After a few seconds, Micky walks back to the floor and ushers you in.
     </p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSeventeen();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextNineteen();">Next</button>
   `
}

function nextNineteen() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
     Welcome, welcome, stranger. Micky here just filled me in. Thank you for going through the trouble of driving here. It's much appreciated! My name is Donnie. Donnie Solano. Please, please, sit. 
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextEighteen();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwenty();">Next</button>
   `
}

function nextTwenty() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      You want a drink? Micky, pour our guest a drink, please. Would you mind running everything by me again?
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextNineteen();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentyOne();">Next</button>
   `
}

function nextTwentyOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="missions-page-p">
You explain that you were driving into town when you stumbled upon the car crash and called the ambulance. You also explain that you went to visit him this morning and were asked by Freddy to come here.
   </p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwenty();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentyTwo();">Next</button>
   `
}

function nextTwentyTwo() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Thank you brother, thank you so much. Micky, prepare the guys, we will visit Freddy immediately. Can't have him chat up those nurses too much, hahaha.
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentyOne();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentyThree();">Next</button>
   `
}

function nextTwentyThree() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      That sly devil! Anyways, thank you so much again. Please, I won't take no for an answer. I have something I'd like to give you, as a token for saving Freddy's life. 
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentyTwo();">Prev</button>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentyFour();">Next</button>
   `
}

function nextTwentyFour() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
    <p class="missions-page-p reddo third-row">
     CONGRATULATIONS! YOU'VE OBTAINED:
     </p>
     <p class="missions-page-p reddo third-row">
      **** 1970 Oldie 444 **** <br>
      (You can check it out on the inventory page)
    </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      There, now you can drive around in style! Please feel free to visit us again.
     </span></p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentyThree();">Prev</button>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentyFive();">Next</button>
   `
}

function nextTwentyFive() {
  moneyEarned += 2000;
  gCoinsEarned += 2;
  
  cash += 2000;
  exp += 150;
  gCoins += 2;
  
  allExpHandle();
  
  if (fuel !== 10) {
    fuel += 1;
    document.querySelector('.total-fuel').innerHTML = fuel;
  }
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-exp').innerHTML = exp;
  document.querySelector('.total-gcoins').innerHTML = gCoins;
  
  
  localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('exp', JSON.stringify(exp))
 localStorage.setItem('gCoins', JSON.stringify(gCoins))
  
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      After what you did for Freddy, you'll always be welcome here!
     </span></p>
     <p class="missions-page-p margin-topper reddo third-row">
*** MISSION COMPLETE! You earned: 2 Gang Points, </p>
<p class="missions-page-p reddo"><img src="in-game-cash.png" class="in-game-cash"> 2000 and 150 EXP ***</p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentyFour();">Prev</button>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentySix();">Next</button>
   `
}

function nextTwentySix() {
  cUnlocked += 5;

  showFreddy();
  showJessica();
  showSheriff();
  showMicky();
  showDonnie();

  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
  <div class="unlocked">
 <p>CHARACTER PROFILES UNLOCKED:</p>
 <p>FREDDY FROTH</p>
 <p>JESSY: THE EMT</p>
 <p>HARLAN: THE SHERIFF</p>
 <p>MICKY (THE FIST) STABLE</p>
 <p>DONNIE SOLANO</p>
  </div>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentyFive();">Prev</button>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentySeven();">Next</button>
   `
}

function nextTwentySeven() {
level = 2;
localStorage.setItem('level', JSON.stringify(level));
  
document.querySelector('.missions').addEventListener('click', () => {
 if (level === 2) {
  nextTwentySeven();
}
})
  
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
  <p class="missions-page-p">
  You get in your car and drive off. You soon reach the highway and you're ready to move on. Out of nowhere, a car drifts very closely by you and you have to hit your breaks not to cause an accident. 
    "Who the heck drives like this?", you think to yourself. 
  </p>
  <div class="next-btn-div" style="margin-top: 40px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentyEight();">Next</button>
   `
}
// first mission end //

function nextTwentyEight() {
  level = 2;
localStorage.setItem('level', JSON.stringify(level));
  
document.querySelector('.missions').addEventListener('click', () => {
 if (level === 2) {
  nextTwentyEight();
}
})
  
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
  <p class="missions-page-p">
  You barely avoid contact with the rear bumper of the car and come to a screeching halt. Luckily there aren't many other cars around or behind you. Today must be your lucky day. As you start driving again, you can see the car you nearly got hit by, driving slow in front of you. 
  </p>
  
 <div class="prev-btn-div" style="margin-top: 30px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentySeven();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 30px;">
  <button class="next-btn-1 next-btn" onclick="nextTwentyNine();">Next</button>
   `
}

function nextTwentyNine() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
  <p class="missions-page-p">
  You consider giving them a piece of your mind, but before you can say anything, the driver pulls up besides you, smiles a big grin and waves you over. At first you're not sure if you should give them any attention, but the driver insists you follow them.
    You pull up behind them at the side of the road. 
  </p>
  
 <div class="prev-btn-div" style="margin-top: 30px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentyEight();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 30px;">
  <button class="next-btn-1 next-btn" onclick="nextThirty();">Next</button>
   `
}

function nextThirty() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
  <p class="missions-page-p">
  As you get out of your car, a woman approaches you, skipping playfully, still with the same grin on her face.
  </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      Hey, what's up you? Can't take a bit of heat on the road? Hahaha. I'm only joking!
     </span></p>
     
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextTwentyNine();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtyOne();">Next</button>
   `
}

function nextThirtyOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      My name is Umi. I was just practicing some new drift moves. You happened to be right there. Hey, do you drift? That rust bucket of yours looks pretty beat! Tell you what? If you join me for a race and beat me, I'll let you have my car. 
     </span></p>
     
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThirty();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtyTwo();">Next</button>
   `
}

function nextThirtyTwo() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      How does that sound? All you have to do is beat me in a race, I promise. What do you say?
     </span></p>
     <p class="missions-page-p">
    Seems somebody is in need of a lesson. If she can be this reckless, maybe she should need a lesson in knowing when she's wrong also. 
     </p>
     
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThirtyOne();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtyThree();">Next</button>
   `
  raced = 0;
}

function nextThirtyThree() {
  if (raced !== 3) {
  clickableBtn();
  }
  document.querySelector('.missions').addEventListener('click', () => {
   
   nextThirtyThree();
   
    document.querySelector('.missions-2-progress').innerHTML = raced;
  })
  if (raced === 3) {
    unclickableBtn();
  }
  
 document.querySelector('.missions').addEventListener('click', () => {
   if (raced === 3) {
   document.querySelector('.missions-2-btn').style.display = 'block';
   }
 })
  
function nextThirtyThreeOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
     <p class="missions-page-p">
      You agree to the terms of the race. That car is as good as yours.
     </p>
  <p class="missions-page-p">Show Umi what you're made of! </p>
  <p class="missions-page-p reddo"> Race three times in Adrenaline City: HIGHWAYS <br>
   Progress: <span class="missions-2-progress">0</span>/3 
  </p>
  
  <div class="next-btn-div missions-btn missions-2-btn" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtyFour();">Next</button>
   `
}
nextThirtyThreeOne();
}

function nextThirtyFour() {
  document.querySelector('.missions').addEventListener('click', () => {
    nextThirtyFour();
  })
  
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
      What? No way! How did you beat me in such a crappy car? Oh man, this is bad! She's gonna kill me... Ehm, look, a deal's a deal. The car will be yours. But please at least have the decency to drop me off first.
       We're not far.
     </span></p>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtyFive();">Next</button>
   `
}

function nextThirtyFive() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
   <p class="missions-page-p">
    Ugh, what else can happen today? Why not? You decide to drive Umi to where she needs to go. She wasn't lying when she said it wasn't far. Within a few minutes you reach a very modern, very tall building.
    "MATSUMOTO INC.", you read with big letters on the front. 
   </p>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtySix();">Next</button>
   `
}

function nextThirtySix() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
   <p class="missions-page-p">
    As you park your car in front of the building, you see a man and woman approach your car. They look very serious, and very well dressed. You don't know what to expect next.
   </p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThirtyFive();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtySeven();">Next</button>
   `
}

function nextThirtySeven() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
       <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIKO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
    Umi!
    What have you done this time? Who is this stranger?
     </span></p>
     
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
   <p class="p-box chat-box jes-talk">A thousand apologies Ms. Matsumoto!
     </span></p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThirtySix();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtyEight();">Next</button>
   `
}

function nextThirtyEight() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
   <p class="p-box chat-box jes-talk">
   I lost my car in a drift race to this stranger and asked them to drop me here before I give them my car. They won fair and square.
     </span></p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThirtySeven();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextThirtyNine();">Next</button>
   `
}

function nextThirtyNine() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk">
   Ichiro, bring Umi inside, while I speak to this stranger.
My sincere apologies. Umi can be quite the handful. Would you mind telling me what transpired today?
     </span></p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThirtyEight();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourty();">Next</button>
   `
}

function nextFourty() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>  
    <p class="missions-page-p">
   You explain to Ms. Matsumoto what happened on the highway and how you were challenged to a drift race and won.
   </p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk">
   Yes, yes. This sounds like Umi alright. 
     </span></p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextThirtyNine();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtyOne();">Next</button>
   `
}

function nextFourtyOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>   
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk">
   Please accept my humble apologies for her behaviour and what she put you through. But it appears you can hold your own in a race. Umi may be trouble, but she's a great drifter. If you beat her, it means there is more to you than meets the eye. 
     </span></p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourty();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtyTwo();">Next</button>
   `
}

function nextFourtyTwo() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>   
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk">
   Perhaps one day you would like to return for a cup of tea, and we can discuss your future plans? Consider the option. For now, please accept the keys to her car. I wish you a lovely day.
     </span></p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourtyOne();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtyThree();">Next</button>
   `
}

function nextFourtyThree() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4> 
 <p class="missions-page-p reddo"> CONGRATULATIONS! YOU'VE OBTAINED:
    **** GCW R38 K7**** </p>

     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk">
   A stranger with drifting skills, could be a valuable asset to our Crew. Let's see if fate wills them back to us.
     </span></p>
   
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourtyTwo();">Prev</button>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtyFour();">Next</button>
   `
}

function nextFourtyFour() {
  moneyEarned += 2000;
  gCoinsEarned += 2;
  
  cash += 2000;
  exp += 150;
  gCoins += 2;
  
  allExpHandle();
  
  if (fuel !== 10) {
    fuel += 1;
    document.querySelector('.total-fuel').innerHTML = fuel;
  }
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-exp').innerHTML = exp;
  document.querySelector('.total-gcoins').innerHTML = gCoins;
  
  
  localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('exp', JSON.stringify(exp))
 localStorage.setItem('gCoins', JSON.stringify(gCoins))
  
  cUnlocked += 2;
  
  showUmi();
  showMimiko();
  
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Drifting & Shifting"</h4> 
 <p class="missions-page-p reddo"> *** MISSION COMPLETE! You earned: 2 Gang Points,</p>
 <p class="missions-page-p reddo">
<img src="in-game-cash.png" class="in-game-cash"> 
 2000 and 150 EXP ***</p>
 </p>
  
  <div class="unlocked">
   <p>CHARACTER PROFILES UNLOCKED:</p>
   <p>UMI</p>
   <p>MIMIKO MATSUMOTO</p>
  </div>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtyFive();">Next</button>
   `
}

// end of second mission //

function nextFourtyFive() {
  level = 3;
  
localStorage.setItem('level', JSON.stringify(level));
  
document.querySelector('.missions').addEventListener('click', () => {
 if (level === 3) {
  nextFourtyFive();
}
})

  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
 <p class="missions-page-p"> 
 This turned out to be a longer day than planned. 
 Perhaps you should relax a bit after all this? 
 You check your phone and see what is going on in this city today.
  You quickly find a car show that you can attend. "Why not?", you think. 
 </p>
   
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtySix();">Next</button>
   `
}

function nextFourtySix() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
 <p class="missions-page-p"> You drive to the location and find a massive crowd, gathered around some insanely beautiful luxury cars. There is music, champagne, beautiful ladies and handsome men everywhere. This might not be such a bad decision at all.
 </p>
  
<div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourtyFive();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtySeven();">Next</button>
   `
}

function nextFourtySeven() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
 <p class="missions-page-p">  You walk around and taste the atmosphere, you notice a registration booth for today's race. Winner gets a car! Well, you can't miss out on that opportunity! You decide to sign up and continue sampling the event.
   After about half an hour of walking around, you hear an announcement:
 </p>
  
<div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourtySix();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtyEight();">Next</button>
   `
}

function nextFourtyEight() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/event.png" class="person-img"><span class="text-span">EVENT ORANIZER</span></div></p>
   <p class="p-box chat-box jes-talk">
   LADIES AND GENTLEMEN!!! WELCOME TO THE ANNUAL EXOTIC CAR SHOW! AS EVERY YEAR, THE EVENT IS BROUGHT TO YOU BY, SPONSERED BY AND HOSTED BY THE ONE AND ONLY, THE SPECTACULAR, THE LADIES MAN, DEMETRIUS HARVELL!!!
     </span></p>
  
<div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourtySeven();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFourtyNine();">Next</button>
   `
}

function nextFourtyNine() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 

<p class="missions-page-p">
As the crowd cheers, a man steps up on the podium, very well dressed, a big smile on his face, arms spread wide.
</p>
  
  <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
   Welcome, welcome everyone! Thank you so much for coming again this year!
     </span></p>
  
<div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourtyEight();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFifty();">Next</button>
   `
}

function nextFifty() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
  
  <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
   Like every year, we have organized a spectacular race for everyone. Those who decided to sign up, please bring your cars to the starting line. We will keep the prize car of this year a surprise again, but trust me, you will want to win!
     </span></p>
  
<div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFourtyNine();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftyOne();">Next</button>
   `
}

function nextFiftyOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
  
  <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
   Spectators, please, enjoy the show!
     </span></p>
     
     <p class="missions-page-p">
     The crowd cheers again and you notice some racers driving their cars to the starting line, and since you signed up, you decide to follow them there. 
     </p>
  
<div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFifty();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftyTwo();">Next</button>
   `
   raced = 0;
}

function nextFiftyTwo() {
  
  document.querySelector('.missions').addEventListener('click', () => {
    nextFiftyTwo();
    
document.querySelector('.missions-3-progress').innerHTML = raced;
  })
  
   if (raced !== 3) {
    clickableBtn();
  }
  
  if (raced === 3) {
    document.querySelector('.race-btn').classList.remove('auto-pointer');
  }
  
 document.querySelector('.missions').addEventListener('click', () => {
   if (raced === 3) {
   document.querySelector('.missions-3-btn').style.display = 'block';
   }
 })
  
  function nextFiftyTwoOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
  
  <p class="text-par minus-top"><div class="flexy"><img src="/character-images/event.png" class="person-img"><span class="text-span">EVENT ORGANIZER</span></div></p>
   <p class="p-box chat-box jes-talk">
     DRIVERS, ARE YOU READY? START YOUR ENGINES! ... 3... 2... 1... GO!!! </span></p>
     
     <p class="missions-page-p margin-topper reddo">
     There can be only one! Race three times in Adrenaline City: The Hills <br> Progress: <span class="missions-3-progress">0</span>/3 
     </p>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 missions-btn missions-3-btn next-btn" onclick="nextFiftyThree();">Next</button>
   `
  }
  nextFiftyTwoOne();
}

function nextFiftyThree() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/event.png" class="person-img"><span class="text-span">EVENT ORGANIZER</span></div></p>
   <p class="p-box chat-box jes-talk">
     UNBELIEVABLE EVERYONE! WHAT A RACE! WHAT A SPECTACLE! WHO WOULD HAVE GUESSED IT WOULD TURN OUT THIS WAY? WILL THE WINNER OF THE RACE PLEASE JOIN US ON STAGE? </span></p>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftyFour();">Next</button>
   `
}

function nextFiftyFour() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
    <p class="missions-page-p">As you walk on to the stage, you are greeted by a very attractive lady.</p>
   
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/jazmin.png" class="person-img"><span class="text-span">JAZMIN INDI</span></div></p>
   <p class="p-box chat-box jes-talk">
     Congratulations, gorgeous! That was quite the win! You sure know how to handle a car. Please, follow me to meet our host and organizer.</span></p>
  
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFiftyThree();">Prev</button>
  </div>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftyFive();">Next</button>
   `
}

function nextFiftyFive() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
   
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
     Congratulations stranger! What a race, what a race! What a pleasure to meet you! You can consider yourself always welcome at ECE, we are always looking for new talents to join our crew. </span></p>
     
     
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFiftyFour();">Prev</button>
  </div>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftySix();">Next</button>
  </div>
   `
}

function nextFiftySix() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
   
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
     And you look like you have a lot of potential still waiting to be unlocked! Here, take my card and consider joining us. But all that aside, please accept your prize for winning this year's race! Give them a round of applause, ladies and gentlemen! </span></p>
  
  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFiftyFive();">Prev</button>
  </div>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftySeven();">Next</button>
  </div>
   `
}

function nextFiftySeven() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
   
   <p class="missions-page-p reddo">
   CONGRATULATIONS! YOU HAVE OBTAINED:
   **** EXOTIC CAR **** 
     </p>
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
     A potential ECE racer? Who knows! We would welcome you back with open arms!</span></p>
  
  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFiftySix();">Prev</button>
  </div>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftyEight();">Next</button>
  </div>
   `
}

function nextFiftyEight() {
  moneyEarned += 2000;
  gCoinsEarned += 2;
  
   cash += 2000;
  exp += 150;
  gCoins += 2;
  
  allExpHandle();
  
  if (fuel !== 10) {
    fuel += 1;
    document.querySelector('.total-fuel').innerHTML = fuel;
  }
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-exp').innerHTML = exp;
  document.querySelector('.total-gcoins').innerHTML = gCoins;
  
  
  localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('exp', JSON.stringify(exp))
 localStorage.setItem('gCoins', JSON.stringify(gCoins))
 
 cUnlocked += 3;

 showDemitrius();
 showJazmin();
 showEvent();
  
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4> 
   
   <p class="missions-page-p reddo">
   *** MISSION COMPLETE! You earned: 2 Gang Points,</p>
   <p class="missions-page-p reddo">
<img src="in-game-cash.png" class="in-game-cash"> 2000 and 150 EXP ***
     </p>
     <div class="unlocked">
 <p>CHARACTER PROFILES UNLOCKED</p>
 <p>DEMETRIUS (DEMO) HARVELL</p>
 <p>JAZMIN INDI</p>
 <p>EVENT ORGANIZER</p>
     </div>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextFiftyNine();">Next</button>
  </div>
   `
}
// end of third mission

function nextFiftyNine() {
level = 4;

localStorage.setItem('level', JSON.stringify(level));
  
document.querySelector('.missions').addEventListener('click', () => {
 if (level === 4) {
  nextFiftyNine();
}
})
  
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
   <p class="missions-page-p">
   Three cars in a day? What's going on in this city? You think you've seen enough. Time to move on... You drive out of the city, and hit the big stretch of road ahead of you. What a day! You pass a sign with half a mind that says: The Outskirts.
You think nothing of it and continue your drive. 
     </p>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixty();">Next</button>
  </div>
   `
}

function nextSixty() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
   <p class="missions-page-p">
   Out of nowhere you hear thundering motors, all around you. You hear them, but as it's dark already, you can't see them. The noise gets louder and louder and before you realize it, you see a large group of bikers in the middle of the road. 
You hit your breaks and barely avoid a collision. What the...
     </p>
  
 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextFiftyNine();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtyOne();">Next</button>
  </div>
   `
}

function nextSixtyOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
      <p class="missions-page-p">
   An enormous figure with a bald head and huge muscles approaches your car. Without question, he opens the driver side door.
     </p>
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brutus.png" class="person-img"><span class="text-span">BRUTUS</span></div></p>
   <p class="p-box chat-box jes-talk">
     Please step out of the car.</span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixty();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtyTwo();">Next</button>
  </div>
   `
}

function nextSixtyTwo() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
      <p class="missions-page-p">
   This doesn't look like the man to argue with. You do as your told and a man and woman approach you.
     </p>
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/samantha.jpg" class="person-img"><span class="text-span">SAMANTHA</span></div></p>
   <p class="p-box chat-box jes-talk">
     Good evening stranger. Where you headed?</span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixtyOne();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtyThree();">Next</button>
  </div>
   `
}

function nextSixtyThree() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
   <p class="p-box chat-box jes-talk">
     Sorry bout the theatrics here, stranger. We don't get many people out here. Usually puts us on edge. We mean nothing by it. We're not half bad, hahaha How are you on a bike? Can you handle yourself?</span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixtyTwo();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtyFour();">Next</button>
  </div>
   `
}

function nextSixtyFour() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
   <p class="p-box chat-box jes-talk">
     How about you humour us and have a little race against Ricky here? If you win, we'll let you have one of the bikes? What do you say, stranger? You will? That's great!</span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixtyThree();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtyFive();">Next</button>
  </div>
   `
}

function nextSixtyFive() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
   <p class="p-box chat-box jes-talk">
     Come on everyone, Ricky's about to show this stranger what us bikers are made of! Let's have some fun!</span></p>
     
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/ricky.png" class="person-img"><span class="text-span">RICKY</span></div></p>
   <p class="p-box chat-box jes-talk">
    How's it going?
     </span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixtyFour();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtySix();">Next</button>
  </div>
   `
}

function nextSixtySix() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/ricky.png" class="person-img"><span class="text-span">RICKY</span></div></p>
   <p class="p-box chat-box jes-talk">
     Here, take this bike and let's see how you handle it. It's the same as mine, so no excuses about one being faster than the other, hahaha! 
     But just remember, I'm not holding back! Show me what you got!
     </span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixtyFive();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtySeven();">Next</button>
  </div>
   `
}

function nextSixtySeven() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
   <p class="missions-page-p">
   As you mount the bike, a large crowd joins the spectacle and starts cheering, for Ricky of course. Seems you have to prove yourself yet again. Ah well, here we go.
   </p>
   
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/samantha.jpg" class="person-img"><span class="text-span">SAMANTHA</span></div></p>
   <p class="p-box chat-box jes-talk">
     Ricky, are you ready? Stranger, are you ready? 3... 2... 1... GOOOO!</span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixtySix();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSixtyEight();">Next</button>
  </div>
   `
   raced = 0;
}

function nextSixtyEight() {
 if (raced !== 3) {
  clickableBtn();
  }
  document.querySelector('.missions').addEventListener('click', () => {
   
   nextSixtyEight();
   
    document.querySelector('.missions-4-progress').innerHTML = raced;
  })
  if (raced === 3) {
    document.querySelector('.race-btn').classList.remove('auto-pointer');
  }
  
 document.querySelector('.missions').addEventListener('click', () => {
   if (raced === 3) {
   document.querySelector('.missions-4-btn').style.display = 'block';
   }
 })
 
 function nextSixtyEightOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
   <p class="missions-page-p margin-topper" style="text-align: center;">
    Bikes or cars, it doesn't matter to you. 
    </p>
    <p class="missions-page-p reddo">
    Race three times in Adrenaline City: <br>The Outskirt
    Progress: <span class="missions-4-progress">0</span>/3 
   </p>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 missions-4-btn missions-btn next-btn" onclick="nextSixtyNine();">Next</button>
  </div>
   `
 }
 nextSixtyEightOne();
}

function nextSixtyNine() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
   <p class="p-box chat-box jes-talk">
     Well would you look at that! Ricky got beaten by a stranger! Didn't expect to see that!</span></p>
     
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/ricky.png" class="person-img"><span class="text-span">RICKY</span></div></p>
   <p class="p-box chat-box jes-talk">
    What the... Ugh! How?
     </span></p>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSeventy();">Next</button>
  </div>
   `
}

function nextSeventy() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/samantha.jpg" class="person-img"><span class="text-span">SAMANTHA</span></div></p>
   <p class="p-box chat-box jes-talk">
     Looks like we have a surprise in town! Well done, stranger!</span></p>
     
  <p class="missions-page-p reddo">CONGRATULATIONS! YOU HAVE OBTAINED:
     **** MOTORCYCLE ****
     </p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSixtyNine();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSeventyOne();">Next</button>
  </div>
   `
}

function nextSeventyOne() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
   
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
   <p class="p-box chat-box jes-talk">
    Very impressive, very impressive indeed! We could always use someone who knows how to truly handle a motorcycle! How about you join our crew?
     </span></p>

 <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSeventy();">Prev</button>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSeventyTwo();">Next</button>
  </div>
   `
}

function nextSeventyTwo() {
  moneyEarned += 2000;
  gCoinsEarned += 2;
  
  cash += 2000;
  exp += 150;
  gCoins += 2;
  
allExpHandle();
  
  if (fuel !== 10) {
    fuel += 1;
    document.querySelector('.total-fuel').innerHTML = fuel;
  }
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-exp').innerHTML = exp;
  document.querySelector('.total-gcoins').innerHTML = gCoins;
  
  
  localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('exp', JSON.stringify(exp))
 localStorage.setItem('gCoins', JSON.stringify(gCoins))
  
  cUnlocked += 4;

  showBrutus();
  showSamantha();
  showBrick();
  showRicky();

  document.querySelector('.mission-page').innerHTML = `
   <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
 <p class="missions-page-p reddo"> *** MISSION COMPLETE! You earned: 2 Gang Points,</p>
 <p class="missions-page-p reddo">
<img src="in-game-cash.png" class="in-game-cash"> 2000 and 150 EXP ***
 </p>
  <div class="unlocked">
   <p>CHARACTER PROFILES UNLOCKED</p>
   <p>BRUTUS</p>
  <p>SAMANTHA</p> 
   <p>BRICKER</p>
   <p>RICKY</p>
  </div>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSeventyThree();">Next</button>
  </div>
   `
}
// end of all prologue missions
function nextSeventyThree() {
level = 'done with prologue missions';

localStorage.setItem('level', JSON.stringify(level));
  
document.querySelector('.missions').addEventListener('click', () => {
 if (level === 'done with prologue missions') {
  nextSeventyThree();
}
})
 
  document.querySelector('.mission-page').innerHTML = `
  <p class="missions-page-p">
    Some of the most eventful days you've
     had in a long time. 
     What's with all these racing crews? There is a lot more going on here than you would think on the surface. Perhaps you should stick around, see what's truly going on here.
    I mean, it's not like you were going anywhere particular anyway.
But who to return to?
 You're pretty sure that if you choose one,
  the others won't be so happy with you. 
  </p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSeventyFour();">Next</button>
  </div>
   `
}

function nextSeventyFour() {
  document.querySelector('.mission-page').innerHTML = `
  <p class="missions-page-p">You have to think carefully.</p>
  <p class="missions-page-p reddo">
   CONGRATULATIONS! <br> YOU HAVE COMPLETED ALL FOUR PROLOGUE MISSIONS!
  </p>
  <p class="missions-page-p">
   In Adrenaline City, who you join up with, will determine the storyline you follow, as well as the majority of your vehicles. Choosing means committing. The stats of your PRIMARY VEHICLE will always be used for races and challenges, even when you're offline. 
  </p>
  
<div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSeventyThree();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="nextSeventyFive();">Next</button>
  </div>
   `
}

function nextSeventyFive() {
  document.querySelector('.mission-page').innerHTML = `
  <div class="crew-details">
    
  </div>
  
  <p class="missions-page-p">
   Please select carefully which crew you would like to join. You won't be able to switch to another crew until much later in the story.
  </p>
  <div class="pick-crew-div" style="margin-top: 20px;">
   <p style="font-weight: bold;">PICK YOUR CREW:</p>
    <p onclick="pickCrew(); mcmCrew();">DONNIE'S MUSCLE CAR MOTORS</p>
    <p onclick="mdCrew(); pickCrew();">MIMIKO'S DRIFTING CREW</p>
    <p onclick="eceCrew(); pickCrew()">DEMETRIUS' EXOTIC CUSTOMS ESSENTIALS</p>
    <p onclick="bbgCrew(); pickCrew()">BRICKER'S BIKER GANG</p>
  </div>

  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="nextSeventyFour();">Prev</button>
  </div>
   `
}

document.querySelector('.missions').addEventListener('click', () => {
 if (level === 2) {
  nextTwentySeven();
}
if (level === 3) {
  nextFourtyFive();
}
if (level === 4) {
  nextFiftyNine();
}
if (level === 'done with prologue missions') {
  nextSeventyThree();
}
if (level === 'mcm') {
  mcmMissions();
}
})


function mcmMissions() {
  if (level === 'mcm') {
    document.querySelector('.missions').addEventListener('click', () => {
      mcmMissions();
    })
  }
  level = 'mcm'
  document.querySelector('.mission-page').innerHTML = `
   <h4>Chapter 1: <br>"So you like muscle..."</h4> 
   
    <p class="text-par minus-top"><div class="flexy">
    <img src="/character-images/donnie-solano.jpg" 
    class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk">
   Well, well, look who decided to come back!
    Does this mean you decided to join us? That's great! I'm glad you did!
   </span></p>

   <p class="text-par minus-top"><div class="flexy">
   <img src="/character-images/donnie-solano.jpg" 
   class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk">
   So let's see what you're made of and how you 
   handle the road!
   Amanda! Saline! 
   </span></p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsTwo();">Next</button>
  </div>
   `
}

function mcmMissionsTwo() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>Chapter 1: <br>"So you like muscle..."</h4> 

   <p class="text-par minus-top"><div class="flexy">
   <img src="/character-images/donnie-solano.jpg" 
   class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk">
   Come meet our newest member!
   </span></p>
   
    <p class="text-par minus-top"><div class="flexy">
    <img src="/character-images/amanda.jpg" 
    class="person-img"><span class="text-span">AMANDA</span></div></p>
   <p class="p-box chat-box jes-talk">
   Hey there stranger. Are you the one who saved Freddie? 
   Just wanted to say thanks for that. He may be a handful,
    but we love him so much. Don't we, Saline?
   </span></p>

   <div class="prev-btn-div" style="margin-top: 35px;">
   <button class="prev-btn-1 prev-btn" onclick="mcmMissions();">Prev</button>
   </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsThree();">Next</button>
  </div>
   `
}

function mcmMissionsThree() {
  document.querySelector('.mission-page').innerHTML = `
   <h4>Chapter 1: <br>"So you like muscle..."</h4> 

   <p class="text-par minus-top"><div class="flexy">
   <img src="/character-images/saline.jpg" 
   class="person-img"><span class="text-span">SALINE</span></div></p>
   <p class="p-box chat-box jes-talk">
   Absolutely! Thank you so much for that.
    We wouldn't know what to do without him around here.
    So, are you ready, stranger?
   </span></p>

   <p class="missions-page-p margin-topper">Ready for what, you think to yourself.</p>
    

    <div class="prev-btn-div" style="margin-top: 35px;">
    <button class="prev-btn-1 prev-btn" onclick="mcmMissionsTwo();">Prev</button>
    </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsFour();">Next</button>
  </div>
   `
}

function mcmMissionsFour() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

    <p class="text-par minus-top"><div class="flexy">
    <img src="/character-images/donnie-solano.jpg" 
    class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
   <p class="p-box chat-box jes-talk">
     Heads up, stranger. We wanna see what you can do, 
     so you'll be racing against Amanda and Saline.
     Don't let either of them fool you.</span></p>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  It's very doubtful that you will be able to beat either of them, 
  but it's a good test of your skills.
  </span></p>

  <div class="prev-btn-div" style="margin-top: 35px;">
    <button class="prev-btn-1 prev-btn" onclick="mcmMissionsThree();">Prev</button>
    </div>
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsFive();">Next</button>
  </div>
  `
}

function mcmMissionsFive() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" class="person-img">
  <span class="text-span">DONNIE</span></div></p>
  <p class="p-box chat-box jes-talk">
  Get in your muscle car and let's do some racing! 
  </span></p>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/amanda.jpg" class="person-img">
  <span class="text-span">AMANDA</span></div></p>
  <p class="p-box chat-box jes-talk">
  I'll go first, boss. Show 'em how we do things at MCM!
  </span></p>

  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsFour();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsSix();">Next</button>
  </div>
   `
}

function mcmMissionsSix() {
  document.querySelector('.missions').addEventListener('click', () => {
    mcmMissionsSix();
    if (raced === 3) {
    document.querySelector('.missions-5-btn').style.display = 'block';
    }
    document.querySelector('.missions-5-progress').innerHTML = raced;
  })
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4> 

  <p class="missions-page-p reddo margin-topper">Make any muscle car your primary vehicle and
    finish first place 3 times in Adrenaline City: Downtown</p>

   <p class="missions-page-p reddo margin-topper">
   Progress:  First place wins in Adrenaline City: Downtown <span class="missions-5-progress">0</span>/3
   </p>


  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn missions-5-btn missions-btn" onclick="mcmMissionsSeven();">Next</button>
  </div>
   `
}

function mcmMissionsSeven() {
  raced = 0;
  moneyEarned += 2000;
  repEarned += 100;
  
  cash += 2000;
  rep += 100;
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-rep').innerHTML = rep;
  
  
 localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('rep', JSON.stringify(rep))

  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>
  
  <p class="missions-page-p reddo center-text margin-topper">
  ***CONGRATULATIONS***
  </p>
  <p class="missions-page-p reddo center-text margin-topper">
 You defeated Amanda and gained:
 </p>
 <p class="missions-page-p reddo center-text margin-topper">
 <img src="in-game-cash.png" class="in-game-cash"> 2000
 </p>
 <p class="missions-page-p reddo center-text margin-topper">
 100 Reputation
 </p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsEight();">Next</button>
  </div>
   `
}

function mcmMissionsEight() {
  cUnlocked += 2;
  showAmanda();
  showSaline();

  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4> 

  <div class="unlocked">
  <p>CHARACTER PROFILES UNLOCKED:</p>
  <p>AMANDA</p>
  <p>SALINE</p>
</div>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  WOW! I guess we underestimated you a little! 
  That was some fine driving!</span></p>

  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsSeven();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsNine();">Next</button>
  </div>
   `
}

function mcmMissionsNine() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/amanda.jpg" 
  class="person-img"><span class="text-span">AMANDA</span></div></p>
  <p class="p-box chat-box jes-talk">
  You got lucky! Bet you won't be so lucky against Saline.
   Go get 'em, girl!</span></p>


  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/saline.jpg" 
  class="person-img"><span class="text-span">SALINE</span></div></p>
  <p class="p-box chat-box jes-talk">
  You ready? Let's go then!</span></p>


  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsEight();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsTen();">Next</button>
  </div>
   `
}

function mcmMissionsTen() {
  document.querySelector('.missions').addEventListener('click', () => {
    mcmMissionsTen();
    if (raced === 3) {
    document.querySelector('.missions-6-btn').style.display = 'block';
    }
    document.querySelector('.missions-6-progress').innerHTML = raced;
  })

  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="missions-page-p">
  Make sure that a muscle car is still your 
  primary vehicle and finish first place 3 times 
  in Adrenaline City: Downtown
  </p>

  <p class="missions-page-p reddo margin-topper">
  Progress: First place wins in Adrenaline City: 
  Downtown <span class="missions-6-progress">0</span>/3
  </p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn missions-btn missions-6-btn" onclick="mcmMissionsEleven();">Next</button>
  </div>
   `
}

function mcmMissionsEleven() {
  raced = 0;
  moneyEarned += 2000;
  repEarned += 100;
  
  cash += 2000;
  rep += 100;
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-rep').innerHTML = rep;
  
  
 localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('rep', JSON.stringify(rep))

  document.querySelector('.mission-page').innerHTML = `
   <h4>Chapter 1: <br>"So you like muscle..."</h4>

    <p class="missions-page-p margin-toppper center-text reddo">
    ***CONGRATULATIONS***</p>
    <p class="missions-page-p margin-toppper center-text reddo">
    You defeated Saline and gained: </p>
    <p class="missions-page-p margin-toppper center-text reddo">
    <img src="in-game-cash.png" class="in-game-cash">2000</p>
    <p class="missions-page-p margin-toppper center-text reddo">
    100 Reputation</p>
    </p>

    <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/saline.jpg" 
  class="person-img"><span class="text-span">SALINE</span></div></p>
  <p class="p-box chat-box jes-talk">
  Hey! No fair! How did you get passed me in that last turn?</span></p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsTwelve();">Next</button>
  </div>
   `
}

function mcmMissionsTwelve() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  Would you look at that! Two for two!</span></p>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/joey.jpg" 
  class="person-img"><span class="text-span">JOEY SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  What's all the ruckus about?
  </span></p>

  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsEleven();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsThirteen();">Next</button>
  </div>
   `
}

function mcmMissionsThirteen() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="missions-page-p margin-topper">A man, dressed in a track suit walks
  down the stairs of the warehouse, 
  stretches and yawns as he approaches you.</p>

  
  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  Joey! Glad you could finally make it! 
  Come meet the newest member of our fine establishment! 
  They already defeated Amanda and Saline. 
  Can you believe that? Stranger, meet my brother, Joey.
  </span></p>
  
  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsTwelve();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsFourteen();">Next</button>
  </div>
   `
}

function mcmMissionsFourteen() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>
  
  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  What? Impossible! YOU, defeated both Amanda and Saline in a race?
 This I gotta see for myself!
  </span></p>

  <p class="missions-page-p margin-topper">
  Joey reaches out his hand to shake yours, and even though you only just met, 
  you can tell that he squeezes a little bit tighter than is necessary. 
  </p>
  
  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsThirteen();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsFiveteen();">Next</button>
  </div>
   `
}

function mcmMissionsFiveteen() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>
  
  <p class="missions-page-p margin-topper">
  You try to not pay attention to it. After all, you only just got here.  
  </p>
  
  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  What do you say, Joey?
  Wanna teach or new guest here how muscle heads truly race?
   Show them how it's done!
  </span></p>
  
  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsFourteen();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsSixteen();">Next</button>
  </div>
   `
}

function mcmMissionsSixteen() {
  document.querySelector('.missions').addEventListener('click', () => {
    mcmMissionsSixteen();
    if (raced === 3) {
    document.querySelector('.missions-7-btn').style.display = 'block';
    }
    document.querySelector('.missions-7-progress').innerHTML = raced;
  })
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>
  
  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/joey.jpg" 
  class="person-img"><span class="text-span">JOEY SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  Alright, but I want to see what they are truly made of. 
  Let's take it to the HIGHWAYS.
  </span></p>
  
  <p class="missions-page-p reddo margin-topper">
  Make any muscle car your primary vehicle and finish first place 3 times in
  Adrenaline City: HIGHWAYS <br>
  Progress:  First place wins in Adrenaline City: HIGHWAYS 
  <span class="missions-7-progress">0</span>/3</p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn missions-btn missions-7-btn" onclick="mcmMissionsSeventeen();">Next</button>
  </div>
   `
}

function mcmMissionsSeventeen() {
  raced = 0;
  moneyEarned += 3000;
  repEarned += 100;
  
  cash += 2000;
  rep += 100;

  cUnlocked += 1;

  showJoey();
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-rep').innerHTML = rep;
  
  
 localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('rep', JSON.stringify(rep))

  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>
  
  <p class="missions-page-p center-text margin-topper reddo">
    ***CONGRATULATIONS***
  </p>
  <p class="missions-page-p center-text reddo">
  You defeated Joey Solano and gained:
  </p>
  <p class="missions-page-p center-text reddo">
  <img src="in-game-cash" class="in-game-cash">3000
  </p>
  <p class="missions-page-p center-text reddo">
  100 Reputation 
  </p>

  <div class="unlocked">
  <p>***NEW CHARACTERS UNLOCKED***</p>
   <p>JOEY SOLANO</p>
  </div>


  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsEighteen();">Next</button>
  </div>
   `
}

function mcmMissionsEighteen() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/joey.jpg" 
  class="person-img"><span class="text-span">JOEY SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  Yo! What the heck? You got some crazy driving skills! 
  You're lucky that I just woke up. 
  Otherwise you wouldn't have won for sure!
  </span></p>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/saline.jpg" 
  class="person-img"><span class="text-span">SALINE</span></div></p>
  <p class="p-box chat-box jes-talk">
  Yo! What the heck? You got some crazy driving skills! 
  You're lucky that I just woke up. 
  Otherwise you wouldn't have won for sure!
  </span></p>
  
  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsNineteen();">Next</button>
  </div>
   `
}

function mcmMissionsNineteen() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/saline.jpg" 
  class="person-img"><span class="text-span">SALINE</span></div></p>
  <p class="p-box chat-box jes-talk">
  Even so, he can't ever hope to defeat Donnie in a race.
  </span></p>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  I'm not going to humiliate them on the first day!
  But I will put them through the ropes. Stranger, come with me, 
  let's do some driving.
  </span></p>
  
  <div class="prev-btn-div" style="margin-top: 35px;">
  <button class="prev-btn-1 prev-btn" onclick="mcmMissionsEighteen();">Prev</button>
  </div>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsTwenty();">Next</button>
  </div>
   `
}

function mcmMissionsTwenty() {
  document.querySelector('.missions').addEventListener('click', () => {
    mcmMissionsTwenty();
    if (raced === 3) {
    document.querySelector('.missions-8-btn').style.display = 'block';
    }
    document.querySelector('.missions-8-progress').innerHTML = raced;
  })

  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="margin-topper missions-page-p">
  Make any muscle car your primary vehicle and
  finish 4th or 5th place 3 times in Adrenaline City: Downtown
  </p>
  <p class="margin-topper missions-page-p">
  Win 10 challenges against racers of other crews <br>
  Progress:  Loses in Adrenaline City: Downtown
   <span class="missions-8-progress">0</span>/3 <br>
  Progress: 10 challenges won against other crews 0/10 <br>
 </p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn missions-btn misssions-8-progress" onclick="mcmMissionsTwentyOne();">Next</button>
  </div>
   `
}

function mcmMissionsTwentyOne() {
  raced = 0;
  moneyEarned += 5000;
  repEarned += 100;
  
  cash += 2000;
  rep += 100;
  
  document.querySelector('.total-cash').innerHTML = cash;
  document.querySelector('.total-rep').innerHTML = rep;
  
 localStorage.setItem('cash', JSON.stringify(cash))
 localStorage.setItem('rep', JSON.stringify(rep))

  allExpHandle();
  exp += 150;
  if (fuel !== 10) {
    fuel += 1;
    document.querySelector('.total-fuel').innerHTML = fuel;
  }
  localStorage.setItem('exp', JSON.stringify(exp))

  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="margin-topper center-text missions-page-p">
  ***CONGRATULATIONS***
  </p>

  <p class="center-text missions-page-p">
  YOU'VE COMPLETED: Chapter 1:"So you like muscle.."
  </p>

  <p class="center-text missions-page-p">
  You've earned:
  </p>

  <p class="center-text missions-page-p">
  $5000
  </p>

  <p class="center-text missions-page-p">
  100 reputation
  </p>

  <p class="center-text missions-page-p">
  ***NEW VEHICLE EARNED***
  </p>

  <p class="center-text missions-page-p">
  1969 Camaro ZL1
  </p>

  <p class="center-text missions-page-p">
  Collect your vehicle on the Inventory Page!
  </p>

  <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsTwentyTwo();">Next</button>
  </div>
   `
}

function mcmMissionsTwentyTwo() {
  document.querySelector('.mission-page').innerHTML = `
  <h4>Chapter 1: <br>"So you like muscle..."</h4>

  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/donnie-solano.jpg" 
  class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  Alright, alright. Not bad at all! 
  We can definitely work with that! You did good! 
  Now, there is a lot you still need to learn and a lot more
  to know about Adrenaline City, 
  so I suggest that you stick around and get familiar.
  But for now, let's grab a drink and celebrate!
  Welcome to MUSCLE CAR MOTORS!
  </span></p>

 <!-- <div class="next-btn-div" style="margin-top: 35px;">
  <button class="next-btn-1 next-btn" onclick="mcmMissionsTwentyTwo();">Next</button>
  </div> -->
   `
}











