function challengerOne() {
  document.querySelector('.box-1').innerHTML = `
     <div class="chal-result-div chal-result-div-1">
     <div class="main-1">
      <p class="p-chal-1">
      <span class="over-dem-all-1 p-chal-1"></span></p
      <p class="p-chal-1">
      <span class="over-dem-too-1 p-chal-1"></span></p>
      <p class="p-chal-1">
      <span class="over-dem-three-1 p-chal-1"></span></p>
     <svg class="exit-res" onclick="closeResOne()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
   
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-1').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-1').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-1 p-chal-1">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-1').innerHTML = `What a shame! You <span class="result-of-chal-1 p-chal-1">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-1').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-1 p-chal-1">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-1').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-1 p-chal-1">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-1').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-1 p-chal-1">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-1').innerHTML = `Better luck next time! You <span class="result-of-chal-1 p-chal-1">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-1').innerHTML = '';
        document.querySelector('.over-dem-three-1').innerHTML = '';
 
    document.querySelectorAll('.p-chal-1').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-1').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-1 p-chal-1">won</span>!<span class="result-of-chal-1 p-chal-1"></span>
      `
      document.querySelector('.over-dem-too-1').innerHTML = `     You gained <span class="exp- p-chal-1">300</span> experience and won $<span class="money-chal p-chal-1">10,000</span>!`
      
      document.querySelector('.over-dem-three-1').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
}

function closeResOne() {
   document.querySelector('.box-1').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerOne(); challenge();">Challenge</button>
    </div>
   `
}

function challengerTwo() {
  document.querySelector('.box-2').innerHTML = `
     <div class="chal-result-div chal-result-div-2">
     <div class="main-2">
      <p class="p-chal-2">
      <span class="over-dem-all-2 p-chal-2"></span></p>
      <p class="p-chal-2">
      <span class="p-chal-2 over-dem-too-2"></span></p>
      <p class="p-chal-2">
      <span class="p-chal-2 over-dem-three-2"></span></p>
     <svg class="exit-res" onclick="closeResTwo()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-2').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-2').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-2 p-chal-2">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-2').innerHTML = `What a shame! You <span class="result-of-chal-2 p-chal-2">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-2').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-2 p-chal-2">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-2').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-2 p-chal-2">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-2').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-2 p-chal-2">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-2').innerHTML = `Better luck next time! You <span class="result-of-chal-2 p-chal-2">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-2').innerHTML = '';
        document.querySelector('.over-dem-three-2').innerHTML = '';
 
    document.querySelectorAll('.p-chal-2').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-2').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-2 p-chal-2">won</span>!<span class="result-of-chal-2 p-chal-2"></span>
      `
      document.querySelector('.over-dem-too-2').innerHTML = ` You gained <span class="exp- p-chal-2">300</span> experience and won $<span class="money-chal p-chal-2">10,000</span>!`
      
      document.querySelector('.over-dem-three-2').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
}

function closeResTwo() {
   document.querySelector('.box-2').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerTwo(); challenge();">Challenge</button>
    </div>
   `
}

function challengerThr() {
  document.querySelector('.box-3').innerHTML = `
     <div class="chal-result-div chal-result-div-3">
     <div class="main-3">
      <p class="p-chal-3">
      <span class="over-dem-all-3 p-chal-3"></span></p>
      <p class="p-chal-3">
      <span class="over-dem-too-3 p-chal-3"></p>
      <p class="p-chal-3">
      <span class="over-dem-three-3"></span>
     <svg class="exit-res" onclick="closeResThr()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  
   
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-3').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-3').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-3 p-chal-3">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-3').innerHTML = `What a shame! You <span class="result-of-chal-3 p-chal-3">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-3').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-3 p-chal-3">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-3').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-3 p-chal-3">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-3').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-3 p-chal-3">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-3').innerHTML = `Better luck next time! You <span class="result-of-chal-3 p-chal-3">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-3').innerHTML = '';
        document.querySelector('.over-dem-three-3').innerHTML = '';
 
    document.querySelectorAll('.p-chal-3').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-3').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-3 p-chal-3">won</span>!<span class="result-of-chal-3 p-chal-3"></span>
      `
      document.querySelector('.over-dem-too-3').innerHTML = `     You gained <span class="exp- p-chal-3">300</span> experience and won $<span class="money-chal p-chal-3">10,000</span>!`
      
      document.querySelector('.over-dem-three-3').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
}

function closeResThr() {
   document.querySelector('.box-3').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerThr(); challenge();">Challenge</button>
    </div>
   `
}

