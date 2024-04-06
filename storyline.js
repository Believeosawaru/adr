function openCrew() {
    document.querySelector('.crew-div').style.display = 'block'
    document.querySelector('.general-div').style.display = 'none'
}

function openGeneral() {
    document.querySelector('.crew-div').style.display = 'none'
    document.querySelector('.general-div').style.display = 'block'
}

function changeToText() {
    document.querySelector('.story-page-tabs').style.display = 'none'
    document.querySelector('.story-tab-select').style.display = 'none'
    document.querySelector('.story-page-text').style.display = 'block'
}

function changeToMain() {
    document.querySelector('.story-page-tabs').style.display = 'block'
    document.querySelector('.story-tab-select').style.display = 'none'
    document.querySelector('.story-page-text').style.display = 'none'
    document.querySelector('.c-g-btns').style.display = 'flex'
}

function changeToTab() {
    document.querySelector('.story-page-tabs').style.display = 'none'
    document.querySelector('.story-tab-select').style.display = 'block'
    document.querySelector('.story-page-text').style.display = 'none'
    document.querySelector('.c-g-btns').style.display = 'none'

    document.querySelector('.story-tab-select').innerHTML = `
    <button class="back-btn" onclick="changeToMain();"><i class="fa fa-arrow-left"></i></button>
    <div class="story-tab-blue">
        <h4 class="margin-topper">Prologue Missions:</h4>
        <h5 onclick="changeToText(); proOne();">Chapter 1: IT ALL STARTS SOMEWHERE</h5>
        <h5 onclick="changeToText(); proTwo();">Chapter 2: DRIFTING & SHIFTING</h5>
        <h5 onclick="changeToText(); proThree();">Chapter 3: AIN'T NOTHING BUT AN E THING, BABY</h5>
        <h5  onclick="changeToText(); proFour();">Chapter 4: SOLID AS A BRICK</h5>
    </div>
    `
}

function changeToTextTwo() {
    document.querySelector('.story-page-tabs-2').style.display = 'none'
    document.querySelector('.story-tab-select-2').style.display = 'none'
    document.querySelector('.story-page-text-2').style.display = 'block'
}

function changeToMainTwo() {
    document.querySelector('.story-page-tabs-2').style.display = 'block'
    document.querySelector('.story-tab-select-2').style.display = 'none'
    document.querySelector('.story-page-text-2').style.display = 'none'
    document.querySelector('.c-g-btns').style.display = 'flex'
}

function changeToTabTwo() {
    document.querySelector('.story-page-tabs-2').style.display = 'none'
    document.querySelector('.story-tab-select-2').style.display = 'block'
    document.querySelector('.story-page-text-2').style.display = 'none'
    document.querySelector('.c-g-btns').style.display = 'none'

    document.querySelector('.story-tab-select-2').innerHTML = `
    <button  class="back-btn" onclick="changeToMainTwo();"><i class="fa fa-arrow-left"></i></button>
    <div class="story-tab-blue">
        <h4 class="margin-topper">MCM Missions:</h4>
        <h4 onclick="changeToTextTwo(); mcmOne();">Chapter 1: "So you like muscle..."</h4>
        </div>
    `
}

