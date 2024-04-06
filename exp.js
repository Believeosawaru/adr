function allExpHandle() {
 handleExpOne();
 
  handleExpTwo();
  
  handleExpThree();
  
  handleExpFour();
  
  handleExpFive();

  handleExpSix();

  handleExpSeven();

  handleExpEight();

  handleExpNine();
}

function handleRaceLocations() {
  if (playerLevel === 3) {
    document.querySelector('.d-p-2').innerHTML = `
      <span class="title-arena">ADRENALINE CITY: HIGHWAYS</span> <br>
      The long stretches of highway, the drifters paradise. The place to be. MDC rules here.
    `
    document.querySelector('.a-2').style.display = 'none';
    document.querySelector('#l-2').style.visibility = 'visible';
    document.querySelector('#l-2').style.pointerEvents = 'auto';
    document.querySelector('.race-img-2').style.opacity = 1; 
  }

  if (playerLevel === 6) {
    document.querySelector('.d-p-3').innerHTML = `
    <span class="title-arena">ADRENALINE CITY: THE HILLS </span> <br>
    The domain of the ECE. The rich and famous reside here. Best bring your wallet.
 `
  document.querySelector('.a-3').style.display = 'none';
  document.querySelector('#l-3').style.visibility = 'visible';
  document.querySelector('#l-3').style.pointerEvents = 'auto';
  document.querySelector('.race-img-3').style.opacity = 1; 
  }

  if (playerLevel === 9) {
  document.querySelector('.d-p-4').innerHTML = `
    <span class="title-arena">ADRENALINE CITY: THE OUTSKIRTS</span> <br>
    Open plains, open road, open mind. TBC has set up shop here. Not for the faint of heart.
     `
  document.querySelector('.a-4').style.display = 'none';
  document.querySelector('#l-4').style.visibility = 'visible';
  document.querySelector('#l-4').style.pointerEvents = 'auto';
  document.querySelector('.race-img-4').style.opacity = 1; 
  }

  if (playerLevel === 25) {
    document.querySelector('.d-p-5').innerHTML = `
    <span class="title-arena">RACING CIRCUIT</span> <br>
    Test your skills, test your vehicles, test your self! The Ultimate Racing Grounds for any skilled driver!
 `
  document.querySelector('.a-5').style.display = 'none';
  document.querySelector('#l-5').style.visibility = 'visible';
  document.querySelector('#l-5').style.pointerEvents = 'auto';
  document.querySelector('.race-img-5').style.opacity = 1;
  }

  if (playerLevel === 35) {
    document.querySelector('.d-p-6').innerHTML = `
    <span class="title-arena">THE GRAND PRIX </span> <br>
    Only the best of the best can race here. And you will be put to the test! Bring your A Game!
 `
  document.querySelector('.a-6').style.display = 'none';
  document.querySelector('#l-6').style.visibility = 'visible';
  document.querySelector('#l-6').style.pointerEvents = 'auto';
  document.querySelector('.race-img-6').style.opacity = 1;
  }
}

function handleExpOne() {
  if (playerLevel === 1) {
    
   if (exp === 1) {
      expOne.style.width = '5%'
    }
   if (exp === 2) {
      expOne.style.width = '10%'
    }
   if (exp === 3) {
      expOne.style.width = '15%'
    }
   if (exp === 4) {
      expOne.style.width = '20%'
    }
   if (exp === 5) {
      expOne.style.width = '25%'
    }
   if (exp === 6) {
      expOne.style.width = '30%'
    }
   if (exp === 7) {
      expOne.style.width = '35%'
   }
   if (exp === 8) {
      expOne.style.width = '40%'
    } 
   if (exp === 9) {
      expOne.style.width = '45%'
    } 
   if (exp === 10) {
      expOne.style.width = '50%'
    } 
   if (exp === 11) {
      expOne.style.width = '55%'
    } 
   if (exp === 12) {
      expOne.style.width = '60%'
    } 
   if (exp === 13) {
      expOne.style.width = '65%'
    } 
   if (exp === 14) {
      expOne.style.width = '70%'
    } 
   if (exp === 15) {
      expOne.style.width = '75%'
    } 
   if (exp === 16) {
      expOne.style.width = '80%'
    } 
   if (exp === 17) {
      expOne.style.width = '85%'
    } 
   if (exp === 18) {
      expOne.style.width = '90%'
    } 
    if (exp === 19) {
      expOne.style.width = '95%'
    }
    if (exp === 20) {
      expOne.style.width = '100%'
    }
    // first bar
   if (exp === 21) {
      expOne.style.width = '100%'
      expTwo.style.width = '5%'
    }
   if (exp === 22) {
      expOne.style.width = '100%'
      expTwo.style.width = '10%'
    }
   if (exp === 23) {
      expOne.style.width = '100%'
      expTwo.style.width = '15%'
    }
   if (exp === 24) {
      expOne.style.width = '100%'
      expTwo.style.width = '20%'
    }
   if (exp === 25) {
      expOne.style.width = '100%'
      expTwo.style.width = '25%'
    }
   if (exp === 26) {
      expOne.style.width = '100%'
      expTwo.style.width = '30%'
    }
   if (exp === 27) {
      expOne.style.width = '100%'
      expTwo.style.width = '35%'
   }
   if (exp === 28) {
      expOne.style.width = '100%'
      expTwo.style.width = '40%'
    } 
   if (exp === 29) {
      expOne.style.width = '100%'
      expTwo.style.width = '45%'
    } 
   if (exp === 30) {
      expOne.style.width = '100%'
      expTwo.style.width = '50%'
    } 
   if (exp === 31) {
      expOne.style.width = '100%'
      expTwo.style.width = '55%'
    } 
   if (exp === 32) {
      expOne.style.width = '100%'
      expTwo.style.width = '60%'
    } 
   if (exp === 33) {
      expOne.style.width = '100%'
      expTwo.style.width = '65%'
    } 
   if (exp === 34) {
      expOne.style.width = '100%'
      expTwo.style.width = '70%'
    } 
   if (exp === 35) {
      expOne.style.width = '100%'
      expTwo.style.width = '75%'
    } 
   if (exp === 36) {
      expOne.style.width = '100%'
      expTwo.style.width = '80%'
    } 
    if (exp === 37) {
      expOne.style.width = '100%'
      expTwo.style.width = '85%'
    } 
    if (exp === 38) {
      expOne.style.width = '100%'
      expTwo.style.width = '90%'
    } 
    if (exp === 39) {
      expOne.style.width = '100%'
      expTwo.style.width = '95%'
    }
    if (exp === 40) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
    }
    // second bar
    if (exp === 41) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '5%'
    }
    if (exp === 42) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '10%'
    }
    if (exp === 43) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '15%'
    }
    if (exp === 44) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '20%'
    }
    if (exp === 45) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '25%'
    }
    if (exp === 46) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '30%'
    }
    if (exp === 47) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '35%'
    }
    if (exp === 48) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '40%'
    }
    if (exp === 49) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '45%'
    }
    if (exp === 50) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '50%'
    }
    if (exp === 51) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '55%'
    }
    if (exp === 52) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '60%'
    }
    if (exp === 53) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '65%'
    }
    if (exp === 54) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '70%'
    }
    if (exp === 55) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '75%'
    }
    if (exp === 56) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '80%'
    }
    if (exp === 57) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '85%'
    }
    if (exp === 58) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '90%'
    }
    if (exp === 59) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '95%'
    }
    if (exp === 60) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
    }
    // fourth bar
    if (exp === 61) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '5%'
    }
    if (exp === 62) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '10%'
    }
    if (exp === 63) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '15%'
    }
    if (exp === 64) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '20%'
    }
    if (exp === 65) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '25%'
    }
    if (exp === 66) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '30%'
    }
    if (exp === 67) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '35%'
    }
    if (exp === 68) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '40%'
    }
    if (exp === 69) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '45%'
    }
    if (exp === 70) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '50%'
    }
    if (exp === 71) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '55%'
    }
    if (exp === 72) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '60%'
    }
    if (exp === 73) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '65%'
    }
    if (exp === 74) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '70%'
    }
    if (exp === 75) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '75%'
    }
    if (exp === 76) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '80%'
    }
    if (exp === 77) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '85%'
    }
    if (exp === 78) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '90%'
    }
    if (exp === 79) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '95%'
    }
    if (exp === 80) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
    }
    // fifth bar
    if (exp === 81) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '5%'
    }
    if (exp === 82) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '10%'
    }
    if (exp === 83) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '15%'
    }
    if (exp === 84) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '20%'
    }
    if (exp === 85) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '25%'
    }
    if (exp === 86) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '30%'
    }
    if (exp === 87) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '35%'
    }
    if (exp === 88) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
     expFour.style.width = '100%'
      expFive.style.width = '40%'
    }
    if (exp === 89) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '45%'
    }
    if (exp === 90) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '50%'
    }
    if (exp === 91) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '55%'
    }
    if (exp === 92) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '60%'
    }
    if (exp === 93) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '65%'
    }
    if (exp === 94) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '70%'
    }
    if (exp === 95) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '75%'
    }
    if (exp === 96) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '80%'
    }
    if (exp === 97) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '85%'
    }
    if (exp === 98) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '90%'
    }
    if (exp === 99) {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '95%'
    }
    
   if (exp === 100) {
     setTimeout(() => {
      expOne.style.display = 'none'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
    }, 500)
   }
   if (exp >= 100) {
      handleExpTwo();
      levelUpShow();
      
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '100%'
      
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;

      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
     document.querySelector('.the-level').innerHTML = 2;
     
     document.querySelector('.next-level').innerHTML = '500';
     
     document.querySelector('.level-title').innerHTML = 'Newbie'
    }

    }
  }

function handleExpTwo() {
  if (playerLevel === 2) {
    
    if (exp >= 101 && exp <= 180) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 101) {
      expOne.style.width = '1.25%'
    }
   if (exp === 102) {
      expOne.style.width = '2.5%'
    }
   if (exp === 103) {
      expOne.style.width = '3.75%'
    }
   if (exp === 104) {
      expOne.style.width = '5%'
    }
   if (exp === 105) {
      expOne.style.width = '6.25%'
    }
   if (exp === 106) {
      expOne.style.width = '7.5%'
    }
   if (exp === 107) {
      expOne.style.width = '8.75%'
   }
   if (exp === 108) {
      expOne.style.width = '10%'
    } 
   if (exp === 109) {
      expOne.style.width = '11.25%'
    } 
   if (exp === 110) {
      expOne.style.width = '12.5%'
    } 
   if (exp === 111) {
      expOne.style.width = '13.75%'
    } 
   if (exp === 112) {
      expOne.style.width = '15%'
    } 
   if (exp === 113) {
      expOne.style.width = '16.25%'
    } 
   if (exp === 114) {
      expOne.style.width = '17.5%'
    } 
   if (exp === 115) {
      expOne.style.width = '18.75%'
    } 
   if (exp === 116) {
      expOne.style.width = '20%'
    } 
   if (exp === 117) {
      expOne.style.width = '21.25%'
    } 
   if (exp === 118) {
      expOne.style.width = '22.5%'
    } 
   if (exp === 119) {
      expOne.style.width = '23.75%'
    }
   if (exp === 120) {
      expOne.style.width = '25%'
    }
   if (exp === 121) {
     expOne.style.width = '26.25%'
    }
   if (exp === 122) {
     expOne.style.width = '27.5%'
    }
   if (exp === 123) {
     expOne.style.width = '28.75%'
    }
   if (exp === 124) {
     expOne.style.width = '30%'
    }
   if (exp === 125) {
     expOne.style.width = '31.25%'
    }
   if (exp === 126) {
     expOne.style.width = '32.5%'
    }
   if (exp === 127) {
     expOne.style.width = '33.75%'
   }
   if (exp === 128) {
     expOne.style.width = '35%'
    } 
   if (exp === 129) {
     expOne.style.width = '36.25%'
    } 
   if (exp === 130) {
     expOne.style.width = '37.5%'
    } 
   if (exp === 131) {
     expOne.style.width = '38.75%'
    } 
   if (exp === 132) {
     expOne.style.width = '40%'
    } 
   if (exp === 133) {
      expOne.style.width = '41.25%'
    } 
   if (exp === 134) {
      expOne.style.width = '42.5%'
    } 
   if (exp === 135) {
      expOne.style.width = '43.75%'
    } 
   if (exp === 136) {
      expOne.style.width = '45%'
    } 
   if (exp === 137) {
      expOne.style.width = '46.25%'
    } 
   if (exp === 138) {
      expOne.style.width = '47.5%'
    } 
   if (exp === 139) {
      expOne.style.width = '48.75%'
    }
   if (exp === 140) {
      expOne.style.width = '50%'
    }
   if (exp === 141) {
      expOne.style.width = '51.25%'
    }
   if (exp === 142) {
      expOne.style.width = '52.5%'
    }
   if (exp === 143) {
      expOne.style.width = '53.75%'
    }
   if (exp === 144) {
      expOne.style.width = '55%'
    }
   if (exp === 145) {
      expOne.style.width = '56.25%'
    }
   if (exp === 146) {
      expOne.style.width = '57.5%'
    }
   if (exp === 147) {
      expOne.style.width = '58.75%'
    }
   if (exp === 148) {
      expOne.style.width = '60%'
    }
   if (exp === 149) {
      expOne.style.width = '61.25%'
    }
   if (exp === 150) {
      expOne.style.width = '62.75%'
    }
   if (exp === 151) {
      expOne.style.width = '63.75%'
    }
   if (exp === 152) {
      expOne.style.width = '65%'
    }
   if (exp === 153) {
      expOne.style.width = '66.25%'
    }
   if (exp === 154) {
      expOne.style.width = '67.5%'
    }
   if (exp === 155) {
      expOne.style.width = '68.75%'
    }
    if (exp === 156) {
      expOne.style.width = '70%'
    }
    if (exp === 157) {
      expOne.style.width = '71.25%'
    }
    if (exp === 158) {
      expOne.style.width = '72.5%'
    }
    if (exp === 159) {
      expOne.style.width = '73.75%'
    }
    if (exp === 160) {
      expOne.style.width = '75%'
    }
    if (exp === 161) {
      expOne.style.width = '76.25%'
    }
    if (exp === 162) {
      expOne.style.width = '77.5%'
    }
    if (exp === 163) {
      expOne.style.width = '78.75%'
    }
    if (exp === 164) {
      expOne.style.width = '80%'
    }
    if (exp === 165) {
      expOne.style.width = '81.25%'
    }
    if (exp === 166) {
      expOne.style.width = '82.5%'
    }
    if (exp === 167) {
      expOne.style.width = '83.75%'
    }
    if (exp === 168) {
      expOne.style.width = '85%'
    }
    if (exp === 169) {
      expOne.style.width = '86.25%'
    }
    if (exp === 170) {
      expOne.style.width = '87.5%'
    }
    if (exp === 171) {
      expOne.style.width = '88.75%'
    }
    if (exp === 172) {
      expOne.style.width = '90%'
    }
    if (exp === 173) {
      expOne.style.width = '91.25%'
    }
    if (exp === 174) {
      expOne.style.width = '92.5%'
    }
    if (exp === 175) {
      expOne.style.width = '93.75%'
    }
    if (exp === 176) {
      expOne.style.width = '95%'
    }
    if (exp === 177) {
      expOne.style.width = '96.25%'
    }
    if (exp === 178) {
      expOne.style.width = '97.5%'
    }
    if (exp === 179) {
      expOne.style.width = '98.75%'
    }
    if (exp === 180) {
      expOne.style.width = '100%'
    }
  }
  
    if (exp >= 181 && exp <= 260) 
    {
      expOne.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 181) {
      expTwo.style.width = '1.25%'
    }
   if (exp === 182) {
      expTwo.style.width = '2.5%'
    }
   if (exp === 183) {
      expTwo.style.width = '3.75%'
    }
   if (exp === 184) {
      expTwo.style.width = '5%'
    }
   if (exp === 185) {
      expTwo.style.width = '6.25%'
    }
   if (exp === 186) {
      expTwo.style.width = '7.5%'
    }
   if (exp === 187) {
      expTwo.style.width = '8.75%'
   }
   if (exp === 188) {
      expTwo.style.width = '10%'
    } 
   if (exp === 189) {
      expTwo.style.width = '11.25%'
    } 
   if (exp === 190) {
      expTwo.style.width = '12.5%'
    } 
   if (exp === 191) {
      expTwo.style.width = '13.75%'
    } 
   if (exp === 192) {
      expTwo.style.width = '15%'
    } 
   if (exp === 193) {
      expTwo.style.width = '16.25%'
    } 
   if (exp === 194) {
      expTwo.style.width = '17.5%'
    } 
   if (exp === 195) {
      expTwo.style.width = '18.75%'
    } 
   if (exp === 196) {
      expTwo.style.width = '20%'
    } 
   if (exp === 197) {
      expTwo.style.width = '21.25%'
    } 
   if (exp === 198) {
      expTwo.style.width = '22.5%'
    } 
   if (exp === 199) {
      expTwo.style.width = '23.75%'
    }
   if (exp === 200) {
      expTwo.style.width = '25%'
    }
   if (exp === 201) {
     expTwo.style.width = '26.25%'
    }
   if (exp === 202) {
     expTwo.style.width = '27.5%'
    }
   if (exp === 203) {
     expTwo.style.width = '28.75%'
    }
   if (exp === 204) {
     expTwo.style.width = '30%'
    }
   if (exp === 205) {
     expTwo.style.width = '31.25%'
    }
   if (exp === 206) {
     expTwo.style.width = '32.5%'
    }
   if (exp === 207) {
     expTwo.style.width = '33.75%'
   }
   if (exp === 208) {
     expTwo.style.width = '35%'
    } 
   if (exp === 209) {
     expTwo.style.width = '36.25%'
    } 
   if (exp === 210) {
     expTwo.style.width = '37.5%'
    } 
   if (exp === 211) {
     expTwo.style.width = '38.75%'
    } 
   if (exp === 212) {
     expTwo.style.width = '40%'
    } 
   if (exp === 213) {
      expTwo.style.width = '41.25%'
    } 
   if (exp === 214) {
      expTwo.style.width = '42.5%'
    } 
   if (exp === 215) {
      expTwo.style.width = '43.75%'
    } 
   if (exp === 216) {
      expTwo.style.width = '45%'
    } 
   if (exp === 217) {
      expTwo.style.width = '46.25%'
    } 
   if (exp === 218) {
      expTwo.style.width = '47.5%'
    } 
   if (exp === 219) {
      expTwo.style.width = '48.75%'
    }
   if (exp === 220) {
      expTwo.style.width = '50%'
    }
   if (exp === 221) {
      expTwo.style.width = '51.25%'
    }
   if (exp === 222) {
      expTwo.style.width = '52.5%'
    }
   if (exp === 223) {
      expTwo.style.width = '53.75%'
    }
   if (exp === 224) {
      expTwo.style.width = '55%'
    }
   if (exp === 225) {
      expTwo.style.width = '56.25%'
    }
   if (exp === 226) {
      expTwo.style.width = '57.5%'
    }
   if (exp === 227) {
      expTwo.style.width = '58.75%'
    }
   if (exp === 228) {
      expTwo.style.width = '60%'
    }
   if (exp === 229) {
      expTwo.style.width = '61.25%'
    }
   if (exp === 230) {
      expTwo.style.width = '62.75%'
    }
   if (exp === 231) {
      expTwo.style.width = '63.75%'
    }
   if (exp === 232) {
      expTwo.style.width = '65%'
    }
   if (exp === 233) {
      expTwo.style.width = '66.25%'
    }
   if (exp === 234) {
      expTwo.style.width = '67.5%'
    }
   if (exp === 235) {
      expTwo.style.width = '68.75%'
    }
    if (exp === 236) {
      expTwo.style.width = '70%'
    }
    if (exp === 237) {
      expTwo.style.width = '71.25%'
    }
    if (exp === 238) {
      expTwo.style.width = '72.5%'
    }
    if (exp === 239) {
      expTwo.style.width = '73.75%'
    }
    if (exp === 240) {
      expTwo.style.width = '75%'
    }
    if (exp === 241) {
      expTwo.style.width = '76.25%'
    }
    if (exp === 242) {
      expTwo.style.width = '77.5%'
    }
    if (exp === 243) {
      expTwo.style.width = '78.75%'
    }
    if (exp === 244) {
      expTwo.style.width = '80%'
    }
    if (exp === 245) {
      expTwo.style.width = '81.25%'
    }
    if (exp === 246) {
      expTwo.style.width = '82.5%'
    }
    if (exp === 247) {
      expTwo.style.width = '83.75%'
    }
    if (exp === 248) {
      expTwo.style.width = '85%'
    }
    if (exp === 249) {
      expTwo.style.width = '86.25%'
    }
    if (exp === 250) {
      expTwo.style.width = '87.5%'
    }
    if (exp === 251) {
      expTwo.style.width = '88.75%'
    }
    if (exp === 252) {
      expTwo.style.width = '90%'
    }
    if (exp === 253) {
      expTwo.style.width = '91.25%'
    }
    if (exp === 254) {
      expTwo.style.width = '92.5%'
    }
    if (exp === 255) {
      expTwo.style.width = '93.75%'
    }
    if (exp === 256) {
      expTwo.style.width = '95%'
    }
    if (exp === 257) {
      expTwo.style.width = '96.25%'
    }
    if (exp === 258) {
      expTwo.style.width = '97.5%'
    }
    if (exp === 259) {
      expTwo.style.width = '98.75%'
    }
    if (exp === 260) {
      expTwo.style.width = '100%'
    }
  }
  
    if (exp >= 261 && exp <= 340) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 261) {
      expThree.style.width = '1.25%'
    }
   if (exp === 262) {
      expThree.style.width = '2.5%'
    }
   if (exp === 263) {
      expThree.style.width = '3.75%'
    }
   if (exp === 264) {
      expThree.style.width = '5%'
    }
   if (exp === 265) {
      expThree.style.width = '6.25%'
    }
   if (exp === 266) {
      expThree.style.width = '7.5%'
    }
   if (exp === 267) {
      expThree.style.width = '8.75%'
   }
   if (exp === 268) {
      expThree.style.width = '10%'
    } 
   if (exp === 269) {
      expThree.style.width = '11.25%'
    } 
   if (exp === 270) {
      expThree.style.width = '12.5%'
    } 
   if (exp === 271) {
      expThree.style.width = '13.75%'
    } 
   if (exp === 272) {
      expThree.style.width = '15%'
    } 
   if (exp === 273) {
      expThree.style.width = '16.25%'
    } 
   if (exp === 274) {
      expThree.style.width = '17.5%'
    } 
   if (exp === 275) {
      expThree.style.width = '18.75%'
    } 
   if (exp === 276) {
      expThree.style.width = '20%'
    } 
   if (exp === 277) {
      expThree.style.width = '21.25%'
    } 
   if (exp === 278) {
      expOhree.style.width = '22.5%'
    } 
   if (exp === 279) {
      expThree.style.width = '23.75%'
    }
   if (exp === 280) {
      expThree.style.width = '25%'
    }
   if (exp === 281) {
     expThree.style.width = '26.25%'
    }
   if (exp === 282) {
     expThree.style.width = '27.5%'
    }
   if (exp === 283) {
     expThree.style.width = '28.75%'
    }
   if (exp === 284) {
     expThree.style.width = '30%'
    }
   if (exp === 285) {
     expThree.style.width = '31.25%'
    }
   if (exp === 286) {
     expThree.style.width = '32.5%'
    }
   if (exp === 287) {
     expThree.style.width = '33.75%'
   }
   if (exp === 288) {
     expThree.style.width = '35%'
    } 
   if (exp === 289) {
     expThree.style.width = '36.25%'
    } 
   if (exp === 290) {
     expThree.style.width = '37.5%'
    } 
   if (exp === 291) {
     expThree.style.width = '38.75%'
    } 
   if (exp === 292) {
     expThree.style.width = '40%'
    } 
   if (exp === 293) {
      expThree.style.width = '41.25%'
    } 
   if (exp === 294) {
      expThree.style.width = '42.5%'
    } 
   if (exp === 295) {
      expThree.style.width = '43.75%'
    } 
   if (exp === 296) {
      expThree.style.width = '45%'
    } 
   if (exp === 297) {
      expThree.style.width = '46.25%'
    } 
   if (exp === 298) {
      expThree.style.width = '47.5%'
    } 
   if (exp === 299) {
      expThree.style.width = '48.75%'
    }
   if (exp === 300) {
      expThree.style.width = '50%'
    }
   if (exp === 301) {
      expThree.style.width = '51.25%'
    }
   if (exp === 302) {
      expTwo.style.width = '52.5%'
    }
   if (exp === 303) {
      expThree.style.width = '53.75%'
    }
   if (exp === 304) {
      expThree.style.width = '55%'
    }
   if (exp === 305) {
      expThree.style.width = '56.25%'
    }
   if (exp === 306) {
      expThree.style.width = '57.5%'
    }
   if (exp === 307) {
      expThree.style.width = '58.75%'
    }
   if (exp === 308) {
      expThree.style.width = '60%'
    }
   if (exp === 309) {
      expThree.style.width = '61.25%'
    }
   if (exp === 310) {
      expThree.style.width = '62.75%'
    }
   if (exp === 311) {
      expThree.style.width = '63.75%'
    }
   if (exp === 312) {
      expThree.style.width = '65%'
    }
   if (exp === 313) {
      expThree.style.width = '66.25%'
    }
   if (exp === 314) {
      expThree.style.width = '67.5%'
    }
   if (exp === 315) {
      expThree.style.width = '68.75%'
    }
    if (exp === 316) {
      expThree.style.width = '70%'
    }
    if (exp === 317) {
      expThree.style.width = '71.25%'
    }
    if (exp === 318) {
      expThree.style.width = '72.5%'
    }
    if (exp === 319) {
      expThree.style.width = '73.75%'
    }
    if (exp === 320) {
      expThree.style.width = '75%'
    }
    if (exp === 321) {
      expThree.style.width = '76.25%'
    }
    if (exp === 322) {
      expThree.style.width = '77.5%'
    }
    if (exp === 323) {
      expThree.style.width = '78.75%'
    }
    if (exp === 324) {
      expThree.style.width = '80%'
    }
    if (exp === 325) {
      expThree.style.width = '81.25%'
    }
    if (exp === 326) {
      expThree.style.width = '82.5%'
    }
    if (exp === 327) {
      expThree.style.width = '83.75%'
    }
    if (exp === 328) {
      expThree.style.width = '85%'
    }
    if (exp === 329) {
      expThree.style.width = '86.25%'
    }
    if (exp === 330) {
      expThree.style.width = '87.5%'
    }
    if (exp === 331) {
      expThree.style.width = '88.75%'
    }
    if (exp === 332) {
      expThree.style.width = '90%'
    }
    if (exp === 333) {
      expThree.style.width = '91.25%'
    }
    if (exp === 334) {
      expThree.style.width = '92.5%'
    }
    if (exp === 335) {
      expThree.style.width = '93.75%'
    }
    if (exp === 336) {
      expThree.style.width = '95%'
    }
    if (exp === 337) {
      expThree.style.width = '96.25%'
    }
    if (exp === 338) {
      expThree.style.width = '97.5%'
    }
    if (exp === 339) {
      expThree.style.width = '98.75%'
    }
    if (exp === 340) {
      expThree.style.width = '100%'
    }
  } 
  
   if (exp >= 341 && exp <= 420) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 341) {
      expFour.style.width = '1.25%'
    }
   if (exp === 342) {
      expFour.style.width = '2.5%'
    }
   if (exp === 343) {
      expFour.style.width = '3.75%'
    }
   if (exp === 344) {
      expFour.style.width = '5%'
    }
   if (exp === 345) {
      expFour.style.width = '6.25%'
    }
   if (exp === 346) {
      expFour.style.width = '7.5%'
    }
   if (exp === 347) {
      expFour.style.width = '8.75%'
   }
   if (exp === 348) {
      expFour.style.width = '10%'
    } 
   if (exp === 349) {
      expFour.style.width = '11.25%'
    } 
   if (exp === 350) {
      expFour.style.width = '12.5%'
    } 
   if (exp === 351) {
      expFour.style.width = '13.75%'
    } 
   if (exp === 352) {
      expFour.style.width = '15%'
    } 
   if (exp === 353) {
      expFour.style.width = '16.25%'
    } 
   if (exp === 354) {
      expFour.style.width = '17.5%'
    } 
   if (exp === 355) {
      expFour.style.width = '18.75%'
    } 
   if (exp === 356) {
      expFour.style.width = '20%'
    } 
   if (exp === 357) {
      expFour.style.width = '21.25%'
    } 
   if (exp === 358) {
      expFour.style.width = '22.5%'
    } 
   if (exp === 359) {
      expFour.style.width = '23.75%'
    }
   if (exp === 360) {
      expFour.style.width = '25%'
    }
   if (exp === 361) {
     expFour.style.width = '26.25%'
    }
   if (exp === 362) {
     expFour.style.width = '27.5%'
    }
   if (exp === 363) {
     expFour.style.width = '28.75%'
    }
   if (exp === 364) {
     expFour.style.width = '30%'
    }
   if (exp === 365) {
     expFour.style.width = '31.25%'
    }
   if (exp === 366) {
     expFour.style.width = '32.5%'
    }
   if (exp === 367) {
     expFour.style.width = '33.75%'
   }
   if (exp === 368) {
     expFour.style.width = '35%'
    } 
   if (exp === 369) {
     expFour.style.width = '36.25%'
    } 
   if (exp === 370) {
     expFour.style.width = '37.5%'
    } 
   if (exp === 371) {
     expFour.style.width = '38.75%'
    } 
   if (exp === 372) {
     expFour.style.width = '40%'
    } 
   if (exp === 373) {
      expFour.style.width = '41.25%'
    } 
   if (exp === 374) {
      expFour.style.width = '42.5%'
    } 
   if (exp === 375) {
      expFour.style.width = '43.75%'
    } 
   if (exp === 376) {
      expFour.style.width = '45%'
    } 
   if (exp === 377) {
      expFour.style.width = '46.25%'
    } 
   if (exp === 378) {
      expFour.style.width = '47.5%'
    } 
   if (exp === 379) {
      expFour.style.width = '48.75%'
    }
   if (exp === 380) {
      expFour.style.width = '50%'
    }
   if (exp === 381) {
      expFour.style.width = '51.25%'
    }
   if (exp === 382) {
      expFour.style.width = '52.5%'
    }
   if (exp === 383) {
      expFour.style.width = '53.75%'
    }
   if (exp === 384) {
      expFour.style.width = '55%'
    }
   if (exp === 385) {
      expFour.style.width = '56.25%'
    }
   if (exp === 386) {
      expFour.style.width = '57.5%'
    }
   if (exp === 387) {
      expFour.style.width = '58.75%'
    }
   if (exp === 388) {
      expFour.style.width = '60%'
    }
   if (exp === 389) {
      expFour.style.width = '61.25%'
    }
   if (exp === 390) {
      expFour.style.width = '62.75%'
    }
   if (exp === 391) {
      expFour.style.width = '63.75%'
    }
   if (exp === 392) {
      expFour.style.width = '65%'
    }
   if (exp === 393) {
      expFour.style.width = '66.25%'
    }
   if (exp === 394) {
      expFour.style.width = '67.5%'
    }
   if (exp === 395) {
      expFour.style.width = '68.75%'
    }
    if (exp === 396) {
      expFour.style.width = '70%'
    }
    if (exp === 397) {
      expFour.style.width = '71.25%'
    }
    if (exp === 398) {
      expFour.style.width = '72.5%'
    }
    if (exp === 399) {
      expFour.style.width = '73.75%'
    }
    if (exp === 400) {
      expFour.style.width = '75%'
    }
    if (exp === 401) {
      expFour.style.width = '76.25%'
    }
    if (exp === 402) {
      expFour.style.width = '77.5%'
    }
    if (exp === 403) {
      expFour.style.width = '78.75%'
    }
    if (exp === 404) {
      expFour.style.width = '80%'
    }
    if (exp === 405) {
      expFour.style.width = '81.25%'
    }
    if (exp === 406) {
      expFour.style.width = '82.5%'
    }
    if (exp === 407) {
      expFour.style.width = '83.75%'
    }
    if (exp === 408) {
      expFour.style.width = '85%'
    }
    if (exp === 409) {
      expFour.style.width = '86.25%'
    }
    if (exp === 410) {
      expFour.style.width = '87.5%'
    }
    if (exp === 411) {
      expFour.style.width = '88.75%'
    }
    if (exp === 412) {
      expFour.style.width = '90%'
    }
    if (exp === 413) {
      expFour.style.width = '91.25%'
    }
    if (exp === 414) {
      expFour.style.width = '92.5%'
    }
    if (exp === 415) {
      expFour.style.width = '93.75%'
    }
    if (exp === 416) {
      expFour.style.width = '95%'
    }
    if (exp === 417) {
      expFour.style.width = '96.25%'
    }
    if (exp === 418) {
      expFour.style.width = '97.5%'
    }
    if (exp === 419) {
      expFour.style.width = '98.75%'
    }
    if (exp === 420) {
      expFour.style.width = '100%'
    }
  } 
  
   if (exp >= 421 && exp <= 500) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'block'
   if (exp === 421) {
      expFive.style.width = '1.25%'
    }
   if (exp === 422) {
      expFive.style.width = '2.5%'
    }
   if (exp === 423) {
      expFive.style.width = '3.75%'
    }
   if (exp === 424) {
      expFive.style.width = '5%'
    }
   if (exp === 425) {
      expFive.style.width = '6.25%'
    }
   if (exp === 426) {
      expFive.style.width = '7.5%'
    }
   if (exp === 427) {
      expFive.style.width = '8.75%'
   }
   if (exp === 428) {
      expFive.style.width = '10%'
    } 
   if (exp === 429) {
      expFive.style.width = '11.25%'
    } 
   if (exp === 430) {
      expFive.style.width = '12.5%'
    } 
   if (exp === 431) {
      expFive.style.width = '13.75%'
    } 
   if (exp === 432) {
      expFive.style.width = '15%'
    } 
   if (exp === 433) {
      expFive.style.width = '16.25%'
    } 
   if (exp === 434) {
      expFive.style.width = '17.5%'
    } 
   if (exp === 435) {
      expFive.style.width = '18.75%'
    } 
   if (exp === 436) {
      expFive.style.width = '20%'
    } 
   if (exp === 437) {
      expFive.style.width = '21.25%'
    } 
   if (exp === 438) {
      expFive.style.width = '22.5%'
    } 
   if (exp === 439) {
      expFive.style.width = '23.75%'
    }
   if (exp === 440) {
      expFive.style.width = '25%'
    }
   if (exp === 441) {
     expFive.style.width = '26.25%'
    }
   if (exp === 442) {
     expFive.style.width = '27.5%'
    }
   if (exp === 443) {
     expFive.style.width = '28.75%'
    }
   if (exp === 444) {
     expFive.style.width = '30%'
    }
   if (exp === 445) {
     expFive.style.width = '31.25%'
    }
   if (exp === 446) {
     expFive.style.width = '32.5%'
    }
   if (exp === 447) {
     expFive.style.width = '33.75%'
   }
   if (exp === 448) {
     expFive.style.width = '35%'
    } 
   if (exp === 449) {
     expFive.style.width = '36.25%'
    } 
   if (exp === 450) {
     expFive.style.width = '37.5%'
    } 
   if (exp === 451) {
     expFive.style.width = '38.75%'
    } 
   if (exp === 452) {
     expFive.style.width = '40%'
    } 
   if (exp === 453) {
      expFive.style.width = '41.25%'
    } 
   if (exp === 454) {
      expFive.style.width = '42.5%'
    } 
   if (exp === 455) {
      expFive.style.width = '43.75%'
    } 
   if (exp === 456) {
      expFive.style.width = '45%'
    } 
   if (exp === 457) {
      expFive.style.width = '46.25%'
    } 
   if (exp === 458) {
      expFive.style.width = '47.5%'
    } 
   if (exp === 459) {
      expFive.style.width = '48.75%'
    }
   if (exp === 460) {
      expFive.style.width = '50%'
    }
   if (exp === 461) {
      expFive.style.width = '51.25%'
    }
   if (exp === 462) {
      expFive.style.width = '52.5%'
    }
   if (exp === 463) {
      expFive.style.width = '53.75%'
    }
   if (exp === 464) {
      expFive.style.width = '55%'
    }
   if (exp === 465) {
      expFive.style.width = '56.25%'
    }
   if (exp === 466) {
      expFive.style.width = '57.5%'
    }
   if (exp === 467) {
      expFive.style.width = '58.75%'
    }
   if (exp === 468) {
      expFive.style.width = '60%'
    }
   if (exp === 469) {
      expFive.style.width = '61.25%'
    }
   if (exp === 470) {
      expFive.style.width = '62.75%'
    }
   if (exp === 471) {
      expFive.style.width = '63.75%'
    }
   if (exp === 472) {
      expFive.style.width = '65%'
    }
   if (exp === 473) {
      expFive.style.width = '66.25%'
    }
   if (exp === 474) {
      expFive.style.width = '67.5%'
    }
   if (exp === 475) {
      expFive.style.width = '68.75%'
    }
    if (exp === 476) {
      expFive.style.width = '70%'
    }
    if (exp === 477) {
      expFive.style.width = '71.25%'
    }
    if (exp === 478) {
      expFive.style.width = '72.5%'
    }
    if (exp === 479) {
      expFive.style.width = '73.75%'
    }
    if (exp === 480) {
      expFive.style.width = '75%'
    }
    if (exp === 481) {
      expFive.style.width = '76.25%'
    }
    if (exp === 482) {
      expFive.style.width = '77.5%'
    }
    if (exp === 483) {
      expFive.style.width = '78.75%'
    }
    if (exp === 484) {
      expFive.style.width = '80%'
    }
    if (exp === 485) {
      expFive.style.width = '81.25%'
    }
    if (exp === 486) {
      expFive.style.width = '82.5%'
    }
    if (exp === 487) {
      expFive.style.width = '83.75%'
    }
    if (exp === 488) {
      expFive.style.width = '85%'
    }
    if (exp === 489) {
      expFive.style.width = '86.25%'
    }
    if (exp === 490) {
      expFive.style.width = '87.5%'
    }
    if (exp === 491) {
      expFive.style.width = '88.75%'
    }
    if (exp === 492) {
      expFive.style.width = '90%'
    }
    if (exp === 493) {
      expFive.style.width = '91.25%'
    }
    if (exp === 494) {
      expFive.style.width = '92.5%'
    }
    if (exp === 495) {
      expFive.style.width = '93.75%'
    }
    if (exp === 496) {
      expFive.style.width = '95%'
    }
    if (exp === 497) {
      expFive.style.width = '96.25%'
    }
    if (exp === 498) {
      expFive.style.width = '97.5%'
    }
    if (exp === 499) {
      expFive.style.width = '98.75%'
    }
    if (exp === 500) {
       expFive.style.width = '100%'
    }
  } 
    if (exp === 500) {
     setTimeout(() => {
      expOne.style.display = 'none'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
    }, 500)
     levelUpShow();
     handleExpThree();
    }
    if (exp >= 500) {
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
      
      handleRaceLocations();

      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
     levelUpShow();
      
      handleExpThree();
            
      document.querySelector('.player-level').innerHTML = playerLevel;
      
     document.querySelector('.the-level').innerHTML = 3;
     
     document.querySelector('.next-level').innerHTML = '1000';
     
     document.querySelector('.level-title').innerHTML = 'Newbie lvl 1'
    }
   
  }
}

function handleExpThree() {
  if (playerLevel === 3) {
    
    if (exp >= 501 && exp <= 600) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 501) {
      expOne.style.width = '1%'
    }
   if (exp === 502) {
      expOne.style.width = '2%'
    }
   if (exp === 503) {
      expOne.style.width = '3%'
    }
   if (exp === 504) {
      expOne.style.width = '4%'
    }
   if (exp === 505) {
      expOne.style.width = '5%'
    }
   if (exp === 506) {
      expOne.style.width = '6%'
    }
   if (exp === 507) {
      expOne.style.width = '7%'
   }
   if (exp === 508) {
      expOne.style.width = '8%'
    } 
   if (exp === 509) {
      expOne.style.width = '9%'
    } 
   if (exp === 510) {
      expOne.style.width = '10%'
    } 
   if (exp === 511) {
      expOne.style.width = '11%'
    } 
   if (exp === 512) {
      expOne.style.width = '12%'
    } 
   if (exp === 513) {
      expOne.style.width = '13%'
    } 
   if (exp === 514) {
      expOne.style.width = '14%'
    } 
   if (exp === 515) {
      expOne.style.width = '15%'
    } 
   if (exp === 516) {
      expOne.style.width = '16%'
    } 
   if (exp === 517) {
      expOne.style.width = '17%'
    } 
   if (exp === 518) {
      expOne.style.width = '18%'
    } 
   if (exp === 519) {
      expOne.style.width = '19%'
    }
   if (exp === 520) {
      expOne.style.width = '20%'
    }
   if (exp === 521) {
     expOne.style.width = '21%'
    }
   if (exp === 522) {
     expOne.style.width = '22%'
    }
   if (exp === 523) {
     expOne.style.width = '23%'
    }
   if (exp === 524) {
     expOne.style.width = '24%'
    }
   if (exp === 525) {
     expOne.style.width = '25%'
    }
   if (exp === 526) {
     expOne.style.width = '26%'
    }
   if (exp === 527) {
     expOne.style.width = '27%'
   }
   if (exp === 528) {
     expOne.style.width = '28%'
    } 
   if (exp === 529) {
     expOne.style.width = '29%'
    } 
   if (exp === 530) {
     expOne.style.width = '30%'
    } 
   if (exp === 531) {
     expOne.style.width = '31%'
    } 
   if (exp === 532) {
     expOne.style.width = '32%'
    } 
   if (exp === 533) {
      expOne.style.width = '33%'
    } 
   if (exp === 534) {
      expOne.style.width = '34%'
    } 
   if (exp === 535) {
      expOne.style.width = '35%'
    } 
   if (exp === 536) {
      expOne.style.width = '36%'
    } 
   if (exp === 537) {
      expOne.style.width = '37%'
    } 
   if (exp === 538) {
      expOne.style.width = '38%'
    } 
   if (exp === 539) {
      expOne.style.width = '39%'
    }
   if (exp === 540) {
      expOne.style.width = '40%'
    }
   if (exp === 541) {
      expOne.style.width = '41%'
    }
   if (exp === 542) {
      expOne.style.width = '42%'
    }
   if (exp === 543) {
      expOne.style.width = '43%'
    }
   if (exp === 544) {
      expOne.style.width = '44%'
    }
   if (exp === 545) {
      expOne.style.width = '45%'
    }
   if (exp === 546) {
      expOne.style.width = '46%'
    }
   if (exp === 547) {
      expOne.style.width = '47%'
    }
   if (exp === 548) {
      expOne.style.width = '48%'
    }
   if (exp === 549) {
      expOne.style.width = '49%'
    }
   if (exp === 550) {
      expOne.style.width = '50%'
    }
   if (exp === 551) {
      expOne.style.width = '51%'
    }
   if (exp === 552) {
      expOne.style.width = '52%'
    }
   if (exp === 553) {
      expOne.style.width = '53%'
    }
   if (exp === 554) {
      expOne.style.width = '54%'
    }
   if (exp === 555) {
      expOne.style.width = '55%'
    }
    if (exp === 556) {
      expOne.style.width = '56%'
    }
    if (exp === 557) {
      expOne.style.width = '57%'
    }
    if (exp === 558) {
      expOne.style.width = '58%'
    }
    if (exp === 559) {
      expOne.style.width = '59%'
    }
    if (exp === 560) {
      expOne.style.width = '60%'
    }
    if (exp === 561) {
      expFour.style.width = '61%'
    }
    if (exp === 562) {
      expOne.style.width = '62%'
    }
    if (exp === 563) {
      expOne.style.width = '63%'
    }
    if (exp === 564) {
      expOne.style.width = '64%'
    }
    if (exp === 565) {
      expOne.style.width = '65%'
    }
    if (exp === 566) {
      expOne.style.width = '66%'
    }
    if (exp === 567) {
      expOne.style.width = '67%'
    }
    if (exp === 568) {
      expOne.style.width = '68%'
    }
    if (exp === 569) {
      expOne.style.width = '69%'
    }
    if (exp === 570) {
      expOne.style.width = '70%'
    }
    if (exp === 571) {
      expOne.style.width = '71%'
    }
    if (exp === 572) {
      expOne.style.width = '72%'
    }
    if (exp === 573) {
      expOne.style.width = '73%'
    }
    if (exp === 574) {
      expOne.style.width = '74%'
    }
    if (exp === 575) {
      expOne.style.width = '75%'
    }
    if (exp === 576) {
      expOne.style.width = '76%'
    }
    if (exp === 577) {
      expOne.style.width = '77%'
    }
    if (exp === 578) {
      expOne.style.width = '78%'
    }
    if (exp === 579) {
      expOne.style.width = '79%'
    }
    if (exp === 580) {
      expOne.style.width = '80%'
    }
    if (exp === 581) {
      expOne.style.width = '81%'
    }
    if (exp === 582) {
      expOne.style.width = '82%'
    }
    if (exp === 583) {
      expOne.style.width = '83%'
    }
    if (exp === 584) {
      expOne.style.width = '84%'
    }
    if (exp === 585) {
      expOne.style.width = '85%'
    }
    if (exp === 586) {
      expOne.style.width = '86%'
    }
    if (exp === 587) {
      expOne.style.width = '87%'
    }
    if (exp === 588) {
      expOne.style.width = '88%'
    }
    if (exp === 589) {
      expOne.style.width = '89%'
    }
    if (exp === 590) {
      expOne.style.width = '90%'
    }
    if (exp === 591) {
      expOne.style.width = '91%'
    }
    if (exp === 592) {
      expOne.style.width = '92%'
    }
    if (exp === 593) {
      expOne.style.width = '93%'
    }
    if (exp === 594) {
      expOne.style.width = '94%'
    }
    if (exp === 595) {
      expOne.style.width = '95%'
    }
    if (exp === 596) {
      expOne.style.width = '96%'
    }
    if (exp === 597) {
      expOne.style.width = '97%'
    }
    if (exp === 598) {
      expOne.style.width = '98%'
    }
    if (exp === 599) {
      expOne.style.width = '99%'
    }
    if (exp === 600) {
      expOne.style.width = '100%'
    }
  }
  
    if (exp >= 601 && exp <= 700) 
    {
      expOne.style.width = '100%'
      
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 601) {
      expTwo.style.width = '1%'
    }
   if (exp === 602) {
      expTwo.style.width = '2%'
    }
   if (exp === 603) {
      expTwo.style.width = '3%'
    }
   if (exp === 604) {
      expTwo.style.width = '4%'
    }
   if (exp === 605) {
      expTwo.style.width = '5%'
    }
   if (exp === 606) {
      expTwo.style.width = '6%'
    }
   if (exp === 607) {
      expTwo.style.width = '7%'
   }
   if (exp === 608) {
      expTwo.style.width = '8%'
    } 
   if (exp === 609) {
      expTwo.style.width = '9%'
    } 
   if (exp === 610) {
      expTwo.style.width = '10%'
    } 
   if (exp === 611) {
      expTwo.style.width = '11%'
    } 
   if (exp === 612) {
      expTwo.style.width = '12%'
    } 
   if (exp === 613) {
      expTwo.style.width = '13%'
    } 
   if (exp === 614) {
      expTwo.style.width = '14%'
    } 
   if (exp === 615) {
      expTwo.style.width = '15%'
    } 
   if (exp === 616) {
      expTwo.style.width = '16%'
    } 
   if (exp === 617) {
      expTwo.style.width = '17%'
    } 
   if (exp === 618) {
      expTwo.style.width = '18%'
    } 
   if (exp === 619) {
      expTwo.style.width = '19%'
    }
   if (exp === 620) {
      expTwo.style.width = '20%'
    }
   if (exp === 621) {
     expTwo.style.width = '21%'
    }
   if (exp === 622) {
     expTwo.style.width = '22%'
    }
   if (exp === 623) {
     expTwo.style.width = '23%'
    }
   if (exp === 624) {
     expTwo.style.width = '24%'
    }
   if (exp === 625) {
     expTwo.style.width = '25%'
    }
   if (exp === 626) {
     expTwo.style.width = '26%'
    }
   if (exp === 627) {
     expTwo.style.width = '27%'
   }
   if (exp === 628) {
     expTwo.style.width = '28%'
    } 
   if (exp === 629) {
     expTwo.style.width = '29%'
    } 
   if (exp === 630) {
     expTwo.style.width = '30%'
    } 
   if (exp === 631) {
     expTwo.style.width = '31%'
    } 
   if (exp === 632) {
     expTwo.style.width = '32%'
    } 
   if (exp === 633) {
      expTwo.style.width = '33%'
    } 
   if (exp === 634) {
      expTwo.style.width = '34%'
    } 
   if (exp === 635) {
      expTwo.style.width = '35%'
    } 
   if (exp === 636) {
      expTwo.style.width = '36%'
    } 
   if (exp === 637) {
      expTwo.style.width = '37%'
    } 
   if (exp === 638) {
      expTwo.style.width = '38%'
    } 
   if (exp === 639) {
      expTwo.style.width = '39%'
    }
   if (exp === 640) {
      expTwo.style.width = '40%'
    }
   if (exp === 641) {
      expTwo.style.width = '41%'
    }
   if (exp === 642) {
      expTwo.style.width = '42%'
    }
   if (exp === 643) {
      expTwo.style.width = '43%'
    }
   if (exp === 644) {
      expTwo.style.width = '44%'
    }
   if (exp === 645) {
      expTwo.style.width = '45%'
    }
   if (exp === 646) {
      expTwo.style.width = '46%'
    }
   if (exp === 647) {
      expTwo.style.width = '47%'
    }
   if (exp === 648) {
      expTwo.style.width = '48%'
    }
   if (exp === 649) {
      expTwo.style.width = '49%'
    }
   if (exp === 650) {
      expTwo.style.width = '50%'
    }
   if (exp === 651) {
      expTwo.style.width = '51%'
    }
   if (exp === 652) {
      expTwo.style.width = '52%'
    }
   if (exp === 653) {
      expTwo.style.width = '53%'
    }
   if (exp === 654) {
      expTwo.style.width = '54%'
    }
   if (exp === 655) {
      expTwo.style.width = '55%'
    }
    if (exp === 656) {
      expTwo.style.width = '56%'
    }
    if (exp === 657) {
      expTwo.style.width = '57%'
    }
    if (exp === 658) {
      expTwo.style.width = '58%'
    }
    if (exp === 659) {
      expTwo.style.width = '59%'
    }
    if (exp === 660) {
      expTwo.style.width = '60%'
    }
    if (exp === 661) {
      expTwo.style.width = '61%'
    }
    if (exp === 662) {
      expFTwo.style.width = '62%'
    }
    if (exp === 663) {
      expTwo.style.width = '63%'
    }
    if (exp === 664) {
      expTwo.style.width = '64%'
    }
    if (exp === 665) {
      expTwo.style.width = '65%'
    }
    if (exp === 666) {
      expTwo.style.width = '66%'
    }
    if (exp === 667) {
      expTwo.style.width = '67%'
    }
    if (exp === 668) {
      expTwo.style.width = '68%'
    }
    if (exp === 669) {
      expTwo.style.width = '69%'
    }
    if (exp === 670) {
      expTwo.style.width = '70%'
    }
    if (exp === 671) {
      expTwo.style.width = '71%'
    }
    if (exp === 672) {
      expTwo.style.width = '72%'
    }
    if (exp === 673) {
      expTwo.style.width = '73%'
    }
    if (exp === 674) {
      expTwo.style.width = '74%'
    }
    if (exp === 675) {
      expTwo.style.width = '75%'
    }
    if (exp === 676) {
      expTwo.style.width = '76%'
    }
    if (exp === 677) {
      expTwo.style.width = '77%'
    }
    if (exp === 678) {
      expTwo.style.width = '78%'
    }
    if (exp === 679) {
      expTwo.style.width = '79%'
    }
    if (exp === 680) {
      expTwo.style.width = '80%'
    }
    if (exp === 681) {
      expTwo.style.width = '81%'
    }
    if (exp === 682) {
      expTwo.style.width = '82%'
    }
    if (exp === 683) {
      expTwo.style.width = '83%'
    }
    if (exp === 684) {
      expTwo.style.width = '84%'
    }
    if (exp === 685) {
      expTwo.style.width = '85%'
    }
    if (exp === 686) {
      expTwo.style.width = '86%'
    }
    if (exp === 687) {
      expTwo.style.width = '87%'
    }
    if (exp === 688) {
      expTwo.style.width = '88%'
    }
    if (exp === 689) {
      expTwo.style.width = '89%'
    }
    if (exp === 690) {
      expTwo.style.width = '90%'
    }
    if (exp === 691) {
      expTwo.style.width = '91%'
    }
    if (exp === 692) {
      expTwo.style.width = '92%'
    }
    if (exp === 693) {
      expTwo.style.width = '93%'
    }
    if (exp === 694) {
      expTwo.style.width = '94%'
    }
    if (exp === 695) {
      expTwo.style.width = '95%'
    }
    if (exp === 696) {
      expTwo.style.width = '96%'
    }
    if (exp === 697) {
      expTwo.style.width = '97%'
    }
    if (exp === 698) {
      expTwo.style.width = '98%'
    }
    if (exp === 699) {
      expTwo.style.width = '99%'
    }
    if (exp === 700) {
      expTwo.style.width = '100%'
    }
  }
  
   if (exp >= 701 && exp <= 800) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 701) {
      expThree.style.width = '1%'
    }
   if (exp === 702) {
      expThree.style.width = '2%'
    }
   if (exp === 703) {
      expThree.style.width = '3%'
    }
   if (exp === 704) {
      expThree.style.width = '4%'
    }
   if (exp === 705) {
      expThree.style.width = '5%'
    }
   if (exp === 706) {
      expThree.style.width = '6%'
    }
   if (exp === 707) {
      expThree.style.width = '7%'
   }
   if (exp === 708) {
      expThree.style.width = '8%'
    } 
   if (exp === 709) {
      expThree.style.width = '9%'
    } 
   if (exp === 710) {
      expThree.style.width = '10%'
    } 
   if (exp === 711) {
      expThree.style.width = '11%'
    } 
   if (exp === 712) {
      expThree.style.width = '12%'
    } 
   if (exp === 713) {
      expThree.style.width = '13%'
    } 
   if (exp === 714) {
      expThree.style.width = '14%'
    } 
   if (exp === 715) {
      expThree.style.width = '15%'
    } 
   if (exp === 716) {
      expThree.style.width = '16%'
    } 
   if (exp === 717) {
      expThree.style.width = '17%'
    } 
   if (exp === 718) {
      expThree.style.width = '18%'
    } 
   if (exp === 719) {
      expThree.style.width = '19%'
    }
   if (exp === 720) {
      expThree.style.width = '20%'
    }
   if (exp === 721) {
     expThree.style.width = '21%'
    }
   if (exp === 722) {
     expThree.style.width = '22%'
    }
   if (exp === 723) {
     expThree.style.width = '23%'
    }
   if (exp === 724) {
     expThree.style.width = '24%'
    }
   if (exp === 725) {
     expThree.style.width = '25%'
    }
   if (exp === 726) {
     expThree.style.width = '26%'
    }
   if (exp === 727) {
     expThree.style.width = '27%'
   }
   if (exp === 728) {
     expThree.style.width = '28%'
    } 
   if (exp === 729) {
     expThree.style.width = '29%'
    } 
   if (exp === 730) {
     expThree.style.width = '30%'
    } 
   if (exp === 731) {
     expThree.style.width = '31%'
    } 
   if (exp === 732) {
     expThree.style.width = '32%'
    } 
   if (exp === 733) {
      expThree.style.width = '33%'
    } 
   if (exp === 734) {
      expThree.style.width = '34%'
    } 
   if (exp === 735) {
      expThree.style.width = '35%'
    } 
   if (exp === 736) {
      expThree.style.width = '36%'
    } 
   if (exp === 737) {
      expThree.style.width = '37%'
    } 
   if (exp === 738) {
      expThree.style.width = '38%'
    } 
   if (exp === 739) {
      expThree.style.width = '39%'
    }
   if (exp === 740) {
      expThree.style.width = '40%'
    }
   if (exp === 741) {
      expThree.style.width = '41%'
    }
   if (exp === 742) {
      expThree.style.width = '42%'
    }
   if (exp === 743) {
      expThree.style.width = '43%'
    }
   if (exp === 744) {
      expThree.style.width = '44%'
    }
   if (exp === 745) {
      expThree.style.width = '45%'
    }
   if (exp === 746) {
      expThree.style.width = '46%'
    }
   if (exp === 747) {
      expThree.style.width = '47%'
    }
   if (exp === 748) {
      expThree.style.width = '48%'
    }
   if (exp === 749) {
      expThree.style.width = '49%'
    }
   if (exp === 750) {
      expThree.style.width = '50%'
    }
   if (exp === 751) {
      expThree.style.width = '51%'
    }
   if (exp === 752) {
      expThree.style.width = '52%'
    }
   if (exp === 753) {
      expThree.style.width = '53%'
    }
   if (exp === 754) {
      expThree.style.width = '54%'
    }
   if (exp === 755) {
      expThree.style.width = '55%'
    }
    if (exp === 756) {
      expThree.style.width = '56%'
    }
    if (exp === 757) {
      expThree.style.width = '57%'
    }
    if (exp === 758) {
      expThree.style.width = '58%'
    }
    if (exp === 759) {
      expThree.style.width = '59%'
    }
    if (exp === 760) {
      expThree.style.width = '60%'
    }
    if (exp === 761) {
      expThree.style.width = '61%'
    }
    if (exp === 762) {
      expFThree.style.width = '62%'
    }
    if (exp === 763) {
      expThree.style.width = '63%'
    }
    if (exp === 764) {
      expThree.style.width = '64%'
    }
    if (exp === 765) {
      expThree.style.width = '65%'
    }
    if (exp === 766) {
      expThree.style.width = '66%'
    }
    if (exp === 767) {
      expThree.style.width = '67%'
    }
    if (exp === 768) {
      expThree.style.width = '68%'
    }
    if (exp === 769) {
      expThree.style.width = '69%'
    }
    if (exp === 770) {
      expThree.style.width = '70%'
    }
    if (exp === 771) {
      expThree.style.width = '71%'
    }
    if (exp === 772) {
      expThree.style.width = '72%'
    }
    if (exp === 773) {
      expThree.style.width = '73%'
    }
    if (exp === 774) {
      expThree.style.width = '74%'
    }
    if (exp === 775) {
      expThree.style.width = '75%'
    }
    if (exp === 776) {
      expThree.style.width = '76%'
    }
    if (exp === 777) {
      expThree.style.width = '77%'
    }
    if (exp === 778) {
      expThree.style.width = '78%'
    }
    if (exp === 779) {
      expThree.style.width = '79%'
    }
    if (exp === 780) {
      expThree.style.width = '80%'
    }
    if (exp === 781) {
      expThree.style.width = '81%'
    }
    if (exp === 782) {
      expThree.style.width = '82%'
    }
    if (exp === 783) {
      expThree.style.width = '83%'
    }
    if (exp === 784) {
      expThree.style.width = '84%'
    }
    if (exp === 785) {
      expThree.style.width = '85%'
    }
    if (exp === 786) {
      expThree.style.width = '86%'
    }
    if (exp === 787) {
      expThree.style.width = '87%'
    }
    if (exp === 788) {
      expThree.style.width = '88%'
    }
    if (exp === 789) {
      expThree.style.width = '89%'
    }
    if (exp === 790) {
      expThree.style.width = '90%'
    }
    if (exp === 791) {
      expThree.style.width = '91%'
    }
    if (exp === 792) {
      expThree.style.width = '92%'
    }
    if (exp === 793) {
      expThree.style.width = '93%'
    }
    if (exp === 794) {
      expThree.style.width = '94%'
    }
    if (exp === 795) {
      expThree.style.width = '95%'
    }
    if (exp === 796) {
      expThree.style.width = '96%'
    }
    if (exp === 797) {
      expThree.style.width = '97%'
    }
    if (exp === 798) {
      expThree.style.width = '98%'
    }
    if (exp === 799) {
      expThree.style.width = '99%'
    }
    if (exp === 800) {
      expThree.style.width = '100%'
    }
  } 
  
   if (exp >= 801 && exp <= 900) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 801) {
      expFour.style.width = '1%'
    }
   if (exp === 802) {
      expFour.style.width = '2%'
    }
   if (exp === 803) {
      expFour.style.width = '3%'
    }
   if (exp === 804) {
      expFour.style.width = '4%'
    }
   if (exp === 805) {
      expFour.style.width = '5%'
    }
   if (exp === 806) {
      expFour.style.width = '6%'
    }
   if (exp === 807) {
      expFour.style.width = '7%'
   }
   if (exp === 808) {
      expFour.style.width = '8%'
    } 
   if (exp === 809) {
      expFour.style.width = '9%'
    } 
   if (exp === 810) {
      expFour.style.width = '10%'
    } 
   if (exp === 811) {
      expFour.style.width = '11%'
    } 
   if (exp === 812) {
      expFour.style.width = '12%'
    } 
   if (exp === 813) {
      expFour.style.width = '13%'
    } 
   if (exp === 814) {
      expFour.style.width = '14%'
    } 
   if (exp === 815) {
      expFour.style.width = '15%'
    } 
   if (exp === 816) {
      expFour.style.width = '16%'
    } 
   if (exp === 817) {
      expFour.style.width = '17%'
    } 
   if (exp === 818) {
      expFour.style.width = '18%'
    } 
   if (exp === 819) {
      expFour.style.width = '19%'
    }
   if (exp === 820) {
      expFour.style.width = '20%'
    }
   if (exp === 821) {
     expFour.style.width = '21%'
    }
   if (exp === 822) {
     expFour.style.width = '22%'
    }
   if (exp === 823) {
     expFour.style.width = '23%'
    }
   if (exp === 824) {
     expFour.style.width = '24%'
    }
   if (exp === 825) {
     expFour.style.width = '25%'
    }
   if (exp === 826) {
     expFour.style.width = '26%'
    }
   if (exp === 827) {
     expFour.style.width = '27%'
   }
   if (exp === 828) {
     expFour.style.width = '28%'
    } 
   if (exp === 829) {
     expFour.style.width = '29%'
    } 
   if (exp === 830) {
     expFour.style.width = '30%'
    } 
   if (exp === 831) {
     expFour.style.width = '31%'
    } 
   if (exp === 832) {
     expFour.style.width = '32%'
    } 
   if (exp === 833) {
      expFour.style.width = '33%'
    } 
   if (exp === 834) {
      expFour.style.width = '34%'
    } 
   if (exp === 835) {
      expFour.style.width = '35%'
    } 
   if (exp === 836) {
      expFour.style.width = '36%'
    } 
   if (exp === 837) {
      expFour.style.width = '37%'
    } 
   if (exp === 838) {
      expFour.style.width = '38%'
    } 
   if (exp === 839) {
      expFour.style.width = '39%'
    }
   if (exp === 840) {
      expFour.style.width = '40%'
    }
   if (exp === 841) {
      expFour.style.width = '41%'
    }
   if (exp === 842) {
      expFour.style.width = '42%'
    }
   if (exp === 843) {
      expFour.style.width = '43%'
    }
   if (exp === 844) {
      expFour.style.width = '44%'
    }
   if (exp === 845) {
      expFour.style.width = '45%'
    }
   if (exp === 846) {
      expFour.style.width = '46%'
    }
   if (exp === 847) {
      expFour.style.width = '47%'
    }
   if (exp === 848) {
      expFour.style.width = '48%'
    }
   if (exp === 849) {
      expFour.style.width = '49%'
    }
   if (exp === 850) {
      expFour.style.width = '50%'
    }
   if (exp === 851) {
      expFour.style.width = '51%'
    }
   if (exp === 852) {
      expFour.style.width = '52%'
    }
   if (exp === 853) {
      expFour.style.width = '53%'
    }
   if (exp === 854) {
      expFour.style.width = '54%'
    }
   if (exp === 855) {
      expFour.style.width = '55%'
    }
    if (exp === 856) {
      expFour.style.width = '56%'
    }
    if (exp === 857) {
      expFour.style.width = '57%'
    }
    if (exp === 858) {
      expFour.style.width = '58%'
    }
    if (exp === 859) {
      expFour.style.width = '59%'
    }
    if (exp === 860) {
      expFour.style.width = '60%'
    }
    if (exp === 861) {
      expFour.style.width = '61%'
    }
    if (exp === 862) {
      expFFour.style.width = '62%'
    }
    if (exp === 863) {
      expFour.style.width = '63%'
    }
    if (exp === 864) {
      expFour.style.width = '64%'
    }
    if (exp === 865) {
      expFour.style.width = '65%'
    }
    if (exp === 866) {
      expFour.style.width = '66%'
    }
    if (exp === 867) {
      expFour.style.width = '67%'
    }
    if (exp === 868) {
      expFour.style.width = '68%'
    }
    if (exp === 869) {
      expFour.style.width = '69%'
    }
    if (exp === 870) {
      expFour.style.width = '70%'
    }
    if (exp === 871) {
      expFour.style.width = '71%'
    }
    if (exp === 872) {
      expFour.style.width = '72%'
    }
    if (exp === 873) {
      expFour.style.width = '73%'
    }
    if (exp === 874) {
      expFour.style.width = '74%'
    }
    if (exp === 875) {
      expFour.style.width = '75%'
    }
    if (exp === 876) {
      expFour.style.width = '76%'
    }
    if (exp === 877) {
      expFour.style.width = '77%'
    }
    if (exp === 878) {
      expFour.style.width = '78%'
    }
    if (exp === 879) {
      expFour.style.width = '79%'
    }
    if (exp === 880) {
      expFour.style.width = '80%'
    }
    if (exp === 881) {
      expFour.style.width = '81%'
    }
    if (exp === 882) {
      expFour.style.width = '82%'
    }
    if (exp === 883) {
      expFour.style.width = '83%'
    }
    if (exp === 884) {
      expFour.style.width = '84%'
    }
    if (exp === 885) {
      expFour.style.width = '85%'
    }
    if (exp === 886) {
      expFour.style.width = '86%'
    }
    if (exp === 887) {
      expFour.style.width = '87%'
    }
    if (exp === 888) {
      expFour.style.width = '88%'
    }
    if (exp === 889) {
      expFour.style.width = '89%'
    }
    if (exp === 890) {
      expFour.style.width = '90%'
    }
    if (exp === 891) {
      expFour.style.width = '91%'
    }
    if (exp === 892) {
      expFour.style.width = '92%'
    }
    if (exp === 893) {
      expFour.style.width = '93%'
    }
    if (exp === 894) {
      expFour.style.width = '94%'
    }
    if (exp === 895) {
      expFour.style.width = '95%'
    }
    if (exp === 896) {
      expFour.style.width = '96%'
    }
    if (exp === 897) {
      expFour.style.width = '97%'
    }
    if (exp === 898) {
      expFour.style.width = '98%'
    }
    if (exp === 899) {
      expFour.style.width = '99%'
    }
    if (exp === 900) {
      expFour.style.width = '100%'
    }
  } 
  
   if (exp >= 901 && exp <= 1000) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'block'
   if (exp === 901) {
      expFive.style.width = '1%'
    }
   if (exp === 902) {
      expFive.style.width = '2%'
    }
   if (exp === 903) {
      expFive.style.width = '3%'
    }
   if (exp === 904) {
      expFive.style.width = '4%'
    }
   if (exp === 905) {
      expFive.style.width = '5%'
    }
   if (exp === 906) {
      expFive.style.width = '6%'
    }
   if (exp === 907) {
      expFive.style.width = '7%'
   }
   if (exp === 908) {
      expFive.style.width = '8%'
    } 
   if (exp === 909) {
      expFive.style.width = '9%'
    } 
   if (exp === 910) {
      expFive.style.width = '10%'
    } 
   if (exp === 911) {
      expFive.style.width = '11%'
    } 
   if (exp === 912) {
      expFive.style.width = '12%'
    } 
   if (exp === 913) {
      expFive.style.width = '13%'
    } 
   if (exp === 914) {
      expFive.style.width = '14%'
    } 
   if (exp === 915) {
      expFive.style.width = '15%'
    } 
   if (exp === 916) {
      expFive.style.width = '16%'
    } 
   if (exp === 917) {
      expFive.style.width = '17%'
    } 
   if (exp === 918) {
      expFive.style.width = '18%'
    } 
   if (exp === 919) {
      expFive.style.width = '19%'
    }
   if (exp === 920) {
      expFive.style.width = '20%'
    }
   if (exp === 921) {
     expFive.style.width = '21%'
    }
   if (exp === 922) {
     expFive.style.width = '22%'
    }
   if (exp === 923) {
     expFive.style.width = '23%'
    }
   if (exp === 924) {
     expFive.style.width = '24%'
    }
   if (exp === 925) {
     expFive.style.width = '25%'
    }
   if (exp === 926) {
     expFive.style.width = '26%'
    }
   if (exp === 927) {
     expFive.style.width = '27%'
   }
   if (exp === 928) {
     expFive.style.width = '28%'
    } 
   if (exp === 929) {
     expFive.style.width = '29%'
    } 
   if (exp === 930) {
     expFive.style.width = '30%'
    } 
   if (exp === 931) {
     expFive.style.width = '31%'
    } 
   if (exp === 932) {
     expFive.style.width = '32%'
    } 
   if (exp === 933) {
      expFive.style.width = '33%'
    } 
   if (exp === 934) {
      expFive.style.width = '34%'
    } 
   if (exp === 935) {
      expFive.style.width = '35%'
    } 
   if (exp === 936) {
      expFive.style.width = '36%'
    } 
   if (exp === 937) {
      expFive.style.width = '37%'
    } 
   if (exp === 938) {
      expFive.style.width = '38%'
    } 
   if (exp === 939) {
      expFive.style.width = '39%'
    }
   if (exp === 940) {
      expFive.style.width = '40%'
    }
   if (exp === 941) {
      expFive.style.width = '41%'
    }
   if (exp === 942) {
      expFive.style.width = '42%'
    }
   if (exp === 943) {
      expFive.style.width = '43%'
    }
   if (exp === 944) {
      expFive.style.width = '44%'
    }
   if (exp === 945) {
      expFive.style.width = '45%'
    }
   if (exp === 946) {
      expFive.style.width = '46%'
    }
   if (exp === 947) {
      expFive.style.width = '47%'
    }
   if (exp === 948) {
      expFive.style.width = '48%'
    }
   if (exp === 949) {
      expFive.style.width = '49%'
    }
   if (exp === 950) {
      expFive.style.width = '50%'
    }
   if (exp === 951) {
      expFive.style.width = '51%'
    }
   if (exp === 952) {
      expFive.style.width = '52%'
    }
   if (exp === 953) {
      expFive.style.width = '53%'
    }
   if (exp === 954) {
      expFive.style.width = '54%'
    }
   if (exp === 955) {
      expFive.style.width = '55%'
    }
    if (exp === 956) {
      expFive.style.width = '56%'
    }
    if (exp === 957) {
      expFive.style.width = '57%'
    }
    if (exp === 958) {
      expFive.style.width = '58%'
    }
    if (exp === 959) {
      expFive.style.width = '59%'
    }
    if (exp === 960) {
      expFive.style.width = '60%'
    }
    if (exp === 961) {
      expFive.style.width = '61%'
    }
    if (exp === 962) {
      expFFive.style.width = '62%'
    }
    if (exp === 963) {
      expFive.style.width = '63%'
    }
    if (exp === 964) {
      expFive.style.width = '64%'
    }
    if (exp === 965) {
      expFive.style.width = '65%'
    }
    if (exp === 966) {
      expFive.style.width = '66%'
    }
    if (exp === 967) {
      expFive.style.width = '67%'
    }
    if (exp === 968) {
      expFive.style.width = '68%'
    }
    if (exp === 969) {
      expFive.style.width = '69%'
    }
    if (exp === 970) {
      expFive.style.width = '70%'
    }
    if (exp === 971) {
      expFive.style.width = '71%'
    }
    if (exp === 972) {
      expFive.style.width = '72%'
    }
    if (exp === 973) {
      expFive.style.width = '73%'
    }
    if (exp === 974) {
      expFive.style.width = '74%'
    }
    if (exp === 975) {
      expFive.style.width = '75%'
    }
    if (exp === 976) {
      expFive.style.width = '76%'
    }
    if (exp === 977) {
      expFive.style.width = '77%'
    }
    if (exp === 978) {
      expFive.style.width = '78%'
    }
    if (exp === 979) {
      expFive.style.width = '79%'
    }
    if (exp === 980) {
      expFive.style.width = '80%'
    }
    if (exp === 981) {
      expFive.style.width = '81%'
    }
    if (exp === 982) {
      expFive.style.width = '82%'
    }
    if (exp === 983) {
      expFive.style.width = '83%'
    }
    if (exp === 984) {
      expFive.style.width = '84%'
    }
    if (exp === 985) {
      expFive.style.width = '85%'
    }
    if (exp === 986) {
      expFive.style.width = '86%'
    }
    if (exp === 987) {
      expFive.style.width = '87%'
    }
    if (exp === 988) {
      expFive.style.width = '88%'
    }
    if (exp === 989) {
      expFive.style.width = '89%'
    }
    if (exp === 990) {
      expFive.style.width = '90%'
    }
    if (exp === 991) {
      expFive.style.width = '91%'
    }
    if (exp === 992) {
      expFive.style.width = '92%'
    }
    if (exp === 993) {
      expFive.style.width = '93%'
    }
    if (exp === 994) {
      expFive.style.width = '94%'
    }
    if (exp === 995) {
      expFive.style.width = '95%'
    }
    if (exp === 996) {
      expFive.style.width = '96%'
    }
    if (exp === 997) {
      expFive.style.width = '97%'
    }
    if (exp === 998) {
      expFive.style.width = '98%'
    }
    if (exp === 999) {
      expFive.style.width = '99%'
    }
    if (exp === 1000) {
      expFive.style.width = '100%'
    }
  } 
  
    if (exp === 1000) {
     setTimeout(() => {
      expOne.style.display = 'none'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
    }, 500)
    }
    if (exp >= 1000) {
     handleExpFour();
      levelUpShow();
      
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '100%'
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;

      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
     document.querySelector('.the-level').innerHTML = 4;
     
     document.querySelector('.next-level').innerHTML = '2000';
     
     document.querySelector('.level-title').innerHTML = 'Newbie lvl 2'
    }
   
 }
}

function handleExpFour() {
 if (playerLevel === 4) {
    
    if (exp >= 1001 && exp <= 1200) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 1001) {
      expOne.style.width = '0.5%'
    }
   if (exp === 1002) {
      expOne.style.width = '1%'
    }
   if (exp === 1003) {
      expOne.style.width = '1.5%'
    }
   if (exp === 1004) {
      expOne.style.width = '2%'
    }
   if (exp === 1005) {
      expOne.style.width = '2.5%'
    }
   if (exp === 1006) {
      expOne.style.width = '3%'
    }
   if (exp === 1007) {
      expOne.style.width = '3.5%'
   }
   if (exp === 1008) {
      expOne.style.width = '4%'
    } 
   if (exp === 1009) {
      expOne.style.width = '4.5%'
    } 
   if (exp === 1010) {
      expOne.style.width = '5%'
    } 
   if (exp === 1011) {
      expOne.style.width = '5.5%'
    } 
   if (exp === 1012) {
      expOne.style.width = '6%'
    } 
   if (exp === 1013) {
      expOne.style.width = '6.5%'
    } 
   if (exp === 1014) {
      expOne.style.width = '7%'
    } 
   if (exp === 1015) {
      expOne.style.width = '7.5%'
    } 
   if (exp === 1016) {
      expOne.style.width = '8%'
    } 
   if (exp === 1017) {
      expOne.style.width = '8.5%'
    } 
   if (exp === 1018) {
      expOne.style.width = '9%'
    } 
   if (exp === 1019) {
      expOne.style.width = '9.5%'
    }
   if (exp === 1020) {
      expOne.style.width = '10%'
    }
   if (exp === 1021) {
     expOne.style.width = '10.5%'
    }
   if (exp === 1022) {
     expOne.style.width = '11%'
    }
   if (exp === 1023) {
     expOne.style.width = '11.5%'
    }
   if (exp === 1024) {
     expOne.style.width = '12%'
    }
   if (exp === 1025) {
     expOne.style.width = '12.5%'
    }
   if (exp === 1026) {
     expOne.style.width = '13%'
    }
   if (exp === 1027) {
     expOne.style.width = '13.5%'
   }
   if (exp === 1028) {
     expOne.style.width = '14%'
    } 
   if (exp === 1029) {
     expOne.style.width = '14.5%'
    } 
   if (exp === 1030) {
     expOne.style.width = '15%'
    } 
   if (exp === 1031) {
     expOne.style.width = '15.5%'
    } 
   if (exp === 1032) {
     expOne.style.width = '16%'
    } 
   if (exp === 1033) {
      expOne.style.width = '16.5%'
    } 
   if (exp === 1034) {
      expOne.style.width = '17%'
    } 
   if (exp === 1035) {
      expOne.style.width = '17.5%'
    } 
   if (exp === 1036) {
      expOne.style.width = '18%'
    } 
   if (exp === 1037) {
      expOne.style.width = '18.5%'
    } 
   if (exp === 1038) {
      expOne.style.width = '19%'
    } 
   if (exp === 1039) {
      expOne.style.width = '19.5%'
    }
   if (exp === 1040) {
      expOne.style.width = '20%'
    }
   if (exp === 1041) {
      expOne.style.width = '20.5%'
    }
   if (exp === 1042) {
      expOne.style.width = '21%'
    }
   if (exp === 1043) {
      expOne.style.width = '21.5%'
    }
   if (exp === 1044) {
      expOne.style.width = '22%'
    }
   if (exp === 1045) {
      expOne.style.width = '22.5%'
    }
   if (exp === 1046) {
      expOne.style.width = '23%'
    }
   if (exp === 1047) {
      expOne.style.width = '23.5%'
    }
   if (exp === 1048) {
      expOne.style.width = '24%'
    }
   if (exp === 1049) {
      expOne.style.width = '24.5%'
    }
   if (exp === 1050) {
      expOne.style.width = '25%'
    }
   if (exp === 1051) {
      expOne.style.width = '25.5%'
    }
   if (exp === 1052) {
      expOne.style.width = '26%'
    }
   if (exp === 1053) {
      expOne.style.width = '26.5%'
    }
   if (exp === 1054) {
      expOne.style.width = '27%'
    }
   if (exp === 1055) {
      expOne.style.width = '27.5%'
    }
    if (exp === 1056) {
      expOne.style.width = '28%'
    }
    if (exp === 1057) {
      expOne.style.width = '28.5%'
    }
    if (exp === 1058) {
      expOne.style.width = '29%'
    }
    if (exp === 1059) {
      expOne.style.width = '29.5%'
    }
    if (exp === 1060) {
      expOne.style.width = '30%'
    }
    if (exp === 1061) {
      expOne.style.width = '30.5%'
    }
    if (exp === 1062) {
      expOne.style.width = '31%'
    }
    if (exp === 1063) {
      expOne.style.width = '31.5%'
    }
    if (exp === 1064) {
      expOne.style.width = '32%'
    }
    if (exp === 1065) {
      expOne.style.width = '32.5%'
    }
    if (exp === 1066) {
      expOne.style.width = '33%'
    }
    if (exp === 1067) {
      expOne.style.width = '33.5%'
    }
    if (exp === 1068) {
      expOne.style.width = '34%'
    }
    if (exp === 1069) {
      expOne.style.width = '34.5%'
    }
    if (exp === 1070) {
      expOne.style.width = '35%'
    }
    if (exp === 1071) {
      expOne.style.width = '35.5%'
    }
    if (exp === 1072) {
      expOne.style.width = '36%'
    }
    if (exp === 1073) {
      expOne.style.width = '36.5%'
    }
    if (exp === 1074) {
      expOne.style.width = '37%'
    }
    if (exp === 1075) {
      expOne.style.width = '37.5%'
    }
    if (exp === 1076) {
      expOne.style.width = '38%'
    }
    if (exp === 1077) {
      expOne.style.width = '38.5%'
    }
    if (exp === 1078) {
      expOne.style.width = '39%'
    }
    if (exp === 1079) {
      expOne.style.width = '39.5%'
    }
    if (exp === 1080) {
      expOne.style.width = '40%'
    }
    if (exp === 1081) {
      expOne.style.width = '40.5%'
    }
    if (exp === 1082) {
      expOne.style.width = '41%'
    }
    if (exp === 1083) {
      expOne.style.width = '41.5%'
    }
    if (exp === 1084) {
      expOne.style.width = '42%'
    }
    if (exp === 1085) {
      expOne.style.width = '42.5%'
    }
    if (exp === 1086) {
      expOne.style.width = '43%'
    }
    if (exp === 1087) {
      expOne.style.width = '43.5%'
    }
    if (exp === 1088) {
      expOne.style.width = '44%'
    }
    if (exp === 1089) {
      expOne.style.width = '44.5%'
    }
    if (exp === 1090) {
      expOne.style.width = '45%'
    }
    if (exp === 1091) {
      expOne.style.width = '45.5%'
    }
    if (exp === 1092) {
      expOne.style.width = '46%'
    }
    if (exp === 1093) {
      expOne.style.width = '46.5%'
    }
    if (exp === 1094) {
      expOne.style.width = '47%'
    }
    if (exp === 1095) {
      expOne.style.width = '47.5%'
    }
    if (exp === 1096) {
      expOne.style.width = '48%'
    }
    if (exp === 1097) {
      expOne.style.width = '48.5%'
    }
    if (exp === 1098) {
      expOne.style.width = '49%'
    }
    if (exp === 1099) {
      expOne.style.width = '49.5%'
    }
    if (exp === 1100) {
      expOne.style.width = '50%'
    }
   if (exp === 1101) {
      expOne.style.width = '50.5%'
    }
   if (exp === 1102) {
      expOne.style.width = '51%'
    }
   if (exp === 1103) {
      expOne.style.width = '51.5%'
    }
   if (exp === 1104) {
      expOne.style.width = '52%'
    }
   if (exp === 1105) {
      expOne.style.width = '52.5%'
    }
   if (exp === 1106) {
      expOne.style.width = '53%'
    }
   if (exp === 1107) {
      expOne.style.width = '53.5%'
   }
   if (exp === 1108) {
      expOne.style.width = '54%'
    } 
   if (exp === 1109) {
      expOne.style.width = '54.5%'
    } 
   if (exp === 1110) {
      expOne.style.width = '55%'
    } 
   if (exp === 1111) {
      expOne.style.width = '55.5%'
    } 
   if (exp === 1112) {
      expOne.style.width = '56%'
    } 
   if (exp === 1113) {
      expOne.style.width = '56.5%'
    } 
   if (exp === 1114) {
      expOne.style.width = '57%'
    } 
   if (exp === 1115) {
      expOne.style.width = '57.5%'
    } 
   if (exp === 1116) {
      expOne.style.width = '58%'
    } 
   if (exp === 1117) {
      expOne.style.width = '58.5%'
    } 
   if (exp === 1118) {
      expOne.style.width = '59%'
    } 
   if (exp === 1119) {
      expOne.style.width = '59.5%'
    }
   if (exp === 1120) {
      expOne.style.width = '60%'
    }
   if (exp === 1121) {
     expOne.style.width = '60.5%'
    }
   if (exp === 1122) {
     expOne.style.width = '61%'
    }
   if (exp === 1123) {
     expOne.style.width = '61.5%'
    }
   if (exp === 1124) {
     expOne.style.width = '62%'
    }
   if (exp === 1125) {
     expOne.style.width = '62.5%'
    }
   if (exp === 1126) {
     expOne.style.width = '63%'
    }
   if (exp === 1127) {
     expOne.style.width = '63.5%'
   }
   if (exp === 1128) {
     expOne.style.width = '64%'
    } 
   if (exp === 1129) {
     expOne.style.width = '64.5%'
    } 
   if (exp === 1130) {
     expOne.style.width = '65%'
    } 
   if (exp === 1131) {
     expOne.style.width = '65.5%'
    } 
   if (exp === 1132) {
     expOne.style.width = '66%'
    } 
   if (exp === 1133) {
      expOne.style.width = '66.5%'
    } 
   if (exp === 1134) {
      expOne.style.width = '67%'
    } 
   if (exp === 1135) {
      expOne.style.width = '67.5%'
    } 
   if (exp === 1136) {
      expOne.style.width = '68%'
    } 
   if (exp === 1137) {
      expOne.style.width = '68.5%'
    } 
   if (exp === 1138) {
      expOne.style.width = '69%'
    } 
   if (exp === 1139) {
      expOne.style.width = '69.5%'
    }
   if (exp === 1140) {
      expOne.style.width = '70%'
    }
   if (exp === 1141) {
      expOne.style.width = '70.5%'
    }
   if (exp === 1142) {
      expOne.style.width = '71%'
    }
   if (exp === 1143) {
      expOne.style.width = '71.5%'
    }
   if (exp === 1144) {
      expOne.style.width = '72%'
    }
   if (exp === 1145) {
      expOne.style.width = '72.5%'
    }
   if (exp === 1146) {
      expOne.style.width = '73%'
    }
   if (exp === 1147) {
      expOne.style.width = '73.5%'
    }
   if (exp === 1148) {
      expOne.style.width = '74%'
    }
   if (exp === 1149) {
      expOne.style.width = '74.5%'
    }
   if (exp === 1150) {
      expOne.style.width = '75%'
    }
   if (exp === 1151) {
      expOne.style.width = '75.5%'
    }
   if (exp === 1152) {
      expOne.style.width = '76%'
    }
   if (exp === 1153) {
      expOne.style.width = '76.5%'
    }
   if (exp === 1154) {
      expOne.style.width = '77%'
    }
   if (exp === 1155) {
      expOne.style.width = '77.5%'
    }
    if (exp === 1156) {
      expOne.style.width = '78%'
    }
    if (exp === 1157) {
      expOne.style.width = '78.5%'
    }
    if (exp === 1158) {
      expOne.style.width = '79%'
    }
    if (exp === 1159) {
      expOne.style.width = '79.5%'
    }
    if (exp === 1160) {
      expOne.style.width = '80%'
    }
    if (exp === 1161) {
      expFour.style.width = '80.5%'
    }
    if (exp === 1162) {
      expOne.style.width = '81%'
    }
    if (exp === 1163) {
      expOne.style.width = '81.5%'
    }
    if (exp === 1164) {
      expOne.style.width = '82%'
    }
    if (exp === 1165) {
      expOne.style.width = '82.5%'
    }
    if (exp === 1166) {
      expOne.style.width = '83%'
    }
    if (exp === 1167) {
      expOne.style.width = '83.5%'
    }
    if (exp === 1168) {
      expOne.style.width = '84%'
    }
    if (exp === 1169) {
      expOne.style.width = '84.5%'
    }
    if (exp === 1170) {
      expOne.style.width = '85%'
    }
    if (exp === 1171) {
      expOne.style.width = '85.5%'
    }
    if (exp === 1172) {
      expOne.style.width = '86%'
    }
    if (exp === 1173) {
      expOne.style.width = '86.5%'
    }
    if (exp === 1174) {
      expOne.style.width = '87%'
    }
    if (exp === 1175) {
      expOne.style.width = '87.5%'
    }
    if (exp === 1176) {
      expOne.style.width = '88%'
    }
    if (exp === 1177) {
      expOne.style.width = '88.5%'
    }
    if (exp === 1178) {
      expOne.style.width = '89%'
    }
    if (exp === 1179) {
      expOne.style.width = '89.5%'
    }
    if (exp === 1180) {
      expOne.style.width = '90%'
    }
    if (exp === 1181) {
      expOne.style.width = '90.5%'
    }
    if (exp === 1182) {
      expOne.style.width = '91%'
    }
    if (exp === 1183) {
      expOne.style.width = '91.5%'
    }
    if (exp === 1184) {
      expOne.style.width = '92%'
    }
    if (exp === 1185) {
      expOne.style.width = '92.5%'
    }
    if (exp === 1186) {
      expOne.style.width = '93%'
    }
    if (exp === 1187) {
      expOne.style.width = '93.5%'
    }
    if (exp === 1188) {
      expOne.style.width = '94%'
    }
    if (exp === 1189) {
      expOne.style.width = '94.5%'
    }
    if (exp === 1190) {
      expOne.style.width = '95%'
    }
    if (exp === 1191) {
      expOne.style.width = '95.5%'
    }
    if (exp === 1192) {
      expOne.style.width = '96%'
    }
    if (exp === 1193) {
      expOne.style.width = '96.5%'
    }
    if (exp === 1194) {
      expOne.style.width = '97%'
    }
    if (exp === 1195) {
      expOne.style.width = '97.5%'
    }
    if (exp === 1196) {
      expOne.style.width = '98%'
    }
    if (exp === 1197) {
      expOne.style.width = '98.5%'
    }
    if (exp === 1198) {
      expOne.style.width = '99%'
    }
    if (exp === 1199) {
      expOne.style.width = '99.5%'
    }
    if (exp === 1200) {
      expOne.style.width = '100%'
    }
     
  }
  
    if (exp >= 1201 && exp <= 1400) 
    {
      expOne.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 1201) {
      expTwo.style.width = '0.5%'
    }
   if (exp === 1202) {
      expTwo.style.width = '1%'
    }
   if (exp === 1203) {
      expTwo.style.width = '1.5%'
    }
   if (exp === 1204) {
      expTwo.style.width = '2%'
    }
   if (exp === 1205) {
      expTwo.style.width = '2.5%'
    }
   if (exp === 1206) {
      expTwo.style.width = '3%'
    }
   if (exp === 1207) {
      expTwo.style.width = '3.5%'
   }
   if (exp === 1208) {
      expTwo.style.width = '4%'
    } 
   if (exp === 1209) {
      expTwo.style.width = '4.5%'
    } 
   if (exp === 1210) {
      expTwo.style.width = '5%'
    } 
   if (exp === 1211) {
      expTwo.style.width = '5.5%'
    } 
   if (exp === 1212) {
      expTwo.style.width = '6%'
    } 
   if (exp === 1213) {
      expTwo.style.width = '6.5%'
    } 
   if (exp === 1214) {
      expTwo.style.width = '7%'
    } 
   if (exp === 1215) {
      expTwo.style.width = '7.5%'
    } 
   if (exp === 1216) {
      expTwo.style.width = '8%'
    } 
   if (exp === 1217) {
      expTwo.style.width = '8.5%'
    } 
   if (exp === 1218) {
      expTwo.style.width = '9%'
    } 
   if (exp === 1219) {
      expTwo.style.width = '9.5%'
    }
   if (exp === 1220) {
      expTwo.style.width = '10%'
    }
   if (exp === 1221) {
     expTwo.style.width = '10.5%'
    }
   if (exp === 1222) {
     expTwo.style.width = '11%'
    }
   if (exp === 1223) {
     expTwo.style.width = '11.5%'
    }
   if (exp === 1224) {
     expTwo.style.width = '12%'
    }
   if (exp === 1225) {
     expTwo.style.width = '12.5%'
    }
   if (exp === 1226) {
     expTwo.style.width = '13%'
    }
   if (exp === 1227) {
     expTwo.style.width = '13.5%'
   }
   if (exp === 1228) {
     expTwo.style.width = '14%'
    } 
   if (exp === 1229) {
     expTwo.style.width = '14.5%'
    } 
   if (exp === 1230) {
     expTwo.style.width = '15%'
    } 
   if (exp === 1231) {
     expTwo.style.width = '15.5%'
    } 
   if (exp === 1232) {
     expTwo.style.width = '16%'
    } 
   if (exp === 1233) {
      expTwo.style.width = '16.5%'
    } 
   if (exp === 1234) {
      expTwo.style.width = '17%'
    } 
   if (exp === 1235) {
      expTwo.style.width = '17.5%'
    } 
   if (exp === 1236) {
      expTwo.style.width = '18%'
    } 
   if (exp === 1237) {
      expTwo.style.width = '18.5%'
    } 
   if (exp === 1238) {
      expTwo.style.width = '19%'
    } 
   if (exp === 1239) {
      expTwo.style.width = '19.5%'
    }
   if (exp === 1240) {
      expTwo.style.width = '20%'
    }
   if (exp === 1241) {
      expTwo.style.width = '20.5%'
    }
   if (exp === 1242) {
      expTwo.style.width = '21%'
    }
   if (exp === 1243) {
      expTwo.style.width = '21.5%'
    }
   if (exp === 1244) {
      expTwo.style.width = '22%'
    }
   if (exp === 1245) {
      expTwo.style.width = '22.5%'
    }
   if (exp === 1246) {
      expTwo.style.width = '23%'
    }
   if (exp === 1247) {
      expTwo.style.width = '23.5%'
    }
   if (exp === 1248) {
      expTwo.style.width = '24%'
    }
   if (exp === 1249) {
      expTwo.style.width = '24.5%'
    }
   if (exp === 1250) {
      expTwo.style.width = '25%'
    }
   if (exp === 1251) {
      expTwo.style.width = '25.5%'
    }
   if (exp === 1252) {
      expTwo.style.width = '26%'
    }
   if (exp === 1253) {
      expTwo.style.width = '26.5%'
    }
   if (exp === 1254) {
      expTwo.style.width = '27%'
    }
   if (exp === 1255) {
      expTwo.style.width = '27.5%'
    }
    if (exp === 1256) {
      expTwo.style.width = '28%'
    }
    if (exp === 1257) {
      expTwo.style.width = '28.5%'
    }
    if (exp === 1258) {
      expTwo.style.width = '29%'
    }
    if (exp === 1259) {
      expTwo.style.width = '29.5%'
    }
    if (exp === 1260) {
      expTwo.style.width = '30%'
    }
    if (exp === 1261) {
      expTwo.style.width = '30.5%'
    }
    if (exp === 1262) {
      expTwo.style.width = '31%'
    }
    if (exp === 1263) {
      expTwo.style.width = '31.5%'
    }
    if (exp === 1264) {
      expTwo.style.width = '32%'
    }
    if (exp === 1265) {
      expTwo.style.width = '32.5%'
    }
    if (exp === 1266) {
      expTwo.style.width = '33%'
    }
    if (exp === 1267) {
      expTwo.style.width = '33.5%'
    }
    if (exp === 1268) {
      expTwo.style.width = '34%'
    }
    if (exp === 1269) {
      expTwo.style.width = '34.5%'
    }
    if (exp === 1270) {
      expTwo.style.width = '35%'
    }
    if (exp === 1271) {
      expTwo.style.width = '35.5%'
    }
    if (exp === 1272) {
      expTwo.style.width = '36%'
    }
    if (exp === 1273) {
      expTwo.style.width = '36.5%'
    }
    if (exp === 1274) {
      expTwo.style.width = '37%'
    }
    if (exp === 1275) {
      expTwo.style.width = '37.5%'
    }
    if (exp === 1276) {
      expTwo.style.width = '38%'
    }
    if (exp === 1277) {
      expTwo.style.width = '38.5%'
    }
    if (exp === 1278) {
      expTwo.style.width = '39%'
    }
    if (exp === 1279) {
      expTwo.style.width = '39.5%'
    }
    if (exp === 1280) {
      expTwo.style.width = '40%'
    }
    if (exp === 1281) {
      expTwo.style.width = '40.5%'
    }
    if (exp === 1282) {
      expTwo.style.width = '41%'
    }
    if (exp === 1283) {
      expTwo.style.width = '41.5%'
    }
    if (exp === 1284) {
      expTwo.style.width = '42%'
    }
    if (exp === 1285) {
      expTwo.style.width = '42.5%'
    }
    if (exp === 1286) {
      expTwo.style.width = '43%'
    }
    if (exp === 1287) {
      expTwo.style.width = '43.5%'
    }
    if (exp === 1288) {
      expTwo.style.width = '44%'
    }
    if (exp === 1289) {
      expTwo.style.width = '44.5%'
    }
    if (exp === 1290) {
      expTwo.style.width = '45%'
    }
    if (exp === 1291) {
      expTwo.style.width = '45.5%'
    }
    if (exp === 1292) {
      expTwo.style.width = '46%'
    }
    if (exp === 1293) {
      expTwo.style.width = '46.5%'
    }
    if (exp === 1294) {
      expTwo.style.width = '47%'
    }
    if (exp === 1295) {
      expTwo.style.width = '47.5%'
    }
    if (exp === 1296) {
      expTwo.style.width = '48%'
    }
    if (exp === 1297) {
      expTwo.style.width = '48.5%'
    }
    if (exp === 1298) {
      expTwo.style.width = '49%'
    }
    if (exp === 1299) {
      expTwo.style.width = '49.5%'
    }
    if (exp === 1300) {
      expTwo.style.width = '50%'
    }
   if (exp === 1311) {
      expTwo.style.width = '50.5%'
    }
   if (exp === 1312) {
      expTwo.style.width = '51%'
    }
   if (exp === 1313) {
      expTwo.style.width = '51.5%'
    }
   if (exp === 1314) {
      expTwo.style.width = '52%'
    }
   if (exp === 1315) {
      expTwo.style.width = '52.5%'
    }
   if (exp === 1316) {
      expTwo.style.width = '53%'
    }
   if (exp === 1317) {
      expTwo.style.width = '53.5%'
   }
   if (exp === 1318) {
      expTwo.style.width = '54%'
    } 
   if (exp === 1319) {
      expTwo.style.width = '54.5%'
    } 
   if (exp === 1310) {
      expTwo.style.width = '55%'
    } 
   if (exp === 1311) {
      expTwo.style.width = '55.5%'
    } 
   if (exp === 1312) {
      expTwo.style.width = '56%'
    } 
   if (exp === 1313) {
      expTwo.style.width = '56.5%'
    } 
   if (exp === 1314) {
      expTwo.style.width = '57%'
    } 
   if (exp === 1315) {
      expTwo.style.width = '57.5%'
    } 
   if (exp === 1316) {
      expTwo.style.width = '58%'
    } 
   if (exp === 1317) {
      expTwo.style.width = '58.5%'
    } 
   if (exp === 1318) {
      expTwo.style.width = '59%'
    } 
   if (exp === 1319) {
      expTwo.style.width = '59.5%'
    }
   if (exp === 1320) {
      expTwo.style.width = '60%'
    }
   if (exp === 1321) {
     expTwo.style.width = '60.5%'
    }
   if (exp === 1322) {
     expTwo.style.width = '61%'
    }
   if (exp === 1323) {
     expTwo.style.width = '61.5%'
    }
   if (exp === 1324) {
     expTwo.style.width = '62%'
    }
   if (exp === 1325) {
     expTwo.style.width = '62.5%'
    }
   if (exp === 1326) {
     expTwo.style.width = '63%'
    }
   if (exp === 1327) {
     expTwo.style.width = '63.5%'
   }
   if (exp === 1328) {
     expTwo.style.width = '64%'
    } 
   if (exp === 1329) {
     expTwo.style.width = '64.5%'
    } 
   if (exp === 1330) {
     expTwo.style.width = '65%'
    } 
   if (exp === 1331) {
     expTwo.style.width = '65.5%'
    } 
   if (exp === 1332) {
     expTwo.style.width = '66%'
    } 
   if (exp === 1333) {
      expTwo.style.width = '66.5%'
    } 
   if (exp === 1334) {
      expTwo.style.width = '67%'
    } 
   if (exp === 1335) {
      expTwo.style.width = '67.5%'
    } 
   if (exp === 1336) {
      expTwo.style.width = '68%'
    } 
   if (exp === 1337) {
      expTwo.style.width = '68.5%'
    } 
   if (exp === 1338) {
      expTwo.style.width = '69%'
    } 
   if (exp === 1339) {
      expTwo.style.width = '69.5%'
    }
   if (exp === 1340) {
      expTwo.style.width = '70%'
    }
   if (exp === 1341) {
      expTwo.style.width = '70.5%'
    }
   if (exp === 1342) {
      expTwo.style.width = '71%'
    }
   if (exp === 1343) {
      expTwo.style.width = '71.5%'
    }
   if (exp === 1344) {
      expTwo.style.width = '72%'
    }
   if (exp === 1345) {
      expTwo.style.width = '72.5%'
    }
   if (exp === 1346) {
      expTwo.style.width = '73%'
    }
   if (exp === 1347) {
      expTwo.style.width = '73.5%'
    }
   if (exp === 1348) {
      expTwo.style.width = '74%'
    }
   if (exp === 1349) {
      expTwo.style.width = '74.5%'
    }
   if (exp === 1350) {
      expTwo.style.width = '75%'
    }
   if (exp === 1351) {
      expTwo.style.width = '75.5%'
    }
   if (exp === 1352) {
      expTwo.style.width = '76%'
    }
   if (exp === 1353) {
      expTwo.style.width = '76.5%'
    }
   if (exp === 1354) {
      expTwo.style.width = '77%'
    }
   if (exp === 1355) {
      expTwo.style.width = '77.5%'
    }
    if (exp === 1356) {
      expTwo.style.width = '78%'
    }
    if (exp === 1357) {
      expTwo.style.width = '78.5%'
    }
    if (exp === 1358) {
      expTwo.style.width = '79%'
    }
    if (exp === 1359) {
      expTwo.style.width = '79.5%'
    }
    if (exp === 1360) {
      expTwo.style.width = '80%'
    }
    if (exp === 1361) {
      expTwo.style.width = '80.5%'
    }
    if (exp === 1362) {
      expTwo.style.width = '81%'
    }
    if (exp === 1363) {
      expTwo.style.width = '81.5%'
    }
    if (exp === 1364) {
      expTwo.style.width = '82%'
    }
    if (exp === 1365) {
      expTwo.style.width = '82.5%'
    }
    if (exp === 1366) {
      expTwo.style.width = '83%'
    }
    if (exp === 1367) {
      expTwo.style.width = '83.5%'
    }
    if (exp === 1368) {
      expTwo.style.width = '84%'
    }
    if (exp === 1369) {
      expTwo.style.width = '84.5%'
    }
    if (exp === 1370) {
      expTwo.style.width = '85%'
    }
    if (exp === 1371) {
      expTwo.style.width = '85.5%'
    }
    if (exp === 1372) {
      expTwo.style.width = '86%'
    }
    if (exp === 1373) {
      expTwo.style.width = '86.5%'
    }
    if (exp === 1374) {
      expTwo.style.width = '87%'
    }
    if (exp === 1375) {
      expTwo.style.width = '87.5%'
    }
    if (exp === 1376) {
      expTwo.style.width = '88%'
    }
    if (exp === 1377) {
      expTwo.style.width = '88.5%'
    }
    if (exp === 1378) {
      expTwo.style.width = '89%'
    }
    if (exp === 1379) {
      expTwo.style.width = '89.5%'
    }
    if (exp === 1380) {
      expTwo.style.width = '90%'
    }
    if (exp === 1381) {
      expTwo.style.width = '90.5%'
    }
    if (exp === 1382) {
      expTwo.style.width = '91%'
    }
    if (exp === 1383) {
      expTwo.style.width = '91.5%'
    }
    if (exp === 1384) {
      expTwo.style.width = '92%'
    }
    if (exp === 1385) {
      expTwo.style.width = '92.5%'
    }
    if (exp === 1386) {
      expTwo.style.width = '93%'
    }
    if (exp === 1387) {
      expTwo.style.width = '93.5%'
    }
    if (exp === 1388) {
      expTwo.style.width = '94%'
    }
    if (exp === 1389) {
      expTwo.style.width = '94.5%'
    }
    if (exp === 1390) {
      expTwo.style.width = '95%'
    }
    if (exp === 1391) {
      expTwo.style.width = '95.5%'
    }
    if (exp === 1392) {
      expTwo.style.width = '96%'
    }
    if (exp === 1393) {
      expTwo.style.width = '96.5%'
    }
    if (exp === 1394) {
      expTwo.style.width = '97%'
    }
    if (exp === 1395) {
      expTwo.style.width = '97.5%'
    }
    if (exp === 1396) {
      expTwo.style.width = '98%'
    }
    if (exp === 1397) {
      expTwo.style.width = '98.5%'
    }
    if (exp === 1398) {
      expTwo.style.width = '99%'
    }
    if (exp === 1399) {
      expTwo.style.width = '99.5%'
    }
    if (exp === 1400) {
      expTwo.style.width = '100%'
    }
     
  }
  
    if (exp >= 1401 && exp <= 1600) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 1401) {
      expThree.style.width = '0.5%'
    }
   if (exp === 1402) {
      expThree.style.width = '1%'
    }
   if (exp === 1403) {
      expThree.style.width = '1.5%'
    }
   if (exp === 1404) {
      expThree.style.width = '2%'
    }
   if (exp === 1405) {
      expThree.style.width = '2.5%'
    }
   if (exp === 1406) {
      expThree.style.width = '3%'
    }
   if (exp === 1407) {
      expThree.style.width = '3.5%'
   }
   if (exp === 1408) {
      expThree.style.width = '4%'
    } 
   if (exp === 1409) {
      expThree.style.width = '4.5%'
    } 
   if (exp === 1410) {
      expThree.style.width = '5%'
    } 
   if (exp === 1411) {
      expThree.style.width = '5.5%'
    } 
   if (exp === 1412) {
      expThree.style.width = '6%'
    } 
   if (exp === 1413) {
      expThree.style.width = '6.5%'
    } 
   if (exp === 1414) {
      expThree.style.width = '7%'
    } 
   if (exp === 1415) {
      expThree.style.width = '7.5%'
    } 
   if (exp === 1416) {
      expThree.style.width = '8%'
    } 
   if (exp === 1417) {
      expThree.style.width = '8.5%'
    } 
   if (exp === 1418) {
      expThree.style.width = '9%'
    } 
   if (exp === 1419) {
      expThree.style.width = '9.5%'
    }
   if (exp === 1420) {
      expThree.style.width = '10%'
    }
   if (exp === 1421) {
     expThree.style.width = '10.5%'
    }
   if (exp === 1422) {
     expThree.style.width = '11%'
    }
   if (exp === 1423) {
     expThree.style.width = '11.5%'
    }
   if (exp === 1424) {
     expThree.style.width = '12%'
    }
   if (exp === 1425) {
     expThree.style.width = '12.5%'
    }
   if (exp === 1426) {
     expThree.style.width = '13%'
    }
   if (exp === 1427) {
     expThree.style.width = '13.5%'
   }
   if (exp === 1428) {
     expThree.style.width = '14%'
    } 
   if (exp === 1429) {
     expThree.style.width = '14.5%'
    } 
   if (exp === 1430) {
     expThree.style.width = '15%'
    } 
   if (exp === 1431) {
     expThree.style.width = '15.5%'
    } 
   if (exp === 1432) {
     expThree.style.width = '16%'
    } 
   if (exp === 1433) {
      expThree.style.width = '16.5%'
    } 
   if (exp === 1434) {
      expThree.style.width = '17%'
    } 
   if (exp === 1435) {
      expThree.style.width = '17.5%'
    } 
   if (exp === 1436) {
      expThree.style.width = '18%'
    } 
   if (exp === 1437) {
      expThree.style.width = '18.5%'
    } 
   if (exp === 1438) {
      expThree.style.width = '19%'
    } 
   if (exp === 1439) {
      expThree.style.width = '19.5%'
    }
   if (exp === 1440) {
      expThree.style.width = '20%'
    }
   if (exp === 1441) {
      expThree.style.width = '20.5%'
    }
   if (exp === 1442) {
      expThree.style.width = '21%'
    }
   if (exp === 1443) {
      expThree.style.width = '21.5%'
    }
   if (exp === 1444) {
      expThree.style.width = '22%'
    }
   if (exp === 1445) {
      expThree.style.width = '22.5%'
    }
   if (exp === 1446) {
      expThree.style.width = '23%'
    }
   if (exp === 1447) {
      expThree.style.width = '23.5%'
    }
   if (exp === 1448) {
      expThree.style.width = '24%'
    }
   if (exp === 1449) {
      expThree.style.width = '24.5%'
    }
   if (exp === 1450) {
      expThree.style.width = '25%'
    }
   if (exp === 1451) {
      expThree.style.width = '25.5%'
    }
   if (exp === 1452) {
      expThree.style.width = '26%'
    }
   if (exp === 1453) {
      expThree.style.width = '26.5%'
    }
   if (exp === 1454) {
      expThree.style.width = '27%'
    }
   if (exp === 1455) {
      expThree.style.width = '27.5%'
    }
    if (exp === 1456) {
      expThree.style.width = '28%'
    }
    if (exp === 1457) {
      expThree.style.width = '28.5%'
    }
    if (exp === 1458) {
      expThree.style.width = '29%'
    }
    if (exp === 1459) {
      expThree.style.width = '29.5%'
    }
    if (exp === 1460) {
      expThree.style.width = '30%'
    }
    if (exp === 1461) {
      expThree.style.width = '30.5%'
    }
    if (exp === 1462) {
      expThree.style.width = '31%'
    }
    if (exp === 1463) {
      expThree.style.width = '31.5%'
    }
    if (exp === 1464) {
      expThree.style.width = '32%'
    }
    if (exp === 1465) {
      expThree.style.width = '32.5%'
    }
    if (exp === 1466) {
      expThree.style.width = '33%'
    }
    if (exp === 1467) {
      expThree.style.width = '33.5%'
    }
    if (exp === 1468) {
      expThree.style.width = '34%'
    }
    if (exp === 1469) {
      expThree.style.width = '34.5%'
    }
    if (exp === 1470) {
      expThree.style.width = '35%'
    }
    if (exp === 1471) {
      expThree.style.width = '35.5%'
    }
    if (exp === 1472) {
      expThree.style.width = '36%'
    }
    if (exp === 1473) {
      expThree.style.width = '36.5%'
    }
    if (exp === 1474) {
      expThree.style.width = '37%'
    }
    if (exp === 1475) {
      expThree.style.width = '37.5%'
    }
    if (exp === 1476) {
      expThree.style.width = '38%'
    }
    if (exp === 1477) {
      expThree.style.width = '38.5%'
    }
    if (exp === 1478) {
      expThree.style.width = '39%'
    }
    if (exp === 1479) {
      expThree.style.width = '39.5%'
    }
    if (exp === 1480) {
      expThree.style.width = '40%'
    }
    if (exp === 1481) {
      expThree.style.width = '40.5%'
    }
    if (exp === 1482) {
      expThree.style.width = '41%'
    }
    if (exp === 1483) {
      expThree.style.width = '41.5%'
    }
    if (exp === 1484) {
      expThree.style.width = '42%'
    }
    if (exp === 1485) {
      expThree.style.width = '42.5%'
    }
    if (exp === 1486) {
      expThree.style.width = '43%'
    }
    if (exp === 1487) {
      expThree.style.width = '43.5%'
    }
    if (exp === 1488) {
      expThree.style.width = '44%'
    }
    if (exp === 1489) {
      expThree.style.width = '44.5%'
    }
    if (exp === 1490) {
      expThree.style.width = '45%'
    }
    if (exp === 1491) {
      expThree.style.width = '45.5%'
    }
    if (exp === 1492) {
      expThree.style.width = '46%'
    }
    if (exp === 1493) {
      expThree.style.width = '46.5%'
    }
    if (exp === 1494) {
      expThree.style.width = '47%'
    }
    if (exp === 1495) {
      expThree.style.width = '47.5%'
    }
    if (exp === 1496) {
      expThree.style.width = '48%'
    }
    if (exp === 1497) {
      expThree.style.width = '48.5%'
    }
    if (exp === 1498) {
      expThree.style.width = '49%'
    }
    if (exp === 1499) {
      expThree.style.width = '49.5%'
    }
    if (exp === 1500) {
      expThree.style.width = '50%'
    }
   if (exp === 1511) {
      expThree.style.width = '50.5%'
    }
   if (exp === 1512) {
      expThree.style.width = '51%'
    }
   if (exp === 1513) {
      expThree.style.width = '51.5%'
    }
   if (exp === 1514) {
      expThree.style.width = '52%'
    }
   if (exp === 1515) {
      expThree.style.width = '52.5%'
    }
   if (exp === 1516) {
      expThree.style.width = '53%'
    }
   if (exp === 1517) {
      expThree.style.width = '53.5%'
   }
   if (exp === 1518) {
      expThree.style.width = '54%'
    } 
   if (exp === 1519) {
      expThree.style.width = '54.5%'
    } 
   if (exp === 1510) {
      expThree.style.width = '55%'
    } 
   if (exp === 1511) {
      expThree.style.width = '55.5%'
    } 
   if (exp === 1512) {
      expThree.style.width = '56%'
    } 
   if (exp === 1513) {
      expThree.style.width = '56.5%'
    } 
   if (exp === 1514) {
      expThree.style.width = '57%'
    } 
   if (exp === 1515) {
      expThree.style.width = '57.5%'
    } 
   if (exp === 1516) {
      expThree.style.width = '58%'
    } 
   if (exp === 1517) {
      expThree.style.width = '58.5%'
    } 
   if (exp === 1518) {
      expThree.style.width = '59%'
    } 
   if (exp === 1519) {
      expThree.style.width = '59.5%'
    }
   if (exp === 1520) {
      expThree.style.width = '60%'
    }
   if (exp === 1521) {
     expThree.style.width = '60.5%'
    }
   if (exp === 1522) {
     expThree.style.width = '61%'
    }
   if (exp === 1523) {
     expThree.style.width = '61.5%'
    }
   if (exp === 1524) {
     expThree.style.width = '62%'
    }
   if (exp === 1525) {
     expThree.style.width = '62.5%'
    }
   if (exp === 1526) {
     expThree.style.width = '63%'
    }
   if (exp === 1527) {
     expThree.style.width = '63.5%'
   }
   if (exp === 1528) {
     expThree.style.width = '64%'
    } 
   if (exp === 1529) {
     expThree.style.width = '64.5%'
    } 
   if (exp === 1530) {
     expThree.style.width = '65%'
    } 
   if (exp === 1531) {
     expThree.style.width = '65.5%'
    } 
   if (exp === 1532) {
     expThree.style.width = '66%'
    } 
   if (exp === 1533) {
      expThree.style.width = '66.5%'
    } 
   if (exp === 1534) {
      expThree.style.width = '67%'
    } 
   if (exp === 1535) {
      expThree.style.width = '67.5%'
    } 
   if (exp === 1536) {
      expThree.style.width = '68%'
    } 
   if (exp === 1537) {
      expThree.style.width = '68.5%'
    } 
   if (exp === 1538) {
      expThree.style.width = '69%'
    } 
   if (exp === 1539) {
      expThree.style.width = '69.5%'
    }
   if (exp === 1540) {
      expThree.style.width = '70%'
    }
   if (exp === 1541) {
      expThree.style.width = '70.5%'
    }
   if (exp === 1542) {
      expThree.style.width = '71%'
    }
   if (exp === 1543) {
      expThree.style.width = '71.5%'
    }
   if (exp === 1544) {
      expThree.style.width = '72%'
    }
   if (exp === 1545) {
      expThree.style.width = '72.5%'
    }
   if (exp === 1546) {
      expThree.style.width = '73%'
    }
   if (exp === 1547) {
      expThree.style.width = '73.5%'
    }
   if (exp === 1548) {
      expThree.style.width = '74%'
    }
   if (exp === 1549) {
      expThree.style.width = '74.5%'
    }
   if (exp === 1550) {
      expThree.style.width = '75%'
    }
   if (exp === 1551) {
      expThree.style.width = '75.5%'
    }
   if (exp === 1552) {
      expThree.style.width = '76%'
    }
   if (exp === 1553) {
      expThree.style.width = '76.5%'
    }
   if (exp === 1554) {
      expThree.style.width = '77%'
    }
   if (exp === 1555) {
      expThree.style.width = '77.5%'
    }
    if (exp === 1556) {
      expThree.style.width = '78%'
    }
    if (exp === 1557) {
      expThree.style.width = '78.5%'
    }
    if (exp === 1558) {
      expThree.style.width = '79%'
    }
    if (exp === 1559) {
      expThree.style.width = '79.5%'
    }
    if (exp === 1560) {
      expThree.style.width = '80%'
    }
    if (exp === 1561) {
      expThree.style.width = '80.5%'
    }
    if (exp === 1562) {
      expThree.style.width = '81%'
    }
    if (exp === 1563) {
      expThree.style.width = '81.5%'
    }
    if (exp === 1564) {
      expThree.style.width = '82%'
    }
    if (exp === 1565) {
      expThree.style.width = '82.5%'
    }
    if (exp === 1566) {
      expThree.style.width = '83%'
    }
    if (exp === 1567) {
      expThree.style.width = '83.5%'
    }
    if (exp === 1568) {
      expThree.style.width = '84%'
    }
    if (exp === 1569) {
      expThree.style.width = '84.5%'
    }
    if (exp === 1570) {
      expThree.style.width = '85%'
    }
    if (exp === 1571) {
      expThree.style.width = '85.5%'
    }
    if (exp === 1572) {
      expThree.style.width = '86%'
    }
    if (exp === 1573) {
      expThree.style.width = '86.5%'
    }
    if (exp === 1574) {
      expThree.style.width = '87%'
    }
    if (exp === 1575) {
      expThree.style.width = '87.5%'
    }
    if (exp === 1376) {
      expThree.style.width = '88%'
    }
    if (exp === 1577) {
      expThree.style.width = '88.5%'
    }
    if (exp === 1578) {
      expThree.style.width = '89%'
    }
    if (exp === 1579) {
      expThree.style.width = '89.5%'
    }
    if (exp === 1580) {
      expThree.style.width = '90%'
    }
    if (exp === 1581) {
      expThree.style.width = '90.5%'
    }
    if (exp === 1582) {
      expThree.style.width = '91%'
    }
    if (exp === 1583) {
      expThree.style.width = '91.5%'
    }
    if (exp === 1584) {
      expThree.style.width = '92%'
    }
    if (exp === 1585) {
      expThree.style.width = '92.5%'
    }
    if (exp === 1586) {
      expThree.style.width = '93%'
    }
    if (exp === 1587) {
      expThree.style.width = '93.5%'
    }
    if (exp === 1588) {
      expThree.style.width = '94%'
    }
    if (exp === 1589) {
      expThree.style.width = '94.5%'
    }
    if (exp === 1590) {
      expThree.style.width = '95%'
    }
    if (exp === 1591) {
      expThree.style.width = '95.5%'
    }
    if (exp === 1592) {
      expThree.style.width = '96%'
    }
    if (exp === 1593) {
      expThree.style.width = '96.5%'
    }
    if (exp === 1594) {
      expThree.style.width = '97%'
    }
    if (exp === 1595) {
      expThree.style.width = '97.5%'
    }
    if (exp === 1596) {
      expThree.style.width = '98%'
    }
    if (exp === 1597) {
      expThree.style.width = '98.5%'
    }
    if (exp === 1598) {
      expThree.style.width = '99%'
    }
    if (exp === 1599) {
      expThree.style.width = '99.5%'
    }
    if (exp === 1600) {
      expThree.style.width = '100%'
    }
     
  }
  
    if (exp >= 1601 && exp <= 1800) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 1601) {
      expFour.style.width = '0.5%'
    }
   if (exp === 1602) {
      expFour.style.width = '1%'
    }
   if (exp === 1603) {
      expFour.style.width = '1.5%'
    }
   if (exp === 1604) {
      expFour.style.width = '2%'
    }
   if (exp === 1605) {
      expFour.style.width = '2.5%'
    }
   if (exp === 1606) {
      expFour.style.width = '3%'
    }
   if (exp === 1607) {
      expFour.style.width = '3.5%'
   }
   if (exp === 1608) {
      expFour.style.width = '4%'
    } 
   if (exp === 1609) {
      expFour.style.width = '4.5%'
    } 
   if (exp === 1610) {
      expFour.style.width = '5%'
    } 
   if (exp === 1611) {
      expFour.style.width = '5.5%'
    } 
   if (exp === 1612) {
      expFour.style.width = '6%'
    } 
   if (exp === 1613) {
      expFour.style.width = '6.5%'
    } 
   if (exp === 1614) {
      expFour.style.width = '7%'
    } 
   if (exp === 1615) {
      expFour.style.width = '7.5%'
    } 
   if (exp === 1616) {
      expFour.style.width = '8%'
    } 
   if (exp === 1617) {
      expFour.style.width = '8.5%'
    } 
   if (exp === 1618) {
      expFour.style.width = '9%'
    } 
   if (exp === 1619) {
      expFour.style.width = '9.5%'
    }
   if (exp === 1620) {
      expFour.style.width = '10%'
    }
   if (exp === 1621) {
     expFour.style.width = '10.5%'
    }
   if (exp === 1622) {
     expFour.style.width = '11%'
    }
   if (exp === 1623) {
     expFour.style.width = '11.5%'
    }
   if (exp === 1624) {
     expFour.style.width = '12%'
    }
   if (exp === 1625) {
     expFour.style.width = '12.5%'
    }
   if (exp === 1626) {
     expFour.style.width = '13%'
    }
   if (exp === 1627) {
     expFour.style.width = '13.5%'
   }
   if (exp === 1628) {
     expFour.style.width = '14%'
    } 
   if (exp === 1629) {
     expFour.style.width = '14.5%'
    } 
   if (exp === 1630) {
     expFour.style.width = '15%'
    } 
   if (exp === 1631) {
     expFour.style.width = '15.5%'
    } 
   if (exp === 1632) {
     expFour.style.width = '16%'
    } 
   if (exp === 1633) {
      expFour.style.width = '16.5%'
    } 
   if (exp === 1634) {
      expFour.style.width = '17%'
    } 
   if (exp === 1635) {
      expFour.style.width = '17.5%'
    } 
   if (exp === 1636) {
      expFour.style.width = '18%'
    } 
   if (exp === 1637) {
      expFour.style.width = '18.5%'
    } 
   if (exp === 1638) {
      expFour.style.width = '19%'
    } 
   if (exp === 1639) {
      expFour.style.width = '19.5%'
    }
   if (exp === 1640) {
      expFour.style.width = '20%'
    }
   if (exp === 1641) {
      expFour.style.width = '20.5%'
    }
   if (exp === 1642) {
      expFour.style.width = '21%'
    }
   if (exp === 1643) {
      expFour.style.width = '21.5%'
    }
   if (exp === 1644) {
      expFour.style.width = '22%'
    }
   if (exp === 1645) {
      expFour.style.width = '22.5%'
    }
   if (exp === 1646) {
      expFour.style.width = '23%'
    }
   if (exp === 1647) {
      expFour.style.width = '23.5%'
    }
   if (exp === 1648) {
      expFour.style.width = '24%'
    }
   if (exp === 1649) {
      expFour.style.width = '24.5%'
    }
   if (exp === 1650) {
      expFour.style.width = '25%'
    }
   if (exp === 1651) {
      expFour.style.width = '25.5%'
    }
   if (exp === 1652) {
      expFour.style.width = '26%'
    }
   if (exp === 1653) {
      expFour.style.width = '26.5%'
    }
   if (exp === 1654) {
      expFour.style.width = '27%'
    }
   if (exp === 1655) {
      expFour.style.width = '27.5%'
    }
    if (exp === 1656) {
      expFour.style.width = '28%'
    }
    if (exp === 1657) {
      expFour.style.width = '28.5%'
    }
    if (exp === 1658) {
      expFour.style.width = '29%'
    }
    if (exp === 1659) {
      expFour.style.width = '29.5%'
    }
    if (exp === 1660) {
      expFour.style.width = '30%'
    }
    if (exp === 1661) {
      expFour.style.width = '30.5%'
    }
    if (exp === 1662) {
      expFour.style.width = '31%'
    }
    if (exp === 1663) {
      expFour.style.width = '31.5%'
    }
    if (exp === 1664) {
      expFour.style.width = '32%'
    }
    if (exp === 1665) {
      expFour.style.width = '32.5%'
    }
    if (exp === 1666) {
      expFour.style.width = '33%'
    }
    if (exp === 1667) {
      expFour.style.width = '33.5%'
    }
    if (exp === 1668) {
      expFour.style.width = '34%'
    }
    if (exp === 1669) {
      expFour.style.width = '34.5%'
    }
    if (exp === 1670) {
      expFour.style.width = '35%'
    }
    if (exp === 1671) {
      expFour.style.width = '35.5%'
    }
    if (exp === 1672) {
      expFour.style.width = '36%'
    }
    if (exp === 1673) {
      expFour.style.width = '36.5%'
    }
    if (exp === 1674) {
      expFour.style.width = '37%'
    }
    if (exp === 1675) {
      expFour.style.width = '37.5%'
    }
    if (exp === 1676) {
      expFour.style.width = '38%'
    }
    if (exp === 1677) {
      expFour.style.width = '38.5%'
    }
    if (exp === 1678) {
      expFour.style.width = '39%'
    }
    if (exp === 1679) {
      expFour.style.width = '39.5%'
    }
    if (exp === 1680) {
      expFour.style.width = '40%'
    }
    if (exp === 1681) {
      expFour.style.width = '40.5%'
    }
    if (exp === 1682) {
      expFour.style.width = '41%'
    }
    if (exp === 1683) {
      expFour.style.width = '41.5%'
    }
    if (exp === 1684) {
      expFour.style.width = '42%'
    }
    if (exp === 1685) {
      expFour.style.width = '42.5%'
    }
    if (exp === 1686) {
      expFour.style.width = '43%'
    }
    if (exp === 1687) {
      expFour.style.width = '43.5%'
    }
    if (exp === 1688) {
      expFour.style.width = '44%'
    }
    if (exp === 1689) {
      expFour.style.width = '44.5%'
    }
    if (exp === 1690) {
      expFour.style.width = '45%'
    }
    if (exp === 1691) {
      expFour.style.width = '45.5%'
    }
    if (exp === 1692) {
      expFour.style.width = '46%'
    }
    if (exp === 1693) {
      expFour.style.width = '46.5%'
    }
    if (exp === 1694) {
      expFour.style.width = '47%'
    }
    if (exp === 1695) {
      expFour.style.width = '47.5%'
    }
    if (exp === 1696) {
      expFour.style.width = '48%'
    }
    if (exp === 1697) {
      expFour.style.width = '48.5%'
    }
    if (exp === 1698) {
      expFour.style.width = '49%'
    }
    if (exp === 1699) {
      expFour.style.width = '49.5%'
    }
    if (exp === 1700) {
      expFour.style.width = '50%'
    }
   if (exp === 1711) {
      expFour.style.width = '50.5%'
    }
   if (exp === 1712) {
      expFour.style.width = '51%'
    }
   if (exp === 1713) {
      expFour.style.width = '51.5%'
    }
   if (exp === 1714) {
      expFour.style.width = '52%'
    }
   if (exp === 1715) {
      expFour.style.width = '52.5%'
    }
   if (exp === 1716) {
      expFour.style.width = '53%'
    }
   if (exp === 1717) {
      expFour.style.width = '53.5%'
   }
   if (exp === 1718) {
      expFour.style.width = '54%'
    } 
   if (exp === 1719) {
      expFour.style.width = '54.5%'
    } 
   if (exp === 1710) {
      expFour.style.width = '55%'
    } 
   if (exp === 1711) {
      expFour.style.width = '55.5%'
    } 
   if (exp === 1712) {
      expFour.style.width = '56%'
    } 
   if (exp === 1713) {
      expFour.style.width = '56.5%'
    } 
   if (exp === 1714) {
      expFour.style.width = '57%'
    } 
   if (exp === 1715) {
      expFour.style.width = '57.5%'
    } 
   if (exp === 1716) {
      expFour.style.width = '58%'
    } 
   if (exp === 1717) {
      expFour.style.width = '58.5%'
    } 
   if (exp === 1718) {
      expFour.style.width = '59%'
    } 
   if (exp === 1719) {
      expFour.style.width = '59.5%'
    }
   if (exp === 1720) {
      expFour.style.width = '60%'
    }
   if (exp === 1721) {
     expFour.style.width = '60.5%'
    }
   if (exp === 1722) {
     expFour.style.width = '61%'
    }
   if (exp === 1723) {
     expFour.style.width = '61.5%'
    }
   if (exp === 1724) {
     expFour.style.width = '62%'
    }
   if (exp === 1725) {
     expFour.style.width = '62.5%'
    }
   if (exp === 1726) {
     expFour.style.width = '63%'
    }
   if (exp === 1727) {
     expFour.style.width = '63.5%'
   }
   if (exp === 1728) {
     expFour.style.width = '64%'
    } 
   if (exp === 1729) {
     expFour.style.width = '64.5%'
    } 
   if (exp === 1730) {
     expFour.style.width = '65%'
    } 
   if (exp === 1731) {
     expFour.style.width = '65.5%'
    } 
   if (exp === 1732) {
     expFour.style.width = '66%'
    } 
   if (exp === 1733) {
      expFour.style.width = '66.5%'
    } 
   if (exp === 1734) {
      expFour.style.width = '67%'
    } 
   if (exp === 1735) {
      expFour.style.width = '67.5%'
    } 
   if (exp === 1736) {
      expFour.style.width = '68%'
    } 
   if (exp === 1737) {
      expFour.style.width = '68.5%'
    } 
   if (exp === 1738) {
      expFour.style.width = '69%'
    } 
   if (exp === 1739) {
      expFour.style.width = '69.5%'
    }
   if (exp === 1740) {
      expFour.style.width = '70%'
    }
   if (exp === 1741) {
      expFour.style.width = '70.5%'
    }
   if (exp === 1742) {
      expFour.style.width = '71%'
    }
   if (exp === 1743) {
      expFour.style.width = '71.5%'
    }
   if (exp === 1744) {
      expFour.style.width = '72%'
    }
   if (exp === 1745) {
      expFour.style.width = '72.5%'
    }
   if (exp === 1746) {
      expFour.style.width = '73%'
    }
   if (exp === 1747) {
      expFour.style.width = '73.5%'
    }
   if (exp === 1748) {
      expFour.style.width = '74%'
    }
   if (exp === 1749) {
      expFour.style.width = '74.5%'
    }
   if (exp === 1750) {
      expFour.style.width = '75%'
    }
   if (exp === 1751) {
      expFour.style.width = '75.5%'
    }
   if (exp === 1752) {
      expFour.style.width = '76%'
    }
   if (exp === 1753) {
      expFour.style.width = '76.5%'
    }
   if (exp === 1754) {
      expFour.style.width = '77%'
    }
   if (exp === 1755) {
      expFour.style.width = '77.5%'
    }
    if (exp === 1756) {
      expFour.style.width = '78%'
    }
    if (exp === 1757) {
      expFour.style.width = '78.5%'
    }
    if (exp === 1758) {
      expFour.style.width = '79%'
    }
    if (exp === 1759) {
      expFour.style.width = '79.5%'
    }
    if (exp === 1760) {
      expFour.style.width = '80%'
    }
    if (exp === 1761) {
      expFour.style.width = '80.5%'
    }
    if (exp === 1762) {
      expFour.style.width = '81%'
    }
    if (exp === 1763) {
      expFour.style.width = '81.5%'
    }
    if (exp === 1764) {
      expFour.style.width = '82%'
    }
    if (exp === 1765) {
      expFour.style.width = '82.5%'
    }
    if (exp === 1766) {
      expFour.style.width = '83%'
    }
    if (exp === 1767) {
      expFour.style.width = '83.5%'
    }
    if (exp === 1768) {
      expFour.style.width = '84%'
    }
    if (exp === 1769) {
      expFour.style.width = '84.5%'
    }
    if (exp === 1770) {
      expFour.style.width = '85%'
    }
    if (exp === 1771) {
      expFour.style.width = '85.5%'
    }
    if (exp === 1772) {
      expFour.style.width = '86%'
    }
    if (exp === 1773) {
      expFour.style.width = '86.5%'
    }
    if (exp === 1774) {
      expFour.style.width = '87%'
    }
    if (exp === 1775) {
      expFour.style.width = '87.5%'
    }
    if (exp === 1776) {
      expFour.style.width = '88%'
    }
    if (exp === 1777) {
      expFour.style.width = '88.5%'
    }
    if (exp === 1778) {
      expFour.style.width = '89%'
    }
    if (exp === 1779) {
      expFour.style.width = '89.5%'
    }
    if (exp === 1780) {
      expFour.style.width = '90%'
    }
    if (exp === 1781) {
      expFour.style.width = '90.5%'
    }
    if (exp === 1782) {
      expFour.style.width = '91%'
    }
    if (exp === 1783) {
      expFour.style.width = '91.5%'
    }
    if (exp === 1784) {
      expFour.style.width = '92%'
    }
    if (exp === 1785) {
      expFour.style.width = '92.5%'
    }
    if (exp === 1786) {
      expFour.style.width = '93%'
    }
    if (exp === 1787) {
      expFour.style.width = '93.5%'
    }
    if (exp === 1788) {
      expFour.style.width = '94%'
    }
    if (exp === 1789) {
      expFour.style.width = '94.5%'
    }
    if (exp === 1790) {
      expFour.style.width = '95%'
    }
    if (exp === 1791) {
      expFour.style.width = '95.5%'
    }
    if (exp === 1792) {
      expFour.style.width = '96%'
    }
    if (exp === 1793) {
      expFour.style.width = '96.5%'
    }
    if (exp === 1794) {
      expFour.style.width = '97%'
    }
    if (exp === 1795) {
      expFour.style.width = '97.5%'
    }
    if (exp === 1796) {
      expFour.style.width = '98%'
    }
    if (exp === 1797) {
      expFour.style.width = '98.5%'
    }
    if (exp === 1798) {
      expFour.style.width = '99%'
    }
    if (exp === 1799) {
      expFour.style.width = '99.5%'
    }
    if (exp === 1800) {
      expFour.style.width = '100%'
    }
     
  }
  
    if (exp >= 1801 && exp <= 2000) 
    {
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'block'
   if (exp === 1801) {
      expFive.style.width = '0.5%'
    }
   if (exp === 1802) {
      expFive.style.width = '1%'
    }
   if (exp === 1803) {
      expFive.style.width = '1.5%'
    }
   if (exp === 1804) {
      expFive.style.width = '2%'
    }
   if (exp === 1805) {
      expFive.style.width = '2.5%'
    }
   if (exp === 1806) {
      expFive.style.width = '3%'
    }
   if (exp === 1807) {
      expFive.style.width = '3.5%'
   }
   if (exp === 1808) {
      expFive.style.width = '4%'
    } 
   if (exp === 1809) {
      expFive.style.width = '4.5%'
    } 
   if (exp === 1810) {
      expFive.style.width = '5%'
    } 
   if (exp === 1811) {
      expFive.style.width = '5.5%'
    } 
   if (exp === 1812) {
      expFive.style.width = '6%'
    } 
   if (exp === 1813) {
      expFive.style.width = '6.5%'
    } 
   if (exp === 1814) {
      expFive.style.width = '7%'
    } 
   if (exp === 1815) {
      expFive.style.width = '7.5%'
    } 
   if (exp === 1816) {
      expFive.style.width = '8%'
    } 
   if (exp === 1817) {
      expFive.style.width = '8.5%'
    } 
   if (exp === 1818) {
      expFive.style.width = '9%'
    } 
   if (exp === 1819) {
      expFive.style.width = '9.5%'
    }
   if (exp === 1820) {
      expFive.style.width = '10%'
    }
   if (exp === 1821) {
     expFive.style.width = '10.5%'
    }
   if (exp === 1822) {
     expFive.style.width = '11%'
    }
   if (exp === 1823) {
     expFive.style.width = '11.5%'
    }
   if (exp === 1824) {
     expFive.style.width = '12%'
    }
   if (exp === 1825) {
     expFive.style.width = '12.5%'
    }
   if (exp === 1826) {
     expFive.style.width = '13%'
    }
   if (exp === 1827) {
     expFive.style.width = '13.5%'
   }
   if (exp === 1828) {
     expFive.style.width = '14%'
    } 
   if (exp === 1829) {
     expFive.style.width = '14.5%'
    } 
   if (exp === 1830) {
     expFive.style.width = '15%'
    } 
   if (exp === 1831) {
     expFive.style.width = '15.5%'
    } 
   if (exp === 1832) {
     expFive.style.width = '16%'
    } 
   if (exp === 1833) {
      expFive.style.width = '16.5%'
    } 
   if (exp === 1834) {
      expFive.style.width = '17%'
    } 
   if (exp === 1835) {
      expFive.style.width = '17.5%'
    } 
   if (exp === 1836) {
      expFive.style.width = '18%'
    } 
   if (exp === 1837) {
      expFive.style.width = '18.5%'
    } 
   if (exp === 1838) {
      expFive.style.width = '19%'
    } 
   if (exp === 1839) {
      expFive.style.width = '19.5%'
    }
   if (exp === 1840) {
      expFive.style.width = '20%'
    }
   if (exp === 1841) {
      expFive.style.width = '20.5%'
    }
   if (exp === 1842) {
      expFive.style.width = '21%'
    }
   if (exp === 1843) {
      expFive.style.width = '21.5%'
    }
   if (exp === 1844) {
      expFive.style.width = '22%'
    }
   if (exp === 1845) {
      expFive.style.width = '22.5%'
    }
   if (exp === 1846) {
      expFive.style.width = '23%'
    }
   if (exp === 1847) {
      expFive.style.width = '23.5%'
    }
   if (exp === 1848) {
      expFive.style.width = '24%'
    }
   if (exp === 1849) {
      expFive.style.width = '24.5%'
    }
   if (exp === 1850) {
      expFive.style.width = '25%'
    }
   if (exp === 1851) {
      expFive.style.width = '25.5%'
    }
   if (exp === 1852) {
      expFive.style.width = '26%'
    }
   if (exp === 1853) {
      expFive.style.width = '26.5%'
    }
   if (exp === 1854) {
      expFive.style.width = '27%'
    }
   if (exp === 1855) {
      expFive.style.width = '27.5%'
    }
    if (exp === 1856) {
      expFive.style.width = '28%'
    }
    if (exp === 1857) {
      expFive.style.width = '28.5%'
    }
    if (exp === 1858) {
      expFive.style.width = '29%'
    }
    if (exp === 1859) {
      expFive.style.width = '29.5%'
    }
    if (exp === 1860) {
      expFive.style.width = '30%'
    }
    if (exp === 1861) {
      expFive.style.width = '30.5%'
    }
    if (exp === 1862) {
      expFive.style.width = '31%'
    }
    if (exp === 1863) {
      expFive.style.width = '31.5%'
    }
    if (exp === 1864) {
      expFive.style.width = '32%'
    }
    if (exp === 1865) {
      expFive.style.width = '32.5%'
    }
    if (exp === 1866) {
      expFive.style.width = '33%'
    }
    if (exp === 1867) {
      expFive.style.width = '33.5%'
    }
    if (exp === 1868) {
      expFive.style.width = '34%'
    }
    if (exp === 1869) {
      expFive.style.width = '34.5%'
    }
    if (exp === 1870) {
      expFive.style.width = '35%'
    }
    if (exp === 1871) {
      expFive.style.width = '35.5%'
    }
    if (exp === 1872) {
      expFive.style.width = '36%'
    }
    if (exp === 1873) {
      expFive.style.width = '36.5%'
    }
    if (exp === 1874) {
      expFive.style.width = '37%'
    }
    if (exp === 1875) {
      expFive.style.width = '37.5%'
    }
    if (exp === 1876) {
      expFive.style.width = '38%'
    }
    if (exp === 1877) {
      expFive.style.width = '38.5%'
    }
    if (exp === 1878) {
      expFive.style.width = '39%'
    }
    if (exp === 1879) {
      expFive.style.width = '39.5%'
    }
    if (exp === 1880) {
      expFive.style.width = '40%'
    }
    if (exp === 1881) {
      expFive.style.width = '40.5%'
    }
    if (exp === 1882) {
      expFive.style.width = '41%'
    }
    if (exp === 1883) {
      expFive.style.width = '41.5%'
    }
    if (exp === 1884) {
      expFive.style.width = '42%'
    }
    if (exp === 1885) {
      expFive.style.width = '42.5%'
    }
    if (exp === 1886) {
      expFive.style.width = '43%'
    }
    if (exp === 1887) {
      expFive.style.width = '43.5%'
    }
    if (exp === 1888) {
      expFive.style.width = '44%'
    }
    if (exp === 1889) {
      expFive.style.width = '44.5%'
    }
    if (exp === 1890) {
      expFive.style.width = '45%'
    }
    if (exp === 1891) {
      expFive.style.width = '45.5%'
    }
    if (exp === 1892) {
      expFive.style.width = '46%'
    }
    if (exp === 1893) {
      expFive.style.width = '46.5%'
    }
    if (exp === 1894) {
      expFive.style.width = '47%'
    }
    if (exp === 1895) {
      expFive.style.width = '47.5%'
    }
    if (exp === 1896) {
      expFive.style.width = '48%'
    }
    if (exp === 1897) {
      expFive.style.width = '48.5%'
    }
    if (exp === 1898) {
      expFive.style.width = '49%'
    }
    if (exp === 1899) {
      expFive.style.width = '49.5%'
    }
    if (exp === 1900) {
      expFive.style.width = '50%'
    }
   if (exp === 1911) {
      expFive.style.width = '50.5%'
    }
   if (exp === 1912) {
      expFive.style.width = '51%'
    }
   if (exp === 1913) {
      expFive.style.width = '51.5%'
    }
   if (exp === 1914) {
      expFive.style.width = '52%'
    }
   if (exp === 1915) {
      expFive.style.width = '52.5%'
    }
   if (exp === 1916) {
      expFive.style.width = '53%'
    }
   if (exp === 1917) {
      expFive.style.width = '53.5%'
   }
   if (exp === 1918) {
      expFive.style.width = '54%'
    } 
   if (exp === 1919) {
      expFive.style.width = '54.5%'
    } 
   if (exp === 1910) {
      expFive.style.width = '55%'
    } 
   if (exp === 1911) {
      expFive.style.width = '55.5%'
    } 
   if (exp === 1912) {
      expFive.style.width = '56%'
    } 
   if (exp === 1913) {
      expFive.style.width = '56.5%'
    } 
   if (exp === 1914) {
      expFive.style.width = '57%'
    } 
   if (exp === 1915) {
      expFive.style.width = '57.5%'
    } 
   if (exp === 1916) {
      expFive.style.width = '58%'
    } 
   if (exp === 1917) {
      expFive.style.width = '58.5%'
    } 
   if (exp === 1918) {
      expFive.style.width = '59%'
    } 
   if (exp === 1919) {
      expFive.style.width = '59.5%'
    }
   if (exp === 1920) {
      expFive.style.width = '60%'
    }
   if (exp === 1921) {
     expFive.style.width = '60.5%'
    }
   if (exp === 1922) {
     expFive.style.width = '61%'
    }
   if (exp === 1923) {
     expFive.style.width = '61.5%'
    }
   if (exp === 1924) {
     expFive.style.width = '62%'
    }
   if (exp === 1925) {
     expFive.style.width = '62.5%'
    }
   if (exp === 1926) {
     expFive.style.width = '63%'
    }
   if (exp === 1927) {
     expFive.style.width = '63.5%'
   }
   if (exp === 1928) {
     expFive.style.width = '64%'
    } 
   if (exp === 1929) {
     expFive.style.width = '64.5%'
    } 
   if (exp === 1930) {
     expFive.style.width = '65%'
    } 
   if (exp === 1931) {
     expFive.style.width = '65.5%'
    } 
   if (exp === 1932) {
     expFive.style.width = '66%'
    } 
   if (exp === 1933) {
      expFive.style.width = '66.5%'
    } 
   if (exp === 1934) {
      expFive.style.width = '67%'
    } 
   if (exp === 1935) {
      expFive.style.width = '67.5%'
    } 
   if (exp === 1936) {
      expFive.style.width = '68%'
    } 
   if (exp === 1937) {
      expFive.style.width = '68.5%'
    } 
   if (exp === 1938) {
      expFive.style.width = '69%'
    } 
   if (exp === 1939) {
      expFive.style.width = '69.5%'
    }
   if (exp === 1940) {
      expFive.style.width = '70%'
    }
   if (exp === 1941) {
      expFive.style.width = '70.5%'
    }
   if (exp === 1942) {
      expFive.style.width = '71%'
    }
   if (exp === 1943) {
      expFive.style.width = '71.5%'
    }
   if (exp === 1944) {
      expFive.style.width = '72%'
    }
   if (exp === 1945) {
      expFive.style.width = '72.5%'
    }
   if (exp === 1946) {
      expFive.style.width = '73%'
    }
   if (exp === 1947) {
      expFive.style.width = '73.5%'
    }
   if (exp === 1948) {
      expFive.style.width = '74%'
    }
   if (exp === 1949) {
      expFive.style.width = '74.5%'
    }
   if (exp === 1950) {
      expFive.style.width = '75%'
    }
   if (exp === 1951) {
      expFive.style.width = '75.5%'
    }
   if (exp === 1952) {
      expFive.style.width = '76%'
    }
   if (exp === 1953) {
      expFive.style.width = '76.5%'
    }
   if (exp === 1954) {
      expFive.style.width = '77%'
    }
   if (exp === 1955) {
      expFive.style.width = '77.5%'
    }
    if (exp === 1956) {
      expFive.style.width = '78%'
    }
    if (exp === 1957) {
      expFive.style.width = '78.5%'
    }
    if (exp === 1958) {
      expFive.style.width = '79%'
    }
    if (exp === 1959) {
      expFive.style.width = '79.5%'
    }
    if (exp === 1960) {
      expFive.style.width = '80%'
    }
    if (exp === 1961) {
      expFive.style.width = '80.5%'
    }
    if (exp === 1962) {
      expFive.style.width = '81%'
    }
    if (exp === 1963) {
      expFive.style.width = '81.5%'
    }
    if (exp === 1964) {
      expFive.style.width = '82%'
    }
    if (exp === 1965) {
      expFive.style.width = '82.5%'
    }
    if (exp === 1966) {
      expFive.style.width = '83%'
    }
    if (exp === 1967) {
      expFive.style.width = '83.5%'
    }
    if (exp === 1968) {
      expFive.style.width = '84%'
    }
    if (exp === 1969) {
      expFive.style.width = '84.5%'
    }
    if (exp === 1970) {
      expFive.style.width = '85%'
    }
    if (exp === 1971) {
      expFive.style.width = '85.5%'
    }
    if (exp === 1972) {
      expFive.style.width = '86%'
    }
    if (exp === 1973) {
      expFive.style.width = '86.5%'
    }
    if (exp === 1974) {
      expFive.style.width = '87%'
    }
    if (exp === 1975) {
      expFive.style.width = '87.5%'
    }
    if (exp === 1976) {
      expFive.style.width = '88%'
    }
    if (exp === 1977) {
      expFive.style.width = '88.5%'
    }
    if (exp === 1978) {
      expFive.style.width = '89%'
    }
    if (exp === 1979) {
      expFive.style.width = '89.5%'
    }
    if (exp === 1980) {
      expFive.style.width = '90%'
    }
    if (exp === 1981) {
      expFive.style.width = '90.5%'
    }
    if (exp === 1982) {
      expFive.style.width = '91%'
    }
    if (exp === 1983) {
      expFive.style.width = '91.5%'
    }
    if (exp === 1984) {
      expFive.style.width = '92%'
    }
    if (exp === 1985) {
      expFive.style.width = '92.5%'
    }
    if (exp === 1986) {
      expFive.style.width = '93%'
    }
    if (exp === 1987) {
      expFive.style.width = '93.5%'
    }
    if (exp === 1988) {
      expFive.style.width = '94%'
    }
    if (exp === 1989) {
      expFive.style.width = '94.5%'
    }
    if (exp === 1990) {
      expFive.style.width = '95%'
    }
    if (exp === 1991) {
      expFive.style.width = '95.5%'
    }
    if (exp === 1992) {
      expFive.style.width = '96%'
    }
    if (exp === 1993) {
      expFive.style.width = '96.5%'
    }
    if (exp === 1994) {
      expFive.style.width = '97%'
    }
    if (exp === 1995) {
      expFive.style.width = '97.5%'
    }
    if (exp === 1996) {
      expFive.style.width = '98%'
    }
    if (exp === 1997) {
      expFive.style.width = '98.5%'
    }
    if (exp === 1998) {
      expFive.style.width = '99%'
    }
    if (exp === 1999) {
      expFive.style.width = '99.5%'
    }
    if (exp === 2000) {
      expFive.style.width = '100%'
    }
     
  }
  
    if (exp === 2000) {
     setTimeout(() => {
      expOne.style.display = 'none'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
    }, 500)
    handleExpFive();
    }
    if (exp >= 2000) {
      handleExpFive();
      levelUpShow();
      
      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'
      expFour.style.width = '100%'
      expFive.style.width = '100%'
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
      
      handleRaceLocations();

      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
     document.querySelector('.the-level').innerHTML = 5;
     
     document.querySelector('.next-level').innerHTML = '4000';
     
     document.querySelector('.level-title').innerHTML = 'Newbie lvl 3'
    }
   
 } 
}

function handleExpFive() {
 if (playerLevel === 5) {
    
    if (exp >= 2001 && exp <= 2400) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 2001) {
      expOne.style.width = '0.25%'
    }
   if (exp === 2002) {
      expOne.style.width = '0.5%'
    }
   if (exp === 2003) {
      expOne.style.width = '0.75%'
    }
   if (exp === 2004) {
      expOne.style.width = '1%'
    }
   if (exp === 2005) {
      expOne.style.width = '1.25%'
    }
   if (exp === 2006) {
      expOne.style.width = '1.5%'
    }
   if (exp === 2007) {
      expOne.style.width = '1.75%'
   }
   if (exp === 2008) {
      expOne.style.width = '2%'
    } 
   if (exp === 2009) {
      expOne.style.width = '2.25%'
    } 
   if (exp === 2010) {
      expOne.style.width = '2.5%'
    } 
   if (exp === 2011) {
      expOne.style.width = '2.75%'
    } 
   if (exp === 2012) {
      expOne.style.width = '3%'
    } 
   if (exp === 2013) {
      expOne.style.width = '3.25%'
    } 
   if (exp === 2014) {
      expOne.style.width = '3.5%'
    } 
   if (exp === 2015) {
      expOne.style.width = '3.75%'
    } 
   if (exp === 2016) {
      expOne.style.width = '4%'
    } 
   if (exp === 2017) {
      expOne.style.width = '4.25%'
    } 
   if (exp === 2018) {
      expOne.style.width = '4.5%'
    } 
   if (exp === 2019) {
      expOne.style.width = '4.75%'
    }
   if (exp === 2020) {
      expOne.style.width = '5%'
    }
   if (exp === 2021) {
     expOne.style.width = '5.25%'
    }
   if (exp === 2022) {
     expOne.style.width = '5.5%'
    }
   if (exp === 2023) {
     expOne.style.width = '5.75%'
    }
   if (exp === 2024) {
     expOne.style.width = '6%'
    }
   if (exp === 2025) {
     expOne.style.width = '6.25%'
    }
   if (exp === 2026) {
     expOne.style.width = '6.5%'
    }
   if (exp === 2027) {
     expOne.style.width = '6.75%'
   }
   if (exp === 2028) {
     expOne.style.width = '7%'
    } 
   if (exp === 2029) {
     expOne.style.width = '7.25%'
    } 
   if (exp === 2030) {
     expOne.style.width = '7.5%'
    } 
   if (exp === 2031) {
     expOne.style.width = '7.75%'
    } 
   if (exp === 2032) {
     expOne.style.width = '8%'
    } 
   if (exp === 2033) {
      expOne.style.width = '8.25%'
    } 
   if (exp === 2034) {
      expOne.style.width = '8.5%'
    } 
   if (exp === 2035) {
      expOne.style.width = '8.75%'
    } 
   if (exp === 2036) {
      expOne.style.width = '9%'
    } 
   if (exp === 2037) {
      expOne.style.width = '9.25%'
    } 
   if (exp === 2038) {
      expOne.style.width = '9.5%'
    } 
   if (exp === 2039) {
      expOne.style.width = '9.75%'
    }
   if (exp === 2040) {
      expOne.style.width = '10%'
    }
   if (exp === 2041) {
      expOne.style.width = '10.25%'
    }
   if (exp === 2042) {
      expOne.style.width = '10.5%'
    }
   if (exp === 2043) {
      expOne.style.width = '10.75%'
    }
   if (exp === 2044) {
      expOne.style.width = '11%'
    }
   if (exp === 2045) {
      expOne.style.width = '11.25%'
    }
   if (exp === 2046) {
      expOne.style.width = '11.5%'
    }
   if (exp === 2047) {
      expOne.style.width = '11.75%'
    }
   if (exp === 2048) {
      expOne.style.width = '12%'
    }
   if (exp === 2049) {
      expOne.style.width = '12.25%'
    }
   if (exp === 2050) {
      expOne.style.width = '12.5%'
    }
   if (exp === 2051) {
      expOne.style.width = '12.75%'
    }
   if (exp === 2052) {
      expOne.style.width = '13%'
    }
   if (exp === 2053) {
      expOne.style.width = '13.25%'
    }
   if (exp === 2054) {
      expOne.style.width = '13.5%'
    }
   if (exp === 2055) {
      expOne.style.width = '13.75%'
    }
    if (exp === 2056) {
      expOne.style.width = '14%'
    }
    if (exp === 2057) {
      expOne.style.width = '14.25%'
    }
    if (exp === 2058) {
      expOne.style.width = '14.5%'
    }
    if (exp === 2059) {
      expOne.style.width = '14.75%'
    }
    if (exp === 2060) {
      expOne.style.width = '15%'
    }
    if (exp === 2061) {
      expOne.style.width = '15.25%'
    }
    if (exp === 2062) {
      expOne.style.width = '15.5%'
    }
    if (exp === 2063) {
      expOne.style.width = '15.75%'
    }
    if (exp === 2064) {
      expOne.style.width = '16%'
    }
    if (exp === 2065) {
      expOne.style.width = '16.25%'
    }
    if (exp === 2066) {
      expOne.style.width = '16.5%'
    }
    if (exp === 2067) {
      expOne.style.width = '16.75%'
    }
    if (exp === 2068) {
      expOne.style.width = '17%'
    }
    if (exp === 2069) {
      expOne.style.width = '17.25%'
    }
    if (exp === 2070) {
      expOne.style.width = '17.5%'
    }
    if (exp === 2071) {
      expOne.style.width = '17.75%'
    }
    if (exp === 2072) {
      expOne.style.width = '18%'
    }
    if (exp === 2073) {
      expOne.style.width = '18.25%'
    }
    if (exp === 2074) {
      expOne.style.width = '18.5%'
    }
    if (exp === 2075) {
      expOne.style.width = '18.75%'
    }
    if (exp === 2076) {
      expOne.style.width = '19%'
    }
    if (exp === 2077) {
      expOne.style.width = '19.25%'
    }
    if (exp === 2078) {
      expOne.style.width = '19.5%'
    }
    if (exp === 2079) {
      expOne.style.width = '19.75%'
    }
    if (exp === 2080) {
      expOne.style.width = '20%'
    }
    if (exp === 2081) {
      expOne.style.width = '20.25%'
    }
    if (exp === 2082) {
      expOne.style.width = '20.5%'
    }
    if (exp === 2083) {
      expOne.style.width = '20.75%'
    }
    if (exp === 2084) {
      expOne.style.width = '21%'
    }
    if (exp === 2085) {
      expOne.style.width = '21.25%'
    }
    if (exp === 2086) {
      expOne.style.width = '21.5%'
    }
    if (exp === 2087) {
      expOne.style.width = '21.75%'
    }
    if (exp === 2088) {
      expOne.style.width = '22%'
    }
    if (exp === 2089) {
      expOne.style.width = '22.25%'
    }
    if (exp === 2090) {
      expOne.style.width = '22.5%'
    }
    if (exp === 2091) {
      expOne.style.width = '22.75%'
    }
    if (exp === 2092) {
      expOne.style.width = '23%'
    }
    if (exp === 2093) {
      expOne.style.width = '23.25%'
    }
    if (exp === 2094) {
      expOne.style.width = '23.5%'
    }
    if (exp === 2095) {
      expOne.style.width = '23.75%'
    }
    if (exp === 2096) {
      expOne.style.width = '24%'
    }
    if (exp === 2097) {
      expOne.style.width = '24.25%'
    }
    if (exp === 2098) {
      expOne.style.width = '24.5%'
    }
    if (exp === 2099) {
      expOne.style.width = '24.75%'
    }
    if (exp === 2100) {
      expOne.style.width = '25%'
    }
   if (exp === 2101) {
      expOne.style.width = '25.25%'
    }
   if (exp === 2102) {
      expOne.style.width = '25.5%'
    }
   if (exp === 2103) {
      expOne.style.width = '25.75%'
    }
   if (exp === 2104) {
      expOne.style.width = '26%'
    }
   if (exp === 2105) {
      expOne.style.width = '26.25%'
    }
   if (exp === 2106) {
      expOne.style.width = '26.5%'
    }
   if (exp === 2107) {
      expOne.style.width = '26.75%'
   }
   if (exp === 2108) {
      expOne.style.width = '27%'
    } 
   if (exp === 2109) {
      expOne.style.width = '27.25%'
    } 
   if (exp === 2110) {
      expOne.style.width = '27.5%'
    } 
   if (exp === 2111) {
      expOne.style.width = '27.75%'
    } 
   if (exp === 2112) {
      expOne.style.width = '28%'
    } 
   if (exp === 2113) {
      expOne.style.width = '28.25%'
    } 
   if (exp === 2114) {
      expOne.style.width = '28.5%'
    } 
   if (exp === 2115) {
      expOne.style.width = '28.75%'
    } 
   if (exp === 2116) {
      expOne.style.width = '29%'
    } 
   if (exp === 2117) {
      expOne.style.width = '29.25%'
    } 
   if (exp === 2118) {
      expOne.style.width = '29.5%'
    } 
   if (exp === 2119) {
      expOne.style.width = '29.75%'
    }
   if (exp === 2120) {
      expOne.style.width = '30%'
    }
   if (exp === 2121) {
     expOne.style.width = '30.25%'
    }
   if (exp === 2122) {
     expOne.style.width = '30.5%'
    }
   if (exp === 2123) {
     expOne.style.width = '30.75%'
    }
   if (exp === 2124) {
     expOne.style.width = '31%'
    }
   if (exp === 2125) {
     expOne.style.width = '31.25%'
    }
   if (exp === 2126) {
     expOne.style.width = '31.5%'
    }
   if (exp === 2127) {
     expOne.style.width = '31.75%'
   }
   if (exp === 2128) {
     expOne.style.width = '32%'
    } 
   if (exp === 2129) {
     expOne.style.width = '32.25%'
    } 
   if (exp === 2130) {
     expOne.style.width = '32.5%'
    } 
   if (exp === 2131) {
     expOne.style.width = '32.75%'
    } 
   if (exp === 2132) {
     expOne.style.width = '33%'
    } 
   if (exp === 2133) {
      expOne.style.width = '33.25%'
    } 
   if (exp === 2134) {
      expOne.style.width = '33.5%'
    } 
   if (exp === 2135) {
      expOne.style.width = '33.75%'
    } 
   if (exp === 2136) {
      expOne.style.width = '34%'
    } 
   if (exp === 2137) {
      expOne.style.width = '34.25%'
    } 
   if (exp === 2138) {
      expOne.style.width = '34.5%'
    } 
   if (exp === 2139) {
      expOne.style.width = '34.75%'
    }
   if (exp === 2140) {
      expOne.style.width = '35%'
    }
   if (exp === 2141) {
      expOne.style.width = '35.25%'
    }
   if (exp === 2142) {
      expOne.style.width = '35.5%'
    }
   if (exp === 2143) {
      expOne.style.width = '35.75%'
    }
   if (exp === 2144) {
      expOne.style.width = '36%'
    }
   if (exp === 2145) {
      expOne.style.width = '36.25%'
    }
   if (exp === 2146) {
      expOne.style.width = '36.5%'
    }
   if (exp === 2147) {
      expOne.style.width = '36.75%'
    }
   if (exp === 2148) {
      expOne.style.width = '37%'
    }
   if (exp === 2149) {
      expOne.style.width = '37.25%'
    }
   if (exp === 2150) {
      expOne.style.width = '37.5%'
    }
   if (exp === 2151) {
      expOne.style.width = '37.75%'
    }
   if (exp === 2152) {
      expOne.style.width = '38%'
    }
   if (exp === 2153) {
      expOne.style.width = '38.25%'
    }
   if (exp === 2154) {
      expOne.style.width = '38.5%'
    }
   if (exp === 2155) {
      expOne.style.width = '38.75%'
    }
    if (exp === 2156) {
      expOne.style.width = '39%'
    }
    if (exp === 2157) {
      expOne.style.width = '39.25%'
    }
    if (exp === 2158) {
      expOne.style.width = '39.5%'
    }
    if (exp === 2159) {
      expOne.style.width = '39.75%'
    }
    if (exp === 2160) {
      expOne.style.width = '40%'
    } 
    if (exp === 2161) {
      expFour.style.width = '40.25%'
    }
    if (exp === 2162) {
      expOne.style.width = '40.5%'
    }
    if (exp === 2163) {
      expOne.style.width = '40.75%'
    }
    if (exp === 2164) {
      expOne.style.width = '41%'
    }
    if (exp === 2165) {
      expOne.style.width = '41.25%'
    }
    if (exp === 2166) {
      expOne.style.width = '41.5%'
    }
    if (exp === 2167) {
      expOne.style.width = '41.75%'
    }
    if (exp === 2168) {
      expOne.style.width = '42%'
    }
    if (exp === 2169) {
      expOne.style.width = '42.25%'
    }
    if (exp === 2170) {
      expOne.style.width = '42.5%'
    }
    if (exp === 2171) {
      expOne.style.width = '42.75%'
    }
    if (exp === 2172) {
      expOne.style.width = '43%'
    }
    if (exp === 2173) {
      expOne.style.width = '43.25%'
    }
    if (exp === 2174) {
      expOne.style.width = '43.5%'
    }
    if (exp === 2175) {
      expOne.style.width = '43.75%'
    }
    if (exp === 2176) {
      expOne.style.width = '44%'
    }
    if (exp === 2177) {
      expOne.style.width = '44.25%'
    }
    if (exp === 2178) {
      expOne.style.width = '44.5%'
    }
    if (exp === 2179) {
      expOne.style.width = '44.75%'
    }
    if (exp === 2180) {
      expOne.style.width = '45%'
    }
    if (exp === 2181) {
      expOne.style.width = '45.25%'
    }
    if (exp === 2182) {
      expOne.style.width = '45.5%'
    }
    if (exp === 2183) {
      expOne.style.width = '45.75%'
    }
    if (exp === 2184) {
      expOne.style.width = '46%'
    }
    if (exp === 2185) {
      expOne.style.width = '46.25%'
    }
    if (exp === 2186) {
      expOne.style.width = '46.5%'
    }
    if (exp === 2187) {
      expOne.style.width = '46.75%'
    }
    if (exp === 2188) {
      expOne.style.width = '47%'
    }
    if (exp === 2189) {
      expOne.style.width = '47.25%'
    }
    if (exp === 2190) {
      expOne.style.width = '47.5%'
    }
    if (exp === 2191) {
      expOne.style.width = '47.75%'
    }
    if (exp === 2192) {
      expOne.style.width = '48%'
    }
    if (exp === 2193) {
      expOne.style.width = '48.25%'
    }
    if (exp === 2194) {
      expOne.style.width = '48.5%'
    }
    if (exp === 2195) {
      expOne.style.width = '48.75%'
    }
    if (exp === 2196) {
      expOne.style.width = '49%'
    }
    if (exp === 2197) {
      expOne.style.width = '49.25%'
    }
    if (exp === 2198) {
      expOne.style.width = '49.5%'
    }
    if (exp === 2199) {
      expOne.style.width = '49.75%'
    }
    if (exp === 2200) {
      expOne.style.width = '50%'
    }
    if (exp === 2201) {
      expOne.style.width = '50.25%'
    }
    if (exp === 2202) {
      expOne.style.width = '50.5%'
    }
    if (exp === 2203) {
      expOne.style.width = '50.75%'
    }
    if (exp === 2204) {
      expOne.style.width = '51%'
    }
    if (exp === 2205) {
      expOne.style.width = '51.25%'
    }
    if (exp === 2206) {
      expOne.style.width = '51.5%'
    }
    if (exp === 2207) {
      expOne.style.width = '51.75%'
    }
    if (exp === 2208) {
      expOne.style.width = '52%'
    }
    if (exp === 2209) {
      expOne.style.width = '52.25%'
    }
    if (exp === 2210) {
      expOne.style.width = '52.5%'
    }
    if (exp === 2211) {
      expOne.style.width = '52.75%'
    }
    if (exp === 2212) {
      expOne.style.width = '53%'
    }
    if (exp === 2213) {
      expOne.style.width = '53.25%'
    }
    if (exp === 2214) {
      expOne.style.width = '53.5%'
    }
    if (exp === 2215) {
      expOne.style.width = '53.75%'
    }
    if (exp === 2216) {
      expOne.style.width = '54%'
    }
    if (exp === 2217) {
      expOne.style.width = '54.25%'
    }
    if (exp === 2218) {
      expOne.style.width = '54.5%'
    }
    if (exp === 2219) {
      expOne.style.width = '54.75%'
    }
    if (exp === 2220) {
      expOne.style.width = '55%'
    }
    if (exp === 2221) {
      expOne.style.width = '55.25%'
    }
    if (exp === 2222) {
      expOne.style.width = '55.5%'
    }
    if (exp === 2223) {
      expOne.style.width = '55.75%'
    }
    if (exp === 2224) {
      expOne.style.width = '56%'
    }
    if (exp === 2225) {
      expOne.style.width = '56.25%'
    }
    if (exp === 2226) {
      expOne.style.width = '56.5%'
    }
    if (exp === 2227) {
      expOne.style.width = '56.75%'
    }
    if (exp === 2228) {
      expOne.style.width = '57%'
    }
    if (exp === 2229) {
      expOne.style.width = '57.25%'
    }
    if (exp === 2230) {
      expOne.style.width = '57.5%'
    }
    if (exp === 2231) {
      expOne.style.width = '57.75%'
    }
    if (exp === 2232) {
      expOne.style.width = '58%'
    }
    if (exp === 2233) {
      expOne.style.width = '58.25%'
    }
    if (exp === 2234) {
      expOne.style.width = '58.5%'
    }
    if (exp === 2235) {
      expOne.style.width = '58.75%'
    }
    if (exp === 2236) {
      expOne.style.width = '59%'
    }
    if (exp === 2237) {
      expOne.style.width = '59.25%'
    }
    if (exp === 2238) {
      expOne.style.width = '59.5%'
    }
    if (exp === 2239) {
      expOne.style.width = '59.75%'
    }
    if (exp === 2240) {
      expOne.style.width = '60%'
    }
    if (exp === 2241) {
      expOne.style.width = '60.25%'
    }
    if (exp === 2242) {
      expOne.style.width = '60.5%'
    }
    if (exp === 2243) {
      expOne.style.width = '60.75%'
    }
    if (exp === 2244) {
      expOne.style.width = '61%'
    }
    if (exp === 2245) {
      expOne.style.width = '61.25%'
    }
    if (exp === 2246) {
      expOne.style.width = '61.5%'
    }
    if (exp === 2247) {
      expOne.style.width = '61.75%'
    }
    if (exp === 2248) {
      expOne.style.width = '62%'
    }
    if (exp === 2249) {
      expOne.style.width = '62.25%'
    }
    if (exp === 2250) {
      expOne.style.width = '62.5%'
    }
    if (exp === 2251) {
      expOne.style.width = '62.75%'
    }
    if (exp === 2252) {
      expOne.style.width = '63%'
    }
    if (exp === 2253) {
      expOne.style.width = '63.25%'
    }
    if (exp === 2254) {
      expOne.style.width = '63.5%'
    }
    if (exp === 2255) {
      expOne.style.width = '63.75%'
    }
    if (exp === 2256) {
      expOne.style.width = '64%'
    }
    if (exp === 2257) {
      expOne.style.width = '64.25%'
    }
    if (exp === 2258) {
      expOne.style.width = '64.5%'
    }
    if (exp === 2259) {
      expOne.style.width = '64.75%'
    }
    if (exp === 2260) {
      expOne.style.width = '65%'
    }
    if (exp === 2261) {
      expOne.style.width = '65.25%'
    }
    if (exp === 2262) {
      expOne.style.width = '65.5%'
    }
    if (exp === 2263) {
      expOne.style.width = '65.75%'
    }
    if (exp === 2264) {
      expOne.style.width = '66%'
    }
    if (exp === 2265) {
      expOne.style.width = '66.25%'
    }
    if (exp === 2266) {
      expOne.style.width = '66.5%'
    }
    if (exp === 2267) {
      expOne.style.width = '66.75%'
    }
    if (exp === 2268) {
      expOne.style.width = '67%'
    }
    if (exp === 2269) {
      expOne.style.width = '67.25%'
    }
    if (exp === 2270) {
      expOne.style.width = '67.5%'
    }
    if (exp === 2271) {
      expOne.style.width = '67.75%'
    }
    if (exp === 2272) {
      expOne.style.width = '68%'
    }
    if (exp === 2273) {
      expOne.style.width = '68.25%'
    }
    if (exp === 2274) {
      expOne.style.width = '68.5%'
    }
    if (exp === 2275) {
      expOne.style.width = '68.75%'
    }
    if (exp === 2276) {
      expOne.style.width = '69%'
    }
    if (exp === 2277) {
      expOne.style.width = '69.25%'
    }
    if (exp === 2278) {
      expOne.style.width = '69.5%'
    }
    if (exp === 2279) {
      expOne.style.width = '69.75%'
    }
    if (exp === 2280) {
      expOne.style.width = '70%'
    }
    if (exp === 2281) {
      expOne.style.width = '70.25%'
    }
    if (exp === 2282) {
      expOne.style.width = '70.5%'
    }
    if (exp === 2283) {
      expOne.style.width = '70.75%'
    }
    if (exp === 2284) {
      expOne.style.width = '71%'
    }
    if (exp === 2285) {
      expOne.style.width = '71.25%'
    }
    if (exp === 2286) {
      expOne.style.width = '71.5%'
    }
    if (exp === 2287) {
      expOne.style.width = '71.75%'
    }
    if (exp === 2288) {
      expOne.style.width = '72%'
    }
    if (exp === 2289) {
      expOne.style.width = '72.25%'
    }
    if (exp === 2290) {
      expOne.style.width = '72.5%'
    }
    if (exp === 2291) {
      expOne.style.width = '72.75%'
    }
    if (exp === 2292) {
      expOne.style.width = '73%'
    }
    if (exp === 2293) {
      expOne.style.width = '73.25%'
    }
    if (exp === 2294) {
      expOne.style.width = '73.5%'
    }
    if (exp === 2295) {
      expOne.style.width = '73.75%'
    }
    if (exp === 2296) {
      expOne.style.width = '74%'
    }
    if (exp === 2297) {
      expOne.style.width = '74.25%'
    }
    if (exp === 2298) {
      expOne.style.width = '74.5%'
    }
    if (exp === 2299) {
      expOne.style.width = '74.75%'
    }
    if (exp === 2300) {
      expOne.style.width = '75%'
    }
    if (exp === 2301) {
      expOne.style.width = '75.25%'
    }
    if (exp === 2302) {
      expOne.style.width = '75.5%'
    }
    if (exp === 2303) {
      expOne.style.width = '75.75%'
    }
    if (exp === 2304) {
      expOne.style.width = '76%'
    }
    if (exp === 2305) {
      expOne.style.width = '76.25%'
    }
    if (exp === 2306) {
      expOne.style.width = '76.5%'
    }
    if (exp === 2307) {
      expOne.style.width = '76.75%'
    }
    if (exp === 2308) {
      expOne.style.width = '77%'
    }
    if (exp === 2309) {
      expOne.style.width = '77.25%'
    }
    if (exp === 2310) {
      expOne.style.width = '77.5%'
    }
    if (exp === 2311) {
      expOne.style.width = '77.75%'
    }
    if (exp === 2312) {
      expOne.style.width = '78%'
    }
    if (exp === 2313) {
      expOne.style.width = '78.25%'
    }
    if (exp === 2314) {
      expOne.style.width = '78.5%'
    }
    if (exp === 2315) {
      expOne.style.width = '78.75%'
    }
    if (exp === 2316) {
      expOne.style.width = '79%'
    }
    if (exp === 2317) {
      expOne.style.width = '79.25%'
    }
    if (exp === 2318) {
      expOne.style.width = '79.5%'
    }
    if (exp === 2319) {
      expOne.style.width = '79.75%'
    }
    if (exp === 2320) {
      expOne.style.width = '80%'
    }
    if (exp === 2321) {
      expOne.style.width = '80.25%'
    }
    if (exp === 2322) {
      expOne.style.width = '80.5%'
    }
    if (exp === 2323) {
      expOne.style.width = '80.75%'
    }
    if (exp === 2324) {
      expOne.style.width = '81%'
    }
    if (exp === 2325) {
      expOne.style.width = '81.25%'
    }
    if (exp === 2326) {
      expOne.style.width = '81.5%'
    }
    if (exp === 2327) {
      expOne.style.width = '81.75%'
    }
    if (exp === 2328) {
      expOne.style.width = '82%'
    }
    if (exp === 2329) {
      expOne.style.width = '82.25%'
    }
    if (exp === 2330) {
      expOne.style.width = '82.5%'
    }
    if (exp === 2331) {
      expOne.style.width = '82.75%'
    }
    if (exp === 2332) {
      expOne.style.width = '83%'
    }
    if (exp === 2333) {
      expOne.style.width = '83.25%'
    }
    if (exp === 2334) {
      expOne.style.width = '83.5%'
    }
    if (exp === 2335) {
      expOne.style.width = '83.75%'
    }
    if (exp === 2336) {
      expOne.style.width = '84%'
    }
    if (exp === 2337) {
      expOne.style.width = '84.25%'
    }
    if (exp === 2338) {
      expOne.style.width = '84.5%'
    }
    if (exp === 2339) {
      expOne.style.width = '84.75%'
    }
    if (exp === 2340) {
      expOne.style.width = '85%'
    }
    if (exp === 2341) {
      expOne.style.width = '85.25%'
    }
    if (exp === 2342) {
      expOne.style.width = '85.5%'
    }
    if (exp === 2343) {
      expOne.style.width = '85.75%'
    }
    if (exp === 2344) {
      expOne.style.width = '86%'
    }
    if (exp === 2345) {
      expOne.style.width = '86.25%'
    }
    if (exp === 2346) {
      expOne.style.width = '86.5%'
    }
    if (exp === 2347) {
      expOne.style.width = '86.75%'
    }
    if (exp === 2348) {
      expOne.style.width = '87%'
    }
    if (exp === 2349) {
      expOne.style.width = '87.25%'
    }
    if (exp === 2350) {
      expOne.style.width = '87.5%'
    }
    if (exp === 2351) {
      expOne.style.width = '87.75%'
    }
    if (exp === 2352) {
      expOne.style.width = '88%'
    }
    if (exp === 2353) {
      expOne.style.width = '88.25%'
    }
    if (exp === 2354) {
      expOne.style.width = '88.5%'
    }
    if (exp === 2355) {
      expOne.style.width = '88.75%'
    }
    if (exp === 2356) {
      expOne.style.width = '89%'
    }
    if (exp === 2357) {
      expOne.style.width = '89.25%'
    }
    if (exp === 2358) {
      expOne.style.width = '89.5%'
    }
    if (exp === 2359) {
      expOne.style.width = '89.75%'
    }
    if (exp === 2360) {
      expOne.style.width = '90%'
    }
    if (exp === 2361) {
      expOne.style.width = '90.25%'
    }
    if (exp === 2362) {
      expOne.style.width = '90.5%'
    }
    if (exp === 2363) {
      expOne.style.width = '90.75%'
    }
    if (exp === 2364) {
      expOne.style.width = '91%'
    }
    if (exp === 2365) {
      expOne.style.width = '91.25%'
    }
    if (exp === 2366) {
      expOne.style.width = '91.5%'
    }
    if (exp === 2367) {
      expOne.style.width = '91.75%'
    }
    if (exp === 2368) {
      expOne.style.width = '92%'
    }
    if (exp === 2369) {
      expOne.style.width = '92.25%'
    }
    if (exp === 2370) {
      expOne.style.width = '92.5%'
    }
    if (exp === 2371) {
      expOne.style.width = '92.75%'
    }
    if (exp === 2372) {
      expOne.style.width = '93%'
    }
    if (exp === 2373) {
      expOne.style.width = '93.25%'
    }
    if (exp === 2374) {
      expOne.style.width = '93.5%'
    }
    if (exp === 2375) {
      expOne.style.width = '93.75%'
    }
    if (exp === 2376) {
      expOne.style.width = '94%'
    }
    if (exp === 2377) {
      expOne.style.width = '94.25%'
    }
    if (exp === 2378) {
      expOne.style.width = '94.5%'
    }
    if (exp === 2379) {
      expOne.style.width = '94.75%'
    }
    if (exp === 2380) {
      expOne.style.width = '95%'
    }
    if (exp === 2381) {
      expOne.style.width = '95.25%'
    }
    if (exp === 2382) {
      expOne.style.width = '95.5%'
    }
    if (exp === 2383) {
      expOne.style.width = '95.75%'
    }
    if (exp === 2384) {
      expOne.style.width = '96%'
    }
    if (exp === 2385) {
      expOne.style.width = '96.25%'
    }
    if (exp === 2386) {
      expOne.style.width = '96.5%'
    }
    if (exp === 2387) {
      expOne.style.width = '96.75%'
    }
    if (exp === 2388) {
      expOne.style.width = '97%'
    }
    if (exp === 2389) {
      expOne.style.width = '97.25%'
    }
    if (exp === 2390) {
      expOne.style.width = '97.5%'
    }
    if (exp === 2391) {
      expOne.style.width = '97.75%'
    }
    if (exp === 2392) {
      expOne.style.width = '98%'
    }
    if (exp === 2393) {
      expOne.style.width = '98.25%'
    }
    if (exp === 2394) {
      expOne.style.width = '98.5%'
    }
    if (exp === 2395) {
      expOne.style.width = '98.75%'
    }
    if (exp === 2396) {
      expOne.style.width = '99%'
    }
    if (exp === 2397) {
      expOne.style.width = '99.25%'
    }
    if (exp === 2398) {
      expOne.style.width = '99.5%'
    }
    if (exp === 2399) {
      expOne.style.width = '99.75%'
    }
    if (exp === 2400) {
      expOne.style.width = '100%'
    }
  }
  
    if (exp >= 2401 && exp <= 2800) 
    {
      expOne.style.width = '100%'
      
      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 2401) {
      expTwo.style.width = '0.25%'
    }
   if (exp === 2402) {
      expTwo.style.width = '0.5%'
    }
   if (exp === 2403) {
      expTwo.style.width = '0.75%'
    }
   if (exp === 2404) {
      expTwo.style.width = '1%'
    }
   if (exp === 2405) {
      expTwo.style.width = '1.25%'
    }
   if (exp === 2406) {
      expTwo.style.width = '1.5%'
    }
   if (exp === 2407) {
      expTwo.style.width = '1.75%'
   }
   if (exp === 2408) {
      expTwo.style.width = '2%'
    } 
   if (exp === 2409) {
      expTwo.style.width = '2.25%'
    } 
   if (exp === 2410) {
      expTwo.style.width = '2.5%'
    } 
   if (exp === 2411) {
      expTwo.style.width = '2.75%'
    } 
   if (exp === 2412) {
      expTwo.style.width = '3%'
    } 
   if (exp === 2413) {
      expTwo.style.width = '3.25%'
    } 
   if (exp === 2414) {
      expTwo.style.width = '3.5%'
    } 
   if (exp === 2415) {
      expTwo.style.width = '3.75%'
    } 
   if (exp === 2416) {
      expTwo.style.width = '4%'
    } 
   if (exp === 2417) {
      expTwo.style.width = '4.25%'
    } 
   if (exp === 2418) {
      expTwo.style.width = '4.5%'
    } 
   if (exp === 2419) {
      expTwo.style.width = '4.75%'
    }
   if (exp === 2420) {
      expTwo.style.width = '5%'
    }
   if (exp === 2421) {
     expTwo.style.width = '5.25%'
    }
   if (exp === 2422) {
     expTwo.style.width = '5.5%'
    }
   if (exp === 2423) {
     expTwo.style.width = '5.75%'
    }
   if (exp === 2424) {
     expTwo.style.width = '6%'
    }
   if (exp === 2425) {
     expTwo.style.width = '6.25%'
    }
   if (exp === 2426) {
     expTwo.style.width = '6.5%'
    }
   if (exp === 2427) {
     expTwo.style.width = '6.75%'
   }
   if (exp === 2428) {
     expTwo.style.width = '7%'
    } 
   if (exp === 2429) {
     expTwo.style.width = '7.25%'
    } 
   if (exp === 2430) {
     expTwo.style.width = '7.5%'
    } 
   if (exp === 2431) {
     expTwo.style.width = '7.75%'
    } 
   if (exp === 2432) {
     expTwo.style.width = '8%'
    } 
   if (exp === 2433) {
      expTwo.style.width = '8.25%'
    } 
   if (exp === 2434) {
      expTwo.style.width = '8.5%'
    } 
   if (exp === 2435) {
      expTwo.style.width = '8.75%'
    } 
   if (exp === 2436) {
      expTwo.style.width = '9%'
    } 
   if (exp === 2437) {
      expTwo.style.width = '9.25%'
    } 
   if (exp === 2438) {
      expTwo.style.width = '9.5%'
    } 
   if (exp === 2439) {
      expTwo.style.width = '9.75%'
    }
   if (exp === 2440) {
    expTwo.style.width = '10%'
  }
  if (exp === 2441) {
    expTwo.style.width = '10.25%'
    }
   if (exp === 2442) {
      expTwo.style.width = '10.5%'
    }
   if (exp === 2443) {
      expTwo.style.width = '10.75%'
    }
   if (exp === 2444) {
      expTwo.style.width = '11%'
    }
   if (exp === 2445) {
      expTwo.style.width = '11.25%'
    }
   if (exp === 2446) {
      expTwo.style.width = '11.5%'
    }
   if (exp === 2447) {
      expTwo.style.width = '11.75%'
    }
   if (exp === 2448) {
      expTwo.style.width = '12%'
    }
   if (exp === 2449) {
      expTwo.style.width = '12.25%'
    }
   if (exp === 2450) {
      expTwo.style.width = '12.5%'
    }
   if (exp === 2451) {
      expTwo.style.width = '12.75%'
    }
   if (exp === 2452) {
      expTwo.style.width = '13%'
    }
   if (exp === 2453) {
      expTwo.style.width = '13.25%'
    }
   if (exp === 2454) {
      expTwo.style.width = '13.5%'
    }
   if (exp === 2455) {
      expTwo.style.width = '13.75%'
    }
    if (exp === 2456) {
      expTwo.style.width = '14%'
    }
    if (exp === 2457) {
      expTwo.style.width = '14.25%'
    }
    if (exp === 2458) {
      expTwo.style.width = '14.5%'
    }
    if (exp === 2459) {
      expTwo.style.width = '14.75%'
    }
    if (exp === 2460) {
      expTwo.style.width = '15%'
    }
    if (exp === 2461) {
      expTwo.style.width = '15.25%'
    }
    if (exp === 2462) {
      expTwo.style.width = '15.5%'
    }
    if (exp === 2463) {
      expTwo.style.width = '15.75%'
    }
    if (exp === 2464) {
      expTwo.style.width = '16%'
    }
    if (exp === 2465) {
      expTwo.style.width = '16.25%'
    }
    if (exp === 2466) {
      expTwo.style.width = '16.5%'
    }
    if (exp === 2467) {
      expTwo.style.width = '16.75%'
    }
    if (exp === 2468) {
      expTwo.style.width = '17%'
    }
    if (exp === 2469) {
      expTwo.style.width = '17.25%'
    }
    if (exp === 2470) {
      expTwo.style.width = '17.5%'
    }
    if (exp === 2471) {
      expTwo.style.width = '17.75%'
    }
    if (exp === 2472) {
      expTwo.style.width = '18%'
    }
    if (exp === 2473) {
      expTwo.style.width = '18.25%'
    }
    if (exp === 2474) {
      expTwo.style.width = '18.5%'
    }
    if (exp === 2475) {
      expTwo.style.width = '18.75%'
    }
    if (exp === 2476) {
      expTwo.style.width = '19%'
    }
    if (exp === 2477) {
      expTwo.style.width = '19.25%'
    }
    if (exp === 2478) {
      expTwo.style.width = '19.5%'
    }
    if (exp === 2479) {
      expTwo.style.width = '19.75%'
    }
    if (exp === 2480) {
      expTwo.style.width = '20%'
    }
    if (exp === 2481) {
      expTwo.style.width = '20.25%'
    }
    if (exp === 2482) {
      expTwo.style.width = '20.5%'
    }
    if (exp === 2483) {
      expTwo.style.width = '20.75%'
    }
    if (exp === 2484) {
      expTwo.style.width = '21%'
    }
    if (exp === 2485) {
      expTwo.style.width = '21.25%'
    }
    if (exp === 2486) {
      expTwo.style.width = '21.5%'
    }
    if (exp === 2487) {
      expTwo.style.width = '21.75%'
    }
    if (exp === 2488) {
      expTwo.style.width = '22%'
    }
    if (exp === 2489) {
      expTwo.style.wiTwo = '22.25%'
    }
    if (exp === 2490) {
      expTwo.style.width = '22.5%'
    }
    if (exp === 2491) {
      expTwo.style.width = '22.75%'
    }
    if (exp === 2492) {
      expTwo.style.width = '23%'
    }
    if (exp === 2493) {
      expTwo.style.width = '23.25%'
    }
    if (exp === 2494) {
      expTwo.style.width = '23.5%'
    }
    if (exp === 2495) {
      expTwo.style.width = '23.75%'
    }
    if (exp === 2496) {
      expTwo.style.width = '24%'
    }
    if (exp === 2497) {
      expTwo.style.width = '24.25%'
    }
    if (exp === 2498) {
      expTwo.style.width = '24.5%'
    }
    if (exp === 2499) {
      expTwo.style.width = '24.75%'
    }
    if (exp === 2500) {
      expTwo.style.width = '25%'
    }
   if (exp === 2501) {
      expTwo.style.width = '25.25%'
    }
   if (exp === 2502) {
      expTwo.style.width = '25.5%'
    }
   if (exp === 2503) {
      expTwo.style.width = '25.75%'
    }
   if (exp === 2504) {
      expTwo.style.width = '26%'
    }
   if (exp === 2505) {
      expTwo.style.width = '26.25%'
    }
   if (exp === 2506) {
      expTwo.style.width = '26.5%'
    }
   if (exp === 2507) {
      expTwo.style.width = '26.75%'
   }
   if (exp === 2508) {
      expTwo.style.width = '27%'
    } 
   if (exp === 2509) {
      expTwo.style.width = '27.25%'
    } 
   if (exp === 2510) {
      expTwo.style.width = '27.5%'
    } 
   if (exp === 2511) {
      expTwo.style.width = '27.75%'
    } 
    if (exp === 2512) {
    expTwo.style.width = '28%'
  } 
  if (exp === 2513) {
    expTwo.style.width = '28.25%'
  } 
  if (exp === 2514) {
    expTwo.style.width = '28.5%'
  } 
  if (exp === 2515) {
    expTwo.style.width = '28.75%'
  } 
  if (exp === 2516) {
    expTwo.style.width = '29%'
  } 
  if (exp === 2517) {
    expTwo.style.width = '29.25%'
  } 
  if (exp === 2518) {
    expTwo.style.width = '29.5%'
  } 
  if (exp === 2519) {
    expTwo.style.width = '29.75%'
  }
  if (exp === 2520) {
    expTwo.style.width = '30%'
  }
  if (exp === 2521) {
    expTwo.style.width = '30.25%'
  }
  if (exp === 2522) {
    expTwo.style.width = '30.5%'
  }
  if (exp === 2523) {
    expTwo.style.width = '30.75%'
  }
  if (exp === 2524) {
    expTwo.style.width = '31%'
  }
  if (exp === 2525) {
    expTwo.style.width = '31.25%'
  }
   if (exp === 2126) {
     expTwo.style.width = '31.5%'
    }
   if (exp === 2127) {
     expTwo.style.width = '31.75%'
   }
   if (exp === 2528) {
     expTwo.style.width = '32%'
    } 
   if (exp === 2529) {
     expTwo.style.width = '32.25%'
    } 
   if (exp === 2530) {
     expTwo.style.width = '32.5%'
    } 
   if (exp === 2531) {
     expTwo.style.width = '32.75%'
    } 
   if (exp === 2532) {
     expTwo.style.width = '33%'
    } 
   if (exp === 2533) {
      expTwo.style.width = '33.25%'
    } 
   if (exp === 2534) {
      expTwo.style.width = '33.5%'
    } 
   if (exp === 2535) {
      expTwo.style.width = '33.75%'
    } 
   if (exp === 2536) {
      expTwo.style.width = '34%'
    } 
   if (exp === 2537) {
      expTwo.style.width = '34.25%'
    } 
   if (exp === 2538) {
      expTwo.style.width = '34.5%'
    } 
   if (exp === 2539) {
      expTwo.style.width = '34.75%'
    }
   if (exp === 2540) {
      expTwo.style.width = '35%'
    }
   if (exp === 2541) {
      expTwo.style.width = '35.25%'
    }
   if (exp === 2542) {
      expTwo.style.width = '35.5%'
    }
   if (exp === 2543) {
      expTwo.style.width = '35.75%'
    }
   if (exp === 2544) {
      expTwo.style.width = '36%'
    }
   if (exp === 2545) {
      expTwo.style.width = '36.25%'
    }
   if (exp === 2546) {
      expTwo.style.width = '36.5%'
    }
   if (exp === 2547) {
      expTwo.style.width = '36.75%'
    }
   if (exp === 2548) {
      expTwo.style.width = '37%'
    }
   if (exp === 2549) {
      expTwo.style.width = '37.25%'
    }
   if (exp === 2550) {
      expTwo.style.width = '37.5%'
    }
   if (exp === 2551) {
      expTwo.style.width = '37.75%'
    }
   if (exp === 2552) {
      expTwo.style.width = '38%'
    }
   if (exp === 2553) {
      expTwo.style.width = '38.25%'
    }
   if (exp === 2554) {
      expTwo.style.width = '38.5%'
    }
   if (exp === 2155) {
      expTwo.style.width = '38.75%'
    }
    if (exp === 2556) {
      expTwo.style.width = '39%'
    }
    if (exp === 2557) {
      expTwo.style.width = '39.25%'
    }
    if (exp === 2558) {
      expTwo.style.width = '39.5%'
    }
    if (exp === 2559) {
      expTwo.style.width = '39.75%'
    }
    if (exp === 2560) {
      expTwo.style.width = '40%'
    } 
    if (exp === 2561) {
      expTwo.style.width = '40.25%'
    }
    if (exp === 2562) {
      expTwo.style.width = '40.5%'
    }
    if (exp === 2563) {
      expTwo.style.width = '40.75%'
    }
    if (exp === 2564) {
      expTwo.style.width = '41%'
    }
    if (exp === 2565) {
      expTwo.style.width = '41.25%'
    }
    if (exp === 2566) {
      expTwo.style.width = '41.5%'
    }
    if (exp === 2567) {
      expTwo.style.width = '41.75%'
    }
    if (exp === 2568) {
      expTwo.style.width = '42%'
    }
    if (exp === 2569) {
      expTwo.style.width = '42.25%'
    }
    if (exp === 2570) {
      expTwo.style.width = '42.5%'
    }
    if (exp === 2571) {
      expTwo.style.width = '42.75%'
    }
    if (exp === 2572) {
      expTwo.style.width = '43%'
    }
    if (exp === 2573) {
      expTwo.style.width = '43.25%'
    }
    if (exp === 2574) {
      expTwo.style.width = '43.5%'
    }
    if (exp === 2575) {
      expTwo.style.width = '43.75%'
    }
    if (exp === 2576) {
      expTwo.style.width = '44%'
    }
    if (exp === 2577) {
      expTwo.style.width = '44.25%'
    }
    if (exp === 2578) {
      expTwo.style.width = '44.5%'
    }
    if (exp === 2579) {
      expTwo.style.width = '44.75%'
    }
    if (exp === 2580) {
      expTwo.style.width = '45%'
    }
    if (exp === 2581) {
      expTwo.style.width = '45.25%'
    }
    if (exp === 2582) {
      expTwo.style.width = '45.5%'
    }
    if (exp === 2583) {
      expTwo.style.width = '45.75%'
    }
    if (exp === 2584) {
      expTwo.style.width = '46%'
    }
    if (exp === 2585) {
      expTwo.style.width = '46.25%'
    }
    if (exp === 2586) {
      expTwo.style.width = '46.5%'
    }
    if (exp === 2587) {
      expTwo.style.width = '46.75%'
    }
    if (exp === 2588) {
      expTwo.style.width = '47%'
    }
    if (exp === 2589) {
      expTwo.style.width = '47.25%'
    }
    if (exp === 2590) {
      expTwo.style.width = '47.5%'
    }
    if (exp === 2591) {
      expTwo.style.width = '47.75%'
    }
    if (exp === 2592) {
      expTwo.style.width = '48%'
    }
    if (exp === 2593) {
      expTwo.style.width = '48.25%'
    }
    if (exp === 2594) {
      expTwo.style.width = '48.5%'
    }
    if (exp === 2595) {
      expTwo.style.width = '48.75%'
    }
    if (exp === 2596) {
      expTwo.style.width = '49%'
    }
    if (exp === 2597) {
      expTwo.style.width = '49.25%'
    }
    if (exp === 2598) {
      expTwo.style.width = '49.5%'
    }
    if (exp === 2599) {
      expTwo.style.width = '49.75%'
    }
    if (exp === 2600) {
      expTwo.style.width = '50%'
    }
    if (exp === 2601) {
      expTwo.style.width = '50.25%'
    }
    if (exp === 2602) {
      expTwo.style.width = '50.5%'
    }
    if (exp === 2603) {
      expTwo.style.width = '50.75%'
    }
    if (exp === 2604) {
      expTwo.style.width = '51%'
    }
    if (exp === 2605) {
      expTwo.style.width = '51.25%'
    }
    if (exp === 2606) {
      expTwo.style.width = '51.5%'
    }
    if (exp === 2607) {
      expTwo.style.width = '51.75%'
    }
    if (exp === 2608) {
      expTwo.style.width = '52%'
    }
    if (exp === 2609) {
      expTwo.style.width = '52.25%'
    }
    if (exp === 2610) {
      expTwo.style.width = '52.5%'
    }
    if (exp === 2611) {
      expTwo.style.width = '52.75%'
    }
    if (exp === 2612) {
      expTwo.style.width = '53%'
    }
    if (exp === 2613) {
      expTwo.style.width = '53.25%'
    }
    if (exp === 2614) {
      expTwo.style.width = '53.5%'
    }
    if (exp === 2615) {
      expTwo.style.width = '53.75%'
    }
    if (exp === 2616) {
      expTwo.style.width = '54%'
    }
    if (exp === 2617) {
      expTwo.style.width = '54.25%'
    }
    if (exp === 2618) {
      expTwo.style.width = '54.5%'
    }
    if (exp === 2619) {
      expTwo.style.width = '54.75%'
    }
    if (exp === 2620) {
      expTwo.style.width = '55%'
    }
    if (exp === 2621) {
      expTwo.style.width = '55.25%'
    }
    if (exp === 2622) {
      expTwo.style.width = '55.5%'
    }
    if (exp === 2623) {
      expTwo.style.width = '55.75%'
    }
    if (exp === 2624) {
      expTwo.style.width = '56%'
    }
    if (exp === 2625) {
      expTwo.style.width = '56.25%'
    }
    if (exp === 2626) {
      expTwo.style.width = '56.5%'
    }
    if (exp === 2627) {
      expTwo.style.width = '56.75%'
    }
    if (exp === 2628) {
      expTwo.style.width = '57%'
    }
    if (exp === 2629) {
      expTwo.style.width = '57.25%'
    }
    if (exp === 2630) {
      expTwo.style.width = '57.5%'
    }
    if (exp === 2631) {
      expTwo.style.width = '57.75%'
    }
    if (exp === 2632) {
      expTwo.style.width = '58%'
    }
    if (exp === 2633) {
      expTwo.style.width = '58.25%'
    }
    if (exp === 2634) {
      expTwo.style.width = '58.5%'
    }
    if (exp === 2635) {
      expTwo.style.width = '58.75%'
    }
    if (exp === 2636) {
      expTwo.style.width = '59%'
    }
    if (exp === 2637) {
      expTwo.style.width = '59.25%'
    }
    if (exp === 2638) {
      expTwo.style.width = '59.5%'
    }
    if (exp === 2639) {
      expTwo.style.width = '59.75%'
    }
    if (exp === 2640) {
      expTwo.style.width = '60%'
    }
    if (exp === 2641) {
      expTwo.style.width = '60.25%'
    }
    if (exp === 2642) {
      expTwo.style.width = '60.5%'
    }
    if (exp === 2643) {
      expTwo.style.width = '60.75%'
    }
    if (exp === 2644) {
      expTwo.style.width = '61%'
    }
    if (exp === 2645) {
      expTwo.style.width = '61.25%'
    }
    if (exp === 2646) {
      expTwo.style.width = '61.5%'
    }
    if (exp === 2647) {
      expTwo.style.width = '61.75%'
    }
    if (exp === 2648) {
      expTwo.style.width = '62%'
    }
    if (exp === 2649) {
      expTwo.style.width = '62.25%'
    }
    if (exp === 2650) {
      expTwo.style.width = '62.5%'
    }
    if (exp === 2651) {
      expTwo.style.width = '62.75%'
    }
    if (exp === 2652) {
      expTwo.style.width = '63%'
    }
    if (exp === 2653) {
      expTwo.style.width = '63.25%'
    }
    if (exp === 2654) {
      expTwo.style.width = '63.5%'
    }
    if (exp === 2655) {
      expTwo.style.width = '63.75%'
    }
    if (exp === 2656) {
      expTwo.style.width = '64%'
    }
    if (exp === 2657) {
      expTwo.style.width = '64.25%'
    }
    if (exp === 2658) {
      expTwo.style.width = '64.5%'
    }
    if (exp === 2659) {
      expTwo.style.width = '64.75%'
    }
    if (exp === 2660) {
      expTwo.style.width = '65%'
    }
    if (exp === 2661) {
      expTwo.style.width = '65.25%'
    }
    if (exp === 2662) {
      expTwo.style.width = '65.5%'
    }
    if (exp === 2663) {
      expTwo.style.width = '65.75%'
    }
    if (exp === 2664) {
      expTwo.style.width = '66%'
    }
    if (exp === 2665) {
      expTwo.style.width = '66.25%'
    }
    if (exp === 2666) {
      expTwo.style.width = '66.5%'
    }
    if (exp === 2667) {
      expTwo.style.width = '66.75%'
    }
    if (exp === 2668) {
      expTwo.style.width = '67%'
    }
    if (exp === 2669) {
      expTwo.style.width = '67.25%'
    }
    if (exp === 2670) {
      expTwo.style.width = '67.5%'
    }
    if (exp === 2671) {
      expTwo.style.width = '67.75%'
    }
    if (exp === 2672) {
      expTwo.style.width = '68%'
    }
    if (exp === 2673) {
      expTwo.style.width = '68.25%'
    }
    if (exp === 2674) {
      expTwo.style.width = '68.5%'
    }
    if (exp === 2675) {
      expTwo.style.width = '68.75%'
    }
    if (exp === 2676) {
      expTwo.style.width = '69%'
    }
    if (exp === 2677) {
      expTwo.style.width = '69.25%'
    }
    if (exp === 2678) {
      expTwo.style.width = '69.5%'
    }
    if (exp === 2679) {
      expTwo.style.width = '69.75%'
    }
    if (exp === 2680) {
      expTwo.style.width = '70%'
    }
    if (exp === 2681) {
      expTwo.style.width = '70.25%'
    }
    if (exp === 2682) {
      expTwo.style.width = '70.5%'
    }
    if (exp === 2683) {
      expTwo.style.width = '70.75%'
    }
    if (exp === 2684) {
      expTwo.style.width = '71%'
    }
    if (exp === 2685) {
      expTwo.style.width = '71.25%'
    }
    if (exp === 2686) {
      expTwo.style.width = '71.5%'
    }
    if (exp === 2687) {
      expTwo.style.width = '71.75%'
    }
    if (exp === 2688) {
      expTwo.style.width = '72%'
    }
    if (exp === 2689) {
      expTwo.style.width = '72.25%'
    }
    if (exp === 2690) {
      expTwo.style.width = '72.5%'
    }
    if (exp === 2691) {
      expTwo.style.width = '72.75%'
    }
    if (exp === 2692) {
      expTwo.style.width = '73%'
    }
    if (exp === 2693) {
      expTwo.style.width = '73.25%'
    }
    if (exp === 2694) {
      expTwo.style.width = '73.5%'
    }
    if (exp === 2695) {
      expTwo.style.width = '73.75%'
    }
    if (exp === 2696) {
      expTwo.style.width = '74%'
    }
    if (exp === 2697) {
      expTwo.style.width = '74.25%'
    }
    if (exp === 2698) {
      expTwo.style.width = '74.5%'
    }
    if (exp === 2699) {
      expTwo.style.width = '74.75%'
    }
    if (exp === 2700) {
      expTwo.style.width = '75%'
    }
    if (exp === 2701) {
      expTwo.style.width = '75.25%'
    }
    if (exp === 2702) {
      expTwo.style.width = '75.5%'
    }
    if (exp === 2703) {
      expTwo.style.width = '75.75%'
    }
    if (exp === 2704) {
      expTwo.style.width = '76%'
    }
    if (exp === 2705) {
      expTwo.style.width = '76.25%'
    }
    if (exp === 2706) {
      expTwo.style.width = '76.5%'
    }
    if (exp === 2707) {
      expTwo.style.width = '76.75%'
    }
    if (exp === 2708) {
      expTwo.style.width = '77%'
    }
    if (exp === 2709) {
      expTwo.style.width = '77.25%'
    }
    if (exp === 2710) {
      expTwo.style.width = '77.5%'
    }
    if (exp === 2711) {
      expTwo.style.width = '77.75%'
    }
    if (exp === 2712) {
      expTwo.style.width = '78%'
    }
    if (exp === 2713) {
      expTwo.style.width = '78.25%'
    }
    if (exp === 2714) {
      expTwo.style.width = '78.5%'
    }
    if (exp === 2715) {
      expTwo.style.width = '78.75%'
    }
    if (exp === 2716) {
      expTwo.style.width = '79%'
    }
    if (exp === 2717) {
      expTwo.style.width = '79.25%'
    }
    if (exp === 2718) {
      expTwo.style.width = '79.5%'
    }
    if (exp === 2719) {
      expTwo.style.width = '79.75%'
    }
    if (exp === 2720) {
      expTwo.style.width = '80%'
    }
    if (exp === 2721) {
      expTwo.style.width = '80.25%'
    }
    if (exp === 2722) {
      expTwo.style.width = '80.5%'
    }
    if (exp === 2723) {
      expTwo.style.width = '80.75%'
    }
    if (exp === 2724) {
      expTwo.style.width = '81%'
    }
    if (exp === 2725) {
      expTwo.style.width = '81.25%'
    }
    if (exp === 2726) {
      expTwo.style.width = '81.5%'
    }
    if (exp === 2727) {
      expTwo.style.width = '81.75%'
    }
    if (exp === 2728) {
      expTwo.style.width = '82%'
    }
    if (exp === 2729) {
      expTwo.style.width = '82.25%'
    }
    if (exp === 2730) {
      expTwo.style.width = '82.5%'
    }
    if (exp === 2731) {
      expTwo.style.width = '82.75%'
    }
    if (exp === 2732) {
      expTwo.style.width = '83%'
    }
    if (exp === 2733) {
      expTwo.style.width = '83.25%'
    }
    if (exp === 2734) {
      expTwo.style.width = '83.5%'
    }
    if (exp === 2735) {
      expTwo.style.width = '83.75%'
    }
    if (exp === 2736) {
      expTwo.style.width = '84%'
    }
    if (exp === 2737) {
      expTwo.style.width = '84.25%'
    }
    if (exp === 2738) {
      expTwo.style.width = '84.5%'
    }
    if (exp === 2739) {
      expTwo.style.width = '84.75%'
    }
    if (exp === 2740) {
      expTwo.style.width = '85%'
    }
    if (exp === 2741) {
      expTwo.style.width = '85.25%'
    }
    if (exp === 2742) {
      expTwo.style.width = '85.5%'
    }
    if (exp === 2743) {
      expTwo.style.width = '85.75%'
    }
    if (exp === 2744) {
      expTwo.style.width = '86%'
    }
    if (exp === 2745) {
      expTwo.style.width = '86.25%'
    }
    if (exp === 2746) {
      expTwo.style.width = '86.5%'
    }
    if (exp === 2747) {
      expTwo.style.width = '86.75%'
    }
    if (exp === 2748) {
      expTwo.style.width = '87%'
    }
    if (exp === 2749) {
      expTwo.style.width = '87.25%'
    }
    if (exp === 2750) {
      expTwo.style.width = '87.5%'
    }
    if (exp === 2751) {
      expTwo.style.width = '87.75%'
    }
    if (exp === 2752) {
      expTwo.style.width = '88%'
    }
    if (exp === 2753) {
      expTwo.style.width = '88.25%'
    }
    if (exp === 2754) {
      expTwo.style.width = '88.5%'
    }
    if (exp === 2755) {
      expTwo.style.width = '88.75%'
    }
    if (exp === 2756) {
      expTwo.style.width = '89%'
    }
    if (exp === 2757) {
      expTwo.style.width = '89.25%'
    }
    if (exp === 2758) {
      expTwo.style.width = '89.5%'
    }
    if (exp === 2759) {
      expTwo.style.width = '89.75%'
    }
    if (exp === 2760) {
      expTwo.style.width = '90%'
    }
    if (exp === 2761) {
      expTwo.style.width = '90.25%'
    }
    if (exp === 2762) {
      expTwo.style.width = '90.5%'
    }
    if (exp === 2763) {
      expTwo.style.width = '90.75%'
    }
    if (exp === 2764) {
      expTwo.style.width = '91%'
    }
    if (exp === 2765) {
      expTwo.style.width = '91.25%'
    }
    if (exp === 2766) {
      expTwo.style.width = '91.5%'
    }
    if (exp === 2767) {
      expTwo.style.width = '91.75%'
    }
    if (exp === 2768) {
      expTwo.style.width = '92%'
    }
    if (exp === 2769) {
      expTwo.style.width = '92.25%'
    }
    if (exp === 2770) {
      expTwo.style.width = '92.5%'
    }
    if (exp === 2771) {
      expTwo.style.width = '92.75%'
    }
    if (exp === 2772) {
      expTwo.style.width = '93%'
    }
    if (exp === 2773) {
      expTwo.style.width = '93.25%'
    }
    if (exp === 2774) {
      expTwo.style.width = '93.5%'
    }
    if (exp === 2775) {
      expTwo.style.width = '93.75%'
    }
    if (exp === 2776) {
      expTwo.style.width = '94%'
    }
    if (exp === 2777) {
      expTwo.style.width = '94.25%'
    }
    if (exp === 2778) {
      expTwo.style.width = '94.5%'
    }
    if (exp === 2779) {
      expTwo.style.width = '94.75%'
    }
    if (exp === 2780) {
      expTwo.style.width = '95%'
    }
    if (exp === 2781) {
      expTwo.style.width = '95.25%'
    }
    if (exp === 2782) {
      expTwo.style.width = '95.5%'
    }
    if (exp === 2783) {
      expTwo.style.width = '95.75%'
    }
    if (exp === 2784) {
      expTwo.style.width = '96%'
    }
    if (exp === 2785) {
      expTwo.style.width = '96.25%'
    }
    if (exp === 2786) {
      expTwo.style.width = '96.5%'
    }
    if (exp === 2787) {
      expTwo.style.width = '96.75%'
    }
    if (exp === 2788) {
      expTwo.style.width = '97%'
    }
    if (exp === 2789) {
      expTwo.style.width = '97.25%'
    }
    if (exp === 2790) {
      expTwo.style.width = '97.5%'
    }
    if (exp === 2791) {
      expTwo.style.width = '97.75%'
    }
    if (exp === 2792) {
      expTwo.style.width = '98%'
    }
    if (exp === 2793) {
      expTwo.style.width = '98.25%'
    }
    if (exp === 2794) {
      expTwo.style.width = '98.5%'
    }
    if (exp === 2795) {
      expTwo.style.width = '98.75%'
    }
    if (exp === 2796) {
      expTwo.style.width = '99%'
    }
    if (exp === 2797) {
      expTwo.style.width = '99.25%'
    }
    if (exp === 2798) {
      expTwo.style.width = '99.5%'
    }
    if (exp === 2799) {
      expTwo.style.width = '99.75%'
    }
    if (exp === 2800) {
      expTwo.style.width = '100%'
    }
   
  } 

  if (exp >= 2801 && exp <= 3200) 
  {
    expOne.style.width = '100%'
    expTwo.style.width = '100%'
    
    expOne.style.display = 'block'
    expTwo.style.display = 'block'
    expThree.style.display = 'block'
    expFour.style.display = 'none'
    expFive.style.display = 'none'
  if (exp === 2801) {
    expThree.style.width = '0.25%'
  }
  if (exp === 2802) {
    expThree.style.width = '0.5%'
  }
  if (exp === 2803) {
    expThree.style.width = '0.75%'
  }
  if (exp === 2804) {
    expThree.style.width = '1%'
  }
  if (exp === 2805) {
    expThree.style.width = '1.25%'
  }
  if (exp === 2806) {
    expThree.style.width = '1.5%'
  }
  if (exp === 2807) {
    expThree.style.width = '1.75%'
  }
  if (exp === 2808) {
    expThree.style.width = '2%'
  } 
  if (exp === 2809) {
    expThree.style.width = '2.25%'
  } 
  if (exp === 2810) {
    expThree.style.width = '2.5%'
  } 
  if (exp === 2811) {
    expThree.style.width = '2.75%'
  } 
  if (exp === 2812) {
    expThree.style.width = '3%'
  } 
  if (exp === 2813) {
    expThree.style.width = '3.25%'
  } 
  if (exp === 2814) {
    expThree.style.width = '3.5%'
  } 
  if (exp === 2015) {
    expThree.style.width = '3.75%'
  } 
  if (exp === 2816) {
    expThree.style.width = '4%'
  } 
  if (exp === 2817) {
    expThree.style.width = '4.25%'
  } 
  if (exp === 2818) {
    expThree.style.width = '4.5%'
  } 
  if (exp === 2819) {
    expThree.style.width = '4.75%'
  }
  if (exp === 2820) {
    expThree.style.width = '5%'
  }
  if (exp === 2821) {
    expThree.style.width = '5.25%'
  }
  if (exp === 2822) {
    expThree.style.width = '5.5%'
  }
  if (exp === 2823) {
    expThree.style.width = '5.75%'
  }
  if (exp === 2824) {
    expThree.style.width = '6%'
  }
  if (exp === 2825) {
    expThree.style.width = '6.25%'
  }
  if (exp === 2826) {
    expThree.style.width = '6.5%'
  }
  if (exp === 2827) {
    expThree.style.width = '6.75%'
  }
  if (exp === 2828) {
    expThree.style.width = '7%'
  } 
  if (exp === 2829) {
    expThree.style.width = '7.25%'
  } 
  if (exp === 2830) {
    expThree.style.width = '7.5%'
  } 
  if (exp === 2831) {
    expThree.style.width = '7.75%'
  } 
  if (exp === 2832) {
    expThree.style.width = '8%'
  } 
  if (exp === 2833) {
    expThree.style.width = '8.25%'
  } 
  if (exp === 2834) {
    expThree.style.width = '8.5%'
  } 
  if (exp === 2835) {
    expThree.style.width = '8.75%'
  } 
  if (exp === 2836) {
    expThree.style.width = '9%'
  } 
  if (exp === 2837) {
    expThree.style.width = '9.25%'
  } 
  if (exp === 2838) {
    expThree.style.width = '9.5%'
  } 
  if (exp === 2839) {
    expThree.style.width = '9.75%'
  }
  if (exp === 2840) {
    expThree.style.width = '10%'
  }
  if (exp === 2841) {
    expThree.style.width = '10.25%'
  }
  if (exp === 2842) {
    expThree.style.width = '10.5%'
  }
  if (exp === 2843) {
    expThree.style.width = '10.75%'
  }
  if (exp === 2844) {
    expThree.style.width = '11%'
  }
  if (exp === 2845) {
    expThree.style.width = '11.25%'
  }
  if (exp === 2846) {
    expThree.style.width = '11.5%'
  }
  if (exp === 2847) {
    expThree.style.width = '11.75%'
  }
  if (exp === 2848) {
    expThree.style.width = '12%'
  }
  if (exp === 2849) {
    expThree.style.width = '12.25%'
  }
  if (exp === 2850) {
    expThree.style.width = '12.5%'
  }
  if (exp === 2851) {
    expThree.style.width = '12.75%'
  }
  if (exp === 2852) {
    expThree.style.width = '13%'
  }
  if (exp === 2853) {
    expThree.style.width = '13.25%'
  }
  if (exp === 2854) {
    expThree.style.width = '13.5%'
  }
  if (exp === 2855) {
    expThree.style.width = '13.75%'
  }
  if (exp === 2856) {
    expThree.style.width = '14%'
  }
  if (exp === 2857) {
    expThree.style.width = '14.25%'
  }
  if (exp === 2858) {
    expThree.style.width = '14.5%'
  }
  if (exp === 2859) {
    expThree.style.width = '14.75%'
  }
  if (exp === 2860) {
    expThree.style.width = '15%'
  }
  if (exp === 2861) {
    expThree.style.width = '15.25%'
  }
  if (exp === 2862) {
    expThree.style.width = '15.5%'
  }
  if (exp === 2863) {
    expThree.style.width = '15.75%'
  }
  if (exp === 2864) {
    expThree.style.width = '16%'
  }
  if (exp === 2865) {
    expThree.style.width = '16.25%'
  }
  if (exp === 2866) {
    expThree.style.width = '16.5%'
  }
  if (exp === 2867) {
    expThree.style.width = '16.75%'
  }
  if (exp === 2868) {
    expThree.style.width = '17%'
  }
  if (exp === 2869) {
    expThree.style.width = '17.25%'
  }
  if (exp === 2870) {
    expThree.style.width = '17.5%'
  }
  if (exp === 2871) {
    expThree.style.width = '17.75%'
  }
  if (exp === 2872) {
    expThree.style.width = '18%'
  }
  if (exp === 2873) {
    expThree.style.width = '18.25%'
  }
  if (exp === 2874) {
    expThree.style.width = '18.5%'
  }
  if (exp === 2875) {
    expThree.style.width = '18.75%'
  }
  if (exp === 2876) {
    expThree.style.width = '19%'
  }
  if (exp === 2877) {
    expThree.style.width = '19.25%'
  }
  if (exp === 2878) {
    expThree.style.width = '19.5%'
  }
  if (exp === 2879) {
    expThree.style.width = '19.75%'
  }
  if (exp === 2880) {
    expThree.style.width = '20%'
  }
  if (exp === 2881) {
    expThree.style.width = '20.25%'
  }
  if (exp === 2882) {
    expThree.style.width = '20.5%'
  }
  if (exp === 2883) {
    expThree.style.width = '20.75%'
  }
  if (exp === 2884) {
    expThree.style.width = '21%'
  }
  if (exp === 2885) {
    expThree.style.width = '21.25%'
  }
  if (exp === 2886) {
    expThree.style.width = '21.5%'
  }
  if (exp === 2887) {
    expThree.style.width = '21.75%'
  }
  if (exp === 2888) {
    expThree.style.width = '22%'
  }
  if (exp === 2889) {
    expThree.style.wiTwo = '22.25%'
  }
  if (exp === 2890) {
    expThree.style.width = '22.5%'
  }
  if (exp === 2891) {
    expThree.style.width = '22.75%'
  }
  if (exp === 2892) {
    expThree.style.width = '23%'
  }
  if (exp === 2893) {
    expThree.style.width = '23.25%'
  }
  if (exp === 2894) {
    expThree.style.width = '23.5%'
  }
  if (exp === 2895) {
    expThree.style.width = '23.75%'
  }
  if (exp === 2896) {
    expThree.style.width = '24%'
  }
  if (exp === 2897) {
    expThree.style.width = '24.25%'
  }
  if (exp === 2898) {
    expThree.style.width = '24.5%'
  }
  if (exp === 2899) {
    expThree.style.width = '24.75%'
  }
  if (exp === 2900) {
    expThree.style.width = '25%'
  }
  if (exp === 2901) {
    expThree.style.width = '25.25%'
  }
  if (exp === 2902) {
    expThree.style.width = '25.5%'
  }
  if (exp === 2903) {
    expThree.style.width = '25.75%'
  }
  if (exp === 2904) {
    expThree.style.width = '26%'
  }
  if (exp === 2905) {
    expThree.style.width = '26.25%'
  }
  if (exp === 2906) {
    expThree.style.width = '26.5%'
  }
  if (exp === 2907) {
    expThree.style.width = '26.75%'
  }
  if (exp === 2908) {
    expThree.style.width = '27%'
  } 
  if (exp === 2909) {
    expThree.style.width = '27.25%'
  } 
  if (exp === 2910) {
    expThree.style.width = '27.5%'
  } 
  if (exp === 2911) {
    expThree.style.width = '27.75%'
  } 
  if (exp === 2912) {
    expThree.style.width = '28%'
  } 
  if (exp === 2913) {
    expThree.style.width = '28.25%'
  } 
  if (exp === 2914) {
    expThree.style.width = '28.5%'
  } 
  if (exp === 2915) {
    expThree.style.width = '28.75%'
  } 
  if (exp === 2916) {
    expThree.style.width = '29%'
  } 
  if (exp === 2917) {
    expThree.style.width = '29.25%'
  } 
  if (exp === 2918) {
    expThree.style.width = '29.5%'
  } 
  if (exp === 2919) {
    expThree.style.width = '29.75%'
  }
  if (exp === 2920) {
    expThree.style.width = '30%'
  }
  if (exp === 2921) {
    expThree.style.width = '30.25%'
  }
  if (exp === 2922) {
    expThree.style.width = '30.5%'
  }
  if (exp === 2923) {
    expThree.style.width = '30.75%'
  }
  if (exp === 2924) {
    expThree.style.width = '31%'
  }
  if (exp === 2925) {
    expThree.style.width = '31.25%'
  }
  if (exp === 2926) {
    expThree.style.width = '31.5%'
  }
  if (exp === 2927) {
    expThree.style.width = '31.75%'
  }
  if (exp === 2928) {
    expThree.style.width = '32%'
  } 
  if (exp === 2929) {
    expThree.style.width = '32.25%'
  } 
  if (exp === 2930) {
    expThree.style.width = '32.5%'
  } 
  if (exp === 2931) {
    expThree.style.width = '32.75%'
  } 
  if (exp === 2932) {
    expThree.style.width = '33%'
  } 
  if (exp === 2933) {
    expThree.style.width = '33.25%'
  } 
  if (exp === 2934) {
    expThree.style.width = '33.5%'
  } 
  if (exp === 2935) {
    expThree.style.width = '33.75%'
  } 
  if (exp === 2936) {
    expThree.style.width = '34%'
  } 
  if (exp === 2937) {
    expThree.style.width = '34.25%'
  } 
  if (exp === 2938) {
    expThree.style.width = '34.5%'
  } 
  if (exp === 2939) {
    expThree.style.width = '34.75%'
  }
  if (exp === 2940) {
    expThree.style.width = '35%'
  }
  if (exp === 2941) {
    expThree.style.width = '35.25%'
  }
  if (exp === 2942) {
    expThree.style.width = '35.5%'
  }
  if (exp === 2943) {
    expThree.style.width = '35.75%'
  }
  if (exp === 2944) {
    expThree.style.width = '36%'
  }
  if (exp === 2945) {
    expThree.style.width = '36.25%'
  }
  if (exp === 2946) {
    expThree.style.width = '36.5%'
  }
  if (exp === 2947) {
    expThree.style.width = '36.75%'
  }
  if (exp === 2948) {
    expThree.style.width = '37%'
  }
  if (exp === 2949) {
    expThree.style.width = '37.25%'
  }
  if (exp === 2950) {
    expThree.style.width = '37.5%'
  }
  if (exp === 2951) {
    expThree.style.width = '37.75%'
  }
  if (exp === 2952) {
    expThree.style.width = '38%'
  }
  if (exp === 2953) {
    expThree.style.width = '38.25%'
  }
  if (exp === 2954) {
    expThree.style.width = '38.5%'
  }
  if (exp === 2955) {
    expThree.style.width = '38.75%'
  }
  if (exp === 2956) {
    expThree.style.width = '39%'
  }
  if (exp === 2957) {
    expThree.style.width = '39.25%'
  }
  if (exp === 2958) {
    expThree.style.width = '39.5%'
  }
  if (exp === 2959) {
    expThree.style.width = '39.75%'
  }
  if (exp === 2960) {
    expThree.style.width = '40%'
  } 
  if (exp === 2961) {
    expThree.style.width = '40.25%'
  }
  if (exp === 2962) {
    expThree.style.width = '40.5%'
  }
  if (exp === 2963) {
    expThree.style.width = '40.75%'
  }
  if (exp === 2964) {
    expThree.style.width = '41%'
  }
  if (exp === 2965) {
    expThree.style.width = '41.25%'
  }
  if (exp === 2966) {
    expThree.style.width = '41.5%'
  }
  if (exp === 2967) {
    expThree.style.width = '41.75%'
  }
  if (exp === 2968) {
    expThree.style.width = '42%'
  }
  if (exp === 2969) {
    expThree.style.width = '42.25%'
  }
  if (exp === 2970) {
    expThree.style.width = '42.5%'
  }
  if (exp === 2971) {
    expThree.style.width = '42.75%'
  }
  if (exp === 2972) {
    expThree.style.width = '43%'
  }
  if (exp === 2973) {
    expThree.style.width = '43.25%'
  }
  if (exp === 2974) {
    expThree.style.width = '43.5%'
  }
  if (exp === 2975) {
    expThree.style.width = '43.75%'
  }
  if (exp === 2976) {
    expThree.style.width = '44%'
  }
  if (exp === 2977) {
    expThree.style.width = '44.25%'
  }
  if (exp === 2978) {
    expThree.style.width = '44.5%'
  }
  if (exp === 2979) {
    expThree.style.width = '44.75%'
  }
  if (exp === 2980) {
    expThree.style.width = '45%'
  }
  if (exp === 2981) {
    expThree.style.width = '45.25%'
  }
  if (exp === 2982) {
    expThree.style.width = '45.5%'
  }
  if (exp === 2983) {
    expTwo.style.width = '45.75%'
  }
  if (exp === 2984) {
    expThree.style.width = '46%'
  }
  if (exp === 2985) {
    expThree.style.width = '46.25%'
  }
  if (exp === 2986) {
    expThree.style.width = '46.5%'
  }
  if (exp === 2987) {
    expThree.style.width = '46.75%'
  }
  if (exp === 2988) {
    expThree.style.width = '47%'
  }
  if (exp === 2989) {
    expThree.style.width = '47.25%'
  }
  if (exp === 2990) {
    expThree.style.width = '47.5%'
  }
  if (exp === 2991) {
    expThree.style.width = '47.75%'
  }
  if (exp === 2992) {
    expThree.style.width = '48%'
  }
  if (exp === 2993) {
    expThree.style.width = '48.25%'
  }
  if (exp === 2994) {
    expThree.style.width = '48.5%'
  }
  if (exp === 2995) {
    expThree.style.width = '48.75%'
  }
  if (exp === 2996) {
    expThree.style.width = '49%'
  }
  if (exp === 2997) {
    expThree.style.width = '49.25%'
  }
  if (exp === 3098) {
    expThree.style.width = '49.5%'
  }
  if (exp === 2999) {
    expThree.style.width = '49.75%'
  }
  if (exp === 3000) {
    expThree.style.width = '50%'
  }
  if (exp === 3001) {
    expThree.style.width = '50.25%'
  }
  if (exp === 3002) {
    expThree.style.width = '50.5%'
  }
  if (exp === 3003) {
    expThree.style.width = '50.75%'
  }
  if (exp === 3004) {
    expThree.style.width = '51%'
  }
  if (exp === 3005) {
    expThree.style.width = '51.25%'
  }
  if (exp === 3006) {
    expThree.style.width = '51.5%'
  }
  if (exp === 3007) {
    expThree.style.width = '51.75%'
  }
  if (exp === 3008) {
    expThree.style.width = '52%'
  }
  if (exp === 3009) {
    expThree.style.width = '52.25%'
  }
  if (exp === 3010) {
    expThree.style.width = '52.5%'
  }
  if (exp === 3011) {
    expThree.style.width = '52.75%'
  }
  if (exp === 3012) {
    expThree.style.width = '53%'
  }
  if (exp === 3013) {
    expThree.style.width = '53.25%'
  }
  if (exp === 3014) {
    expThree.style.width = '53.5%'
  }
  if (exp === 3015) {
    expThree.style.width = '53.75%'
  }
  if (exp === 3016) {
    expThree.style.width = '54%'
  }
  if (exp === 3017) {
    expThree.style.width = '54.25%'
  }
  if (exp === 3018) {
    expThree.style.width = '54.5%'
  }
  if (exp === 3019) {
    expThree.style.width = '54.75%'
  }
  if (exp === 3020) {
    expThree.style.width = '55%'
  }
  if (exp === 3021) {
    expThree.style.width = '55.25%'
  }
  if (exp === 3022) {
    expThree.style.width = '55.5%'
  }
  if (exp === 3023) {
    expThree.style.width = '55.75%'
  }
  if (exp === 3024) {
    expThree.style.width = '56%'
  }
  if (exp === 3025) {
    expThree.style.width = '56.25%'
  }
  if (exp === 3026) {
    expThree.style.width = '56.5%'
  }
  if (exp === 3027) {
    expThree.style.width = '56.75%'
  }
  if (exp === 3028) {
    expThree.style.width = '57%'
  }
  if (exp === 3029) {
    expThree.style.width = '57.25%'
  }
  if (exp === 3030) {
    expThree.style.width = '57.5%'
  }
  if (exp === 3031) {
    expThree.style.width = '57.75%'
  }
  if (exp === 3032) {
    expThree.style.width = '58%'
  }
  if (exp === 3033) {
    expThree.style.width = '58.25%'
  }
  if (exp === 3034) {
    expThree.style.width = '58.5%'
  }
  if (exp === 3035) {
    expThree.style.width = '58.75%'
  }
  if (exp === 3036) {
    expThree.style.width = '59%'
  }
  if (exp === 3037) {
    expThree.style.width = '59.25%'
  }
  if (exp === 3038) {
    expThree.style.width = '59.5%'
  }
  if (exp === 3039) {
    expThree.style.width = '59.75%'
  }
  if (exp === 3040) {
    expThree.style.width = '60%'
  }
  if (exp === 3041) {
    expThree.style.width = '60.25%'
  }
  if (exp === 3042) {
    expThree.style.width = '60.5%'
  }
  if (exp === 3043) {
    expThree.style.width = '60.75%'
  }
  if (exp === 3044) {
    expThree.style.width = '61%'
  }
  if (exp === 3045) {
    expThree.style.width = '61.25%'
  }
  if (exp === 3046) {
    expThree.style.width = '61.5%'
  }
  if (exp === 3047) {
    expThree.style.width = '61.75%'
  }
  if (exp === 3048) {
    expThree.style.width = '62%'
  }
  if (exp === 3049) {
    expThree.style.width = '62.25%'
  }
  if (exp === 3050) {
    expThree.style.width = '62.5%'
  }
  if (exp === 3051) {
    expThree.style.width = '62.75%'
  }
  if (exp === 3052) {
    expThree.style.width = '63%'
  }
  if (exp === 3053) {
    expThree.style.width = '63.25%'
  }
  if (exp === 3054) {
    expThree.style.width = '63.5%'
  }
  if (exp === 3055) {
    expThree.style.width = '63.75%'
  }
  if (exp === 3056) {
    expThree.style.width = '64%'
  }
  if (exp === 3057) {
    expThree.style.width = '64.25%'
  }
  if (exp === 3058) {
    expThree.style.width = '64.5%'
  }
  if (exp === 3059) {
    expThree.style.width = '64.75%'
  }
  if (exp === 3060) {
    expThree.style.width = '65%'
  }
  if (exp === 3061) {
    expThree.style.width = '65.25%'
  }
  if (exp === 3062) {
    expThree.style.width = '65.5%'
  }
  if (exp === 3063) {
    expThree.style.width = '65.75%'
  }
  if (exp === 3064) {
    expThree.style.width = '66%'
  }
  if (exp === 3065) {
    expThree.style.width = '66.25%'
  }
  if (exp === 3066) {
    expThree.style.width = '66.5%'
  }
  if (exp === 3067) {
    expThree.style.width = '66.75%'
  }
  if (exp === 3068) {
    expThree.style.width = '67%'
  }
  if (exp === 3069) {
    expThree.style.width = '67.25%'
  }
  if (exp === 3070) {
    expThree.style.width = '67.5%'
  }
  if (exp === 3071) {
    expThree.style.width = '67.75%'
  }
  if (exp === 3072) {
    expThree.style.width = '68%'
  }
  if (exp === 3073) {
    expThree.style.width = '68.25%'
  }
  if (exp === 3074) {
    expThree.style.width = '68.5%'
  }
  if (exp === 3075) {
    expThree.style.width = '68.75%'
  }
  if (exp === 3076) {
    expThree.style.width = '69%'
  }
  if (exp === 3077) {
    expThree.style.width = '69.25%'
  }
  if (exp === 3078) {
    expThree.style.width = '69.5%'
  }
  if (exp === 3079) {
    expThree.style.width = '69.75%'
  }
  if (exp === 3080) {
    expThree.style.width = '70%'
  }
  if (exp === 3081) {
    expThree.style.width = '70.25%'
  }
  if (exp === 3082) {
    expThree.style.width = '70.5%'
  }
  if (exp === 3083) {
    expThree.style.width = '70.75%'
  }
  if (exp === 3184) {
    expThree.style.width = '71%'
  }
  if (exp === 3085) {
    expThree.style.width = '71.25%'
  }
  if (exp === 3086) {
    expThree.style.width = '71.5%'
  }
  if (exp === 3087) {
    expThree.style.width = '71.75%'
  }
  if (exp === 3088) {
    expThree.style.width = '72%'
  }
  if (exp === 3089) {
    expThree.style.width = '72.25%'
  }
  if (exp === 3090) {
    expThree.style.width = '72.5%'
  }
  if (exp === 3091) {
    expThree.style.width = '72.75%'
  }
  if (exp === 3092) {
    expThree.style.width = '73%'
  }
  if (exp === 3093) {
    expThree.style.width = '73.25%'
  }
  if (exp === 3094) {
    expThree.style.width = '73.5%'
  }
  if (exp === 3095) {
    expThree.style.width = '73.75%'
  }
  if (exp === 3196) {
    expThree.style.width = '74%'
  }
  if (exp === 3097) {
    expThree.style.width = '74.25%'
  }
  if (exp === 3098) {
    expThree.style.width = '74.5%'
  }
  if (exp === 3099) {
    expThree.style.width = '74.75%'
  }
  if (exp === 3100) {
    expThree.style.width = '75%'
  }
  if (exp === 3101) {
    expThree.style.width = '75.25%'
  }
  if (exp === 3102) {
    expThree.style.width = '75.5%'
  }
  if (exp === 3103) {
    expThree.style.width = '75.75%'
  }
  if (exp === 3104) {
    expThree.style.width = '76%'
  }
  if (exp === 3105) {
    expThree.style.width = '76.25%'
  }
  if (exp === 3106) {
    expThree.style.width = '76.5%'
  }
  if (exp === 3107) {
    expThree.style.width = '76.75%'
  }
  if (exp === 3108) {
    expThree.style.width = '77%'
  }
  if (exp === 3109) {
    expThree.style.width = '77.25%'
  }
  if (exp === 3110) {
    expThree.style.width = '77.5%'
  }
  if (exp === 3111) {
    expThree.style.width = '77.75%'
  }
  if (exp === 3112) {
    expThree.style.width = '78%'
  }
  if (exp === 3113) {
    expThree.style.width = '78.25%'
  }
  if (exp === 3114) {
    expThree.style.width = '78.5%'
  }
  if (exp === 3115) {
    expThree.style.width = '78.75%'
  }
  if (exp === 3116) {
    expThree.style.width = '79%'
  }
  if (exp === 3117) {
    expThree.style.width = '79.25%'
  }
  if (exp === 3118) {
    expThree.style.width = '79.5%'
  }
  if (exp === 3119) {
    expThree.style.width = '79.75%'
  }
  if (exp === 3120) {
    expThree.style.width = '80%'
  }
  if (exp === 3121) {
    expThree.style.width = '80.25%'
  }
  if (exp === 3122) {
    expThree.style.width = '80.5%'
  }
  if (exp === 3123) {
    expThree.style.width = '80.75%'
  }
  if (exp === 3124) {
    expThree.style.width = '81%'
  }
  if (exp === 3125) {
    expThree.style.width = '81.25%'
  }
  if (exp === 3126) {
    expThree.style.width = '81.5%'
  }
  if (exp === 3127) {
    expThree.style.width = '81.75%'
  }
  if (exp === 3128) {
    expThree.style.width = '82%'
  }
  if (exp === 3129) {
    expThree.style.width = '82.25%'
  }
  if (exp === 3130) {
    expThree.style.width = '82.5%'
  }
  if (exp === 3131) {
    expThree.style.width = '82.75%'
  }
  if (exp === 3132) {
    expThree.style.width = '83%'
  }
  if (exp === 3133) {
    expThree.style.width = '83.25%'
  }
  if (exp === 3134) {
    expThree.style.width = '83.5%'
  }
  if (exp === 3135) {
    expThree.style.width = '83.75%'
  }
  if (exp === 3136) {
    expThree.style.width = '84%'
  }
  if (exp === 3137) {
    expThree.style.width = '84.25%'
  }
  if (exp === 3138) {
    expThree.style.width = '84.5%'
  }
  if (exp === 3139) {
    expThree.style.width = '84.75%'
  }
  if (exp === 3140) {
    expThree.style.width = '85%'
  }
  if (exp === 3141) {
    expThree.style.width = '85.25%'
  }
  if (exp === 3142) {
    expThree.style.width = '85.5%'
  }
  if (exp === 3143) {
    expThree.style.width = '85.75%'
  }
  if (exp === 3144) {
    expThree.style.width = '86%'
  }
  if (exp === 3145) {
    expThree.style.width = '86.25%'
  }
  if (exp === 3146) {
    expThree.style.width = '86.5%'
  }
  if (exp === 3147) {
    expThree.style.width = '86.75%'
  }
  if (exp === 3148) {
    expThree.style.width = '87%'
  }
  if (exp === 3149) {
    expThree.style.width = '87.25%'
  }
  if (exp === 3150) {
    expThree.style.width = '87.5%'
  }
  if (exp === 3151) {
    expThree.style.width = '87.75%'
  }
  if (exp === 3152) {
    expThree.style.width = '88%'
  }
  if (exp === 3153) {
    expThree.style.width = '88.25%'
  }
  if (exp === 3154) {
    expThree.style.width = '88.5%'
  }
  if (exp === 3155) {
    expThree.style.width = '88.75%'
  }
  if (exp === 3156) {
    expThree.style.width = '89%'
  }
  if (exp === 3157) {
    expThree.style.width = '89.25%'
  }
  if (exp === 3158) {
    expThree.style.width = '89.5%'
  }
  if (exp === 3159) {
    expThree.style.width = '89.75%'
  }
  if (exp === 3160) {
    expThree.style.width = '90%'
  }
  if (exp === 3161) {
    expThree.style.width = '90.25%'
  }
  if (exp === 3162) {
    expThree.style.width = '90.5%'
  }
  if (exp === 3163) {
    expThree.style.width = '90.75%'
  }
  if (exp === 3164) {
    expThree.style.width = '91%'
  }
  if (exp === 3165) {
    expThree.style.width = '91.25%'
  }
  if (exp === 3166) {
    expThree.style.width = '91.5%'
  }
  if (exp === 3167) {
    expThree.style.width = '91.75%'
  }
  if (exp === 3168) {
    expThree.style.width = '92%'
  }
  if (exp === 3169) {
    expThree.style.width = '92.25%'
  }
  if (exp === 3170) {
    expThree.style.width = '92.5%'
  }
  if (exp === 3171) {
    expThree.style.width = '92.75%'
  }
  if (exp === 3172) {
    expThree.style.width = '93%'
  }
  if (exp === 3173) {
    expThree.style.width = '93.25%'
  }
  if (exp === 3174) {
    expThree.style.width = '93.5%'
  }
  if (exp === 3175) {
    expThree.style.width = '93.75%'
  }
  if (exp === 3176) {
    expThree.style.width = '94%'
  }
  if (exp === 3177) {
    expThree.style.width = '94.25%'
  }
  if (exp === 3178) {
    expThree.style.width = '94.5%'
  }
  if (exp === 3179) {
    expThree.style.width = '94.75%'
  }
  if (exp === 3180) {
    expThree.style.width = '95%'
  }
  if (exp === 3181) {
    expThree.style.width = '95.25%'
  }
  if (exp === 3182) {
    expThree.style.width = '95.5%'
  }
  if (exp === 3183) {
    expThree.style.width = '95.75%'
  }
  if (exp === 3184) {
    expThree.style.width = '96%'
  }
  if (exp === 3185) {
    expThree.style.width = '96.25%'
  }
  if (exp === 3186) {
    expThree.style.width = '96.5%'
  }
  if (exp === 3187) {
    expThree.style.width = '96.75%'
  }
  if (exp === 3188) {
    expThree.style.width = '97%'
  }
  if (exp === 3189) {
    expThree.style.width = '97.25%'
  }
  if (exp === 3190) {
    expThree.style.width = '97.5%'
  }
  if (exp === 3191) {
    expThree.style.width = '97.75%'
  }
  if (exp === 3192) {
    expThree.style.width = '98%'
  }
  if (exp === 3193) {
    expThree.style.width = '98.25%'
  }
  if (exp === 3194) {
    expThree.style.width = '98.5%'
  }
  if (exp === 3195) {
    expThree.style.width = '98.75%'
  }
  if (exp === 3196) {
    expThree.style.width = '99%'
  }
  if (exp === 3197) {
    expThree.style.width = '99.25%'
  }
  if (exp === 3198) {
    expThree.style.width = '99.5%'
  }
  if (exp === 3199) {
    expThree.style.width = '99.75%'
  }
  if (exp === 3200) {
    expThree.style.width = '100%'
  }

  }

  if (exp >= 3201 && exp <= 3600) 
  {
    expOne.style.width = '100%'
    expTwo.style.width = '100%'
    expThree.style.width = '100%'
    
    expOne.style.display = 'block'
    expTwo.style.display = 'block'
    expThree.style.display = 'block'
    expFour.style.display = 'block'
    expFive.style.display = 'none'
  if (exp === 3201) {
    expFour.style.width = '0.25%'
  }
  if (exp === 3202) {
    expFour.style.width = '0.5%'
  }
  if (exp === 3203) {
    expFour.style.width = '0.75%'
  }
  if (exp === 3204) {
    expFour.style.width = '1%'
  }
  if (exp === 3205) {
    expFour.style.width = '1.25%'
  }
  if (exp === 3206) {
    expFour.style.width = '1.5%'
  }
  if (exp === 3207) {
    expFour.style.width = '1.75%'
  }
  if (exp === 3208) {
    expFour.style.width = '2%'
  } 
  if (exp === 3209) {
    expFour.style.width = '2.25%'
  } 
  if (exp === 3210) {
    expFour.style.width = '2.5%'
  } 
  if (exp === 3211) {
    expFour.style.width = '2.75%'
  } 
  if (exp === 3212) {
    expFour.style.width = '3%'
  } 
  if (exp === 3213) {
    expFour.style.width = '3.25%'
  } 
  if (exp === 3214) {
    expFour.style.width = '3.5%'
  } 
  if (exp === 3215) {
    expFour.style.width = '3.75%'
  } 
  if (exp === 3216) {
    expFour.style.width = '4%'
  } 
  if (exp === 3217) {
    expFour.style.width = '4.25%'
  } 
  if (exp === 3218) {
    expFour.style.width = '4.5%'
  } 
  if (exp === 3219) {
    expFour.style.width = '4.75%'
  }
  if (exp === 3220) {
    expFour.style.width = '5%'
  }
  if (exp === 3221) {
    expFour.style.width = '5.25%'
  }
  if (exp === 3222) {
    expFour.style.width = '5.5%'
  }
  if (exp === 3223) {
    expFour.style.width = '5.75%'
  }
  if (exp === 3224) {
    expFour.style.width = '6%'
  }
  if (exp === 3225) {
    expFour.style.width = '6.25%'
  }
  if (exp === 3226) {
    expFour.style.width = '6.5%'
  }
  if (exp === 3227) {
    expFour.style.width = '6.75%'
  }
  if (exp === 3228) {
    expFour.style.width = '7%'
  } 
  if (exp === 3229) {
    expFour.style.width = '7.25%'
  } 
  if (exp === 3230) {
    expFour.style.width = '7.5%'
  } 
  if (exp === 3231) {
    expFour.style.width = '7.75%'
  } 
  if (exp === 3232) {
    expFour.style.width = '8%'
  } 
  if (exp === 3233) {
    expFour.style.width = '8.25%'
  } 
  if (exp === 3234) {
    expFour.style.width = '8.5%'
  } 
  if (exp === 3235) {
    expFour.style.width = '8.75%'
  } 
  if (exp === 3236) {
    expFour.style.width = '9%'
  } 
  if (exp === 3237) {
    expFour.style.width = '9.25%'
  } 
  if (exp === 3238) {
    expFour.style.width = '9.5%'
  } 
  if (exp === 3239) {
    expFour.style.width = '9.75%'
  }
  if (exp === 3240) {
    expFour.style.width = '10%'
  }
  if (exp === 3241) {
    expFour.style.width = '10.25%'
  }
  if (exp === 3242) {
    expFour.style.width = '10.5%'
  }
  if (exp === 3243) {
    expFour.style.width = '10.75%'
  }
  if (exp === 3244) {
    expFour.style.width = '11%'
  }
  if (exp === 3245) {
    expFour.style.width = '11.25%'
  }
  if (exp === 3246) {
    expFour.style.width = '11.5%'
  }
  if (exp === 3247) {
    expFour.style.width = '11.75%'
  }
  if (exp === 3248) {
    expFour.style.width = '12%'
  }
  if (exp === 3249) {
    expFour.style.width = '12.25%'
  }
  if (exp === 3250) {
    expFour.style.width = '12.5%'
  }
  if (exp === 3251) {
    expFour.style.width = '12.75%'
  }
  if (exp === 3252) {
    expFour.style.width = '13%'
  }
  if (exp === 3253) {
    expFour.style.width = '13.25%'
  }
  if (exp === 3254) {
    expFour.style.width = '13.5%'
  }
  if (exp === 3255) {
    expFour.style.width = '13.75%'
  }
  if (exp === 3256) {
    expFour.style.width = '14%'
  }
  if (exp === 3257) {
    expFour.style.width = '14.25%'
  }
  if (exp === 3258) {
    expFour.style.width = '14.5%'
  }
  if (exp === 3259) {
    expFour.style.width = '14.75%'
  }
  if (exp === 3260) {
    expFour.style.width = '15%'
  }
  if (exp === 3261) {
    expFour.style.width = '15.25%'
  }
  if (exp === 3262) {
    expFour.style.width = '15.5%'
  }
  if (exp === 3263) {
    expFour.style.width = '15.75%'
  }
  if (exp === 3264) {
    expFour.style.width = '16%'
  }
  if (exp === 3265) {
    expFour.style.width = '16.25%'
  }
  if (exp === 3266) {
    expFour.style.width = '16.5%'
  }
  if (exp === 3267) {
    expFour.style.width = '16.75%'
  }
  if (exp === 3268) {
    expFour.style.width = '17%'
  }
  if (exp === 3269) {
    expFour.style.width = '17.25%'
  }
  if (exp === 3270) {
    expFour.style.width = '17.5%'
  }
  if (exp === 3271) {
    expFour.style.width = '17.75%'
  }
  if (exp === 3272) {
    expFour.style.width = '18%'
  }
  if (exp === 3273) {
    expFour.style.width = '18.25%'
  }
  if (exp === 3274) {
    expFour.style.width = '18.5%'
  }
  if (exp === 3275) {
    expFour.style.width = '18.75%'
  }
  if (exp === 3276) {
    expFour.style.width = '19%'
  }
  if (exp === 3277) {
    expFour.style.width = '19.25%'
  }
  if (exp === 3278) {
    expFour.style.width = '19.5%'
  }
  if (exp === 3279) {
    expFour.style.width = '19.75%'
  }
  if (exp === 3280) {
    expFour.style.width = '20%'
  }
  if (exp === 3281) {
    expFour.style.width = '20.25%'
  }
  if (exp === 3282) {
    expFour.style.width = '20.5%'
  }
  if (exp === 3283) {
    expFour.style.width = '20.75%'
  }
  if (exp === 3284) {
    expFour.style.width = '21%'
  }
  if (exp === 3285) {
    expFour.style.width = '21.25%'
  }
  if (exp === 3286) {
    expFour.style.width = '21.5%'
  }
  if (exp === 3287) {
    expFour.style.width = '21.75%'
  }
  if (exp === 3288) {
    expFour.style.width = '22%'
  }
  if (exp === 3289) {
    expFour.style.wiTwo = '22.25%'
  }
  if (exp === 3290) {
    expFour.style.width = '22.5%'
  }
  if (exp === 3291) {
    expFour.style.width = '22.75%'
  }
  if (exp === 3292) {
    expFour.style.width = '23%'
  }
  if (exp === 3293) {
    expFour.style.width = '23.25%'
  }
  if (exp === 3294) {
    expFour.style.width = '23.5%'
  }
  if (exp === 3295) {
    expFour.style.width = '23.75%'
  }
  if (exp === 3296) {
    expFour.style.width = '24%'
  }
  if (exp === 3297) {
    expFour.style.width = '24.25%'
  }
  if (exp === 3298) {
    expFour.style.width = '24.5%'
  }
  if (exp === 3299) {
    expFour.style.width = '24.75%'
  }
  if (exp === 3300) {
    expFour.style.width = '25%'
  }
  if (exp === 3301) {
    expFour.style.width = '25.25%'
  }
  if (exp === 3302) {
    expFour.style.width = '25.5%'
  }
  if (exp === 3303) {
    expFour.style.width = '25.75%'
  }
  if (exp === 3304) {
    expFour.style.width = '26%'
  }
  if (exp === 3305) {
    expFour.style.width = '26.25%'
  }
  if (exp === 3306) {
    expFour.style.width = '26.5%'
  }
  if (exp === 3307) {
    expFour.style.width = '26.75%'
  }
  if (exp === 3308) {
    expFour.style.width = '27%'
  } 
  if (exp === 3309) {
    expFour.style.width = '27.25%'
  } 
  if (exp === 3310) {
    expFour.style.width = '27.5%'
  } 
  if (exp === 3311) {
    expFour.style.width = '27.75%'
  } 
  if (exp === 3312) {
    expFour.style.width = '28%'
  } 
  if (exp === 3313) {
    expFour.style.width = '28.25%'
  } 
  if (exp === 3314) {
    expFour.style.width = '28.5%'
  } 
  if (exp === 3315) {
    expFour.style.width = '28.75%'
  } 
  if (exp === 3316) {
    expFour.style.width = '29%'
  } 
  if (exp === 3317) {
    expFour.style.width = '29.25%'
  } 
  if (exp === 3318) {
    expFour.style.width = '29.5%'
  } 
  if (exp === 3319) {
    expFour.style.width = '29.75%'
  }
  if (exp === 3320) {
    expFour.style.width = '30%'
  }
  if (exp === 3321) {
    expFour.style.width = '30.25%'
  }
  if (exp === 3322) {
    expFour.style.width = '30.5%'
  }
  if (exp === 3323) {
    expFour.style.width = '30.75%'
  }
  if (exp === 3324) {
    expFour.style.width = '31%'
  }
  if (exp === 3325) {
    expFour.style.width = '31.25%'
  }
  if (exp === 3326) {
    expFour.style.width = '31.5%'
  }
  if (exp === 3327) {
    expFour.style.width = '31.75%'
  }
  if (exp === 3328) {
    expFour.style.width = '32%'
  } 
  if (exp === 3329) {
    expFour.style.width = '32.25%'
  } 
  if (exp === 3330) {
    expFour.style.width = '32.5%'
  } 
  if (exp === 3331) {
    expFour.style.width = '32.75%'
  } 
  if (exp === 3332) {
    expFour.style.width = '33%'
  } 
  if (exp === 3333) {
    expFour.style.width = '33.25%'
  } 
  if (exp === 3334) {
    expFour.style.width = '33.5%'
  } 
  if (exp === 3335) {
    expFour.style.width = '33.75%'
  } 
  if (exp === 3336) {
    expFour.style.width = '34%'
  } 
  if (exp === 3337) {
    expFour.style.width = '34.25%'
  } 
  if (exp === 3338) {
    expFour.style.width = '34.5%'
  } 
  if (exp === 3339) {
    expFour.style.width = '34.75%'
  }
  if (exp === 3340) {
    expFour.style.width = '35%'
  }
  if (exp === 3341) {
    expFour.style.width = '35.25%'
  }
  if (exp === 3342) {
    expFour.style.width = '35.5%'
  }
  if (exp === 3343) {
    expFour.style.width = '35.75%'
  }
  if (exp === 3344) {
    expFour.style.width = '36%'
  }
  if (exp === 3345) {
    expFour.style.width = '36.25%'
  }
  if (exp === 3346) {
    expFour.style.width = '36.5%'
  }
  if (exp === 3347) {
    expFour.style.width = '36.75%'
  }
  if (exp === 3348) {
    expFour.style.width = '37%'
  }
  if (exp === 3349) {
    expFour.style.width = '37.25%'
  }
  if (exp === 3350) {
    expFour.style.width = '37.5%'
  }
  if (exp === 3351) {
    expFour.style.width = '37.75%'
  }
  if (exp === 3352) {
    expFour.style.width = '38%'
  }
  if (exp === 3353) {
    expFour.style.width = '38.25%'
  }
  if (exp === 3354) {
    expFour.style.width = '38.5%'
  }
  if (exp === 3355) {
    expFour.style.width = '38.75%'
  }
  if (exp === 3356) {
    expFour.style.width = '39%'
  }
  if (exp === 3357) {
    expFour.style.width = '39.25%'
  }
  if (exp === 3358) {
    expFour.style.width = '39.5%'
  }
  if (exp === 3359) {
    expFour.style.width = '39.75%'
  }
  if (exp === 3360) {
    expFour.style.width = '40%'
  } 
  if (exp === 3331) {
    expFour.style.width = '40.25%'
  }
  if (exp === 3362) {
    expFour.style.width = '40.5%'
  }
  if (exp === 3363) {
    expFour.style.width = '40.75%'
  }
  if (exp === 3364) {
    expFour.style.width = '41%'
  }
  if (exp === 3365) {
    expFour.style.width = '41.25%'
  }
  if (exp === 3366) {
    expFour.style.width = '41.5%'
  }
  if (exp === 3367) {
    expFour.style.width = '41.75%'
  }
  if (exp === 3368) {
    expFour.style.width = '42%'
  }
  if (exp === 3369) {
    expFour.style.width = '42.25%'
  }
  if (exp === 3333) {
    expFour.style.width = '42.5%'
  }
  if (exp === 3371) {
    expFour.style.width = '42.75%'
  }
  if (exp === 3372) {
    expFour.style.width = '43%'
  }
  if (exp === 3373) {
    expFour.style.width = '43.25%'
  }
  if (exp === 3374) {
    expFour.style.width = '43.5%'
  }
  if (exp === 3375) {
    expFour.style.width = '43.75%'
  }
  if (exp === 3376) {
    expFour.style.width = '44%'
  }
  if (exp === 2337) {
    expFour.style.width = '44.25%'
  }
  if (exp === 3378) {
    expFour.style.width = '44.5%'
  }
  if (exp === 3379) {
    expFour.style.width = '44.75%'
  }
  if (exp === 3380) {
    expFour.style.width = '45%'
  }
  if (exp === 3381) {
    expFour.style.width = '45.25%'
  }
  if (exp === 3382) {
    expFour.style.width = '45.5%'
  }
  if (exp === 3383) {
    expFour.style.width = '45.75%'
  }
  if (exp === 3333) {
    expFour.style.width = '46%'
  }
  if (exp === 3334) {
    expFour.style.width = '46.25%'
  }
  if (exp === 3386) {
    expFour.style.width = '46.5%'
  }
  if (exp === 3387) {
    expFour.style.width = '46.75%'
  }
  if (exp === 3388) {
    expFour.style.width = '47%'
  }
  if (exp === 3389) {
    expFour.style.width = '47.25%'
  }
  if (exp === 3390) {
    expFour.style.width = '47.5%'
  }
  if (exp === 3391) {
    expFour.style.width = '47.75%'
  }
  if (exp === 3392) {
    expFour.style.width = '48%'
  }
  if (exp === 3393) {
    expFour.style.width = '48.25%'
  }
  if (exp === 3394) {
    expFour.style.width = '48.5%'
  }
  if (exp === 3395) {
    expFour.style.width = '48.75%'
  }
  if (exp === 3396) {
    expFour.style.width = '49%'
  }
  if (exp === 3397) {
    expFour.style.width = '49.25%'
  }
  if (exp === 3398) {
    expFour.style.width = '49.5%'
  }
  if (exp === 3399) {
    expFour.style.width = '49.75%'
  }
  if (exp === 3400) {
    expFour.style.width = '50%'
  }
  if (exp === 3341) {
    expFour.style.width = '50.25%'
  }
  if (exp === 3402) {
    expFour.style.width = '50.5%'
  }
  if (exp === 3403) {
    expFour.style.width = '50.75%'
  }
  if (exp === 3404) {
    expFour.style.width = '51%'
  }
  if (exp === 3405) {
    expFour.style.width = '51.25%'
  }
  if (exp === 3406) {
    expFour.style.width = '51.5%'
  }
  if (exp === 3407) {
    expFour.style.width = '51.75%'
  }
  if (exp === 3408) {
    expFour.style.width = '52%'
  }
  if (exp === 3409) {
    expFour.style.width = '52.25%'
  }
  if (exp === 3410) {
    expFour.style.width = '52.5%'
  }
  if (exp === 3411) {
    expFour.style.width = '52.75%'
  }
  if (exp === 3412) {
    expFour.style.width = '53%'
  }
  if (exp === 3313) {
    expFour.style.width = '53.25%'
  }
  if (exp === 3414) {
    expFour.style.width = '53.5%'
  }
  if (exp === 3415) {
    expFour.style.width = '53.75%'
  }
  if (exp === 3416) {
    expFour.style.width = '54%'
  }
  if (exp === 3417) {
    expFour.style.width = '54.25%'
  }
  if (exp === 3418) {
    expFour.style.width = '54.5%'
  }
  if (exp === 3419) {
    expFour.style.width = '54.75%'
  }
  if (exp === 3420) {
    expFour.style.width = '55%'
  }
  if (exp === 3421) {
    expFour.style.width = '55.25%'
  }
  if (exp === 3422) {
    expFour.style.width = '55.5%'
  }
  if (exp === 3423) {
    expFour.style.width = '55.75%'
  }
  if (exp === 3424) {
    expFour.style.width = '56%'
  }
  if (exp === 3425) {
    expFour.style.width = '56.25%'
  }
  if (exp === 3426) {
    expFour.style.width = '56.5%'
  }
  if (exp === 3427) {
    expFour.style.width = '56.75%'
  }
  if (exp === 3428) {
    expFour.style.width = '57%'
  }
  if (exp === 3429) {
    expFour.style.width = '57.25%'
  }
  if (exp === 3430) {
    expFour.style.width = '57.5%'
  }
  if (exp === 3431) {
    expFour.style.width = '57.75%'
  }
  if (exp === 3432) {
    expFour.style.width = '58%'
  }
  if (exp === 3433) {
    expFour.style.width = '58.25%'
  }
  if (exp === 3434) {
    expFour.style.width = '58.5%'
  }
  if (exp === 3435) {
    expFour.style.width = '58.75%'
  }
  if (exp === 3436) {
    expFour.style.width = '59%'
  }
  if (exp === 3437) {
    expFour.style.width = '59.25%'
  }
  if (exp === 3438) {
    expFour.style.width = '59.5'
  }
  if (exp === 3439) {
    expFour.style.width = '59.75%'
  }
  if (exp === 3440) {
    expFour.style.width = '60%'
  }
  if (exp === 3441) {
    expFour.style.width = '60.25%'
  }
  if (exp === 3442) {
    expFour.style.width = '60.5%'
  }
  if (exp === 3443) {
    expFour.style.width = '60.75%'
  }
  if (exp === 3444) {
    expFour.style.width = '61%'
  }
  if (exp === 3445) {
    expFour.style.width = '61.25%'
  }
  if (exp === 3446) {
    expFour.style.width = '61.5%'
  }
  if (exp === 3447) {
    expFour.style.width = '61.75%'
  }
  if (exp === 3448) {
    expFour.style.width = '62%'
  }
  if (exp === 3449) {
    expFour.style.width = '62.25%'
  }
  if (exp === 3450) {
    expFour.style.width = '62.5%'
  }
  if (exp === 3451) {
    expFour.style.width = '62.75%'
  }
  if (exp ===34252) {
    expFour.style.width = '63%'
  }
  if (exp === 3453) {
    expFour.style.width = '63.25%'
  }
  if (exp === 3454) {
    expFour.style.width = '63.5%'
  }
  if (exp === 3455) {
    expFour.style.width = '63.75%'
  }
  if (exp === 3456) {
    expFour.style.width = '64%'
  }
  if (exp === 3457) {
    expFour.style.width = '64.25%'
  }
  if (exp === 3458) {
    expFour.style.width = '64.5%'
  }
  if (exp === 3459) {
    expFour.style.width = '64.75%'
  }
  if (exp === 3460) {
    expFour.style.width = '65%'
  }
  if (exp === 3461) {
    expFour.style.width = '65.25%'
  }
  if (exp === 3462) {
    expFour.style.width = '65.5%'
  }
  if (exp === 3463) {
    expFour.style.width = '65.75%'
  }
  if (exp === 3464) {
    expFour.style.width = '66%'
  }
  if (exp === 3465) {
    expFour.style.width = '66.25%'
  }
  if (exp ===34266) {
    expFour.style.width = '66.5%'
  }
  if (exp === 3467) {
    expFour.style.width = '66.75%'
  }
  if (exp === 3468) {
    expFour.style.width = '67%'
  }
  if (exp === 3469) {
    expFour.style.width = '67.25%'
  }
  if (exp === 3470) {
    expFour.style.width = '67.5%'
  }
  if (exp === 3471) {
    expFour.style.width = '67.75%'
  }
  if (exp === 3472) {
    expFour.style.width = '68%'
  }
  if (exp === 3473) {
    expFour.style.width = '68.25%'
  }
  if (exp === 3474) {
    expFour.style.width = '68.5%'
  }
  if (exp === 3475) {
    expFour.style.width = '68.75%'
  }
  if (exp === 3476) {
    expFour.style.width = '69%'
  }
  if (exp === 3477) {
    expFour.style.width = '69.25%'
  }
  if (exp === 3478) {
    expFour.style.width = '69.5%'
  }
  if (exp === 3479) {
    expFour.style.width = '69.75%'
  }
  if (exp ===34280) {
    expFour.style.width = '70%'
  }
  if (exp === 3481) {
    expFour.style.width = '70.25%'
  }
  if (exp === 3482) {
    expFour.style.width = '70.5%'
  }
  if (exp === 3483) {
    expFour.style.width = '70.75%'
  }
  if (exp === 3484) {
    expFour.style.width = '71%'
  }
  if (exp === 3485) {
    expFour.style.width = '71.25%'
  }
  if (exp === 3486) {
    expFour.style.width = '71.5%'
  }
  if (exp === 3487) {
    expFour.style.width = '71.75%'
  }
  if (exp === 3488) {
    expFour.style.width = '72%'
  }
  if (exp === 3489) {
    expFour.style.width = '72.25%'
  }
  if (exp === 3490) {
    expFour.style.width = '72.5%'
  }
  if (exp === 3491) {
    expFour.style.width = '72.75%'
  }
  if (exp === 3492) {
    expFour.style.width = '73%'
  }
  if (exp === 3493) {
    expFour.style.width = '73.25%'
  }
  if (exp ===34294) {
    expFour.style.width = '73.5%'
  }
  if (exp === 3495) {
    expFour.style.width = '73.75%'
  }
  if (exp === 3496) {
    expFour.style.width = '74%'
  }
  if (exp === 3497) {
    expFour.style.width = '74.25%'
  }
  if (exp === 3498) {
    expFour.style.width = '74.5%'
  }
  if (exp === 3499) {
    expFour.style.width = '74.75%'
  }
  if (exp === 3500) {
    expFour.style.width = '75%'
  }
  if (exp === 3501) {
    expFour.style.width = '75.25%'
  }
  if (exp === 3502) {
    expFour.style.width = '75.5%'
  }
  if (exp === 3503) {
    expFour.style.width = '75.75%'
  }
  if (exp === 3504) {
    expFour.style.width = '76%'
  }
  if (exp === 3505) {
    expFour.style.width = '76.25%'
  }
  if (exp === 3506) {
    expFour.style.width = '76.5%'
  }
  if (exp === 3507) {
    expFour.style.width = '76.75%'
  }
  if (exp === 3508) {
    expFour.style.width = '77%'
  }
  if (exp === 3509) {
    expFour.style.width = '77.25%'
  }
  if (exp === 3510) {
    expFour.style.width = '77.5%'
  }
  if (exp === 3511) {
    expFour.style.width = '77.75%'
  }
  if (exp === 3512) {
    expFour.style.width = '78%'
  }
  if (exp === 3513) {
    expFour.style.width = '78.25%'
  }
  if (exp === 3514) {
    expFour.style.width = '78.5%'
  }
  if (exp === 3515) {
    expFour.style.width = '78.75%'
  }
  if (exp === 3516) {
    expFour.style.width = '79%'
  }
  if (exp === 3517) {
    expFour.style.width = '79.25%'
  }
  if (exp === 3518) {
    expFour.style.width = '79.5%'
  }
  if (exp === 3519) {
    expFour.style.width = '79.75%'
  }
  if (exp === 3520) {
    expFour.style.width = '80%'
  }
  if (exp === 3521) {
    expFour.style.width = '80.25%'
  }
  if (exp === 3522) {
    expFour.style.width = '80.5%'
  }
  if (exp === 3523) {
    expFour.style.width = '80.75%'
  }
  if (exp === 3524) {
    expFour.style.width = '81%'
  }
  if (exp === 3525) {
    expFour.style.width = '81.25%'
  }
  if (exp === 3526) {
    expFour.style.width = '81.5%'
  }
  if (exp === 3527) {
    expFour.style.width = '81.75%'
  }
  if (exp === 3528) {
    expFour.style.width = '82%'
  }
  if (exp === 3529) {
    expFour.style.width = '82.25%'
  }
  if (exp === 3530) {
    expFour.style.width = '82.5%'
  }
  if (exp === 3531) {
    expFour.style.width = '82.75%'
  }
  if (exp === 3532) {
    expFour.style.width = '83%'
  }
  if (exp === 3533) {
    expFour.style.width = '83.25%'
  }
  if (exp === 3534) {
    expFour.style.width = '83.5%'
  }
  if (exp === 3535) {
    expFour.style.width = '83.75%'
  }
  if (exp === 3536) {
    expFour.style.width = '84%'
  }
  if (exp === 3537) {
    expFour.style.width = '84.25%'
  }
  if (exp === 3538) {
    expFour.style.width = '84.5%'
  }
  if (exp === 3539) {
    expFour.style.width = '84.75%'
  }
  if (exp === 3540) {
    expFour.style.width = '85%'
  }
  if (exp === 3541) {
    expFour.style.width = '85.25%'
  }
  if (exp === 3542) {
    expFour.style.width = '85.5%'
  }
  if (exp === 3543) {
    expFour.style.width = '85.75%'
  }
  if (exp === 3544) {
    expFour.style.width = '86%'
  }
  if (exp === 3545) {
    expFour.style.width = '86.25%'
  }
  if (exp === 3546) {
    expFour.style.width = '86.5%'
  }
  if (exp === 3547) {
    expFour.style.width = '86.75%'
  }
  if (exp === 3548) {
    expFour.style.width = '87%'
  }
  if (exp === 3549) {
    expFour.style.width = '87.25%'
  }
  if (exp === 3550) {
    expFour.style.width = '87.5%'
  }
  if (exp === 3551) {
    expFour.style.width = '87.75%'
  }
  if (exp === 3552) {
    expFour.style.width = '88%'
  }
  if (exp === 3553) {
    expFour.style.width = '88.25%'
  }
  if (exp === 3554) {
    expFour.style.width = '88.5%'
  }
  if (exp === 3555) {
    expFour.style.width = '88.75%'
  }
  if (exp === 3556) {
    expFour.style.width = '89%'
  }
  if (exp === 3557) {
    expFour.style.width = '89.25%'
  }
  if (exp === 3558) {
    expFour.style.width = '89.5%'
  }
  if (exp === 3559) {
    expFour.style.width = '89.75%'
  }
  if (exp === 3560) {
    expFour.style.width = '90%'
  }
  if (exp === 3561) {
    expFour.style.width = '90.25%'
  }
  if (exp === 3562) {
    expFour.style.width = '90.5%'
  }
  if (exp === 3563) {
    expFour.style.width = '90.75%'
  }
  if (exp === 3564) {
    expFour.style.width = '91%'
  }
  if (exp === 3565) {
    expFour.style.width = '91.25%'
  }
  if (exp === 3566) {
    expFour.style.width = '91.5%'
  }
  if (exp === 3567) {
    expFour.style.width = '91.75%'
  }
  if (exp === 3568) {
    expFour.style.width = '92%'
  }
  if (exp === 3569) {
    expFour.style.width = '92.25%'
  }
  if (exp === 3570) {
    expFour.style.width = '92.5%'
  }
  if (exp === 3571) {
    expFour.style.width = '92.75%'
  }
  if (exp === 3572) {
    expFour.style.width = '93%'
  }
  if (exp === 3573) {
    expFour.style.width = '93.25%'
  }
  if (exp === 3574) {
    expFour.style.width = '93.5%'
  }
  if (exp === 3575) {
    expFour.style.width = '93.75%'
  }
  if (exp === 3576) {
    expFour.style.width = '94%'
  }
  if (exp === 3577) {
    expFour.style.width = '94.25%'
  }
  if (exp ==  3578) {
    expFour.style.width = '94.5%'
  }
  if (exp === 3579) {
    expFour.style.width = '94.75%'
  }
  if (exp === 3580) {
    expFour.style.width = '95%'
  }
  if (exp === 3581) {
    expFour.style.width = '95.25%'
  }
  if (exp === 3582) {
    expFour.style.width = '95.5%'
  }
  if (exp === 3583) {
    expFour.style.width = '95.75%'
  }
  if (exp === 3584) {
    expFour.style.width = '96%'
  }
  if (exp === 3585) {
    expFour.style.width = '96.25%'
  }
  if (exp === 3586) {
    expFour.style.width = '96.5%'
  }
  if (exp === 3587) {
    expFour.style.width = '96.75%'
  }
  if (exp === 3588) {
    expFour.style.width = '97%'
  }
  if (exp === 3589) {
    expFour.style.width = '97.25%'
  }
  if (exp === 3590) {
    expFour.style.width = '97.5%'
  }
  if (exp === 3591) {
    expFour.style.width = '97.75%'
  }
  if (exp === 3592) {
    expFour.style.width = '98%'
  }
  if (exp === 3593) {
    expFour.style.width = '98.25%'
  }
  if (exp === 3594) {
    expFour.style.width = '98.5%'
  }
  if (exp === 3595) {
    expFour.style.width = '98.75%'
  }
  if (exp === 3596) {
    expFour.style.width = '99%'
  }
  if (exp === 3597) {
    expFour.style.width = '99.25%'
  }
  if (exp === 3598) {
    expFour.style.width = '99.5%'
  }
  if (exp === 3599) {
    expFour.style.width = '99.75%'
  }
  if (exp === 3600) {
    expFour.style.width = '100%'
  }

  } 

  if (exp >= 3601 && exp <= 4000) 
  {
    expOne.style.width = '100%'
    expTwo.style.width = '100%'
    expThree.style.width = '100%'
    expFour.style.width = '100%'
    
    expOne.style.display = 'block'
    expTwo.style.display = 'block'
    expThree.style.display = 'block'
    expFour.style.display = 'block'
    expFive.style.display = 'block'
  if (exp === 3601) {
    expFive.style.width = '0.25%'
  }
  if (exp === 3602) {
    expFive.style.width = '0.5%'
  }
  if (exp === 3603) {
    expFive.style.width = '0.75%'
  }
  if (exp === 3604) {
    expFive.style.width = '1%'
  }
  if (exp === 3605) {
    expFive.style.width = '1.25%'
  }
  if (exp === 3606) {
    expFive.style.width = '1.5%'
  }
  if (exp === 3607) {
    expFive.style.width = '1.75%'
  }
  if (exp === 3608) {
    expFive.style.width = '2%'
  } 
  if (exp === 3609) {
    expFive.style.width = '2.25%'
  } 
  if (exp === 3610) {
    expFive.style.width = '2.5%'
  } 
  if (exp === 3611) {
    expFive.style.width = '2.75%'
  } 
  if (exp === 3612) {
    expFive.style.width = '3%'
  } 
  if (exp === 3613) {
    expFive.style.width = '3.25%'
  } 
  if (exp === 3614) {
    expFive.style.width = '3.5%'
  } 
  if (exp === 3615) {
    expFive.style.width = '3.75%'
  } 
  if (exp === 3616) {
    expFive.style.width = '4%'
  } 
  if (exp === 3617) {
    expFive.style.width = '4.25%'
  } 
  if (exp === 3618) {
    expFive.style.width = '4.5%'
  } 
  if (exp === 3619) {
    expFive.style.width = '4.75%'
  }
  if (exp === 3620) {
    expFive.style.width = '5%'
  }
  if (exp === 3621) {
    expFive.style.width = '5.25%'
  }
  if (exp === 3622) {
    expFive.style.width = '5.5%'
  }
  if (exp === 3623) {
    expFive.style.width = '5.75%'
  }
  if (exp === 3624) {
    expFive.style.width = '6%'
  }
  if (exp === 3625) {
    expFive.style.width = '6.25%'
  }
  if (exp === 3626) {
    expFive.style.width = '6.5%'
  }
  if (exp === 3627) {
    expFive.style.width = '6.75%'
  }
  if (exp === 3628) {
    expFive.style.width = '7%'
  } 
  if (exp === 3629) {
    expFive.style.width = '7.25%'
  } 
  if (exp === 3630) {
    expFive.style.width = '7.5%'
  } 
  if (exp === 3631) {
    expFive.style.width = '7.75%'
  } 
  if (exp === 3632) {
    expFive.style.width = '8%'
  } 
  if (exp === 3633) {
    expFive.style.width = '8.25%'
  } 
  if (exp === 3634) {
    expFive.style.width = '8.5%'
  } 
  if (exp === 3635) {
    expFive.style.width = '8.75%'
  } 
  if (exp === 3636) {
    expFive.style.width = '9%'
  } 
  if (exp === 3637) {
    expFive.style.width = '9.25%'
  } 
  if (exp === 3638) {
    expFive.style.width = '9.5%'
  } 
  if (exp === 3639) {
    expFive.style.width = '9.75%'
  }
  if (exp === 3640) {
    expFive.style.width = '10%'
  }
  if (exp === 3641) {
    expFive.style.width = '10.25%'
  }
  if (exp === 3642) {
    expFive.style.width = '10.5%'
  }
  if (exp === 3643) {
    expFive.style.width = '10.75%'
  }
  if (exp === 3644) {
    expFive.style.width = '11%'
  }
  if (exp === 3645) {
    expFive.style.width = '11.25%'
  }
  if (exp === 3646) {
    expFive.style.width = '11.5%'
  }
  if (exp === 3647) {
    expFive.style.width = '11.75%'
  }
  if (exp === 3648) {
    expFive.style.width = '12%'
  }
  if (exp === 3649) {
    expFive.style.width = '12.25%'
  }
  if (exp === 3650) {
    expFive.style.width = '12.5%'
  }
  if (exp === 3651) {
    expFive.style.width = '12.75%'
  }
  if (exp === 3652) {
    expFive.style.width = '13%'
  }
  if (exp === 3653) {
    expFive.style.width = '13.25%'
  }
  if (exp === 3654) {
    expFive.style.width = '13.5%'
  }
  if (exp === 3655) {
    expFive.style.width = '13.75%'
  }
  if (exp === 3656) {
    expFive.style.width = '14%'
  }
  if (exp === 3657) {
    expFive.style.width = '14.25%'
  }
  if (exp === 3658) {
    expFive.style.width = '14.5%'
  }
  if (exp === 3659) {
    expFive.style.width = '14.75%'
  }
  if (exp === 3660) {
    expFive.style.width = '15%'
  }
  if (exp === 3661) {
    expFive.style.width = '15.25%'
  }
  if (exp === 3662) {
    expFive.style.width = '15.5%'
  }
  if (exp === 3663) {
    expFive.style.width = '15.75%'
  }
  if (exp === 3664) {
    expFive.style.width = '16%'
  }
  if (exp === 3665) {
    expFive.style.width = '16.25%'
  }
  if (exp === 3666) {
    expFive.style.width = '16.5%'
  }
  if (exp === 3667) {
    expFive.style.width = '16.75%'
  }
  if (exp === 3668) {
    expFive.style.width = '17%'
  }
  if (exp === 3669) {
    expFive.style.width = '17.25%'
  }
  if (exp === 3670) {
    expFive.style.width = '17.5%'
  }
  if (exp === 3671) {
    expFive.style.width = '17.75%'
  }
  if (exp === 3672) {
    expFive.style.width = '18%'
  }
  if (exp === 3673) {
    expFive.style.width = '18.25%'
  }
  if (exp === 3674) {
    expFive.style.width = '18.5%'
  }
  if (exp === 3675) {
    expFive.style.width = '18.75%'
  }
  if (exp === 3676) {
    expFive.style.width = '19%'
  }
  if (exp === 3677) {
    expFive.style.width = '19.25%'
  }
  if (exp === 3678) {
    expFive.style.width = '19.5%'
  }
  if (exp === 3679) {
    expFive.style.width = '19.75%'
  }
  if (exp === 3680) {
    expFive.style.width = '20%'
  }
  if (exp === 3681) {
    expFive.style.width = '20.2'
  }
  if (exp === 3682) {
    expFive.style.width = '20.5%'
  }
  if (exp === 3683) {
    expFive.style.width = '20.75%'
  }
  if (exp === 3684) {
    expFive.style.width = '21%'
  }
  if (exp === 3685) {
    expFive.style.width = '21.25%'
  }
  if (exp === 3686) {
    expFive.style.width = '21.5%'
  }
  if (exp === 3687) {
    expFive.style.width = '21.75%'
  }
  if (exp === 3688) {
    expFive.style.width = '22%'
  }
  if (exp === 3689) {
    expFive.style.wiTwo = '22.25%'
  }
  if (exp === 3690) {
    expFive.style.width = '22.5%'
  }
  if (exp === 3691) {
    expFive.style.width = '22.75%'
  }
  if (exp === 3692) {
    expFive.style.width = '23%'
  }
  if (exp === 3693) {
    expFive.style.width = '23.25%'
  }
  if (exp === 3694) {
    expFive.style.width = '23.5%'
  }
  if (exp === 3695) {
    expFive.style.width = '23.75%'
  }
  if (exp === 3696) {
    expFive.style.width = '24%'
  }
  if (exp === 3697) {
    expFive.style.width = '24.25%'
  }
  if (exp === 3698) {
    expFive.style.width = '24.5%'
  }
  if (exp === 3699) {
    expFive.style.width = '24.75%'
  }
  if (exp === 3700) {
    expFive.style.width = '25%'
  }
  if (exp === 3701) {
    expFive.style.width = '25.25%'
  }
  if (exp === 3702) {
    expFive.style.width = '25.5%'
  }
  if (exp === 3703) {
    expFive.style.width = '25.75%'
  }
  if (exp === 3704) {
    expFive.style.width = '26%'
  }
  if (exp === 3705) {
    expFive.style.width = '26.25%'
  }
  if (exp === 3706) {
    expFive.style.width = '26.5%'
  }
  if (exp === 3707) {
    expFive.style.width = '26.75%'
  }
  if (exp === 3708) {
    expFive.style.width = '27%'
  } 
  if (exp === 3709) {
    expFive.style.width = '27.25%'
  } 
  if (exp === 3710) {
    expFive.style.width = '27.5%'
  } 
  if (exp === 3711) {
    expFive.style.width = '27.75%'
  } 
  if (exp === 3712) {
    expFive.style.width = '28%'
  } 
  if (exp === 3713) {
    expFive.style.width = '28.25%'
  } 
  if (exp === 3714) {
    expFive.style.width = '28.5%'
  } 
  if (exp === 3715) {
    expFive.style.width = '28.75%'
  } 
  if (exp === 3716) {
    expFive.style.width = '29%'
  } 
  if (exp === 3717) {
    expFive.style.width = '29.25%'
  } 
  if (exp === 3718) {
    expFive.style.width = '29.5%'
  } 
  if (exp === 3719) {
    expFive.style.width = '29.75%'
  }
  if (exp === 3720) {
    expFive.style.width = '30%'
  }
  if (exp === 2721) {
    expFive.style.width = '30.25%'
  }
  if (exp === 2722) {
    expFive.style.width = '30.5%'
  }
  if (exp === 2723) {
    expFive.style.width = '30.75%'
  }
  if (exp === 2724) {
    expFive.style.width = '31%'
  }
  if (exp === 2725) {
    expFive.style.width = '31.25%'
  }
  if (exp === 2726) {
    expFive.style.width = '31.5%'
  }
  if (exp === 2727) {
    expFive.style.width = '31.75%'
  }
  if (exp === 2728) {
    expFive.style.width = '32%'
  } 
  if (exp === 2729) {
    expFive.style.width = '32.25%'
  } 
  if (exp === 3730) {
    expFive.style.width = '32.5%'
  } 
  if (exp === 3731) {
    expFour.style.width = '32.75%'
  } 
  if (exp === 3732) {
    expFive.style.width = '33%'
  } 
  if (exp === 3733) {
    expFive.style.width = '33.25%'
  } 
  if (exp === 3734) {
    expFive.style.width = '33.5%'
  } 
  if (exp === 3735) {
    expFive.style.width = '33.75%'
  } 
  if (exp === 3736) {
    expFive.style.width = '34%'
  } 
  if (exp === 3737) {
    expFive.style.width = '34.25%'
  } 
  if (exp === 3738) {
    expFive.style.width = '34.5%'
  } 
  if (exp === 3739) {
    expFive.style.width = '34.75%'
  }
  if (exp === 3740) {
    expFive.style.width = '35%'
  }
  if (exp === 3741) {
    expFive.style.width = '35.25%'
  }
  if (exp === 3742) {
    expFive.style.width = '35.5%'
  }
  if (exp === 3743) {
    expFive.style.width = '35.75%'
  }
  if (exp === 3744) {
    expFive.style.width = '36%'
  }
  if (exp === 3745) {
    expFive.style.width = '36.25%'
  }
  if (exp === 3746) {
    expFive.style.width = '36.5%'
  }
  if (exp === 3747) {
    expFive.style.width = '36.75%'
  }
  if (exp === 3748) {
    expFive.style.width = '37%'
  }
  if (exp === 3749) {
    expFive.style.width = '37.25%'
  }
  if (exp === 3750) {
    expFive.style.width = '37.5%'
  }
  if (exp === 3751) {
    expFive.style.width = '37.75%'
  }
  if (exp === 3752) {
    expFive.style.width = '38%'
  }
  if (exp === 3753) {
    expFive.style.width = '38.25%'
  }
  if (exp === 3754) {
    expFive.style.width = '38.5%'
  }
  if (exp === 3755) {
    expFive.style.width = '38.75%'
  }
  if (exp === 3756) {
    expFive.style.width = '39%'
  }
  if (exp === 3757) {
    expFive.style.width = '39.25%'
  }
  if (exp === 3758) {
    expFive.style.width = '39.5%'
  }
  if (exp === 3759) {
    expFive.style.width = '39.75%'
  }
  if (exp === 3760) {
    expFive.style.width = '40%'
  } 
  if (exp === 3761) {
    expFive.style.width = '40.25%'
  }
  if (exp === 3762) {
    expFive.style.width = '40.5%'
  }
  if (exp === 3763) {
    expFive.style.width = '40.75%'
  }
  if (exp === 3764) {
    expFive.style.width = '41%'
  }
  if (exp === 3765) {
    expFive.style.width = '41.25%'
  }
  if (exp === 3766) {
    expFive.style.width = '41.5%'
  }
  if (exp === 3767) {
    expFive.style.width = '41.75%'
  }
  if (exp === 3768) {
    expFive.style.width = '42%'
  }
  if (exp === 3769) {
    expFive.style.width = '42.25%'
  }
  if (exp === 37) {
    expFive.style.width = '42.5%'
  }
  if (exp === 3771) {
    expFive.style.width = '42.75%'
  }
  if (exp === 3772) {
    expFive.style.width = '43%'
  }
  if (exp === 3773) {
    expFive.style.width = '43.25%'
  }
  if (exp === 3774) {
    expFive.style.width = '43.5%'
  }
  if (exp === 3775) {
    expFive.style.width = '43.75%'
  }
  if (exp === 3776) {
    expFive.style.width = '44%'
  }
  if (exp === 3777) {
    expFive.style.width = '44.25%'
  }
  if (exp === 3778) {
    expFive.style.width = '44.5%'
  }
  if (exp === 3779) {
    expFive.style.width = '44.75%'
  }
  if (exp === 3780) {
    expFive.style.width = '45%'
  }
  if (exp === 3781) {
    expFive.style.width = '45.25%'
  }
  if (exp === 3782) {
    expFive.style.width = '45.5%'
  }
  if (exp === 3783) {
    expFive.style.width = '45.75%'
  }
  if (exp === 3784) {
    expFive.style.width = '46%'
  }
  if (exp === 3785) {
    expFive.style.width = '46.25%'
  }
  if (exp === 3786) {
    expFive.style.width = '46.5%'
  }
  if (exp === 3787) {
    expFive.style.width = '46.75%'
  }
  if (exp === 3788) {
    expFive.style.width = '47%'
  }
  if (exp === 3789) {
    expFive.style.width = '47.25%'
  }
  if (exp === 3790) {
    expFive.style.width = '47.5%'
  }
  if (exp === 3791) {
    expFive.style.width = '47.75%'
  }
  if (exp === 3792) {
    expFive.style.width = '48%'
  }
  if (exp === 3793) {
    expFive.style.width = '48.25%'
  }
  if (exp === 3794) {
    expFive.style.width = '48.5%'
  }
  if (exp === 3795) {
    expFive.style.width = '48.75%'
  }
  if (exp === 3796) {
    expFive.style.width = '49%'
  }
  if (exp === 3797) {
    expFive.style.width = '49.25%'
  }
  if (exp === 3798) {
    expFive.style.width = '49.5%'
  }
  if (exp === 3799) {
    expFive.style.width = '49.75%'
  }
  if (exp === 3800) {
    expFive.style.width = '50%'
  }
  if (exp === 3801) {
    expFive.style.width = '50.25%'
  }
  if (exp === 3802) {
    expFive.style.width = '50.5%'
  }
  if (exp === 3803) {
    expFive.style.width = '50.75%'
  }
  if (exp === 3804) {
    expFive.style.width = '51%'
  }
  if (exp === 3805) {
    expFive.style.width = '51.25%'
  }
  if (exp === 3806) {
    expFive.style.width = '51.5%'
  }
  if (exp === 3807) {
    expFive.style.width = '51.75%'
  }
  if (exp === 3808) {
    expFive.style.width = '52%'
  }
  if (exp === 3809) {
    expFive.style.width = '52.25%'
  }
  if (exp === 3810) {
    expFive.style.width = '52.5%'
  }
  if (exp === 38) {
    expFive.style.width = '52.75%'
  }
  if (exp === 3812) {
    expFive.style.width = '53%'
  }
  if (exp === 3813) {
    expFive.style.width = '53.25%'
  }
  if (exp === 3814) {
    expFive.style.width = '53.5%'
  }
  if (exp === 3815) {
    expFive.style.width = '53.75%'
  }
  if (exp === 3816) {
    expFive.style.width = '54%'
  }
  if (exp === 3817) {
    expFive.style.width = '54.25%'
  }
  if (exp === 3818) {
    expFive.style.width = '54.5%'
  }
  if (exp === 3819) {
    expFive.style.width = '54.75%'
  }
  if (exp === 3820) {
    expFive.style.width = '55%'
  }
  if (exp === 3821) {
    expFive.style.width = '55.25%'
  }
  if (exp === 3822) {
    expFive.style.width = '55.5%'
  }
  if (exp === 3823) {
    expFive.style.width = '55.75%'
  }
  if (exp === 3824) {
    expFive.style.width = '56%'
  }
  if (exp === 3825) {
    expFive.style.width = '56.25%'
  }
  if (exp === 3826) {
    expFive.style.width = '56.5%'
  }
  if (exp === 3827) {
    expFive.style.width = '56.75%'
  }
  if (exp === 3828) {
    expFive.style.width = '57%'
  }
  if (exp === 3829) {
    expFive.style.width = '57.25%'
  }
  if (exp === 3830) {
    expFive.style.width = '57.5%'
  }
  if (exp === 3831) {
    expFive.style.width = '57.75%'
  }
  if (exp === 3832) {
    expFive.style.width = '58%'
  }
  if (exp === 3833) {
    expFive.style.width = '58.25%'
  }
  if (exp === 3834) {
    expFive.style.width = '58.5%'
  }
  if (exp === 3835) {
    expFive.style.width = '58.75%'
  }
  if (exp === 3836) {
    expFive.style.width = '59%'
  }
  if (exp === 3837) {
    expFive.style.width = '59.25%'
  }
  if (exp === 3838) {
    expFive.style.width = '59.5'
  }
  if (exp === 3839) {
    expFive.style.width = '59.75%'
  }
  if (exp === 3840) {
    expFive.style.width = '60%'
  }
  if (exp === 3841) {
    expFive.style.width = '60.25%'
  }
  if (exp === 3842) {
    expFive.style.width = '60.5%'
  }
  if (exp === 3843) {
    expFive.style.width = '60.75%'
  }
  if (exp === 3844) {
    expFive.style.width = '61%'
  }
  if (exp === 3845) {
    expFive.style.width = '61.25%'
  }
  if (exp === 3846) {
    expFive.style.width = '61.5%'
  }
  if (exp === 3847) {
    expFive.style.width = '61.75%'
  }
  if (exp === 3848) {
    expFive.style.width = '62%'
  }
  if (exp === 3849) {
    expFive.style.width = '62.25%'
  }
  if (exp === 3850) {
    expFive.style.width = '62.5%'
  }
  if (exp === 3851) {
    expFive.style.width = '62.75%'
  }
  if (exp === 3852) {
    expFive.style.width = '63%'
  }
  if (exp === 3853) {
    expFive.style.width = '63.25%'
  }
  if (exp === 3854) {
    expFive.style.width = '63.5%'
  }
  if (exp === 3855) {
    expFive.style.width = '63.75%'
  }
  if (exp === 3856) {
    expFive.style.width = '64%'
  }
  if (exp === 3857) {
    expFive.style.width = '64.25%'
  }
  if (exp === 3858) {
    expFive.style.width = '64.5%'
  }
  if (exp === 3859) {
    expFive.style.width = '64.75%'
  }
  if (exp === 3860) {
    expFive.style.width = '65%'
  }
  if (exp === 3861) {
    expFive.style.width = '65.25%'
  }
  if (exp === 3862) {
    expFive.style.width = '65.5%'
  }
  if (exp === 3863) {
    expFive.style.width = '65.75%'
  }
  if (exp === 3864) {
    expFive.style.width = '66%'
  }
  if (exp === 3865) {
    expFive.style.width = '66.25%'
  }
  if (exp === 3866) {
    expFive.style.width = '66.5%'
  }
  if (exp === 3867) {
    expFive.style.width = '66.75%'
  }
  if (exp === 3868) {
    expFive.style.width = '67%'
  }
  if (exp === 3869) {
    expFive.style.width = '67.25%'
  }
  if (exp === 3870) {
    expFive.style.width = '67.5%'
  }
  if (exp === 3871) {
    expFive.style.width = '67.75%'
  }
  if (exp === 3872) {
    expFive.style.width = '68%'
  }
  if (exp === 3873) {
    expFive.style.width = '68.25%'
  }
  if (exp === 3874) {
    expFive.style.width = '68.5%'
  }
  if (exp === 3875) {
    expFive.style.width = '68.75%'
  }
  if (exp === 3876) {
    expFive.style.width = '69%'
  }
  if (exp === 3877) {
    expFive.style.width = '69.25%'
  }
  if (exp === 3878) {
    expFive.style.width = '69.5%'
  }
  if (exp === 3879) {
    expFive.style.width = '69.75%'
  }
  if (exp === 3880) {
    expFive.style.width = '70%'
  }
  if (exp === 3881) {
    expFive.style.width = '70.25%'
  }
  if (exp === 3882) {
    expFive.style.width = '70.5%'
  }
  if (exp === 3883) {
    expFive.style.width = '70.75%'
  }
  if (exp === 3884) {
    expFive.style.width = '71%'
  }
  if (exp === 3885) {
    expFive.style.width = '71.25%'
  }
  if (exp === 3886) {
    expFive.style.width = '71.5%'
  }
  if (exp === 3887) { 
    expFive.style.width = '71.75%'
  }
  if (exp === 3888) {
    expFive.style.width = '72%'
  }
  if (exp === 3889) {
    expFive.style.width = '72.25%'
  }
  if (exp === 3890) {
    expFive.style.width = '72.5%'
  }
  if (exp === 3891) {
    expFive.style.width = '72.75%'
  }
  if (exp === 3892) {
    expFive.style.width = '73%'
  }
  if (exp === 3893) {
    expFive.style.width = '73.25%'
  }
  if (exp === 3894) {
    expFive.style.width = '73.5%'
  }
  if (exp === 3895) {
    expFive.style.width = '73.75%'
  }
  if (exp === 3896) {
    expFive.style.width = '74%'
  }
  if (exp === 3897) {
    expFive.style.width = '74.25%'
  }
  if (exp === 3898) {
    expFive.style.width = '74.5%'
  }
  if (exp === 3899) {
    expFive.style.width = '74.75%'
  }
  if (exp === 3900) {
    expFive.style.width = '75%'
  }
  if (exp === 3901) {
    expFive.style.width = '75.25%'
  }
  if (exp === 3902) {
    expFive.style.width = '75.5%'
  }
  if (exp === 3903) {
    expFive.style.width = '75.75%'
  }
  if (exp === 3904) {
    expFive.style.width = '76%'
  }
  if (exp === 3905) {
    expFive.style.width = '76.25%'
  }
  if (exp === 3906) {
    expFive.style.width = '76.5%'
  }
  if (exp === 3907) {
    expFive.style.width = '76.75%'
  }
  if (exp === 3908) {
    expFive.style.width = '77%'
  }
  if (exp === 3909) {
    expFive.style.width = '77.25%'
  }
  if (exp === 3910) {
    expFive.style.width = '77.5%'
  }
  if (exp === 3911) {
    expFive.style.width = '77.75%'
  }
  if (exp === 3912) {
    expFive.style.width = '78%'
  }
  if (exp === 3913) {
    expFive.style.width = '78.25%'
  }
  if (exp === 3914) {
    expFive.style.width = '78.5%'
  }
  if (exp === 3915) {
    expFive.style.width = '78.75%'
  }
  if (exp === 3916) {
    expFive.style.width = '79%'
  }
  if (exp === 3917) {
    expFive.style.width = '79.25%'
  }
  if (exp === 3918) {
    expFive.style.width = '79.5%'
  }
  if (exp === 3919) {
    expFive.style.width = '79.75%'
  }
  if (exp === 3920) {
    expFive.style.width = '80%'
  }
  if (exp === 3921) {
    expFive.style.width = '80.25%'
  }
  if (exp === 3922) {
    expFive.style.width = '80.5%'
  }
  if (exp === 3923) {
    expFive.style.width = '80.75%'
  }
  if (exp === 3924) {
    expFive.style.width = '81%'
  }
  if (exp === 3925) {
    expFive.style.width = '81.25%'
  }
  if (exp === 3926) {
    expFive.style.width = '81.5%'
  }
  if (exp === 3927) {
    expFive.style.width = '81.7'
  }
  if (exp === 3928) {
    expFive.style.width = '82%'
  }
  if (exp === 3929) {
    expFive.style.width = '82.25%'
  }
  if (exp === 3930) {
    expFive.style.width = '82.5%'
  }
  if (exp === 3931) {
    expFive.style.width = '82.75%'
  }
  if (exp === 3932) {
    expFive.style.width = '83%'
  }
  if (exp === 3933) {
    expFive.style.width = '83.25%'
  }
  if (exp === 3934) {
    expFive.style.width = '83.5%'
  }
  if (exp === 3935) {
    expFive.style.width = '83.75%'
  }
  if (exp === 3936) {
    expFive.style.width = '84%'
  }
  if (exp === 3937) {
    expFive.style.width = '84.25%'
  }
  if (exp === 3938) {
    expFive.style.width = '84.5%'
  }
  if (exp === 3939) {
    expFive.style.width = '84.75%'
  }
  if (exp === 3940) {
    expFive.style.width = '85%'
  }
  if (exp === 3941) {
    expFive.style.width = '85.25%'
  }
  if (exp === 3942) {
    expFive.style.width = '85.5%'
  }
  if (exp === 3943) {
    expFive.style.width = '85.75%'
  }
  if (exp === 3944) {
    expFive.style.width = '86%'
  }
  if (exp === 3945) {
    expFive.style.width = '86.25%'
  }
  if (exp === 3946) {
    expFive.style.width = '86.5%'
  }
  if (exp === 3947) {
    expFive.style.width = '86.75%'
  }
  if (exp === 3948) {
    expFour.style.width = '87%'
  }
  if (exp === 3949) {
    expFive.style.width = '87.25%'
  }
  if (exp === 3950) {
    expFive.style.width = '87.5%'
  }
  if (exp === 3951) {
    expFive.style.width = '87.75%'
  }
  if (exp === 3952) {
    expFive.style.width = '88%'
  }
  if (exp === 3953) {
    expFive.style.width = '88.25%'
  }
  if (exp === 3954) {
    expFive.style.width = '88.5%'
  }
  if (exp === 3955) {
    expFive.style.width = '88.75%'
  }
  if (exp === 3956) {
    expFive.style.width = '89%'
  }
  if (exp === 3957) {
    expFive.style.width = '89.25%'
  }
  if (exp === 3958) {
    expFive.style.width = '89.5%'
  }
  if (exp === 3959) {
    expFive.style.width = '89.75%'
  }
  if (exp === 3960) {
    expFive.style.width = '90%'
  }
  if (exp === 3961) {
    expFour.style.width = '90.25%'
  }
  if (exp === 3962) {
    expFive.style.width = '90.5%'
  }
  if (exp === 3963) {
    expFive.style.width = '90.75%'
  }
  if (exp === 3964) {
    expFive.style.width = '91%'
  }
  if (exp === 3965) {
    expFive.style.width = '91.25%'
  }
  if (exp === 3966) {
    expFive.style.width = '91.5%'
  }
  if (exp === 3967) {
    expFive.style.width = '91.75%'
  }
  if (exp === 3968) {
    expFive.style.width = '92%'
  }
  if (exp === 3969) {
    expFive.style.width = '92.25%'
  }
  if (exp === 3970) {
    expFive.style.width = '92.5%'
  }
  if (exp === 3971) {
    expFive.style.width = '92.75%'
  }
  if (exp === 3972) {
    expFive.style.width = '93%'
  }
  if (exp === 3973) {
    expFive.style.width = '93.25%'
  }
  if (exp === 3974) {
    expFive.style.width = '93.5%'
  }
  if (exp === 3975) {
    expFive.style.width = '93.75%'
  }
  if (exp === 3976) {
    expFive.style.width = '94%'
  }
  if (exp === 3977) {
    expFive.style.width = '94.25%'
  }
  if (exp === 3978) {
    expFive.style.width = '94.5%'
  }
  if (exp === 3979) {
    expFive.style.width = '94.75%'
  }
  if (exp === 3980) {
    expFive.style.width = '95%'
  }
  if (exp === 3981) {
    expFive.style.width = '95.25%'
  }
  if (exp === 3982) {
    expFive.style.width = '95.5%'
  }
  if (exp === 3983) {
    expFive.style.width = '95.75%'
  }
  if (exp === 3984) {
    expFive.style.width = '96%'
  }
  if (exp === 3985) {
    expFive.style.width = '96.25%'
  }
  if (exp === 3986) {
    expFive.style.width = '96.5%'
  }
  if (exp === 3987) {
    expFive.style.width = '96.75%'
  }
  if (exp === 3988) {
    expFive.style.width = '97%'
  }
  if (exp === 3989) {
    expFive.style.width = '97.25%'
  }
  if (exp === 3990) {
    expFive.style.width = '97.5%'
  }
  if (exp === 3991) {
    expFive.style.width = '97.75%'
  }
  if (exp === 3992) {
    expFive.style.width = '98%'
  }
  if (exp === 3993) {
    expFive.style.width = '98.25%'
  }
  if (exp === 3994) {
    expFive.style.width = '98.5%'
  }
  if (exp === 3995) {
    expFive.style.width = '98.75%'
  }
  if (exp === 3996) {
    expFive.style.width = '99%'
  }
  if (exp === 3997) {
    expFive.style.width = '99.25%'
  }
  if (exp === 3998) {
    expFive.style.width = '99.5%'
  }
  if (exp === 3999) {
    expFive.style.width = '99.75%'
  }

  } 

  if (exp === 4000) {
    expFive.style.width = '100%'

    setTimeout(() => {
      expOne.style.display = 'none'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
    }, 500)
    handleExpSix();
  }

  if (exp >= 4000) {
    handleExpSix();
    levelUpShow();
    
    playerLevel += 1;
    repPoints += 100;
    nitro += 1;
    cash += 2000;

    handleRaceLocations();
    
    document.querySelector('.player-level').innerHTML = playerLevel;
    document.querySelector('.total-rep').innerHTML = repPoints;
    document.querySelector('.total-nitro').innerHTML = nitro;
    document.querySelector('.total-cash').innerHTML = cash;
    
    document.querySelector('.player-level').innerHTML = playerLevel;
    
    document.querySelector('.the-level').innerHTML = 6;
    
    document.querySelector('.next-level').innerHTML = '5000';
    
    document.querySelector('.level-title').innerHTML = 'Rookie'
  }

  } 
}

function handleExpSix() {
  let expName = expOne;
  if (playerLevel === 6) {
     
    if (exp >= 4001 && exp <= 4200) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 4001) {
      expName.style.width = '0.5%'
    }
   if (exp === 4002) {
      expName.style.width = '1%'
    }
   if (exp === 4003) {
      expName.style.width = '1.5%'
    }
   if (exp === 4004) {
      expName.style.width = '2%'
    }
   if (exp === 4005) {
      expName.style.width = '2.5%'
    }
   if (exp === 4006) {
      expName.style.width = '3%'
    }
   if (exp === 4007) {
      expName.style.width = '3.5%'
   }
   if (exp === 4008) {
      expName.style.width = '4%'
    } 
   if (exp === 4009) {
      expName.style.width = '4.5%'
    } 
   if (exp === 4010) {
      expName.style.width = '5%'
    } 
   if (exp === 4011) {
      expName.style.width = '5.5%'
    } 
   if (exp === 4012) {
      expName.style.width = '6%'
    } 
   if (exp === 4013) {
      expName.style.width = '6.5%'
    } 
   if (exp === 4014) {
      expName.style.width = '7%'
    } 
   if (exp === 4015) {
      expName.style.width = '7.5%'
    } 
   if (exp === 4016) {
      expName.style.width = '8%'
    } 
   if (exp === 4017) {
      expName.style.width = '8.5%'
    } 
   if (exp === 4018) {
      expName.style.width = '9%'
    } 
   if (exp === 4019) {
      expName.style.width = '9.5%'
    }
   if (exp === 4020) {
      expName.style.width = '10%'
    }
   if (exp === 4021) {
     expName.style.width = '10.5%'
    }
   if (exp === 4022) {
     expName.style.width = '11%'
    }
   if (exp === 4023) {
     expName.style.width = '11.5%'
    }
   if (exp === 4024) {
     expName.style.width = '12%'
    }
   if (exp === 4025) {
     expName.style.width = '12.5%'
    }
   if (exp === 4026) {
     expName.style.width = '13%'
    }
   if (exp === 4027) {
     expName.style.width = '13.5%'
   }
   if (exp === 4028) {
     expName.style.width = '14%'
    } 
   if (exp === 4029) {
     expName.style.width = '14.5%'
    } 
   if (exp === 4030) {
     expName.style.width = '15%'
    } 
   if (exp === 4031) {
     expName.style.width = '15.5%'
    } 
   if (exp === 4032) {
     expName.style.width = '16%'
    } 
   if (exp === 4033) {
      expName.style.width = '16.5%'
    } 
   if (exp === 4034) {
      expName.style.width = '17%'
    } 
   if (exp === 4035) {
      expName.style.width = '17.5%'
    } 
   if (exp === 4036) {
      expName.style.width = '18%'
    } 
   if (exp === 4037) {
      expName.style.width = '18.5%'
    } 
   if (exp === 4038) {
      expName.style.width = '19%'
    } 
   if (exp === 4039) {
      expName.style.width = '19.5%'
    }
   if (exp === 4040) {
      expName.style.width = '20%'
    }
   if (exp === 4041) {
      expName.style.width = '20.5%'
    }
   if (exp === 4042) {
      expName.style.width = '21%'
    }
   if (exp === 4043) {
      expName.style.width = '21.5%'
    }
   if (exp === 4044) {
      expName.style.width = '22%'
    }
   if (exp === 4045) {
      expName.style.width = '22.5%'
    }
   if (exp === 4046) {
      expName.style.width = '23%'
    }
   if (exp === 4047) {
      expName.style.width = '23.5%'
    }
   if (exp === 4048) {
      expName.style.width = '24%'
    }
   if (exp === 4049) {
      expName.style.width = '24.5%'
    }
   if (exp === 4050) {
      expName.style.width = '25%'
    }
   if (exp === 4051) {
      expName.style.width = '25.5%'
    }
   if (exp === 4052) {
      expName.style.width = '26%'
    }
   if (exp === 4053) {
      expName.style.width = '26.5%'
    }
   if (exp === 4054) {
      expName.style.width = '27%'
    }
   if (exp === 4055) {
      expName.style.width = '27.5%'
    }
    if (exp === 4056) {
      expName.style.width = '28%'
    }
    if (exp === 4057) {
      expName.style.width = '28.5%'
    }
    if (exp === 4058) {
      expName.style.width = '29%'
    }
    if (exp === 4059) {
      expName.style.width = '29.5%'
    }
    if (exp === 4060) {
      expName.style.width = '30%'
    }
    if (exp === 4061) {
      expName.style.width = '30.5%'
    }
    if (exp === 4062) {
      expName.style.width = '31%'
    }
    if (exp === 4063) {
      expName.style.width = '31.5%'
    }
    if (exp === 4064) {
      expName.style.width = '32%'
    }
    if (exp === 4065) {
      expName.style.width = '32.5%'
    }
    if (exp === 4066) {
      expName.style.width = '33%'
    }
    if (exp === 4067) {
      expName.style.width = '33.5%'
    }
    if (exp === 4068) {
      expName.style.width = '34%'
    }
    if (exp === 4069) {
      expName.style.width = '34.5%'
    }
    if (exp === 4070) {
      expName.style.width = '35%'
    }
    if (exp === 4071) {
      expName.style.width = '35.5%'
    }
    if (exp === 4072) {
      expName.style.width = '36%'
    }
    if (exp === 4073) {
      expName.style.width = '36.5%'
    }
    if (exp === 4074) {
      expName.style.width = '37%'
    }
    if (exp === 4075) {
      expName.style.width = '37.5%'
    }
    if (exp === 4076) {
      expName.style.width = '38%'
    }
    if (exp === 4077) {
      expName.style.width = '38.5%'
    }
    if (exp === 4078) {
      expName.style.width = '39%'
    }
    if (exp === 4079) {
      expName.style.width = '39.5%'
    }
    if (exp === 4080) {
      expName.style.width = '40%'
    }
    if (exp === 4081) {
      expName.style.width = '40.5%'
    }
    if (exp === 4082) {
      expName.style.width = '41%'
    }
    if (exp === 4083) {
      expName.style.width = '41.5%'
    }
    if (exp === 4084) {
      expName.style.width = '42%'
    }
    if (exp === 4085) {
      expName.style.width = '42.5%'
    }
    if (exp === 4086) {
      expName.style.width = '43%'
    }
    if (exp === 4087) {
      expName.style.width = '43.5%'
    }
    if (exp === 4088) {
      expName.style.width = '44%'
    }
    if (exp === 4089) {
      expName.style.width = '44.5%'
    }
    if (exp === 4090) {
      expName.style.width = '45%'
    }
    if (exp === 4091) {
      expName.style.width = '45.5%'
    }
    if (exp === 4092) {
      expName.style.width = '46%'
    }
    if (exp === 4093) {
      expName.style.width = '46.5%'
    }
    if (exp === 4094) {
      expName.style.width = '47%'
    }
    if (exp === 4095) {
      expName.style.width = '47.5%'
    }
    if (exp === 4096) {
      expName.style.width = '48%'
    }
    if (exp === 4097) {
      expName.style.width = '48.5%'
    }
    if (exp === 4098) {
      expName.style.width = '49%'
    }
    if (exp === 4099) {
      expName.style.width = '49.5%'
    }
    if (exp === 4100) {
      expName.style.width = '50%'
    }
   if (exp === 4101) {
      expName.style.width = '50.5%'
    }
   if (exp === 4102) {
      expName.style.width = '51%'
    }
   if (exp === 4103) {
      expName.style.width = '51.5%'
    }
   if (exp === 4104) {
      expName.style.width = '52%'
    }
   if (exp === 4105) {
      expName.style.width = '52.5%'
    }
   if (exp === 4106) {
      expName.style.width = '53%'
    }
   if (exp === 4107) {
      expName.style.width = '53.5%'
   }
   if (exp === 4108) {
      expName.style.width = '54%'
    } 
   if (exp === 4109) {
      expName.style.width = '54.5%'
    } 
   if (exp === 4110) {
      expName.style.width = '55%'
    } 
   if (exp === 4111) {
      expName.style.width = '55.5%'
    } 
   if (exp === 4112) {
      expName.style.width = '56%'
    } 
   if (exp === 4113) {
      expName.style.width = '56.5%'
    } 
   if (exp === 4114) {
      expName.style.width = '57%'
    } 
   if (exp === 4115) {
      expName.style.width = '57.5%'
    } 
   if (exp === 4116) {
      expName.style.width = '58%'
    } 
   if (exp === 4117) {
      expName.style.width = '58.5%'
    } 
   if (exp === 4118) {
      expName.style.width = '59%'
    } 
   if (exp === 4119) {
      expName.style.width = '59.5%'
    }
   if (exp === 4120) {
      expName.style.width = '60%'
    }
   if (exp === 4121) {
     expName.style.width = '60.5%'
    }
   if (exp === 4122) {
     expName.style.width = '61%'
    }
   if (exp === 4123) {
     expName.style.width = '61.5%'
    }
   if (exp === 4124) {
     expName.style.width = '62%'
    }
   if (exp === 4125) {
     expName.style.width = '62.5%'
    }
   if (exp === 4126) {
     expName.style.width = '63%'
    }
   if (exp === 4127) {
     expName.style.width = '63.5%'
   }
   if (exp === 4128) {
     expName.style.width = '64%'
    } 
   if (exp === 4129) {
     expName.style.width = '64.5%'
    } 
   if (exp === 4130) {
     expName.style.width = '65%'
    } 
   if (exp === 4131) {
     expName.style.width = '65.5%'
    } 
   if (exp === 4132) {
     expName.style.width = '66%'
    } 
   if (exp === 4133) {
      expName.style.width = '66.5%'
    } 
   if (exp === 4134) {
      expName.style.width = '67%'
    } 
   if (exp === 4135) {
      expName.style.width = '67.5%'
    } 
   if (exp === 4136) {
      expName.style.width = '68%'
    } 
   if (exp === 4137) {
      expName.style.width = '68.5%'
    } 
   if (exp === 4138) {
      expName.style.width = '69%'
    } 
   if (exp === 4139) {
      expName.style.width = '69.5%'
    }
   if (exp === 4140) {
      expName.style.width = '70%'
    }
   if (exp === 4141) {
      expName.style.width = '70.5%'
    }
   if (exp === 4142) {
      expName.style.width = '71%'
    }
   if (exp === 4143) {
      expName.style.width = '71.5%'
    }
   if (exp === 4144) {
      expName.style.width = '72%'
    }
   if (exp === 4145) {
      expName.style.width = '72.5%'
    }
   if (exp === 4146) {
      expName.style.width = '73%'
    }
   if (exp === 4147) {
      expName.style.width = '73.5%'
    }
   if (exp === 4148) {
      expName.style.width = '74%'
    }
   if (exp === 4149) {
      expName.style.width = '74.5%'
    }
   if (exp === 4150) {
      expName.style.width = '75%'
    }
   if (exp === 4151) {
      expName.style.width = '75.5%'
    }
   if (exp === 4152) {
      expName.style.width = '76%'
    }
   if (exp === 4153) {
      expName.style.width = '76.5%'
    }
   if (exp === 4154) {
      expName.style.width = '77%'
    }
   if (exp === 4155) {
      expName.style.width = '77.5%'
    }
    if (exp === 4156) {
      expName.style.width = '78%'
    }
    if (exp === 4157) {
      expName.style.width = '78.5%'
    }
    if (exp === 4158) {
      expName.style.width = '79%'
    }
    if (exp === 4159) {
      expName.style.width = '79.5%'
    }
    if (exp === 4160) {
      expName.style.width = '80%'
    }
    if (exp === 4161) {
      exppName.style.width = '80.5%'
    }
    if (exp === 4162) {
      expName.style.width = '81%'
    }
    if (exp === 4163) {
      expName.style.width = '81.5%'
    }
    if (exp === 4164) {
      expName.style.width = '82%'
    }
    if (exp === 4165) {
      expName.style.width = '82.5%'
    }
    if (exp === 4166) {
      expName.style.width = '83%'
    }
    if (exp === 4167) {
      expName.style.width = '83.5%'
    }
    if (exp === 4168) {
      expName.style.width = '84%'
    }
    if (exp === 4169) {
      expName.style.width = '84.5%'
    }
    if (exp === 4170) {
      expName.style.width = '85%'
    }
    if (exp === 4171) {
      expName.style.width = '85.5%'
    }
    if (exp === 4172) {
      expName.style.width = '86%'
    }
    if (exp === 4173) {
      expName.style.width = '86.5%'
    }
    if (exp === 4174) {
      expName.style.width = '87%'
    }
    if (exp === 4175) {
      expName.style.width = '87.5%'
    }
    if (exp === 4176) {
      expName.style.width = '88%'
    }
    if (exp === 4177) {
      expName.style.width = '88.5%'
    }
    if (exp === 4178) {
      expName.style.width = '89%'
    }
    if (exp === 4179) {
      expName.style.width = '89.5%'
    }
    if (exp === 4180) {
      expName.style.width = '90%'
    }
    if (exp === 4181) {
      expName.style.width = '90.5%'
    }
    if (exp === 4182) {
      expName.style.width = '91%'
    }
    if (exp === 4183) {
      expName.style.width = '91.5%'
    }
    if (exp === 4184) {
      expName.style.width = '92%'
    }
    if (exp === 4185) {
      expName.style.width = '92.5%'
    }
    if (exp === 4186) {
      expName.style.width = '93%'
    }
    if (exp === 4187) {
      expName.style.width = '93.5%'
    }
    if (exp === 4188) {
      expName.style.width = '94%'
    }
    if (exp === 4189) {
      expName.style.width = '94.5%'
    }
    if (exp === 4190) {
      expName.style.width = '95%'
    }
    if (exp === 4191) {
      expName.style.width = '95.5%'
    }
    if (exp === 4192) {
      expName.style.width = '96%'
    }
    if (exp === 4193) {
      expName.style.width = '96.5%'
    }
    if (exp === 4194) {
      expName.style.width = '97%'
    }
    if (exp === 4195) {
      expName.style.width = '97.5%'
    }
    if (exp === 4196) {
      expName.style.width = '98%'
    }
    if (exp === 4197) {
      expName.style.width = '98.5%'
    }
    if (exp === 4198) {
      expName.style.width = '99%'
    }
    if (exp === 4199) {
      expName.style.width = '99.5%'
    }
    if (exp === 4200) {
      expName.style.width = '100%'
    }
     
    }

    if (exp >= 4201 && exp <= 4400) 
    {
      expName = expTwo;

      expOne.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 4201) {
      expName.style.width = '0.5%'
    }
   if (exp === 4202) {
      expName.style.width = '1%'
    }
   if (exp === 4203) {
      expName.style.width = '1.5%'
    }
   if (exp === 4204) {
      expName.style.width = '2%'
    }
   if (exp === 4205) {
      expName.style.width = '2.5%'
    }
   if (exp === 4206) {
      expName.style.width = '3%'
    }
   if (exp === 4207) {
      expName.style.width = '3.5%'
   }
   if (exp === 4208) {
      expName.style.width = '4%'
    } 
   if (exp === 4209) {
      expName.style.width = '4.5%'
    } 
   if (exp === 4210) {
      expName.style.width = '5%'
    } 
   if (exp === 4211) {
      expName.style.width = '5.5%'
    } 
   if (exp === 4212) {
      expName.style.width = '6%'
    } 
   if (exp === 4213) {
      expName.style.width = '6.5%'
    } 
   if (exp === 4214) {
      expName.style.width = '7%'
    } 
   if (exp === 4215) {
      expName.style.width = '7.5%'
    } 
   if (exp === 4216) {
      expName.style.width = '8%'
    } 
   if (exp === 4217) {
      expName.style.width = '8.5%'
    } 
   if (exp === 4218) {
      expName.style.width = '9%'
    } 
   if (exp === 4219) {
      expName.style.width = '9.5%'
    }
   if (exp === 4220) {
      expName.style.width = '10%'
    }
   if (exp === 4221) {
     expName.style.width = '10.5%'
    }
   if (exp === 4222) {
     expName.style.width = '11%'
    }
   if (exp === 4223) {
     expName.style.width = '11.5%'
    }
   if (exp === 4224) {
     expName.style.width = '12%'
    }
   if (exp === 4225) {
     expName.style.width = '12.5%'
    }
   if (exp === 4226) {
     expName.style.width = '13%'
    }
   if (exp === 4227) {
     expName.style.width = '13.5%'
   }
   if (exp === 4228) {
     expName.style.width = '14%'
    } 
   if (exp === 4229) {
     expName.style.width = '14.5%'
    } 
   if (exp === 4230) {
     expName.style.width = '15%'
    } 
   if (exp === 4231) {
     expName.style.width = '15.5%'
    } 
   if (exp === 4232) {
     expName.style.width = '16%'
    } 
   if (exp === 4233) {
      expName.style.width = '16.5%'
    } 
   if (exp === 4234) {
      expName.style.width = '17%'
    } 
   if (exp === 4235) {
      expName.style.width = '17.5%'
    } 
   if (exp === 4236) {
      expName.style.width = '18%'
    } 
   if (exp === 4237) {
      expName.style.width = '18.5%'
    } 
   if (exp === 4238) {
      expName.style.width = '19%'
    } 
   if (exp === 4239) {
      expName.style.width = '19.5%'
    }
   if (exp === 4240) {
      expName.style.width = '20%'
    }
   if (exp === 4241) {
      expName.style.width = '20.5%'
    }
   if (exp === 4242) {
      expName.style.width = '21%'
    }
   if (exp === 4243) {
      expName.style.width = '21.5%'
    }
   if (exp === 4244) {
      expName.style.width = '22%'
    }
   if (exp === 4245) {
      expName.style.width = '22.5%'
    }
   if (exp === 4246) {
      expName.style.width = '23%'
    }
   if (exp === 4247) {
      expName.style.width = '23.5%'
    }
   if (exp === 4248) {
      expName.style.width = '24%'
    }
   if (exp === 4249) {
      expName.style.width = '24.5%'
    }
   if (exp === 4250) {
      expName.style.width = '25%'
    }
   if (exp === 4251) {
      expName.style.width = '25.5%'
    }
   if (exp === 4252) {
      expName.style.width = '26%'
    }
   if (exp === 4253) {
      expName.style.width = '26.5%'
    }
   if (exp === 4254) {
      expName.style.width = '27%'
    }
   if (exp === 4255) {
      expName.style.width = '27.5%'
    }
    if (exp === 4256) {
      expName.style.width = '28%'
    }
    if (exp === 4257) {
      expName.style.width = '28.5%'
    }
    if (exp === 4258) {
      expName.style.width = '29%'
    }
    if (exp === 4259) {
      expName.style.width = '29.5%'
    }
    if (exp === 4260) {
      expName.style.width = '30%'
    }
    if (exp === 4261) {
      expName.style.width = '30.5%'
    }
    if (exp === 4262) {
      expName.style.width = '31%'
    }
    if (exp === 4263) {
      expName.style.width = '31.5%'
    }
    if (exp === 4264) {
      expName.style.width = '32%'
    }
    if (exp === 4265) {
      expName.style.width = '32.5%'
    }
    if (exp === 4266) {
      expName.style.width = '33%'
    }
    if (exp === 4267) {
      expName.style.width = '33.5%'
    }
    if (exp === 4268) {
      expName.style.width = '34%'
    }
    if (exp === 4269) {
      expName.style.width = '34.5%'
    }
    if (exp === 4270) {
      expName.style.width = '35%'
    }
    if (exp === 4271) {
      expName.style.width = '35.5%'
    }
    if (exp === 4272) {
      expName.style.width = '36%'
    }
    if (exp === 4273) {
      expName.style.width = '36.5%'
    }
    if (exp === 4274) {
      expName.style.width = '37%'
    }
    if (exp === 4275) {
      expName.style.width = '37.5%'
    }
    if (exp === 4276) {
      expName.style.width = '38%'
    }
    if (exp === 4277) {
      expName.style.width = '38.5%'
    }
    if (exp === 4278) {
      expName.style.width = '39%'
    }
    if (exp === 4279) {
      expName.style.width = '39.5%'
    }
    if (exp === 4280) {
      expName.style.width = '40%'
    }
    if (exp === 4281) {
      expName.style.width = '40.5%'
    }
    if (exp === 4282) {
      expName.style.width = '41%'
    }
    if (exp === 4283) {
      expName.style.width = '41.5%'
    }
    if (exp === 4284) {
      expName.style.width = '42%'
    }
    if (exp === 4285) {
      expName.style.width = '42.5%'
    }
    if (exp === 4286) {
      expName.style.width = '43%'
    }
    if (exp === 4287) {
      expName.style.width = '43.5%'
    }
    if (exp === 4288) {
      expName.style.width = '44%'
    }
    if (exp === 4289) {
      expName.style.width = '44.5%'
    }
    if (exp === 4290) {
      expName.style.width = '45%'
    }
    if (exp === 4291) {
      expName.style.width = '45.5%'
    }
    if (exp === 4292) {
      expName.style.width = '46%'
    }
    if (exp === 4293) {
      expName.style.width = '46.5%'
    }
    if (exp === 4294) {
      expName.style.width = '47%'
    }
    if (exp === 4295) {
      expName.style.width = '47.5%'
    }
    if (exp === 4296) {
      expName.style.width = '48%'
    }
    if (exp === 4297) {
      expName.style.width = '48.5%'
    }
    if (exp === 4298) {
      expName.style.width = '49%'
    }
    if (exp === 4299) {
      expName.style.width = '49.5%'
    }
    if (exp === 4300) {
      expName.style.width = '50%'
    }
   if (exp === 4301) {
      expName.style.width = '50.5%'
    }
   if (exp === 4302) {
      expName.style.width = '51%'
    }
   if (exp === 4303) {
      expName.style.width = '51.5%'
    }
   if (exp === 4304) {
      expName.style.width = '52%'
    }
   if (exp === 4305) {
      expName.style.width = '52.5%'
    }
   if (exp === 4306) {
      expName.style.width = '53%'
    }
   if (exp === 4307) {
      expName.style.width = '53.5%'
   }
   if (exp === 4308) {
      expName.style.width = '54%'
    } 
   if (exp === 4309) {
      expName.style.width = '54.5%'
    } 
   if (exp === 4310) {
      expName.style.width = '55%'
    } 
   if (exp === 4311) {
      expName.style.width = '55.5%'
    } 
   if (exp === 4312) {
      expName.style.width = '56%'
    } 
   if (exp === 4313) {
      expName.style.width = '56.5%'
    } 
   if (exp === 4314) {
      expName.style.width = '57%'
    } 
   if (exp === 4315) {
      expName.style.width = '57.5%'
    } 
   if (exp === 4316) {
      expName.style.width = '58%'
    } 
   if (exp === 4317) {
      expName.style.width = '58.5%'
    } 
   if (exp === 4318) {
      expName.style.width = '59%'
    } 
   if (exp === 4319) {
      expName.style.width = '59.5%'
    }
   if (exp === 4320) {
      expName.style.width = '60%'
    }
   if (exp === 4321) {
     expName.style.width = '60.5%'
    }
   if (exp === 4322) {
     expName.style.width = '61%'
    }
   if (exp === 4323) {
     expName.style.width = '61.5%'
    }
   if (exp === 4324) {
     expName.style.width = '62%'
    }
   if (exp === 4325) {
     expName.style.width = '62.5%'
    }
   if (exp === 4326) {
     expName.style.width = '63%'
    }
   if (exp === 4327) {
     expName.style.width = '63.5%'
   }
   if (exp === 4328) {
     expName.style.width = '64%'
    } 
   if (exp === 4329) {
     expName.style.width = '64.5%'
    } 
   if (exp === 4330) {
     expName.style.width = '65%'
    } 
   if (exp === 4331) {
     expName.style.width = '65.5%'
    } 
   if (exp === 4332) {
     expName.style.width = '66%'
    } 
   if (exp === 4333) {
      expName.style.width = '66.5%'
    } 
   if (exp === 4334) {
      expName.style.width = '67%'
    } 
   if (exp === 4335) {
      expName.style.width = '67.5%'
    } 
   if (exp === 4336) {
      expName.style.width = '68%'
    } 
   if (exp === 4337) {
      expName.style.width = '68.5%'
    } 
   if (exp === 4338) {
      expName.style.width = '69%'
    } 
   if (exp === 4339) {
      expName.style.width = '69.5%'
    }
   if (exp === 4340) {
      expName.style.width = '70%'
    }
   if (exp === 4341) {
      expName.style.width = '70.5%'
    }
   if (exp === 4342) {
      expName.style.width = '71%'
    }
   if (exp === 4343) {
      expName.style.width = '71.5%'
    }
   if (exp === 4344) {
      expName.style.width = '72%'
    }
   if (exp === 4345) {
      expName.style.width = '72.5%'
    }
   if (exp === 4346) {
      expName.style.width = '73%'
    }
   if (exp === 4347) {
      expName.style.width = '73.5%'
    }
   if (exp === 4348) {
      expName.style.width = '74%'
    }
   if (exp === 4349) {
      expName.style.width = '74.5%'
    }
   if (exp === 4350) {
      expName.style.width = '75%'
    }
   if (exp === 4351) {
      expName.style.width = '75.5%'
    }
   if (exp === 4352) {
      expName.style.width = '76%'
    }
   if (exp === 4353) {
      expName.style.width = '76.5%'
    }
   if (exp === 4354) {
      expName.style.width = '77%'
    }
   if (exp === 4355) {
      expName.style.width = '77.5%'
    }
    if (exp === 4356) {
      expName.style.width = '78%'
    }
    if (exp === 4357) {
      expName.style.width = '78.5%'
    }
    if (exp === 4358) {
      expName.style.width = '79%'
    }
    if (exp === 4359) {
      expName.style.width = '79.5%'
    }
    if (exp === 4360) {
      expName.style.width = '80%'
    }
    if (exp === 4361) {
      exppName.style.width = '80.5%'
    }
    if (exp === 4362) {
      expName.style.width = '81%'
    }
    if (exp === 4363) {
      expName.style.width = '81.5%'
    }
    if (exp === 4364) {
      expName.style.width = '82%'
    }
    if (exp === 4365) {
      expName.style.width = '82.5%'
    }
    if (exp === 4366) {
      expName.style.width = '83%'
    }
    if (exp === 4367) {
      expName.style.width = '83.5%'
    }
    if (exp === 4368) {
      expName.style.width = '84%'
    }
    if (exp === 4369) {
      expName.style.width = '84.5%'
    }
    if (exp === 4370) {
      expName.style.width = '85%'
    }
    if (exp === 4371) {
      expName.style.width = '85.5%'
    }
    if (exp === 4372) {
      expName.style.width = '86%'
    }
    if (exp === 4373) {
      expName.style.width = '86.5%'
    }
    if (exp === 4374) {
      expName.style.width = '87%'
    }
    if (exp === 4375) {
      expName.style.width = '87.5%'
    }
    if (exp === 4376) {
      expName.style.width = '88%'
    }
    if (exp === 4377) {
      expName.style.width = '88.5%'
    }
    if (exp === 4378) {
      expName.style.width = '89%'
    }
    if (exp === 4379) {
      expName.style.width = '89.5%'
    }
    if (exp === 4380) {
      expName.style.width = '90%'
    }
    if (exp === 4381) {
      expName.style.width = '90.5%'
    }
    if (exp === 4382) {
      expName.style.width = '91%'
    }
    if (exp === 4383) {
      expName.style.width = '91.5%'
    }
    if (exp === 4384) {
      expName.style.width = '92%'
    }
    if (exp === 4385) {
      expName.style.width = '92.5%'
    }
    if (exp === 4386) {
      expName.style.width = '93%'
    }
    if (exp === 4387) {
      expName.style.width = '93.5%'
    }
    if (exp === 4388) {
      expName.style.width = '94%'
    }
    if (exp === 4389) {
      expName.style.width = '94.5%'
    }
    if (exp === 4390) {
      expName.style.width = '95%'
    }
    if (exp === 4391) {
      expName.style.width = '95.5%'
    }
    if (exp === 4392) {
      expName.style.width = '96%'
    }
    if (exp === 4393) {
      expName.style.width = '96.5%'
    }
    if (exp === 4394) {
      expName.style.width = '97%'
    }
    if (exp === 4395) {
      expName.style.width = '97.5%'
    }
    if (exp === 4396) {
      expName.style.width = '98%'
    }
    if (exp === 4397) {
      expName.style.width = '98.5%'
    }
    if (exp === 4398) {
      expName.style.width = '99%'
    }
    if (exp === 4399) {
      expName.style.width = '99.5%'
    }
    if (exp === 4400) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 4401 && exp <= 4600)
    {
      expName = expThree;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 4401) {
      expName.style.width = '0.5%'
    }
   if (exp === 4402) {
      expName.style.width = '1%'
    }
   if (exp === 4403) {
      expName.style.width = '1.5%'
    }
   if (exp === 4404) {
      expName.style.width = '2%'
    }
   if (exp === 4405) {
      expName.style.width = '2.5%'
    }
   if (exp === 4406) {
      expName.style.width = '3%'
    }
   if (exp === 4407) {
      expName.style.width = '3.5%'
   }
   if (exp === 4408) {
      expName.style.width = '4%'
    } 
   if (exp === 4409) {
      expName.style.width = '4.5%'
    } 
   if (exp === 4410) {
      expName.style.width = '5%'
    } 
   if (exp === 4411) {
      expName.style.width = '5.5%'
    } 
   if (exp === 4412) {
      expName.style.width = '6%'
    } 
   if (exp === 4413) {
      expName.style.width = '6.5%'
    } 
   if (exp === 4414) {
      expName.style.width = '7%'
    } 
   if (exp === 4415) {
      expName.style.width = '7.5%'
    } 
   if (exp === 4416) {
      expName.style.width = '8%'
    } 
   if (exp === 4417) {
      expName.style.width = '8.5%'
    } 
   if (exp === 4418) {
      expName.style.width = '9%'
    } 
   if (exp === 4419) {
      expName.style.width = '9.5%'
    }
   if (exp === 4420) {
      expName.style.width = '10%'
    }
   if (exp === 4421) {
     expName.style.width = '10.5%'
    }
   if (exp === 4422) {
     expName.style.width = '11%'
    }
   if (exp === 4423) {
     expName.style.width = '11.5%'
    }
   if (exp === 4424) {
     expName.style.width = '12%'
    }
   if (exp === 4425) {
     expName.style.width = '12.5%'
    }
   if (exp === 4426) {
     expName.style.width = '13%'
    }
   if (exp === 4427) {
     expName.style.width = '13.5%'
   }
   if (exp === 4428) {
     expName.style.width = '14%'
    } 
   if (exp === 4429) {
     expName.style.width = '14.5%'
    } 
   if (exp === 4430) {
     expName.style.width = '15%'
    } 
   if (exp === 4431) {
     expName.style.width = '15.5%'
    } 
   if (exp === 4432) {
     expName.style.width = '16%'
    } 
   if (exp === 4433) {
      expName.style.width = '16.5%'
    } 
   if (exp === 4434) {
      expName.style.width = '17%'
    } 
   if (exp === 4435) {
      expName.style.width = '17.5%'
    } 
   if (exp === 4436) {
      expName.style.width = '18%'
    } 
   if (exp === 4437) {
      expName.style.width = '18.5%'
    } 
   if (exp === 4438) {
      expName.style.width = '19%'
    } 
   if (exp === 4439) {
      expName.style.width = '19.5%'
    }
   if (exp === 4440) {
      expName.style.width = '20%'
    }
   if (exp === 4441) {
      expName.style.width = '20.5%'
    }
   if (exp === 4442) {
      expName.style.width = '21%'
    }
   if (exp === 4443) {
      expName.style.width = '21.5%'
    }
   if (exp === 4444) {
      expName.style.width = '22%'
    }
   if (exp === 4445) {
      expName.style.width = '22.5%'
    }
   if (exp === 4446) {
      expName.style.width = '23%'
    }
   if (exp === 4447) {
      expName.style.width = '23.5%'
    }
   if (exp === 4448) {
      expName.style.width = '24%'
    }
   if (exp === 4449) {
      expName.style.width = '24.5%'
    }
   if (exp === 4450) {
      expName.style.width = '25%'
    }
   if (exp === 4451) {
      expName.style.width = '25.5%'
    }
   if (exp === 4452) {
      expName.style.width = '26%'
    }
   if (exp === 4453) {
      expName.style.width = '26.5%'
    }
   if (exp === 4454) {
      expName.style.width = '27%'
    }
   if (exp === 4455) {
      expName.style.width = '27.5%'
    }
    if (exp === 4456) {
      expName.style.width = '28%'
    }
    if (exp === 4457) {
      expName.style.width = '28.5%'
    }
    if (exp === 4458) {
      expName.style.width = '29%'
    }
    if (exp === 4459) {
      expName.style.width = '29.5%'
    }
    if (exp === 4460) {
      expName.style.width = '30%'
    }
    if (exp === 4461) {
      expName.style.width = '30.5%'
    }
    if (exp === 4462) {
      expName.style.width = '31%'
    }
    if (exp === 4463) {
      expName.style.width = '31.5%'
    }
    if (exp === 4464) {
      expName.style.width = '32%'
    }
    if (exp === 4465) {
      expName.style.width = '32.5%'
    }
    if (exp === 4466) {
      expName.style.width = '33%'
    }
    if (exp === 4467) {
      expName.style.width = '33.5%'
    }
    if (exp === 4468) {
      expName.style.width = '34%'
    }
    if (exp === 4469) {
      expName.style.width = '34.5%'
    }
    if (exp === 4470) {
      expName.style.width = '35%'
    }
    if (exp === 4471) {
      expName.style.width = '35.5%'
    }
    if (exp === 4472) {
      expName.style.width = '36%'
    }
    if (exp === 4473) {
      expName.style.width = '36.5%'
    }
    if (exp === 4474) {
      expName.style.width = '37%'
    }
    if (exp === 4475) {
      expName.style.width = '37.5%'
    }
    if (exp === 4476) {
      expName.style.width = '38%'
    }
    if (exp === 4477) {
      expName.style.width = '38.5%'
    }
    if (exp === 4478) {
      expName.style.width = '39%'
    }
    if (exp === 4479) {
      expName.style.width = '39.5%'
    }
    if (exp === 4480) {
      expName.style.width = '40%'
    }
    if (exp === 4481) {
      expName.style.width = '40.5%'
    }
    if (exp === 4482) {
      expName.style.width = '41%'
    }
    if (exp === 4483) {
      expName.style.width = '41.5%'
    }
    if (exp === 4484) {
      expName.style.width = '42%'
    }
    if (exp === 4485) {
      expName.style.width = '42.5%'
    }
    if (exp === 4486) {
      expName.style.width = '43%'
    }
    if (exp === 4487) {
      expName.style.width = '43.5%'
    }
    if (exp === 4488) {
      expName.style.width = '44%'
    }
    if (exp === 4489) {
      expName.style.width = '44.5%'
    }
    if (exp === 4490) {
      expName.style.width = '45%'
    }
    if (exp === 4491) {
      expName.style.width = '45.5%'
    }
    if (exp === 4492) {
      expName.style.width = '46%'
    }
    if (exp === 4493) {
      expName.style.width = '46.5%'
    }
    if (exp === 4494) {
      expName.style.width = '47%'
    }
    if (exp === 4495) {
      expName.style.width = '47.5%'
    }
    if (exp === 4496) {
      expName.style.width = '48%'
    }
    if (exp === 4497) {
      expName.style.width = '48.5%'
    }
    if (exp === 4498) {
      expName.style.width = '49%'
    }
    if (exp === 4499) {
      expName.style.width = '49.5%'
    }
    if (exp === 4500) {
      expName.style.width = '50%'
    }
   if (exp === 4501) {
      expName.style.width = '50.5%'
    }
   if (exp === 4502) {
      expName.style.width = '51%'
    }
   if (exp === 4503) {
      expName.style.width = '51.5%'
    }
   if (exp === 4504) {
      expName.style.width = '52%'
    }
   if (exp === 4505) {
      expName.style.width = '52.5%'
    }
   if (exp === 4506) {
      expName.style.width = '53%'
    }
   if (exp === 4507) {
      expName.style.width = '53.5%'
   }
   if (exp === 4508) {
      expName.style.width = '54%'
    } 
   if (exp === 4509) {
      expName.style.width = '54.5%'
    } 
   if (exp === 4510) {
      expName.style.width = '55%'
    } 
   if (exp === 4511) {
      expName.style.width = '55.5%'
    } 
   if (exp === 4512) {
      expName.style.width = '56%'
    } 
   if (exp === 4513) {
      expName.style.width = '56.5%'
    } 
   if (exp === 4514) {
      expName.style.width = '57%'
    } 
   if (exp === 4515) {
      expName.style.width = '57.5%'
    } 
   if (exp === 4516) {
      expName.style.width = '58%'
    } 
   if (exp === 4517) {
      expName.style.width = '58.5%'
    } 
   if (exp === 4518) {
      expName.style.width = '59%'
    } 
   if (exp === 4519) {
      expName.style.width = '59.5%'
    }
   if (exp === 4510) {
      expName.style.width = '60%'
    }
   if (exp === 4521) {
     expName.style.width = '60.5%'
    }
   if (exp === 4522) {
     expName.style.width = '61%'
    }
   if (exp === 4523) {
     expName.style.width = '61.5%'
    }
   if (exp === 4524) {
     expName.style.width = '62%'
    }
   if (exp === 4525) {
     expName.style.width = '62.5%'
    }
   if (exp === 4526) {
     expName.style.width = '63%'
    }
   if (exp === 4527) {
     expName.style.width = '63.5%'
   }
   if (exp === 4528) {
     expName.style.width = '64%'
    } 
   if (exp === 4529) {
     expName.style.width = '64.5%'
    } 
   if (exp === 4530) {
     expName.style.width = '65%'
    } 
   if (exp === 4531) {
     expName.style.width = '65.5%'
    } 
   if (exp === 4532) {
     expName.style.width = '66%'
    } 
   if (exp === 4533) {
      expName.style.width = '66.5%'
    } 
   if (exp === 4534) {
      expName.style.width = '67%'
    } 
   if (exp === 4535) {
      expName.style.width = '67.5%'
    } 
   if (exp === 4536) {
      expName.style.width = '68%'
    } 
   if (exp === 4537) {
      expName.style.width = '68.5%'
    } 
   if (exp === 4538) {
      expName.style.width = '69%'
    } 
   if (exp === 4539) {
      expName.style.width = '69.5%'
    }
   if (exp === 4540) {
      expName.style.width = '70%'
    }
   if (exp === 4541) {
      expName.style.width = '70.5%'
    }
   if (exp === 4542) {
      expName.style.width = '71%'
    }
   if (exp === 4543) {
      expName.style.width = '71.5%'
    }
   if (exp === 4544) {
      expName.style.width = '72%'
    }
   if (exp === 4545) {
      expName.style.width = '72.5%'
    }
   if (exp === 4546) {
      expName.style.width = '73%'
    }
   if (exp === 4547) {
      expName.style.width = '73.5%'
    }
   if (exp === 4548) {
      expName.style.width = '74%'
    }
   if (exp === 4549) {
      expName.style.width = '74.5%'
    }
   if (exp === 4550) {
      expName.style.width = '75%'
    }
   if (exp === 4551) {
      expName.style.width = '75.5%'
    }
   if (exp === 4552) {
      expName.style.width = '76%'
    }
   if (exp === 4553) {
      expName.style.width = '76.5%'
    }
   if (exp === 4554) {
      expName.style.width = '77%'
    }
   if (exp === 4555) {
      expName.style.width = '77.5%'
    }
    if (exp === 4556) {
      expName.style.width = '78%'
    }
    if (exp === 4557) {
      expName.style.width = '78.5%'
    }
    if (exp === 4558) {
      expName.style.width = '79%'
    }
    if (exp === 4559) {
      expName.style.width = '79.5%'
    }
    if (exp === 4560) {
      expName.style.width = '80%'
    }
    if (exp === 4561) {
      exppName.style.width = '80.5%'
    }
    if (exp === 4562) {
      expName.style.width = '81%'
    }
    if (exp === 4563) {
      expName.style.width = '81.5%'
    }
    if (exp === 4564) {
      expName.style.width = '82%'
    }
    if (exp === 4565) {
      expName.style.width = '82.5%'
    }
    if (exp === 4566) {
      expName.style.width = '83%'
    }
    if (exp === 4567) {
      expName.style.width = '83.5%'
    }
    if (exp === 4568) {
      expName.style.width = '84%'
    }
    if (exp === 4569) {
      expName.style.width = '84.5%'
    }
    if (exp === 4570) {
      expName.style.width = '85%'
    }
    if (exp === 4571) {
      expName.style.width = '85.5%'
    }
    if (exp === 4572) {
      expName.style.width = '86%'
    }
    if (exp === 4573) {
      expName.style.width = '86.5%'
    }
    if (exp === 4574) {
      expName.style.width = '87%'
    }
    if (exp === 4575) {
      expName.style.width = '87.5%'
    }
    if (exp === 4576) {
      expName.style.width = '88%'
    }
    if (exp === 4577) {
      expName.style.width = '88.5%'
    }
    if (exp === 4578) {
      expName.style.width = '89%'
    }
    if (exp === 4579) {
      expName.style.width = '89.5%'
    }
    if (exp === 4580) {
      expName.style.width = '90%'
    }
    if (exp === 4581) {
      expName.style.width = '90.5%'
    }
    if (exp === 4582) {
      expName.style.width = '91%'
    }
    if (exp === 4583) {
      expName.style.width = '91.5%'
    }
    if (exp === 4584) {
      expName.style.width = '92%'
    }
    if (exp === 4585) {
      expName.style.width = '92.5%'
    }
    if (exp === 4586) {
      expName.style.width = '93%'
    }
    if (exp === 4587) {
      expName.style.width = '93.5%'
    }
    if (exp === 4588) {
      expName.style.width = '94%'
    }
    if (exp === 4589) {
      expName.style.width = '94.5%'
    }
    if (exp === 4590) {
      expName.style.width = '95%'
    }
    if (exp === 4591) {
      expName.style.width = '95.5%'
    }
    if (exp === 4592) {
      expName.style.width = '96%'
    }
    if (exp === 4593) {
      expName.style.width = '96.5%'
    }
    if (exp === 4594) {
      expName.style.width = '97%'
    }
    if (exp === 4595) {
      expName.style.width = '97.5%'
    }
    if (exp === 4596) {
      expName.style.width = '98%'
    }
    if (exp === 4597) {
      expName.style.width = '98.5%'
    }
    if (exp === 4598) {
      expName.style.width = '99%'
    }
    if (exp === 4599) {
      expName.style.width = '99.5%'
    }
    if (exp === 4600) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 4601 && exp <= 4800) 
    {
      expName = expFour;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 4601) {
      expName.style.width = '0.5%'
    }
   if (exp === 4602) {
      expName.style.width = '1%'
    }
   if (exp === 4603) {
      expName.style.width = '1.5%'
    }
   if (exp === 4604) {
      expName.style.width = '2%'
    }
   if (exp === 4605) {
      expName.style.width = '2.5%'
    }
   if (exp === 4606) {
      expName.style.width = '3%'
   }
   if (exp === 4607) {
      expName.style.width = '3.5%'
   }
   if (exp === 4608) {
      expName.style.width = '4%'
    } 
   if (exp === 4609) {
      expName.style.width = '4.5%'
    } 
   if (exp === 4610) {
      expName.style.width = '5%'
    } 
   if (exp === 4611) {
      expName.style.width = '5.5%'
    } 
   if (exp === 4612) {
      expName.style.width = '6%'
    } 
   if (exp === 4613) {
      expName.style.width = '6.5%'
    } 
   if (exp === 4614) {
      expName.style.width = '7%'
    } 
   if (exp === 4615) {
      expName.style.width = '7.5%'
    } 
   if (exp === 4616) {
      expName.style.width = '8%'
    } 
   if (exp === 4617) {
      expName.style.width = '8.5%'
   } 
   if (exp === 4618) {
      expName.style.width = '9%'
    } 
   if (exp === 4619) {
      expName.style.width = '9.5%'
    }
   if (exp === 4620) {
      expName.style.width = '10%'
    }
   if (exp === 4621) {
     expName.style.width = '10.5%'
    }
   if (exp === 4622) {
     expName.style.width = '11%'
    }
   if (exp === 4623) {
     expName.style.width = '11.5%'
    }
   if (exp === 4624) {
     expName.style.width = '12%'
    }
   if (exp === 4625) {
     expName.style.width = '12.5%'
    }
   if (exp === 4626) {
     expName.style.width = '13%'
    }
   if (exp === 4627) {
     expName.style.width = '13.5%'
   }
   if (exp === 4628) {
     expName.style.width = '14%'
   }
   if (exp === 4629) {
     expName.style.width = '14.5%'
    } 
   if (exp === 4630) {
     expName.style.width = '15%'
    } 
   if (exp === 4631) {
     expName.style.width = '15.5%'
    } 
   if (exp === 4632) {
     expName.style.width = '16%'
    } 
   if (exp === 4633) {
      expName.style.width = '16.5%'
    } 
   if (exp === 4634) {
      expName.style.width = '17%'
    } 
   if (exp === 4635) {
      expName.style.width = '17.5%'
    } 
   if (exp === 4636) {
      expName.style.width = '18%'
    } 
   if (exp === 4637) {
      expName.style.width = '18.5%'
    } 
   if (exp === 4638) {
      expName.style.width = '19%'
    } 
   if (exp === 4639) {
      expName.style.width = '19.5%'
   }
   if (exp === 4640) {
      expName.style.width = '20%'
    }
   if (exp === 4641) {
      expName.style.width = '20.5%'
    }
   if (exp === 4642) {
      expName.style.width = '21%'
    }
   if (exp === 4643) {
      expName.style.width = '21.5%'
    }
   if (exp === 4644) {
      expName.style.width = '22%'
    }
   if (exp === 4645) {
      expName.style.width = '22.5%'
    }
   if (exp === 4646) {
      expName.style.width = '23%'
    }
   if (exp === 4647) {
      expName.style.width = '23.5%'
    }
   if (exp === 4648) {
      expName.style.width = '24%'
    }
   if (exp === 4649) {
      expName.style.width = '24.5%'
    }
   if (exp === 4650) {
      expName.style.width = '25%'
  6}
   if (exp === 4651) {
      expName.style.width = '25.5%'
    }
   if (exp === 4652) {
      expName.style.width = '26%'
    }
   if (exp === 4653) {
      expName.style.width = '26.5%'
    }
   if (exp === 4654) {
      expName.style.width = '27%'
    }
   if (exp === 4655) {
      expName.style.width = '27.5%'
    }
    if (exp === 4656) {
      expName.style.width = '28%'
    }
    if (exp === 4657) {
      expName.style.width = '28.5%'
    }
    if (exp === 4658) {
      expName.style.width = '29%'
    }
    if (exp === 4659) {
      expName.style.width = '29.5%'
    }
    if (exp === 4660) {
      expName.style.width = '30%'
    }
    if (exp === 4661) {
      expName.style.width = '30.5%'
     }
    if (exp === 4662) {
      expName.style.width = '31%'
    }
    if (exp === 4663) {
      expName.style.width = '31.5%'
    }
    if (exp === 4664) {
      expName.style.width = '32%'
    }
    if (exp === 4665) {
      expName.style.width = '32.5%'
    }
    if (exp === 4666) {
      expName.style.width = '33%'
    }
    if (exp === 4667) {
      expName.style.width = '33.5%'
    }
    if (exp === 4668) {
      expName.style.width = '34%'
    }
    if (exp === 4669) {
      expName.style.width = '34.5%'
    }
    if (exp === 4670) {
      expName.style.width = '35%'
    }
    if (exp === 4671) {
      expName.style.width = '35.5%'
    }
    if (exp === 4672) {
      expName.style.width = '36%'
    }
    if (exp === 4673) {
      expName.style.width = '36.5%'
    }
    if (exp === 4674) {
      expName.style.width = '37%'
    }
    if (exp === 4675) {
      expName.style.width = '37.5%'
    }
    if (exp === 4676) {
      expName.style.width = '38%'
    }
    if (exp === 4677) {
      expName.style.width = '38.5%'
    }
    if (exp === 4678) {
      expName.style.width = '39%'
    }
    if (exp === 4679) {
      expName.style.width = '39.5%'
    }
    if (exp === 4680) {
      expName.style.width = '40%'
    }
    if (exp === 4681) {
      expName.style.width = '40.5%'
    }
    if (exp === 4682) {
      expName.style.width = '41%'
    }
    if (exp === 4683) {
      expName.style.width = '41.5%'
    }
    if (exp === 4684) {
      expName.style.width = '42%'
    }
    if (exp === 4685) {
      expName.style.width = '42.5%'
    }
    if (exp === 4686) {
      expName.style.width = '43%'
    }
    if (exp === 4687) {
      expName.style.width = '43.5%'
    }
    if (exp === 4688) {
      expName.style.width = '44%'
    }
    if (exp === 4689) {
      expName.style.width = '44.5%'
    }
    if (exp === 4690) {
      expName.style.width = '45%'
    }
    if (exp === 4691) {
      expName.style.width = '45.5%'
    }
    if (exp === 4692) {
      expName.style.width = '46%'
    }
    if (exp === 4693) {
      expName.style.width = '46.5%'
    }
    if (exp === 4694) {
      expName.style.width = '47%'
    }
    if (exp === 4695) {
      expName.style.width = '47.5%'
    }
    if (exp === 4696) {
      expName.style.width = '48%'
    }
    if (exp === 4697) {
      expName.style.width = '48.5%'
    }
    if (exp === 4698) {
      expName.style.width = '49%'
    }
    if (exp === 4699) {
      expName.style.width = '49.5%'
    }
    if (exp === 4700) {
      expName.style.width = '50%'
    }
   if (exp === 4701) {
      expName.style.width = '50.5%'
    }
   if (exp === 4702) {
      expName.style.width = '51%'
    }
   if (exp === 4703) {
      expName.style.width = '51.5%'
1  }
   if (exp === 4704) {
      expName.style.width = '52%'
    }
   if (exp === 4705) {
      expName.style.width = '52.5%'
    }
   if (exp === 4706) {
      expName.style.width = '53%'
    }
   if (exp === 4707) {
      expName.style.width = '53.5%'
   }
   if (exp === 4708) {
      expName.style.width = '54%'
    } 
   if (exp === 4709) {
      expName.style.width = '54.5%'
    } 
   if (exp === 4710) {
      expName.style.width = '55%'
    } 
   if (exp === 4711) {
      expName.style.width = '55.5%'
    } 
   if (exp === 4712) {
      expName.style.width = '56%'
    } 
   if (exp === 4713) {
      expName.style.width = '56.5%'
    } 
   if (exp === 4714) {
      expName.style.width = '57%'
    } 
   if (exp === 4715) {
      expName.style.width = '57.5%'
    } 
   if (exp === 4716) {
      expName.style.width = '58%'
    } 
   if (exp === 4717) {
      expName.style.width = '58.5%'
    } 
   if (exp === 4718) {
      expName.style.width = '59%'
    } 
   if (exp === 4719) {
      expName.style.width = '59.5%'
    }
   if (exp === 4710) {
      expName.style.width = '60%'
    }
   if (exp === 4721) {
     expName.style.width = '60.5%'
    }
   if (exp === 4722) {
     expName.style.width = '61%'
    }
   if (exp === 4723) {
     expName.style.width = '61.5%'
    }
   if (exp === 4724) {
     expName.style.width = '62%'
    }
   if (exp === 4725) {
     expName.style.width = '62.5%'
    }
   if (exp === 4726) {
     expName.style.width = '63%'
    }
   if (exp === 4727) {
     expName.style.width = '63.5%'
   }
   if (exp === 4728) {
     expName.style.width = '64%'
    } 
   if (exp === 4729) {
     expName.style.width = '64.5%'
    } 
   if (exp === 4730) {
     expName.style.width = '65%'
    } 
   if (exp === 4731) {
     expName.style.width = '65.5%'
    } 
   if (exp === 4732) {
     expName.style.width = '66%'
    } 
   if (exp === 4733) {
      expName.style.width = '66.5%'
    } 
   if (exp === 4734) {
      expName.style.width = '67%'
    } 
   if (exp === 4735) {
      expName.style.width = '67.5%'
    } 
   if (exp === 4736) {
      expName.style.width = '68%'
    } 
   if (exp === 4737) {
      expName.style.width = '68.5%'
    } 
   if (exp === 4738) {
      expName.style.width = '69%'
    } 
   if (exp === 4739) {
      expName.style.width = '69.5%'
    }
   if (exp === 4740) {
      expName.style.width = '70%'
    }
   if (exp === 4741) {
      expName.style.width = '70.5%'
    }
   if (exp === 4742) {
      expName.style.width = '71%'
    }
   if (exp === 4743) {
      expName.style.width = '71.5%'
    }
   if (exp === 4744) {
      expName.style.width = '72%'
    }
   if (exp === 4745) {
      expName.style.width = '72.5%'
    }
   if (exp === 4746) {
      expName.style.width = '73%'
    }
   if (exp === 4747) {
      expName.style.width = '73.5%'
    }
   if (exp === 4748) {
      expName.style.width = '74%'
    }
   if (exp === 4749) {
      expName.style.width = '74.5%'
    }
   if (exp === 4750) {
      expName.style.width = '75%'
    }
   if (exp === 4751) {
      expName.style.width = '75.5%'
    }
   if (exp === 4752) {
      expName.style.width = '76%'
    }
   if (exp === 4753) {
      expName.style.width = '76.5%'
    }
   if (exp === 4754) {
      expName.style.width = '77%'
    }
   if (exp === 4755) {
      expName.style.width = '77.5%'
    }
    if (exp === 4756) {
      expName.style.width = '78%'
    }
    if (exp === 4757) {
      expName.style.width = '78.5%'
    }
    if (exp === 4758) {
      expName.style.width = '79%'
    }
    if (exp === 4759) {
      expName.style.width = '79.5%'
    }
    if (exp === 4760) {
      expName.style.width = '80%'
    }
    if (exp === 4761) {
      exppName.style.width = '80.5%'
    }
    if (exp === 4762) {
      expName.style.width = '81%'
    }
    if (exp === 4763) {
      expName.style.width = '81.5%'
    }
    if (exp === 4764) {
      expName.style.width = '82%'
    }
    if (exp === 4765) {
      expName.style.width = '82.5%'
    }
    if (exp === 4766) {
      expName.style.width = '83%'
    }
    if (exp === 4767) {
      expName.style.width = '83.5%'
    }
    if (exp === 4768) {
      expName.style.width = '84%'
    }
    if (exp === 4769) {
      expName.style.width = '84.5%'
    }
    if (exp === 4770) {
      expName.style.width = '85%'
    }
    if (exp === 4771) {
      expName.style.width = '85.5%'
    }
    if (exp === 4772) {
      expName.style.width = '86%'
    }
    if (exp === 4773) {
      expName.style.width = '86.5%'
    }
    if (exp === 4774) {
      expName.style.width = '87%'
    }
    if (exp === 4775) {
      expName.style.width = '87.5%'
    }
    if (exp === 4776) {
      expName.style.width = '88%'
    }
    if (exp === 4777) {
      expName.style.width = '88.5%'
    }
    if (exp === 4778) {
      expName.style.width = '89%'
    }
    if (exp === 4779) {
      expName.style.width = '89.5%'
    }
    if (exp === 4780) {
      expName.style.width = '90%'
    }
    if (exp === 4781) {
      expName.style.width = '90.5%'
    }
    if (exp === 4782) {
      expName.style.width = '91%'
    }
    if (exp === 4783) {
      expName.style.width = '91.5%'
    }
    if (exp === 4784) {
      expName.style.width = '92%'
    }
    if (exp === 4785) {
      expName.style.width = '92.5%'
    }
    if (exp === 4786) {
      expName.style.width = '93%'
    }
    if (exp === 4787) {
      expName.style.width = '93.5%'
    }
    if (exp === 4788) {
      expName.style.width = '94%'
    }
    if (exp === 4789) {
      expName.style.width = '94.5%'
    }
    if (exp === 4790) {
      expName.style.width = '95%'
    }
    if (exp === 4791) {
      expName.style.width = '95.5%'
    }
    if (exp === 4792) {
      expName.style.width = '96%'
    }
    if (exp === 4793) {
      expName.style.width = '96.5%'
    }
    if (exp === 4794) {
      expName.style.width = '97%'
    }
    if (exp === 4795) {
      expName.style.width = '97.5%'
    }
    if (exp === 4796) {
      expName.style.width = '98%'
    }
    if (exp === 4797) {
      expName.style.width = '98.5%'
    }
    if (exp === 4798) {
      expName.style.width = '99%'
    }
    if (exp === 4799) {
      expName.style.width = '99.5%'
    }
    if (exp === 4800) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 4801 && exp <= 5000) 
    {
      expName = expFive;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 4801) {
      expName.style.width = '0.5%'
    }
   if (exp === 4802) {
      expName.style.width = '1%'
    }
   if (exp === 4803) {
      expName.style.width = '1.5%'
    }
   if (exp === 4804) {
      expName.style.width = '2%'
    }
   if (exp === 4805) {
      expName.style.width = '2.5%'
    }
   if (exp === 4806) {
      expName.style.width = '3%'
   }
   if (exp === 4807) {
      expName.style.width = '3.5%'
   }
   if (exp === 4808) {
      expName.style.width = '4%'
    } 
   if (exp === 4809) {
      expName.style.width = '4.5%'
    } 
   if (exp === 4810) {
      expName.style.width = '5%'
    } 
   if (exp === 4811) {
      expName.style.width = '5.5%'
    } 
   if (exp === 4812) {
      expName.style.width = '6%'
    } 
   if (exp === 4813) {
      expName.style.width = '6.5%'
    } 
   if (exp === 4814) {
      expName.style.width = '7%'
    } 
   if (exp === 4815) {
      expName.style.width = '7.5%'
    } 
   if (exp === 4816) {
      expName.style.width = '8%'
    } 
   if (exp === 4817) {
      expName.style.width = '8.5%'
   } 
   if (exp === 4818) {
      expName.style.width = '9%'
    } 
   if (exp === 4819) {
      expName.style.width = '9.5%'
    }
   if (exp === 4820) {
      expName.style.width = '10%'
    }
   if (exp === 4821) {
     expName.style.width = '10.5%'
    }
   if (exp === 4822) {
     expName.style.width = '11%'
    }
   if (exp === 4823) {
     expName.style.width = '11.5%'
    }
   if (exp === 4824) {
     expName.style.width = '12%'
    }
   if (exp === 4825) {
     expName.style.width = '12.5%'
    }
   if (exp === 4826) {
     expName.style.width = '13%'
    }
   if (exp === 4827) {
     expName.style.width = '13.5%'
   }
   if (exp === 4828) {
     expName.style.width = '14%'
   }
   if (exp === 4829) {
     expName.style.width = '14.5%'
    } 
   if (exp === 4830) {
     expName.style.width = '15%'
    } 
   if (exp === 4831) {
     expName.style.width = '15.5%'
    } 
   if (exp === 4832) {
     expName.style.width = '16%'
    } 
   if (exp === 4833) {
      expName.style.width = '16.5%'
    } 
   if (exp === 4834) {
      expName.style.width = '17%'
    } 
   if (exp === 4835) {
      expName.style.width = '17.5%'
    } 
   if (exp === 4836) {
      expName.style.width = '18%'
    } 
   if (exp === 4837) {
      expName.style.width = '18.5%'
    } 
   if (exp === 4838) {
      expName.style.width = '19%'
    } 
   if (exp === 4839) {
      expName.style.width = '19.5%'
   }
   if (exp === 4840) {
      expName.style.width = '20%'
    }
   if (exp === 4841) {
      expName.style.width = '20.5%'
    }
   if (exp === 4842) {
      expName.style.width = '21%'
    }
   if (exp === 4843) {
      expName.style.width = '21.5%'
    }
   if (exp === 4844) {
      expName.style.width = '22%'
    }
   if (exp === 4845) {
      expName.style.width = '22.5%'
    }
   if (exp === 4846) {
      expName.style.width = '23%'
    }
   if (exp === 4847) {
      expName.style.width = '23.5%'
    }
   if (exp === 4848) {
      expName.style.width = '24%'
    }
   if (exp === 4849) {
      expName.style.width = '24.5%'
    }
   if (exp === 4850) {
      expName.style.width = '25%'
   }
   if (exp === 4851) {
      expName.style.width = '25.5%'
    }
   if (exp === 4852) {
      expName.style.width = '26%'
    }
   if (exp === 4853) {
      expName.style.width = '26.5%'
    }
   if (exp === 4854) {
      expName.style.width = '27%'
    }
   if (exp === 4855) {
      expName.style.width = '27.5%'
    }
    if (exp === 4856) {
      expName.style.width = '28%'
    }
    if (exp === 4857) {
      expName.style.width = '28.5%'
    }
    if (exp === 4858) {
      expName.style.width = '29%'
    }
    if (exp === 4859) {
      expName.style.width = '29.5%'
    }
    if (exp === 4860) {
      expName.style.width = '30%'
    }
    if (exp === 4861) {
      expName.style.width = '30.5%'
    }
    if (exp === 4862) {
      expName.style.width = '31%'
    }
    if (exp === 4863) {
      expName.style.width = '31.5%'
    }
    if (exp === 4864) {
      expName.style.width = '32%'
    }
    if (exp === 4865) {
      expName.style.width = '32.5%'
    }
    if (exp === 4866) {
      expName.style.width = '33%'
    }
    if (exp === 4867) {
      expName.style.width = '33.5%'
    }
    if (exp === 4868) {
      expName.style.width = '34%'
    }
    if (exp === 4869) {
      expName.style.width = '34.5%'
    }
    if (exp === 4870) {
      expName.style.width = '35%'
    }
    if (exp === 4871) {
      expName.style.width = '35.5%'
    }
    if (exp === 4872) {
      expName.style.width = '36%'
    }
    if (exp === 4873) {
      expName.style.width = '36.5%'
    }
    if (exp === 4874) {
      expName.style.width = '37%'
    }
    if (exp === 4875) {
      expName.style.width = '37.5%'
    }
    if (exp === 4876) {
      expName.style.width = '38%'
    }
    if (exp === 4877) {
      expName.style.width = '38.5%'
    }
    if (exp === 4878) {
      expName.style.width = '39%'
    }
    if (exp === 4879) {
      expName.style.width = '39.5%'
    }
    if (exp === 4880) {
      expName.style.width = '40%'
    }
    if (exp === 4881) {
      expName.style.width = '40.5%'
    }
    if (exp === 4882) {
      expName.style.width = '41%'
    }
    if (exp === 4883) {
      expName.style.width = '41.5%'
    }
    if (exp === 4884) {
      expName.style.width = '42%'
    }
    if (exp === 4885) {
      expName.style.width = '42.5%'
    }
    if (exp === 4886) {
      expName.style.width = '43%'
    }
    if (exp === 4887) {
      expName.style.width = '43.5%'
    }
    if (exp === 4888) {
      expName.style.width = '44%'
    }
    if (exp === 4889) {
      expName.style.width = '44.5%'
    }
    if (exp === 4890) {
      expName.style.width = '45%'
    }
    if (exp === 4891) {
      expName.style.width = '45.5%'
    }
    if (exp === 4892) {
      expName.style.width = '46%'
    }
    if (exp === 4893) {
      expName.style.width = '46.5%'
    }
    if (exp === 4894) {
      expName.style.width = '47%'
    }
    if (exp === 4895) {
      expName.style.width = '47.5%'
    }
    if (exp === 4896) {
      expName.style.width = '48%'
    }
    if (exp === 4897) {
      expName.style.width = '48.5%'
    }
    if (exp === 4898) {
      expName.style.width = '49%'
    }
    if (exp === 4899) {
      expName.style.width = '49.5%'
    }
    if (exp === 4900) {
      expName.style.width = '50%'
    }
   if (exp === 4901) {
      expName.style.width = '50.5%'
    }
   if (exp === 4902) {
      expName.style.width = '51%'
    }
   if (exp === 4903) {
      expName.style.width = '51.5%'
   }
   if (exp === 4904) {
      expName.style.width = '52%'
    }
   if (exp === 4905) {
      expName.style.width = '52.5%'
    }
   if (exp === 4906) {
      expName.style.width = '53%'
    }
   if (exp === 4907) {
      expName.style.width = '53.5%'
   }
   if (exp === 4908) {
      expName.style.width = '54%'
    } 
   if (exp === 4909) {
      expName.style.width = '54.5%'
    } 
   if (exp === 4910) {
      expName.style.width = '55%'
    } 
   if (exp === 4911) {
      expName.style.width = '55.5%'
    } 
   if (exp === 4912) {
      expName.style.width = '56%'
    } 
   if (exp === 4913) {
      expName.style.width = '56.5%'
    } 
   if (exp === 4914) {
      expName.style.width = '57%'
    } 
   if (exp === 4915) {
      expName.style.width = '57.5%'
    } 
   if (exp === 4916) {
      expName.style.width = '58%'
    } 
   if (exp === 4917) {
      expName.style.width = '58.5%'
    } 
   if (exp === 4918) {
      expName.style.width = '59%'
    } 
   if (exp === 4919) {
      expName.style.width = '59.5%'
    }
   if (exp === 4920) {
      expName.style.width = '60%'
    }
   if (exp === 4921) {
     expName.style.width = '60.5%'
    }
   if (exp === 4922) {
     expName.style.width = '61%'
    }
   if (exp === 4923) {
     expName.style.width = '61.5%'
    }
   if (exp === 4924) {
     expName.style.width = '62%'
    }
   if (exp === 4925) {
     expName.style.width = '62.5%'
    }
   if (exp === 4926) {
     expName.style.width = '63%'
    }
   if (exp === 4927) {
     expName.style.width = '63.5%'
   }
   if (exp === 4928) {
     expName.style.width = '64%'
    } 
   if (exp === 4929) {
     expName.style.width = '64.5%'
    } 
   if (exp === 4930) {
     expName.style.width = '65%'
    } 
   if (exp === 4931) {
     expName.style.width = '65.5%'
    } 
   if (exp === 4932) {
     expName.style.width = '66%'
    } 
   if (exp === 4933) {
      expName.style.width = '66.5%'
    } 
   if (exp === 4934) {
      expName.style.width = '67%'
    } 
   if (exp === 4935) {
      expName.style.width = '67.5%'
    } 
   if (exp === 4936) {
      expName.style.width = '68%'
    } 
   if (exp === 4937) {
      expName.style.width = '68.5%'
    } 
   if (exp === 4938) {
      expName.style.width = '69%'
    } 
   if (exp === 4939) {
      expName.style.width = '69.5%'
    }
   if (exp === 4940) {
      expName.style.width = '70%'
    }
   if (exp === 4941) {
      expName.style.width = '70.5%'
    }
   if (exp === 4942) {
      expName.style.width = '71%'
    }
   if (exp === 4943) {
      expName.style.width = '71.5%'
    }
   if (exp === 4944) {
      expName.style.width = '72%'
    }
   if (exp === 4945) {
      expName.style.width = '72.5%'
    }
   if (exp === 4946) {
      expName.style.width = '73%'
    }
   if (exp === 4947) {
      expName.style.width = '73.5%'
    }
   if (exp === 4948) {
      expName.style.width = '74%'
    }
   if (exp === 4949) {
      expName.style.width = '74.5%'
    }
   if (exp === 4950) {
      expName.style.width = '75%'
    }
   if (exp === 4951) {
      expName.style.width = '75.5%'
    }
   if (exp === 4952) {
      expName.style.width = '76%'
    }
   if (exp === 4953) {
      expName.style.width = '76.5%'
    }
   if (exp === 4954) {
      expName.style.width = '77%'
    }
   if (exp === 4955) {
      expName.style.width = '77.5%'
    }
    if (exp === 4956) {
      expName.style.width = '78%'
    }
    if (exp === 4957) {
      expName.style.width = '78.5%'
    }
    if (exp === 4958) {
      expName.style.width = '79%'
    }
    if (exp === 4959) {
      expName.style.width = '79.5%'
    }
    if (exp === 4960) {
      expName.style.width = '80%'
    }
    if (exp === 4961) {
      exppName.style.width = '80.5%'
    }
    if (exp === 4962) {
      expName.style.width = '81%'
    }
    if (exp === 4963) {
      expName.style.width = '81.5%'
    }
    if (exp === 4964) {
      expName.style.width = '82%'
    }
    if (exp === 4965) {
      expName.style.width = '82.5%'
    }
    if (exp === 4966) {
      expName.style.width = '83%'
    }
    if (exp === 4967) {
      expName.style.width = '83.5%'
    }
    if (exp === 4968) {
      expName.style.width = '84%'
    }
    if (exp === 4969) {
      expName.style.width = '84.5%'
    }
    if (exp === 4970) {
      expName.style.width = '85%'
    }
    if (exp === 4971) {
      expName.style.width = '85.5%'
    }
    if (exp === 4972) {
      expName.style.width = '86%'
    }
    if (exp === 4973) {
      expName.style.width = '86.5%'
    }
    if (exp === 4974) {
      expName.style.width = '87%'
    }
    if (exp === 4975) {
      expName.style.width = '87.5%'
    }
    if (exp === 4976) {
      expName.style.width = '88%'
    }
    if (exp === 4977) {
      expName.style.width = '88.5%'
    }
    if (exp === 4978) {
      expName.style.width = '89%'
    }
    if (exp === 4979) {
      expName.style.width = '89.5%'
    }
    if (exp === 4980) {
      expName.style.width = '90%'
    }
    if (exp === 4981) {
      expName.style.width = '90.5%'
    }
    if (exp === 4982) {
      expName.style.width = '91%'
    }
    if (exp === 4983) {
      expName.style.width = '91.5%'
    }
    if (exp === 4984) {
      expName.style.width = '92%'
    }
    if (exp === 4985) {
      expName.style.width = '92.5%'
    }
    if (exp === 4986) {
      expName.style.width = '93%'
    }
    if (exp === 4987) {
      expName.style.width = '93.5%'
    }
    if (exp === 4988) {
      expName.style.width = '94%'
    }
    if (exp === 4989) {
      expName.style.width = '94.5%'
    }
    if (exp === 4990) {
      expName.style.width = '95%'
    }
    if (exp === 4991) {
      expName.style.width = '95.5%'
    }
    if (exp === 4992) {
      expName.style.width = '96%'
    }
    if (exp === 4993) {
      expName.style.width = '96.5%'
    }
    if (exp === 4994) {
      expName.style.width = '97%'
    }
    if (exp === 4995) {
      expName.style.width = '97.5%'
    }
    if (exp === 4996) {
      expName.style.width = '98%'
    }
    if (exp === 4997) {
      expName.style.width = '98.5%'
    }
    if (exp === 4998) {
      expName.style.width = '99%'
    }
    if (exp === 4999) {
      expName.style.width = '99.5%'
    }
    if (exp === 5000) {
      expName.style.width = '100%'
    }
    }
     
    if (exp === 5000) {
      setTimeout(() => {
        expOne.style.display = 'none'
        expTwo.style.display = 'none'
        expThree.style.display = 'none'
        expFour.style.display = 'none'
        expFive.style.display = 'none'
      }, 500)
      handleExpSeven();
    }
  
    if (exp >= 5000) {
      handleExpSeven();
      levelUpShow();
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
  
      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
      document.querySelector('.the-level').innerHTML = 7;
      
      document.querySelector('.next-level').innerHTML = '6000';
      
      document.querySelector('.level-title').innerHTML = 'Rookie Lvl 1'
    }
  
    
  } 
}

function handleExpSeven() {
  let expName = expOne;
  if (playerLevel === 7) {
     
    if (exp >= 5001 && exp <= 5200) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 5001) {
      expName.style.width = '0.5%'
    }
   if (exp === 5002) {
      expName.style.width = '1%'
    }
   if (exp === 5003) {
      expName.style.width = '1.5%'
    }
   if (exp === 5004) {
      expName.style.width = '2%'
    }
   if (exp === 5005) {
      expName.style.width = '2.5%'
    }
   if (exp === 5006) {
      expName.style.width = '3%'
    }
   if (exp === 5007) {
      expName.style.width = '3.5%'
   }
   if (exp === 5008) {
      expName.style.width = '4%'
    } 
   if (exp === 5009) {
      expName.style.width = '4.5%'
    } 
   if (exp === 5010) {
      expName.style.width = '5%'
    } 
   if (exp === 5011) {
      expName.style.width = '5.5%'
    } 
   if (exp === 5012) {
      expName.style.width = '6%'
    } 
   if (exp === 5013) {
      expName.style.width = '6.5%'
    } 
   if (exp === 5014) {
      expName.style.width = '7%'
    } 
   if (exp === 5015) {
      expName.style.width = '7.5%'
    } 
   if (exp === 5016) {
      expName.style.width = '8%'
    } 
   if (exp === 5017) {
      expName.style.width = '8.5%'
    } 
   if (exp === 5018) {
      expName.style.width = '9%'
    } 
   if (exp === 5019) {
      expName.style.width = '9.5%'
    }
   if (exp === 5020) {
      expName.style.width = '10%'
    }
   if (exp === 5021) {
     expName.style.width = '10.5%'
    }
   if (exp === 5022) {
     expName.style.width = '11%'
    }
   if (exp === 5023) {
     expName.style.width = '11.5%'
    }
   if (exp === 5024) {
     expName.style.width = '12%'
    }
   if (exp === 5025) {
     expName.style.width = '12.5%'
    }
   if (exp === 5026) {
     expName.style.width = '13%'
    }
   if (exp === 5027) {
     expName.style.width = '13.5%'
   }
   if (exp === 5028) {
     expName.style.width = '14%'
    } 
   if (exp === 5029) {
     expName.style.width = '14.5%'
    } 
   if (exp === 5030) {
     expName.style.width = '15%'
    } 
   if (exp === 5031) {
     expName.style.width = '15.5%'
    } 
   if (exp === 5032) {
     expName.style.width = '16%'
    } 
   if (exp === 5033) {
      expName.style.width = '16.5%'
    } 
   if (exp === 5034) {
      expName.style.width = '17%'
    } 
   if (exp === 5035) {
      expName.style.width = '17.5%'
    } 
   if (exp === 5036) {
      expName.style.width = '18%'
    } 
   if (exp === 5037) {
      expName.style.width = '18.5%'
    } 
   if (exp === 5038) {
      expName.style.width = '19%'
    } 
   if (exp === 5039) {
      expName.style.width = '19.5%'
    }
   if (exp === 5040) {
      expName.style.width = '20%'
    }
   if (exp === 5041) {
      expName.style.width = '20.5%'
    }
   if (exp === 5042) {
      expName.style.width = '21%'
    }
   if (exp === 5043) {
      expName.style.width = '21.5%'
    }
   if (exp === 5044) {
      expName.style.width = '22%'
    }
   if (exp === 5045) {
      expName.style.width = '22.5%'
    }
   if (exp === 5046) {
      expName.style.width = '23%'
    }
   if (exp === 5047) {
      expName.style.width = '23.5%'
    }
   if (exp === 5048) {
      expName.style.width = '24%'
    }
   if (exp === 5049) {
      expName.style.width = '24.5%'
    }
   if (exp === 5050) {
      expName.style.width = '25%'
    }
   if (exp === 5051) {
      expName.style.width = '25.5%'
    }
   if (exp === 5052) {
      expName.style.width = '26%'
    }
   if (exp === 5053) {
      expName.style.width = '26.5%'
    }
   if (exp === 5054) {
      expName.style.width = '27%'
    }
   if (exp === 5055) {
      expName.style.width = '27.5%'
    }
    if (exp === 5056) {
      expName.style.width = '28%'
    }
    if (exp === 5057) {
      expName.style.width = '28.5%'
    }
    if (exp === 5058) {
      expName.style.width = '29%'
    }
    if (exp === 5059) {
      expName.style.width = '29.5%'
    }
    if (exp === 5060) {
      expName.style.width = '30%'
    }
    if (exp === 5061) {
      expName.style.width = '30.5%'
    }
    if (exp === 5062) {
      expName.style.width = '31%'
    }
    if (exp === 5063) {
      expName.style.width = '31.5%'
    }
    if (exp === 5064) {
      expName.style.width = '32%'
    }
    if (exp === 5065) {
      expName.style.width = '32.5%'
    }
    if (exp === 5066) {
      expName.style.width = '33%'
    }
    if (exp === 5067) {
      expName.style.width = '33.5%'
    }
    if (exp === 5068) {
      expName.style.width = '34%'
    }
    if (exp === 5069) {
      expName.style.width = '34.5%'
    }
    if (exp === 5070) {
      expName.style.width = '35%'
    }
    if (exp === 5071) {
      expName.style.width = '35.5%'
    }
    if (exp === 5072) {
      expName.style.width = '36%'
    }
    if (exp === 5073) {
      expName.style.width = '36.5%'
    }
    if (exp === 5074) {
      expName.style.width = '37%'
    }
    if (exp === 5075) {
      expName.style.width = '37.5%'
    }
    if (exp === 5076) {
      expName.style.width = '38%'
    }
    if (exp === 5077) {
      expName.style.width = '38.5%'
    }
    if (exp === 5078) {
      expName.style.width = '39%'
    }
    if (exp === 5079) {
      expName.style.width = '39.5%'
    }
    if (exp === 5080) {
      expName.style.width = '40%'
    }
    if (exp === 5081) {
      expName.style.width = '40.5%'
    }
    if (exp === 5082) {
      expName.style.width = '41%'
    }
    if (exp === 5083) {
      expName.style.width = '41.5%'
    }
    if (exp === 5084) {
      expName.style.width = '42%'
    }
    if (exp === 5085) {
      expName.style.width = '42.5%'
    }
    if (exp === 5086) {
      expName.style.width = '43%'
    }
    if (exp === 5087) {
      expName.style.width = '43.5%'
    }
    if (exp === 5088) {
      expName.style.width = '44%'
    }
    if (exp === 5089) {
      expName.style.width = '44.5%'
    }
    if (exp === 5090) {
      expName.style.width = '45%'
    }
    if (exp === 5091) {
      expName.style.width = '45.5%'
    }
    if (exp === 5092) {
      expName.style.width = '46%'
    }
    if (exp === 5093) {
      expName.style.width = '46.5%'
    }
    if (exp === 5094) {
      expName.style.width = '47%'
    }
    if (exp === 5095) {
      expName.style.width = '47.5%'
    }
    if (exp === 5096) {
      expName.style.width = '48%'
    }
    if (exp === 5097) {
      expName.style.width = '48.5%'
    }
    if (exp === 5098) {
      expName.style.width = '49%'
    }
    if (exp === 5099) {
      expName.style.width = '49.5%'
    }
    if (exp === 5100) {
      expName.style.width = '50%'
    }
   if (exp === 5101) {
      expName.style.width = '50.5%'
    }
   if (exp === 5102) {
      expName.style.width = '51%'
    }
   if (exp === 5103) {
      expName.style.width = '51.5%'
    }
   if (exp === 5104) {
      expName.style.width = '52%'
    }
   if (exp === 5105) {
      expName.style.width = '52.5%'
    }
   if (exp === 5106) {
      expName.style.width = '53%'
    }
   if (exp === 5107) {
      expName.style.width = '53.5%'
   }
   if (exp === 5108) {
      expName.style.width = '54%'
    } 
   if (exp === 5109) {
      expName.style.width = '54.5%'
    } 
   if (exp === 5110) {
      expName.style.width = '55%'
    } 
   if (exp === 5111) {
      expName.style.width = '55.5%'
    } 
   if (exp === 5112) {
      expName.style.width = '56%'
    } 
   if (exp === 5113) {
      expName.style.width = '56.5%'
    } 
   if (exp === 5114) {
      expName.style.width = '57%'
    } 
   if (exp === 5115) {
      expName.style.width = '57.5%'
    } 
   if (exp === 5116) {
      expName.style.width = '58%'
    } 
   if (exp === 5117) {
      expName.style.width = '58.5%'
    } 
   if (exp === 5118) {
      expName.style.width = '59%'
    } 
   if (exp === 5119) {
      expName.style.width = '59.5%'
    }
   if (exp === 5120) {
      expName.style.width = '60%'
    }
   if (exp === 5121) {
     expName.style.width = '60.5%'
    }
   if (exp === 5122) {
     expName.style.width = '61%'
    }
   if (exp === 5123) {
     expName.style.width = '61.5%'
    }
   if (exp === 5124) {
     expName.style.width = '62%'
    }
   if (exp === 5125) {
     expName.style.width = '62.5%'
    }
   if (exp === 5126) {
     expName.style.width = '63%'
    }
   if (exp === 5127) {
     expName.style.width = '63.5%'
   }
   if (exp === 5128) {
     expName.style.width = '64%'
    } 
   if (exp === 5129) {
     expName.style.width = '64.5%'
    } 
   if (exp === 5130) {
     expName.style.width = '65%'
    } 
   if (exp === 5131) {
     expName.style.width = '65.5%'
    } 
   if (exp === 5132) {
     expName.style.width = '66%'
    } 
   if (exp === 5133) {
      expName.style.width = '66.5%'
    } 
   if (exp === 5134) {
      expName.style.width = '67%'
    } 
   if (exp === 5135) {
      expName.style.width = '67.5%'
    } 
   if (exp === 5136) {
      expName.style.width = '68%'
    } 
   if (exp === 5137) {
      expName.style.width = '68.5%'
    } 
   if (exp === 5138) {
      expName.style.width = '69%'
    } 
   if (exp === 5139) {
      expName.style.width = '69.5%'
    }
   if (exp === 5140) {
      expName.style.width = '70%'
    }
   if (exp === 5141) {
      expName.style.width = '70.5%'
    }
   if (exp === 5142) {
      expName.style.width = '71%'
    }
   if (exp === 5143) {
      expName.style.width = '71.5%'
    }
   if (exp === 5144) {
      expName.style.width = '72%'
    }
   if (exp === 5145) {
      expName.style.width = '72.5%'
    }
   if (exp === 5146) {
      expName.style.width = '73%'
    }
   if (exp === 5147) {
      expName.style.width = '73.5%'
    }
   if (exp === 5148) {
      expName.style.width = '74%'
    }
   if (exp === 5149) {
      expName.style.width = '74.5%'
    }
   if (exp === 5150) {
      expName.style.width = '75%'
    }
   if (exp === 5151) {
      expName.style.width = '75.5%'
    }
   if (exp === 5152) {
      expName.style.width = '76%'
    }
   if (exp === 5153) {
      expName.style.width = '76.5%'
    }
   if (exp === 5154) {
      expName.style.width = '77%'
    }
   if (exp === 5155) {
      expName.style.width = '77.5%'
    }
    if (exp === 5156) {
      expName.style.width = '78%'
    }
    if (exp === 5157) {
      expName.style.width = '78.5%'
    }
    if (exp === 5158) {
      expName.style.width = '79%'
    }
    if (exp === 5159) {
      expName.style.width = '79.5%'
    }
    if (exp === 5160) {
      expName.style.width = '80%'
    }
    if (exp === 5161) {
      exppName.style.width = '80.5%'
    }
    if (exp === 5162) {
      expName.style.width = '81%'
    }
    if (exp === 5163) {
      expName.style.width = '81.5%'
    }
    if (exp === 5164) {
      expName.style.width = '82%'
    }
    if (exp === 5165) {
      expName.style.width = '82.5%'
    }
    if (exp === 5166) {
      expName.style.width = '83%'
    }
    if (exp === 5167) {
      expName.style.width = '83.5%'
    }
    if (exp === 5168) {
      expName.style.width = '84%'
    }
    if (exp === 5169) {
      expName.style.width = '84.5%'
    }
    if (exp === 5170) {
      expName.style.width = '85%'
    }
    if (exp === 5171) {
      expName.style.width = '85.5%'
    }
    if (exp === 5172) {
      expName.style.width = '86%'
    }
    if (exp === 5173) {
      expName.style.width = '86.5%'
    }
    if (exp === 5174) {
      expName.style.width = '87%'
    }
    if (exp === 5175) {
      expName.style.width = '87.5%'
    }
    if (exp === 5176) {
      expName.style.width = '88%'
    }
    if (exp === 5177) {
      expName.style.width = '88.5%'
    }
    if (exp === 5178) {
      expName.style.width = '89%'
    }
    if (exp === 5179) {
      expName.style.width = '89.5%'
    }
    if (exp === 5180) {
      expName.style.width = '90%'
    }
    if (exp === 5181) {
      expName.style.width = '90.5%'
    }
    if (exp === 5182) {
      expName.style.width = '91%'
    }
    if (exp === 5183) {
      expName.style.width = '91.5%'
    }
    if (exp === 5184) {
      expName.style.width = '92%'
    }
    if (exp === 5185) {
      expName.style.width = '92.5%'
    }
    if (exp === 5186) {
      expName.style.width = '93%'
    }
    if (exp === 5187) {
      expName.style.width = '93.5%'
    }
    if (exp === 5188) {
      expName.style.width = '94%'
    }
    if (exp === 5189) {
      expName.style.width = '94.5%'
    }
    if (exp === 5190) {
      expName.style.width = '95%'
    }
    if (exp === 5191) {
      expName.style.width = '95.5%'
    }
    if (exp === 5192) {
      expName.style.width = '96%'
    }
    if (exp === 5193) {
      expName.style.width = '96.5%'
    }
    if (exp === 5194) {
      expName.style.width = '97%'
    }
    if (exp === 5195) {
      expName.style.width = '97.5%'
    }
    if (exp === 5196) {
      expName.style.width = '98%'
    }
    if (exp === 5197) {
      expName.style.width = '98.5%'
    }
    if (exp === 5198) {
      expName.style.width = '99%'
    }
    if (exp === 5199) {
      expName.style.width = '99.5%'
    }
    if (exp === 5200) {
      expName.style.width = '100%'
    }
     
    }

    if (exp >= 5201 && exp <= 5400) 
    {
      expName = expTwo;

      expOne.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 5201) {
      expName.style.width = '0.5%'
    }
   if (exp === 5202) {
      expName.style.width = '1%'
    }
   if (exp === 5203) {
      expName.style.width = '1.5%'
    }
   if (exp === 5204) {
      expName.style.width = '2%'
    }
   if (exp === 5205) {
      expName.style.width = '2.5%'
    }
   if (exp === 5206) {
      expName.style.width = '3%'
    }
   if (exp === 5207) {
      expName.style.width = '3.5%'
   }
   if (exp === 5208) {
      expName.style.width = '4%'
    } 
   if (exp === 5209) {
      expName.style.width = '4.5%'
    } 
   if (exp === 5210) {
      expName.style.width = '5%'
    } 
   if (exp === 5211) {
      expName.style.width = '5.5%'
    } 
   if (exp === 5212) {
      expName.style.width = '6%'
    } 
   if (exp === 5213) {
      expName.style.width = '6.5%'
    } 
   if (exp === 5214) {
      expName.style.width = '7%'
    } 
   if (exp === 5215) {
      expName.style.width = '7.5%'
    } 
   if (exp === 5216) {
      expName.style.width = '8%'
    } 
   if (exp === 5217) {
      expName.style.width = '8.5%'
    } 
   if (exp === 5218) {
      expName.style.width = '9%'
    } 
   if (exp === 5219) {
      expName.style.width = '9.5%'
    }
   if (exp === 5220) {
      expName.style.width = '10%'
    }
   if (exp === 5221) {
     expName.style.width = '10.5%'
    }
   if (exp === 5222) {
     expName.style.width = '11%'
    }
   if (exp === 5223) {
     expName.style.width = '11.5%'
    }
   if (exp === 5224) {
     expName.style.width = '12%'
    }
   if (exp === 5225) {
     expName.style.width = '12.5%'
    }
   if (exp === 5226) {
     expName.style.width = '13%'
    }
   if (exp === 5227) {
     expName.style.width = '13.5%'
   }
   if (exp === 5228) {
     expName.style.width = '14%'
    } 
   if (exp === 5229) {
     expName.style.width = '14.5%'
    } 
   if (exp === 5230) {
     expName.style.width = '15%'
    } 
   if (exp === 5231) {
     expName.style.width = '15.5%'
    } 
   if (exp === 5232) {
     expName.style.width = '16%'
    } 
   if (exp === 5233) {
      expName.style.width = '16.5%'
    } 
   if (exp === 5234) {
      expName.style.width = '17%'
    } 
   if (exp === 5235) {
      expName.style.width = '17.5%'
    } 
   if (exp === 5236) {
      expName.style.width = '18%'
    } 
   if (exp === 5237) {
      expName.style.width = '18.5%'
    } 
   if (exp === 5238) {
      expName.style.width = '19%'
    } 
   if (exp === 5239) {
      expName.style.width = '19.5%'
    }
   if (exp === 5240) {
      expName.style.width = '20%'
    }
   if (exp === 5241) {
      expName.style.width = '20.5%'
    }
   if (exp === 5242) {
      expName.style.width = '21%'
    }
   if (exp === 5243) {
      expName.style.width = '21.5%'
    }
   if (exp === 5244) {
      expName.style.width = '22%'
    }
   if (exp === 5245) {
      expName.style.width = '22.5%'
    }
   if (exp === 5246) {
      expName.style.width = '23%'
    }
   if (exp === 5247) {
      expName.style.width = '23.5%'
    }
   if (exp === 5248) {
      expName.style.width = '24%'
    }
   if (exp === 5249) {
      expName.style.width = '24.5%'
    }
   if (exp === 5250) {
      expName.style.width = '25%'
    }
   if (exp === 5251) {
      expName.style.width = '25.5%'
    }
   if (exp === 5252) {
      expName.style.width = '26%'
    }
   if (exp === 5253) {
      expName.style.width = '26.5%'
    }
   if (exp === 5254) {
      expName.style.width = '27%'
    }
   if (exp === 5255) {
      expName.style.width = '27.5%'
    }
    if (exp === 5256) {
      expName.style.width = '28%'
    }
    if (exp === 5257) {
      expName.style.width = '28.5%'
    }
    if (exp === 5258) {
      expName.style.width = '29%'
    }
    if (exp === 5259) {
      expName.style.width = '29.5%'
    }
    if (exp === 5260) {
      expName.style.width = '30%'
    }
    if (exp === 5261) {
      expName.style.width = '30.5%'
    }
    if (exp === 5262) {
      expName.style.width = '31%'
    }
    if (exp === 5263) {
      expName.style.width = '31.5%'
    }
    if (exp === 5264) {
      expName.style.width = '32%'
    }
    if (exp === 5265) {
      expName.style.width = '32.5%'
    }
    if (exp === 5266) {
      expName.style.width = '33%'
    }
    if (exp === 5267) {
      expName.style.width = '33.5%'
    }
    if (exp === 5268) {
      expName.style.width = '34%'
    }
    if (exp === 5269) {
      expName.style.width = '34.5%'
    }
    if (exp === 5270) {
      expName.style.width = '35%'
    }
    if (exp === 5271) {
      expName.style.width = '35.5%'
    }
    if (exp === 5272) {
      expName.style.width = '36%'
    }
    if (exp === 5273) {
      expName.style.width = '36.5%'
    }
    if (exp === 5274) {
      expName.style.width = '37%'
    }
    if (exp === 5275) {
      expName.style.width = '37.5%'
    }
    if (exp === 5276) {
      expName.style.width = '38%'
    }
    if (exp === 5277) {
      expName.style.width = '38.5%'
    }
    if (exp === 5278) {
      expName.style.width = '39%'
    }
    if (exp === 5279) {
      expName.style.width = '39.5%'
    }
    if (exp === 5280) {
      expName.style.width = '40%'
    }
    if (exp === 5281) {
      expName.style.width = '40.5%'
    }
    if (exp === 5282) {
      expName.style.width = '41%'
    }
    if (exp === 5283) {
      expName.style.width = '41.5%'
    }
    if (exp === 5284) {
      expName.style.width = '42%'
    }
    if (exp === 5285) {
      expName.style.width = '42.5%'
    }
    if (exp === 5286) {
      expName.style.width = '43%'
    }
    if (exp === 5287) {
      expName.style.width = '43.5%'
    }
    if (exp === 5288) {
      expName.style.width = '44%'
    }
    if (exp === 5289) {
      expName.style.width = '44.5%'
    }
    if (exp === 5290) {
      expName.style.width = '45%'
    }
    if (exp === 5291) {
      expName.style.width = '45.5%'
    }
    if (exp === 5292) {
      expName.style.width = '46%'
    }
    if (exp === 5293) {
      expName.style.width = '46.5%'
    }
    if (exp === 5294) {
      expName.style.width = '47%'
    }
    if (exp === 5295) {
      expName.style.width = '47.5%'
    }
    if (exp === 5296) {
      expName.style.width = '48%'
    }
    if (exp === 5297) {
      expName.style.width = '48.5%'
    }
    if (exp === 5298) {
      expName.style.width = '49%'
    }
    if (exp === 5299) {
      expName.style.width = '49.5%'
    }
    if (exp === 5300) {
      expName.style.width = '50%'
    }
   if (exp === 5301) {
      expName.style.width = '50.5%'
    }
   if (exp === 5302) {
      expName.style.width = '51%'
    }
   if (exp === 5303) {
      expName.style.width = '51.5%'
    }
   if (exp === 5304) {
      expName.style.width = '52%'
    }
   if (exp === 5305) {
      expName.style.width = '52.5%'
    }
   if (exp === 5306) {
      expName.style.width = '53%'
    }
   if (exp === 5307) {
      expName.style.width = '53.5%'
   }
   if (exp === 5308) {
      expName.style.width = '54%'
    } 
   if (exp === 5309) {
      expName.style.width = '54.5%'
    } 
   if (exp === 5310) {
      expName.style.width = '55%'
    } 
   if (exp === 5311) {
      expName.style.width = '55.5%'
    } 
   if (exp === 5312) {
      expName.style.width = '56%'
    } 
   if (exp === 5313) {
      expName.style.width = '56.5%'
    } 
   if (exp === 5314) {
      expName.style.width = '57%'
    } 
   if (exp === 5315) {
      expName.style.width = '57.5%'
    } 
   if (exp === 5316) {
      expName.style.width = '58%'
    } 
   if (exp === 5317) {
      expName.style.width = '58.5%'
    } 
   if (exp === 5318) {
      expName.style.width = '59%'
    } 
   if (exp === 5319) {
      expName.style.width = '59.5%'
    }
   if (exp === 5320) {
      expName.style.width = '60%'
    }
   if (exp === 5321) {
     expName.style.width = '60.5%'
    }
   if (exp === 5322) {
     expName.style.width = '61%'
    }
   if (exp === 5323) {
     expName.style.width = '61.5%'
    }
   if (exp === 5324) {
     expName.style.width = '62%'
    }
   if (exp === 5325) {
     expName.style.width = '62.5%'
    }
   if (exp === 5326) {
     expName.style.width = '63%'
    }
   if (exp === 5327) {
     expName.style.width = '63.5%'
   }
   if (exp === 5328) {
     expName.style.width = '64%'
    } 
   if (exp === 5329) {
     expName.style.width = '64.5%'
    } 
   if (exp === 5330) {
     expName.style.width = '65%'
    } 
   if (exp === 5331) {
     expName.style.width = '65.5%'
    } 
   if (exp === 5332) {
     expName.style.width = '66%'
    } 
   if (exp === 5333) {
      expName.style.width = '66.5%'
    } 
   if (exp === 5334) {
      expName.style.width = '67%'
    } 
   if (exp === 5335) {
      expName.style.width = '67.5%'
    } 
   if (exp === 5336) {
      expName.style.width = '68%'
    } 
   if (exp === 5337) {
      expName.style.width = '68.5%'
    } 
   if (exp === 5338) {
      expName.style.width = '69%'
    } 
   if (exp === 5339) {
      expName.style.width = '69.5%'
    }
   if (exp === 5340) {
      expName.style.width = '70%'
    }
   if (exp === 5341) {
      expName.style.width = '70.5%'
    }
   if (exp === 5342) {
      expName.style.width = '71%'
    }
   if (exp === 5343) {
      expName.style.width = '71.5%'
    }
   if (exp === 5344) {
      expName.style.width = '72%'
    }
   if (exp === 5345) {
      expName.style.width = '72.5%'
    }
   if (exp === 5346) {
      expName.style.width = '73%'
    }
   if (exp === 5347) {
      expName.style.width = '73.5%'
    }
   if (exp === 5348) {
      expName.style.width = '74%'
    }
   if (exp === 5349) {
      expName.style.width = '74.5%'
    }
   if (exp === 5350) {
      expName.style.width = '75%'
    }
   if (exp === 5351) {
      expName.style.width = '75.5%'
    }
   if (exp === 5352) {
      expName.style.width = '76%'
    }
   if (exp === 5353) {
      expName.style.width = '76.5%'
    }
   if (exp === 5354) {
      expName.style.width = '77%'
    }
   if (exp === 5355) {
      expName.style.width = '77.5%'
    }
    if (exp === 5356) {
      expName.style.width = '78%'
    }
    if (exp === 5357) {
      expName.style.width = '78.5%'
    }
    if (exp === 5358) {
      expName.style.width = '79%'
    }
    if (exp === 5359) {
      expName.style.width = '79.5%'
    }
    if (exp === 5360) {
      expName.style.width = '80%'
    }
    if (exp === 5361) {
      exppName.style.width = '80.5%'
    }
    if (exp === 5362) {
      expName.style.width = '81%'
    }
    if (exp === 5363) {
      expName.style.width = '81.5%'
    }
    if (exp === 5364) {
      expName.style.width = '82%'
    }
    if (exp === 5365) {
      expName.style.width = '82.5%'
    }
    if (exp === 5366) {
      expName.style.width = '83%'
    }
    if (exp === 5367) {
      expName.style.width = '83.5%'
    }
    if (exp === 5368) {
      expName.style.width = '84%'
    }
    if (exp === 5369) {
      expName.style.width = '84.5%'
    }
    if (exp === 5370) {
      expName.style.width = '85%'
    }
    if (exp === 5371) {
      expName.style.width = '85.5%'
    }
    if (exp === 5372) {
      expName.style.width = '86%'
    }
    if (exp === 5373) {
      expName.style.width = '86.5%'
    }
    if (exp === 5374) {
      expName.style.width = '87%'
    }
    if (exp === 5375) {
      expName.style.width = '87.5%'
    }
    if (exp === 5376) {
      expName.style.width = '88%'
    }
    if (exp === 5377) {
      expName.style.width = '88.5%'
    }
    if (exp === 5378) {
      expName.style.width = '89%'
    }
    if (exp === 5379) {
      expName.style.width = '89.5%'
    }
    if (exp === 5380) {
      expName.style.width = '90%'
    }
    if (exp === 5381) {
      expName.style.width = '90.5%'
    }
    if (exp === 5382) {
      expName.style.width = '91%'
    }
    if (exp === 5383) {
      expName.style.width = '91.5%'
    }
    if (exp === 5384) {
      expName.style.width = '92%'
    }
    if (exp === 5385) {
      expName.style.width = '92.5%'
    }
    if (exp === 5386) {
      expName.style.width = '93%'
    }
    if (exp === 5387) {
      expName.style.width = '93.5%'
    }
    if (exp === 5388) {
      expName.style.width = '94%'
    }
    if (exp === 5389) {
      expName.style.width = '94.5%'
    }
    if (exp === 5390) {
      expName.style.width = '95%'
    }
    if (exp === 5391) {
      expName.style.width = '95.5%'
    }
    if (exp === 5392) {
      expName.style.width = '96%'
    }
    if (exp === 5393) {
      expName.style.width = '96.5%'
    }
    if (exp === 5394) {
      expName.style.width = '97%'
    }
    if (exp === 5395) {
      expName.style.width = '97.5%'
    }
    if (exp === 5396) {
      expName.style.width = '98%'
    }
    if (exp === 5397) {
      expName.style.width = '98.5%'
    }
    if (exp === 5398) {
      expName.style.width = '99%'
    }
    if (exp === 5399) {
      expName.style.width = '99.5%'
    }
    if (exp === 5400) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 5401 && exp <= 5600)
    {
      expName = expThree;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 5401) {
      expName.style.width = '0.5%'
    }
   if (exp === 5402) {
      expName.style.width = '1%'
    }
   if (exp === 5403) {
      expName.style.width = '1.5%'
    }
   if (exp === 5404) {
      expName.style.width = '2%'
    }
   if (exp === 5405) {
      expName.style.width = '2.5%'
    }
   if (exp === 5406) {
      expName.style.width = '3%'
    }
   if (exp === 5407) {
      expName.style.width = '3.5%'
   }
   if (exp === 5408) {
      expName.style.width = '4%'
    } 
   if (exp === 5409) {
      expName.style.width = '4.5%'
    } 
   if (exp === 5410) {
      expName.style.width = '5%'
    } 
   if (exp === 5411) {
      expName.style.width = '5.5%'
    } 
   if (exp === 5412) {
      expName.style.width = '6%'
    } 
   if (exp === 5413) {
      expName.style.width = '6.5%'
    } 
   if (exp === 5414) {
      expName.style.width = '7%'
    } 
   if (exp === 5415) {
      expName.style.width = '7.5%'
    } 
   if (exp === 5416) {
      expName.style.width = '8%'
    } 
   if (exp === 5417) {
      expName.style.width = '8.5%'
    } 
   if (exp === 5418) {
      expName.style.width = '9%'
    } 
   if (exp === 5419) {
      expName.style.width = '9.5%'
    }
   if (exp === 5420) {
      expName.style.width = '10%'
    }
   if (exp === 5421) {
     expName.style.width = '10.5%'
    }
   if (exp === 5422) {
     expName.style.width = '11%'
    }
   if (exp === 5423) {
     expName.style.width = '11.5%'
    }
   if (exp === 5424) {
     expName.style.width = '12%'
    }
   if (exp === 5425) {
     expName.style.width = '12.5%'
    }
   if (exp === 5426) {
     expName.style.width = '13%'
    }
   if (exp === 5427) {
     expName.style.width = '13.5%'
   }
   if (exp === 5428) {
     expName.style.width = '14%'
    } 
   if (exp === 5429) {
     expName.style.width = '14.5%'
    } 
   if (exp === 5430) {
     expName.style.width = '15%'
    } 
   if (exp === 5431) {
     expName.style.width = '15.5%'
    } 
   if (exp === 5432) {
     expName.style.width = '16%'
    } 
   if (exp === 5433) {
      expName.style.width = '16.5%'
    } 
   if (exp === 5434) {
      expName.style.width = '17%'
    } 
   if (exp === 5435) {
      expName.style.width = '17.5%'
    } 
   if (exp === 5436) {
      expName.style.width = '18%'
    } 
   if (exp === 5437) {
      expName.style.width = '18.5%'
    } 
   if (exp === 5438) {
      expName.style.width = '19%'
    } 
   if (exp === 5439) {
      expName.style.width = '19.5%'
    }
   if (exp === 5440) {
      expName.style.width = '20%'
    }
   if (exp === 5441) {
      expName.style.width = '20.5%'
    }
   if (exp === 5442) {
      expName.style.width = '21%'
    }
   if (exp === 5443) {
      expName.style.width = '21.5%'
    }
   if (exp === 5444) {
      expName.style.width = '22%'
    }
   if (exp === 5445) {
      expName.style.width = '22.5%'
    }
   if (exp === 5446) {
      expName.style.width = '23%'
    }
   if (exp === 5447) {
      expName.style.width = '23.5%'
    }
   if (exp === 5448) {
      expName.style.width = '24%'
    }
   if (exp === 5449) {
      expName.style.width = '24.5%'
    }
   if (exp === 5450) {
      expName.style.width = '25%'
    }
   if (exp === 5451) {
      expName.style.width = '25.5%'
    }
   if (exp === 5452) {
      expName.style.width = '26%'
    }
   if (exp === 5453) {
      expName.style.width = '26.5%'
    }
   if (exp === 5454) {
      expName.style.width = '27%'
    }
   if (exp === 5455) {
      expName.style.width = '27.5%'
    }
    if (exp === 5456) {
      expName.style.width = '28%'
    }
    if (exp === 5457) {
      expName.style.width = '28.5%'
    }
    if (exp === 5458) {
      expName.style.width = '29%'
    }
    if (exp === 5459) {
      expName.style.width = '29.5%'
    }
    if (exp === 5460) {
      expName.style.width = '30%'
    }
    if (exp === 5461) {
      expName.style.width = '30.5%'
    }
    if (exp === 5462) {
      expName.style.width = '31%'
    }
    if (exp === 5463) {
      expName.style.width = '31.5%'
    }
    if (exp === 5464) {
      expName.style.width = '32%'
    }
    if (exp === 5465) {
      expName.style.width = '32.5%'
    }
    if (exp === 5466) {
      expName.style.width = '33%'
    }
    if (exp === 5467) {
      expName.style.width = '33.5%'
    }
    if (exp === 5468) {
      expName.style.width = '34%'
    }
    if (exp === 5469) {
      expName.style.width = '34.5%'
    }
    if (exp === 5470) {
      expName.style.width = '35%'
    }
    if (exp === 5471) {
      expName.style.width = '35.5%'
    }
    if (exp === 5472) {
      expName.style.width = '36%'
    }
    if (exp === 5473) {
      expName.style.width = '36.5%'
    }
    if (exp === 5474) {
      expName.style.width = '37%'
    }
    if (exp === 5475) {
      expName.style.width = '37.5%'
    }
    if (exp === 5476) {
      expName.style.width = '38%'
    }
    if (exp === 5477) {
      expName.style.width = '38.5%'
    }
    if (exp === 5478) {
      expName.style.width = '39%'
    }
    if (exp === 5479) {
      expName.style.width = '39.5%'
    }
    if (exp === 5480) {
      expName.style.width = '40%'
    }
    if (exp === 5481) {
      expName.style.width = '40.5%'
    }
    if (exp === 5482) {
      expName.style.width = '41%'
    }
    if (exp === 5483) {
      expName.style.width = '41.5%'
    }
    if (exp === 5484) {
      expName.style.width = '42%'
    }
    if (exp === 5485) {
      expName.style.width = '42.5%'
    }
    if (exp === 5486) {
      expName.style.width = '43%'
    }
    if (exp === 5487) {
      expName.style.width = '43.5%'
    }
    if (exp === 5488) {
      expName.style.width = '44%'
    }
    if (exp === 5489) {
      expName.style.width = '44.5%'
    }
    if (exp === 5490) {
      expName.style.width = '45%'
    }
    if (exp === 5491) {
      expName.style.width = '45.5%'
    }
    if (exp === 5492) {
      expName.style.width = '46%'
    }
    if (exp === 5493) {
      expName.style.width = '46.5%'
    }
    if (exp === 5494) {
      expName.style.width = '47%'
    }
    if (exp === 5495) {
      expName.style.width = '47.5%'
    }
    if (exp === 5496) {
      expName.style.width = '48%'
    }
    if (exp === 5497) {
      expName.style.width = '48.5%'
    }
    if (exp === 5498) {
      expName.style.width = '49%'
    }
    if (exp === 5499) {
      expName.style.width = '49.5%'
    }
    if (exp === 5500) {
      expName.style.width = '50%'
    }
   if (exp === 5501) {
      expName.style.width = '50.5%'
    }
   if (exp === 5502) {
      expName.style.width = '51%'
    }
   if (exp === 5503) {
      expName.style.width = '51.5%'
    }
   if (exp === 5504) {
      expName.style.width = '52%'
    }
   if (exp === 5505) {
      expName.style.width = '52.5%'
    }
   if (exp === 5506) {
      expName.style.width = '53%'
    }
   if (exp === 5507) {
      expName.style.width = '53.5%'
   }
   if (exp === 5508) {
      expName.style.width = '54%'
    } 
   if (exp === 5509) {
      expName.style.width = '54.5%'
    } 
   if (exp === 5510) {
      expName.style.width = '55%'
    } 
   if (exp === 5511) {
      expName.style.width = '55.5%'
    } 
   if (exp === 5512) {
      expName.style.width = '56%'
    } 
   if (exp === 5513) {
      expName.style.width = '56.5%'
    } 
   if (exp === 5514) {
      expName.style.width = '57%'
    } 
   if (exp === 5515) {
      expName.style.width = '57.5%'
    } 
   if (exp === 5516) {
      expName.style.width = '58%'
    } 
   if (exp === 5517) {
      expName.style.width = '58.5%'
    } 
   if (exp === 5518) {
      expName.style.width = '59%'
    } 
   if (exp === 5519) {
      expName.style.width = '59.5%'
    }
   if (exp === 5510) {
      expName.style.width = '60%'
    }
   if (exp === 5521) {
     expName.style.width = '60.5%'
    }
   if (exp === 5522) {
     expName.style.width = '61%'
    }
   if (exp === 5523) {
     expName.style.width = '61.5%'
    }
   if (exp === 5524) {
     expName.style.width = '62%'
    }
   if (exp === 5525) {
     expName.style.width = '62.5%'
    }
   if (exp === 5526) {
     expName.style.width = '63%'
    }
   if (exp === 5527) {
     expName.style.width = '63.5%'
   }
   if (exp === 5528) {
     expName.style.width = '64%'
    } 
   if (exp === 5529) {
     expName.style.width = '64.5%'
    } 
   if (exp === 5530) {
     expName.style.width = '65%'
    } 
   if (exp === 5531) {
     expName.style.width = '65.5%'
    } 
   if (exp === 5532) {
     expName.style.width = '66%'
    } 
   if (exp === 5533) {
      expName.style.width = '66.5%'
    } 
   if (exp === 5534) {
      expName.style.width = '67%'
    } 
   if (exp === 5535) {
      expName.style.width = '67.5%'
    } 
   if (exp === 5536) {
      expName.style.width = '68%'
    } 
   if (exp === 5537) {
      expName.style.width = '68.5%'
    } 
   if (exp === 5538) {
      expName.style.width = '69%'
    } 
   if (exp === 5539) {
      expName.style.width = '69.5%'
    }
   if (exp === 5540) {
      expName.style.width = '70%'
    }
   if (exp === 5541) {
      expName.style.width = '70.5%'
    }
   if (exp === 5542) {
      expName.style.width = '71%'
    }
   if (exp === 5543) {
      expName.style.width = '71.5%'
    }
   if (exp === 5544) {
      expName.style.width = '72%'
    }
   if (exp === 5545) {
      expName.style.width = '72.5%'
    }
   if (exp === 5546) {
      expName.style.width = '73%'
    }
   if (exp === 5547) {
      expName.style.width = '73.5%'
    }
   if (exp === 5548) {
      expName.style.width = '74%'
    }
   if (exp === 5549) {
      expName.style.width = '74.5%'
    }
   if (exp === 5550) {
      expName.style.width = '75%'
    }
   if (exp ===  5551) {
      expName.style.width = '75.5%'
    }
   if (exp ===  5552) {
      expName.style.width = '76%'
    }
   if (exp ===  5553) {
      expName.style.width = '76.5%'
    }
   if (exp ===  5554) {
      expName.style.width = '77%'
    }
   if (exp ===  5555) {
      expName.style.width = '77.5%'
    }
    if (exp === 5556) {
      expName.style.width = '78%'
    }
    if (exp === 5557) {
      expName.style.width = '78.5%'
    }
    if (exp === 5558) {
      expName.style.width = '79%'
    }
    if (exp === 5559) {
      expName.style.width = '79.5%'
    }
    if (exp === 5560) {
      expName.style.width = '80%'
    }
    if (exp === 5561) {
      exppName.style.width = '80.5%'
    }
    if (exp === 5562) {
      expName.style.width = '81%'
    }
    if (exp === 5563) {
      expName.style.width = '81.5%'
    }
    if (exp === 5564) {
      expName.style.width = '82%'
    }
    if (exp === 5565) {
      expName.style.width = '82.5%'
    }
    if (exp === 5566) {
      expName.style.width = '83%'
    }
    if (exp === 5567) {
      expName.style.width = '83.5%'
    }
    if (exp === 5568) {
      expName.style.width = '84%'
    }
    if (exp === 5569) {
      expName.style.width = '84.5%'
    }
    if (exp === 5570) {
      expName.style.width = '85%'
    }
    if (exp === 5571) {
      expName.style.width = '85.5%'
    }
    if (exp === 5572) {
      expName.style.width = '86%'
    }
    if (exp === 5573) {
      expName.style.width = '86.5%'
    }
    if (exp === 5574) {
      expName.style.width = '87%'
    }
    if (exp === 5575) {
      expName.style.width = '87.5%'
    }
    if (exp === 5576) {
      expName.style.width = '88%'
    }
    if (exp === 5577) {
      expName.style.width = '88.5%'
    }
    if (exp === 5578) {
      expName.style.width = '89%'
    }
    if (exp === 5579) {
      expName.style.width = '89.5%'
    }
    if (exp === 5580) {
      expName.style.width = '90%'
    }
    if (exp === 5581) {
      expName.style.width = '90.5%'
    }
    if (exp === 5582) {
      expName.style.width = '91%'
    }
    if (exp === 5583) {
      expName.style.width = '91.5%'
    }
    if (exp === 5584) {
      expName.style.width = '92%'
    }
    if (exp === 5585) {
      expName.style.width = '92.5%'
    }
    if (exp === 5586) {
      expName.style.width = '93%'
    }
    if (exp === 5587) {
      expName.style.width = '93.5%'
    }
    if (exp === 5588) {
      expName.style.width = '94%'
    }
    if (exp === 5589) {
      expName.style.width = '94.5%'
    }
    if (exp === 5590) {
      expName.style.width = '95%'
    }
    if (exp === 5591) {
      expName.style.width = '95.5%'
    }
    if (exp === 5592) {
      expName.style.width = '96%'
    }
    if (exp === 5593) {
      expName.style.width = '96.5%'
    }
    if (exp === 5594) {
      expName.style.width = '97%'
    }
    if (exp === 5595) {
      expName.style.width = '97.5%'
    }
    if (exp === 5596) {
      expName.style.width = '98%'
    }
    if (exp === 5597) {
      expName.style.width = '98.5%'
    }
    if (exp === 5598) {
      expName.style.width = '99%'
    }
    if (exp === 5599) {
      expName.style.width = '99.5%'
    }
    if (exp === 5600) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 5601 && exp <= 5800)
    {
      expName = expFour;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 5601) {
      expName.style.width = '0.5%'
    }
   if (exp === 5602) {
      expName.style.width = '1%'
    }
   if (exp === 5603) {
      expName.style.width = '1.5%'
    }
   if (exp === 5604) {
      expName.style.width = '2%'
    }
   if (exp === 5605) {
      expName.style.width = '2.5%'
    }
   if (exp === 5606) {
      expName.style.width = '3%'
   }
   if (exp === 5607) {
      expName.style.width = '3.5%'
   }
   if (exp === 5608) {
      expName.style.width = '4%'
    } 
   if (exp === 5609) {
      expName.style.width = '4.5%'
    } 
   if (exp === 5610) {
      expName.style.width = '5%'
    } 
   if (exp === 5611) {
      expName.style.width = '5.5%'
    } 
   if (exp === 5612) {
      expName.style.width = '6%'
    } 
   if (exp === 5613) {
      expName.style.width = '6.5%'
    } 
   if (exp === 5614) {
      expName.style.width = '7%'
    } 
   if (exp === 5615) {
      expName.style.width = '7.5%'
    } 
   if (exp === 5616) {
      expName.style.width = '8%'
  } 
   if (exp === 5617) {
      expName.style.width = '8.5%'
   } 
   if (exp === 5618) {
      expName.style.width = '9%'
    } 
   if (exp === 5619) {
      expName.style.width = '9.5%'
    }
   if (exp === 5620) {
      expName.style.width = '10%'
    }
   if (exp === 5621) {
     expName.style.width = '10.5%'
    }
   if (exp === 5622) {
     expName.style.width = '11%'
    }
   if (exp === 5623) {
     expName.style.width = '11.5%'
    }
   if (exp === 5624) {
     expName.style.width = '12%'
    }
   if (exp === 5625) {
     expName.style.width = '12.5%'
    }
   if (exp === 5626) {
     expName.style.width = '13%'
    }
   if (exp === 5627) {
     expName.style.width = '13.5%'
   }
   if (exp === 5628) {
     expName.style.width = '14%'
   }
   if (exp === 5629) {
     expName.style.width = '14.5%'
    } 
   if (exp === 5630) {
     expName.style.width = '15%'
    } 
   if (exp === 5631) {
     expName.style.width = '15.5%'
    } 
   if (exp === 5632) {
     expName.style.width = '16%'
    } 
   if (exp === 5633) {
      expName.style.width = '16.5%'
    } 
   if (exp === 5634) {
      expName.style.width = '17%'
    } 
   if (exp === 5635) {
      expName.style.width = '17.5%'
    } 
   if (exp === 5636) {
      expName.style.width = '18%'
    } 
   if (exp === 5637) {
      expName.style.width = '18.5%'
    } 
   if (exp === 5638) {
      expName.style.width = '19%'
    } 
   if (exp === 5639) {
      expName.style.width = '19.5%'
   }
   if (exp === 5640) {
      expName.style.width = '20%'
    }
   if (exp === 5641) {
      expName.style.width = '20.5%'
    }
   if (exp === 5642) {
      expName.style.width = '21%'
    }
   if (exp === 5643) {
      expName.style.width = '21.5%'
    }
   if (exp === 5644) {
      expName.style.width = '22%'
    }
   if (exp === 5645) {
      expName.style.width = '22.5%'
    }
   if (exp === 5646) {
      expName.style.width = '23%'
    }
   if (exp === 5647) {
      expName.style.width = '23.5%'
    }
   if (exp === 5648) {
      expName.style.width = '24%'
    }
   if (exp === 5649) {
      expName.style.width = '24.5%'
    }
   if (exp === 5650) {
      expName.style.width = '25%'
  }
   if (exp === 5651) {
      expName.style.width = '25.5%'
    }
   if (exp === 5652) {
      expName.style.width = '26%'
    }
   if (exp === 5653) {
      expName.style.width = '26.5%'
    }
   if (exp === 5654) {
      expName.style.width = '27%'
    }
   if (exp === 5655) {
      expName.style.width = '27.5%'
    }
    if (exp === 5656) {
      expName.style.width = '28%'
    }
    if (exp === 5657) {
      expName.style.width = '28.5%'
    }
    if (exp === 5658) {
      expName.style.width = '29%'
    }
    if (exp === 5659) {
      expName.style.width = '29.5%'
    }
    if (exp === 5660) {
      expName.style.width = '30%'
    }
    if (exp === 5661) {
      expName.style.width = '30.5%'
  }
    if (exp === 5662) {
      expName.style.width = '31%'
    }
    if (exp === 5663) {
      expName.style.width = '31.5%'
    }
    if (exp === 5664) {
      expName.style.width = '32%'
    }
    if (exp === 5665) {
      expName.style.width = '32.5%'
    }
    if (exp === 5666) {
      expName.style.width = '33%'
    }
    if (exp === 5667) {
      expName.style.width = '33.5%'
    }
    if (exp === 5668) {
      expName.style.width = '34%'
    }
    if (exp === 5669) {
      expName.style.width = '34.5%'
    }
    if (exp === 5670) {
      expName.style.width = '35%'
    }
    if (exp === 5671) {
      expName.style.width = '35.5%'
    }
    if (exp === 5672) {
      expName.style.width = '36%'
      }
    if (exp === 5673) {
      expName.style.width = '36.5%'
    }
    if (exp === 5674) {
      expName.style.width = '37%'
    }
    if (exp === 5675) {
      expName.style.width = '37.5%'
    }
    if (exp === 5676) {
      expName.style.width = '38%'
    }
    if (exp === 5677) {
      expName.style.width = '38.5%'
    }
    if (exp === 5678) {
      expName.style.width = '39%'
    }
    if (exp === 5679) {
      expName.style.width = '39.5%'
    }
    if (exp === 5680) {
      expName.style.width = '40%'
    }
    if (exp === 5681) {
      expName.style.width = '40.5%'
    }
    if (exp === 5682) {
      expName.style.width = '41%'
    }
    if (exp === 5683) {
      expName.style.width = '41.5%'
  }
    if (exp === 5684) {
      expName.style.width = '42%'
    }
    if (exp === 5685) {
      expName.style.width = '42.5%'
    }
    if (exp === 5686) {
      expName.style.width = '43%'
    }
    if (exp === 5687) {
      expName.style.width = '43.5%'
    }
    if (exp === 5688) {
      expName.style.width = '44%'
    }
    if (exp === 5689) {
      expName.style.width = '44.5%'
    }
    if (exp === 5690) {
      expName.style.width = '45%'
    }
    if (exp === 5691) {
      expName.style.width = '45.5%'
    }
    if (exp === 5692) {
      expName.style.width = '46%'
    }
    if (exp === 5693) {
      expName.style.width = '46.5%'
    }
    if (exp === 5694) {
      expName.style.width = '47%'
    }
    if (exp === 5695) {
      expName.style.width = '47.5%'
    }
    if (exp === 5696) {
      expName.style.width = '48%'
    }
    if (exp === 5697) {
      expName.style.width = '48.5%'
    }
    if (exp === 5698) {
      expName.style.width = '49%'
    }
    if (exp === 5699) {
      expName.style.width = '49.5%'
    }
    if (exp === 5700) {
      expName.style.width = '50%'
    }
   if (exp === 5701) {
      expName.style.width = '50.5%'
    }
   if (exp === 5702) {
      expName.style.width = '51%'
    }
   if (exp === 5703) {
      expName.style.width = '51.5%'
1  }
   if (exp === 5704) {
      expName.style.width = '52%'
    }
   if (exp === 5705) {
      expName.style.width = '52.5%'
    }
   if (exp === 5706) {
      expName.style.width = '53%'
    }
   if (exp === 5707) {
      expName.style.width = '53.5%'
   }
   if (exp === 5708) {
      expName.style.width = '54%'
    } 
   if (exp === 5709) {
      expName.style.width = '54.5%'
    } 
   if (exp === 5710) {
      expName.style.width = '55%'
    } 
   if (exp === 5711) {
      expName.style.width = '55.5%'
    } 
   if (exp === 5712) {
      expName.style.width = '56%'
    } 
   if (exp === 5713) {
      expName.style.width = '56.5%'
    } 
   if (exp === 5714) {
      expName.style.width = '57%'
    } 
   if (exp === 5715) {
      expName.style.width = '57.5%'
    } 
   if (exp === 5716) {
      expName.style.width = '58%'
    } 
   if (exp === 5717) {
      expName.style.width = '58.5%'
    } 
   if (exp === 5718) {
      expName.style.width = '59%'
    } 
   if (exp === 5719) {
      expName.style.width = '59.5%'
    }
   if (exp === 5710) {
      expName.style.width = '60%'
    }
   if (exp === 5721) {
     expName.style.width = '60.5%'
    }
   if (exp === 5722) {
     expName.style.width = '61%'
    }
   if (exp === 5723) {
     expName.style.width = '61.5%'
    }
   if (exp === 5724) {
     expName.style.width = '62%'
    }
   if (exp === 5725) {
     expName.style.width = '62.5%'
    }
   if (exp === 5726) {
     expName.style.width = '63%'
    }
   if (exp === 5727) {
     expName.style.width = '63.5%'
   }
   if (exp === 5728) {
     expName.style.width = '64%'
    } 
   if (exp === 5729) {
     expName.style.width = '64.5%'
    } 
   if (exp === 5730) {
     expName.style.width = '65%'
    } 
   if (exp === 5731) {
     expName.style.width = '65.5%'
    } 
   if (exp === 5732) {
     expName.style.width = '66%'
    } 
   if (exp === 5733) {
      expName.style.width = '66.5%'
    } 
   if (exp === 5734) {
      expName.style.width = '67%'
    } 
   if (exp === 5735) {
      expName.style.width = '67.5%'
    } 
   if (exp === 5736) {
      expName.style.width = '68%'
    } 
   if (exp === 5737) {
      expName.style.width = '68.5%'
    } 
   if (exp === 5738) {
      expName.style.width = '69%'
    } 
   if (exp === 5739) {
      expName.style.width = '69.5%'
    }
   if (exp === 5740) {
      expName.style.width = '70%'
    }
   if (exp === 5741) {
      expName.style.width = '70.5%'
    }
   if (exp === 5742) {
      expName.style.width = '71%'
    }
   if (exp === 5743) {
      expName.style.width = '71.5%'
    }
   if (exp === 5744) {
      expName.style.width = '72%'
    }
   if (exp === 5745) {
      expName.style.width = '72.5%'
    }
   if (exp === 5746) {
      expName.style.width = '73%'
    }
   if (exp === 5747) {
      expName.style.width = '73.5%'
    }
   if (exp === 5748) {
      expName.style.width = '74%'
    }
   if (exp === 5749) {
      expName.style.width = '74.5%'
    }
   if (exp === 5750) {
      expName.style.width = '75%'
    }
   if (exp === 5751) {
      expName.style.width = '75.5%'
    }
   if (exp === 5752) {
      expName.style.width = '76%'
    }
   if (exp === 5753) {
      expName.style.width = '76.5%'
    }
   if (exp === 5754) {
      expName.style.width = '77%'
    }
   if (exp === 5755) {
      expName.style.width = '77.5%'
    }
    if (exp === 5756) {
      expName.style.width = '78%'
    }
    if (exp === 5757) {
      expName.style.width = '78.5%'
    }
    if (exp === 5758) {
      expName.style.width = '79%'
    }
    if (exp === 5759) {
      expName.style.width = '79.5%'
    }
    if (exp === 5760) {
      expName.style.width = '80%'
    }
    if (exp === 5761) {
      exppName.style.width = '80.5%'
    }
    if (exp === 5762) {
      expName.style.width = '81%'
    }
    if (exp === 5763) {
      expName.style.width = '81.5%'
    }
    if (exp === 5764) {
      expName.style.width = '82%'
    }
    if (exp === 5765) {
      expName.style.width = '82.5%'
    }
    if (exp === 5766) {
      expName.style.width = '83%'
    }
    if (exp === 5767) {
      expName.style.width = '83.5%'
    }
    if (exp === 5768) {
      expName.style.width = '84%'
    }
    if (exp === 5769) {
      expName.style.width = '84.5%'
    }
    if (exp === 5770) {
      expName.style.width = '85%'
    }
    if (exp === 5771) {
      expName.style.width = '85.5%'
    }
    if (exp === 5772) {
      expName.style.width = '86%'
    }
    if (exp === 5773) {
      expName.style.width = '86.5%'
    }
    if (exp === 5774) {
      expName.style.width = '87%'
    }
    if (exp === 5775) {
      expName.style.width = '87.5%'
    }
    if (exp === 5776) {
      expName.style.width = '88%'
    }
    if (exp === 5777) {
      expName.style.width = '88.5%'
    }
    if (exp === 5778) {
      expName.style.width = '89%'
    }
    if (exp === 5779) {
      expName.style.width = '89.5%'
    }
    if (exp === 5780) {
      expName.style.width = '90%'
    }
    if (exp === 5781) {
      expName.style.width = '90.5%'
    }
    if (exp === 5782) {
      expName.style.width = '91%'
    }
    if (exp === 5783) {
      expName.style.width = '91.5%'
    }
    if (exp === 5784) {
      expName.style.width = '92%'
    }
    if (exp === 5785) {
      expName.style.width = '92.5%'
    }
    if (exp === 5786) {
      expName.style.width = '93%'
    }
    if (exp === 5787) {
      expName.style.width = '93.5%'
    }
    if (exp === 5788) {
      expName.style.width = '94%'
    }
    if (exp === 5789) {
      expName.style.width = '94.5%'
    }
    if (exp === 5790) {
      expName.style.width = '95%'
    }
    if (exp === 5791) {
      expName.style.width = '95.5%'
    }
    if (exp === 5792) {
      expName.style.width = '96%'
    }
    if (exp === 5793) {
      expName.style.width = '96.5%'
    }
    if (exp === 5794) {
      expName.style.width = '97%'
    }
    if (exp === 5795) {
      expName.style.width = '97.5%'
    }
    if (exp === 5796) {
      expName.style.width = '98%'
    }
    if (exp === 5797) {
      expName.style.width = '98.5%'
    }
    if (exp === 5798) {
      expName.style.width = '99%'
    }
    if (exp === 5799) {
      expName.style.width = '99.5%'
    }
    if (exp === 5800) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 5801 && exp <= 6000) 
    {
      expName = expFive;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 5801) {
      expName.style.width = '0.5%'
    }
   if (exp === 5802) {
      expName.style.width = '1%'
    }
   if (exp === 5803) {
      expName.style.width = '1.5%'
    }
   if (exp === 5804) {
      expName.style.width = '2%'
    }
   if (exp === 5805) {
      expName.style.width = '2.5%'
    }
   if (exp === 5806) {
      expName.style.width = '3%'
   }
   if (exp === 5807) {
      expName.style.width = '3.5%'
   }
   if (exp === 5808) {
      expName.style.width = '4%'
    } 
   if (exp === 5809) {
      expName.style.width = '4.5%'
    } 
   if (exp === 5810) {
      expName.style.width = '5%'
    } 
   if (exp === 5811) {
      expName.style.width = '5.5%'
    } 
   if (exp === 5812) {
      expName.style.width = '6%'
    } 
   if (exp === 5813) {
      expName.style.width = '6.5%'
    } 
   if (exp === 5814) {
      expName.style.width = '7%'
    } 
   if (exp === 5815) {
      expName.style.width = '7.5%'
    } 
   if (exp === 5816) {
      expName.style.width = '8%'
    } 
   if (exp === 5817) {
      expName.style.width = '8.5%'
   } 
   if (exp === 5818) {
      expName.style.width = '9%'
    } 
   if (exp === 5819) {
      expName.style.width = '9.5%'
    }
   if (exp === 5820) {
      expName.style.width = '10%'
    }
   if (exp === 5821) {
     expName.style.width = '10.5%'
    }
   if (exp === 5822) {
     expName.style.width = '11%'
    }
   if (exp === 5823) {
     expName.style.width = '11.5%'
    }
   if (exp === 5824) {
     expName.style.width = '12%'
    }
   if (exp === 5825) {
     expName.style.width = '12.5%'
    }
   if (exp === 5826) {
     expName.style.width = '13%'
    }
   if (exp === 5827) {
     expName.style.width = '13.5%'
   }
   if (exp === 5828) {
     expName.style.width = '14%'
   }
   if (exp === 5829) {
     expName.style.width = '14.5%'
    } 
   if (exp === 5830) {
     expName.style.width = '15%'
    } 
   if (exp === 5831) {
     expName.style.width = '15.5%'
    } 
   if (exp === 5832) {
     expName.style.width = '16%'
    } 
   if (exp === 5833) {
      expName.style.width = '16.5%'
    } 
   if (exp === 5834) {
      expName.style.width = '17%'
    } 
   if (exp === 5835) {
      expName.style.width = '17.5%'
    } 
   if (exp === 5836) {
      expName.style.width = '18%'
    } 
   if (exp === 5837) {
      expName.style.width = '18.5%'
    } 
   if (exp === 5838) {
      expName.style.width = '19%'
    } 
   if (exp === 5839) {
      expName.style.width = '19.5%'
   }
   if (exp === 5840) {
      expName.style.width = '20%'
    }
   if (exp === 5841) {
      expName.style.width = '20.5%'
    }
   if (exp === 5842) {
      expName.style.width = '21%'
    }
   if (exp === 5843) {
      expName.style.width = '21.5%'
    }
   if (exp === 5844) {
      expName.style.width = '22%'
    }
   if (exp === 5845) {
      expName.style.width = '22.5%'
    }
   if (exp === 5846) {
      expName.style.width = '23%'
    }
   if (exp === 5847) {
      expName.style.width = '23.5%'
    }
   if (exp === 5848) {
      expName.style.width = '24%'
    }
   if (exp === 5849) {
      expName.style.width = '24.5%'
    }
   if (exp === 5850) {
      expName.style.width = '25%'
  }
   if (exp === 5851) {
      expName.style.width = '25.5%'
    }
   if (exp === 5852) {
      expName.style.width = '26%'
    }
   if (exp === 5853) {
      expName.style.width = '26.5%'
    }
   if (exp === 5854) {
      expName.style.width = '27%'
    }
   if (exp === 5855) {
      expName.style.width = '27.5%'
    }
    if (exp === 5856) {
      expName.style.width = '28%'
    }
    if (exp === 5857) {
      expName.style.width = '28.5%'
    }
    if (exp === 5858) {
      expName.style.width = '29%'
    }
    if (exp === 5859) {
      expName.style.width = '29.5%'
    }
    if (exp === 5860) {
      expName.style.width = '30%'
    }
    if (exp === 5861) {
      expName.style.width = '30.5%'
  }
    if (exp === 5862) {
      expName.style.width = '31%'
    }
    if (exp === 5863) {
      expName.style.width = '31.5%'
    }
    if (exp === 5864) {
      expName.style.width = '32%'
    }
    if (exp === 5865) {
      expName.style.width = '32.5%'
    }
    if (exp === 5866) {
      expName.style.width = '33%'
    }
    if (exp === 5867) {
      expName.style.width = '33.5%'
    }
    if (exp === 5868) {
      expName.style.width = '34%'
    }
    if (exp === 5869) {
      expName.style.width = '34.5%'
    }
    if (exp === 5870) {
      expName.style.width = '35%'
    }
    if (exp === 5871) {
      expName.style.width = '35.5%'
    }
    if (exp === 5872) {
      expName.style.width = '36%'
    }
    if (exp === 5873) {
      expName.style.width = '36.5%'
    }
    if (exp === 5874) {
      expName.style.width = '37%'
    }
    if (exp === 5875) {
      expName.style.width = '37.5%'
    }
    if (exp === 5876) {
      expName.style.width = '38%'
    }
    if (exp === 5877) {
      expName.style.width = '38.5%'
    }
    if (exp === 5878) {
      expName.style.width = '39%'
    }
    if (exp === 5879) {
      expName.style.width = '39.5%'
    }
    if (exp === 5880) {
      expName.style.width = '40%'
    }
    if (exp === 5881) {
      expName.style.width = '40.5%'
    }
    if (exp === 5882) {
      expName.style.width = '41%'
    }
    if (exp === 5883) {
      expName.style.width = '41.5%'
    }
    if (exp === 5884) {
      expName.style.width = '42%'
    }
    if (exp === 5885) {
      expName.style.width = '42.5%'
    }
    if (exp === 5886) {
      expName.style.width = '43%'
    }
    if (exp === 5887) {
      expName.style.width = '43.5%'
    }
    if (exp === 5888) {
      expName.style.width = '44%'
    }
    if (exp === 5889) {
      expName.style.width = '44.5%'
    }
    if (exp === 5890) {
      expName.style.width = '45%'
    }
    if (exp === 5891) {
      expName.style.width = '45.5%'
    }
    if (exp === 5892) {
      expName.style.width = '46%'
    }
    if (exp === 5893) {
      expName.style.width = '46.5%'
    }
    if (exp === 5894) {
      expName.style.width = '47%'
    }
    if (exp === 5895) {
      expName.style.width = '47.5%'
    }
    if (exp === 5896) {
      expName.style.width = '48%'
    }
    if (exp === 5897) {
      expName.style.width = '48.5%'
    }
    if (exp === 5898) {
      expName.style.width = '49%'
    }
    if (exp === 5899) {
      expName.style.width = '49.5%'
    }
    if (exp === 5900) {
      expName.style.width = '50%'
    }
   if (exp === 5901) {
      expName.style.width = '50.5%'
    }
   if (exp === 5902) {
      expName.style.width = '51%'
    }
   if (exp === 5903) {
      expName.style.width = '51.5%'
  }
   if (exp === 5904) {
      expName.style.width = '52%'
    }
   if (exp === 5905) {
      expName.style.width = '52.5%'
    }
   if (exp === 5906) {
      expName.style.width = '53%'
    }
   if (exp === 5907) {
      expName.style.width = '53.5%'
   }
   if (exp === 5908) {
      expName.style.width = '54%'
    } 
   if (exp === 5909) {
      expName.style.width = '54.5%'
    } 
   if (exp === 5910) {
      expName.style.width = '55%'
    } 
   if (exp === 5911) {
      expName.style.width = '55.5%'
    } 
   if (exp === 5912) {
      expName.style.width = '56%'
    } 
   if (exp === 5913) {
      expName.style.width = '56.5%'
    } 
   if (exp === 5914) {
      expName.style.width = '57%'
    } 
   if (exp === 5915) {
      expName.style.width = '57.5%'
    } 
   if (exp === 5916) {
      expName.style.width = '58%'
    } 
   if (exp === 5917) {
      expName.style.width = '58.5%'
    } 
   if (exp === 5918) {
      expName.style.width = '59%'
    } 
   if (exp === 5919) {
      expName.style.width = '59.5%'
    }
   if (exp === 5920) {
      expName.style.width = '60%'
    }
   if (exp === 5921) {
     expName.style.width = '60.5%'
    }
   if (exp === 5922) {
     expName.style.width = '61%'
    }
   if (exp === 5923) {
     expName.style.width = '61.5%'
    }
   if (exp === 5924) {
     expName.style.width = '62%'
    }
   if (exp === 5925) {
     expName.style.width = '62.5%'
    }
   if (exp === 5926) {
     expName.style.width = '63%'
    }
   if (exp === 5927) {
     expName.style.width = '63.5%'
   }
   if (exp === 5928) {
     expName.style.width = '64%'
    } 
   if (exp === 5929) {
     expName.style.width = '64.5%'
    } 
   if (exp === 5930) {
     expName.style.width = '65%'
    } 
   if (exp === 5931) {
     expName.style.width = '65.5%'
    } 
   if (exp === 5932) {
     expName.style.width = '66%'
    } 
   if (exp === 5933) {
      expName.style.width = '66.5%'
    } 
   if (exp === 5934) {
      expName.style.width = '67%'
    } 
   if (exp === 5935) {
      expName.style.width = '67.5%'
    } 
   if (exp === 5936) {
      expName.style.width = '68%'
    } 
   if (exp === 5937) {
      expName.style.width = '68.5%'
    } 
   if (exp === 5938) {
      expName.style.width = '69%'
    } 
   if (exp === 5939) {
      expName.style.width = '69.5%'
    }
   if (exp === 5940) {
      expName.style.width = '70%'
    }
   if (exp === 5941) {
      expName.style.width = '70.5%'
    }
   if (exp === 5942) {
      expName.style.width = '71%'
    }
   if (exp === 5943) {
      expName.style.width = '71.5%'
    }
   if (exp === 5944) {
      expName.style.width = '72%'
    }
   if (exp === 5945) {
      expName.style.width = '72.5%'
    }
   if (exp === 5946) {
      expName.style.width = '73%'
    }
   if (exp === 5947) {
      expName.style.width = '73.5%'
    }
   if (exp === 5948) {
      expName.style.width = '74%'
    }
   if (exp === 5949) {
      expName.style.width = '74.5%'
    }
   if (exp === 5950) {
      expName.style.width = '75%'
    }
   if (exp === 5951) {
      expName.style.width = '75.5%'
    }
   if (exp === 5952) {
      expName.style.width = '76%'
    }
   if (exp === 5953) {
      expName.style.width = '76.5%'
    }
   if (exp === 5954) {
      expName.style.width = '77%'
    }
   if (exp === 5955) {
      expName.style.width = '77.5%'
    }
    if (exp === 5956) {
      expName.style.width = '78%'
    }
    if (exp === 5957) {
      expName.style.width = '78.5%'
    }
    if (exp === 5958) {
      expName.style.width = '79%'
    }
    if (exp === 5959) {
      expName.style.width = '79.5%'
    }
    if (exp === 5960) {
      expName.style.width = '80%'
    }
    if (exp === 5961) {
      exppName.style.width = '80.5%'
    }
    if (exp === 5962) {
      expName.style.width = '81%'
    }
    if (exp === 5963) {
      expName.style.width = '81.5%'
    }
    if (exp === 5964) {
      expName.style.width = '82%'
    }
    if (exp === 5965) {
      expName.style.width = '82.5%'
    }
    if (exp === 5966) {
      expName.style.width = '83%'
    }
    if (exp === 5967) {
      expName.style.width = '83.5%'
    }
    if (exp === 5968) {
      expName.style.width = '84%'
    }
    if (exp === 5969) {
      expName.style.width = '84.5%'
    }
    if (exp === 5970) {
      expName.style.width = '85%'
    }
    if (exp === 5971) {
      expName.style.width = '85.5%'
    }
    if (exp === 5972) {
      expName.style.width = '86%'
    }
    if (exp === 5973) {
      expName.style.width = '86.5%'
    }
    if (exp === 5974) {
      expName.style.width = '87%'
    }
    if (exp === 5975) {
      expName.style.width = '87.5%'
    }
    if (exp === 5976) {
      expName.style.width = '88%'
    }
    if (exp === 5977) {
      expName.style.width = '88.5%'
    }
    if (exp === 5978) {
      expName.style.width = '89%'
    }
    if (exp === 5979) {
      expName.style.width = '89.5%'
    }
    if (exp === 5980) {
      expName.style.width = '90%'
    }
    if (exp === 5981) {
      expName.style.width = '90.5%'
    }
    if (exp === 5982) {
      expName.style.width = '91%'
    }
    if (exp === 5983) {
      expName.style.width = '91.5%'
    }
    if (exp === 5984) {
      expName.style.width = '92%'
    }
    if (exp === 5985) {
      expName.style.width = '92.5%'
    }
    if (exp === 5986) {
      expName.style.width = '93%'
    }
    if (exp === 5987) {
      expName.style.width = '93.5%'
    }
    if (exp === 5988) {
      expName.style.width = '94%'
    }
    if (exp === 5989) {
      expName.style.width = '94.5%'
    }
    if (exp === 5990) {
      expName.style.width = '95%'
    }
    if (exp === 5991) {
      expName.style.width = '95.5%'
    }
    if (exp === 5992) {
      expName.style.width = '96%'
    }
    if (exp === 5993) {
      expName.style.width = '96.5%'
    }
    if (exp === 5994) {
      expName.style.width = '97%'
    }
    if (exp === 5995) {
      expName.style.width = '97.5%'
    }
    if (exp === 5996) {
      expName.style.width = '98%'
    }
    if (exp === 5997) {
      expName.style.width = '98.5%'
    }
    if (exp === 5998) {
      expName.style.width = '99%'
    }
    if (exp === 5999) {
      expName.style.width = '99.5%'
    }
    if (exp === 6000) {
      expName.style.width = '100%'
    }
    }
     
    if (exp === 6000) {
      setTimeout(() => {
        expOne.style.display = 'none'
        expTwo.style.display = 'none'
        expThree.style.display = 'none'
        expFour.style.display = 'none'
        expFive.style.display = 'none'
      }, 500)
      handleExpEight();
    }
  
    if (exp >= 6000) {
      handleExpEight();
      levelUpShow();
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
  
      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
      document.querySelector('.the-level').innerHTML = 8;
      
      document.querySelector('.next-level').innerHTML = '7000';
      
      document.querySelector('.level-title').innerHTML = 'Rookie Lvl 2'
    }
  
    
  } 
}

function handleExpEight() {
  let expName = expOne;
  if (playerLevel === 8) {
     
    if (exp >= 6001 && exp <= 6200) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 6001) {
      expName.style.width = '0.5%'
    }
   if (exp === 6002) {
      expName.style.width = '1%'
    }
   if (exp === 6003) {
      expName.style.width = '1.5%'
    }
   if (exp === 6004) {
      expName.style.width = '2%'
    }
   if (exp === 6005) {
      expName.style.width = '2.5%'
    }
   if (exp === 6006) {
      expName.style.width = '3%'
    }
   if (exp === 6007) {
      expName.style.width = '3.5%'
   }
   if (exp === 6008) {
      expName.style.width = '4%'
    } 
   if (exp === 6009) {
      expName.style.width = '4.5%'
    } 
   if (exp === 6010) {
      expName.style.width = '5%'
    } 
   if (exp === 6011) {
      expName.style.width = '5.5%'
    } 
   if (exp === 6012) {
      expName.style.width = '6%'
    } 
   if (exp === 6013) {
      expName.style.width = '6.5%'
    } 
   if (exp === 6014) {
      expName.style.width = '7%'
    } 
   if (exp === 6015) {
      expName.style.width = '7.5%'
    } 
   if (exp === 6016) {
      expName.style.width = '8%'
    } 
   if (exp === 6017) {
      expName.style.width = '8.5%'
    } 
   if (exp === 6018) {
      expName.style.width = '9%'
    } 
   if (exp === 6019) {
      expName.style.width = '9.5%'
    }
   if (exp === 6020) {
      expName.style.width = '10%'
    }
   if (exp === 6021) {
     expName.style.width = '10.5%'
    }
   if (exp === 6022) {
     expName.style.width = '11%'
    }
   if (exp === 6023) {
     expName.style.width = '11.5%'
    }
   if (exp === 6024) {
     expName.style.width = '12%'
    }
   if (exp === 6025) {
     expName.style.width = '12.5%'
    }
   if (exp === 6026) {
     expName.style.width = '13%'
    }
   if (exp === 6027) {
     expName.style.width = '13.5%'
   }
   if (exp === 6028) {
     expName.style.width = '14%'
    } 
   if (exp === 6029) {
     expName.style.width = '14.5%'
    } 
   if (exp === 6030) {
     expName.style.width = '15%'
    } 
   if (exp === 6031) {
     expName.style.width = '15.5%'
    } 
   if (exp === 6032) {
     expName.style.width = '16%'
    } 
   if (exp === 6033) {
      expName.style.width = '16.5%'
    } 
   if (exp === 6034) {
      expName.style.width = '17%'
    } 
   if (exp === 6035) {
      expName.style.width = '17.5%'
    } 
   if (exp === 6036) {
      expName.style.width = '18%'
    } 
   if (exp === 6037) {
      expName.style.width = '18.5%'
    } 
   if (exp === 6038) {
      expName.style.width = '19%'
    } 
   if (exp === 6039) {
      expName.style.width = '19.5%'
    }
   if (exp === 6040) {
      expName.style.width = '20%'
    }
   if (exp === 6041) {
      expName.style.width = '20.5%'
    }
   if (exp === 6042) {
      expName.style.width = '21%'
    }
   if (exp === 6043) {
      expName.style.width = '21.5%'
    }
   if (exp === 6044) {
      expName.style.width = '22%'
    }
   if (exp === 6045) {
      expName.style.width = '22.5%'
    }
   if (exp === 6046) {
      expName.style.width = '23%'
    }
   if (exp === 6047) {
      expName.style.width = '23.5%'
    }
   if (exp === 6048) {
      expName.style.width = '24%'
    }
   if (exp === 6049) {
      expName.style.width = '24.5%'
    }
   if (exp === 6050) {
      expName.style.width = '25%'
    }
   if (exp === 6051) {
      expName.style.width = '25.5%'
    }
   if (exp === 6052) {
      expName.style.width = '26%'
    }
   if (exp === 6053) {
      expName.style.width = '26.5%'
    }
   if (exp === 6054) {
      expName.style.width = '27%'
    }
   if (exp === 6055) {
      expName.style.width = '27.5%'
    }
    if (exp === 6056) {
      expName.style.width = '28%'
    }
    if (exp === 6057) {
      expName.style.width = '28.5%'
    }
    if (exp === 6058) {
      expName.style.width = '29%'
    }
    if (exp === 6059) {
      expName.style.width = '29.5%'
    }
    if (exp === 6060) {
      expName.style.width = '30%'
    }
    if (exp === 6061) {
      expName.style.width = '30.5%'
    }
    if (exp === 6062) {
      expName.style.width = '31%'
    }
    if (exp === 6063) {
      expName.style.width = '31.5%'
    }
    if (exp === 6064) {
      expName.style.width = '32%'
    }
    if (exp === 6065) {
      expName.style.width = '32.5%'
    }
    if (exp === 6066) {
      expName.style.width = '33%'
    }
    if (exp === 6067) {
      expName.style.width = '33.5%'
    }
    if (exp === 6068) {
      expName.style.width = '34%'
    }
    if (exp === 6069) {
      expName.style.width = '34.5%'
    }
    if (exp === 6070) {
      expName.style.width = '35%'
    }
    if (exp === 6071) {
      expName.style.width = '35.5%'
    }
    if (exp === 6072) {
      expName.style.width = '36%'
    }
    if (exp === 6073) {
      expName.style.width = '36.5%'
    }
    if (exp === 6074) {
      expName.style.width = '37%'
    }
    if (exp === 6075) {
      expName.style.width = '37.5%'
    }
    if (exp === 6076) {
      expName.style.width = '38%'
    }
    if (exp === 6077) {
      expName.style.width = '38.5%'
    }
    if (exp === 6078) {
      expName.style.width = '39%'
    }
    if (exp === 6079) {
      expName.style.width = '39.5%'
    }
    if (exp === 6080) {
      expName.style.width = '40%'
    }
    if (exp === 6081) {
      expName.style.width = '40.5%'
    }
    if (exp === 6082) {
      expName.style.width = '41%'
    }
    if (exp === 6083) {
      expName.style.width = '41.5%'
    }
    if (exp === 6084) {
      expName.style.width = '42%'
    }
    if (exp === 6085) {
      expName.style.width = '42.5%'
    }
    if (exp === 6086) {
      expName.style.width = '43%'
    }
    if (exp === 6087) {
      expName.style.width = '43.5%'
    }
    if (exp === 6088) {
      expName.style.width = '44%'
    }
    if (exp === 6089) {
      expName.style.width = '44.5%'
    }
    if (exp === 6090) {
      expName.style.width = '45%'
    }
    if (exp === 6091) {
      expName.style.width = '45.5%'
    }
    if (exp === 6092) {
      expName.style.width = '46%'
    }
    if (exp === 6093) {
      expName.style.width = '46.5%'
    }
    if (exp === 6094) {
      expName.style.width = '47%'
    }
    if (exp === 6095) {
      expName.style.width = '47.5%'
    }
    if (exp === 6096) {
      expName.style.width = '48%'
    }
    if (exp === 6097) {
      expName.style.width = '48.5%'
    }
    if (exp === 6098) {
      expName.style.width = '49%'
    }
    if (exp === 6099) {
      expName.style.width = '49.5%'
    }
    if (exp === 6100) {
      expName.style.width = '50%'
    }
   if (exp === 6601) {
      expName.style.width = '50.5%'
    }
   if (exp === 6602) {
      expName.style.width = '51%'
    }
   if (exp === 6103) {
      expName.style.width = '51.5%'
    }
   if (exp === 6104) {
      expName.style.width = '52%'
    }
   if (exp === 6105) {
      expName.style.width = '52.5%'
    }
   if (exp === 6106) {
      expName.style.width = '53%'
    }
   if (exp === 6107) {
      expName.style.width = '53.5%'
   }
   if (exp === 6108) {
      expName.style.width = '54%'
    } 
   if (exp === 6109) {
      expName.style.width = '54.5%'
    } 
   if (exp === 6110) {
      expName.style.width = '55%'
    } 
   if (exp === 6111) {
      expName.style.width = '55.5%'
    } 
   if (exp === 6112) {
      expName.style.width = '56%'
    } 
   if (exp === 6113) {
      expName.style.width = '56.5%'
    } 
   if (exp === 6114) {
      expName.style.width = '57%'
    } 
   if (exp === 6115) {
      expName.style.width = '57.5%'
    } 
   if (exp === 6116) {
      expName.style.width = '58%'
    } 
   if (exp === 6117) {
      expName.style.width = '58.5%'
    } 
   if (exp === 6118) {
      expName.style.width = '59%'
    } 
   if (exp === 6119) {
      expName.style.width = '59.5%'
    }
   if (exp === 6120) {
      expName.style.width = '60%'
    }
   if (exp === 6121) {
     expName.style.width = '60.5%'
    }
   if (exp === 6122) {
     expName.style.width = '61%'
    }
   if (exp === 6123) {
     expName.style.width = '61.5%'
    }
   if (exp === 6124) {
     expName.style.width = '62%'
    }
   if (exp === 6125) {
     expName.style.width = '62.5%'
    }
   if (exp === 6126) {
     expName.style.width = '63%'
    }
   if (exp === 6127) {
     expName.style.width = '63.5%'
   }
   if (exp === 6128) {
     expName.style.width = '64%'
    } 
   if (exp === 6129) {
     expName.style.width = '64.5%'
    } 
   if (exp === 6130) {
     expName.style.width = '65%'
    } 
   if (exp === 6131) {
     expName.style.width = '65.5%'
    } 
   if (exp === 6132) {
     expName.style.width = '66%'
    } 
   if (exp === 6133) {
      expName.style.width = '66.5%'
    } 
   if (exp === 6134) {
      expName.style.width = '67%'
    } 
   if (exp === 6135) {
      expName.style.width = '67.5%'
    } 
   if (exp === 6136) {
      expName.style.width = '68%'
    } 
   if (exp === 6137) {
      expName.style.width = '68.5%'
    } 
   if (exp === 6138) {
      expName.style.width = '69%'
    } 
   if (exp === 6139) {
      expName.style.width = '69.5%'
    }
   if (exp === 6140) {
      expName.style.width = '70%'
    }
   if (exp === 6141) {
      expName.style.width = '70.5%'
    }
   if (exp === 6142) {
      expName.style.width = '71%'
    }
   if (exp === 6143) {
      expName.style.width = '71.5%'
    }
   if (exp === 6144) {
      expName.style.width = '72%'
    }
   if (exp === 6145) {
      expName.style.width = '72.5%'
    }
   if (exp === 6146) {
      expName.style.width = '73%'
    }
   if (exp === 6147) {
      expName.style.width = '73.5%'
    }
   if (exp === 6148) {
      expName.style.width = '74%'
    }
   if (exp === 6149) {
      expName.style.width = '74.5%'
    }
   if (exp === 6150) {
      expName.style.width = '75%'
    }
   if (exp === 6151) {
      expName.style.width = '75.5%'
    }
   if (exp === 6152) {
      expName.style.width = '76%'
    }
   if (exp === 6153) {
      expName.style.width = '76.5%'
    }
   if (exp === 6154) {
      expName.style.width = '77%'
    }
   if (exp === 6155) {
      expName.style.width = '77.5%'
    }
    if (exp === 6156) {
      expName.style.width = '78%'
    }
    if (exp === 6157) {
      expName.style.width = '78.5%'
    }
    if (exp === 6158) {
      expName.style.width = '79%'
    }
    if (exp === 6159) {
      expName.style.width = '79.5%'
    }
    if (exp === 6160) {
      expName.style.width = '80%'
    }
    if (exp === 6161) {
      exppName.style.width = '80.5%'
    }
    if (exp === 6162) {
      expName.style.width = '81%'
    }
    if (exp === 6163) {
      expName.style.width = '81.5%'
    }
    if (exp === 6164) {
      expName.style.width = '82%'
    }
    if (exp === 6165) {
      expName.style.width = '82.5%'
    }
    if (exp === 6166) {
      expName.style.width = '83%'
    }
    if (exp === 6167) {
      expName.style.width = '83.5%'
    }
    if (exp === 6168) {
      expName.style.width = '84%'
    }
    if (exp === 6169) {
      expName.style.width = '84.5%'
    }
    if (exp === 6170) {
      expName.style.width = '85%'
    }
    if (exp === 6171) {
      expName.style.width = '85.5%'
    }
    if (exp === 6172) {
      expName.style.width = '86%'
    }
    if (exp === 6173) {
      expName.style.width = '86.5%'
    }
    if (exp === 6174) {
      expName.style.width = '87%'
    }
    if (exp === 6175) {
      expName.style.width = '87.5%'
    }
    if (exp === 6176) {
      expName.style.width = '88%'
    }
    if (exp === 6177) {
      expName.style.width = '88.5%'
    }
    if (exp === 6178) {
      expName.style.width = '89%'
    }
    if (exp === 6179) {
      expName.style.width = '89.5%'
    }
    if (exp === 6180) {
      expName.style.width = '90%'
    }
    if (exp === 6181) {
      expName.style.width = '90.5%'
    }
    if (exp === 6182) {
      expName.style.width = '91%'
    }
    if (exp === 6183) {
      expName.style.width = '91.5%'
    }
    if (exp === 6184) {
      expName.style.width = '92%'
    }
    if (exp === 6185) {
      expName.style.width = '92.5%'
    }
    if (exp === 6186) {
      expName.style.width = '93%'
    }
    if (exp === 6187) {
      expName.style.width = '93.5%'
    }
    if (exp === 6188) {
      expName.style.width = '94%'
    }
    if (exp === 6189) {
      expName.style.width = '94.5%'
    }
    if (exp === 6190) {
      expName.style.width = '95%'
    }
    if (exp === 6191) {
      expName.style.width = '95.5%'
    }
    if (exp === 6192) {
      expName.style.width = '96%'
    }
    if (exp === 6193) {
      expName.style.width = '96.5%'
    }
    if (exp === 6194) {
      expName.style.width = '97%'
    }
    if (exp === 6195) {
      expName.style.width = '97.5%'
    }
    if (exp === 6196) {
      expName.style.width = '98%'
    }
    if (exp === 6197) {
      expName.style.width = '98.5%'
    }
    if (exp === 6198) {
      expName.style.width = '99%'
    }
    if (exp === 6199) {
      expName.style.width = '99.5%'
    }
    if (exp === 6200) {
      expName.style.width = '100%'
    }
     
    }

    if (exp >= 6201 && exp <= 6400) 
    {
      expName = expTwo;

      expOne.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 6201) {
      expName.style.width = '0.5%'
    }
   if (exp === 6202) {
      expName.style.width = '1%'
    }
   if (exp === 6203) {
      expName.style.width = '1.5%'
    }
   if (exp === 6204) {
      expName.style.width = '2%'
    }
   if (exp === 6205) {
      expName.style.width = '2.5%'
    }
   if (exp === 6206) {
      expName.style.width = '3%'
    }
   if (exp === 6207) {
      expName.style.width = '3.5%'
   }
   if (exp === 6208) {
      expName.style.width = '4%'
    } 
   if (exp === 6209) {
      expName.style.width = '4.5%'
    } 
   if (exp === 6210) {
      expName.style.width = '5%'
    } 
   if (exp === 6211) {
      expName.style.width = '5.5%'
    } 
   if (exp === 6212) {
      expName.style.width = '6%'
    } 
   if (exp === 6213) {
      expName.style.width = '6.5%'
    } 
   if (exp === 6214) {
      expName.style.width = '7%'
    } 
   if (exp === 6215) {
      expName.style.width = '7.5%'
    } 
   if (exp === 6216) {
      expName.style.width = '8%'
    } 
   if (exp === 6217) {
      expName.style.width = '8.5%'
    } 
   if (exp === 6218) {
      expName.style.width = '9%'
    } 
   if (exp === 6219) {
      expName.style.width = '9.5%'
    }
   if (exp === 6220) {
      expName.style.width = '10%'
    }
   if (exp === 6221) {
     expName.style.width = '10.5%'
    }
   if (exp === 6222) {
     expName.style.width = '11%'
    }
   if (exp === 6223) {
     expName.style.width = '11.5%'
    }
   if (exp === 6224) {
     expName.style.width = '12%'
    }
   if (exp === 6225) {
     expName.style.width = '12.5%'
    }
   if (exp === 6226) {
     expName.style.width = '13%'
    }
   if (exp === 6227) {
     expName.style.width = '13.5%'
   }
   if (exp === 6228) {
     expName.style.width = '14%'
    } 
   if (exp === 6229) {
     expName.style.width = '14.5%'
    } 
   if (exp === 6230) {
     expName.style.width = '15%'
    } 
   if (exp === 6231) {
     expName.style.width = '15.5%'
    } 
   if (exp === 6232) {
     expName.style.width = '16%'
    } 
   if (exp === 6233) {
      expName.style.width = '16.5%'
    } 
   if (exp === 6234) {
      expName.style.width = '17%'
    } 
   if (exp === 6235) {
      expName.style.width = '17.5%'
    } 
   if (exp === 6236) {
      expName.style.width = '18%'
    } 
   if (exp === 6237) {
      expName.style.width = '18.5%'
    } 
   if (exp === 6238) {
      expName.style.width = '19%'
    } 
   if (exp === 6239) {
      expName.style.width = '19.5%'
    }
   if (exp === 6240) {
      expName.style.width = '20%'
    }
   if (exp === 6241) {
      expName.style.width = '20.5%'
    }
   if (exp === 6242) {
      expName.style.width = '21%'
    }
   if (exp === 6243) {
      expName.style.width = '21.5%'
    }
   if (exp === 6244) {
      expName.style.width = '22%'
    }
   if (exp === 6245) {
      expName.style.width = '22.5%'
    }
   if (exp === 6246) {
      expName.style.width = '23%'
    }
   if (exp === 6247) {
      expName.style.width = '23.5%'
    }
   if (exp === 6248) {
      expName.style.width = '24%'
    }
   if (exp === 6249) {
      expName.style.width = '24.5%'
    }
   if (exp === 6250) {
      expName.style.width = '25%'
    }
   if (exp === 6251) {
      expName.style.width = '25.5%'
    }
   if (exp === 6252) {
      expName.style.width = '26%'
    }
   if (exp === 6253) {
      expName.style.width = '26.5%'
    }
   if (exp === 6254) {
      expName.style.width = '27%'
    }
   if (exp === 6255) {
      expName.style.width = '27.5%'
    }
    if (exp === 6256) {
      expName.style.width = '28%'
    }
    if (exp === 6257) {
      expName.style.width = '28.5%'
    }
    if (exp === 6258) {
      expName.style.width = '29%'
    }
    if (exp === 6259) {
      expName.style.width = '29.5%'
    }
    if (exp === 6260) {
      expName.style.width = '30%'
    }
    if (exp === 6261) {
      expName.style.width = '30.5%'
    }
    if (exp === 6262) {
      expName.style.width = '31%'
    }
    if (exp === 6263) {
      expName.style.width = '31.5%'
    }
    if (exp === 6264) {
      expName.style.width = '32%'
    }
    if (exp === 6265) {
      expName.style.width = '32.5%'
    }
    if (exp === 6266) {
      expName.style.width = '33%'
    }
    if (exp === 6267) {
      expName.style.width = '33.5%'
    }
    if (exp === 6268) {
      expName.style.width = '34%'
    }
    if (exp === 6269) {
      expName.style.width = '34.5%'
    }
    if (exp === 6270) {
      expName.style.width = '35%'
    }
    if (exp === 6271) {
      expName.style.width = '35.5%'
    }
    if (exp === 6272) {
      expName.style.width = '36%'
    }
    if (exp === 6273) {
      expName.style.width = '36.5%'
    }
    if (exp === 6274) {
      expName.style.width = '37%'
    }
    if (exp === 6275) {
      expName.style.width = '37.5%'
    }
    if (exp === 6276) {
      expName.style.width = '38%'
    }
    if (exp === 6277) {
      expName.style.width = '38.5%'
    }
    if (exp === 6278) {
      expName.style.width = '39%'
    }
    if (exp === 6279) {
      expName.style.width = '39.5%'
    }
    if (exp === 6280) {
      expName.style.width = '40%'
    }
    if (exp === 6281) {
      expName.style.width = '40.5%'
    }
    if (exp === 6282) {
      expName.style.width = '41%'
    }
    if (exp === 6283) {
      expName.style.width = '41.5%'
    }
    if (exp === 6284) {
      expName.style.width = '42%'
    }
    if (exp === 6285) {
      expName.style.width = '42.5%'
    }
    if (exp === 6286) {
      expName.style.width = '43%'
    }
    if (exp === 6287) {
      expName.style.width = '43.5%'
    }
    if (exp === 6288) {
      expName.style.width = '44%'
    }
    if (exp === 6289) {
      expName.style.width = '44.5%'
    }
    if (exp === 6290) {
      expName.style.width = '45%'
    }
    if (exp === 6291) {
      expName.style.width = '45.5%'
    }
    if (exp === 6292) {
      expName.style.width = '46%'
    }
    if (exp === 6293) {
      expName.style.width = '46.5%'
    }
    if (exp === 6294) {
      expName.style.width = '47%'
    }
    if (exp === 6295) {
      expName.style.width = '47.5%'
    }
    if (exp === 6296) {
      expName.style.width = '48%'
    }
    if (exp === 6297) {
      expName.style.width = '48.5%'
    }
    if (exp === 6298) {
      expName.style.width = '49%'
    }
    if (exp === 6299) {
      expName.style.width = '49.5%'
    }
    if (exp === 6300) {
      expName.style.width = '50%'
    }
   if (exp === 6301) {
      expName.style.width = '50.5%'
    }
   if (exp === 6302) {
      expName.style.width = '51%'
    }
   if (exp === 6303) {
      expName.style.width = '51.5%'
    }
   if (exp === 6304) {
      expName.style.width = '52%'
    }
   if (exp === 6305) {
      expName.style.width = '52.5%'
    }
   if (exp === 6306) {
      expName.style.width = '53%'
    }
   if (exp === 6307) {
      expName.style.width = '53.5%'
   }
   if (exp === 6308) {
      expName.style.width = '54%'
    } 
   if (exp === 6309) {
      expName.style.width = '54.5%'
    } 
   if (exp === 6310) {
      expName.style.width = '55%'
    } 
   if (exp === 6311) {
      expName.style.width = '55.5%'
    } 
   if (exp === 6312) {
      expName.style.width = '56%'
    } 
   if (exp === 6313) {
      expName.style.width = '56.5%'
    } 
   if (exp === 6314) {
      expName.style.width = '57%'
    } 
   if (exp === 6315) {
      expName.style.width = '57.5%'
    } 
   if (exp === 6316) {
      expName.style.width = '58%'
    } 
   if (exp === 6317) {
      expName.style.width = '58.5%'
    } 
   if (exp === 6318) {
      expName.style.width = '59%'
    } 
   if (exp === 6319) {
      expName.style.width = '59.5%'
    }
   if (exp === 6320) {
      expName.style.width = '60%'
    }
   if (exp === 6321) {
     expName.style.width = '60.5%'
    }
   if (exp === 6322) {
     expName.style.width = '61%'
    }
   if (exp === 6323) {
     expName.style.width = '61.5%'
    }
   if (exp === 6324) {
     expName.style.width = '62%'
    }
   if (exp === 6325) {
     expName.style.width = '62.5%'
    }
   if (exp === 6326) {
     expName.style.width = '63%'
    }
   if (exp === 6327) {
     expName.style.width = '63.5%'
   }
   if (exp === 6328) {
     expName.style.width = '64%'
    } 
   if (exp === 6329) {
     expName.style.width = '64.5%'
    } 
   if (exp === 6330) {
     expName.style.width = '65%'
    } 
   if (exp === 6331) {
     expName.style.width = '65.5%'
    } 
   if (exp === 6332) {
     expName.style.width = '66%'
    } 
   if (exp === 6333) {
      expName.style.width = '66.5%'
    } 
   if (exp === 6334) {
      expName.style.width = '67%'
    } 
   if (exp === 6335) {
      expName.style.width = '67.5%'
    } 
   if (exp === 6336) {
      expName.style.width = '68%'
    } 
   if (exp === 6337) {
      expName.style.width = '68.5%'
    } 
   if (exp === 6338) {
      expName.style.width = '69%'
    } 
   if (exp === 6339) {
      expName.style.width = '69.5%'
    }
   if (exp === 6340) {
      expName.style.width = '70%'
    }
   if (exp === 6341) {
      expName.style.width = '70.5%'
    }
   if (exp === 6342) {
      expName.style.width = '71%'
    }
   if (exp === 6343) {
      expName.style.width = '71.5%'
    }
   if (exp === 6344) {
      expName.style.width = '72%'
    }
   if (exp === 6345) {
      expName.style.width = '72.5%'
    }
   if (exp === 6346) {
      expName.style.width = '73%'
    }
   if (exp === 6347) {
      expName.style.width = '73.5%'
    }
   if (exp === 6348) {
      expName.style.width = '74%'
    }
   if (exp === 6349) {
      expName.style.width = '74.5%'
    }
   if (exp === 6350) {
      expName.style.width = '75%'
    }
   if (exp === 6351) {
      expName.style.width = '75.5%'
    }
   if (exp === 6352) {
      expName.style.width = '76%'
    }
   if (exp === 6353) {
      expName.style.width = '76.5%'
    }
   if (exp === 6354) {
      expName.style.width = '77%'
    }
   if (exp === 6355) {
      expName.style.width = '77.5%'
    }
    if (exp === 6356) {
      expName.style.width = '78%'
    }
    if (exp === 6357) {
      expName.style.width = '78.5%'
    }
    if (exp === 6358) {
      expName.style.width = '79%'
    }
    if (exp === 6359) {
      expName.style.width = '79.5%'
    }
    if (exp === 6360) {
      expName.style.width = '80%'
    }
    if (exp === 6361) {
      exppName.style.width = '80.5%'
    }
    if (exp === 6362) {
      expName.style.width = '81%'
    }
    if (exp === 6363) {
      expName.style.width = '81.5%'
    }
    if (exp === 6364) {
      expName.style.width = '82%'
    }
    if (exp === 6365) {
      expName.style.width = '82.5%'
    }
    if (exp === 6366) {
      expName.style.width = '83%'
    }
    if (exp === 6367) {
      expName.style.width = '83.5%'
    }
    if (exp === 6368) {
      expName.style.width = '84%'
    }
    if (exp === 6369) {
      expName.style.width = '84.5%'
    }
    if (exp === 6370) {
      expName.style.width = '85%'
    }
    if (exp === 6371) {
      expName.style.width = '85.5%'
    }
    if (exp === 6372) {
      expName.style.width = '86%'
    }
    if (exp === 6373) {
      expName.style.width = '86.5%'
    }
    if (exp === 6374) {
      expName.style.width = '87%'
    }
    if (exp === 6375) {
      expName.style.width = '87.5%'
    }
    if (exp === 6376) {
      expName.style.width = '88%'
    }
    if (exp === 6377) {
      expName.style.width = '88.5%'
    }
    if (exp === 6378) {
      expName.style.width = '89%'
    }
    if (exp === 6379) {
      expName.style.width = '89.5%'
    }
    if (exp === 6380) {
      expName.style.width = '90%'
    }
    if (exp === 6381) {
      expName.style.width = '90.5%'
    }
    if (exp === 6382) {
      expName.style.width = '91%'
    }
    if (exp === 6383) {
      expName.style.width = '91.5%'
    }
    if (exp === 6384) {
      expName.style.width = '92%'
    }
    if (exp === 6385) {
      expName.style.width = '92.5%'
    }
    if (exp === 6386) {
      expName.style.width = '93%'
    }
    if (exp === 6387) {
      expName.style.width = '93.5%'
    }
    if (exp === 6388) {
      expName.style.width = '94%'
    }
    if (exp === 6389) {
      expName.style.width = '94.5%'
    }
    if (exp === 6390) {
      expName.style.width = '95%'
    }
    if (exp === 6391) {
      expName.style.width = '95.5%'
    }
    if (exp === 6392) {
      expName.style.width = '96%'
    }
    if (exp === 6393) {
      expName.style.width = '96.5%'
    }
    if (exp === 6394) {
      expName.style.width = '97%'
    }
    if (exp === 6395) {
      expName.style.width = '97.5%'
    }
    if (exp === 6396) {
      expName.style.width = '98%'
    }
    if (exp === 6397) {
      expName.style.width = '98.5%'
    }
    if (exp === 6398) {
      expName.style.width = '99%'
    }
    if (exp === 6399) {
      expName.style.width = '99.5%'
    }
    if (exp === 6400) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 6401 && exp <= 6600)
    {
      expName = expThree;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 6401) {
      expName.style.width = '0.5%'
    }
   if (exp === 6402) {
      expName.style.width = '1%'
    }
   if (exp === 6403) {
      expName.style.width = '1.5%'
    }
   if (exp === 6404) {
      expName.style.width = '2%'
    }
   if (exp === 6405) {
      expName.style.width = '2.5%'
    }
   if (exp === 6406) {
      expName.style.width = '3%'
    }
   if (exp === 6407) {
      expName.style.width = '3.5%'
   }
   if (exp === 6408) {
      expName.style.width = '4%'
    } 
   if (exp === 6409) {
      expName.style.width = '4.5%'
    } 
   if (exp === 6410) {
      expName.style.width = '5%'
    } 
   if (exp === 6411) {
      expName.style.width = '5.5%'
    } 
   if (exp === 6412) {
      expName.style.width = '6%'
    } 
   if (exp === 6413) {
      expName.style.width = '6.5%'
    } 
   if (exp === 6414) {
      expName.style.width = '7%'
    } 
   if (exp === 6415) {
      expName.style.width = '7.5%'
    } 
   if (exp === 6416) {
      expName.style.width = '8%'
    } 
   if (exp === 6417) {
      expName.style.width = '8.5%'
    } 
   if (exp === 6418) {
      expName.style.width = '9%'
    } 
   if (exp === 6419) {
      expName.style.width = '9.5%'
    }
   if (exp === 6420) {
      expName.style.width = '10%'
    }
   if (exp === 6421) {
     expName.style.width = '10.5%'
    }
   if (exp === 6422) {
     expName.style.width = '11%'
    }
   if (exp === 6423) {
     expName.style.width = '11.5%'
    }
   if (exp === 6424) {
     expName.style.width = '12%'
    }
   if (exp === 6425) {
     expName.style.width = '12.5%'
    }
   if (exp === 6426) {
     expName.style.width = '13%'
    }
   if (exp === 6427) {
     expName.style.width = '13.5%'
   }
   if (exp === 6428) {
     expName.style.width = '14%'
    } 
   if (exp === 6429) {
     expName.style.width = '14.5%'
    } 
   if (exp === 6430) {
     expName.style.width = '15%'
    } 
   if (exp === 6431) {
     expName.style.width = '15.5%'
    } 
   if (exp === 6432) {
     expName.style.width = '16%'
    } 
   if (exp === 6433) {
      expName.style.width = '16.5%'
    } 
   if (exp === 6434) {
      expName.style.width = '17%'
    } 
   if (exp === 6435) {
      expName.style.width = '17.5%'
    } 
   if (exp === 6436) {
      expName.style.width = '18%'
    } 
   if (exp === 6437) {
      expName.style.width = '18.5%'
    } 
   if (exp === 6438) {
      expName.style.width = '19%'
    } 
   if (exp === 6439) {
      expName.style.width = '19.5%'
    }
   if (exp === 6440) {
      expName.style.width = '20%'
    }
   if (exp === 6441) {
      expName.style.width = '20.5%'
    }
   if (exp === 6442) {
      expName.style.width = '21%'
    }
   if (exp === 6443) {
      expName.style.width = '21.5%'
    }
   if (exp === 6444) {
      expName.style.width = '22%'
    }
   if (exp === 6445) {
      expName.style.width = '22.5%'
    }
   if (exp === 6446) {
      expName.style.width = '23%'
    }
   if (exp === 6447) {
      expName.style.width = '23.5%'
    }
   if (exp === 6448) {
      expName.style.width = '24%'
    }
   if (exp === 6449) {
      expName.style.width = '24.5%'
    }
   if (exp === 6450) {
      expName.style.width = '25%'
    }
   if (exp === 6451) {
      expName.style.width = '25.5%'
    }
   if (exp === 6452) {
      expName.style.width = '26%'
    }
   if (exp === 6453) {
      expName.style.width = '26.5%'
    }
   if (exp === 6454) {
      expName.style.width = '27%'
    }
   if (exp === 6655) {
      expName.style.width = '27.5%'
    }
    if (exp === 6456) {
      expName.style.width = '28%'
    }
    if (exp === 6457) {
      expName.style.width = '28.5%'
    }
    if (exp === 6458) {
      expName.style.width = '29%'
    }
    if (exp === 6459) {
      expName.style.width = '29.5%'
    }
    if (exp === 6460) {
      expName.style.width = '30%'
    }
    if (exp === 6461) {
      expName.style.width = '30.5%'
    }
    if (exp === 6462) {
      expName.style.width = '31%'
    }
    if (exp === 6463) {
      expName.style.width = '31.5%'
    }
    if (exp === 6464) {
      expName.style.width = '32%'
    }
    if (exp === 6465) {
      expName.style.width = '32.5%'
    }
    if (exp === 6466) {
      expName.style.width = '33%'
    }
    if (exp === 6467) {
      expName.style.width = '33.5%'
    }
    if (exp === 6468) {
      expName.style.width = '34%'
    }
    if (exp === 6469) {
      expName.style.width = '34.5%'
    }
    if (exp === 6470) {
      expName.style.width = '35%'
    }
    if (exp === 6471) {
      expName.style.width = '35.5%'
    }
    if (exp === 6472) {
      expName.style.width = '36%'
    }
    if (exp === 6473) {
      expName.style.width = '36.5%'
    }
    if (exp === 6474) {
      expName.style.width = '37%'
    }
    if (exp === 6475) {
      expName.style.width = '37.5%'
    }
    if (exp === 6476) {
      expName.style.width = '38%'
    }
    if (exp === 6477) {
      expName.style.width = '38.5%'
    }
    if (exp === 6478) {
      expName.style.width = '39%'
    }
    if (exp === 6479) {
      expName.style.width = '39.5%'
    }
    if (exp === 6480) {
      expName.style.width = '40%'
    }
    if (exp === 6481) {
      expName.style.width = '40.5%'
    }
    if (exp === 6482) {
      expName.style.width = '41%'
    }
    if (exp === 6483) {
      expName.style.width = '41.5%'
    }
    if (exp === 6484) {
      expName.style.width = '42%'
    }
    if (exp === 6485) {
      expName.style.width = '42.5%'
    }
    if (exp === 6486) {
      expName.style.width = '43%'
    }
    if (exp === 6487) {
      expName.style.width = '43.5%'
    }
    if (exp === 6488) {
      expName.style.width = '44%'
    }
    if (exp === 6489) {
      expName.style.width = '44.5%'
    }
    if (exp === 6490) {
      expName.style.width = '45%'
    }
    if (exp === 6491) {
      expName.style.width = '45.5%'
    }
    if (exp === 6492) {
      expName.style.width = '46%'
    }
    if (exp === 6493) {
      expName.style.width = '46.5%'
    }
    if (exp === 6494) {
      expName.style.width = '47%'
    }
    if (exp === 6495) {
      expName.style.width = '47.5%'
    }
    if (exp === 6496) {
      expName.style.width = '48%'
    }
    if (exp === 6497) {
      expName.style.width = '48.5%'
    }
    if (exp === 6498) {
      expName.style.width = '49%'
    }
    if (exp === 6499) {
      expName.style.width = '49.5%'
    }
    if (exp === 6500) {
      expName.style.width = '50%'
    }
   if (exp === 6501) {
      expName.style.width = '50.5%'
    }
   if (exp === 6502) {
      expName.style.width = '51%'
    }
   if (exp === 6503) {
      expName.style.width = '51.5%'
    }
   if (exp === 6504) {
      expName.style.width = '52%'
    }
   if (exp === 6505) {
      expName.style.width = '52.5%'
    }
   if (exp === 6506) {
      expName.style.width = '53%'
    }
   if (exp === 6507) {
      expName.style.width = '53.5%'
   }
   if (exp === 6508) {
      expName.style.width = '54%'
    } 
   if (exp === 6509) {
      expName.style.width = '54.5%'
    } 
   if (exp === 6510) {
      expName.style.width = '55%'
    } 
   if (exp === 6511) {
      expName.style.width = '55.5%'
    } 
   if (exp === 6512) {
      expName.style.width = '56%'
    } 
   if (exp === 6513) {
      expName.style.width = '56.5%'
    } 
   if (exp === 6514) {
      expName.style.width = '57%'
    } 
   if (exp === 6515) {
      expName.style.width = '57.5%'
    } 
   if (exp === 6516) {
      expName.style.width = '58%'
    } 
   if (exp === 6517) {
      expName.style.width = '58.5%'
    } 
   if (exp === 6518) {
      expName.style.width = '59%'
    } 
   if (exp === 6519) {
      expName.style.width = '59.5%'
    }
   if (exp === 6510) {
      expName.style.width = '60%'
    }
   if (exp === 6521) {
     expName.style.width = '60.5%'
    }
   if (exp === 6522) {
     expName.style.width = '61%'
    }
   if (exp === 6523) {
     expName.style.width = '61.5%'
    }
   if (exp === 6524) {
     expName.style.width = '62%'
    }
   if (exp === 6525) {
     expName.style.width = '62.5%'
    }
   if (exp === 6526) {
     expName.style.width = '63%'
    }
   if (exp === 6527) {
     expName.style.width = '63.5%'
   }
   if (exp === 6528) {
     expName.style.width = '64%'
    } 
   if (exp === 6529) {
     expName.style.width = '64.5%'
    } 
   if (exp === 6530) {
     expName.style.width = '65%'
    } 
   if (exp === 6531) {
     expName.style.width = '65.5%'
    } 
   if (exp === 6532) {
     expName.style.width = '66%'
    } 
   if (exp === 6533) {
      expName.style.width = '66.5%'
    } 
   if (exp === 6534) {
      expName.style.width = '67%'
    } 
   if (exp === 6535) {
      expName.style.width = '67.5%'
    } 
   if (exp === 6536) {
      expName.style.width = '68%'
    } 
   if (exp === 6537) {
      expName.style.width = '68.5%'
    } 
   if (exp === 6538) {
      expName.style.width = '69%'
    } 
   if (exp === 6539) {
      expName.style.width = '69.5%'
    }
   if (exp === 6540) {
      expName.style.width = '70%'
    }
   if (exp === 6541) {
      expName.style.width = '70.5%'
    }
   if (exp === 6542) {
      expName.style.width = '71%'
    }
   if (exp === 6543) {
      expName.style.width = '71.5%'
    }
   if (exp === 6544) {
      expName.style.width = '72%'
    }
   if (exp === 6545) {
      expName.style.width = '72.5%'
    }
   if (exp === 6546) {
      expName.style.width = '73%'
    }
   if (exp === 6547) {
      expName.style.width = '73.5%'
    }
   if (exp === 6548) {
      expName.style.width = '74%'
    }
   if (exp === 6549) {
      expName.style.width = '74.5%'
    }
   if (exp === 6550) {
      expName.style.width = '75%'
    }
   if (exp ===  6551) {
      expName.style.width = '75.5%'
    }
   if (exp ===  6552) {
      expName.style.width = '76%'
    }
   if (exp ===  6553) {
      expName.style.width = '76.5%'
    }
   if (exp ===  6554) {
      expName.style.width = '77%'
    }
   if (exp ===  6555) {
      expName.style.width = '77.5%'
    }
    if (exp === 6556) {
      expName.style.width = '78%'
    }
    if (exp === 6557) {
      expName.style.width = '78.5%'
    }
    if (exp === 6558) {
      expName.style.width = '79%'
    }
    if (exp === 6559) {
      expName.style.width = '79.5%'
    }
    if (exp === 6560) {
      expName.style.width = '80%'
    }
    if (exp === 6561) {
      exppName.style.width = '80.5%'
    }
    if (exp === 6562) {
      expName.style.width = '81%'
    }
    if (exp === 6563) {
      expName.style.width = '81.5%'
    }
    if (exp === 6564) {
      expName.style.width = '82%'
    }
    if (exp === 6565) {
      expName.style.width = '82.5%'
    }
    if (exp === 6566) {
      expName.style.width = '83%'
    }
    if (exp === 6567) {
      expName.style.width = '83.5%'
    }
    if (exp === 6568) {
      expName.style.width = '84%'
    }
    if (exp === 6569) {
      expName.style.width = '84.5%'
    }
    if (exp === 6570) {
      expName.style.width = '85%'
    }
    if (exp === 6571) {
      expName.style.width = '85.5%'
    }
    if (exp === 6572) {
      expName.style.width = '86%'
    }
    if (exp === 6573) {
      expName.style.width = '86.5%'
    }
    if (exp === 6574) {
      expName.style.width = '87%'
    }
    if (exp === 6575) {
      expName.style.width = '87.5%'
    }
    if (exp === 6576) {
      expName.style.width = '88%'
    }
    if (exp === 6577) {
      expName.style.width = '88.5%'
    }
    if (exp === 6578) {
      expName.style.width = '89%'
    }
    if (exp === 6579) {
      expName.style.width = '89.5%'
    }
    if (exp === 6580) {
      expName.style.width = '90%'
    }
    if (exp === 6581) {
      expName.style.width = '90.5%'
    }
    if (exp === 6582) {
      expName.style.width = '91%'
    }
    if (exp === 6583) {
      expName.style.width = '91.5%'
    }
    if (exp === 6584) {
      expName.style.width = '92%'
    }
    if (exp === 6585) {
      expName.style.width = '92.5%'
    }
    if (exp === 6586) {
      expName.style.width = '93%'
    }
    if (exp === 6587) {
      expName.style.width = '93.5%'
    }
    if (exp === 6588) {
      expName.style.width = '94%'
    }
    if (exp === 6589) {
      expName.style.width = '94.5%'
    }
    if (exp === 6590) {
      expName.style.width = '95%'
    }
    if (exp === 6591) {
      expName.style.width = '95.5%'
    }
    if (exp === 6592) {
      expName.style.width = '96%'
    }
    if (exp === 6593) {
      expName.style.width = '96.5%'
    }
    if (exp === 6594) {
      expName.style.width = '97%'
    }
    if (exp === 6595) {
      expName.style.width = '97.5%'
    }
    if (exp === 6596) {
      expName.style.width = '98%'
    }
    if (exp === 6597) {
      expName.style.width = '98.5%'
    }
    if (exp === 6598) {
      expName.style.width = '99%'
    }
    if (exp === 6599) {
      expName.style.width = '99.5%'
    }
    if (exp === 6600) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 6601 && exp <= 6800)
    {
      expName = expFour;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 6601) {
      expName.style.width = '0.5%'
    }
   if (exp === 6602) {
      expName.style.width = '1%'
    }
   if (exp === 6603) {
      expName.style.width = '1.5%'
    }
   if (exp === 6604) {
      expName.style.width = '2%'
    }
   if (exp === 6605) {
      expName.style.width = '2.5%'
    }
   if (exp === 6606) {
      expName.style.width = '3%'
   }
   if (exp === 6607) {
      expName.style.width = '3.5%'
   }
   if (exp === 6608) {
      expName.style.width = '4%'
    } 
   if (exp === 6609) {
      expName.style.width = '4.5%'
    } 
   if (exp === 6610) {
      expName.style.width = '5%'
    } 
   if (exp === 6611) {
      expName.style.width = '5.5%'
    } 
   if (exp === 6612) {
      expName.style.width = '6%'
    } 
   if (exp === 6613) {
      expName.style.width = '6.5%'
    } 
   if (exp === 6614) {
      expName.style.width = '7%'
    } 
   if (exp === 6615) {
      expName.style.width = '7.5%'
    } 
   if (exp === 6616) {
      expName.style.width = '8%'
  } 
   if (exp === 6617) {
      expName.style.width = '8.5%'
   } 
   if (exp === 6618) {
      expName.style.width = '9%'
    } 
   if (exp === 6619) {
      expName.style.width = '9.5%'
    }
   if (exp === 6620) {
      expName.style.width = '10%'
    }
   if (exp === 6621) {
     expName.style.width = '10.5%'
    }
   if (exp === 6622) {
     expName.style.width = '11%'
    }
   if (exp === 6623) {
     expName.style.width = '11.5%'
    }
   if (exp === 6624) {
     expName.style.width = '12%'
    }
   if (exp === 6625) {
     expName.style.width = '12.5%'
    }
   if (exp === 6626) {
     expName.style.width = '13%'
    }
   if (exp === 6627) {
     expName.style.width = '13.5%'
   }
   if (exp === 6628) {
     expName.style.width = '14%'
   }
   if (exp === 6629) {
     expName.style.width = '14.5%'
    } 
   if (exp === 6630) {
     expName.style.width = '15%'
    } 
   if (exp === 6631) {
     expName.style.width = '15.5%'
    } 
   if (exp === 6632) {
     expName.style.width = '16%'
    } 
   if (exp === 6633) {
      expName.style.width = '16.5%'
    } 
   if (exp === 6634) {
      expName.style.width = '17%'
    } 
   if (exp === 6635) {
      expName.style.width = '17.5%'
    } 
   if (exp === 6636) {
      expName.style.width = '18%'
    } 
   if (exp === 6637) {
      expName.style.width = '18.5%'
    } 
   if (exp === 6638) {
      expName.style.width = '19%'
    } 
   if (exp === 6639) {
      expName.style.width = '19.5%'
   }
   if (exp === 6640) {
      expName.style.width = '20%'
    }
   if (exp === 6641) {
      expName.style.width = '20.5%'
    }
   if (exp === 6642) {
      expName.style.width = '21%'
    }
   if (exp === 6643) {
      expName.style.width = '21.5%'
    }
   if (exp === 6644) {
      expName.style.width = '22%'
    }
   if (exp === 6645) {
      expName.style.width = '22.5%'
    }
   if (exp === 6646) {
      expName.style.width = '23%'
    }
   if (exp === 6647) {
      expName.style.width = '23.5%'
    }
   if (exp === 6648) {
      expName.style.width = '24%'
    }
   if (exp === 6649) {
      expName.style.width = '24.5%'
    }
   if (exp === 6650) {
      expName.style.width = '25%'
  }
   if (exp === 6651) {
      expName.style.width = '25.5%'
    }
   if (exp === 6652) {
      expName.style.width = '26%'
    }
   if (exp === 6653) {
      expName.style.width = '26.5%'
    }
   if (exp === 6654) {
      expName.style.width = '27%'
    }
   if (exp === 6655) {
      expName.style.width = '27.5%'
    }
    if (exp === 6656) {
      expName.style.width = '28%'
    }
    if (exp === 6657) {
      expName.style.width = '28.5%'
    }
    if (exp === 6658) {
      expName.style.width = '29%'
    }
    if (exp === 6659) {
      expName.style.width = '29.5%'
    }
    if (exp === 6660) {
      expName.style.width = '30%'
    }
    if (exp === 6661) {
      expName.style.width = '30.5%'
  }
    if (exp === 6662) {
      expName.style.width = '31%'
    }
    if (exp === 6663) {
      expName.style.width = '31.5%'
    }
    if (exp === 6664) {
      expName.style.width = '32%'
    }
    if (exp === 6665) {
      expName.style.width = '32.5%'
    }
    if (exp === 6666) {
      expName.style.width = '33%'
    }
    if (exp === 6667) {
      expName.style.width = '33.5%'
    }
    if (exp === 6668) {
      expName.style.width = '34%'
    }
    if (exp === 6669) {
      expName.style.width = '34.5%'
    }
    if (exp === 6670) {
      expName.style.width = '35%'
    }
    if (exp === 6671) {
      expName.style.width = '35.5%'
    }
    if (exp === 6672) {
      expName.style.width = '36%'
      }
    if (exp === 6673) {
      expName.style.width = '36.5%'
    }
    if (exp === 6674) {
      expName.style.width = '37%'
    }
    if (exp === 6675) {
      expName.style.width = '37.5%'
    }
    if (exp === 6676) {
      expName.style.width = '38%'
    }
    if (exp === 6677) {
      expName.style.width = '38.5%'
    }
    if (exp === 6678) {
      expName.style.width = '39%'
    }
    if (exp === 6679) {
      expName.style.width = '39.5%'
    }
    if (exp === 6680) {
      expName.style.width = '40%'
    }
    if (exp === 6681) {
      expName.style.width = '40.5%'
    }
    if (exp === 6682) {
      expName.style.width = '41%'
    }
    if (exp === 6683) {
      expName.style.width = '41.5%'
  }
    if (exp === 6684) {
      expName.style.width = '42%'
    }
    if (exp === 6685) {
      expName.style.width = '42.5%'
    }
    if (exp === 6686) {
      expName.style.width = '43%'
    }
    if (exp === 6687) {
      expName.style.width = '43.5%'
    }
    if (exp === 6688) {
      expName.style.width = '44%'
    }
    if (exp === 6689) {
      expName.style.width = '44.5%'
    }
    if (exp === 6690) {
      expName.style.width = '45%'
    }
    if (exp === 6691) {
      expName.style.width = '45.5%'
    }
    if (exp === 6692) {
      expName.style.width = '46%'
    }
    if (exp === 6693) {
      expName.style.width = '46.5%'
    }
    if (exp === 6694) {
      expName.style.width = '47%'
    }
    if (exp === 6695) {
      expName.style.width = '47.5%'
    }
    if (exp === 6696) {
      expName.style.width = '48%'
    }
    if (exp === 6697) {
      expName.style.width = '48.5%'
    }
    if (exp === 6698) {
      expName.style.width = '49%'
    }
    if (exp === 6699) {
      expName.style.width = '49.5%'
    }
    if (exp === 6700) {
      expName.style.width = '50%'
    }
   if (exp === 6701) {
      expName.style.width = '50.5%'
    }
   if (exp === 6702) {
      expName.style.width = '51%'
    }
   if (exp === 6703) {
      expName.style.width = '51.5%'
1  }
   if (exp === 6704) {
      expName.style.width = '52%'
    }
   if (exp === 6705) {
      expName.style.width = '52.5%'
    }
   if (exp === 6706) {
      expName.style.width = '53%'
    }
   if (exp === 6707) {
      expName.style.width = '53.5%'
   }
   if (exp === 6708) {
      expName.style.width = '54%'
    } 
   if (exp === 6709) {
      expName.style.width = '54.5%'
    } 
   if (exp === 6710) {
      expName.style.width = '55%'
    } 
   if (exp === 6711) {
      expName.style.width = '55.5%'
    } 
   if (exp === 6712) {
      expName.style.width = '56%'
    } 
   if (exp === 6713) {
      expName.style.width = '56.5%'
    } 
   if (exp === 6714) {
      expName.style.width = '57%'
    } 
   if (exp === 6715) {
      expName.style.width = '57.5%'
    } 
   if (exp === 6716) {
      expName.style.width = '58%'
    } 
   if (exp === 6717) {
      expName.style.width = '58.5%'
    } 
   if (exp === 6718) {
      expName.style.width = '59%'
    } 
   if (exp === 6719) {
      expName.style.width = '59.5%'
    }
   if (exp === 6710) {
      expName.style.width = '60%'
    }
   if (exp === 6721) {
     expName.style.width = '60.5%'
    }
   if (exp === 6722) {
     expName.style.width = '61%'
    }
   if (exp === 6723) {
     expName.style.width = '61.5%'
    }
   if (exp === 6724) {
     expName.style.width = '62%'
    }
   if (exp === 6725) {
     expName.style.width = '62.5%'
    }
   if (exp === 6726) {
     expName.style.width = '63%'
    }
   if (exp === 6727) {
     expName.style.width = '63.5%'
   }
   if (exp === 6728) {
     expName.style.width = '64%'
    } 
   if (exp === 6729) {
     expName.style.width = '64.5%'
    } 
   if (exp === 6730) {
     expName.style.width = '65%'
    } 
   if (exp === 6731) {
     expName.style.width = '65.5%'
    } 
   if (exp === 6732) {
     expName.style.width = '66%'
    } 
   if (exp === 6733) {
      expName.style.width = '66.5%'
    } 
   if (exp === 6734) {
      expName.style.width = '67%'
    } 
   if (exp === 6735) {
      expName.style.width = '67.5%'
    } 
   if (exp === 6736) {
      expName.style.width = '68%'
    } 
   if (exp === 6737) {
      expName.style.width = '68.5%'
    } 
   if (exp === 6738) {
      expName.style.width = '69%'
    } 
   if (exp === 6739) {
      expName.style.width = '69.5%'
    }
   if (exp === 6740) {
      expName.style.width = '70%'
    }
   if (exp === 6741) {
      expName.style.width = '70.5%'
    }
   if (exp === 6742) {
      expName.style.width = '71%'
    }
   if (exp === 6743) {
      expName.style.width = '71.5%'
    }
   if (exp === 6744) {
      expName.style.width = '72%'
    }
   if (exp === 6745) {
      expName.style.width = '72.5%'
    }
   if (exp === 6746) {
      expName.style.width = '73%'
    }
   if (exp === 6747) {
      expName.style.width = '73.5%'
    }
   if (exp === 6748) {
      expName.style.width = '74%'
    }
   if (exp === 6749) {
      expName.style.width = '74.5%'
    }
   if (exp === 6750) {
      expName.style.width = '75%'
    }
   if (exp === 6751) {
      expName.style.width = '75.5%'
    }
   if (exp === 6752) {
      expName.style.width = '76%'
    }
   if (exp === 6753) {
      expName.style.width = '76.5%'
    }
   if (exp === 6754) {
      expName.style.width = '77%'
    }
   if (exp === 6755) {
      expName.style.width = '77.5%'
    }
    if (exp === 6756) {
      expName.style.width = '78%'
    }
    if (exp === 6757) {
      expName.style.width = '78.5%'
    }
    if (exp === 6758) {
      expName.style.width = '79%'
    }
    if (exp === 6759) {
      expName.style.width = '79.5%'
    }
    if (exp === 6760) {
      expName.style.width = '80%'
    }
    if (exp === 6761) {
      exppName.style.width = '80.5%'
    }
    if (exp === 6762) {
      expName.style.width = '81%'
    }
    if (exp === 6763) {
      expName.style.width = '81.5%'
    }
    if (exp === 6764) {
      expName.style.width = '82%'
    }
    if (exp === 6765) {
      expName.style.width = '82.5%'
    }
    if (exp === 6766) {
      expName.style.width = '83%'
    }
    if (exp === 6767) {
      expName.style.width = '83.5%'
    }
    if (exp === 6768) {
      expName.style.width = '84%'
    }
    if (exp === 6769) {
      expName.style.width = '84.5%'
    }
    if (exp === 6770) {
      expName.style.width = '85%'
    }
    if (exp === 6771) {
      expName.style.width = '85.5%'
    }
    if (exp === 6772) {
      expName.style.width = '86%'
    }
    if (exp === 6773) {
      expName.style.width = '86.5%'
    }
    if (exp === 6774) {
      expName.style.width = '87%'
    }
    if (exp === 6775) {
      expName.style.width = '87.5%'
    }
    if (exp === 6776) {
      expName.style.width = '88%'
    }
    if (exp === 6777) {
      expName.style.width = '88.5%'
    }
    if (exp === 6778) {
      expName.style.width = '89%'
    }
    if (exp === 6779) {
      expName.style.width = '89.5%'
    }
    if (exp === 6780) {
      expName.style.width = '90%'
    }
    if (exp === 6781) {
      expName.style.width = '90.5%'
    }
    if (exp === 6782) {
      expName.style.width = '91%'
    }
    if (exp === 6783) {
      expName.style.width = '91.5%'
    }
    if (exp === 6784) {
      expName.style.width = '92%'
    }
    if (exp === 6785) {
      expName.style.width = '92.5%'
    }
    if (exp === 6786) {
      expName.style.width = '93%'
    }
    if (exp === 6787) {
      expName.style.width = '93.5%'
    }
    if (exp === 6788) {
      expName.style.width = '94%'
    }
    if (exp === 6789) {
      expName.style.width = '94.5%'
    }
    if (exp === 6790) {
      expName.style.width = '95%'
    }
    if (exp === 6791) {
      expName.style.width = '95.5%'
    }
    if (exp === 6792) {
      expName.style.width = '96%'
    }
    if (exp === 6793) {
      expName.style.width = '96.5%'
    }
    if (exp === 6794) {
      expName.style.width = '97%'
    }
    if (exp === 6795) {
      expName.style.width = '97.5%'
    }
    if (exp === 6796) {
      expName.style.width = '98%'
    }
    if (exp === 6797) {
      expName.style.width = '98.5%'
    }
    if (exp === 6798) {
      expName.style.width = '99%'
    }
    if (exp === 6799) {
      expName.style.width = '99.5%'
    }
    if (exp === 6800) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 6801 && exp <= 7000) 
    {
      expName = expFive;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 6801) {
      expName.style.width = '0.5%'
    }
   if (exp === 6802) {
      expName.style.width = '1%'
    }
   if (exp === 6803) {
      expName.style.width = '1.5%'
    }
   if (exp === 6804) {
      expName.style.width = '2%'
    }
   if (exp === 6805) {
      expName.style.width = '2.5%'
    }
   if (exp === 6806) {
      expName.style.width = '3%'
   }
   if (exp === 6807) {
      expName.style.width = '3.5%'
   }
   if (exp === 6808) {
      expName.style.width = '4%'
    } 
   if (exp === 6809) {
      expName.style.width = '4.5%'
    } 
   if (exp === 6810) {
      expName.style.width = '5%'
    } 
   if (exp === 6811) {
      expName.style.width = '5.5%'
    } 
   if (exp === 6812) {
      expName.style.width = '6%'
    } 
   if (exp === 6813) {
      expName.style.width = '6.5%'
    } 
   if (exp === 6814) {
      expName.style.width = '7%'
    } 
   if (exp === 6815) {
      expName.style.width = '7.5%'
    } 
   if (exp === 6816) {
      expName.style.width = '8%'
    } 
   if (exp === 6817) {
      expName.style.width = '8.5%'
   } 
   if (exp === 6818) {
      expName.style.width = '9%'
    } 
   if (exp === 6819) {
      expName.style.width = '9.5%'
    }
   if (exp === 6820) {
      expName.style.width = '10%'
    }
   if (exp === 6821) {
     expName.style.width = '10.5%'
    }
   if (exp === 6822) {
     expName.style.width = '11%'
    }
   if (exp === 6823) {
     expName.style.width = '11.5%'
    }
   if (exp === 6824) {
     expName.style.width = '12%'
    }
   if (exp === 6825) {
     expName.style.width = '12.5%'
    }
   if (exp === 6826) {
     expName.style.width = '13%'
    }
   if (exp === 6827) {
     expName.style.width = '13.5%'
   }
   if (exp === 6828) {
     expName.style.width = '14%'
   }
   if (exp === 6829) {
     expName.style.width = '14.5%'
    } 
   if (exp === 6830) {
     expName.style.width = '15%'
    } 
   if (exp === 6831) {
     expName.style.width = '15.5%'
    } 
   if (exp === 6832) {
     expName.style.width = '16%'
    } 
   if (exp === 6833) {
      expName.style.width = '16.5%'
    } 
   if (exp === 6834) {
      expName.style.width = '17%'
    } 
   if (exp === 6835) {
      expName.style.width = '17.5%'
    } 
   if (exp === 6836) {
      expName.style.width = '18%'
    } 
   if (exp === 6837) {
      expName.style.width = '18.5%'
    } 
   if (exp === 6838) {
      expName.style.width = '19%'
    } 
   if (exp === 6839) {
      expName.style.width = '19.5%'
   }
   if (exp === 6840) {
      expName.style.width = '20%'
    }
   if (exp === 6841) {
      expName.style.width = '20.5%'
    }
   if (exp === 6842) {
      expName.style.width = '21%'
    }
   if (exp === 6843) {
      expName.style.width = '21.5%'
    }
   if (exp === 6844) {
      expName.style.width = '22%'
    }
   if (exp === 6845) {
      expName.style.width = '22.5%'
    }
   if (exp === 6846) {
      expName.style.width = '23%'
    }
   if (exp === 6847) {
      expName.style.width = '23.5%'
    }
   if (exp === 6848) {
      expName.style.width = '24%'
    }
   if (exp === 6849) {
      expName.style.width = '24.5%'
    }
   if (exp === 6850) {
      expName.style.width = '25%'
  }
   if (exp === 6851) {
      expName.style.width = '25.5%'
    }
   if (exp === 6852) {
      expName.style.width = '26%'
    }
   if (exp === 6853) {
      expName.style.width = '26.5%'
    }
   if (exp === 6854) {
      expName.style.width = '27%'
    }
   if (exp === 6855) {
      expName.style.width = '27.5%'
    }
    if (exp === 6856) {
      expName.style.width = '28%'
    }
    if (exp === 6857) {
      expName.style.width = '28.5%'
    }
    if (exp === 6858) {
      expName.style.width = '29%'
    }
    if (exp === 6859) {
      expName.style.width = '29.5%'
    }
    if (exp === 6860) {
      expName.style.width = '30%'
    }
    if (exp === 6861) {
      expName.style.width = '30.5%'
  }
    if (exp === 6862) {
      expName.style.width = '31%'
    }
    if (exp === 6863) {
      expName.style.width = '31.5%'
    }
    if (exp === 6864) {
      expName.style.width = '32%'
    }
    if (exp === 6865) {
      expName.style.width = '32.5%'
    }
    if (exp === 6866) {
      expName.style.width = '33%'
    }
    if (exp === 6867) {
      expName.style.width = '33.5%'
    }
    if (exp === 6868) {
      expName.style.width = '34%'
    }
    if (exp === 6869) {
      expName.style.width = '34.5%'
    }
    if (exp === 6870) {
      expName.style.width = '35%'
    }
    if (exp === 6871) {
      expName.style.width = '35.5%'
    }
    if (exp === 6872) {
      expName.style.width = '36%'
    }
    if (exp === 6873) {
      expName.style.width = '36.5%'
    }
    if (exp === 6874) {
      expName.style.width = '37%'
    }
    if (exp === 6875) {
      expName.style.width = '37.5%'
    }
    if (exp === 6876) {
      expName.style.width = '38%'
    }
    if (exp === 6877) {
      expName.style.width = '38.5%'
    }
    if (exp === 6878) {
      expName.style.width = '39%'
    }
    if (exp === 6879) {
      expName.style.width = '39.5%'
    }
    if (exp === 6880) {
      expName.style.width = '40%'
    }
    if (exp === 6881) {
      expName.style.width = '40.5%'
    }
    if (exp === 6882) {
      expName.style.width = '41%'
    }
    if (exp === 6883) {
      expName.style.width = '41.5%'
    }
    if (exp === 6884) {
      expName.style.width = '42%'
    }
    if (exp === 6885) {
      expName.style.width = '42.5%'
    }
    if (exp === 6886) {
      expName.style.width = '43%'
    }
    if (exp === 6887) {
      expName.style.width = '43.5%'
    }
    if (exp === 6888) {
      expName.style.width = '44%'
    }
    if (exp === 6889) {
      expName.style.width = '44.5%'
    }
    if (exp === 6890) {
      expName.style.width = '45%'
    }
    if (exp === 6891) {
      expName.style.width = '45.5%'
    }
    if (exp === 6892) {
      expName.style.width = '46%'
    }
    if (exp === 6893) {
      expName.style.width = '46.5%'
    }
    if (exp === 6894) {
      expName.style.width = '47%'
    }
    if (exp === 6895) {
      expName.style.width = '47.5%'
    }
    if (exp === 6896) {
      expName.style.width = '48%'
    }
    if (exp === 6897) {
      expName.style.width = '48.5%'
    }
    if (exp === 6898) {
      expName.style.width = '49%'
    }
    if (exp === 6899) {
      expName.style.width = '49.5%'
    }
    if (exp === 6900) {
      expName.style.width = '50%'
    }
   if (exp === 6901) {
      expName.style.width = '50.5%'
    }
   if (exp === 6902) {
      expName.style.width = '51%'
    }
   if (exp === 6903) {
      expName.style.width = '51.5%'
  }
   if (exp === 6904) {
      expName.style.width = '52%'
    }
   if (exp === 6905) {
      expName.style.width = '52.5%'
    }
   if (exp === 6906) {
      expName.style.width = '53%'
    }
   if (exp === 6907) {
      expName.style.width = '53.5%'
   }
   if (exp === 6908) {
      expName.style.width = '54%'
    } 
   if (exp === 6909) {
      expName.style.width = '54.5%'
    } 
   if (exp === 6910) {
      expName.style.width = '55%'
    } 
   if (exp === 6911) {
      expName.style.width = '55.5%'
    } 
   if (exp === 6912) {
      expName.style.width = '56%'
    } 
   if (exp === 6913) {
      expName.style.width = '56.5%'
    } 
   if (exp === 6914) {
      expName.style.width = '57%'
    } 
   if (exp === 6915) {
      expName.style.width = '57.5%'
    } 
   if (exp === 6916) {
      expName.style.width = '58%'
    } 
   if (exp === 6917) {
      expName.style.width = '58.5%'
    } 
   if (exp === 6918) {
      expName.style.width = '59%'
    } 
   if (exp === 6919) {
      expName.style.width = '59.5%'
    }
   if (exp === 6920) {
      expName.style.width = '60%'
    }
   if (exp === 6921) {
     expName.style.width = '60.5%'
    }
   if (exp === 6922) {
     expName.style.width = '61%'
    }
   if (exp === 6923) {
     expName.style.width = '61.5%'
    }
   if (exp === 6924) {
     expName.style.width = '62%'
    }
   if (exp === 6925) {
     expName.style.width = '62.5%'
    }
   if (exp === 6926) {
     expName.style.width = '63%'
    }
   if (exp === 6927) {
     expName.style.width = '63.5%'
   }
   if (exp === 6928) {
     expName.style.width = '64%'
    } 
   if (exp === 6929) {
     expName.style.width = '64.5%'
    } 
   if (exp === 6930) {
     expName.style.width = '65%'
    } 
   if (exp === 6931) {
     expName.style.width = '65.5%'
    } 
   if (exp === 6932) {
     expName.style.width = '66%'
    } 
   if (exp === 6933) {
      expName.style.width = '66.5%'
    } 
   if (exp === 6934) {
      expName.style.width = '67%'
    } 
   if (exp === 6935) {
      expName.style.width = '67.5%'
    } 
   if (exp === 6936) {
      expName.style.width = '68%'
    } 
   if (exp === 6937) {
      expName.style.width = '68.5%'
    } 
   if (exp === 6938) {
      expName.style.width = '69%'
    } 
   if (exp === 6939) {
      expName.style.width = '69.5%'
    }
   if (exp === 6940) {
      expName.style.width = '70%'
    }
   if (exp === 6941) {
      expName.style.width = '70.5%'
    }
   if (exp === 6942) {
      expName.style.width = '71%'
    }
   if (exp === 6943) {
      expName.style.width = '71.5%'
    }
   if (exp === 6944) {
      expName.style.width = '72%'
    }
   if (exp === 6945) {
      expName.style.width = '72.5%'
    }
   if (exp === 6946) {
      expName.style.width = '73%'
    }
   if (exp === 6947) {
      expName.style.width = '73.5%'
    }
   if (exp === 6948) {
      expName.style.width = '74%'
    }
   if (exp === 6949) {
      expName.style.width = '74.5%'
    }
   if (exp === 6950) {
      expName.style.width = '75%'
    }
   if (exp === 6951) {
      expName.style.width = '75.5%'
    }
   if (exp === 6952) {
      expName.style.width = '76%'
    }
   if (exp === 6953) {
      expName.style.width = '76.5%'
    }
   if (exp === 6954) {
      expName.style.width = '77%'
    }
   if (exp === 6955) {
      expName.style.width = '77.5%'
    }
    if (exp === 6956) {
      expName.style.width = '78%'
    }
    if (exp === 6957) {
      expName.style.width = '78.5%'
    }
    if (exp === 6958) {
      expName.style.width = '79%'
    }
    if (exp === 6959) {
      expName.style.width = '79.5%'
    }
    if (exp === 6960) {
      expName.style.width = '80%'
    }
    if (exp === 6961) {
      exppName.style.width = '80.5%'
    }
    if (exp === 6962) {
      expName.style.width = '81%'
    }
    if (exp === 6963) {
      expName.style.width = '81.5%'
    }
    if (exp === 6964) {
      expName.style.width = '82%'
    }
    if (exp === 6965) {
      expName.style.width = '82.5%'
    }
    if (exp === 6966) {
      expName.style.width = '83%'
    }
    if (exp === 6967) {
      expName.style.width = '83.5%'
    }
    if (exp === 6968) {
      expName.style.width = '84%'
    }
    if (exp === 6969) {
      expName.style.width = '84.5%'
    }
    if (exp === 6970) {
      expName.style.width = '85%'
    }
    if (exp === 6971) {
      expName.style.width = '85.5%'
    }
    if (exp === 6972) {
      expName.style.width = '86%'
    }
    if (exp === 6973) {
      expName.style.width = '86.5%'
    }
    if (exp === 6974) {
      expName.style.width = '87%'
    }
    if (exp === 6975) {
      expName.style.width = '87.5%'
    }
    if (exp === 6976) {
      expName.style.width = '88%'
    }
    if (exp === 6977) {
      expName.style.width = '88.5%'
    }
    if (exp === 6978) {
      expName.style.width = '89%'
    }
    if (exp === 6979) {
      expName.style.width = '89.5%'
    }
    if (exp === 6980) {
      expName.style.width = '90%'
    }
    if (exp === 6981) {
      expName.style.width = '90.5%'
    }
    if (exp === 6982) {
      expName.style.width = '91%'
    }
    if (exp === 6983) {
      expName.style.width = '91.5%'
    }
    if (exp === 6984) {
      expName.style.width = '92%'
    }
    if (exp === 6985) {
      expName.style.width = '92.5%'
    }
    if (exp === 6986) {
      expName.style.width = '93%'
    }
    if (exp === 6987) {
      expName.style.width = '93.5%'
    }
    if (exp === 6988) {
      expName.style.width = '94%'
    }
    if (exp === 6989) {
      expName.style.width = '94.5%'
    }
    if (exp === 6990) {
      expName.style.width = '95%'
    }
    if (exp === 6991) {
      expName.style.width = '95.5%'
    }
    if (exp === 6992) {
      expName.style.width = '96%'
    }
    if (exp === 6993) {
      expName.style.width = '96.5%'
    }
    if (exp === 6994) {
      expName.style.width = '97%'
    }
    if (exp === 6995) {
      expName.style.width = '97.5%'
    }
    if (exp === 6996) {
      expName.style.width = '98%'
    }
    if (exp === 6997) {
      expName.style.width = '98.5%'
    }
    if (exp === 6998) {
      expName.style.width = '99%'
    }
    if (exp === 6999) {
      expName.style.width = '99.5%'
    }
    if (exp === 7000) {
      expName.style.width = '100%'
    }
    }
     
    if (exp === 7000) {
      setTimeout(() => {
        expOne.style.display = 'none'
        expTwo.style.display = 'none'
        expThree.style.display = 'none'
        expFour.style.display = 'none'
        expFive.style.display = 'none'
      }, 500)
      handleExpNine();
    }
  
    if (exp >= 7000) {
      handleExpNine();
      levelUpShow();
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
  
      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
      document.querySelector('.the-level').innerHTML = 9;
      
      document.querySelector('.next-level').innerHTML = '8000';
      
      document.querySelector('.level-title').innerHTML = 'Rookie Lvl 3'
    }
  
    
  } 
}

function handleExpNine() {
  let expName = expOne;
  if (playerLevel === 9) {
     
    if (exp >= 7001 && exp <= 7200) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 7001) {
      expName.style.width = '0.5%'
    }
   if (exp === 7002) {
      expName.style.width = '1%'
    }
   if (exp === 7003) {
      expName.style.width = '1.5%'
    }
   if (exp === 7004) {
      expName.style.width = '2%'
    }
   if (exp === 7005) {
      expName.style.width = '2.5%'
    }
   if (exp === 7006) {
      expName.style.width = '3%'
    }
   if (exp === 7007) {
      expName.style.width = '3.5%'
   }
   if (exp === 7008) {
      expName.style.width = '4%'
    } 
   if (exp === 7009) {
      expName.style.width = '4.5%'
    } 
   if (exp === 7010) {
      expName.style.width = '5%'
    } 
   if (exp === 7011) {
      expName.style.width = '5.5%'
    } 
   if (exp === 7012) {
      expName.style.width = '6%'
    } 
   if (exp === 7013) {
      expName.style.width = '6.5%'
    } 
   if (exp === 7014) {
      expName.style.width = '7%'
    } 
   if (exp === 7015) {
      expName.style.width = '7.5%'
    } 
   if (exp === 7016) {
      expName.style.width = '8%'
    } 
   if (exp === 7017) {
      expName.style.width = '8.5%'
    } 
   if (exp === 7018) {
      expName.style.width = '9%'
    } 
   if (exp === 7019) {
      expName.style.width = '9.5%'
    }
   if (exp === 7020) {
      expName.style.width = '10%'
    }
   if (exp === 7021) {
     expName.style.width = '10.5%'
    }
   if (exp === 7022) {
     expName.style.width = '11%'
    }
   if (exp === 7023) {
     expName.style.width = '11.5%'
    }
   if (exp === 7024) {
     expName.style.width = '12%'
    }
   if (exp === 7025) {
     expName.style.width = '12.5%'
    }
   if (exp === 7026) {
     expName.style.width = '13%'
    }
   if (exp === 7027) {
     expName.style.width = '13.5%'
   }
   if (exp === 7028) {
     expName.style.width = '14%'
    } 
   if (exp === 7029) {
     expName.style.width = '14.5%'
    } 
   if (exp === 7030) {
     expName.style.width = '15%'
    } 
   if (exp === 7031) {
     expName.style.width = '15.5%'
    } 
   if (exp === 7032) {
     expName.style.width = '16%'
    } 
   if (exp === 7033) {
      expName.style.width = '16.5%'
    } 
   if (exp === 7034) {
      expName.style.width = '17%'
    } 
   if (exp === 7035) {
      expName.style.width = '17.5%'
    } 
   if (exp === 7036) {
      expName.style.width = '18%'
    } 
   if (exp === 7037) {
      expName.style.width = '18.5%'
    } 
   if (exp === 7038) {
      expName.style.width = '19%'
    } 
   if (exp === 7039) {
      expName.style.width = '19.5%'
    }
   if (exp === 7040) {
      expName.style.width = '20%'
    }
   if (exp === 7041) {
      expName.style.width = '20.5%'
    }
   if (exp === 7042) {
      expName.style.width = '21%'
    }
   if (exp === 7043) {
      expName.style.width = '21.5%'
    }
   if (exp === 7044) {
      expName.style.width = '22%'
    }
   if (exp === 7045) {
      expName.style.width = '22.5%'
    }
   if (exp === 7046) {
      expName.style.width = '23%'
    }
   if (exp === 7047) {
      expName.style.width = '23.5%'
    }
   if (exp === 7048) {
      expName.style.width = '24%'
    }
   if (exp === 7049) {
      expName.style.width = '24.5%'
    }
   if (exp === 7050) {
      expName.style.width = '25%'
    }
   if (exp === 7051) {
      expName.style.width = '25.5%'
    }
   if (exp === 7052) {
      expName.style.width = '26%'
    }
   if (exp === 7053) {
      expName.style.width = '26.5%'
    }
   if (exp === 7054) {
      expName.style.width = '27%'
    }
   if (exp === 7055) {
      expName.style.width = '27.5%'
    }
    if (exp === 7056) {
      expName.style.width = '28%'
    }
    if (exp === 7057) {
      expName.style.width = '28.5%'
    }
    if (exp === 7058) {
      expName.style.width = '29%'
    }
    if (exp === 7059) {
      expName.style.width = '29.5%'
    }
    if (exp === 7060) {
      expName.style.width = '30%'
    }
    if (exp === 7061) {
      expName.style.width = '30.5%'
    }
    if (exp === 7062) {
      expName.style.width = '31%'
    }
    if (exp === 7063) {
      expName.style.width = '31.5%'
    }
    if (exp === 7064) {
      expName.style.width = '32%'
    }
    if (exp === 7065) {
      expName.style.width = '32.5%'
    }
    if (exp === 7066) {
      expName.style.width = '33%'
    }
    if (exp === 7067) {
      expName.style.width = '33.5%'
    }
    if (exp === 7068) {
      expName.style.width = '34%'
    }
    if (exp === 7069) {
      expName.style.width = '34.5%'
    }
    if (exp === 7070) {
      expName.style.width = '35%'
    }
    if (exp === 7071) {
      expName.style.width = '35.5%'
    }
    if (exp === 7072) {
      expName.style.width = '36%'
    }
    if (exp === 7073) {
      expName.style.width = '36.5%'
    }
    if (exp === 7074) {
      expName.style.width = '37%'
    }
    if (exp === 7075) {
      expName.style.width = '37.5%'
    }
    if (exp === 7076) {
      expName.style.width = '38%'
    }
    if (exp === 7077) {
      expName.style.width = '38.5%'
    }
    if (exp === 7078) {
      expName.style.width = '39%'
    }
    if (exp === 7079) {
      expName.style.width = '39.5%'
    }
    if (exp === 7080) {
      expName.style.width = '40%'
    }
    if (exp === 7081) {
      expName.style.width = '40.5%'
    }
    if (exp === 7082) {
      expName.style.width = '41%'
    }
    if (exp === 7083) {
      expName.style.width = '41.5%'
    }
    if (exp === 7084) {
      expName.style.width = '42%'
    }
    if (exp === 7085) {
      expName.style.width = '42.5%'
    }
    if (exp === 7086) {
      expName.style.width = '43%'
    }
    if (exp === 7087) {
      expName.style.width = '43.5%'
    }
    if (exp === 7088) {
      expName.style.width = '44%'
    }
    if (exp === 7089) {
      expName.style.width = '44.5%'
    }
    if (exp === 7090) {
      expName.style.width = '45%'
    }
    if (exp === 7091) {
      expName.style.width = '45.5%'
    }
    if (exp === 7092) {
      expName.style.width = '46%'
    }
    if (exp === 7093) {
      expName.style.width = '46.5%'
    }
    if (exp === 7094) {
      expName.style.width = '47%'
    }
    if (exp === 7095) {
      expName.style.width = '47.5%'
    }
    if (exp === 7096) {
      expName.style.width = '48%'
    }
    if (exp === 7097) {
      expName.style.width = '48.5%'
    }
    if (exp === 7098) {
      expName.style.width = '49%'
    }
    if (exp === 7099) {
      expName.style.width = '49.5%'
    }
    if (exp === 7100) {
      expName.style.width = '50%'
    }
   if (exp === 7601) {
      expName.style.width = '50.5%'
    }
   if (exp === 7602) {
      expName.style.width = '51%'
    }
   if (exp === 7103) {
      expName.style.width = '51.5%'
    }
   if (exp === 7104) {
      expName.style.width = '52%'
    }
   if (exp === 7105) {
      expName.style.width = '52.5%'
    }
   if (exp === 7106) {
      expName.style.width = '53%'
    }
   if (exp === 7107) {
      expName.style.width = '53.5%'
   }
   if (exp === 7108) {
      expName.style.width = '54%'
    } 
   if (exp === 7109) {
      expName.style.width = '54.5%'
    } 
   if (exp === 7110) {
      expName.style.width = '55%'
    } 
   if (exp === 7111) {
      expName.style.width = '55.5%'
    } 
   if (exp === 7112) {
      expName.style.width = '56%'
    } 
   if (exp === 7113) {
      expName.style.width = '56.5%'
    } 
   if (exp === 7114) {
      expName.style.width = '57%'
    } 
   if (exp === 7115) {
      expName.style.width = '57.5%'
    } 
   if (exp === 7116) {
      expName.style.width = '58%'
    } 
   if (exp === 7117) {
      expName.style.width = '58.5%'
    } 
   if (exp === 7118) {
      expName.style.width = '59%'
    } 
   if (exp === 7119) {
      expName.style.width = '59.5%'
    }
   if (exp === 7120) {
      expName.style.width = '60%'
    }
   if (exp === 7121) {
     expName.style.width = '60.5%'
    }
   if (exp === 7122) {
     expName.style.width = '61%'
    }
   if (exp === 7123) {
     expName.style.width = '61.5%'
    }
   if (exp === 7124) {
     expName.style.width = '62%'
    }
   if (exp === 7125) {
     expName.style.width = '62.5%'
    }
   if (exp === 7126) {
     expName.style.width = '63%'
    }
   if (exp === 7127) {
     expName.style.width = '63.5%'
   }
   if (exp === 7128) {
     expName.style.width = '64%'
    } 
   if (exp === 7129) {
     expName.style.width = '64.5%'
    } 
   if (exp === 7130) {
     expName.style.width = '65%'
    } 
   if (exp === 7131) {
     expName.style.width = '65.5%'
    } 
   if (exp === 7132) {
     expName.style.width = '66%'
    } 
   if (exp === 7133) {
      expName.style.width = '66.5%'
    } 
   if (exp === 7134) {
      expName.style.width = '67%'
    } 
   if (exp === 7135) {
      expName.style.width = '67.5%'
    } 
   if (exp === 7136) {
      expName.style.width = '68%'
    } 
   if (exp === 7137) {
      expName.style.width = '68.5%'
    } 
   if (exp === 7138) {
      expName.style.width = '69%'
    } 
   if (exp === 7139) {
      expName.style.width = '69.5%'
    }
   if (exp === 7140) {
      expName.style.width = '70%'
    }
   if (exp === 7141) {
      expName.style.width = '70.5%'
    }
   if (exp === 7142) {
      expName.style.width = '71%'
    }
   if (exp === 7143) {
      expName.style.width = '71.5%'
    }
   if (exp === 7144) {
      expName.style.width = '72%'
    }
   if (exp === 7145) {
      expName.style.width = '72.5%'
    }
   if (exp === 7146) {
      expName.style.width = '73%'
    }
   if (exp === 7147) {
      expName.style.width = '73.5%'
    }
   if (exp === 7148) {
      expName.style.width = '74%'
    }
   if (exp === 7149) {
      expName.style.width = '74.5%'
    }
   if (exp === 7150) {
      expName.style.width = '75%'
    }
   if (exp === 7151) {
      expName.style.width = '75.5%'
    }
   if (exp === 7152) {
      expName.style.width = '76%'
    }
   if (exp === 7153) {
      expName.style.width = '76.5%'
    }
   if (exp === 7154) {
      expName.style.width = '77%'
    }
   if (exp === 7155) {
      expName.style.width = '77.5%'
    }
    if (exp === 7156) {
      expName.style.width = '78%'
    }
    if (exp === 7157) {
      expName.style.width = '78.5%'
    }
    if (exp === 7158) {
      expName.style.width = '79%'
    }
    if (exp === 7159) {
      expName.style.width = '79.5%'
    }
    if (exp === 7160) {
      expName.style.width = '80%'
    }
    if (exp === 7161) {
      exppName.style.width = '80.5%'
    }
    if (exp === 7162) {
      expName.style.width = '81%'
    }
    if (exp === 7163) {
      expName.style.width = '81.5%'
    }
    if (exp === 7164) {
      expName.style.width = '82%'
    }
    if (exp === 7165) {
      expName.style.width = '82.5%'
    }
    if (exp === 7166) {
      expName.style.width = '83%'
    }
    if (exp === 7167) {
      expName.style.width = '83.5%'
    }
    if (exp === 7168) {
      expName.style.width = '84%'
    }
    if (exp === 7169) {
      expName.style.width = '84.5%'
    }
    if (exp === 7170) {
      expName.style.width = '85%'
    }
    if (exp === 7171) {
      expName.style.width = '85.5%'
    }
    if (exp === 7172) {
      expName.style.width = '86%'
    }
    if (exp === 7173) {
      expName.style.width = '86.5%'
    }
    if (exp === 7174) {
      expName.style.width = '87%'
    }
    if (exp === 7175) {
      expName.style.width = '87.5%'
    }
    if (exp === 7176) {
      expName.style.width = '88%'
    }
    if (exp === 7177) {
      expName.style.width = '88.5%'
    }
    if (exp === 6178) {
      expName.style.width = '89%'
    }
    if (exp === 7179) {
      expName.style.width = '89.5%'
    }
    if (exp === 7180) {
      expName.style.width = '90%'
    }
    if (exp === 7181) {
      expName.style.width = '90.5%'
    }
    if (exp === 7182) {
      expName.style.width = '91%'
    }
    if (exp === 7183) {
      expName.style.width = '91.5%'
    }
    if (exp === 7184) {
      expName.style.width = '92%'
    }
    if (exp === 7185) {
      expName.style.width = '92.5%'
    }
    if (exp === 7186) {
      expName.style.width = '93%'
    }
    if (exp === 7187) {
      expName.style.width = '93.5%'
    }
    if (exp === 7188) {
      expName.style.width = '94%'
    }
    if (exp === 7189) {
      expName.style.width = '94.5%'
    }
    if (exp === 7190) {
      expName.style.width = '95%'
    }
    if (exp === 7191) {
      expName.style.width = '95.5%'
    }
    if (exp === 7192) {
      expName.style.width = '96%'
    }
    if (exp === 7193) {
      expName.style.width = '96.5%'
    }
    if (exp === 7194) {
      expName.style.width = '97%'
    }
    if (exp === 7195) {
      expName.style.width = '97.5%'
    }
    if (exp === 7196) {
      expName.style.width = '98%'
    }
    if (exp === 7197) {
      expName.style.width = '98.5%'
    }
    if (exp === 7198) {
      expName.style.width = '99%'
    }
    if (exp === 7199) {
      expName.style.width = '99.5%'
    }
    if (exp === 7200) {
      expName.style.width = '100%'
    }
     
    }

    if (exp >= 7201 && exp <= 7400) 
    {
      expName = expTwo;

      expOne.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 7201) {
      expName.style.width = '0.5%'
    }
   if (exp === 7202) {
      expName.style.width = '1%'
    }
   if (exp === 7203) {
      expName.style.width = '1.5%'
    }
   if (exp === 7204) {
      expName.style.width = '2%'
    }
   if (exp === 7205) {
      expName.style.width = '2.5%'
    }
   if (exp === 7206) {
      expName.style.width = '3%'
    }
   if (exp === 7207) {
      expName.style.width = '3.5%'
   }
   if (exp === 7208) {
      expName.style.width = '4%'
    } 
   if (exp === 7209) {
      expName.style.width = '4.5%'
    } 
   if (exp === 7210) {
      expName.style.width = '5%'
    } 
   if (exp === 7211) {
      expName.style.width = '5.5%'
    } 
   if (exp === 7212) {
      expName.style.width = '6%'
    } 
   if (exp === 7213) {
      expName.style.width = '6.5%'
    } 
   if (exp === 7214) {
      expName.style.width = '7%'
    } 
   if (exp === 7215) {
      expName.style.width = '7.5%'
    } 
   if (exp === 7216) {
      expName.style.width = '8%'
    } 
   if (exp === 7217) {
      expName.style.width = '8.5%'
    } 
   if (exp === 7218) {
      expName.style.width = '9%'
    } 
   if (exp === 7219) {
      expName.style.width = '9.5%'
    }
   if (exp === 7220) {
      expName.style.width = '10%'
    }
   if (exp === 7221) {
     expName.style.width = '10.5%'
    }
   if (exp === 7222) {
     expName.style.width = '11%'
    }
   if (exp === 7223) {
     expName.style.width = '11.5%'
    }
   if (exp === 7224) {
     expName.style.width = '12%'
    }
   if (exp === 7225) {
     expName.style.width = '12.5%'
    }
   if (exp === 7226) {
     expName.style.width = '13%'
    }
   if (exp === 7227) {
     expName.style.width = '13.5%'
   }
   if (exp === 7228) {
     expName.style.width = '14%'
    } 
   if (exp === 7229) {
     expName.style.width = '14.5%'
    } 
   if (exp === 7230) {
     expName.style.width = '15%'
    } 
   if (exp === 7231) {
     expName.style.width = '15.5%'
    } 
   if (exp === 7232) {
     expName.style.width = '16%'
    } 
   if (exp === 7233) {
      expName.style.width = '16.5%'
    } 
   if (exp === 7234) {
      expName.style.width = '17%'
    } 
   if (exp === 7235) {
      expName.style.width = '17.5%'
    } 
   if (exp === 7236) {
      expName.style.width = '18%'
    } 
   if (exp === 7237) {
      expName.style.width = '18.5%'
    } 
   if (exp === 7238) {
      expName.style.width = '19%'
    } 
   if (exp === 7239) {
      expName.style.width = '19.5%'
    }
   if (exp === 7240) {
      expName.style.width = '20%'
    }
   if (exp === 7241) {
      expName.style.width = '20.5%'
    }
   if (exp === 7242) {
      expName.style.width = '21%'
    }
   if (exp === 7243) {
      expName.style.width = '21.5%'
    }
   if (exp === 7244) {
      expName.style.width = '22%'
    }
   if (exp === 7245) {
      expName.style.width = '22.5%'
    }
   if (exp === 7246) {
      expName.style.width = '23%'
    }
   if (exp === 7247) {
      expName.style.width = '23.5%'
    }
   if (exp === 7248) {
      expName.style.width = '24%'
    }
   if (exp === 7249) {
      expName.style.width = '24.5%'
    }
   if (exp === 7250) {
      expName.style.width = '25%'
    }
   if (exp === 7251) {
      expName.style.width = '25.5%'
    }
   if (exp === 7252) {
      expName.style.width = '26%'
    }
   if (exp === 7253) {
      expName.style.width = '26.5%'
    }
   if (exp === 7254) {
      expName.style.width = '27%'
    }
   if (exp === 7255) {
      expName.style.width = '27.5%'
    }
    if (exp === 7256) {
      expName.style.width = '28%'
    }
    if (exp === 7257) {
      expName.style.width = '28.5%'
    }
    if (exp === 7258) {
      expName.style.width = '29%'
    }
    if (exp === 7259) {
      expName.style.width = '29.5%'
    }
    if (exp === 7260) {
      expName.style.width = '30%'
    }
    if (exp === 7261) {
      expName.style.width = '30.5%'
    }
    if (exp === 7262) {
      expName.style.width = '31%'
    }
    if (exp === 7263) {
      expName.style.width = '31.5%'
    }
    if (exp === 7264) {
      expName.style.width = '32%'
    }
    if (exp === 7265) {
      expName.style.width = '32.5%'
    }
    if (exp === 7266) {
      expName.style.width = '33%'
    }
    if (exp === 7267) {
      expName.style.width = '33.5%'
    }
    if (exp === 7268) {
      expName.style.width = '34%'
    }
    if (exp === 7269) {
      expName.style.width = '34.5%'
    }
    if (exp === 7270) {
      expName.style.width = '35%'
    }
    if (exp === 7271) {
      expName.style.width = '35.5%'
    }
    if (exp === 7272) {
      expName.style.width = '36%'
    }
    if (exp === 7273) {
      expName.style.width = '36.5%'
    }
    if (exp === 7274) {
      expName.style.width = '37%'
    }
    if (exp === 7275) {
      expName.style.width = '37.5%'
    }
    if (exp === 7276) {
      expName.style.width = '38%'
    }
    if (exp === 7277) {
      expName.style.width = '38.5%'
    }
    if (exp === 7278) {
      expName.style.width = '39%'
    }
    if (exp === 7279) {
      expName.style.width = '39.5%'
    }
    if (exp === 7280) {
      expName.style.width = '40%'
    }
    if (exp === 7281) {
      expName.style.width = '40.5%'
    }
    if (exp === 7282) {
      expName.style.width = '41%'
    }
    if (exp === 7283) {
      expName.style.width = '41.5%'
    }
    if (exp === 7284) {
      expName.style.width = '42%'
    }
    if (exp === 7285) {
      expName.style.width = '42.5%'
    }
    if (exp === 7286) {
      expName.style.width = '43%'
    }
    if (exp === 7287) {
      expName.style.width = '43.5%'
    }
    if (exp === 7288) {
      expName.style.width = '44%'
    }
    if (exp === 7289) {
      expName.style.width = '44.5%'
    }
    if (exp === 7290) {
      expName.style.width = '45%'
    }
    if (exp === 7291) {
      expName.style.width = '45.5%'
    }
    if (exp === 7292) {
      expName.style.width = '46%'
    }
    if (exp === 7293) {
      expName.style.width = '46.5%'
    }
    if (exp === 7294) {
      expName.style.width = '47%'
    }
    if (exp === 7295) {
      expName.style.width = '47.5%'
    }
    if (exp === 7296) {
      expName.style.width = '48%'
    }
    if (exp === 7297) {
      expName.style.width = '48.5%'
    }
    if (exp === 7298) {
      expName.style.width = '49%'
    }
    if (exp === 7299) {
      expName.style.width = '49.5%'
    }
    if (exp === 7300) {
      expName.style.width = '50%'
    }
   if (exp === 7301) {
      expName.style.width = '50.5%'
    }
   if (exp === 7302) {
      expName.style.width = '51%'
    }
   if (exp === 7303) {
      expName.style.width = '51.5%'
    }
   if (exp === 7304) {
      expName.style.width = '52%'
    }
   if (exp === 7305) {
      expName.style.width = '52.5%'
    }
   if (exp === 7306) {
      expName.style.width = '53%'
    }
   if (exp === 7307) {
      expName.style.width = '53.5%'
   }
   if (exp === 7308) {
      expName.style.width = '54%'
    } 
   if (exp === 7309) {
      expName.style.width = '54.5%'
    } 
   if (exp === 7310) {
      expName.style.width = '55%'
    } 
   if (exp === 7311) {
      expName.style.width = '55.5%'
    } 
   if (exp === 7312) {
      expName.style.width = '56%'
    } 
   if (exp === 7313) {
      expName.style.width = '56.5%'
    } 
   if (exp === 7314) {
      expName.style.width = '57%'
    } 
   if (exp === 7315) {
      expName.style.width = '57.5%'
    } 
   if (exp === 7316) {
      expName.style.width = '58%'
    } 
   if (exp === 7317) {
      expName.style.width = '58.5%'
    } 
   if (exp === 7318) {
      expName.style.width = '59%'
    } 
   if (exp === 7319) {
      expName.style.width = '59.5%'
    }
   if (exp === 7320) {
      expName.style.width = '60%'
    }
   if (exp === 7321) {
     expName.style.width = '60.5%'
    }
   if (exp === 7322) {
     expName.style.width = '61%'
    }
   if (exp === 7323) {
     expName.style.width = '61.5%'
    }
   if (exp === 7324) {
     expName.style.width = '62%'
    }
   if (exp === 7325) {
     expName.style.width = '62.5%'
    }
   if (exp === 7326) {
     expName.style.width = '63%'
    }
   if (exp === 7327) {
     expName.style.width = '63.5%'
   }
   if (exp === 7328) {
     expName.style.width = '64%'
    } 
   if (exp === 7329) {
     expName.style.width = '64.5%'
    } 
   if (exp === 7330) {
     expName.style.width = '65%'
    } 
   if (exp === 7331) {
     expName.style.width = '65.5%'
    } 
   if (exp === 7332) {
     expName.style.width = '66%'
    } 
   if (exp === 7333) {
      expName.style.width = '66.5%'
    } 
   if (exp === 7334) {
      expName.style.width = '67%'
    } 
   if (exp === 7335) {
      expName.style.width = '67.5%'
    } 
   if (exp === 7336) {
      expName.style.width = '68%'
    } 
   if (exp === 7337) {
      expName.style.width = '68.5%'
    } 
   if (exp === 7338) {
      expName.style.width = '69%'
    } 
   if (exp === 7339) {
      expName.style.width = '69.5%'
    }
   if (exp === 7340) {
      expName.style.width = '70%'
    }
   if (exp === 7341) {
      expName.style.width = '70.5%'
    }
   if (exp === 7342) {
      expName.style.width = '71%'
    }
   if (exp === 7343) {
      expName.style.width = '71.5%'
    }
   if (exp === 7344) {
      expName.style.width = '72%'
    }
   if (exp === 7345) {
      expName.style.width = '72.5%'
    }
   if (exp === 7346) {
      expName.style.width = '73%'
    }
   if (exp === 7347) {
      expName.style.width = '73.5%'
    }
   if (exp === 7348) {
      expName.style.width = '74%'
    }
   if (exp === 7349) {
      expName.style.width = '74.5%'
    }
   if (exp === 7350) {
      expName.style.width = '75%'
    }
   if (exp === 7351) {
      expName.style.width = '75.5%'
    }
   if (exp === 7352) {
      expName.style.width = '76%'
    }
   if (exp === 7353) {
      expName.style.width = '76.5%'
    }
   if (exp === 7354) {
      expName.style.width = '77%'
    }
   if (exp === 7355) {
      expName.style.width = '77.5%'
    }
    if (exp === 7356) {
      expName.style.width = '78%'
    }
    if (exp === 7357) {
      expName.style.width = '78.5%'
    }
    if (exp === 7358) {
      expName.style.width = '79%'
    }
    if (exp === 7359) {
      expName.style.width = '79.5%'
    }
    if (exp === 7360) {
      expName.style.width = '80%'
    }
    if (exp === 7361) {
      exppName.style.width = '80.5%'
    }
    if (exp === 7362) {
      expName.style.width = '81%'
    }
    if (exp === 7363) {
      expName.style.width = '81.5%'
    }
    if (exp === 7364) {
      expName.style.width = '82%'
    }
    if (exp === 7365) {
      expName.style.width = '82.5%'
    }
    if (exp === 7366) {
      expName.style.width = '83%'
    }
    if (exp === 7367) {
      expName.style.width = '83.5%'
    }
    if (exp === 7368) {
      expName.style.width = '84%'
    }
    if (exp === 7369) {
      expName.style.width = '84.5%'
    }
    if (exp === 7370) {
      expName.style.width = '85%'
    }
    if (exp === 7371) {
      expName.style.width = '85.5%'
    }
    if (exp === 7372) {
      expName.style.width = '86%'
    }
    if (exp === 7373) {
      expName.style.width = '86.5%'
    }
    if (exp === 7374) {
      expName.style.width = '87%'
    }
    if (exp === 7375) {
      expName.style.width = '87.5%'
    }
    if (exp === 7376) {
      expName.style.width = '88%'
    }
    if (exp === 7377) {
      expName.style.width = '88.5%'
    }
    if (exp === 7378) {
      expName.style.width = '89%'
    }
    if (exp === 7379) {
      expName.style.width = '89.5%'
    }
    if (exp === 7380) {
      expName.style.width = '90%'
    }
    if (exp === 7381) {
      expName.style.width = '90.5%'
    }
    if (exp === 7382) {
      expName.style.width = '91%'
    }
    if (exp === 7383) {
      expName.style.width = '91.5%'
    }
    if (exp === 7384) {
      expName.style.width = '92%'
    }
    if (exp === 7385) {
      expName.style.width = '92.5%'
    }
    if (exp === 7386) {
      expName.style.width = '93%'
    }
    if (exp === 7387) {
      expName.style.width = '93.5%'
    }
    if (exp === 7388) {
      expName.style.width = '94%'
    }
    if (exp === 7389) {
      expName.style.width = '94.5%'
    }
    if (exp === 7390) {
      expName.style.width = '95%'
    }
    if (exp === 7391) {
      expName.style.width = '95.5%'
    }
    if (exp === 7392) {
      expName.style.width = '96%'
    }
    if (exp === 7393) {
      expName.style.width = '96.5%'
    }
    if (exp === 7394) {
      expName.style.width = '97%'
    }
    if (exp === 7395) {
      expName.style.width = '97.5%'
    }
    if (exp === 7396) {
      expName.style.width = '98%'
    }
    if (exp === 7397) {
      expName.style.width = '98.5%'
    }
    if (exp === 7398) {
      expName.style.width = '99%'
    }
    if (exp === 7399) {
      expName.style.width = '99.5%'
    }
    if (exp === 7400) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 7401 && exp <= 7600)
    {
      expName = expThree;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 7401) {
      expName.style.width = '0.5%'
    }
   if (exp === 7402) {
      expName.style.width = '1%'
    }
   if (exp === 7403) {
      expName.style.width = '1.5%'
    }
   if (exp === 7404) {
      expName.style.width = '2%'
    }
   if (exp === 7405) {
      expName.style.width = '2.5%'
    }
   if (exp === 7406) {
      expName.style.width = '3%'
    }
   if (exp === 7407) {
      expName.style.width = '3.5%'
   }
   if (exp === 7408) {
      expName.style.width = '4%'
    } 
   if (exp === 7409) {
      expName.style.width = '4.5%'
    } 
   if (exp === 7410) {
      expName.style.width = '5%'
    } 
   if (exp === 7411) {
      expName.style.width = '5.5%'
    } 
   if (exp === 7412) {
      expName.style.width = '6%'
    } 
   if (exp === 7413) {
      expName.style.width = '6.5%'
    } 
   if (exp === 7414) {
      expName.style.width = '7%'
    } 
   if (exp === 7415) {
      expName.style.width = '7.5%'
    } 
   if (exp === 7416) {
      expName.style.width = '8%'
    } 
   if (exp === 7417) {
      expName.style.width = '8.5%'
    } 
   if (exp === 7418) {
      expName.style.width = '9%'
    } 
   if (exp === 7419) {
      expName.style.width = '9.5%'
    }
   if (exp === 7420) {
      expName.style.width = '10%'
    }
   if (exp === 7421) {
     expName.style.width = '10.5%'
    }
   if (exp === 7422) {
     expName.style.width = '11%'
    }
   if (exp === 7423) {
     expName.style.width = '11.5%'
    }
   if (exp === 7424) {
     expName.style.width = '12%'
    }
   if (exp === 7425) {
     expName.style.width = '12.5%'
    }
   if (exp === 7426) {
     expName.style.width = '13%'
    }
   if (exp === 7427) {
     expName.style.width = '13.5%'
   }
   if (exp === 7428) {
     expName.style.width = '14%'
    } 
   if (exp === 7429) {
     expName.style.width = '14.5%'
    } 
   if (exp === 7430) {
     expName.style.width = '15%'
    } 
   if (exp === 7431) {
     expName.style.width = '15.5%'
    } 
   if (exp === 7432) {
     expName.style.width = '16%'
    } 
   if (exp === 7433) {
      expName.style.width = '16.5%'
    } 
   if (exp === 7434) {
      expName.style.width = '17%'
    } 
   if (exp === 7435) {
      expName.style.width = '17.5%'
    } 
   if (exp === 7436) {
      expName.style.width = '18%'
    } 
   if (exp === 7437) {
      expName.style.width = '18.5%'
    } 
   if (exp === 7438) {
      expName.style.width = '19%'
    } 
   if (exp === 7439) {
      expName.style.width = '19.5%'
    }
   if (exp === 7440) {
      expName.style.width = '20%'
    }
   if (exp === 7441) {
      expName.style.width = '20.5%'
    }
   if (exp === 7442) {
      expName.style.width = '21%'
    }
   if (exp === 7443) {
      expName.style.width = '21.5%'
    }
   if (exp === 7444) {
      expName.style.width = '22%'
    }
   if (exp === 7445) {
      expName.style.width = '22.5%'
    }
   if (exp === 7446) {
      expName.style.width = '23%'
    }
   if (exp === 7447) {
      expName.style.width = '23.5%'
    }
   if (exp === 7448) {
      expName.style.width = '24%'
    }
   if (exp === 7449) {
      expName.style.width = '24.5%'
    }
   if (exp === 7450) {
      expName.style.width = '25%'
    }
   if (exp === 7451) {
      expName.style.width = '25.5%'
    }
   if (exp === 7452) {
      expName.style.width = '26%'
    }
   if (exp === 7453) {
      expName.style.width = '26.5%'
    }
   if (exp === 7454) {
      expName.style.width = '27%'
    }
   if (exp === 7655) {
      expName.style.width = '27.5%'
    }
    if (exp === 7456) {
      expName.style.width = '28%'
    }
    if (exp === 7457) {
      expName.style.width = '28.5%'
    }
    if (exp === 7458) {
      expName.style.width = '29%'
    }
    if (exp === 7459) {
      expName.style.width = '29.5%'
    }
    if (exp === 7460) {
      expName.style.width = '30%'
    }
    if (exp === 7461) {
      expName.style.width = '30.5%'
    }
    if (exp === 7462) {
      expName.style.width = '31%'
    }
    if (exp === 7463) {
      expName.style.width = '31.5%'
    }
    if (exp === 7464) {
      expName.style.width = '32%'
    }
    if (exp === 7465) {
      expName.style.width = '32.5%'
    }
    if (exp === 7466) {
      expName.style.width = '33%'
    }
    if (exp === 7467) {
      expName.style.width = '33.5%'
    }
    if (exp === 7468) {
      expName.style.width = '34%'
    }
    if (exp === 7469) {
      expName.style.width = '34.5%'
    }
    if (exp === 7470) {
      expName.style.width = '35%'
    }
    if (exp === 7471) {
      expName.style.width = '35.5%'
    }
    if (exp === 7472) {
      expName.style.width = '36%'
    }
    if (exp === 7473) {
      expName.style.width = '36.5%'
    }
    if (exp === 7474) {
      expName.style.width = '37%'
    }
    if (exp === 7475) {
      expName.style.width = '37.5%'
    }
    if (exp === 7476) {
      expName.style.width = '38%'
    }
    if (exp === 7477) {
      expName.style.width = '38.5%'
    }
    if (exp === 7478) {
      expName.style.width = '39%'
    }
    if (exp === 7479) {
      expName.style.width = '39.5%'
    }
    if (exp === 7480) {
      expName.style.width = '40%'
    }
    if (exp === 7481) {
      expName.style.width = '40.5%'
    }
    if (exp === 7482) {
      expName.style.width = '41%'
    }
    if (exp === 7483) {
      expName.style.width = '41.5%'
    }
    if (exp === 7484) {
      expName.style.width = '42%'
    }
    if (exp === 7485) {
      expName.style.width = '42.5%'
    }
    if (exp === 7486) {
      expName.style.width = '43%'
    }
    if (exp === 7487) {
      expName.style.width = '43.5%'
    }
    if (exp === 7488) {
      expName.style.width = '44%'
    }
    if (exp === 7489) {
      expName.style.width = '44.5%'
    }
    if (exp === 7490) {
      expName.style.width = '45%'
    }
    if (exp === 7491) {
      expName.style.width = '45.5%'
    }
    if (exp === 7492) {
      expName.style.width = '46%'
    }
    if (exp === 7493) {
      expName.style.width = '46.5%'
    }
    if (exp === 7494) {
      expName.style.width = '47%'
    }
    if (exp === 7495) {
      expName.style.width = '47.5%'
    }
    if (exp === 7496) {
      expName.style.width = '48%'
    }
    if (exp === 7497) {
      expName.style.width = '48.5%'
    }
    if (exp === 7498) {
      expName.style.width = '49%'
    }
    if (exp === 7499) {
      expName.style.width = '49.5%'
    }
    if (exp === 7500) {
      expName.style.width = '50%'
    }
   if (exp === 7501) {
      expName.style.width = '50.5%'
    }
   if (exp === 7502) {
      expName.style.width = '51%'
    }
   if (exp === 7503) {
      expName.style.width = '51.5%'
    }
   if (exp === 7504) {
      expName.style.width = '52%'
    }
   if (exp === 7505) {
      expName.style.width = '52.5%'
    }
   if (exp === 7506) {
      expName.style.width = '53%'
    }
   if (exp === 7507) {
      expName.style.width = '53.5%'
   }
   if (exp === 7508) {
      expName.style.width = '54%'
    } 
   if (exp === 7509) {
      expName.style.width = '54.5%'
    } 
   if (exp === 7510) {
      expName.style.width = '55%'
    } 
   if (exp === 7511) {
      expName.style.width = '55.5%'
    } 
   if (exp === 7512) {
      expName.style.width = '56%'
    } 
   if (exp === 7513) {
      expName.style.width = '56.5%'
    } 
   if (exp === 7514) {
      expName.style.width = '57%'
    } 
   if (exp === 7515) {
      expName.style.width = '57.5%'
    } 
   if (exp === 7516) {
      expName.style.width = '58%'
    } 
   if (exp === 7517) {
      expName.style.width = '58.5%'
    } 
   if (exp === 7518) {
      expName.style.width = '59%'
    } 
   if (exp === 7519) {
      expName.style.width = '59.5%'
    }
   if (exp === 7510) {
      expName.style.width = '60%'
    }
   if (exp === 7521) {
     expName.style.width = '60.5%'
    }
   if (exp === 7522) {
     expName.style.width = '61%'
    }
   if (exp === 7523) {
     expName.style.width = '61.5%'
    }
   if (exp === 7524) {
     expName.style.width = '62%'
    }
   if (exp === 7525) {
     expName.style.width = '62.5%'
    }
   if (exp === 7526) {
     expName.style.width = '63%'
    }
   if (exp === 7527) {
     expName.style.width = '63.5%'
   }
   if (exp === 7528) {
     expName.style.width = '64%'
    } 
   if (exp === 7529) {
     expName.style.width = '64.5%'
    } 
   if (exp === 7530) {
     expName.style.width = '65%'
    } 
   if (exp === 7531) {
     expName.style.width = '65.5%'
    } 
   if (exp === 7532) {
     expName.style.width = '66%'
    } 
   if (exp === 7533) {
      expName.style.width = '66.5%'
    } 
   if (exp === 7534) {
      expName.style.width = '67%'
    } 
   if (exp === 7535) {
      expName.style.width = '67.5%'
    } 
   if (exp === 7536) {
      expName.style.width = '68%'
    } 
   if (exp === 7537) {
      expName.style.width = '68.5%'
    } 
   if (exp === 7538) {
      expName.style.width = '69%'
    } 
   if (exp === 7539) {
      expName.style.width = '69.5%'
    }
   if (exp === 7540) {
      expName.style.width = '70%'
    }
   if (exp === 7541) {
      expName.style.width = '70.5%'
    }
   if (exp === 7542) {
      expName.style.width = '71%'
    }
   if (exp === 7543) {
      expName.style.width = '71.5%'
    }
   if (exp === 7544) {
      expName.style.width = '72%'
    }
   if (exp === 7545) {
      expName.style.width = '72.5%'
    }
   if (exp === 7546) {
      expName.style.width = '73%'
    }
   if (exp === 7547) {
      expName.style.width = '73.5%'
    }
   if (exp === 7548) {
      expName.style.width = '74%'
    }
   if (exp === 7549) {
      expName.style.width = '74.5%'
    }
   if (exp === 7550) {
      expName.style.width = '75%'
    }
   if (exp ===  7551) {
      expName.style.width = '75.5%'
    }
   if (exp ===  7552) {
      expName.style.width = '76%'
    }
   if (exp ===  7553) {
      expName.style.width = '76.5%'
    }
   if (exp ===  7554) {
      expName.style.width = '77%'
    }
   if (exp ===  7555) {
      expName.style.width = '77.5%'
    }
    if (exp === 7556) {
      expName.style.width = '78%'
    }
    if (exp === 7557) {
      expName.style.width = '78.5%'
    }
    if (exp === 7558) {
      expName.style.width = '79%'
    }
    if (exp === 7559) {
      expName.style.width = '79.5%'
    }
    if (exp === 7560) {
      expName.style.width = '80%'
    }
    if (exp === 7561) {
      exppName.style.width = '80.5%'
    }
    if (exp === 7562) {
      expName.style.width = '81%'
    }
    if (exp === 7563) {
      expName.style.width = '81.5%'
    }
    if (exp === 7564) {
      expName.style.width = '82%'
    }
    if (exp === 7565) {
      expName.style.width = '82.5%'
    }
    if (exp === 7566) {
      expName.style.width = '83%'
    }
    if (exp === 7567) {
      expName.style.width = '83.5%'
    }
    if (exp === 7568) {
      expName.style.width = '84%'
    }
    if (exp === 7569) {
      expName.style.width = '84.5%'
    }
    if (exp === 7570) {
      expName.style.width = '85%'
    }
    if (exp === 7571) {
      expName.style.width = '85.5%'
    }
    if (exp === 7572) {
      expName.style.width = '86%'
    }
    if (exp === 7573) {
      expName.style.width = '86.5%'
    }
    if (exp === 7574) {
      expName.style.width = '87%'
    }
    if (exp === 7575) {
      expName.style.width = '87.5%'
    }
    if (exp === 7576) {
      expName.style.width = '88%'
    }
    if (exp === 7577) {
      expName.style.width = '88.5%'
    }
    if (exp === 7578) {
      expName.style.width = '89%'
    }
    if (exp === 7579) {
      expName.style.width = '89.5%'
    }
    if (exp === 7580) {
      expName.style.width = '90%'
    }
    if (exp === 7581) {
      expName.style.width = '90.5%'
    }
    if (exp === 7582) {
      expName.style.width = '91%'
    }
    if (exp === 7583) {
      expName.style.width = '91.5%'
    }
    if (exp === 7584) {
      expName.style.width = '92%'
    }
    if (exp === 7585) {
      expName.style.width = '92.5%'
    }
    if (exp === 7586) {
      expName.style.width = '93%'
    }
    if (exp === 7587) {
      expName.style.width = '93.5%'
    }
    if (exp === 7588) {
      expName.style.width = '94%'
    }
    if (exp === 7589) {
      expName.style.width = '94.5%'
    }
    if (exp === 7590) {
      expName.style.width = '95%'
    }
    if (exp === 7591) {
      expName.style.width = '95.5%'
    }
    if (exp === 7592) {
      expName.style.width = '96%'
    }
    if (exp === 7593) {
      expName.style.width = '96.5%'
    }
    if (exp === 7594) {
      expName.style.width = '97%'
    }
    if (exp === 7595) {
      expName.style.width = '97.5%'
    }
    if (exp === 7596) {
      expName.style.width = '98%'
    }
    if (exp === 7597) {
      expName.style.width = '98.5%'
    }
    if (exp === 7598) {
      expName.style.width = '99%'
    }
    if (exp === 7599) {
      expName.style.width = '99.5%'
    }
    if (exp === 7600) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 7601 && exp <= 7800)
    {
      expName = expFour;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 7601) {
      expName.style.width = '0.5%'
    }
   if (exp === 7602) {
      expName.style.width = '1%'
    }
   if (exp === 7603) {
      expName.style.width = '1.5%'
    }
   if (exp === 7604) {
      expName.style.width = '2%'
    }
   if (exp === 7605) {
      expName.style.width = '2.5%'
    }
   if (exp === 7606) {
      expName.style.width = '3%'
   }
   if (exp === 7607) {
      expName.style.width = '3.5%'
   }
   if (exp === 7608) {
      expName.style.width = '4%'
    } 
   if (exp === 7609) {
      expName.style.width = '4.5%'
    } 
   if (exp === 7610) {
      expName.style.width = '5%'
    } 
   if (exp === 7611) {
      expName.style.width = '5.5%'
    } 
   if (exp === 7612) {
      expName.style.width = '6%'
    } 
   if (exp === 7613) {
      expName.style.width = '6.5%'
    } 
   if (exp === 7614) {
      expName.style.width = '7%'
    } 
   if (exp === 7615) {
      expName.style.width = '7.5%'
    } 
   if (exp === 7616) {
      expName.style.width = '8%'
  } 
   if (exp === 7617) {
      expName.style.width = '8.5%'
   } 
   if (exp === 7618) {
      expName.style.width = '9%'
    } 
   if (exp === 7619) {
      expName.style.width = '9.5%'
    }
   if (exp === 7620) {
      expName.style.width = '10%'
    }
   if (exp === 7621) {
     expName.style.width = '10.5%'
    }
   if (exp === 7622) {
     expName.style.width = '11%'
    }
   if (exp === 7623) {
     expName.style.width = '11.5%'
    }
   if (exp === 7624) {
     expName.style.width = '12%'
    }
   if (exp === 7625) {
     expName.style.width = '12.5%'
    }
   if (exp === 7626) {
     expName.style.width = '13%'
    }
   if (exp === 7627) {
     expName.style.width = '13.5%'
   }
   if (exp === 7628) {
     expName.style.width = '14%'
   }
   if (exp === 7629) {
     expName.style.width = '14.5%'
    } 
   if (exp === 7630) {
     expName.style.width = '15%'
    } 
   if (exp === 7631) {
     expName.style.width = '15.5%'
    } 
   if (exp === 7632) {
     expName.style.width = '16%'
    } 
   if (exp === 7633) {
      expName.style.width = '16.5%'
    } 
   if (exp === 7634) {
      expName.style.width = '17%'
    } 
   if (exp === 7635) {
      expName.style.width = '17.5%'
    } 
   if (exp === 7636) {
      expName.style.width = '18%'
    } 
   if (exp === 7637) {
      expName.style.width = '18.5%'
    } 
   if (exp === 7638) {
      expName.style.width = '19%'
    } 
   if (exp === 7639) {
      expName.style.width = '19.5%'
   }
   if (exp === 7640) {
      expName.style.width = '20%'
    }
   if (exp === 7641) {
      expName.style.width = '20.5%'
    }
   if (exp === 7642) {
      expName.style.width = '21%'
    }
   if (exp === 7643) {
      expName.style.width = '21.5%'
    }
   if (exp === 7644) {
      expName.style.width = '22%'
    }
   if (exp === 7645) {
      expName.style.width = '22.5%'
    }
   if (exp === 7646) {
      expName.style.width = '23%'
    }
   if (exp === 7647) {
      expName.style.width = '23.5%'
    }
   if (exp === 7648) {
      expName.style.width = '24%'
    }
   if (exp === 7649) {
      expName.style.width = '24.5%'
    }
   if (exp === 7650) {
      expName.style.width = '25%'
  }
   if (exp === 7651) {
      expName.style.width = '25.5%'
    }
   if (exp === 7652) {
      expName.style.width = '26%'
    }
   if (exp === 7653) {
      expName.style.width = '26.5%'
    }
   if (exp === 7654) {
      expName.style.width = '27%'
    }
   if (exp === 7655) {
      expName.style.width = '27.5%'
    }
    if (exp === 7656) {
      expName.style.width = '28%'
    }
    if (exp === 7657) {
      expName.style.width = '28.5%'
    }
    if (exp === 7658) {
      expName.style.width = '29%'
    }
    if (exp === 7659) {
      expName.style.width = '29.5%'
    }
    if (exp === 7660) {
      expName.style.width = '30%'
    }
    if (exp === 7661) {
      expName.style.width = '30.5%'
  }
    if (exp === 7662) {
      expName.style.width = '31%'
    }
    if (exp === 7663) {
      expName.style.width = '31.5%'
    }
    if (exp === 7664) {
      expName.style.width = '32%'
    }
    if (exp === 7665) {
      expName.style.width = '32.5%'
    }
    if (exp === 7666) {
      expName.style.width = '33%'
    }
    if (exp === 7667) {
      expName.style.width = '33.5%'
    }
    if (exp === 7668) {
      expName.style.width = '34%'
    }
    if (exp === 7669) {
      expName.style.width = '34.5%'
    }
    if (exp === 7670) {
      expName.style.width = '35%'
    }
    if (exp === 7671) {
      expName.style.width = '35.5%'
    }
    if (exp === 7672) {
      expName.style.width = '36%'
      }
    if (exp === 7673) {
      expName.style.width = '36.5%'
    }
    if (exp === 7674) {
      expName.style.width = '37%'
    }
    if (exp === 7675) {
      expName.style.width = '37.5%'
    }
    if (exp === 7676) {
      expName.style.width = '38%'
    }
    if (exp === 7677) {
      expName.style.width = '38.5%'
    }
    if (exp === 7678) {
      expName.style.width = '39%'
    }
    if (exp === 7679) {
      expName.style.width = '39.5%'
    }
    if (exp === 7680) {
      expName.style.width = '40%'
    }
    if (exp === 7681) {
      expName.style.width = '40.5%'
    }
    if (exp === 7682) {
      expName.style.width = '41%'
    }
    if (exp === 7683) {
      expName.style.width = '41.5%'
  }
    if (exp === 7684) {
      expName.style.width = '42%'
    }
    if (exp === 7685) {
      expName.style.width = '42.5%'
    }
    if (exp === 7686) {
      expName.style.width = '43%'
    }
    if (exp === 7687) {
      expName.style.width = '43.5%'
    }
    if (exp === 7688) {
      expName.style.width = '44%'
    }
    if (exp === 7689) {
      expName.style.width = '44.5%'
    }
    if (exp === 7690) {
      expName.style.width = '45%'
    }
    if (exp === 7691) {
      expName.style.width = '45.5%'
    }
    if (exp === 7692) {
      expName.style.width = '46%'
    }
    if (exp === 7693) {
      expName.style.width = '46.5%'
    }
    if (exp === 7694) {
      expName.style.width = '47%'
    }
    if (exp === 7695) {
      expName.style.width = '47.5%'
    }
    if (exp === 7696) {
      expName.style.width = '48%'
    }
    if (exp === 7697) {
      expName.style.width = '48.5%'
    }
    if (exp === 7698) {
      expName.style.width = '49%'
    }
    if (exp === 7699) {
      expName.style.width = '49.5%'
    }
    if (exp === 7700) {
      expName.style.width = '50%'
    }
   if (exp === 7701) {
      expName.style.width = '50.5%'
    }
   if (exp === 7702) {
      expName.style.width = '51%'
    }
   if (exp === 7703) {
      expName.style.width = '51.5%'
   }
   if (exp === 7704) {
      expName.style.width = '52%'
    }
   if (exp === 7705) {
      expName.style.width = '52.5%'
    }
   if (exp === 7706) {
      expName.style.width = '53%'
    }
   if (exp === 7707) {
      expName.style.width = '53.5%'
   }
   if (exp === 7708) {
      expName.style.width = '54%'
    } 
   if (exp === 7709) {
      expName.style.width = '54.5%'
    } 
   if (exp === 7710) {
      expName.style.width = '55%'
    } 
   if (exp === 7711) {
      expName.style.width = '55.5%'
    } 
   if (exp === 7712) {
      expName.style.width = '56%'
    } 
   if (exp === 7713) {
      expName.style.width = '56.5%'
    } 
   if (exp === 7714) {
      expName.style.width = '57%'
    } 
   if (exp === 7715) {
      expName.style.width = '57.5%'
    } 
   if (exp === 7716) {
      expName.style.width = '58%'
    } 
   if (exp === 7717) {
      expName.style.width = '58.5%'
    } 
   if (exp === 7718) {
      expName.style.width = '59%'
    } 
   if (exp === 7719) {
      expName.style.width = '59.5%'
    }
   if (exp === 7710) {
      expName.style.width = '60%'
    }
   if (exp === 7721) {
     expName.style.width = '60.5%'
    }
   if (exp === 7722) {
     expName.style.width = '61%'
    }
   if (exp === 7723) {
     expName.style.width = '61.5%'
    }
   if (exp === 7724) {
     expName.style.width = '62%'
    }
   if (exp === 7725) {
     expName.style.width = '62.5%'
    }
   if (exp === 7726) {
     expName.style.width = '63%'
    }
   if (exp === 7727) {
     expName.style.width = '63.5%'
   }
   if (exp === 7728) {
     expName.style.width = '64%'
    } 
   if (exp === 7729) {
     expName.style.width = '64.5%'
    } 
   if (exp === 7730) {
     expName.style.width = '65%'
    } 
   if (exp === 7731) {
     expName.style.width = '65.5%'
    } 
   if (exp === 7732) {
     expName.style.width = '66%'
    } 
   if (exp === 7733) {
      expName.style.width = '66.5%'
    } 
   if (exp === 7734) {
      expName.style.width = '67%'
    } 
   if (exp === 7735) {
      expName.style.width = '67.5%'
    } 
   if (exp === 7736) {
      expName.style.width = '68%'
    } 
   if (exp === 7737) {
      expName.style.width = '68.5%'
    } 
   if (exp === 7738) {
      expName.style.width = '69%'
    } 
   if (exp === 7739) {
      expName.style.width = '69.5%'
    }
   if (exp === 7740) {
      expName.style.width = '70%'
    }
   if (exp === 7741) {
      expName.style.width = '70.5%'
    }
   if (exp === 7742) {
      expName.style.width = '71%'
    }
   if (exp === 7743) {
      expName.style.width = '71.5%'
    }
   if (exp === 7744) {
      expName.style.width = '72%'
    }
   if (exp === 7745) {
      expName.style.width = '72.5%'
    }
   if (exp === 7746) {
      expName.style.width = '73%'
    }
   if (exp === 7747) {
      expName.style.width = '73.5%'
    }
   if (exp === 7748) {
      expName.style.width = '74%'
    }
   if (exp === 7749) {
      expName.style.width = '74.5%'
    }
   if (exp === 7750) {
      expName.style.width = '75%'
    }
   if (exp === 7751) {
      expName.style.width = '75.5%'
    }
   if (exp === 7752) {
      expName.style.width = '76%'
    }
   if (exp === 7753) {
      expName.style.width = '76.5%'
    }
   if (exp === 7754) {
      expName.style.width = '77%'
    }
   if (exp === 7755) {
      expName.style.width = '77.5%'
    }
    if (exp === 7756) {
      expName.style.width = '78%'
    }
    if (exp === 7757) {
      expName.style.width = '78.5%'
    }
    if (exp === 7758) {
      expName.style.width = '79%'
    }
    if (exp === 7759) {
      expName.style.width = '79.5%'
    }
    if (exp === 7760) {
      expName.style.width = '80%'
    }
    if (exp === 7761) {
      exppName.style.width = '80.5%'
    }
    if (exp === 7762) {
      expName.style.width = '81%'
    }
    if (exp === 7763) {
      expName.style.width = '81.5%'
    }
    if (exp === 7764) {
      expName.style.width = '82%'
    }
    if (exp === 7765) {
      expName.style.width = '82.5%'
    }
    if (exp === 7766) {
      expName.style.width = '83%'
    }
    if (exp === 7767) {
      expName.style.width = '83.5%'
    }
    if (exp === 7768) {
      expName.style.width = '84%'
    }
    if (exp === 7769) {
      expName.style.width = '84.5%'
    }
    if (exp === 7770) {
      expName.style.width = '85%'
    }
    if (exp === 7771) {
      expName.style.width = '85.5%'
    }
    if (exp === 7772) {
      expName.style.width = '86%'
    }
    if (exp === 7773) {
      expName.style.width = '86.5%'
    }
    if (exp === 7774) {
      expName.style.width = '87%'
    }
    if (exp === 7775) {
      expName.style.width = '87.5%'
    }
    if (exp === 7776) {
      expName.style.width = '88%'
    }
    if (exp === 7777) {
      expName.style.width = '88.5%'
    }
    if (exp === 7778) {
      expName.style.width = '89%'
    }
    if (exp === 7779) {
      expName.style.width = '89.5%'
    }
    if (exp === 7780) {
      expName.style.width = '90%'
    }
    if (exp === 7781) {
      expName.style.width = '90.5%'
    }
    if (exp === 7782) {
      expName.style.width = '91%'
    }
    if (exp === 7783) {
      expName.style.width = '91.5%'
    }
    if (exp === 7784) {
      expName.style.width = '92%'
    }
    if (exp === 7785) {
      expName.style.width = '92.5%'
    }
    if (exp === 7786) {
      expName.style.width = '93%'
    }
    if (exp === 7787) {
      expName.style.width = '93.5%'
    }
    if (exp === 7788) {
      expName.style.width = '94%'
    }
    if (exp === 7789) {
      expName.style.width = '94.5%'
    }
    if (exp === 7790) {
      expName.style.width = '95%'
    }
    if (exp === 7791) {
      expName.style.width = '95.5%'
    }
    if (exp === 7792) {
      expName.style.width = '96%'
    }
    if (exp === 7793) {
      expName.style.width = '96.5%'
    }
    if (exp === 7794) {
      expName.style.width = '97%'
    }
    if (exp === 7795) {
      expName.style.width = '97.5%'
    }
    if (exp === 7796) {
      expName.style.width = '98%'
    }
    if (exp === 7797) {
      expName.style.width = '98.5%'
    }
    if (exp === 7798) {
      expName.style.width = '99%'
    }
    if (exp === 7799) {
      expName.style.width = '99.5%'
    }
    if (exp === 7800) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 7801 && exp <= 8000) 
    {
      expName = expFive;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 7801) {
      expName.style.width = '0.5%'
    }
   if (exp === 7802) {
      expName.style.width = '1%'
    }
   if (exp === 7803) {
      expName.style.width = '1.5%'
    }
   if (exp === 7804) {
      expName.style.width = '2%'
    }
   if (exp === 7805) {
      expName.style.width = '2.5%'
    }
   if (exp === 7806) {
      expName.style.width = '3%'
   }
   if (exp === 7807) {
      expName.style.width = '3.5%'
   }
   if (exp === 7808) {
      expName.style.width = '4%'
    } 
   if (exp === 7809) {
      expName.style.width = '4.5%'
    } 
   if (exp === 7810) {
      expName.style.width = '5%'
    } 
   if (exp === 7811) {
      expName.style.width = '5.5%'
    } 
   if (exp === 7812) {
      expName.style.width = '6%'
    } 
   if (exp === 7813) {
      expName.style.width = '6.5%'
    } 
   if (exp === 7814) {
      expName.style.width = '7%'
    } 
   if (exp === 7815) {
      expName.style.width = '7.5%'
    } 
   if (exp === 7816) {
      expName.style.width = '8%'
    } 
   if (exp === 7817) {
      expName.style.width = '8.5%'
   } 
   if (exp === 7818) {
      expName.style.width = '9%'
    } 
   if (exp === 7819) {
      expName.style.width = '9.5%'
    }
   if (exp === 7820) {
      expName.style.width = '10%'
    }
   if (exp === 7821) {
     expName.style.width = '10.5%'
    }
   if (exp === 7822) {
     expName.style.width = '11%'
    }
   if (exp === 7823) {
     expName.style.width = '11.5%'
    }
   if (exp === 7824) {
     expName.style.width = '12%'
    }
   if (exp === 7825) {
     expName.style.width = '12.5%'
    }
   if (exp === 7826) {
     expName.style.width = '13%'
    }
   if (exp === 7827) {
     expName.style.width = '13.5%'
   }
   if (exp === 7828) {
     expName.style.width = '14%'
   }
   if (exp === 7829) {
     expName.style.width = '14.5%'
    } 
   if (exp === 7830) {
     expName.style.width = '15%'
    } 
   if (exp === 7831) {
     expName.style.width = '15.5%'
    } 
   if (exp === 7832) {
     expName.style.width = '16%'
    } 
   if (exp === 7833) {
      expName.style.width = '16.5%'
    } 
   if (exp === 7834) {
      expName.style.width = '17%'
    } 
   if (exp === 7835) {
      expName.style.width = '17.5%'
    } 
   if (exp === 7836) {
      expName.style.width = '18%'
    } 
   if (exp === 7837) {
      expName.style.width = '18.5%'
    } 
   if (exp === 7838) {
      expName.style.width = '19%'
    } 
   if (exp === 7839) {
      expName.style.width = '19.5%'
   }
   if (exp === 7840) {
      expName.style.width = '20%'
    }
   if (exp === 7841) {
      expName.style.width = '20.5%'
    }
   if (exp === 7842) {
      expName.style.width = '21%'
    }
   if (exp === 7843) {
      expName.style.width = '21.5%'
    }
   if (exp === 7844) {
      expName.style.width = '22%'
    }
   if (exp === 7845) {
      expName.style.width = '22.5%'
    }
   if (exp === 7846) {
      expName.style.width = '23%'
    }
   if (exp === 7847) {
      expName.style.width = '23.5%'
    }
   if (exp === 7848) {
      expName.style.width = '24%'
    }
   if (exp === 7849) {
      expName.style.width = '24.5%'
    }
   if (exp === 7850) {
      expName.style.width = '25%'
  }
   if (exp === 7851) {
      expName.style.width = '25.5%'
    }
   if (exp === 7852) {
      expName.style.width = '26%'
    }
   if (exp === 7853) {
      expName.style.width = '26.5%'
    }
   if (exp === 7854) {
      expName.style.width = '27%'
    }
   if (exp === 7855) {
      expName.style.width = '27.5%'
    }
    if (exp === 7856) {
      expName.style.width = '28%'
    }
    if (exp === 7857) {
      expName.style.width = '28.5%'
    }
    if (exp === 7858) {
      expName.style.width = '29%'
    }
    if (exp === 7859) {
      expName.style.width = '29.5%'
    }
    if (exp === 7860) {
      expName.style.width = '30%'
    }
    if (exp === 7861) {
      expName.style.width = '30.5%'
  }
    if (exp === 7862) {
      expName.style.width = '31%'
    }
    if (exp === 7863) {
      expName.style.width = '31.5%'
    }
    if (exp === 7864) {
      expName.style.width = '32%'
    }
    if (exp === 7865) {
      expName.style.width = '32.5%'
    }
    if (exp === 7866) {
      expName.style.width = '33%'
    }
    if (exp === 7867) {
      expName.style.width = '33.5%'
    }
    if (exp === 7868) {
      expName.style.width = '34%'
    }
    if (exp === 7869) {
      expName.style.width = '34.5%'
    }
    if (exp === 7870) {
      expName.style.width = '35%'
    }
    if (exp === 7871) {
      expName.style.width = '35.5%'
    }
    if (exp === 7872) {
      expName.style.width = '36%'
    }
    if (exp === 7873) {
      expName.style.width = '36.5%'
    }
    if (exp === 7874) {
      expName.style.width = '37%'
    }
    if (exp === 7875) {
      expName.style.width = '37.5%'
    }
    if (exp === 7876) {
      expName.style.width = '38%'
    }
    if (exp === 7877) {
      expName.style.width = '38.5%'
    }
    if (exp === 7878) {
      expName.style.width = '39%'
    }
    if (exp === 7879) {
      expName.style.width = '39.5%'
    }
    if (exp === 7880) {
      expName.style.width = '40%'
    }
    if (exp === 7881) {
      expName.style.width = '40.5%'
    }
    if (exp === 7882) {
      expName.style.width = '41%'
    }
    if (exp === 7883) {
      expName.style.width = '41.5%'
    }
    if (exp === 7884) {
      expName.style.width = '42%'
    }
    if (exp === 7885) {
      expName.style.width = '42.5%'
    }
    if (exp === 7886) {
      expName.style.width = '43%'
    }
    if (exp === 7887) {
      expName.style.width = '43.5%'
    }
    if (exp === 7888) {
      expName.style.width = '44%'
    }
    if (exp === 7889) {
      expName.style.width = '44.5%'
    }
    if (exp === 7890) {
      expName.style.width = '45%'
    }
    if (exp === 7891) {
      expName.style.width = '45.5%'
    }
    if (exp === 7892) {
      expName.style.width = '46%'
    }
    if (exp === 7893) {
      expName.style.width = '46.5%'
    }
    if (exp === 7894) {
      expName.style.width = '47%'
    }
    if (exp === 7895) {
      expName.style.width = '47.5%'
    }
    if (exp === 7896) {
      expName.style.width = '48%'
    }
    if (exp === 7897) {
      expName.style.width = '48.5%'
    }
    if (exp === 7898) {
      expName.style.width = '49%'
    }
    if (exp === 7899) {
      expName.style.width = '49.5%'
    }
    if (exp === 7900) {
      expName.style.width = '50%'
    }
   if (exp === 7901) {
      expName.style.width = '50.5%'
    }
   if (exp === 7902) {
      expName.style.width = '51%'
    }
   if (exp === 7903) {
      expName.style.width = '51.5%'
  }
   if (exp === 7904) {
      expName.style.width = '52%'
    }
   if (exp === 7905) {
      expName.style.width = '52.5%'
    }
   if (exp === 7906) {
      expName.style.width = '53%'
    }
   if (exp === 7907) {
      expName.style.width = '53.5%'
   }
   if (exp === 7908) {
      expName.style.width = '54%'
    } 
   if (exp === 7909) {
      expName.style.width = '54.5%'
    } 
   if (exp === 7910) {
      expName.style.width = '55%'
    } 
   if (exp === 7911) {
      expName.style.width = '55.5%'
    } 
   if (exp === 7912) {
      expName.style.width = '56%'
    } 
   if (exp === 7913) {
      expName.style.width = '56.5%'
    } 
   if (exp === 7914) {
      expName.style.width = '57%'
    } 
   if (exp === 7915) {
      expName.style.width = '57.5%'
    } 
   if (exp === 7916) {
      expName.style.width = '58%'
    } 
   if (exp === 7917) {
      expName.style.width = '58.5%'
    } 
   if (exp === 7918) {
      expName.style.width = '59%'
    } 
   if (exp === 7919) {
      expName.style.width = '59.5%'
    }
   if (exp === 7920) {
      expName.style.width = '60%'
    }
   if (exp === 7921) {
     expName.style.width = '60.5%'
    }
   if (exp === 7922) {
     expName.style.width = '61%'
    }
   if (exp === 7923) {
     expName.style.width = '61.5%'
    }
   if (exp === 7924) {
     expName.style.width = '62%'
    }
   if (exp === 7925) {
     expName.style.width = '62.5%'
    }
   if (exp === 7926) {
     expName.style.width = '63%'
    }
   if (exp === 7927) {
     expName.style.width = '63.5%'
   }
   if (exp === 7928) {
     expName.style.width = '64%'
    } 
   if (exp === 7929) {
     expName.style.width = '64.5%'
    } 
   if (exp === 7930) {
     expName.style.width = '65%'
    } 
   if (exp === 7931) {
     expName.style.width = '65.5%'
    } 
   if (exp === 7932) {
     expName.style.width = '66%'
    } 
   if (exp === 7933) {
      expName.style.width = '66.5%'
    } 
   if (exp === 7934) {
      expName.style.width = '67%'
    } 
   if (exp === 7935) {
      expName.style.width = '67.5%'
    } 
   if (exp === 7936) {
      expName.style.width = '68%'
    } 
   if (exp === 7937) {
      expName.style.width = '68.5%'
    } 
   if (exp === 7938) {
      expName.style.width = '69%'
    } 
   if (exp === 7939) {
      expName.style.width = '69.5%'
    }
   if (exp === 7940) {
      expName.style.width = '70%'
    }
   if (exp === 7941) {
      expName.style.width = '70.5%'
    }
   if (exp === 7942) {
      expName.style.width = '71%'
    }
   if (exp === 7943) {
      expName.style.width = '71.5%'
    }
   if (exp === 7944) {
      expName.style.width = '72%'
    }
   if (exp === 7945) {
      expName.style.width = '72.5%'
    }
   if (exp === 7946) {
      expName.style.width = '73%'
    }
   if (exp === 7947) {
      expName.style.width = '73.5%'
    }
   if (exp === 7948) {
      expName.style.width = '74%'
    }
   if (exp === 7949) {
      expName.style.width = '74.5%'
    }
   if (exp === 7950) {
      expName.style.width = '75%'
    }
   if (exp === 7951) {
      expName.style.width = '75.5%'
    }
   if (exp === 7952) {
      expName.style.width = '76%'
    }
   if (exp === 7953) {
      expName.style.width = '76.5%'
    }
   if (exp === 7954) {
      expName.style.width = '77%'
    }
   if (exp === 7955) {
      expName.style.width = '77.5%'
    }
    if (exp === 7956) {
      expName.style.width = '78%'
    }
    if (exp === 7957) {
      expName.style.width = '78.5%'
    }
    if (exp === 7958) {
      expName.style.width = '79%'
    }
    if (exp === 7959) {
      expName.style.width = '79.5%'
    }
    if (exp === 7960) {
      expName.style.width = '80%'
    }
    if (exp === 7961) {
      exppName.style.width = '80.5%'
    }
    if (exp === 7962) {
      expName.style.width = '81%'
    }
    if (exp === 7963) {
      expName.style.width = '81.5%'
    }
    if (exp === 7964) {
      expName.style.width = '82%'
    }
    if (exp === 7965) {
      expName.style.width = '82.5%'
    }
    if (exp === 7966) {
      expName.style.width = '83%'
    }
    if (exp === 7967) {
      expName.style.width = '83.5%'
    }
    if (exp === 7968) {
      expName.style.width = '84%'
    }
    if (exp === 7969) {
      expName.style.width = '84.5%'
    }
    if (exp === 7970) {
      expName.style.width = '85%'
    }
    if (exp === 7971) {
      expName.style.width = '85.5%'
    }
    if (exp === 7972) {
      expName.style.width = '86%'
    }
    if (exp === 7973) {
      expName.style.width = '86.5%'
    }
    if (exp === 7974) {
      expName.style.width = '87%'
    }
    if (exp === 7975) {
      expName.style.width = '87.5%'
    }
    if (exp === 7976) {
      expName.style.width = '88%'
    }
    if (exp === 7977) {
      expName.style.width = '88.5%'
    }
    if (exp === 7978) {
      expName.style.width = '89%'
    }
    if (exp === 7979) {
      expName.style.width = '89.5%'
    }
    if (exp === 7980) {
      expName.style.width = '90%'
    }
    if (exp === 7981) {
      expName.style.width = '90.5%'
    }
    if (exp === 7982) {
      expName.style.width = '91%'
    }
    if (exp === 7983) {
      expName.style.width = '91.5%'
    }
    if (exp === 7984) {
      expName.style.width = '92%'
    }
    if (exp === 7985) {
      expName.style.width = '92.5%'
    }
    if (exp === 7986) {
      expName.style.width = '93%'
    }
    if (exp === 7987) {
      expName.style.width = '93.5%'
    }
    if (exp === 7988) {
      expName.style.width = '94%'
    }
    if (exp === 7989) {
      expName.style.width = '94.5%'
    }
    if (exp === 7990) {
      expName.style.width = '95%'
    }
    if (exp === 7991) {
      expName.style.width = '95.5%'
    }
    if (exp === 7992) {
      expName.style.width = '96%'
    }
    if (exp === 7993) {
      expName.style.width = '96.5%'
    }
    if (exp === 7994) {
      expName.style.width = '97%'
    }
    if (exp === 7995) {
      expName.style.width = '97.5%'
    }
    if (exp === 7996) {
      expName.style.width = '98%'
    }
    if (exp === 7997) {
      expName.style.width = '98.5%'
    }
    if (exp === 7998) {
      expName.style.width = '99%'
    }
    if (exp === 7999) {
      expName.style.width = '99.5%'
    }
    if (exp === 8000) {
      expName.style.width = '100%'
    }
    }
     
    if (exp === 8000) {
      setTimeout(() => {
        expOne.style.display = 'none'
        expTwo.style.display = 'none'
        expThree.style.display = 'none'
        expFour.style.display = 'none'
        expFive.style.display = 'none'
      }, 500)
      handleExpTen();
    }
  
    if (exp >= 8000) {
      handleExpTen();
      levelUpShow();
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
  
      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
      document.querySelector('.the-level').innerHTML = 10;
      
      document.querySelector('.next-level').innerHTML = '9000';
      
      document.querySelector('.level-title').innerHTML = 'Novice'
    }
  
    
  } 
}

function handleExpTen() {
  let expName = expOne;
  if (playerLevel === 10) {
     
    if (exp >= 8001 && exp <= 8200) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 8001) {
      expName.style.width = '0.5%'
    }
   if (exp === 8002) {
      expName.style.width = '1%'
    }
   if (exp === 8003) {
      expName.style.width = '1.5%'
    }
   if (exp === 8004) {
      expName.style.width = '2%'
    }
   if (exp === 8005) {
      expName.style.width = '2.5%'
    }
   if (exp === 8006) {
      expName.style.width = '3%'
    }
   if (exp === 8007) {
      expName.style.width = '3.5%'
   }
   if (exp === 8008) {
      expName.style.width = '4%'
    } 
   if (exp === 8009) {
      expName.style.width = '4.5%'
    } 
   if (exp === 8010) {
      expName.style.width = '5%'
    } 
   if (exp === 8011) {
      expName.style.width = '5.5%'
    } 
   if (exp === 8012) {
      expName.style.width = '6%'
    } 
   if (exp === 8013) {
      expName.style.width = '6.5%'
    } 
   if (exp === 8014) {
      expName.style.width = '7%'
    } 
   if (exp === 8015) {
      expName.style.width = '7.5%'
    } 
   if (exp === 8016) {
      expName.style.width = '8%'
    } 
   if (exp === 8017) {
      expName.style.width = '8.5%'
    } 
   if (exp === 8018) {
      expName.style.width = '9%'
    } 
   if (exp === 8019) {
      expName.style.width = '9.5%'
    }
   if (exp === 8020) {
      expName.style.width = '10%'
    }
   if (exp === 8021) {
     expName.style.width = '10.5%'
    }
   if (exp === 8022) {
     expName.style.width = '11%'
    }
   if (exp === 8023) {
     expName.style.width = '11.5%'
    }
   if (exp === 8024) {
     expName.style.width = '12%'
    }
   if (exp === 8025) {
     expName.style.width = '12.5%'
    }
   if (exp === 8026) {
     expName.style.width = '13%'
    }
   if (exp === 8027) {
     expName.style.width = '13.5%'
   }
   if (exp === 8028) {
     expName.style.width = '14%'
    } 
   if (exp === 8029) {
     expName.style.width = '14.5%'
    } 
   if (exp === 8030) {
     expName.style.width = '15%'
    } 
   if (exp === 8031) {
     expName.style.width = '15.5%'
    } 
   if (exp === 8032) {
     expName.style.width = '16%'
    } 
   if (exp === 8033) {
      expName.style.width = '16.5%'
    } 
   if (exp === 8034) {
      expName.style.width = '17%'
    } 
   if (exp === 8035) {
      expName.style.width = '17.5%'
    } 
   if (exp === 8036) {
      expName.style.width = '18%'
    } 
   if (exp === 8037) {
      expName.style.width = '18.5%'
    } 
   if (exp === 8038) {
      expName.style.width = '19%'
    } 
   if (exp === 8039) {
      expName.style.width = '19.5%'
    }
   if (exp === 8040) {
      expName.style.width = '20%'
    }
   if (exp === 8041) {
      expName.style.width = '20.5%'
    }
   if (exp === 8042) {
      expName.style.width = '21%'
    }
   if (exp === 8043) {
      expName.style.width = '21.5%'
    }
   if (exp === 8044) {
      expName.style.width = '22%'
    }
   if (exp === 8045) {
      expName.style.width = '22.5%'
    }
   if (exp === 8046) {
      expName.style.width = '23%'
    }
   if (exp === 8047) {
      expName.style.width = '23.5%'
    }
   if (exp === 8048) {
      expName.style.width = '24%'
    }
   if (exp === 8049) {
      expName.style.width = '24.5%'
    }
   if (exp === 8050) {
      expName.style.width = '25%'
    }
   if (exp === 8051) {
      expName.style.width = '25.5%'
    }
   if (exp === 8052) {
      expName.style.width = '26%'
    }
   if (exp === 8053) {
      expName.style.width = '26.5%'
    }
   if (exp === 8054) {
      expName.style.width = '27%'
    }
   if (exp === 8055) {
      expName.style.width = '27.5%'
    }
    if (exp === 8056) {
      expName.style.width = '28%'
    }
    if (exp === 8057) {
      expName.style.width = '28.5%'
    }
    if (exp === 8058) {
      expName.style.width = '29%'
    }
    if (exp === 8059) {
      expName.style.width = '29.5%'
    }
    if (exp === 8060) {
      expName.style.width = '30%'
    }
    if (exp === 8061) {
      expName.style.width = '30.5%'
    }
    if (exp === 8062) {
      expName.style.width = '31%'
    }
    if (exp === 8063) {
      expName.style.width = '31.5%'
    }
    if (exp === 8064) {
      expName.style.width = '32%'
    }
    if (exp === 8065) {
      expName.style.width = '32.5%'
    }
    if (exp === 8066) {
      expName.style.width = '33%'
    }
    if (exp === 8067) {
      expName.style.width = '33.5%'
    }
    if (exp === 8068) {
      expName.style.width = '34%'
    }
    if (exp === 8069) {
      expName.style.width = '34.5%'
    }
    if (exp === 8070) {
      expName.style.width = '35%'
    }
    if (exp === 8071) {
      expName.style.width = '35.5%'
    }
    if (exp === 8072) {
      expName.style.width = '36%'
    }
    if (exp === 8073) {
      expName.style.width = '36.5%'
    }
    if (exp === 8074) {
      expName.style.width = '37%'
    }
    if (exp === 8075) {
      expName.style.width = '37.5%'
    }
    if (exp === 8076) {
      expName.style.width = '38%'
    }
    if (exp === 8077) {
      expName.style.width = '38.5%'
    }
    if (exp === 8078) {
      expName.style.width = '39%'
    }
    if (exp === 8079) {
      expName.style.width = '39.5%'
    }
    if (exp === 8080) {
      expName.style.width = '40%'
    }
    if (exp === 8081) {
      expName.style.width = '40.5%'
    }
    if (exp === 8082) {
      expName.style.width = '41%'
    }
    if (exp === 8083) {
      expName.style.width = '41.5%'
    }
    if (exp === 8084) {
      expName.style.width = '42%'
    }
    if (exp === 8085) {
      expName.style.width = '42.5%'
    }
    if (exp === 8086) {
      expName.style.width = '43%'
    }
    if (exp === 8087) {
      expName.style.width = '43.5%'
    }
    if (exp === 8088) {
      expName.style.width = '44%'
    }
    if (exp === 8089) {
      expName.style.width = '44.5%'
    }
    if (exp === 8090) {
      expName.style.width = '45%'
    }
    if (exp === 8091) {
      expName.style.width = '45.5%'
    }
    if (exp === 8092) {
      expName.style.width = '46%'
    }
    if (exp === 8093) {
      expName.style.width = '46.5%'
    }
    if (exp === 8094) {
      expName.style.width = '47%'
    }
    if (exp === 8095) {
      expName.style.width = '47.5%'
    }
    if (exp === 8096) {
      expName.style.width = '48%'
    }
    if (exp === 8097) {
      expName.style.width = '48.5%'
    }
    if (exp === 8098) {
      expName.style.width = '49%'
    }
    if (exp === 8099) {
      expName.style.width = '49.5%'
    }
    if (exp === 8100) {
      expName.style.width = '50%'
    }
   if (exp === 8601) {
      expName.style.width = '50.5%'
    }
   if (exp === 8602) {
      expName.style.width = '51%'
    }
   if (exp === 8103) {
      expName.style.width = '51.5%'
    }
   if (exp === 8104) {
      expName.style.width = '52%'
    }
   if (exp === 8105) {
      expName.style.width = '52.5%'
    }
   if (exp === 8106) {
      expName.style.width = '53%'
    }
   if (exp === 8107) {
      expName.style.width = '53.5%'
   }
   if (exp === 8108) {
      expName.style.width = '54%'
    } 
   if (exp === 8109) {
      expName.style.width = '54.5%'
    } 
   if (exp === 8110) {
      expName.style.width = '55%'
    } 
   if (exp === 8111) {
      expName.style.width = '55.5%'
    } 
   if (exp === 8112) {
      expName.style.width = '56%'
    } 
   if (exp === 8113) {
      expName.style.width = '56.5%'
    } 
   if (exp === 8114) {
      expName.style.width = '57%'
    } 
   if (exp === 8115) {
      expName.style.width = '57.5%'
    } 
   if (exp === 8116) {
      expName.style.width = '58%'
    } 
   if (exp === 8117) {
      expName.style.width = '58.5%'
    } 
   if (exp === 8118) {
      expName.style.width = '59%'
    } 
   if (exp === 8119) {
      expName.style.width = '59.5%'
    }
   if (exp === 8120) {
      expName.style.width = '60%'
    }
   if (exp === 8121) {
     expName.style.width = '60.5%'
    }
   if (exp === 8122) {
     expName.style.width = '61%'
    }
   if (exp === 8123) {
     expName.style.width = '61.5%'
    }
   if (exp === 8124) {
     expName.style.width = '62%'
    }
   if (exp === 8125) {
     expName.style.width = '62.5%'
    }
   if (exp === 8126) {
     expName.style.width = '63%'
    }
   if (exp === 8127) {
     expName.style.width = '63.5%'
   }
   if (exp === 8128) {
     expName.style.width = '64%'
    } 
   if (exp === 8129) {
     expName.style.width = '64.5%'
    } 
   if (exp === 8130) {
     expName.style.width = '65%'
    } 
   if (exp === 8131) {
     expName.style.width = '65.5%'
    } 
   if (exp === 8132) {
     expName.style.width = '66%'
    } 
   if (exp === 8133) {
      expName.style.width = '66.5%'
    } 
   if (exp === 8134) {
      expName.style.width = '67%'
    } 
   if (exp === 8135) {
      expName.style.width = '67.5%'
    } 
   if (exp === 8136) {
      expName.style.width = '68%'
    } 
   if (exp === 8137) {
      expName.style.width = '68.5%'
    } 
   if (exp === 8138) {
      expName.style.width = '69%'
    } 
   if (exp === 8139) {
      expName.style.width = '69.5%'
    }
   if (exp === 8140) {
      expName.style.width = '70%'
    }
   if (exp === 8141) {
      expName.style.width = '70.5%'
    }
   if (exp === 8142) {
      expName.style.width = '71%'
    }
   if (exp === 8143) {
      expName.style.width = '71.5%'
    }
   if (exp === 8144) {
      expName.style.width = '72%'
    }
   if (exp === 8145) {
      expName.style.width = '72.5%'
    }
   if (exp === 8146) {
      expName.style.width = '73%'
    }
   if (exp === 8147) {
      expName.style.width = '73.5%'
    }
   if (exp === 8148) {
      expName.style.width = '74%'
    }
   if (exp === 8149) {
      expName.style.width = '74.5%'
    }
   if (exp === 8150) {
      expName.style.width = '75%'
    }
   if (exp === 8151) {
      expName.style.width = '75.5%'
    }
   if (exp === 8152) {
      expName.style.width = '76%'
    }
   if (exp === 8153) {
      expName.style.width = '76.5%'
    }
   if (exp === 8154) {
      expName.style.width = '77%'
    }
   if (exp === 8155) {
      expName.style.width = '77.5%'
    }
    if (exp === 8156) {
      expName.style.width = '78%'
    }
    if (exp === 8157) {
      expName.style.width = '78.5%'
    }
    if (exp === 8158) {
      expName.style.width = '79%'
    }
    if (exp === 8159) {
      expName.style.width = '79.5%'
    }
    if (exp === 8160) {
      expName.style.width = '80%'
    }
    if (exp === 8161) {
      exppName.style.width = '80.5%'
    }
    if (exp === 8162) {
      expName.style.width = '81%'
    }
    if (exp === 8163) {
      expName.style.width = '81.5%'
    }
    if (exp === 8164) {
      expName.style.width = '82%'
    }
    if (exp === 8165) {
      expName.style.width = '82.5%'
    }
    if (exp === 8166) {
      expName.style.width = '83%'
    }
    if (exp === 8167) {
      expName.style.width = '83.5%'
    }
    if (exp === 8168) {
      expName.style.width = '84%'
    }
    if (exp === 8169) {
      expName.style.width = '84.5%'
    }
    if (exp === 8170) {
      expName.style.width = '85%'
    }
    if (exp === 8171) {
      expName.style.width = '85.5%'
    }
    if (exp === 8172) {
      expName.style.width = '86%'
    }
    if (exp === 8173) {
      expName.style.width = '86.5%'
    }
    if (exp === 8174) {
      expName.style.width = '87%'
    }
    if (exp === 8175) {
      expName.style.width = '87.5%'
    }
    if (exp === 8176) {
      expName.style.width = '88%'
    }
    if (exp === 8177) {
      expName.style.width = '88.5%'
    }
    if (exp === 8178) {
      expName.style.width = '89%'
    }
    if (exp === 8179) {
      expName.style.width = '89.5%'
    }
    if (exp === 8180) {
      expName.style.width = '90%'
    }
    if (exp === 8181) {
      expName.style.width = '90.5%'
    }
    if (exp === 8182) {
      expName.style.width = '91%'
    }
    if (exp === 8183) {
      expName.style.width = '91.5%'
    }
    if (exp === 8184) {
      expName.style.width = '92%'
    }
    if (exp === 8185) {
      expName.style.width = '92.5%'
    }
    if (exp === 8186) {
      expName.style.width = '93%'
    }
    if (exp === 8187) {
      expName.style.width = '93.5%'
    }
    if (exp === 8188) {
      expName.style.width = '94%'
    }
    if (exp === 8189) {
      expName.style.width = '94.5%'
    }
    if (exp === 8190) {
      expName.style.width = '95%'
    }
    if (exp === 8191) {
      expName.style.width = '95.5%'
    }
    if (exp === 8192) {
      expName.style.width = '96%'
    }
    if (exp === 8193) {
      expName.style.width = '96.5%'
    }
    if (exp === 8194) {
      expName.style.width = '97%'
    }
    if (exp === 8195) {
      expName.style.width = '97.5%'
    }
    if (exp === 8196) {
      expName.style.width = '98%'
    }
    if (exp === 8197) {
      expName.style.width = '98.5%'
    }
    if (exp === 8198) {
      expName.style.width = '99%'
    }
    if (exp === 8199) {
      expName.style.width = '99.5%'
    }
    if (exp === 8200) {
      expName.style.width = '100%'
    }
     
    }

    if (exp >= 8201 && exp <= 8400) 
    {
      expName = expTwo;

      expOne.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 8201) {
      expName.style.width = '0.5%'
    }
   if (exp === 8202) {
      expName.style.width = '1%'
    }
   if (exp === 8203) {
      expName.style.width = '1.5%'
    }
   if (exp === 8204) {
      expName.style.width = '2%'
    }
   if (exp === 8205) {
      expName.style.width = '2.5%'
    }
   if (exp === 8206) {
      expName.style.width = '3%'
    }
   if (exp === 8207) {
      expName.style.width = '3.5%'
   }
   if (exp === 8208) {
      expName.style.width = '4%'
    } 
   if (exp === 8209) {
      expName.style.width = '4.5%'
    } 
   if (exp === 8210) {
      expName.style.width = '5%'
    } 
   if (exp === 8211) {
      expName.style.width = '5.5%'
    } 
   if (exp === 8212) {
      expName.style.width = '6%'
    } 
   if (exp === 8213) {
      expName.style.width = '6.5%'
    } 
   if (exp === 8214) {
      expName.style.width = '7%'
    } 
   if (exp === 8215) {
      expName.style.width = '7.5%'
    } 
   if (exp === 8216) {
      expName.style.width = '8%'
    } 
   if (exp === 8217) {
      expName.style.width = '8.5%'
    } 
   if (exp === 8218) {
      expName.style.width = '9%'
    } 
   if (exp === 8219) {
      expName.style.width = '9.5%'
    }
   if (exp === 8220) {
      expName.style.width = '10%'
    }
   if (exp === 8221) {
     expName.style.width = '10.5%'
    }
   if (exp === 8222) {
     expName.style.width = '11%'
    }
   if (exp === 8223) {
     expName.style.width = '11.5%'
    }
   if (exp === 8224) {
     expName.style.width = '12%'
    }
   if (exp === 8225) {
     expName.style.width = '12.5%'
    }
   if (exp === 8226) {
     expName.style.width = '13%'
    }
   if (exp === 8227) {
     expName.style.width = '13.5%'
   }
   if (exp === 8228) {
     expName.style.width = '14%'
    } 
   if (exp === 8229) {
     expName.style.width = '14.5%'
    } 
   if (exp === 8230) {
     expName.style.width = '15%'
    } 
   if (exp === 8231) {
     expName.style.width = '15.5%'
    } 
   if (exp === 8232) {
     expName.style.width = '16%'
    } 
   if (exp === 8233) {
      expName.style.width = '16.5%'
    } 
   if (exp === 8234) {
      expName.style.width = '17%'
    } 
   if (exp === 8235) {
      expName.style.width = '17.5%'
    } 
   if (exp === 8236) {
      expName.style.width = '18%'
    } 
   if (exp === 8237) {
      expName.style.width = '18.5%'
    } 
   if (exp === 8238) {
      expName.style.width = '19%'
    } 
   if (exp === 8239) {
      expName.style.width = '19.5%'
    }
   if (exp === 8240) {
      expName.style.width = '20%'
    }
   if (exp === 8241) {
      expName.style.width = '20.5%'
    }
   if (exp === 8242) {
      expName.style.width = '21%'
    }
   if (exp === 8243) {
      expName.style.width = '21.5%'
    }
   if (exp === 8244) {
      expName.style.width = '22%'
    }
   if (exp === 8245) {
      expName.style.width = '22.5%'
    }
   if (exp === 8246) {
      expName.style.width = '23%'
    }
   if (exp === 8247) {
      expName.style.width = '23.5%'
    }
   if (exp === 8248) {
      expName.style.width = '24%'
    }
   if (exp === 8249) {
      expName.style.width = '24.5%'
    }
   if (exp === 8250) {
      expName.style.width = '25%'
    }
   if (exp === 8251) {
      expName.style.width = '25.5%'
    }
   if (exp === 8252) {
      expName.style.width = '26%'
    }
   if (exp === 8253) {
      expName.style.width = '26.5%'
    }
   if (exp === 8254) {
      expName.style.width = '27%'
    }
   if (exp === 8255) {
      expName.style.width = '27.5%'
    }
    if (exp === 8256) {
      expName.style.width = '28%'
    }
    if (exp === 8257) {
      expName.style.width = '28.5%'
    }
    if (exp === 8258) {
      expName.style.width = '29%'
    }
    if (exp === 8259) {
      expName.style.width = '29.5%'
    }
    if (exp === 8260) {
      expName.style.width = '30%'
    }
    if (exp === 8261) {
      expName.style.width = '30.5%'
    }
    if (exp === 8262) {
      expName.style.width = '31%'
    }
    if (exp === 8263) {
      expName.style.width = '31.5%'
    }
    if (exp === 8264) {
      expName.style.width = '32%'
    }
    if (exp === 8265) {
      expName.style.width = '32.5%'
    }
    if (exp === 8266) {
      expName.style.width = '33%'
    }
    if (exp === 8267) {
      expName.style.width = '33.5%'
    }
    if (exp === 8268) {
      expName.style.width = '34%'
    }
    if (exp === 8269) {
      expName.style.width = '34.5%'
    }
    if (exp === 8270) {
      expName.style.width = '35%'
    }
    if (exp === 8271) {
      expName.style.width = '35.5%'
    }
    if (exp === 8272) {
      expName.style.width = '36%'
    }
    if (exp === 8273) {
      expName.style.width = '36.5%'
    }
    if (exp === 8274) {
      expName.style.width = '37%'
    }
    if (exp === 8275) {
      expName.style.width = '37.5%'
    }
    if (exp === 8276) {
      expName.style.width = '38%'
    }
    if (exp === 8277) {
      expName.style.width = '38.5%'
    }
    if (exp === 8278) {
      expName.style.width = '39%'
    }
    if (exp === 8279) {
      expName.style.width = '39.5%'
    }
    if (exp === 8280) {
      expName.style.width = '40%'
    }
    if (exp === 8281) {
      expName.style.width = '40.5%'
    }
    if (exp === 8282) {
      expName.style.width = '41%'
    }
    if (exp === 8283) {
      expName.style.width = '41.5%'
    }
    if (exp === 8284) {
      expName.style.width = '42%'
    }
    if (exp === 8285) {
      expName.style.width = '42.5%'
    }
    if (exp === 8286) {
      expName.style.width = '43%'
    }
    if (exp === 8287) {
      expName.style.width = '43.5%'
    }
    if (exp === 8288) {
      expName.style.width = '44%'
    }
    if (exp === 8289) {
      expName.style.width = '44.5%'
    }
    if (exp === 8290) {
      expName.style.width = '45%'
    }
    if (exp === 8291) {
      expName.style.width = '45.5%'
    }
    if (exp === 8292) {
      expName.style.width = '46%'
    }
    if (exp === 8293) {
      expName.style.width = '46.5%'
    }
    if (exp === 8294) {
      expName.style.width = '47%'
    }
    if (exp === 8295) {
      expName.style.width = '47.5%'
    }
    if (exp === 8296) {
      expName.style.width = '48%'
    }
    if (exp === 8297) {
      expName.style.width = '48.5%'
    }
    if (exp === 8298) {
      expName.style.width = '49%'
    }
    if (exp === 8299) {
      expName.style.width = '49.5%'
    }
    if (exp === 8300) {
      expName.style.width = '50%'
    }
   if (exp === 8301) {
      expName.style.width = '50.5%'
    }
   if (exp === 8302) {
      expName.style.width = '51%'
    }
   if (exp === 8303) {
      expName.style.width = '51.5%'
    }
   if (exp === 8304) {
      expName.style.width = '52%'
    }
   if (exp === 8305) {
      expName.style.width = '52.5%'
    }
   if (exp === 8306) {
      expName.style.width = '53%'
    }
   if (exp === 8307) {
      expName.style.width = '53.5%'
   }
   if (exp === 8308) {
      expName.style.width = '54%'
    } 
   if (exp === 8309) {
      expName.style.width = '54.5%'
    } 
   if (exp === 8310) {
      expName.style.width = '55%'
    } 
   if (exp === 8311) {
      expName.style.width = '55.5%'
    } 
   if (exp === 8312) {
      expName.style.width = '56%'
    } 
   if (exp === 8313) {
      expName.style.width = '56.5%'
    } 
   if (exp === 8314) {
      expName.style.width = '57%'
    } 
   if (exp === 8315) {
      expName.style.width = '57.5%'
    } 
   if (exp === 8316) {
      expName.style.width = '58%'
    } 
   if (exp === 8317) {
      expName.style.width = '58.5%'
    } 
   if (exp === 8318) {
      expName.style.width = '59%'
    } 
   if (exp === 8319) {
      expName.style.width = '59.5%'
    }
   if (exp === 8320) {
      expName.style.width = '60%'
    }
   if (exp === 8321) {
     expName.style.width = '60.5%'
    }
   if (exp === 8322) {
     expName.style.width = '61%'
    }
   if (exp === 8323) {
     expName.style.width = '61.5%'
    }
   if (exp === 8324) {
     expName.style.width = '62%'
    }
   if (exp === 8325) {
     expName.style.width = '62.5%'
    }
   if (exp === 8326) {
     expName.style.width = '63%'
    }
   if (exp === 8327) {
     expName.style.width = '63.5%'
   }
   if (exp === 8328) {
     expName.style.width = '64%'
    } 
   if (exp === 8329) {
     expName.style.width = '64.5%'
    } 
   if (exp === 8330) {
     expName.style.width = '65%'
    } 
   if (exp === 8331) {
     expName.style.width = '65.5%'
    } 
   if (exp === 8332) {
     expName.style.width = '66%'
    } 
   if (exp === 8333) {
      expName.style.width = '66.5%'
    } 
   if (exp === 8334) {
      expName.style.width = '67%'
    } 
   if (exp === 8335) {
      expName.style.width = '67.5%'
    } 
   if (exp === 8336) {
      expName.style.width = '68%'
    } 
   if (exp === 8337) {
      expName.style.width = '68.5%'
    } 
   if (exp === 8338) {
      expName.style.width = '69%'
    } 
   if (exp === 8339) {
      expName.style.width = '69.5%'
    }
   if (exp === 8340) {
      expName.style.width = '70%'
    }
   if (exp === 8341) {
      expName.style.width = '70.5%'
    }
   if (exp === 8342) {
      expName.style.width = '71%'
    }
   if (exp === 8343) {
      expName.style.width = '71.5%'
    }
   if (exp === 8344) {
      expName.style.width = '72%'
    }
   if (exp === 8345) {
      expName.style.width = '72.5%'
    }
   if (exp === 8346) {
      expName.style.width = '73%'
    }
   if (exp === 8347) {
      expName.style.width = '73.5%'
    }
   if (exp === 8348) {
      expName.style.width = '74%'
    }
   if (exp === 8349) {
      expName.style.width = '74.5%'
    }
   if (exp === 8350) {
      expName.style.width = '75%'
    }
   if (exp === 8351) {
      expName.style.width = '75.5%'
    }
   if (exp === 8352) {
      expName.style.width = '76%'
    }
   if (exp === 8353) {
      expName.style.width = '76.5%'
    }
   if (exp === 8354) {
      expName.style.width = '77%'
    }
   if (exp === 8355) {
      expName.style.width = '77.5%'
    }
    if (exp === 8356) {
      expName.style.width = '78%'
    }
    if (exp === 8357) {
      expName.style.width = '78.5%'
    }
    if (exp === 8358) {
      expName.style.width = '79%'
    }
    if (exp === 8359) {
      expName.style.width = '79.5%'
    }
    if (exp === 8360) {
      expName.style.width = '80%'
    }
    if (exp === 8361) {
      exppName.style.width = '80.5%'
    }
    if (exp === 8362) {
      expName.style.width = '81%'
    }
    if (exp === 8363) {
      expName.style.width = '81.5%'
    }
    if (exp === 8364) {
      expName.style.width = '82%'
    }
    if (exp === 8365) {
      expName.style.width = '82.5%'
    }
    if (exp === 8366) {
      expName.style.width = '83%'
    }
    if (exp === 8367) {
      expName.style.width = '83.5%'
    }
    if (exp === 8368) {
      expName.style.width = '84%'
    }
    if (exp === 8369) {
      expName.style.width = '84.5%'
    }
    if (exp === 8370) {
      expName.style.width = '85%'
    }
    if (exp === 8371) {
      expName.style.width = '85.5%'
    }
    if (exp === 8372) {
      expName.style.width = '86%'
    }
    if (exp === 8373) {
      expName.style.width = '86.5%'
    }
    if (exp === 8374) {
      expName.style.width = '87%'
    }
    if (exp === 8375) {
      expName.style.width = '87.5%'
    }
    if (exp === 8376) {
      expName.style.width = '88%'
    }
    if (exp === 8377) {
      expName.style.width = '88.5%'
    }
    if (exp === 8378) {
      expName.style.width = '89%'
    }
    if (exp === 8379) {
      expName.style.width = '89.5%'
    }
    if (exp === 8380) {
      expName.style.width = '90%'
    }
    if (exp === 8381) {
      expName.style.width = '90.5%'
    }
    if (exp === 8382) {
      expName.style.width = '91%'
    }
    if (exp === 8383) {
      expName.style.width = '91.5%'
    }
    if (exp === 8384) {
      expName.style.width = '92%'
    }
    if (exp === 8385) {
      expName.style.width = '92.5%'
    }
    if (exp === 8386) {
      expName.style.width = '93%'
    }
    if (exp === 8387) {
      expName.style.width = '93.5%'
    }
    if (exp === 8388) {
      expName.style.width = '94%'
    }
    if (exp === 8389) {
      expName.style.width = '94.5%'
    }
    if (exp === 8390) {
      expName.style.width = '95%'
    }
    if (exp === 8391) {
      expName.style.width = '95.5%'
    }
    if (exp === 8392) {
      expName.style.width = '96%'
    }
    if (exp === 8393) {
      expName.style.width = '96.5%'
    }
    if (exp === 8394) {
      expName.style.width = '97%'
    }
    if (exp === 8395) {
      expName.style.width = '97.5%'
    }
    if (exp === 8396) {
      expName.style.width = '98%'
    }
    if (exp === 8397) {
      expName.style.width = '98.5%'
    }
    if (exp === 8398) {
      expName.style.width = '99%'
    }
    if (exp === 8399) {
      expName.style.width = '99.5%'
    }
    if (exp === 8400) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 8401 && exp <= 8600)
    {
      expName = expThree;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 8401) {
      expName.style.width = '0.5%'
    }
   if (exp === 8402) {
      expName.style.width = '1%'
    }
   if (exp === 8403) {
      expName.style.width = '1.5%'
    }
   if (exp === 8404) {
      expName.style.width = '2%'
    }
   if (exp === 8405) {
      expName.style.width = '2.5%'
    }
   if (exp === 8406) {
      expName.style.width = '3%'
    }
   if (exp === 8407) {
      expName.style.width = '3.5%'
   }
   if (exp === 8408) {
      expName.style.width = '4%'
    } 
   if (exp === 8409) {
      expName.style.width = '4.5%'
    } 
   if (exp === 8410) {
      expName.style.width = '5%'
    } 
   if (exp === 8411) {
      expName.style.width = '5.5%'
    } 
   if (exp === 8412) {
      expName.style.width = '6%'
    } 
   if (exp === 8413) {
      expName.style.width = '6.5%'
    } 
   if (exp === 8414) {
      expName.style.width = '7%'
    } 
   if (exp === 8415) {
      expName.style.width = '7.5%'
    } 
   if (exp === 8416) {
      expName.style.width = '8%'
    } 
   if (exp === 8417) {
      expName.style.width = '8.5%'
    } 
   if (exp === 8418) {
      expName.style.width = '9%'
    } 
   if (exp === 8419) {
      expName.style.width = '9.5%'
    }
   if (exp === 8420) {
      expName.style.width = '10%'
    }
   if (exp === 8421) {
     expName.style.width = '10.5%'
    }
   if (exp === 8422) {
     expName.style.width = '11%'
    }
   if (exp === 8423) {
     expName.style.width = '11.5%'
    }
   if (exp === 8424) {
     expName.style.width = '12%'
    }
   if (exp === 8425) {
     expName.style.width = '12.5%'
    }
   if (exp === 8426) {
     expName.style.width = '13%'
    }
   if (exp === 8427) {
     expName.style.width = '13.5%'
   }
   if (exp === 8428) {
     expName.style.width = '14%'
    } 
   if (exp === 8429) {
     expName.style.width = '14.5%'
    } 
   if (exp === 8430) {
     expName.style.width = '15%'
    } 
   if (exp === 8431) {
     expName.style.width = '15.5%'
    } 
   if (exp === 8432) {
     expName.style.width = '16%'
    } 
   if (exp === 8433) {
      expName.style.width = '16.5%'
    } 
   if (exp === 8434) {
      expName.style.width = '17%'
    } 
   if (exp === 8435) {
      expName.style.width = '17.5%'
    } 
   if (exp === 8436) {
      expName.style.width = '18%'
    } 
   if (exp === 8437) {
      expName.style.width = '18.5%'
    } 
   if (exp === 8438) {
      expName.style.width = '19%'
    } 
   if (exp === 8439) {
      expName.style.width = '19.5%'
    }
   if (exp === 8440) {
      expName.style.width = '20%'
    }
   if (exp === 8441) {
      expName.style.width = '20.5%'
    }
   if (exp === 8442) {
      expName.style.width = '21%'
    }
   if (exp === 8443) {
      expName.style.width = '21.5%'
    }
   if (exp === 8444) {
      expName.style.width = '22%'
    }
   if (exp === 8445) {
      expName.style.width = '22.5%'
    }
   if (exp === 8446) {
      expName.style.width = '23%'
    }
   if (exp === 8447) {
      expName.style.width = '23.5%'
    }
   if (exp === 8448) {
      expName.style.width = '24%'
    }
   if (exp === 8449) {
      expName.style.width = '24.5%'
    }
   if (exp === 8450) {
      expName.style.width = '25%'
    }
   if (exp === 8451) {
      expName.style.width = '25.5%'
    }
   if (exp === 8452) {
      expName.style.width = '26%'
    }
   if (exp === 8453) {
      expName.style.width = '26.5%'
    }
   if (exp === 8454) {
      expName.style.width = '27%'
    }
   if (exp === 8655) {
      expName.style.width = '27.5%'
    }
    if (exp === 8456) {
      expName.style.width = '28%'
    }
    if (exp === 8457) {
      expName.style.width = '28.5%'
    }
    if (exp === 8458) {
      expName.style.width = '29%'
    }
    if (exp === 8459) {
      expName.style.width = '29.5%'
    }
    if (exp === 8460) {
      expName.style.width = '30%'
    }
    if (exp === 8461) {
      expName.style.width = '30.5%'
    }
    if (exp === 8462) {
      expName.style.width = '31%'
    }
    if (exp === 8463) {
      expName.style.width = '31.5%'
    }
    if (exp === 8464) {
      expName.style.width = '32%'
    }
    if (exp === 8465) {
      expName.style.width = '32.5%'
    }
    if (exp === 8466) {
      expName.style.width = '33%'
    }
    if (exp === 8467) {
      expName.style.width = '33.5%'
    }
    if (exp === 8468) {
      expName.style.width = '34%'
    }
    if (exp === 8469) {
      expName.style.width = '34.5%'
    }
    if (exp === 8470) {
      expName.style.width = '35%'
    }
    if (exp === 8471) {
      expName.style.width = '35.5%'
    }
    if (exp === 8472) {
      expName.style.width = '36%'
    }
    if (exp === 8473) {
      expName.style.width = '36.5%'
    }
    if (exp === 8474) {
      expName.style.width = '37%'
    }
    if (exp === 8475) {
      expName.style.width = '37.5%'
    }
    if (exp === 8476) {
      expName.style.width = '38%'
    }
    if (exp === 8477) {
      expName.style.width = '38.5%'
    }
    if (exp === 8478) {
      expName.style.width = '39%'
    }
    if (exp === 8479) {
      expName.style.width = '39.5%'
    }
    if (exp === 8480) {
      expName.style.width = '40%'
    }
    if (exp === 8481) {
      expName.style.width = '40.5%'
    }
    if (exp === 8482) {
      expName.style.width = '41%'
    }
    if (exp === 8483) {
      expName.style.width = '41.5%'
    }
    if (exp === 8484) {
      expName.style.width = '42%'
    }
    if (exp === 8485) {
      expName.style.width = '42.5%'
    }
    if (exp === 8486) {
      expName.style.width = '43%'
    }
    if (exp === 8487) {
      expName.style.width = '43.5%'
    }
    if (exp === 8488) {
      expName.style.width = '44%'
    }
    if (exp === 8489) {
      expName.style.width = '44.5%'
    }
    if (exp === 8490) {
      expName.style.width = '45%'
    }
    if (exp === 8491) {
      expName.style.width = '45.5%'
    }
    if (exp === 8492) {
      expName.style.width = '46%'
    }
    if (exp === 8493) {
      expName.style.width = '46.5%'
    }
    if (exp === 8494) {
      expName.style.width = '47%'
    }
    if (exp === 8495) {
      expName.style.width = '47.5%'
    }
    if (exp === 8496) {
      expName.style.width = '48%'
    }
    if (exp === 8497) {
      expName.style.width = '48.5%'
    }
    if (exp === 8498) {
      expName.style.width = '49%'
    }
    if (exp === 8499) {
      expName.style.width = '49.5%'
    }
    if (exp === 8500) {
      expName.style.width = '50%'
    }
   if (exp === 8501) {
      expName.style.width = '50.5%'
    }
   if (exp === 8502) {
      expName.style.width = '51%'
    }
   if (exp === 8503) {
      expName.style.width = '51.5%'
    }
   if (exp === 8504) {
      expName.style.width = '52%'
    }
   if (exp === 8505) {
      expName.style.width = '52.5%'
    }
   if (exp === 8506) {
      expName.style.width = '53%'
    }
   if (exp === 8507) {
      expName.style.width = '53.5%'
   }
   if (exp === 8508) {
      expName.style.width = '54%'
    } 
   if (exp === 8509) {
      expName.style.width = '54.5%'
    } 
   if (exp === 8510) {
      expName.style.width = '55%'
    } 
   if (exp === 8511) {
      expName.style.width = '55.5%'
    } 
   if (exp === 8512) {
      expName.style.width = '56%'
    } 
   if (exp === 8513) {
      expName.style.width = '56.5%'
    } 
   if (exp === 8514) {
      expName.style.width = '57%'
    } 
   if (exp === 8515) {
      expName.style.width = '57.5%'
    } 
   if (exp === 8516) {
      expName.style.width = '58%'
    } 
   if (exp === 8517) {
      expName.style.width = '58.5%'
    } 
   if (exp === 8518) {
      expName.style.width = '59%'
    } 
   if (exp === 8519) {
      expName.style.width = '59.5%'
    }
   if (exp === 8510) {
      expName.style.width = '60%'
    }
   if (exp === 8521) {
     expName.style.width = '60.5%'
    }
   if (exp === 8522) {
     expName.style.width = '61%'
    }
   if (exp === 8523) {
     expName.style.width = '61.5%'
    }
   if (exp === 8524) {
     expName.style.width = '62%'
    }
   if (exp === 8525) {
     expName.style.width = '62.5%'
    }
   if (exp === 8526) {
     expName.style.width = '63%'
    }
   if (exp === 8527) {
     expName.style.width = '63.5%'
   }
   if (exp === 8528) {
     expName.style.width = '64%'
    } 
   if (exp === 8529) {
     expName.style.width = '64.5%'
    } 
   if (exp === 8530) {
     expName.style.width = '65%'
    } 
   if (exp === 8531) {
     expName.style.width = '65.5%'
    } 
   if (exp === 8532) {
     expName.style.width = '66%'
    } 
   if (exp === 8533) {
      expName.style.width = '66.5%'
    } 
   if (exp === 8534) {
      expName.style.width = '67%'
    } 
   if (exp === 8535) {
      expName.style.width = '67.5%'
    } 
   if (exp === 8536) {
      expName.style.width = '68%'
    } 
   if (exp === 8537) {
      expName.style.width = '68.5%'
    } 
   if (exp === 8538) {
      expName.style.width = '69%'
    } 
   if (exp === 8539) {
      expName.style.width = '69.5%'
    }
   if (exp === 8540) {
      expName.style.width = '70%'
    }
   if (exp === 8541) {
      expName.style.width = '70.5%'
    }
   if (exp === 8542) {
      expName.style.width = '71%'
    }
   if (exp === 8543) {
      expName.style.width = '71.5%'
    }
   if (exp === 8544) {
      expName.style.width = '72%'
    }
   if (exp === 8545) {
      expName.style.width = '72.5%'
    }
   if (exp === 8546) {
      expName.style.width = '73%'
    }
   if (exp === 8547) {
      expName.style.width = '73.5%'
    }
   if (exp === 8548) {
      expName.style.width = '74%'
    }
   if (exp === 8549) {
      expName.style.width = '74.5%'
    }
   if (exp === 8550) {
      expName.style.width = '75%'
    }
   if (exp ===  8551) {
      expName.style.width = '75.5%'
    }
   if (exp ===  8552) {
      expName.style.width = '76%'
    }
   if (exp ===  8553) {
      expName.style.width = '76.5%'
    }
   if (exp ===  8554) {
      expName.style.width = '77%'
    }
   if (exp ===  8555) {
      expName.style.width = '77.5%'
    }
    if (exp === 8556) {
      expName.style.width = '78%'
    }
    if (exp === 8557) {
      expName.style.width = '78.5%'
    }
    if (exp === 8558) {
      expName.style.width = '79%'
    }
    if (exp === 8559) {
      expName.style.width = '79.5%'
    }
    if (exp === 8560) {
      expName.style.width = '80%'
    }
    if (exp === 8561) {
      exppName.style.width = '80.5%'
    }
    if (exp === 8562) {
      expName.style.width = '81%'
    }
    if (exp === 8563) {
      expName.style.width = '81.5%'
    }
    if (exp === 8564) {
      expName.style.width = '82%'
    }
    if (exp === 8565) {
      expName.style.width = '82.5%'
    }
    if (exp === 8566) {
      expName.style.width = '83%'
    }
    if (exp === 8567) {
      expName.style.width = '83.5%'
    }
    if (exp === 8568) {
      expName.style.width = '84%'
    }
    if (exp === 8569) {
      expName.style.width = '84.5%'
    }
    if (exp === 8570) {
      expName.style.width = '85%'
    }
    if (exp === 8571) {
      expName.style.width = '85.5%'
    }
    if (exp === 8572) {
      expName.style.width = '86%'
    }
    if (exp === 8573) {
      expName.style.width = '86.5%'
    }
    if (exp === 8574) {
      expName.style.width = '87%'
    }
    if (exp === 8575) {
      expName.style.width = '87.5%'
    }
    if (exp === 8576) {
      expName.style.width = '88%'
    }
    if (exp === 8577) {
      expName.style.width = '88.5%'
    }
    if (exp === 8578) {
      expName.style.width = '89%'
    }
    if (exp === 8579) {
      expName.style.width = '89.5%'
    }
    if (exp === 8580) {
      expName.style.width = '90%'
    }
    if (exp === 8581) {
      expName.style.width = '90.5%'
    }
    if (exp === 8582) {
      expName.style.width = '91%'
    }
    if (exp === 8583) {
      expName.style.width = '91.5%'
    }
    if (exp === 8584) {
      expName.style.width = '92%'
    }
    if (exp === 8585) {
      expName.style.width = '92.5%'
    }
    if (exp === 8586) {
      expName.style.width = '93%'
    }
    if (exp === 8587) {
      expName.style.width = '93.5%'
    }
    if (exp === 8588) {
      expName.style.width = '94%'
    }
    if (exp === 8589) {
      expName.style.width = '94.5%'
    }
    if (exp === 8590) {
      expName.style.width = '95%'
    }
    if (exp === 8591) {
      expName.style.width = '95.5%'
    }
    if (exp === 8592) {
      expName.style.width = '96%'
    }
    if (exp === 8593) {
      expName.style.width = '96.5%'
    }
    if (exp === 8594) {
      expName.style.width = '97%'
    }
    if (exp === 8595) {
      expName.style.width = '97.5%'
    }
    if (exp === 8596) {
      expName.style.width = '98%'
    }
    if (exp === 8597) {
      expName.style.width = '98.5%'
    }
    if (exp === 8598) {
      expName.style.width = '99%'
    }
    if (exp === 8599) {
      expName.style.width = '99.5%'
    }
    if (exp === 8600) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 8601 && exp <= 8800)
    {
      expName = expFour;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 8601) {
      expName.style.width = '0.5%'
    }
   if (exp === 8602) {
      expName.style.width = '1%'
    }
   if (exp === 8603) {
      expName.style.width = '1.5%'
    }
   if (exp === 8604) {
      expName.style.width = '2%'
    }
   if (exp === 8605) {
      expName.style.width = '2.5%'
    }
   if (exp === 8606) {
      expName.style.width = '3%'
   }
   if (exp === 8607) {
      expName.style.width = '3.5%'
   }
   if (exp === 8608) {
      expName.style.width = '4%'
    } 
   if (exp === 8609) {
      expName.style.width = '4.5%'
    } 
   if (exp === 8610) {
      expName.style.width = '5%'
    } 
   if (exp === 8611) {
      expName.style.width = '5.5%'
    } 
   if (exp === 8612) {
      expName.style.width = '6%'
    } 
   if (exp === 8613) {
      expName.style.width = '6.5%'
    } 
   if (exp === 8614) {
      expName.style.width = '7%'
    } 
   if (exp === 8615) {
      expName.style.width = '7.5%'
    } 
   if (exp === 8616) {
      expName.style.width = '8%'
  } 
   if (exp === 8617) {
      expName.style.width = '8.5%'
   } 
   if (exp === 8618) {
      expName.style.width = '9%'
    } 
   if (exp === 8619) {
      expName.style.width = '9.5%'
    }
   if (exp === 8620) {
      expName.style.width = '10%'
    }
   if (exp === 8621) {
     expName.style.width = '10.5%'
    }
   if (exp === 8622) {
     expName.style.width = '11%'
    }
   if (exp === 8623) {
     expName.style.width = '11.5%'
    }
   if (exp === 8624) {
     expName.style.width = '12%'
    }
   if (exp === 8625) {
     expName.style.width = '12.5%'
    }
   if (exp === 8626) {
     expName.style.width = '13%'
    }
   if (exp === 8627) {
     expName.style.width = '13.5%'
   }
   if (exp === 8628) {
     expName.style.width = '14%'
   }
   if (exp === 8629) {
     expName.style.width = '14.5%'
    } 
   if (exp === 8630) {
     expName.style.width = '15%'
    } 
   if (exp === 8631) {
     expName.style.width = '15.5%'
    } 
   if (exp === 8632) {
     expName.style.width = '16%'
    } 
   if (exp === 8633) {
      expName.style.width = '16.5%'
    } 
   if (exp === 8634) {
      expName.style.width = '17%'
    } 
   if (exp === 8635) {
      expName.style.width = '17.5%'
    } 
   if (exp === 8636) {
      expName.style.width = '18%'
    } 
   if (exp === 8637) {
      expName.style.width = '18.5%'
    } 
   if (exp === 8638) {
      expName.style.width = '19%'
    } 
   if (exp === 8639) {
      expName.style.width = '19.5%'
   }
   if (exp === 8640) {
      expName.style.width = '20%'
    }
   if (exp === 8641) {
      expName.style.width = '20.5%'
    }
   if (exp === 8642) {
      expName.style.width = '21%'
    }
   if (exp === 8643) {
      expName.style.width = '21.5%'
    }
   if (exp === 8644) {
      expName.style.width = '22%'
    }
   if (exp === 8645) {
      expName.style.width = '22.5%'
    }
   if (exp === 8646) {
      expName.style.width = '23%'
    }
   if (exp === 8647) {
      expName.style.width = '23.5%'
    }
   if (exp === 8648) {
      expName.style.width = '24%'
    }
   if (exp === 8649) {
      expName.style.width = '24.5%'
    }
   if (exp === 8650) {
      expName.style.width = '25%'
  }
   if (exp === 8651) {
      expName.style.width = '25.5%'
    }
   if (exp === 8652) {
      expName.style.width = '26%'
    }
   if (exp === 8653) {
      expName.style.width = '26.5%'
    }
   if (exp === 8654) {
      expName.style.width = '27%'
    }
   if (exp === 8655) {
      expName.style.width = '27.5%'
    }
    if (exp === 8656) {
      expName.style.width = '28%'
    }
    if (exp === 8657) {
      expName.style.width = '28.5%'
    }
    if (exp === 8658) {
      expName.style.width = '29%'
    }
    if (exp === 8659) {
      expName.style.width = '29.5%'
    }
    if (exp === 8660) {
      expName.style.width = '30%'
    }
    if (exp === 8661) {
      expName.style.width = '30.5%'
  }
    if (exp === 8662) {
      expName.style.width = '31%'
    }
    if (exp === 8663) {
      expName.style.width = '31.5%'
    }
    if (exp === 8664) {
      expName.style.width = '32%'
    }
    if (exp === 8665) {
      expName.style.width = '32.5%'
    }
    if (exp === 8666) {
      expName.style.width = '33%'
    }
    if (exp === 8667) {
      expName.style.width = '33.5%'
    }
    if (exp === 8668) {
      expName.style.width = '34%'
    }
    if (exp === 8669) {
      expName.style.width = '34.5%'
    }
    if (exp === 8670) {
      expName.style.width = '35%'
    }
    if (exp === 8671) {
      expName.style.width = '35.5%'
    }
    if (exp === 8672) {
      expName.style.width = '36%'
      }
    if (exp === 8673) {
      expName.style.width = '36.5%'
    }
    if (exp === 8674) {
      expName.style.width = '37%'
    }
    if (exp === 8675) {
      expName.style.width = '37.5%'
    }
    if (exp === 8676) {
      expName.style.width = '38%'
    }
    if (exp === 8677) {
      expName.style.width = '38.5%'
    }
    if (exp === 8678) {
      expName.style.width = '39%'
    }
    if (exp === 8679) {
      expName.style.width = '39.5%'
    }
    if (exp === 8680) {
      expName.style.width = '40%'
    }
    if (exp === 8681) {
      expName.style.width = '40.5%'
    }
    if (exp === 8682) {
      expName.style.width = '41%'
    }
    if (exp === 8683) {
      expName.style.width = '41.5%'
  }
    if (exp === 8684) {
      expName.style.width = '42%'
    }
    if (exp === 8685) {
      expName.style.width = '42.5%'
    }
    if (exp === 8686) {
      expName.style.width = '43%'
    }
    if (exp === 8687) {
      expName.style.width = '43.5%'
    }
    if (exp === 8688) {
      expName.style.width = '44%'
    }
    if (exp === 8689) {
      expName.style.width = '44.5%'
    }
    if (exp === 8690) {
      expName.style.width = '45%'
    }
    if (exp === 8691) {
      expName.style.width = '45.5%'
    }
    if (exp === 8692) {
      expName.style.width = '46%'
    }
    if (exp === 8693) {
      expName.style.width = '46.5%'
    }
    if (exp === 8694) {
      expName.style.width = '47%'
    }
    if (exp === 8695) {
      expName.style.width = '47.5%'
    }
    if (exp === 8696) {
      expName.style.width = '48%'
    }
    if (exp === 8697) {
      expName.style.width = '48.5%'
    }
    if (exp === 8698) {
      expName.style.width = '49%'
    }
    if (exp === 8699) {
      expName.style.width = '49.5%'
    }
    if (exp === 8700) {
      expName.style.width = '50%'
    }
   if (exp === 8701) {
      expName.style.width = '50.5%'
    }
   if (exp === 8702) {
      expName.style.width = '51%'
    }
   if (exp === 8703) {
      expName.style.width = '51.5%'
   }
   if (exp === 8704) {
      expName.style.width = '52%'
    }
   if (exp === 8705) {
      expName.style.width = '52.5%'
    }
   if (exp === 8706) {
      expName.style.width = '53%'
    }
   if (exp === 8707) {
      expName.style.width = '53.5%'
   }
   if (exp === 8708) {
      expName.style.width = '54%'
    } 
   if (exp === 8709) {
      expName.style.width = '54.5%'
    } 
   if (exp === 8710) {
      expName.style.width = '55%'
    } 
   if (exp === 8711) {
      expName.style.width = '55.5%'
    } 
   if (exp === 8712) {
      expName.style.width = '56%'
    } 
   if (exp === 8713) {
      expName.style.width = '56.5%'
    } 
   if (exp === 8714) {
      expName.style.width = '57%'
    } 
   if (exp === 8715) {
      expName.style.width = '57.5%'
    } 
   if (exp === 8716) {
      expName.style.width = '58%'
    } 
   if (exp === 8717) {
      expName.style.width = '58.5%'
    } 
   if (exp === 8718) {
      expName.style.width = '59%'
    } 
   if (exp === 8719) {
      expName.style.width = '59.5%'
    }
   if (exp === 8710) {
      expName.style.width = '60%'
    }
   if (exp === 8721) {
     expName.style.width = '60.5%'
    }
   if (exp === 8722) {
     expName.style.width = '61%'
    }
   if (exp === 8723) {
     expName.style.width = '61.5%'
    }
   if (exp === 8724) {
     expName.style.width = '62%'
    }
   if (exp === 8725) {
     expName.style.width = '62.5%'
    }
   if (exp === 8726) {
     expName.style.width = '63%'
    }
   if (exp === 8727) {
     expName.style.width = '63.5%'
   }
   if (exp === 8728) {
     expName.style.width = '64%'
    } 
   if (exp === 8729) {
     expName.style.width = '64.5%'
    } 
   if (exp === 8730) {
     expName.style.width = '65%'
    } 
   if (exp === 8731) {
     expName.style.width = '65.5%'
    } 
   if (exp === 8732) {
     expName.style.width = '66%'
    } 
   if (exp === 8733) {
      expName.style.width = '66.5%'
    } 
   if (exp === 8734) {
      expName.style.width = '67%'
    } 
   if (exp === 8735) {
      expName.style.width = '67.5%'
    } 
   if (exp === 8736) {
      expName.style.width = '68%'
    } 
   if (exp === 8737) {
      expName.style.width = '68.5%'
    } 
   if (exp === 8738) {
      expName.style.width = '69%'
    } 
   if (exp === 8739) {
      expName.style.width = '69.5%'
    }
   if (exp === 8740) {
      expName.style.width = '70%'
    }
   if (exp === 8741) {
      expName.style.width = '70.5%'
    }
   if (exp === 8742) {
      expName.style.width = '71%'
    }
   if (exp === 8743) {
      expName.style.width = '71.5%'
    }
   if (exp === 8744) {
      expName.style.width = '72%'
    }
   if (exp === 8745) {
      expName.style.width = '72.5%'
    }
   if (exp === 8746) {
      expName.style.width = '73%'
    }
   if (exp === 8747) {
      expName.style.width = '73.5%'
    }
   if (exp === 8748) {
      expName.style.width = '74%'
    }
   if (exp === 8749) {
      expName.style.width = '74.5%'
    }
   if (exp === 8750) {
      expName.style.width = '75%'
    }
   if (exp === 8751) {
      expName.style.width = '75.5%'
    }
   if (exp === 8752) {
      expName.style.width = '76%'
    }
   if (exp === 8753) {
      expName.style.width = '76.5%'
    }
   if (exp === 8754) {
      expName.style.width = '77%'
    }
   if (exp === 8755) {
      expName.style.width = '77.5%'
    }
    if (exp === 8756) {
      expName.style.width = '78%'
    }
    if (exp === 8757) {
      expName.style.width = '78.5%'
    }
    if (exp === 8758) {
      expName.style.width = '79%'
    }
    if (exp === 8759) {
      expName.style.width = '79.5%'
    }
    if (exp === 8760) {
      expName.style.width = '80%'
    }
    if (exp === 8761) {
      exppName.style.width = '80.5%'
    }
    if (exp === 8762) {
      expName.style.width = '81%'
    }
    if (exp === 8763) {
      expName.style.width = '81.5%'
    }
    if (exp === 8764) {
      expName.style.width = '82%'
    }
    if (exp === 8765) {
      expName.style.width = '82.5%'
    }
    if (exp === 8766) {
      expName.style.width = '83%'
    }
    if (exp === 8767) {
      expName.style.width = '83.5%'
    }
    if (exp === 8768) {
      expName.style.width = '84%'
    }
    if (exp === 8769) {
      expName.style.width = '84.5%'
    }
    if (exp === 8770) {
      expName.style.width = '85%'
    }
    if (exp === 8771) {
      expName.style.width = '85.5%'
    }
    if (exp === 8772) {
      expName.style.width = '86%'
    }
    if (exp === 8773) {
      expName.style.width = '86.5%'
    }
    if (exp === 8774) {
      expName.style.width = '87%'
    }
    if (exp === 8775) {
      expName.style.width = '87.5%'
    }
    if (exp === 8776) {
      expName.style.width = '88%'
    }
    if (exp === 8777) {
      expName.style.width = '88.5%'
    }
    if (exp === 8778) {
      expName.style.width = '89%'
    }
    if (exp === 8779) {
      expName.style.width = '89.5%'
    }
    if (exp === 8780) {
      expName.style.width = '90%'
    }
    if (exp === 8781) {
      expName.style.width = '90.5%'
    }
    if (exp === 8782) {
      expName.style.width = '91%'
    }
    if (exp === 8783) {
      expName.style.width = '91.5%'
    }
    if (exp === 8784) {
      expName.style.width = '92%'
    }
    if (exp === 8785) {
      expName.style.width = '92.5%'
    }
    if (exp === 8786) {
      expName.style.width = '93%'
    }
    if (exp === 8787) {
      expName.style.width = '93.5%'
    }
    if (exp === 8788) {
      expName.style.width = '94%'
    }
    if (exp === 8789) {
      expName.style.width = '94.5%'
    }
    if (exp === 8790) {
      expName.style.width = '95%'
    }
    if (exp === 8791) {
      expName.style.width = '95.5%'
    }
    if (exp === 8792) {
      expName.style.width = '96%'
    }
    if (exp === 8793) {
      expName.style.width = '96.5%'
    }
    if (exp === 8794) {
      expName.style.width = '97%'
    }
    if (exp === 8795) {
      expName.style.width = '97.5%'
    }
    if (exp === 8796) {
      expName.style.width = '98%'
    }
    if (exp === 8797) {
      expName.style.width = '98.5%'
    }
    if (exp === 8798) {
      expName.style.width = '99%'
    }
    if (exp === 8799) {
      expName.style.width = '99.5%'
    }
    if (exp === 8800) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 8801 && exp <= 9000) 
    {
      expName = expFive;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 8801) {
      expName.style.width = '0.5%'
    }
   if (exp === 8802) {
      expName.style.width = '1%'
    }
   if (exp === 8803) {
      expName.style.width = '1.5%'
    }
   if (exp === 8804) {
      expName.style.width = '2%'
    }
   if (exp === 8805) {
      expName.style.width = '2.5%'
    }
   if (exp === 8806) {
      expName.style.width = '3%'
   }
   if (exp === 8807) {
      expName.style.width = '3.5%'
   }
   if (exp === 8808) {
      expName.style.width = '4%'
    } 
   if (exp === 8809) {
      expName.style.width = '4.5%'
    } 
   if (exp === 8810) {
      expName.style.width = '5%'
    } 
   if (exp === 8811) {
      expName.style.width = '5.5%'
    } 
   if (exp === 8812) {
      expName.style.width = '6%'
    } 
   if (exp === 8813) {
      expName.style.width = '6.5%'
    } 
   if (exp === 8814) {
      expName.style.width = '7%'
    } 
   if (exp === 8815) {
      expName.style.width = '7.5%'
    } 
   if (exp === 8816) {
      expName.style.width = '8%'
    } 
   if (exp === 8817) {
      expName.style.width = '8.5%'
   } 
   if (exp === 8818) {
      expName.style.width = '9%'
    } 
   if (exp === 8819) {
      expName.style.width = '9.5%'
    }
   if (exp === 8820) {
      expName.style.width = '10%'
    }
   if (exp === 8821) {
     expName.style.width = '10.5%'
    }
   if (exp === 8822) {
     expName.style.width = '11%'
    }
   if (exp === 8823) {
     expName.style.width = '11.5%'
    }
   if (exp === 8824) {
     expName.style.width = '12%'
    }
   if (exp === 8825) {
     expName.style.width = '12.5%'
    }
   if (exp === 8826) {
     expName.style.width = '13%'
    }
   if (exp === 8827) {
     expName.style.width = '13.5%'
   }
   if (exp === 8828) {
     expName.style.width = '14%'
   }
   if (exp === 8829) {
     expName.style.width = '14.5%'
    } 
   if (exp === 8830) {
     expName.style.width = '15%'
    } 
   if (exp === 8831) {
     expName.style.width = '15.5%'
    } 
   if (exp === 8832) {
     expName.style.width = '16%'
    } 
   if (exp === 8833) {
      expName.style.width = '16.5%'
    } 
   if (exp === 8834) {
      expName.style.width = '17%'
    } 
   if (exp === 8835) {
      expName.style.width = '17.5%'
    } 
   if (exp === 8836) {
      expName.style.width = '18%'
    } 
   if (exp === 8837) {
      expName.style.width = '18.5%'
    } 
   if (exp === 8838) {
      expName.style.width = '19%'
    } 
   if (exp === 8839) {
      expName.style.width = '19.5%'
   }
   if (exp === 8840) {
      expName.style.width = '20%'
    }
   if (exp === 8841) {
      expName.style.width = '20.5%'
    }
   if (exp === 8842) {
      expName.style.width = '21%'
    }
   if (exp === 8843) {
      expName.style.width = '21.5%'
    }
   if (exp === 8844) {
      expName.style.width = '22%'
    }
   if (exp === 8845) {
      expName.style.width = '22.5%'
    }
   if (exp === 8846) {
      expName.style.width = '23%'
    }
   if (exp === 8847) {
      expName.style.width = '23.5%'
    }
   if (exp === 8848) {
      expName.style.width = '24%'
    }
   if (exp === 8849) {
      expName.style.width = '24.5%'
    }
   if (exp === 8850) {
      expName.style.width = '25%'
  }
   if (exp === 8851) {
      expName.style.width = '25.5%'
    }
   if (exp === 8852) {
      expName.style.width = '26%'
    }
   if (exp === 8853) {
      expName.style.width = '26.5%'
    }
   if (exp === 8854) {
      expName.style.width = '27%'
    }
   if (exp === 8855) {
      expName.style.width = '27.5%'
    }
    if (exp === 8856) {
      expName.style.width = '28%'
    }
    if (exp === 8857) {
      expName.style.width = '28.5%'
    }
    if (exp === 8858) {
      expName.style.width = '29%'
    }
    if (exp === 8859) {
      expName.style.width = '29.5%'
    }
    if (exp === 8860) {
      expName.style.width = '30%'
    }
    if (exp === 8861) {
      expName.style.width = '30.5%'
  }
    if (exp === 8862) {
      expName.style.width = '31%'
    }
    if (exp === 8863) {
      expName.style.width = '31.5%'
    }
    if (exp === 8864) {
      expName.style.width = '32%'
    }
    if (exp === 8865) {
      expName.style.width = '32.5%'
    }
    if (exp === 8866) {
      expName.style.width = '33%'
    }
    if (exp === 8867) {
      expName.style.width = '33.5%'
    }
    if (exp === 8868) {
      expName.style.width = '34%'
    }
    if (exp === 8869) {
      expName.style.width = '34.5%'
    }
    if (exp === 8870) {
      expName.style.width = '35%'
    }
    if (exp === 8871) {
      expName.style.width = '35.5%'
    }
    if (exp === 8872) {
      expName.style.width = '36%'
    }
    if (exp === 8873) {
      expName.style.width = '36.5%'
    }
    if (exp === 8874) {
      expName.style.width = '37%'
    }
    if (exp === 8875) {
      expName.style.width = '37.5%'
    }
    if (exp === 8876) {
      expName.style.width = '38%'
    }
    if (exp === 8877) {
      expName.style.width = '38.5%'
    }
    if (exp === 8878) {
      expName.style.width = '39%'
    }
    if (exp === 8879) {
      expName.style.width = '39.5%'
    }
    if (exp === 8880) {
      expName.style.width = '40%'
    }
    if (exp === 8881) {
      expName.style.width = '40.5%'
    }
    if (exp === 8882) {
      expName.style.width = '41%'
    }
    if (exp === 8883) {
      expName.style.width = '41.5%'
    }
    if (exp === 8884) {
      expName.style.width = '42%'
    }
    if (exp === 8885) {
      expName.style.width = '42.5%'
    }
    if (exp === 8886) {
      expName.style.width = '43%'
    }
    if (exp === 8887) {
      expName.style.width = '43.5%'
    }
    if (exp === 8888) {
      expName.style.width = '44%'
    }
    if (exp === 8889) {
      expName.style.width = '44.5%'
    }
    if (exp === 8890) {
      expName.style.width = '45%'
    }
    if (exp === 8891) {
      expName.style.width = '45.5%'
    }
    if (exp === 8892) {
      expName.style.width = '46%'
    }
    if (exp === 8893) {
      expName.style.width = '46.5%'
    }
    if (exp === 8894) {
      expName.style.width = '47%'
    }
    if (exp === 8895) {
      expName.style.width = '47.5%'
    }
    if (exp === 8896) {
      expName.style.width = '48%'
    }
    if (exp === 8897) {
      expName.style.width = '48.5%'
    }
    if (exp === 8898) {
      expName.style.width = '49%'
    }
    if (exp === 8899) {
      expName.style.width = '49.5%'
    }
    if (exp === 8900) {
      expName.style.width = '50%'
    }
   if (exp === 8901) {
      expName.style.width = '50.5%'
    }
   if (exp === 8902) {
      expName.style.width = '51%'
    }
   if (exp === 8903) {
      expName.style.width = '51.5%'
  }
   if (exp === 8904) {
      expName.style.width = '52%'
    }
   if (exp === 8905) {
      expName.style.width = '52.5%'
    }
   if (exp === 8906) {
      expName.style.width = '53%'
    }
   if (exp === 8907) {
      expName.style.width = '53.5%'
   }
   if (exp === 8908) {
      expName.style.width = '54%'
    } 
   if (exp === 8909) {
      expName.style.width = '54.5%'
    } 
   if (exp === 8910) {
      expName.style.width = '55%'
    } 
   if (exp === 8911) {
      expName.style.width = '55.5%'
    } 
   if (exp === 8912) {
      expName.style.width = '56%'
    } 
   if (exp === 8913) {
      expName.style.width = '56.5%'
    } 
   if (exp === 8914) {
      expName.style.width = '57%'
    } 
   if (exp === 8915) {
      expName.style.width = '57.5%'
    } 
   if (exp === 8916) {
      expName.style.width = '58%'
    } 
   if (exp === 8917) {
      expName.style.width = '58.5%'
    } 
   if (exp === 8918) {
      expName.style.width = '59%'
    } 
   if (exp === 8919) {
      expName.style.width = '59.5%'
    }
   if (exp === 8920) {
      expName.style.width = '60%'
    }
   if (exp === 8921) {
     expName.style.width = '60.5%'
    }
   if (exp === 8922) {
     expName.style.width = '61%'
    }
   if (exp === 8923) {
     expName.style.width = '61.5%'
    }
   if (exp === 8924) {
     expName.style.width = '62%'
    }
   if (exp === 8925) {
     expName.style.width = '62.5%'
    }
   if (exp === 8926) {
     expName.style.width = '63%'
    }
   if (exp === 8927) {
     expName.style.width = '63.5%'
   }
   if (exp === 8928) {
     expName.style.width = '64%'
    } 
   if (exp === 8929) {
     expName.style.width = '64.5%'
    } 
   if (exp === 8930) {
     expName.style.width = '65%'
    } 
   if (exp === 8931) {
     expName.style.width = '65.5%'
    } 
   if (exp === 8932) {
     expName.style.width = '66%'
    } 
   if (exp === 8933) {
      expName.style.width = '66.5%'
    } 
   if (exp === 8934) {
      expName.style.width = '67%'
    } 
   if (exp === 8935) {
      expName.style.width = '67.5%'
    } 
   if (exp === 8936) {
      expName.style.width = '68%'
    } 
   if (exp === 8937) {
      expName.style.width = '68.5%'
    } 
   if (exp === 8938) {
      expName.style.width = '69%'
    } 
   if (exp === 8939) {
      expName.style.width = '69.5%'
    }
   if (exp === 8940) {
      expName.style.width = '70%'
    }
   if (exp === 8941) {
      expName.style.width = '70.5%'
    }
   if (exp === 8942) {
      expName.style.width = '71%'
    }
   if (exp === 8943) {
      expName.style.width = '71.5%'
    }
   if (exp === 8944) {
      expName.style.width = '72%'
    }
   if (exp === 8945) {
      expName.style.width = '72.5%'
    }
   if (exp === 8946) {
      expName.style.width = '73%'
    }
   if (exp === 8947) {
      expName.style.width = '73.5%'
    }
   if (exp === 8948) {
      expName.style.width = '74%'
    }
   if (exp === 8949) {
      expName.style.width = '74.5%'
    }
   if (exp === 8950) {
      expName.style.width = '75%'
    }
   if (exp === 8951) {
      expName.style.width = '75.5%'
    }
   if (exp === 8952) {
      expName.style.width = '76%'
    }
   if (exp === 8953) {
      expName.style.width = '76.5%'
    }
   if (exp === 8954) {
      expName.style.width = '77%'
    }
   if (exp === 8955) {
      expName.style.width = '77.5%'
    }
    if (exp === 8956) {
      expName.style.width = '78%'
    }
    if (exp === 8957) {
      expName.style.width = '78.5%'
    }
    if (exp === 8958) {
      expName.style.width = '79%'
    }
    if (exp === 8959) {
      expName.style.width = '79.5%'
    }
    if (exp === 8960) {
      expName.style.width = '80%'
    }
    if (exp === 8961) {
      exppName.style.width = '80.5%'
    }
    if (exp === 8962) {
      expName.style.width = '81%'
    }
    if (exp === 8963) {
      expName.style.width = '81.5%'
    }
    if (exp === 8964) {
      expName.style.width = '82%'
    }
    if (exp === 8965) {
      expName.style.width = '82.5%'
    }
    if (exp === 8966) {
      expName.style.width = '83%'
    }
    if (exp === 8967) {
      expName.style.width = '83.5%'
    }
    if (exp === 8968) {
      expName.style.width = '84%'
    }
    if (exp === 8969) {
      expName.style.width = '84.5%'
    }
    if (exp === 8970) {
      expName.style.width = '85%'
    }
    if (exp === 8971) {
      expName.style.width = '85.5%'
    }
    if (exp === 8972) {
      expName.style.width = '86%'
    }
    if (exp === 8973) {
      expName.style.width = '86.5%'
    }
    if (exp === 8974) {
      expName.style.width = '87%'
    }
    if (exp === 8975) {
      expName.style.width = '87.5%'
    }
    if (exp === 8976) {
      expName.style.width = '88%'
    }
    if (exp === 8977) {
      expName.style.width = '88.5%'
    }
    if (exp === 8978) {
      expName.style.width = '89%'
    }
    if (exp === 8979) {
      expName.style.width = '89.5%'
    }
    if (exp === 8980) {
      expName.style.width = '90%'
    }
    if (exp === 8981) {
      expName.style.width = '90.5%'
    }
    if (exp === 8982) {
      expName.style.width = '91%'
    }
    if (exp === 8983) {
      expName.style.width = '91.5%'
    }
    if (exp === 8984) {
      expName.style.width = '92%'
    }
    if (exp === 8985) {
      expName.style.width = '92.5%'
    }
    if (exp === 8986) {
      expName.style.width = '93%'
    }
    if (exp === 8987) {
      expName.style.width = '93.5%'
    }
    if (exp === 8988) {
      expName.style.width = '94%'
    }
    if (exp === 8989) {
      expName.style.width = '94.5%'
    }
    if (exp === 8990) {
      expName.style.width = '95%'
    }
    if (exp === 8991) {
      expName.style.width = '95.5%'
    }
    if (exp === 8992) {
      expName.style.width = '96%'
    }
    if (exp === 8993) {
      expName.style.width = '96.5%'
    }
    if (exp === 8994) {
      expName.style.width = '97%'
    }
    if (exp === 8995) {
      expName.style.width = '97.5%'
    }
    if (exp === 8996) {
      expName.style.width = '98%'
    }
    if (exp === 8997) {
      expName.style.width = '98.5%'
    }
    if (exp === 8998) {
      expName.style.width = '99%'
    }
    if (exp === 8999) {
      expName.style.width = '99.5%'
    }
    if (exp === 9000) {
      expName.style.width = '100%'
    }
    }
     
    if (exp === 9000) {
      setTimeout(() => {
        expOne.style.display = 'none'
        expTwo.style.display = 'none'
        expThree.style.display = 'none'
        expFour.style.display = 'none'
        expFive.style.display = 'none'
      }, 500)
      handleExpEleven();
    }
  
    if (exp >= 9000) {
      handleExpEleven();
      levelUpShow();
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
  
      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
      document.querySelector('.the-level').innerHTML = 11;
      
      document.querySelector('.next-level').innerHTML = '10000';
      
      document.querySelector('.level-title').innerHTML = 'Novice Lvl 1'
    }
  
    
  } 
}

function handleExpEleven() {
  let expName = expOne;
  if (playerLevel === 11) {
     
    if (exp >= 9001 && exp <= 9200) 
    {
      expOne.style.display = 'block'
      expTwo.style.display = 'none'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 9001) {
      expName.style.width = '0.5%'
    }
   if (exp === 9002) {
      expName.style.width = '1%'
    }
   if (exp === 9003) {
      expName.style.width = '1.5%'
    }
   if (exp === 9004) {
      expName.style.width = '2%'
    }
   if (exp === 9005) {
      expName.style.width = '2.5%'
    }
   if (exp === 9006) {
      expName.style.width = '3%'
    }
   if (exp === 9007) {
      expName.style.width = '3.5%'
   }
   if (exp === 9008) {
      expName.style.width = '4%'
    } 
   if (exp === 9009) {
      expName.style.width = '4.5%'
    } 
   if (exp === 9010) {
      expName.style.width = '5%'
    } 
   if (exp === 9011) {
      expName.style.width = '5.5%'
    } 
   if (exp === 9012) {
      expName.style.width = '6%'
    } 
   if (exp === 9013) {
      expName.style.width = '6.5%'
    } 
   if (exp === 9014) {
      expName.style.width = '7%'
    } 
   if (exp === 9015) {
      expName.style.width = '7.5%'
    } 
   if (exp === 9016) {
      expName.style.width = '8%'
    } 
   if (exp === 9017) {
      expName.style.width = '8.5%'
    } 
   if (exp === 9018) {
      expName.style.width = '9%'
    } 
   if (exp === 9019) {
      expName.style.width = '9.5%'
    }
   if (exp === 9020) {
      expName.style.width = '10%'
    }
   if (exp === 9021) {
     expName.style.width = '10.5%'
    }
   if (exp === 9022) {
     expName.style.width = '11%'
    }
   if (exp === 9023) {
     expName.style.width = '11.5%'
    }
   if (exp === 9024) {
     expName.style.width = '12%'
    }
   if (exp === 9025) {
     expName.style.width = '12.5%'
    }
   if (exp === 9026) {
     expName.style.width = '13%'
    }
   if (exp === 9027) {
     expName.style.width = '13.5%'
   }
   if (exp === 9028) {
     expName.style.width = '14%'
    } 
   if (exp === 9029) {
     expName.style.width = '14.5%'
    } 
   if (exp === 9030) {
     expName.style.width = '15%'
    } 
   if (exp === 9031) {
     expName.style.width = '15.5%'
    } 
   if (exp === 9032) {
     expName.style.width = '16%'
    } 
   if (exp === 9033) {
      expName.style.width = '16.5%'
    } 
   if (exp === 9034) {
      expName.style.width = '17%'
    } 
   if (exp === 9035) {
      expName.style.width = '17.5%'
    } 
   if (exp === 9036) {
      expName.style.width = '18%'
    } 
   if (exp === 9037) {
      expName.style.width = '18.5%'
    } 
   if (exp === 9038) {
      expName.style.width = '19%'
    } 
   if (exp === 9039) {
      expName.style.width = '19.5%'
    }
   if (exp === 9040) {
      expName.style.width = '20%'
    }
   if (exp === 9041) {
      expName.style.width = '20.5%'
    }
   if (exp === 9042) {
      expName.style.width = '21%'
    }
   if (exp === 9043) {
      expName.style.width = '21.5%'
    }
   if (exp === 9044) {
      expName.style.width = '22%'
    }
   if (exp === 9045) {
      expName.style.width = '22.5%'
    }
   if (exp === 9046) {
      expName.style.width = '23%'
    }
   if (exp === 9047) {
      expName.style.width = '23.5%'
    }
   if (exp === 9048) {
      expName.style.width = '24%'
    }
   if (exp === 9049) {
      expName.style.width = '24.5%'
    }
   if (exp === 9050) {
      expName.style.width = '25%'
    }
   if (exp === 9051) {
      expName.style.width = '25.5%'
    }
   if (exp === 9052) {
      expName.style.width = '26%'
    }
   if (exp === 9053) {
      expName.style.width = '26.5%'
    }
   if (exp === 9054) {
      expName.style.width = '27%'
    }
   if (exp === 9055) {
      expName.style.width = '27.5%'
    }
    if (exp === 9056) {
      expName.style.width = '28%'
    }
    if (exp === 9057) {
      expName.style.width = '28.5%'
    }
    if (exp === 9058) {
      expName.style.width = '29%'
    }
    if (exp === 9059) {
      expName.style.width = '29.5%'
    }
    if (exp === 9060) {
      expName.style.width = '30%'
    }
    if (exp === 9061) {
      expName.style.width = '30.5%'
    }
    if (exp === 9062) {
      expName.style.width = '31%'
    }
    if (exp === 9063) {
      expName.style.width = '31.5%'
    }
    if (exp === 9064) {
      expName.style.width = '32%'
    }
    if (exp === 9065) {
      expName.style.width = '32.5%'
    }
    if (exp === 9066) {
      expName.style.width = '33%'
    }
    if (exp === 9067) {
      expName.style.width = '33.5%'
    }
    if (exp === 9068) {
      expName.style.width = '34%'
    }
    if (exp === 9069) {
      expName.style.width = '34.5%'
    }
    if (exp === 9070) {
      expName.style.width = '35%'
    }
    if (exp === 9071) {
      expName.style.width = '35.5%'
    }
    if (exp === 9072) {
      expName.style.width = '36%'
    }
    if (exp === 9073) {
      expName.style.width = '36.5%'
    }
    if (exp === 9074) {
      expName.style.width = '37%'
    }
    if (exp === 9075) {
      expName.style.width = '37.5%'
    }
    if (exp === 9076) {
      expName.style.width = '38%'
    }
    if (exp === 9077) {
      expName.style.width = '38.5%'
    }
    if (exp === 9078) {
      expName.style.width = '39%'
    }
    if (exp === 9079) {
      expName.style.width = '39.5%'
    }
    if (exp === 9080) {
      expName.style.width = '40%'
    }
    if (exp === 9081) {
      expName.style.width = '40.5%'
    }
    if (exp === 9082) {
      expName.style.width = '41%'
    }
    if (exp === 9083) {
      expName.style.width = '41.5%'
    }
    if (exp === 9084) {
      expName.style.width = '42%'
    }
    if (exp === 9085) {
      expName.style.width = '42.5%'
    }
    if (exp === 9086) {
      expName.style.width = '43%'
    }
    if (exp === 9087) {
      expName.style.width = '43.5%'
    }
    if (exp === 9088) {
      expName.style.width = '44%'
    }
    if (exp === 9089) {
      expName.style.width = '44.5%'
    }
    if (exp === 9090) {
      expName.style.width = '45%'
    }
    if (exp === 9091) {
      expName.style.width = '45.5%'
    }
    if (exp === 9092) {
      expName.style.width = '46%'
    }
    if (exp === 9093) {
      expName.style.width = '46.5%'
    }
    if (exp === 9094) {
      expName.style.width = '47%'
    }
    if (exp === 9095) {
      expName.stye.width = '47.5%'
    }
    if (exp === 9096) {
      expName.style.width = '48%'
    }
    if (exp === 9097) {
      expName.style.width = '48.5%'
    }
    if (exp === 9098) {
      expName.style.width = '49%'
    }
    if (exp === 9099) {
      expName.style.width = '49.5%'
    }
    if (exp === 9100) {
      expName.style.width = '50%'
    }
   if (exp === 9601) {
      expName.style.width = '50.5%'
    }
   if (exp === 9602) {
      expName.style.width = '51%'
    }
   if (exp === 9103) {
      expName.style.width = '51.5%'
    }
   if (exp === 9104) {
      expName.style.width = '52%'
    }
   if (exp === 9105) {
      expName.style.width = '52.5%'
    }
   if (exp === 9106) {
      expName.style.width = '53%'
    }
   if (exp === 9107) {
      expName.style.width = '53.5%'
   }
   if (exp === 9108) {
      expName.style.width = '54%'
    } 
   if (exp === 9109) {
      expName.style.width = '54.5%'
    } 
   if (exp === 9110) {
      expName.style.width = '55%'
    } 
   if (exp === 9111) {
      expName.style.width = '55.5%'
    } 
   if (exp === 9112) {
      expName.style.width = '56%'
    } 
   if (exp === 9113) {
      expName.style.width = '56.5%'
    } 
   if (exp === 9114) {
      expName.style.width = '57%'
    } 
   if (exp === 9115) {
      expName.style.width = '57.5%'
    } 
   if (exp === 9116) {
      expName.style.width = '58%'
    } 
   if (exp === 9117) {
      expName.style.width = '58.5%'
    } 
   if (exp === 9118) {
      expName.style.width = '59%'
    } 
   if (exp === 9119) {
      expName.style.width = '59.5%'
    }
   if (exp === 9120) {
      expName.style.width = '60%'
    }
   if (exp === 9121) {
     expName.style.width = '60.5%'
    }
   if (exp === 9122) {
     expName.style.width = '61%'
    }
   if (exp === 9123) {
     expName.style.width = '61.5%'
    }
   if (exp === 9124) {
     expName.style.width = '62%'
    }
   if (exp === 9125) {
     expName.style.width = '62.5%'
    }
   if (exp === 9126) {
     expName.style.width = '63%'
    }
   if (exp === 9127) {
     expName.style.width = '63.5%'
   }
   if (exp === 9128) {
     expName.style.width = '64%'
    } 
   if (exp === 9129) {
     expName.style.width = '64.5%'
    } 
   if (exp === 9130) {
     expName.style.width = '65%'
    } 
   if (exp === 9131) {
     expName.style.width = '65.5%'
    } 
   if (exp === 9132) {
     expName.style.width = '66%'
    } 
   if (exp === 9133) {
      expName.style.width = '66.5%'
    } 
   if (exp === 9134) {
      expName.style.width = '67%'
    } 
   if (exp === 9135) {
      expName.style.width = '67.5%'
    } 
   if (exp === 9136) {
      expName.style.width = '68%'
    } 
   if (exp === 9137) {
      expName.style.width = '68.5%'
    } 
   if (exp === 9138) {
      expName.style.width = '69%'
    } 
   if (exp === 9139) {
      expName.style.width = '69.5%'
    }
   if (exp === 9140) {
      expName.style.width = '70%'
    }
   if (exp === 9141) {
      expName.style.width = '70.5%'
    }
   if (exp === 9142) {
      expName.style.width = '71%'
    }
   if (exp === 9143) {
      expName.style.width = '71.5%'
    }
   if (exp === 9144) {
      expName.style.width = '72%'
    }
   if (exp === 9145) {
      expName.style.width = '72.5%'
    }
   if (exp === 9146) {
      expName.style.width = '73%'
    }
   if (exp === 9147) {
      expName.style.width = '73.5%'
    }
   if (exp === 9148) {
      expName.style.width = '74%'
    }
   if (exp === 9149) {
      expName.style.width = '74.5%'
    }
   if (exp === 9150) {
      expName.style.width = '75%'
    }
   if (exp === 9151) {
      expName.style.width = '75.5%'
    }
   if (exp === 9152) {
      expName.style.width = '76%'
    }
   if (exp === 9153) {
      expName.style.width = '76.5%'
    }
   if (exp === 9154) {
      expName.style.width = '77%'
    }
   if (exp === 9155) {
      expName.style.width = '77.5%'
    }
    if (exp === 9156) {
      expName.style.width = '78%'
    }
    if (exp === 9157) {
      expName.style.width = '78.5%'
    }
    if (exp === 9158) {
      expName.style.width = '79%'
    }
    if (exp === 9159) {
      expName.style.width = '79.5%'
    }
    if (exp === 9160) {
      expName.style.width = '80%'
    }
    if (exp === 9161) {
      exppName.style.width = '80.5%'
    }
    if (exp === 9162) {
      expName.style.width = '81%'
    }
    if (exp === 9163) {
      expName.style.width = '81.5%'
    }
    if (exp === 9164) {
      expName.style.width = '82%'
    }
    if (exp === 9165) {
      expName.style.width = '82.5%'
    }
    if (exp === 9166) {
      expName.style.width = '83%'
    }
    if (exp === 9167) {
      expName.style.width = '83.5%'
    }
    if (exp === 9168) {
      expName.style.width = '84%'
    }
    if (exp === 9169) {
      expName.style.width = '84.5%'
    }
    if (exp === 9170) {
      expName.style.width = '85%'
    }
    if (exp === 9171) {
      expName.style.width = '85.5%'
    }
    if (exp === 9172) {
      expName.style.width = '86%'
    }
    if (exp === 9173) {
      expName.style.width = '86.5%'
    }
    if (exp === 9174) {
      expName.style.width = '87%'
    }
    if (exp === 9175) {
      expName.style.width = '87.5%'
    }
    if (exp === 9176) {
      expName.style.width = '88%'
    }
    if (exp === 9177) {
      expName.style.width = '88.5%'
    }
    if (exp === 9178) {
      expName.style.width = '89%'
    }
    if (exp === 9179) {
      expName.style.width = '89.5%'
    }
    if (exp === 9180) {
      expName.style.width = '90%'
    }
    if (exp === 9181) {
      expName.style.width = '90.5%'
    }
    if (exp === 9182) {
      expName.style.width = '91%'
    }
    if (exp === 9183) {
      expName.style.width = '91.5%'
    }
    if (exp === 9184) {
      expName.style.width = '92%'
    }
    if (exp === 9185) {
      expName.style.width = '92.5%'
    }
    if (exp === 9186) {
      expName.style.width = '93%'
    }
    if (exp === 9187) {
      expName.style.width = '93.5%'
    }
    if (exp === 9188) {
      expName.style.width = '94%'
    }
    if (exp === 9189) {
      expName.style.width = '94.5%'
    }
    if (exp === 9190) {
      expName.style.width = '95%'
    }
    if (exp === 9191) {
      expName.style.width = '95.5%'
    }
    if (exp === 9192) {
      expName.style.width = '96%'
    }
    if (exp === 9193) {
      expName.style.width = '96.5%'
    }
    if (exp === 9194) {
      expName.style.width = '97%'
    }
    if (exp === 9195) {
      expName.style.width = '97.5%'
    }
    if (exp === 9196) {
      expName.style.width = '98%'
    }
    if (exp === 9197) {
      expName.style.width = '98.5%'
    }
    if (exp === 9198) {
      expName.style.width = '99%'
    }
    if (exp === 9199) {
      expName.style.width = '99.5%'
    }
    if (exp === 9200) {
      expName.style.width = '100%'
    }
     
    }

    if (exp >= 9201 && exp <= 9400) 
    {
      expName = expTwo;

      expOne.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'none'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 9201) {
      expName.style.width = '0.5%'
    }
   if (exp === 9202) {
      expName.style.width = '1%'
    }
   if (exp === 9203) {
      expName.style.width = '1.5%'
    }
   if (exp === 9204) {
      expName.style.width = '2%'
    }
   if (exp === 9205) {
      expName.style.width = '2.5%'
    }
   if (exp === 9206) {
      expName.style.width = '3%'
    }
   if (exp === 9207) {
      expName.style.width = '3.5%'
   }
   if (exp === 9208) {
      expName.style.width = '4%'
    } 
   if (exp === 9209) {
      expName.style.width = '4.5%'
    } 
   if (exp === 9210) {
      expName.style.width = '5%'
    } 
   if (exp === 9211) {
      expName.style.width = '5.5%'
    } 
   if (exp === 9212) {
      expName.style.width = '6%'
    } 
   if (exp === 9213) {
      expName.style.width = '6.5%'
    } 
   if (exp === 9214) {
      expName.style.width = '7%'
    } 
   if (exp === 9215) {
      expName.style.width = '7.5%'
    } 
   if (exp === 9216) {
      expName.style.width = '8%'
    } 
   if (exp === 9217) {
      expName.style.width = '8.5%'
    } 
   if (exp === 9218) {
      expName.style.width = '9%'
    } 
   if (exp === 9219) {
      expName.style.width = '9.5%'
    }
   if (exp === 9220) {
      expName.style.width = '10%'
    }
   if (exp === 9221) {
     expName.style.width = '10.5%'
    }
   if (exp === 9222) {
     expName.style.width = '11%'
    }
   if (exp === 9223) {
     expName.style.width = '11.5%'
    }
   if (exp === 9224) {
     expName.style.width = '12%'
    }
   if (exp === 9225) {
     expName.style.width = '12.5%'
    }
   if (exp === 9226) {
     expName.style.width = '13%'
    }
   if (exp === 9227) {
     expName.style.width = '13.5%'
   }
   if (exp === 9228) {
     expName.style.width = '14%'
    } 
   if (exp === 9229) {
     expName.style.width = '14.5%'
    } 
   if (exp === 9230) {
     expName.style.width = '15%'
    } 
   if (exp === 9231) {
     expName.style.width = '15.5%'
    } 
   if (exp === 9232) {
     expName.style.width = '16%'
    } 
   if (exp === 9233) {
      expName.style.width = '16.5%'
    } 
   if (exp === 9234) {
      expName.style.width = '17%'
    } 
   if (exp === 9235) {
      expName.style.width = '17.5%'
    } 
   if (exp === 9236) {
      expName.style.width = '18%'
    } 
   if (exp === 9237) {
      expName.style.width = '18.5%'
    } 
   if (exp === 9238) {
      expName.style.width = '19%'
    } 
   if (exp === 9239) {
      expName.style.width = '19.5%'
    }
   if (exp === 9240) {
      expName.style.width = '20%'
    }
   if (exp === 9241) {
      expName.style.width = '20.5%'
    }
   if (exp === 9242) {
      expName.style.width = '21%'
    }
   if (exp === 9243) {
      expName.style.width = '21.5%'
    }
   if (exp === 9244) {
      expName.style.width = '22%'
    }
   if (exp === 9245) {
      expName.style.width = '22.5%'
    }
   if (exp === 9246) {
      expName.style.width = '23%'
    }
   if (exp === 9247) {
      expName.style.width = '23.5%'
    }
   if (exp === 9248) {
      expName.style.width = '24%'
    }
   if (exp === 8249) {
      expName.style.width = '24.5%'
    }
   if (exp === 9250) {
      expName.style.width = '25%'
    }
   if (exp === 9251) {
      expName.style.width = '25.5%'
    }
   if (exp === 9252) {
      expName.style.width = '26%'
    }
   if (exp === 9253) {
      expName.style.width = '26.5%'
    }
   if (exp === 9254) {
      expName.style.width = '27%'
    }
   if (exp === 9255) {
      expName.style.width = '27.5%'
    }
    if (exp === 9256) {
      expName.style.width = '28%'
    }
    if (exp === 9257) {
      expName.style.width = '28.5%'
    }
    if (exp === 9258) {
      expName.style.width = '29%'
    }
    if (exp === 9259) {
      expName.style.width = '29.5%'
    }
    if (exp === 9260) {
      expName.style.width = '30%'
    }
    if (exp === 9261) {
      expName.style.width = '30.5%'
    }
    if (exp === 9262) {
      expName.style.width = '31%'
    }
    if (exp === 9263) {
      expName.style.width = '31.5%'
    }
    if (exp === 9264) {
      expName.style.width = '32%'
    }
    if (exp === 9265) {
      expName.style.width = '32.5%'
    }
    if (exp === 9266) {
      expName.style.width = '33%'
    }
    if (exp === 9267) {
      expName.style.width = '33.5%'
    }
    if (exp === 9268) {
      expName.style.width = '34%'
    }
    if (exp === 9269) {
      expName.style.width = '34.5%'
    }
    if (exp === 9270) {
      expName.style.width = '35%'
    }
    if (exp === 9271) {
      expName.style.width = '35.5%'
    }
    if (exp === 9272) {
      expName.style.width = '36%'
    }
    if (exp === 9273) {
      expName.style.width = '36.5%'
    }
    if (exp === 9274) {
      expName.style.width = '37%'
    }
    if (exp === 9275) {
      expName.style.width = '37.5%'
    }
    if (exp === 9276) {
      expName.style.width = '38%'
    }
    if (exp === 9277) {
      expName.style.width = '38.5%'
    }
    if (exp === 9278) {
      expName.style.width = '39%'
    }
    if (exp === 9279) {
      expName.style.width = '39.5%'
    }
    if (exp === 9280) {
      expName.style.width = '40%'
    }
    if (exp === 9281) {
      expName.style.width = '40.5%'
    }
    if (exp === 9282) {
      expName.style.width = '41%'
    }
    if (exp === 9283) {
      expName.style.width = '41.5%'
    }
    if (exp === 9284) {
      expName.style.width = '42%'
    }
    if (exp === 9285) {
      expName.style.width = '42.5%'
    }
    if (exp === 9286) {
      expName.style.width = '43%'
    }
    if (exp === 9287) {
      expName.style.width = '43.5%'
    }
    if (exp === 9288) {
      expName.style.width = '44%'
    }
    if (exp === 9289) {
      expName.style.width = '44.5%'
    }
    if (exp === 9290) {
      expName.style.width = '45%'
    }
    if (exp === 9291) {
      expName.style.width = '45.5%'
    }
    if (exp === 9292) {
      expName.style.width = '46%'
    }
    if (exp === 9293) {
      expName.style.width = '46.5%'
    }
    if (exp === 9294) {
      expName.style.width = '47%'
    }
    if (exp === 9295) {
      expName.style.width = '47.5%'
    }
    if (exp === 9296) {
      expName.style.width = '48%'
    }
    if (exp === 9297) {
      expName.style.width = '48.5%'
    }
    if (exp === 9298) {
      expName.style.width = '49%'
    }
    if (exp === 9299) {
      expName.style.width = '49.5%'
    }
    if (exp === 9300) {
      expName.style.width = '50%'
    }
   if (exp === 9301) {
      expName.style.width = '50.5%'
    }
   if (exp === 9302) {
      expName.style.width = '51%'
    }
   if (exp === 9303) {
      expName.style.width = '51.5%'
    }
   if (exp === 9304) {
      expName.style.width = '52%'
    }
   if (exp === 9305) {
      expName.style.width = '52.5%'
    }
   if (exp === 9306) {
      expName.style.width = '53%'
    }
   if (exp === 9307) {
      expName.style.width = '53.5%'
   }
   if (exp === 9308) {
      expName.style.width = '54%'
    } 
   if (exp === 9309) {
      expName.style.width = '54.5%'
    } 
   if (exp === 9310) {
      expName.style.width = '55%'
    } 
   if (exp === 9311) {
      expName.style.width = '55.5%'
    } 
   if (exp === 9312) {
      expName.style.width = '56%'
    } 
   if (exp === 9313) {
      expName.style.width = '56.5%'
    } 
   if (exp === 9314) {
      expName.style.width = '57%'
    } 
   if (exp === 9315) {
      expName.style.width = '57.5%'
    } 
   if (exp === 9316) {
      expName.style.width = '58%'
    } 
   if (exp === 9317) {
      expName.style.width = '58.5%'
    } 
   if (exp === 9318) {
      expName.style.width = '59%'
    } 
   if (exp === 9319) {
      expName.style.width = '59.5%'
    }
   if (exp === 9320) {
      expName.style.width = '60%'
    }
   if (exp === 9321) {
     expName.style.width = '60.5%'
    }
   if (exp === 9322) {
     expName.style.width = '61%'
    }
   if (exp === 9323) {
     expName.style.width = '61.5%'
    }
   if (exp === 9324) {
     expName.style.width = '62%'
    }
   if (exp === 9325) {
     expName.style.width = '62.5%'
    }
   if (exp === 9326) {
     expName.style.width = '63%'
    }
   if (exp === 9327) {
     expName.style.width = '63.5%'
   }
   if (exp === 9328) {
     expName.style.width = '64%'
    } 
   if (exp === 9329) {
     expName.style.width = '64.5%'
    } 
   if (exp === 9330) {
     expName.style.width = '65%'
    } 
   if (exp === 9331) {
     expName.style.width = '65.5%'
    } 
   if (exp === 9332) {
     expName.style.width = '66%'
    } 
   if (exp === 9333) {
      expName.style.width = '66.5%'
    } 
   if (exp === 9334) {
      expName.style.width = '67%'
    } 
   if (exp === 9335) {
      expName.style.width = '67.5%'
    } 
   if (exp === 9336) {
      expName.style.width = '68%'
    } 
   if (exp === 9337) {
      expName.style.width = '68.5%'
    } 
   if (exp === 9338) {
      expName.style.width = '69%'
    } 
   if (exp === 9339) {
      expName.style.width = '69.5%'
    }
   if (exp === 9340) {
      expName.style.width = '70%'
    }
   if (exp === 9341) {
      expName.style.width = '70.5%'
    }
   if (exp === 9342) {
      expName.style.width = '71%'
    }
   if (exp === 9343) {
      expName.style.width = '71.5%'
    }
   if (exp === 9344) {
      expName.style.width = '72%'
    }
   if (exp === 9345) {
      expName.style.width = '72.5%'
    }
   if (exp === 9346) {
      expName.style.width = '73%'
    }
   if (exp === 9347) {
      expName.style.width = '73.5%'
    }
   if (exp === 9348) {
      expName.style.width = '74%'
    }
   if (exp === 9349) {
      expName.style.width = '74.5%'
    }
   if (exp === 9350) {
      expName.style.width = '75%'
    }
   if (exp === 9351) {
      expName.style.width = '75.5%'
    }
   if (exp === 9352) {
      expName.style.width = '76%'
    }
   if (exp === 9353) {
      expName.style.width = '76.5%'
    }
   if (exp === 9354) {
      expName.style.width = '77%'
    }
   if (exp === 9355) {
      expName.style.width = '77.5%'
    }
    if (exp === 9356) {
      expName.style.width = '78%'
    }
    if (exp === 9357) {
      expName.style.width = '78.5%'
    }
    if (exp === 9358) {
      expName.style.width = '79%'
    }
    if (exp === 9359) {
      expName.style.width = '79.5%'
    }
    if (exp === 9360) {
      expName.style.width = '80%'
    }
    if (exp === 9361) {
      exppName.style.width = '80.5%'
    }
    if (exp === 9362) {
      expName.style.width = '81%'
    }
    if (exp === 9363) {
      expName.style.width = '81.5%'
    }
    if (exp === 9364) {
      expName.style.width = '82%'
    }
    if (exp === 9365) {
      expName.style.width = '82.5%'
    }
    if (exp === 9366) {
      expName.style.width = '83%'
    }
    if (exp === 9367) {
      expName.style.width = '83.5%'
    }
    if (exp === 9368) {
      expName.style.width = '84%'
    }
    if (exp === 9369) {
      expName.style.width = '84.5%'
    }
    if (exp === 9370) {
      expName.style.width = '85%'
    }
    if (exp === 9371) {
      expName.style.width = '85.5%'
    }
    if (exp === 9372) {
      expName.style.width = '86%'
    }
    if (exp === 9373) {
      expName.style.width = '86.5%'
    }
    if (exp === 9374) {
      expName.style.width = '87%'
    }
    if (exp === 9375) {
      expName.style.width = '87.5%'
    }
    if (exp === 9376) {
      expName.style.width = '88%'
    }
    if (exp === 9377) {
      expName.style.width = '88.5%'
    }
    if (exp === 9378) {
      expName.style.width = '89%'
    }
    if (exp === 9379) {
      expName.style.width = '89.5%'
    }
    if (exp === 9380) {
      expName.style.width = '90%'
    }
    if (exp === 9381) {
      expName.style.width = '90.5%'
    }
    if (exp === 9382) {
      expName.style.width = '91%'
    }
    if (exp === 9383) {
      expName.style.width = '91.5%'
    }
    if (exp === 9384) {
      expName.style.width = '92%'
    }
    if (exp === 9385) {
      expName.style.width = '92.5%'
    }
    if (exp === 9386) {
      expName.style.width = '93%'
    }
    if (exp === 9387) {
      expName.style.width = '93.5%'
    }
    if (exp === 9388) {
      expName.style.width = '94%'
    }
    if (exp === 9389) {
      expName.style.width = '94.5%'
    }
    if (exp === 9390) {
      expName.style.width = '95%'
    }
    if (exp === 9391) {
      expName.style.width = '95.5%'
    }
    if (exp === 9392) {
      expName.style.width = '96%'
    }
    if (exp === 9393) {
      expName.style.width = '96.5%'
    }
    if (exp === 9394) {
      expName.style.width = '97%'
    }
    if (exp === 9395) {
      expName.style.width = '97.5%'
    }
    if (exp === 9396) {
      expName.style.width = '98%'
    }
    if (exp === 9397) {
      expName.style.width = '98.5%'
    }
    if (exp === 9398) {
      expName.style.width = '99%'
    }
    if (exp === 9399) {
      expName.style.width = '99.5%'
    }
    if (exp === 9400) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 9401 && exp <= 9600)
    {
      expName = expThree;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'none'
      expFive.style.display = 'none'
   if (exp === 9401) {
      expName.style.width = '0.5%'
    }
   if (exp === 9402) {
      expName.style.width = '1%'
    }
   if (exp === 9403) {
      expName.style.width = '1.5%'
    }
   if (exp === 9404) {
      expName.style.width = '2%'
    }
   if (exp === 9405) {
      expName.style.width = '2.5%'
    }
   if (exp === 9406) {
      expName.style.width = '3%'
    }
   if (exp === 9407) {
      expName.style.width = '3.5%'
   }
   if (exp === 9408) {
      expName.style.width = '4%'
    } 
   if (exp === 9409) {
      expName.style.width = '4.5%'
    } 
   if (exp === 9410) {
      expName.style.width = '5%'
    } 
   if (exp === 9411) {
      expName.style.width = '5.5%'
    } 
   if (exp === 9412) {
      expName.style.width = '6%'
    } 
   if (exp === 9413) {
      expName.style.width = '6.5%'
    } 
   if (exp === 9414) {
      expName.style.width = '7%'
    } 
   if (exp === 9415) {
      expName.style.width = '7.5%'
    } 
   if (exp === 9416) {
      expName.style.width = '8%'
    } 
   if (exp === 9417) {
      expName.style.width = '8.5%'
    } 
   if (exp === 9418) {
      expName.style.width = '9%'
    } 
   if (exp === 9419) {
      expName.style.width = '9.5%'
    }
   if (exp === 9420) {
      expName.style.width = '10%'
    }
   if (exp === 9421) {
     expName.style.width = '10.5%'
    }
   if (exp === 9422) {
     expName.style.width = '11%'
    }
   if (exp === 9423) {
     expName.style.width = '11.5%'
    }
   if (exp === 9424) {
     expName.style.width = '12%'
    }
   if (exp === 9425) {
     expName.style.width = '12.5%'
    }
   if (exp === 9426) {
     expName.style.width = '13%'
    }
   if (exp === 9427) {
     expName.style.width = '13.5%'
   }
   if (exp === 9428) {
     expName.style.width = '14%'
    } 
   if (exp === 9429) {
     expName.style.width = '14.5%'
    } 
   if (exp === 9430) {
     expName.style.width = '15%'
    } 
   if (exp === 9431) {
     expName.style.width = '15.5%'
    } 
   if (exp === 9432) {
     expName.style.width = '16%'
    } 
   if (exp === 9433) {
      expName.style.width = '16.5%'
    } 
   if (exp === 9434) {
      expName.style.width = '17%'
    } 
   if (exp === 9435) {
      expName.style.width = '17.5%'
    } 
   if (exp === 9436) {
      expName.style.width = '18%'
    } 
   if (exp === 9437) {
      expName.style.width = '18.5%'
    } 
   if (exp === 9438) {
      expName.style.width = '19%'
    } 
   if (exp === 9439) {
      expName.style.width = '19.5%'
    }
   if (exp === 9440) {
      expName.style.width = '20%'
    }
   if (exp === 9441) {
      expName.style.width = '20.5%'
    }
   if (exp === 9442) {
      expName.style.width = '21%'
    }
   if (exp === 9443) {
      expName.style.width = '21.5%'
    }
   if (exp === 9444) {
      expName.style.width = '22%'
    }
   if (exp === 9445) {
      expName.style.width = '22.5%'
    }
   if (exp === 9446) {
      expName.style.width = '23%'
    }
   if (exp === 9447) {
      expName.style.width = '23.5%'
    }
   if (exp === 9448) {
      expName.style.width = '24%'
    }
   if (exp === 9449) {
      expName.style.width = '24.5%'
    }
   if (exp === 9450) {
      expName.style.width = '25%'
    }
   if (exp === 9451) {
      expName.style.width = '25.5%'
    }
   if (exp === 9452) {
      expName.style.width = '26%'
    }
   if (exp === 9453) {
      expName.style.width = '26.5%'
    }
   if (exp === 9454) {
      expName.style.width = '27%'
    }
   if (exp === 9655) {
      expName.style.width = '27.5%'
    }
    if (exp === 9456) {
      expName.style.width = '28%'
    }
    if (exp === 9457) {
      expName.style.width = '28.5%'
    }
    if (exp === 9458) {
      expName.style.width = '29%'
    }
    if (exp === 9459) {
      expName.style.width = '29.5%'
    }
    if (exp === 9460) {
      expName.style.width = '30%'
    }
    if (exp === 9461) {
      expName.style.width = '30.5%'
    }
    if (exp === 9462) {
      expName.style.width = '31%'
    }
    if (exp === 9463) {
      expName.style.width = '31.5%'
    }
    if (exp === 9464) {
      expName.style.width = '32%'
    }
    if (exp === 9465) {
      expName.style.width = '32.5%'
    }
    if (exp === 9466) {
      expName.style.width = '33%'
    }
    if (exp === 9467) {
      expName.style.width = '33.5%'
    }
    if (exp === 9468) {
      expName.style.width = '34%'
    }
    if (exp === 9469) {
      expName.style.width = '34.5%'
    }
    if (exp === 9470) {
      expName.style.width = '35%'
    }
    if (exp === 9471) {
      expName.style.width = '35.5%'
    }
    if (exp === 9472) {
      expName.style.width = '36%'
    }
    if (exp === 9473) {
      expName.style.width = '36.5%'
    }
    if (exp === 9474) {
      expName.style.width = '37%'
    }
    if (exp === 9475) {
      expName.style.width = '37.5%'
    }
    if (exp === 9476) {
      expName.style.width = '38%'
    }
    if (exp === 9477) {
      expName.style.width = '38.5%'
    }
    if (exp === 9478) {
      expName.style.width = '39%'
    }
    if (exp === 9479) {
      expName.style.width = '39.5%'
    }
    if (exp === 9480) {
      expName.style.width = '40%'
    }
    if (exp === 9481) {
      expName.style.width = '40.5%'
    }
    if (exp === 9482) {
      expName.style.width = '41%'
    }
    if (exp === 9483) {
      expName.style.width = '41.5%'
    }
    if (exp === 9484) {
      expName.style.width = '42%'
    }
    if (exp === 9485) {
      expName.style.width = '42.5%'
    }
    if (exp === 9486) {
      expName.style.width = '43%'
    }
    if (exp === 9487) {
      expName.style.width = '43.5%'
    }
    if (exp === 9488) {
      expName.style.width = '44%'
    }
    if (exp === 9489) {
      expName.style.width = '44.5%'
    }
    if (exp === 9490) {
      expName.style.width = '45%'
    }
    if (exp === 9491) {
      expName.style.width = '45.5%'
    }
    if (exp === 9492) {
      expName.style.width = '46%'
    }
    if (exp === 9493) {
      expName.style.width = '46.5%'
    }
    if (exp === 9494) {
      expName.style.width = '47%'
    }
    if (exp === 9495) {
      expName.style.width = '47.5%'
    }
    if (exp === 9496) {
      expName.style.width = '48%'
    }
    if (exp === 9497) {
      expName.style.width = '48.5%'
    }
    if (exp === 9498) {
      expName.style.width = '49%'
    }
    if (exp === 9499) {
      expName.style.width = '49.5%'
    }
    if (exp === 9500) {
      expName.style.width = '50%'
    }
   if (exp === 9501) {
      expName.style.width = '50.5%'
    }
   if (exp === 9502) {
      expName.style.width = '51%'
    }
   if (exp === 9503) {
      expName.style.width = '51.5%'
    }
   if (exp === 9504) {
      expName.style.width = '52%'
    }
   if (exp === 9505) {
      expName.style.width = '52.5%'
    }
   if (exp === 9506) {
      expName.style.width = '53%'
    }
   if (exp === 9507) {
      expName.style.width = '53.5%'
   }
   if (exp === 9508) {
      expName.style.width = '54%'
    } 
   if (exp === 9509) {
      expName.style.width = '54.5%'
    } 
   if (exp === 9510) {
      expName.style.width = '55%'
    } 
   if (exp === 9511) {
      expName.style.width = '55.5%'
    } 
   if (exp === 9512) {
      expName.style.width = '56%'
    } 
   if (exp === 9513) {
      expName.style.width = '56.5%'
    } 
   if (exp === 9514) {
      expName.style.width = '57%'
    } 
   if (exp === 9515) {
      expName.style.width = '57.5%'
    } 
   if (exp === 9516) {
      expName.style.width = '58%'
    } 
   if (exp === 9517) {
      expName.style.width = '58.5%'
    } 
   if (exp === 9518) {
      expName.style.width = '59%'
    } 
   if (exp === 9519) {
      expName.style.width = '59.5%'
    }
   if (exp === 9510) {
      expName.style.width = '60%'
    }
   if (exp === 9521) {
     expName.style.width = '60.5%'
    }
   if (exp === 9522) {
     expName.style.width = '61%'
    }
   if (exp === 9523) {
     expName.style.width = '61.5%'
    }
   if (exp === 9524) {
     expName.style.width = '62%'
    }
   if (exp === 9525) {
     expName.style.width = '62.5%'
    }
   if (exp === 9526) {
     expName.style.width = '63%'
    }
   if (exp === 9527) {
     expName.style.width = '63.5%'
   }
   if (exp === 9528) {
     expName.style.width = '64%'
    } 
   if (exp === 9529) {
     expName.style.width = '64.5%'
    } 
   if (exp === 9530) {
     expName.style.width = '65%'
    } 
   if (exp === 9531) {
     expName.style.width = '65.5%'
    } 
   if (exp === 9532) {
     expName.style.width = '66%'
    } 
   if (exp === 9533) {
      expName.style.width = '66.5%'
    } 
   if (exp === 9534) {
      expName.style.width = '67%'
    } 
   if (exp === 9535) {
      expName.style.width = '67.5%'
    } 
   if (exp === 9536) {
      expName.style.width = '68%'
    } 
   if (exp === 9537) {
      expName.style.width = '68.5%'
    } 
   if (exp === 9538) {
      expName.style.width = '69%'
    } 
   if (exp === 9539) {
      expName.style.width = '69.5%'
    }
   if (exp === 9540) {
      expName.style.width = '70%'
    }
   if (exp === 9541) {
      expName.style.width = '70.5%'
    }
   if (exp === 9542) {
      expName.style.width = '71%'
    }
   if (exp === 9543) {
      expName.style.width = '71.5%'
    }
   if (exp === 9544) {
      expName.style.width = '72%'
    }
   if (exp === 9545) {
      expName.style.width = '72.5%'
    }
   if (exp === 9546) {
      expName.style.width = '73%'
    }
   if (exp === 9547) {
      expName.style.width = '73.5%'
    }
   if (exp === 9548) {
      expName.style.width = '74%'
    }
   if (exp === 9549) {
      expName.style.width = '74.5%'
    }
   if (exp === 9550) {
      expName.style.width = '75%'
    }
   if (exp ===  9551) {
      expName.style.width = '75.5%'
    }
   if (exp ===  9552) {
      expName.style.width = '76%'
    }
   if (exp ===  9553) {
      expName.style.width = '76.5%'
    }
   if (exp ===  9554) {
      expName.style.width = '77%'
    }
   if (exp ===  9555) {
      expName.style.width = '77.5%'
    }
    if (exp === 9556) {
      expName.style.width = '78%'
    }
    if (exp === 9557) {
      expName.style.width = '78.5%'
    }
    if (exp === 9558) {
      expName.style.width = '79%'
    }
    if (exp === 9559) {
      expName.style.width = '79.5%'
    }
    if (exp === 9560) {
      expName.style.width = '80%'
    }
    if (exp === 9561) {
      exppName.style.width = '80.5%'
    }
    if (exp === 9562) {
      expName.style.width = '81%'
    }
    if (exp === 9563) {
      expName.style.width = '81.5%'
    }
    if (exp === 9564) {
      expName.style.width = '82%'
    }
    if (exp === 9565) {
      expName.style.width = '82.5%'
    }
    if (exp === 9566) {
      expName.style.width = '83%'
    }
    if (exp === 9567) {
      expName.style.width = '83.5%'
    }
    if (exp === 9568) {
      expName.style.width = '84%'
    }
    if (exp === 9569) {
      expName.style.width = '84.5%'
    }
    if (exp === 9570) {
      expName.style.width = '85%'
    }
    if (exp === 9571) {
      expName.style.width = '85.5%'
    }
    if (exp === 9572) {
      expName.style.width = '86%'
    }
    if (exp === 9573) {
      expName.style.width = '86.5%'
    }
    if (exp === 9574) {
      expName.style.width = '87%'
    }
    if (exp === 9575) {
      expName.style.width = '87.5%'
    }
    if (exp === 9576) {
      expName.style.width = '88%'
    }
    if (exp === 9577) {
      expName.style.width = '88.5%'
    }
    if (exp === 9578) {
      expName.style.width = '89%'
    }
    if (exp === 9579) {
      expName.style.width = '89.5%'
    }
    if (exp === 9580) {
      expName.style.width = '90%'
    }
    if (exp === 9581) {
      expName.style.width = '90.5%'
    }
    if (exp === 9582) {
      expName.style.width = '91%'
    }
    if (exp === 9583) {
      expName.style.width = '91.5%'
    }
    if (exp === 9584) {
      expName.style.width = '92%'
    }
    if (exp === 9585) {
      expName.style.width = '92.5%'
    }
    if (exp === 9586) {
      expName.style.width = '93%'
    }
    if (exp === 9587) {
      expName.style.width = '93.5%'
    }
    if (exp === 9588) {
      expName.style.width = '94%'
    }
    if (exp === 9589) {
      expName.style.width = '94.5%'
    }
    if (exp === 9590) {
      expName.style.width = '95%'
    }
    if (exp === 9591) {
      expName.style.width = '95.5%'
    }
    if (exp === 9592) {
      expName.style.width = '96%'
    }
    if (exp === 9593) {
      expName.style.width = '96.5%'
    }
    if (exp === 9594) {
      expName.style.width = '97%'
    }
    if (exp === 9595) {
      expName.style.width = '97.5%'
    }
    if (exp === 9596) {
      expName.style.width = '98%'
    }
    if (exp === 9597) {
      expName.style.width = '98.5%'
    }
    if (exp === 9598) {
      expName.style.width = '99%'
    }
    if (exp === 9599) {
      expName.style.width = '99.5%'
    }
    if (exp === 9600) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 9601 && exp <= 9800)
    {
      expName = expFour;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 9601) {
      expName.style.width = '0.5%'
    }
   if (exp === 9602) {
      expName.style.width = '1%'
    }
   if (exp === 9603) {
      expName.style.width = '1.5%'
    }
   if (exp === 9604) {
      expName.style.width = '2%'
    }
   if (exp === 9605) {
      expName.style.width = '2.5%'
    }
   if (exp === 9606) {
      expName.style.width = '3%'
   }
   if (exp === 9607) {
      expName.style.width = '3.5%'
   }
   if (exp === 9608) {
      expName.style.width = '4%'
    } 
   if (exp === 9609) {
      expName.style.width = '4.5%'
    } 
   if (exp === 9610) {
      expName.style.width = '5%'
    } 
   if (exp === 9611) {
      expName.style.width = '5.5%'
    } 
   if (exp === 9612) {
      expName.style.width = '6%'
    } 
   if (exp === 9613) {
      expName.style.width = '6.5%'
    } 
   if (exp === 9614) {
      expName.style.width = '7%'
    } 
   if (exp === 9615) {
      expName.style.width = '7.5%'
    } 
   if (exp === 9616) {
      expName.style.width = '8%'
  } 
   if (exp === 9617) {
      expName.style.width = '8.5%'
   } 
   if (exp === 9618) {
      expName.style.width = '9%'
    } 
   if (exp === 9619) {
      expName.style.width = '9.5%'
    }
   if (exp === 9620) {
      expName.style.width = '10%'
    }
   if (exp === 9621) {
     expName.style.width = '10.5%'
    }
   if (exp === 9622) {
     expName.style.width = '11%'
    }
   if (exp === 9623) {
     expName.style.width = '11.5%'
    }
   if (exp === 9624) {
     expName.style.width = '12%'
    }
   if (exp === 9625) {
     expName.style.width = '12.5%'
    }
   if (exp === 9626) {
     expName.style.width = '13%'
    }
   if (exp === 9627) {
     expName.style.width = '13.5%'
   }
   if (exp === 9628) {
     expName.style.width = '14%'
   }
   if (exp === 9629) {
     expName.style.width = '14.5%'
    } 
   if (exp === 9630) {
     expName.style.width = '15%'
    } 
   if (exp === 9631) {
     expName.style.width = '15.5%'
    } 
   if (exp === 9632) {
     expName.style.width = '16%'
    } 
   if (exp === 9633) {
      expName.style.width = '16.5%'
    } 
   if (exp === 9634) {
      expName.style.width = '17%'
    } 
   if (exp === 9635) {
      expName.style.width = '17.5%'
    } 
   if (exp === 9636) {
      expName.style.width = '18%'
    } 
   if (exp === 9637) {
      expName.style.width = '18.5%'
    } 
   if (exp === 9638) {
      expName.style.width = '19%'
    } 
   if (exp === 9639) {
      expName.style.width = '19.5%'
   }
   if (exp === 9640) {
      expName.style.width = '20%'
    }
   if (exp === 9641) {
      expName.style.width = '20.5%'
    }
   if (exp === 9642) {
      expName.style.width = '21%'
    }
   if (exp === 9643) {
      expName.style.width = '21.5%'
    }
   if (exp === 9644) {
      expName.style.width = '22%'
    }
   if (exp === 9645) {
      expName.style.width = '22.5%'
    }
   if (exp === 9646) {
      expName.style.width = '23%'
    }
   if (exp === 9647) {
      expName.style.width = '23.5%'
    }
   if (exp === 9648) {
      expName.style.width = '24%'
    }
   if (exp === 9649) {
      expName.style.width = '24.5%'
    }
   if (exp === 9650) {
      expName.style.width = '25%'
  }
   if (exp === 9651) {
      expName.style.width = '25.5%'
    }
   if (exp === 9652) {
      expName.style.width = '26%'
    }
   if (exp === 9653) {
      expName.style.width = '26.5%'
    }
   if (exp === 9654) {
      expName.style.width = '27%'
    }
   if (exp === 9655) {
      expName.style.width = '27.5%'
    }
    if (exp === 9656) {
      expName.style.width = '28%'
    }
    if (exp === 9657) {
      expName.style.width = '28.5%'
    }
    if (exp === 9658) {
      expName.style.width = '29%'
    }
    if (exp === 9659) {
      expName.style.width = '29.5%'
    }
    if (exp === 9660) {
      expName.style.width = '30%'
    }
    if (exp === 9661) {
      expName.style.width = '30.5%'
  }
    if (exp === 9662) {
      expName.style.width = '31%'
    }
    if (exp === 9663) {
      expName.style.width = '31.5%'
    }
    if (exp === 9664) {
      expName.style.width = '32%'
    }
    if (exp === 9665) {
      expName.style.width = '32.5%'
    }
    if (exp === 9666) {
      expName.style.width = '33%'
    }
    if (exp === 9667) {
      expName.style.width = '33.5%'
    }
    if (exp === 9668) {
      expName.style.width = '34%'
    }
    if (exp === 9669) {
      expName.style.width = '34.5%'
    }
    if (exp === 9670) {
      expName.style.width = '35%'
    }
    if (exp === 9671) {
      expName.style.width = '35.5%'
    }
    if (exp === 9672) {
      expName.style.width = '36%'
      }
    if (exp === 9673) {
      expName.style.width = '36.5%'
    }
    if (exp === 9674) {
      expName.style.width = '37%'
    }
    if (exp === 9675) {
      expName.style.width = '37.5%'
    }
    if (exp === 9676) {
      expName.style.width = '38%'
    }
    if (exp === 9677) {
      expName.style.width = '38.5%'
    }
    if (exp === 9678) {
      expName.style.width = '39%'
    }
    if (exp === 9679) {
      expName.style.width = '39.5%'
    }
    if (exp === 9680) {
      expName.style.width = '40%'
    }
    if (exp === 8681) {
      expName.style.width = '40.5%'
    }
    if (exp === 9682) {
      expName.style.width = '41%'
    }
    if (exp === 9683) {
      expName.style.width = '41.5%'
  }
    if (exp === 9684) {
      expName.style.width = '42%'
    }
    if (exp === 9685) {
      expName.style.width = '42.5%'
    }
    if (exp === 9686) {
      expName.style.width = '43%'
    }
    if (exp === 9687) {
      expName.style.width = '43.5%'
    }
    if (exp === 9688) {
      expName.style.width = '44%'
    }
    if (exp === 9689) {
      expName.style.width = '44.5%'
    }
    if (exp === 9690) {
      expName.style.width = '45%'
    }
    if (exp === 9691) {
      expName.style.width = '45.5%'
    }
    if (exp === 9692) {
      expName.style.width = '46%'
    }
    if (exp === 9693) {
      expName.style.width = '46.5%'
    }
    if (exp === 9694) {
      expName.style.width = '47%'
    }
    if (exp === 9695) {
      expName.style.width = '47.5%'
    }
    if (exp === 9696) {
      expName.style.width = '48%'
    }
    if (exp === 9697) {
      expName.style.width = '48.5%'
    }
    if (exp === 9698) {
      expName.style.width = '49%'
    }
    if (exp === 9699) {
      expName.style.width = '49.5%'
    }
    if (exp === 9700) {
      expName.style.width = '50%'
    }
   if (exp === 9701) {
      expName.style.width = '50.5%'
    }
   if (exp === 9702) {
      expName.style.width = '51%'
    }
   if (exp === 9703) {
      expName.style.width = '51.5%'
   }
   if (exp === 9704) {
      expName.style.width = '52%'
    }
   if (exp === 9705) {
      expName.style.width = '52.5%'
    }
   if (exp === 9706) {
      expName.style.width = '53%'
    }
   if (exp === 9707) {
      expName.style.width = '53.5%'
   }
   if (exp === 9708) {
      expName.style.width = '54%'
    } 
   if (exp === 9709) {
      expName.style.width = '54.5%'
    } 
   if (exp === 9710) {
      expName.style.width = '55%'
    } 
   if (exp === 9711) {
      expName.style.width = '55.5%'
    } 
   if (exp === 9712) {
      expName.style.width = '56%'
    } 
   if (exp === 9713) {
      expName.style.width = '56.5%'
    } 
   if (exp === 9714) {
      expName.style.width = '57%'
    } 
   if (exp === 9715) {
      expName.style.width = '57.5%'
    } 
   if (exp === 9716) {
      expName.style.width = '58%'
    } 
   if (exp === 9717) {
      expName.style.width = '58.5%'
    } 
   if (exp === 9718) {
      expName.style.width = '59%'
    } 
   if (exp === 9719) {
      expName.style.width = '59.5%'
    }
   if (exp === 9710) {
      expName.style.width = '60%'
    }
   if (exp === 9721) {
     expName.style.width = '60.5%'
    }
   if (exp === 9722) {
     expName.style.width = '61%'
    }
   if (exp === 9723) {
     expName.style.width = '61.5%'
    }
   if (exp === 9724) {
     expName.style.width = '62%'
    }
   if (exp === 9725) {
     expName.style.width = '62.5%'
    }
   if (exp === 9726) {
     expName.style.width = '63%'
    }
   if (exp === 9727) {
     expName.style.width = '63.5%'
   }
   if (exp === 9728) {
     expName.style.width = '64%'
    } 
   if (exp === 9729) {
     expName.style.width = '64.5%'
    } 
   if (exp === 9730) {
     expName.style.width = '65%'
    } 
   if (exp === 9731) {
     expName.style.width = '65.5%'
    } 
   if (exp === 9732) {
     expName.style.width = '66%'
    } 
   if (exp === 9733) {
      expName.style.width = '66.5%'
    } 
   if (exp === 9734) {
      expName.style.width = '67%'
    } 
   if (exp === 9735) {
      expName.style.width = '67.5%'
    } 
   if (exp === 9736) {
      expName.style.width = '68%'
    } 
   if (exp === 9737) {
      expName.style.width = '68.5%'
    } 
   if (exp === 9738) {
      expName.style.width = '69%'
    } 
   if (exp === 9739) {
      expName.style.width = '69.5%'
    }
   if (exp === 9740) {
      expName.style.width = '70%'
    }
   if (exp === 9741) {
      expName.style.width = '70.5%'
    }
   if (exp === 9742) {
      expName.style.width = '71%'
    }
   if (exp === 9743) {
      expName.style.width = '71.5%'
    }
   if (exp === 9744) {
      expName.style.width = '72%'
    }
   if (exp === 9745) {
      expName.style.width = '72.5%'
    }
   if (exp === 9746) {
      expName.style.width = '73%'
    }
   if (exp === 9747) {
      expName.style.width = '73.5%'
    }
   if (exp === 9748) {
      expName.style.width = '74%'
    }
   if (exp === 9749) {
      expName.style.width = '74.5%'
    }
   if (exp === 9750) {
      expName.style.width = '75%'
    }
   if (exp === 9751) {
      expName.style.width = '75.5%'
    }
   if (exp === 9752) {
      expName.style.width = '76%'
    }
   if (exp === 9753) {
      expName.style.width = '76.5%'
    }
   if (exp === 9754) {
      expName.style.width = '77%'
    }
   if (exp === 9755) {
      expName.style.width = '77.5%'
    }
    if (exp === 9756) {
      expName.style.width = '78%'
    }
    if (exp === 9757) {
      expName.style.width = '78.5%'
    }
    if (exp === 9758) {
      expName.style.width = '79%'
    }
    if (exp === 9759) {
      expName.style.width = '79.5%'
    }
    if (exp === 9760) {
      expName.style.width = '80%'
    }
    if (exp === 9761) {
      exppName.style.width = '80.5%'
    }
    if (exp === 9762) {
      expName.style.width = '81%'
    }
    if (exp === 9763) {
      expName.style.width = '81.5%'
    }
    if (exp === 9764) {
      expName.style.width = '82%'
    }
    if (exp === 9765) {
      expName.style.width = '82.5%'
    }
    if (exp === 9766) {
      expName.style.width = '83%'
    }
    if (exp === 9767) {
      expName.style.width = '83.5%'
    }
    if (exp === 9768) {
      expName.style.width = '84%'
    }
    if (exp === 9769) {
      expName.style.width = '84.5%'
    }
    if (exp === 9770) {
      expName.style.width = '85%'
    }
    if (exp === 9771) {
      expName.style.width = '85.5%'
    }
    if (exp === 9772) {
      expName.style.width = '86%'
    }
    if (exp === 9773) {
      expName.style.width = '86.5%'
    }
    if (exp === 9774) {
      expName.style.width = '87%'
    }
    if (exp === 9775) {
      expName.style.width = '87.5%'
    }
    if (exp === 9776) {
      expName.style.width = '88%'
    }
    if (exp === 9777) {
      expName.style.width = '88.5%'
    }
    if (exp === 9778) {
      expName.style.width = '89%'
    }
    if (exp === 9779) {
      expName.style.width = '89.5%'
    }
    if (exp === 9780) {
      expName.style.width = '90%'
    }
    if (exp === 9781) {
      expName.style.width = '90.5%'
    }
    if (exp === 9782) {
      expName.style.width = '91%'
    }
    if (exp === 9783) {
      expName.style.width = '91.5%'
    }
    if (exp === 9784) {
      expName.style.width = '92%'
    }
    if (exp === 9785) {
      expName.style.width = '92.5%'
    }
    if (exp === 9786) {
      expName.style.width = '93%'
    }
    if (exp === 9787) {
      expName.style.width = '93.5%'
    }
    if (exp === 9788) {
      expName.style.width = '94%'
    }
    if (exp === 9789) {
      expName.style.width = '94.5%'
    }
    if (exp === 9790) {
      expName.style.width = '95%'
    }
    if (exp === 9791) {
      expName.style.width = '95.5%'
    }
    if (exp === 9792) {
      expName.style.width = '96%'
    }
    if (exp === 9793) {
      expName.style.width = '96.5%'
    }
    if (exp === 9794) {
      expName.style.width = '97%'
    }
    if (exp === 9795) {
      expName.style.width = '97.5%'
    }
    if (exp === 9796) {
      expName.style.width = '98%'
    }
    if (exp === 9797) {
      expName.style.width = '98.5%'
    }
    if (exp === 9798) {
      expName.style.width = '99%'
    }
    if (exp === 9799) {
      expName.style.width = '99.5%'
    }
    if (exp === 9800) {
      expName.style.width = '100%'
    }
    }

    if (exp >= 9801 && exp <= 10000) 
    {
      expName = expFive;

      expOne.style.width = '100%'
      expTwo.style.width = '100%'
      expThree.style.width = '100%'

      expOne.style.display = 'block'
      expTwo.style.display = 'block'
      expThree.style.display = 'block'
      expFour.style.display = 'block'
      expFive.style.display = 'none'
   if (exp === 9801) {
      expName.style.width = '0.5%'
    }
   if (exp === 9802) {
      expName.style.width = '1%'
    }
   if (exp === 9803) {
      expName.style.width = '1.5%'
    }
   if (exp === 9804) {
      expName.style.width = '2%'
    }
   if (exp === 9805) {
      expName.style.width = '2.5%'
    }
   if (exp === 9806) {
      expName.style.width = '3%'
   }
   if (exp === 9807) {
      expName.style.width = '3.5%'
   }
   if (exp === 9808) {
      expName.style.width = '4%'
    } 
   if (exp === 9809) {
      expName.style.width = '4.5%'
    } 
   if (exp === 9810) {
      expName.style.width = '5%'
    } 
   if (exp === 9811) {
      expName.style.width = '5.5%'
    } 
   if (exp === 9812) {
      expName.style.width = '6%'
    } 
   if (exp === 9813) {
      expName.style.width = '6.5%'
    } 
   if (exp === 9814) {
      expName.style.width = '7%'
    } 
   if (exp === 9815) {
      expName.style.width = '7.5%'
    } 
   if (exp === 9816) {
      expName.style.width = '8%'
    } 
   if (exp === 9817) {
      expName.style.width = '8.5%'
   } 
   if (exp === 9818) {
      expName.style.width = '9%'
    } 
   if (exp === 9819) {
      expName.style.width = '9.5%'
    }
   if (exp === 9820) {
      expName.style.width = '10%'
    }
   if (exp === 9821) {
     expName.style.width = '10.5%'
    }
   if (exp === 9822) {
     expName.style.width = '11%'
    }
   if (exp === 9823) {
     expName.style.width = '11.5%'
    }
   if (exp === 9824) {
     expName.style.width = '12%'
    }
   if (exp === 9825) {
     expName.style.width = '12.5%'
    }
   if (exp === 9826) {
     expName.style.width = '13%'
    }
   if (exp === 9927) {
     expName.style.width = '13.5%'
   }
   if (exp === 9828) {
     expName.style.width = '14%'
   }
   if (exp === 9829) {
     expName.style.width = '14.5%'
    } 
   if (exp === 9830) {
     expName.style.width = '15%'
    } 
   if (exp === 9831) {
     expName.style.width = '15.5%'
    } 
   if (exp === 9832) {
     expName.style.width = '16%'
    } 
   if (exp === 9833) {
      expName.style.width = '16.5%'
    } 
   if (exp === 9834) {
      expName.style.width = '17%'
    } 
   if (exp === 9835) {
      expName.style.width = '17.5%'
    } 
   if (exp === 9836) {
      expName.style.width = '18%'
    } 
   if (exp === 9837) {
      expName.style.width = '18.5%'
    } 
   if (exp === 9838) {
      expName.style.width = '19%'
    } 
   if (exp === 9839) {
      expName.style.width = '19.5%'
   }
   if (exp === 9840) {
      expName.style.width = '20%'
    }
   if (exp === 9841) {
      expName.style.width = '20.5%'
    }
   if (exp === 9842) {
      expName.style.width = '21%'
    }
   if (exp === 9843) {
      expName.style.width = '21.5%'
    }
   if (exp === 9844) {
      expName.style.width = '22%'
    }
   if (exp === 9845) {
      expName.style.width = '22.5%'
    }
   if (exp === 9846) {
      expName.style.width = '23%'
    }
   if (exp === 9847) {
      expName.style.width = '23.5%'
    }
   if (exp === 9848) {
      expName.style.width = '24%'
    }
   if (exp === 9849) {
      expName.style.width = '24.5%'
    }
   if (exp === 9850) {
      expName.style.width = '25%'
  }
   if (exp === 9851) {
      expName.style.width = '25.5%'
    }
   if (exp === 9852) {
      expName.style.width = '26%'
    }
   if (exp === 9853) {
      expName.style.width = '26.5%'
    }
   if (exp === 9854) {
      expName.style.width = '27%'
    }
   if (exp === 9855) {
      expName.style.width = '27.5%'
    }
    if (exp === 9856) {
      expName.style.width = '28%'
    }
    if (exp === 9857) {
      expName.style.width = '28.5%'
    }
    if (exp === 9858) {
      expName.style.width = '29%'
    }
    if (exp === 9859) {
      expName.style.width = '29.5%'
    }
    if (exp === 9860) {
      expName.style.width = '30%'
    }
    if (exp === 9861) {
      expName.style.width = '30.5%'
  }
    if (exp === 9862) {
      expName.style.width = '31%'
    }
    if (exp === 9863) {
      expName.style.width = '31.5%'
    }
    if (exp === 9864) {
      expName.style.width = '32%'
    }
    if (exp === 9865) {
      expName.style.width = '32.5%'
    }
    if (exp === 9866) {
      expName.style.width = '33%'
    }
    if (exp === 9867) {
      expName.style.width = '33.5%'
    }
    if (exp === 9868) {
      expName.style.width = '34%'
    }
    if (exp === 9869) {
      expName.style.width = '34.5%'
    }
    if (exp === 9870) {
      expName.style.width = '35%'
    }
    if (exp === 9871) {
      expName.style.width = '35.5%'
    }
    if (exp === 9872) {
      expName.style.width = '36%'
    }
    if (exp === 9873) {
      expName.style.width = '36.5%'
    }
    if (exp === 9874) {
      expName.style.width = '37%'
    }
    if (exp === 9875) {
      expName.style.width = '37.5%'
    }
    if (exp === 9876) {
      expName.style.width = '38%'
    }
    if (exp === 9877) {
      expName.style.width = '38.5%'
    }
    if (exp === 9878) {
      expName.style.width = '39%'
    }
    if (exp === 9879) {
      expName.style.width = '39.5%'
    }
    if (exp === 9880) {
      expName.style.width = '40%'
    }
    if (exp === 9881) {
      expName.style.width = '40.5%'
    }
    if (exp === 8982) {
      expName.style.width = '41%'
    }
    if (exp === 9883) {
      expName.style.width = '41.5%'
    }
    if (exp === 9884) {
      expName.style.width = '42%'
    }
    if (exp === 9885) {
      expName.style.width = '42.5%'
    }
    if (exp === 9886) {
      expName.style.width = '43%'
    }
    if (exp === 9887) {
      expName.style.width = '43.5%'
    }
    if (exp === 9888) {
      expName.style.width = '44%'
    }
    if (exp === 9889) {
      expName.style.width = '44.5%'
    }
    if (exp === 9890) {
      expName.style.width = '45%'
    }
    if (exp === 9891) {
      expName.style.width = '45.5%'
    }
    if (exp === 9892) {
      expName.style.width = '46%'
    }
    if (exp === 9893) {
      expName.style.width = '46.5%'
    }
    if (exp === 9894) {
      expName.style.width = '47%'
    }
    if (exp === 9895) {
      expName.style.width = '47.5%'
    }
    if (exp === 9896) {
      expName.style.width = '48%'
    }
    if (exp === 9897) {
      expName.style.width = '48.5%'
    }
    if (exp === 9898) {
      expName.style.width = '49%'
    }
    if (exp === 9899) {
      expName.style.width = '49.5%'
    }
    if (exp === 9900) {
      expName.style.width = '50%'
    }
   if (exp === 9901) {
      expName.style.width = '50.5%'
    }
   if (exp === 9902) {
      expName.style.width = '51%'
    }
   if (exp === 9903) {
      expName.style.width = '51.5%'
  }
   if (exp === 9904) {
      expName.style.width = '52%'
    }
   if (exp === 9905) {
      expName.style.width = '52.5%'
    }
   if (exp === 9906) {
      expName.style.width = '53%'
    }
   if (exp === 9907) {
      expName.style.width = '53.5%'
   }
   if (exp === 9908) {
      expName.style.width = '54%'
    } 
   if (exp === 9909) {
      expName.style.width = '54.5%'
    } 
   if (exp === 9910) {
      expName.style.width = '55%'
    } 
   if (exp === 9911) {
      expName.style.width = '55.5%'
    } 
   if (exp === 9912) {
      expName.style.width = '56%'
    } 
   if (exp === 9913) {
      expName.style.width = '56.5%'
    } 
   if (exp === 9914) {
      expName.style.width = '57%'
    } 
   if (exp === 9915) {
      expName.style.width = '57.5%'
    } 
   if (exp === 9916) {
      expName.style.width = '58%'
    } 
   if (exp === 9917) {
      expName.style.width = '58.5%'
    } 
   if (exp === 9918) {
      expName.style.width = '59%'
    } 
   if (exp === 9919) {
      expName.style.width = '59.5%'
    }
   if (exp === 9920) {
      expName.style.width = '60%'
    }
   if (exp === 9921) {
     expName.style.width = '60.5%'
    }
   if (exp === 9922) {
     expName.style.width = '61%'
    }
   if (exp === 9923) {
     expName.style.width = '61.5%'
    }
   if (exp === 9924) {
     expName.style.width = '62%'
    }
   if (exp === 9925) {
     expName.style.width = '62.5%'
    }
   if (exp === 9926) {
     expName.style.width = '63%'
    }
   if (exp === 8927) {
     expName.style.width = '63.5%'
   }
   if (exp === 9928) {
     expName.style.width = '64%'
    } 
   if (exp === 9929) {
     expName.style.width = '64.5%'
    } 
   if (exp === 9930) {
     expName.style.width = '65%'
    } 
   if (exp === 9931) {
     expName.style.width = '65.5%'
    } 
   if (exp === 9932) {
     expName.style.width = '66%'
    } 
   if (exp === 9933) {
      expName.style.width = '66.5%'
    } 
   if (exp === 9934) {
      expName.style.width = '67%'
    } 
   if (exp === 9935) {
      expName.style.width = '67.5%'
    } 
   if (exp === 9936) {
      expName.style.width = '68%'
    } 
   if (exp === 9937) {
      expName.style.width = '68.5%'
    } 
   if (exp === 9938) {
      expName.style.width = '69%'
    } 
   if (exp === 9939) {
      expName.style.width = '69.5%'
    }
   if (exp === 9940) {
      expName.style.width = '70%'
    }
   if (exp === 9941) {
      expName.style.width = '70.5%'
    }
   if (exp === 9942) {
      expName.style.width = '71%'
    }
   if (exp === 9943) {
      expName.style.width = '71.5%'
    }
   if (exp === 9944) {
      expName.style.width = '72%'
    }
   if (exp === 9945) {
      expName.style.width = '72.5%'
    }
   if (exp === 8946) {
      expName.style.width = '73%'
    }
   if (exp === 8947) {
      expName.style.width = '73.5%'
    }
   if (exp === 8948) {
      expName.style.width = '74%'
    }
   if (exp === 8949) {
      expName.style.width = '74.5%'
    }
   if (exp === 8950) {
      expName.style.width = '75%'
    }
   if (exp === 8951) {
      expName.style.width = '75.5%'
    }
   if (exp === 8952) {
      expName.style.width = '76%'
    }
   if (exp === 8953) {
      expName.style.width = '76.5%'
    }
   if (exp === 8954) {
      expName.style.width = '77%'
    }
   if (exp === 8955) {
      expName.style.width = '77.5%'
    }
    if (exp === 8956) {
      expName.style.width = '78%'
    }
    if (exp === 9957) {
      expName.style.width = '78.5%'
    }
    if (exp === 9958) {
      expName.style.width = '79%'
    }
    if (exp === 9959) {
      expName.style.width = '79.5%'
    }
    if (exp === 9960) {
      expName.style.width = '80%'
    }
    if (exp === 9961) {
      exppName.style.width = '80.5%'
    }
    if (exp === 9962) {
      expName.style.width = '81%'
    }
    if (exp === 9963) {
      expName.style.width = '81.5%'
    }
    if (exp === 9964) {
      expName.style.width = '82%'
    }
    if (exp === 9965) {
      expName.style.width = '82.5%'
    }
    if (exp === 9966) {
      expName.style.width = '83%'
    }
    if (exp === 9967) {
      expName.style.width = '83.5%'
    }
    if (exp === 9968) {
      expName.style.width = '84%'
    }
    if (exp === 9969) {
      expName.style.width = '84.5%'
    }
    if (exp === 9970) {
      expName.style.width = '85%'
    }
    if (exp === 9971) {
      expName.style.width = '85.5%'
    }
    if (exp === 9972) {
      expName.style.width = '86%'
    }
    if (exp === 9973) {
      expName.style.width = '86.5%'
    }
    if (exp === 9974) {
      expName.style.width = '87%'
    }
    if (exp === 9975) {
      expName.style.width = '87.5%'
    }
    if (exp === 9976) {
      expName.style.width = '88%'
    }
    if (exp === 9977) {
      expName.style.width = '88.5%'
    }
    if (exp === 9978) {
      expName.style.width = '89%'
    }
    if (exp === 9979) {
      expName.style.width = '89.5%'
    }
    if (exp === 9980) {
      expName.style.width = '90%'
    }
    if (exp === 9981) {
      expName.style.width = '90.5%'
    }
    if (exp === 9982) {
      expName.style.width = '91%'
    }
    if (exp === 8983) {
      expName.style.width = '91.5%'
    }
    if (exp === 9984) {
      expName.style.width = '92%'
    }
    if (exp === 9985) {
      expName.style.width = '92.5%'
    }
    if (exp === 9986) {
      expName.style.width = '93%'
    }
    if (exp === 9987) {
      expName.style.width = '93.5%'
    }
    if (exp === 9988) {
      expName.style.width = '94%'
    }
    if (exp === 9989) {
      expName.style.width = '94.5%'
    }
    if (exp === 9990) {
      expName.style.width = '95%'
    }
    if (exp === 9991) {
      expName.style.width = '95.5%'
    }
    if (exp === 9992) {
      expName.style.width = '96%'
    }
    if (exp === 9993) {
      expName.style.width = '96.5%'
    }
    if (exp === 9994) {
      expName.style.width = '97%'
    }
    if (exp === 9995) {
      expName.style.width = '97.5%'
    }
    if (exp === 9996) {
      expName.style.width = '98%'
    }
    if (exp === 9997) {
      expName.style.width = '98.5%'
    }
    if (exp === 9998) {
      expName.style.width = '99%'
    }
    if (exp === 9999) {
      expName.style.width = '99.5%'
    }
    if (exp === 9000) {
      expName.style.width = '100%'
    }
    } 
    if (exp === 10000) {
      setTimeout(() => {
        expOne.style.display = 'none'
        expTwo.style.display = 'none'
        expThree.style.display = 'none'
        expFour.style.display = 'none'
        expFive.style.display = 'none'
      }, 500)
      handleExpTwelve();
    }
  
    if (exp >= 10000) {
      handleExpTwelve();
      levelUpShow();
      
      playerLevel += 1;
      repPoints += 100;
      nitro += 1;
      cash += 2000;
  
      handleRaceLocations();
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      document.querySelector('.total-rep').innerHTML = repPoints;
      document.querySelector('.total-nitro').innerHTML = nitro;
      document.querySelector('.total-cash').innerHTML = cash;
      
      document.querySelector('.player-level').innerHTML = playerLevel;
      
      document.querySelector('.the-level').innerHTML = 12;
      
      document.querySelector('.next-level').innerHTML = '20000';
      
      document.querySelector('.level-title').innerHTML = 'Novice Lvl 2'
    }
  
    
  } 
}


//////////////////////////
async function updateTime() {
const currentTime = await new Date();
const hour = await currentTime.getHours()
const minute = await currentTime.getMinutes();
if (hour - 6 < 10) {
  document.querySelector('.hours').innerHTML = `0${hour - 6}`
} else {
  document.querySelector('.hours').innerHTML = `${hour - 6}`
}
if (minute < 10) {
document.querySelector('.minutes').innerHTML = `0${minute}`;
} else {
document.querySelector('.minutes').innerHTML = minute;
}
}
setInterval(() => {
  updateTime();
  blinkingDot();
}, 1000)
function blinkingDot() {
  setTimeout(() => {
    document.querySelector('.blinking-dot').style.visibility = 'hidden'
  }, 10)
  setTimeout(() => {
    document.querySelector('.blinking-dot').style.visibility = 'visible'
  }, 350)
}