function challengerFour() {
  document.querySelector('.box-4').innerHTML = `
     <div class="chal-result-div chal-result-div-4">
     <div class="main-4">
      <p class="p-chal-4">
      <span class="p-chal-4 over-dem-all-4"></span></p>
      <p class="p-chal-4">
      <span class="p-chal-4 over-dem-too-4"></span></p>
      <p class="p-chal-4">
      <span class="p-chal-4 over-dem-three-4"></span></p>
     <svg class="exit-res" onclick="closeResFour()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
   
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-4').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-4').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-4 p-chal-4">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-4').innerHTML = `What a shame! You <span class="result-of-chal-4 p-chal-4">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-4').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-4 p-chal-4">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-4').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-4 p-chal-4">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-4').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-4 p-chal-4">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-4').innerHTML = `Better luck next time! You <span class="result-of-chal-4 p-chal-4">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-4').innerHTML = '';
        document.querySelector('.over-dem-three-4').innerHTML = '';
 
    document.querySelectorAll('.p-chal-4').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-4').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-4 p-chal-4">won</span>!<span class="result-of-chal-4 p-chal-4"></span>
      `
      document.querySelector('.over-dem-too-4').innerHTML = `     You gained <span class="exp- p-chal-4">300</span> experience and won $<span class="money-chal p-chal-4">10,000</span>!`
      
      document.querySelector('.over-dem-three-4').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
}

function closeResFour() {
   document.querySelector('.box-4').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerFour(); challenge();">Challenge</button>
    </div>
   `
}

function challengerFive() {
  document.querySelector('.box-5').innerHTML = `
     <div class="chal-result-div chal-result-div-5">
     <div class="main-5">
      <p class="p-chal-5">
      <span class="p-chal-5 over-dem-all-5"></span></p>
      <p class="p-chal-5">
      <span class="p-chal-5 over-dem-too-5"></span></p>
      <p class="p-chal-5">
      <span class="p-chal-5 over-dem-three-5"></span></p>
     <svg class="exit-res" onclick="closeResFive()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-5').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-5').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-5 p-chal-5">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-5').innerHTML = `What a shame! You <span class="result-of-chal-5 p-chal-5">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-5').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-5 p-chal-5">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-5').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-5 p-chal-5">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-5').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-5 p-chal-5">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-5').innerHTML = `Better luck next time! You <span class="result-of-chal-5 p-chal-5">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-5').innerHTML = '';
        document.querySelector('.over-dem-three-5').innerHTML = '';
 
    document.querySelectorAll('.p-chal-5').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-5').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-5 p-chal-5">won</span>!<span class="result-of-chal-5 p-chal-5"></span>
      `
      document.querySelector('.over-dem-too-5').innerHTML = `     You gained <span class="exp- p-chal-5">300</span> experience and won $<span class="money-chal p-chal-5">10,000</span>!`
      
      document.querySelector('.over-dem-three-5').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
}

function closeResFive() {
   document.querySelector('.box-5').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerFive(); challenge();">Challenge</button>
    </div>
   `
}

function challengerSix() {
  document.querySelector('.box-6').innerHTML = `
     <div class="chal-result-div chal-result-div-6">
     <div class="main-6">
      <p class="p-chal-6">
      <span class="over-dem-all-6 p-chal-6"></span></p>
      <p class="p-chal-6">
      <span class="over-dem-too-6 p-chal-6"></span></p>
      <p class="p-chal-6">
      <span class="p-chal-6 over-dem-three-6"></span></p>
     <svg class="exit-res" onclick="closeResSix()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-6').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-6').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-6 p-chal-6">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-6').innerHTML = `What a shame! You <span class="result-of-chal-6 p-chal-6">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-6').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-6 p-chal-6">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-6').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-6 p-chal-6">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-6').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-6 p-chal-6">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-6').innerHTML = `Better luck next time! You <span class="result-of-chal-6 p-chal-6">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-6').innerHTML = '';
        document.querySelector('.over-dem-three-6').innerHTML = '';
 
    document.querySelectorAll('.p-chal-6').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-6').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-6 p-chal-6">won</span>!<span class="result-of-chal-6 p-chal-6"></span>
      `
      document.querySelector('.over-dem-too-6').innerHTML = `     You gained <span class="exp- p-chal-6">300</span> experience and won $<span class="money-chal p-chal-6">10,000</span>!`
      
      document.querySelector('.over-dem-three-6').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
  
}

function closeResSix() {
   document.querySelector('.box-6').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerSix(); challenge();">Challenge</button>
    </div>
   `
}