function proOne() {
    document.querySelector('.story-page-text').innerHTML = `
        <button class="back-btn" onclick="changeToTab();"><i class="fa fa-arrow-left"></i></button>
        <h4>PROLOGUE: <br>"It All Starts Somewhere"</h4>
        <p class="missions-page-p">
        It's a dark and rainy night, as you drive on a poorly lit road. 
        </p>
        <p class="missions-page-p">
        As you come around a bend, you stumble upon a car crash....
        </p>
        <p class="missions-page-p">
        You see a person laying by the side of the road. It doesn't look good. You stop the car and approach the scene, not knowing what you will find...
        </p>
        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mystery-man.png" class="person-img"><span class="text-span">STRANGER</span></div></p>
        <p class="p-box chat-box jes-talk"><span class="chat">
            "Please... Help me...."
        </span></p>
        <p class="missions-page-p margin-topper"> 
        You dial 911 and report the accident. It takes at least 15 minutes for the ambulance to arrive. A woman gets out of the ambulance and rushes to the victim.
        </p>
        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/jessy.png" class="person-img"><span class="text-span">JESSY THE EMT</span></div></p>
        <p class="p-box chat-box jes-talk"><span class="chat">
            Wow, that looks like a nasty crash! Good thing you drove by when you did! I got it from here. Please follow me into town. The authorities will want to question you.
            </span></p>
            <p class="missions-page-p third-row">...</p>
            <p class="missions-page-p third-row">
            As you approach the hospital, you park your car and notice a cop already waiting for you. He sees you too and starts walking towards you.
            </p>
          <p class="text-par minus-top"><div class="flexy"><img src="/character-images/harlan.png" class="person-img"><span class="text-span">HARLAN THE SHERIFF</span></div></p>
          <p class="p-box chat-box jes-talk"><span class="chat">
             Good evening, stranger.
            </span></p>
            <p class="text-par minus-top"><div class="flexy"><img src="/character-images/harlan.png" class="person-img"><span class="text-span">HARLAN THE SHERIFF</span></div></p>
            <p class="p-box chat-box jes-talk"><span class="chat">
               Are you the one who called in the accident? My name is Harlan, I'm the Sheriff here in Adrenaline City. Would like to ask you some questions, if you don't mind.
              </span></p>
                        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/harlan.png" class="person-img"><span class="text-span">HARLAN THE SHERIFF</span></div></p>
            <p class="p-box chat-box jes-talk"><span class="chat">
                Did you notice any other vehicles in the area? How long after you arrived did you call 911? Was there any other person you ...
                </span></p>
                <p class="missions-page-p">
                    The questions luckily didn't take too long, you weren't looking for any trouble.  Once the Sheriff was satisfied, you feel tired and decide to go to a Hotel nearby to get some shut-eye.
                </p>
                <p class="text-par minus-top"><div class="flexy"><img src="/character-images/franco.png" class="person-img"><span class="text-span">MR FRANCO: THE HOTEL MANAGER</span></div></p>
                <p class="p-box chat-box jes-talk"><span class="chat">
                   Welcome to Hotel Adrenaline! How may we serve you today, sir? A room for the night? That's no problem at all, sir! That'll be $60, please.
                  </span></p>
                  <p class="missions-page-p third-row">***$60 Deducted***</p>
                  <p class="missions-page-p">	The following morning you decide to check up on the victim, after you had some breakfast. The Hospital receptionist informs you of the room number and you make your way to the elevator. As you approach the room, you notice that there is a person sitting upright on the bed, all bandaged up.
                  </p>
                  <p class="missions-page-p">	
                "At least he's alive", you catch yourself thinking.
                </p>
                <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
                <p class="p-box chat-box jes-talk"><span class="chat">
                    Hey! Look at you! My saviour! Ah, man, that was a close one, dude!
                    </span></p>
                    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
                    <p class="p-box chat-box jes-talk"><span class="chat">
                    I don't think I'd be here today if you hadn't come by! Freddy Froth's the name, put her here
                      </span></p>
                      <p class="missions-page-p margin-topper">You awkwardly shake hands...</p>
                      <p class="missions-page-p">	
                      </p>
                      <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
                      <p class="p-box chat-box jes-talk"><span class="chat">
                      Heck, dude! That's a firm grip you got there! Go easy on Freddy, won't you? Hahaha. Ah man, I really don't think I'd be here if it wasn't for you, stranger.
                        </span></p>
                        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
                        <p class="p-box chat-box jes-talk"><span class="chat">
                         Would you mind to do me a huge favour? My phone broke in the accident and I have no way of letting my people know what happened to me. They'll be really worried! 
                       You don't mind? Man, you're the best!
                          </span></p>
                          <p class="text-par minus-top"><div class="flexy"><img src="/character-images/freddy.jpg" class="person-img"><span class="text-span">FREDDY THE FROTH</span></div></p>
                    <p class="p-box chat-box jes-talk"><span class="chat">
                        Freddy owes you big time! Here, I'll write down the address, in case you can't find the place. Thank you so much, man! Hope you won't have too much trouble finding the place.
                        </span></p>
                        <p class="missions-page-p">
                            You finally find the MCM headquarters. You park your car in front and are immediately approached by a very tough looking guy. "This ought to be fun", you tell yourself.
                            </p>
                        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/micky.jpg" class="person-img"><span class="text-span">MICKY (THE FIST) STABLE</span></div></p>
                        <p class="p-box chat-box jes-talk"><span class="chat">
                            What do you want?
                            </span></p>
                            <p class="missions-page-p">
                            You explain what happened the night before and how Freddy asked you to come here.
                            </p>
                            <p class="text-par minus-top"><div class="flexy"><img src="/character-images/micky.jpg" class="person-img"><span class="text-span">MICKY (THE FIST) STABLE</span></div></p>
                            <p class="p-box chat-box jes-talk"><span class="chat">
                                The name's Micky. Follow me. The Boss will want to see you.
                                </span></p>
                                <p class="missions-page-p">
                                You follow Micky into a massive warehouse filled with muscle cars and people. This looks like a serious place. Curious eyes follow you, as you walk further into the building. You walk up some stairs, still following Micky and he knocks on a door. As he walks in, he says:
                                </p>
                                <p class="text-par minus-top"><div class="flexy"><img src="/character-images/micky.jpg" class="person-img"><span class="text-span">MICKY (THE FIST) STABLE</span></div></p>
                            <p class="p-box chat-box jes-talk"><span class="chat">
                                Wait here.
                                </span></p>
                                <p class="missions-page-p">
                                Through the blinds of the office window, you see Micky talking to someone who has their back turned. After a few seconds, Micky walks back to the floor and ushers you in.
                                </p>
                                <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
                                <p class="p-box chat-box jes-talk"><span class="chat">
                                  Welcome, welcome, stranger. Micky here just filled me in. Thank you for going through the trouble of driving here. It's much appreciated! My name is Donnie. Donnie Solano. Please, please, sit. 
                                  </span></p>
                                  <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
                                    <p class="p-box chat-box jes-talk"><span class="chat">
                                        You want a drink? Micky, pour our guest a drink, please. Would you mind running everything by me again?
                                        </span></p>
                                        <p class="missions-page-p">
                                You explain that you were driving into town when you stumbled upon the car crash and called the ambulance. You also explain that you went to visit him this morning and were asked by Freddy to come here.
                                </p>
                                <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
                                <p class="p-box chat-box jes-talk"><span class="chat">
                                   Thank you brother, thank you so much. Micky, prepare the guys, we will visit Freddy immediately. Can't have him chat up those nurses too much, hahaha.
                                  </span></p>
                                  <p class="text-par minus-top"><div class="flexy"><img src="/character-images/donnie-solano.jpg" class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
                                <p class="p-box chat-box jes-talk"><span class="chat">
                                    That sly devil! Anyways, thank you so much again. Please, I won't take no for an answer. I have something I'd like to give you, as a token for saving Freddy's life. 
                                    </span></p>
        `
}

function proTwo() {
    document.querySelector('.story-page-text').innerHTML = `
    <button class="back-btn" onclick="changeToTab();"><i class="fa fa-arrow-left"></i></button>
    <h4>PROLOGUE: <br>"Drifting & Shifting"</h4>
    <p class="missions-page-p">
    You get in your car and drive off. You soon reach the highway and you're ready to move on. Out of nowhere, a car drifts very closely by you and you have to hit your breaks not to cause an accident. 
        "Who the heck drives like this?", you think to yourself. 
    </p>
    <p class="missions-page-p">
    You barely avoid contact with the rear bumper of the car and come to a screeching halt. Luckily there aren't many other cars around or behind you. Today must be your lucky day. As you start driving again, you can see the car you nearly got hit by, driving slow in front of you. 
    </p>
    <p class="missions-page-p">
    You consider giving them a piece of your mind, but before you can say anything, the driver pulls up besides you, smiles a big grin and waves you over. At first you're not sure if you should give them any attention, but the driver insists you follow them.
      You pull up behind them at the side of the road. 
    </p>
    <p class="missions-page-p">
    As you get out of your car, a woman approaches you, skipping playfully, still with the same grin on her face.
    </p>
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
    <p class="p-box chat-box jes-talk"><span class="chat">
        Hey, what's up you? Can't take a bit of heat on the road? Hahaha. I'm only joking!
     </span></p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
     <p class="p-box chat-box jes-talk"><span class="chat">
        My name is Umi. I was just practicing some new drift moves. You happened to be right there. Hey, do you drift? That rust bucket of yours looks pretty beat! Tell you what? If you join me for a race and beat me, I'll let you have my car. 
    </span></p>
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
    <p class="p-box chat-box jes-talk"><span class="chat">
        How does that sound? All you have to do is beat me in a race, I promise. What do you say?
    </span></p>
    <p class="missions-page-p">
    Seems somebody is in need of a lesson. If she can be this reckless, maybe she should need a lesson in knowing when she's wrong also. 
    </p>
    <p class="missions-page-p">
      You agree to the terms of the race. That car is as good as yours.
     </p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
     <p class="p-box chat-box jes-talk"><span class="chat">
        What? No way! How did you beat me in such a crappy car? Oh man, this is bad! She's gonna kill me... Ehm, look, a deal's a deal. The car will be yours. But please at least have the decency to drop me off first.
         We're not far.
       </span></p>
       <p class="missions-page-p">
        Ugh, what else can happen today? Why not? You decide to drive Umi to where she needs to go. She wasn't lying when she said it wasn't far. Within a few minutes you reach a very modern, very tall building.
        "MATSUMOTO INC.", you read with big letters on the front. 
    </p>
    <p class="missions-page-p">
    As you park your car in front of the building, you see a man and woman approach your car. They look very serious, and very well dressed. You don't know what to expect next.
   </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIKO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk"><span class="chat">
    Umi!
    What have you done this time? Who is this stranger?
     </span></p>
     
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
   <p class="p-box chat-box jes-talk">A thousand apologies Ms. Matsumoto!
     </span></p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/umi.png" class="person-img"><span class="text-span">UMI</span></div></p>
     <p class="p-box chat-box jes-talk">
     I lost my car in a drift race to this stranger and asked them to drop me here before I give them my car. They won fair and square.
       </span></p>
       <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
       <p class="p-box chat-box jes-talk">
       Ichiro, bring Umi inside, while I speak to this stranger.
    My sincere apologies. Umi can be quite the handful. Would you mind telling me what transpired today?
         </span></p>
         <p class="missions-page-p">
         You explain to Ms. Matsumoto what happened on the highway and how you were challenged to a drift race and won.
         </p>
           <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
         <p class="p-box chat-box jes-talk">
         Yes, yes. This sounds like Umi alright. 
           </span></p>
           <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
           <p class="p-box chat-box jes-talk">
           Please accept my humble apologies for her behaviour and what she put you through. But it appears you can hold your own in a race. Umi may be trouble, but she's a great drifter. If you beat her, it means there is more to you than meets the eye. 
             </span></p> 
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk">
   Perhaps one day you would like to return for a cup of tea, and we can discuss your future plans? Consider the option. For now, please accept the keys to her car. I wish you a lovely day.
     </span></p>
     
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/mimiko.png" class="person-img"><span class="text-span">MIMIMO MATSUMOTO</span></div></p>
   <p class="p-box chat-box jes-talk">
   A stranger with drifting skills, could be a valuable asset to our Crew. Let's see if fate wills them back to us.
     </span></p>      
`
}