function challengerSev() {
  document.querySelector('.box-7').innerHTML = `
     <div class="chal-result-div chal-result-div-7">
     <div class="main-7">
      <p class="p-chal-7">
      <span class="over-dem-all-7 p-chal-7"></span></p>
      <p class="p-chal-7">
      <span class="over-dem-too-7 p-chal-7"></span></p>
      <p class="p-chal-7">
      <span class="over-dem-three-7 p-chal-7"></span></p>
     <svg class="exit-res" onclick="closeResSev()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-7').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-7').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-7 p-chal-7">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-7').innerHTML = `What a shame! You <span class="result-of-chal-7 p-chal-7">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-7').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-7 p-chal-7">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-7').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-7 p-chal-7">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-7').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-7 p-chal-7">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-7').innerHTML = `Better luck next time! You <span class="result-of-chal-8 p-chal-7">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-7').innerHTML = '';
        document.querySelector('.over-dem-three-7').innerHTML = '';
 
    document.querySelectorAll('.p-chal-7').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-7').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-7 p-chal-7">won</span>!<span class="result-of-chal-8 p-chal-7"></span>
      `
      document.querySelector('.over-dem-too-7').innerHTML = `     You gained <span class="exp- p-chal-7">300</span> experience and won $<span class="money-chal p-chal-7">10,000</span>!`
      
      document.querySelector('.over-dem-three-7').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
  
}

function closeResSev() {
   document.querySelector('.box-7').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerSev(); challenge();">Challenge</button>
    </div>
   `
}

function challengerEight() {
  document.querySelector('.box-8').innerHTML = `
     <div class="chal-result-div chal-result-div-8">
     <div class="main-8">
      <p class="p-chal-8">
      <span class="over-dem-all-8 p-chal-8"></span></p>
      <p class="p-chal-8">
      <span class="over-dem-too-8 p-chal-8"></span></p>
      <p class="p-chal-8">
      <span class="over-dem-three-8 p-chal-8"></span></p>
     <svg class="exit-res" onclick="closeResEight()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-8').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-8').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-8 p-chal-8">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-8').innerHTML = `What a shame! You <span class="result-of-chal-8 p-chal-8">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-8').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-8 p-chal-8">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-8').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-8 p-chal-8">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-8').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-8 p-chal-8">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-8').innerHTML = `Better luck next time! You <span class="result-of-chal-8 p-chal-8">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-8').innerHTML = '';
        document.querySelector('.over-dem-three-8').innerHTML = '';
 
    document.querySelectorAll('.p-chal-8').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-8').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-8 p-chal-8">won</span>!<span class="result-of-chal-8 p-chal-8"></span>
      `
      document.querySelector('.over-dem-too-8').innerHTML = `     You gained <span class="exp- p-chal-8">300</span> experience and won $<span class="money-chal p-chal-8">10,000</span>!`
      
      document.querySelector('.over-dem-three-8').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
  
}

function closeResEight() {
   document.querySelector('.box-8').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerEight(); challenge();">Challenge</button>
    </div>
   `
}

function challengerNine() {
  document.querySelector('.box-9').innerHTML = `
     <div class="chal-result-div chal-result-div-9">
     <div class="main">
      <p class="p-chal-9">
      <span class="over-dem-all-9 p-chal-9"></span></p>
      <p class="p-chal-9">
      <span class="over-dem-too-9 p-chal-9"></span></p>
      <p class="p-chal-9">
      <span class="over-dem-three-9 p-chal-9"></span></p>
     <svg class="exit-res" onclick="closeResNine()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-9').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-9').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-9 p-chal-9">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-9').innerHTML = `What a shame! You <span class="result-of-chal-9 p-chal-9">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-9').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-9 p-chal-9">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-9').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-9 p-chal-9">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-9').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-9 p-chal-9">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-9').innerHTML = `Better luck next time! You <span class="result-of-chal-9 p-chal-9">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-9').innerHTML = '';
        document.querySelector('.over-dem-three-9').innerHTML = '';
 
    document.querySelectorAll('.p-chal-9').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-9').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-9 p-chal-9">won</span>!<span class="result-of-chal-9 p-chal-9"></span>
      `
      document.querySelector('.over-dem-too-9').innerHTML = `     You gained <span class="exp- p-chal-9">300</span> experience and won $<span class="money-chal p-chal-9">10,000</span>!`
      
      document.querySelector('.over-dem-three-9').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
}

function closeResNine() {
   document.querySelector('.box-9').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerNine(); challenge();">Challenge</button>
    </div>
   `
  
}