function proThree() {
    document.querySelector('.story-page-text').innerHTML = `
    <button class="back-btn" onclick="changeToTab();"><i class="fa fa-arrow-left"></i></button>
    <h4>PROLOGUE: <br>"Ain't Nothing But An E thing, baby"</h4>
    <p class="missions-page-p"> 
    This turned out to be a longer day than planned. 
    Perhaps you should relax a bit after all this? 
    You check your phone and see what is going on in this city today.
     You quickly find a car show that you can attend. "Why not?", you think. 
    </p>
    <p class="missions-page-p"> You drive to the location and find a massive crowd, gathered around some insanely beautiful luxury cars. There is music, champagne, beautiful ladies and handsome men everywhere. This might not be such a bad decision at all.
    </p>
    <p class="missions-page-p">  You walk around and taste the atmosphere, you notice a registration booth for today's race. Winner gets a car! Well, you can't miss out on that opportunity! You decide to sign up and continue sampling the event.
   After about half an hour of walking around, you hear an announcement:
   </p>
   <p class="text-par minus-top"><div class="flexy"><img src="/character-images/event.png" class="person-img"><span class="text-span">EVENT ORANIZER</span></div></p>
   <p class="p-box chat-box jes-talk">
   LADIES AND GENTLEMEN!!! WELCOME TO THE ANNUAL EXOTIC CAR SHOW! AS EVERY YEAR, THE EVENT IS BROUGHT TO YOU BY, SPONSERED BY AND HOSTED BY THE ONE AND ONLY, THE SPECTACULAR, THE LADIES MAN, DEMETRIUS HARVELL!!!
     </span></p>
     <p class="missions-page-p">
    As the crowd cheers, a man steps up on the podium, very well dressed, a big smile on his face, arms spread wide.
    </p>
  
    <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
    <p class="p-box chat-box jes-talk">
    Welcome, welcome everyone! Thank you so much for coming again this year!
        </span></p>
        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
        <p class="p-box chat-box jes-talk">
        Like every year, we have organized a spectacular race for everyone. Those who decided to sign up, please bring your cars to the starting line. We will keep the prize car of this year a surprise again, but trust me, you will want to win!
          </span></p>
          <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
   Spectators, please, enjoy the show!
     </span></p>
     
     <p class="missions-page-p">
     The crowd cheers again and you notice some racers driving their cars to the starting line, and since you signed up, you decide to follow them there. 
     </p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/event.png" class="person-img"><span class="text-span">EVENT ORGANIZER</span></div></p>
     <p class="p-box chat-box jes-talk">
       UNBELIEVABLE EVERYONE! WHAT A RACE! WHAT A SPECTACLE! WHO WOULD HAVE GUESSED IT WOULD TURN OUT THIS WAY? WILL THE WINNER OF THE RACE PLEASE JOIN US ON STAGE? </span></p>
       <p class="missions-page-p">As you walk on to the stage, you are greeted by a very attractive lady.</p>
       <p class="text-par minus-top"><div class="flexy"><img src="/character-images/jazmin.png" class="person-img"><span class="text-span">JAZMIN INDI</span></div></p>
      <p class="p-box chat-box jes-talk">
        Congratulations, gorgeous! That was quite the win! You sure know how to handle a car. Please, follow me to meet our host and organizer.</span></p>
        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
     Congratulations stranger! What a race, what a race! What a pleasure to meet you! You can consider yourself always welcome at ECE, we are always looking for new talents to join our crew. </span></p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
     And you look like you have a lot of potential still waiting to be unlocked! Here, take my card and consider joining us. But all that aside, please accept your prize for winning this year's race! Give them a round of applause, ladies and gentlemen! </span></p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/demetrius.png" class="person-img"><span class="text-span">DEMETRIUS (DEMO) HARVELL</span></div></p>
   <p class="p-box chat-box jes-talk">
     A potential ECE racer? Who knows! We would welcome you back with open arms!</span></p>
  
    `
}

function proFour() {
    document.querySelector('.story-page-text').innerHTML = `
    <button class="back-btn" onclick="changeToTab();"><i class="fa fa-arrow-left"></i></button>
    <h4>PROLOGUE: <br>"Solid As A Brick"</h4> 
    <p class="missions-page-p">
    Three cars in a day? What's going on in this city? You think you've seen enough. Time to move on... You drive out of the city, and hit the big stretch of road ahead of you. What a day! You pass a sign with half a mind that says: The Outskirts.
    You think nothing of it and continue your drive. 
        </p>
    <p class="missions-page-p">
   Out of nowhere you hear thundering motors, all around you. You hear them, but as it's dark already, you can't see them. The noise gets louder and louder and before you realize it, you see a large group of bikers in the middle of the road. 
    You hit your breaks and barely avoid a collision. What the...
        </p>
         <p class="missions-page-p">
        An enormous figure with a bald head and huge muscles approaches your car. Without question, he opens the driver side door.
          </p>
         <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brutus.png" class="person-img"><span class="text-span">BRUTUS</span></div></p>
        <p class="p-box chat-box jes-talk">
          Please step out of the car.</span></p>
          <p class="missions-page-p">
          This doesn't look like the man to argue with. You do as your told and a man and woman approach you.
            </p>
           <p class="text-par minus-top"><div class="flexy"><img src="/character-images/samantha.jpg" class="person-img"><span class="text-span">SAMANTHA</span></div></p>
          <p class="p-box chat-box jes-talk">
            Good evening stranger. Where you headed?</span></p>
            <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
   <p class="p-box chat-box jes-talk">
     Sorry bout the theatrics here, stranger. We don't get many people out here. Usually puts us on edge. We mean nothing by it. We're not half bad, hahaha How are you on a bike? Can you handle yourself?</span></p>
     <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
     <p class="p-box chat-box jes-talk">
       How about you humour us and have a little race against Ricky here? If you win, we'll let you have one of the bikes? What do you say, stranger? You will? That's great!</span></p>
       <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
       <p class="p-box chat-box jes-talk">
         Come on everyone, Ricky's about to show this stranger what us bikers are made of! Let's have some fun!</span></p>
         
        <p class="text-par minus-top"><div class="flexy"><img src="/character-images/ricky.png" class="person-img"><span class="text-span">RICKY</span></div></p>
       <p class="p-box chat-box jes-talk">
        How's it going?
         </span></p>
         <p class="text-par minus-top"><div class="flexy"><img src="/character-images/ricky.png" class="person-img"><span class="text-span">RICKY</span></div></p>
         <p class="p-box chat-box jes-talk">
           Here, take this bike and let's see how you handle it. It's the same as mine, so no excuses about one being faster than the other, hahaha! 
           But just remember, I'm not holding back! Show me what you got!
           </span></p>
           <p class="missions-page-p">
           As you mount the bike, a large crowd joins the spectacle and starts cheering, for Ricky of course. Seems you have to prove yourself yet again. Ah well, here we go.
           </p>
           
            <p class="text-par minus-top"><div class="flexy"><img src="/character-images/samantha.jpg" class="person-img"><span class="text-span">SAMANTHA</span></div></p>
           <p class="p-box chat-box jes-talk">
             Ricky, are you ready? Stranger, are you ready? 3... 2... 1... GOOOO!</span></p>
             <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
             <p class="p-box chat-box jes-talk">
               Well would you look at that! Ricky got beaten by a stranger! Didn't expect to see that!</span></p>
               
              <p class="text-par minus-top"><div class="flexy"><img src="/character-images/ricky.png" class="person-img"><span class="text-span">RICKY</span></div></p>
             <p class="p-box chat-box jes-talk">
              What the... Ugh! How?
               </span></p>
               <p class="text-par minus-top"><div class="flexy"><img src="/character-images/samantha.jpg" class="person-img"><span class="text-span">SAMANTHA</span></div></p>
               <p class="p-box chat-box jes-talk">
                 Looks like we have a surprise in town! Well done, stranger!</span></p>
                 <p class="text-par minus-top"><div class="flexy"><img src="/character-images/brick.png" class="person-img"><span class="text-span">BRICKER</span></div></p>
                <p class="p-box chat-box jes-talk">
                    Very impressive, very impressive indeed! We could always use someone who knows how to truly handle a motorcycle! How about you join our crew?
                    </span></p>     
                    <p class="missions-page-p">
                    Some of the most eventful days you've
                    had in a long time. 
                    What's with all these racing crews? There is a lot more going on here than you would think on the surface. Perhaps you should stick around, see what's truly going on here.
                    I mean, it's not like you were going anywhere particular anyway.
                But who to return to?
                You're pretty sure that if you choose one,
                the others won't be so happy with you. 
                </p>                               
    `
}