let result;

function challengerTen() {
  document.querySelector('.box-10').innerHTML = `
     <div class="chal-result-div chal-result-div-10">
     <div class="main-10">
     <div class="divo">
      <p class="p-chal-10 detail-10"><span class="p-chal-10 over-dem-all-10"></span></p>
      <p class="p-chal-10 outcome-10"><span class="p-chal-10 over-dem-too-10"><span class="exp-chal p-chal-10"></span><span class="money-chal p-chal-10"></span></span></p>
      <p class="p-chal-10 info-10"><span class="p-chal-10 over-dem-three-10"></span></p>
      </div>
     <svg class="exit-res" onclick="closeResTen()" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </div>
     </div>
  `
  
  const randomNumber = Math.random()
  if (randomNumber > 0 && randomNumber < 0.5) {
    document.querySelector('.chal-result-div-10').classList.add('redded');
    
    const randomize = Math.random() 
    if (randomize > 0 && randomize < 0.5) {
      // i'm making an if else statement with the 0.5 and  it gets nested with three if and else if statementts with the / (quater)
      const random = Math.random() 
       if (random > 0 && random < 1 / 3) {
         document.querySelector('.over-dem-all-10').innerHTML = `See that car in front of you? That should have been you! You <span class="result-of-chal-10 p-chal-10">lost</span>! ` 
       } else if (random > 1 / 3 && random < 2 / 3) {
          document.querySelector('.over-dem-all-10').innerHTML = `What a shame! You <span class="result-of-chal-10 p-chal-10">lost</span>!`
       } else if (random > 2 / 3 && random < 1) {
          document.querySelector('.over-dem-all-10').innerHTML = `Hey, if you ain't first, you're last! You <span class="result-of-chal-10 p-chal-10">lost</span>!`
       }
   
    } else {
      const random = Math.random()
      if (random > 0 && random < 2 / 3)
      { 
        document.querySelector('.over-dem-all-10').innerHTML = `Eh, weren't you supposed to win? You <span class="result-of-chal-10 p-chal-10">lost</span>! `
      } else if (random > 1 / 3 && random < 2 / 3) {
   document.querySelector('.over-dem-all-10').innerHTML = `Aw! Looks like you're not fast enough! You <span class="result-of-chal-10 p-chal-10">lost</span>! `
      } else if (random > 2 / 3 && random < 1) {
   document.querySelector('.over-dem-all-10').innerHTML = `Better luck next time! You <span class="result-of-chal-10 p-chal-10">lost</span>! `
      }
    } 
        
        document.querySelector('.over-dem-too-10').innerHTML = '';
        document.querySelector('.over-dem-three-10').innerHTML = '';
 
    document.querySelectorAll('.p-chal-10').forEach((pChal) => {
        pChal.style.color = 'white';
        
    })
  } else {
        document.querySelector('.over-dem-all-10').innerHTML = `
      Congratulations! You challenged Lovely's team and <span class="result-of-chal-10 p-chal-10">won</span>!<span class="result-of-chal-10 p-chal-10"></span>
      `
      document.querySelector('.over-dem-too-10').innerHTML = `     You gained <span class="exp- p-chal-10">300</span> experience and won $<span class="money-chal p-chal-10">10,000</span>!`
      
      document.querySelector('.over-dem-three-10').innerHTML = `Words spread, other racers want to challenge you more often.`
  }
}




function closeResTen() {
   document.querySelector('.box-10').innerHTML = `
     <img src="image.png" class="box-img">
     <div class="name-gang">
    <p>Player's Name</p>
    <p>Gang Affiliation</p> 
    </div>
    <div>
    <button class="challenge-btn" onclick="challengerTen(); challenge();">Challenge</button>
    </div>
   `
}

function challenge() {
   fuel -= 1;
   localStorage.setItem('fuel', JSON.stringify(fuel))
   document.querySelector('.total-fuel').innerHTML = fuel;
   if (fuel === 9) {
    fuelTimer()
   }
}