// mcm functions

function mcmOne() {
    document.querySelector('.story-page-text-2').innerHTML = `
    <button class="back-btn" onclick="changeToTabTwo();"><i class="fa fa-arrow-left"></i></button>
    <h4 onclick="changeToTextTwo(); mcmOne();">Chapter 1: "So you like muscle..."</h4>
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
   <p class="text-par minus-top"><div class="flexy">
   <img src="/character-images/saline.jpg" 
   class="person-img"><span class="text-span">SALINE</span></div></p>
   <p class="p-box chat-box jes-talk">
   Absolutely! Thank you so much for that.
    We wouldn't know what to do without him around here.
    So, are you ready, stranger?
   </span></p>

   <p class="missions-page-p margin-topper">Ready for what, you think to yourself.</p>
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
    <p class="text-par minus-top"><div class="flexy">
    <img src="/character-images/donnie-solano.jpg" 
    class="person-img"><span class="text-span">DONNIE SOLANO</span></div></p>
    <p class="p-box chat-box jes-talk">
    WOW! I guess we underestimated you a little! 
    That was some fine driving!</span></p>
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
  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/saline.jpg" 
  class="person-img"><span class="text-span">SALINE</span></div></p>
  <p class="p-box chat-box jes-talk">
  Hey! No fair! How did you get passed me in that last turn?</span></p>
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
  
  <p class="text-par minus-top"><div class="flexy">
  <img src="/character-images/joey.jpg" 
  class="person-img"><span class="text-span">JOEY SOLANO</span></div></p>
  <p class="p-box chat-box jes-talk">
  Alright, but I want to see what they are truly made of. 
  Let's take it to the HIGHWAYS.
  </span></p>
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

    `
}