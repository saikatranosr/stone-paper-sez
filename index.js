//game Variables
let lifes = 10
let play = 0; //How many times I've played out of $maxPlay
let bot = 0
let you = 0
let list1 = {stone: "&#9994;", paper: "&#9995;", sez: "&#9996;"}
let list2 = ["stone", "paper", "sez"]
let playing = new Audio('playing.mp3')
let click = new Audio('click.wav')

//Functuions
function startGame(userValue){
      botValue = list2[Math.round(Math.random() * ((2-0)+0))]
           play++
           round.innerText = `${play}/${lifes}`
           renderEmoji(userValue, botValue)
        if (botValue == userValue){
            // alert("Draw")
            setTimeout(function() {myAlert.render('Draw', 'off')}, 1500);
            setTimeout(function() {myAlert.close()}, 2500);
            setTimeout(function() {winner()}, 3500);
            
            
        }
        else if ((botValue=="stone" && userValue=="paper") || (botValue=="sez" && userValue=="stone") || (botValue=="paper" && userValue=="sez")){
            you+=1
            
            setTimeout(function() {
                myAlert.render('You win', 'off')
            yourScore.innerText = you
                
            }, 1500);
            setTimeout(function() {myAlert.close()}, 2500);
            setTimeout(function() {winner()}, 3500);
        }
        else{
            bot+=1
            // alert("Winner: Yantra")
            setTimeout(function() {
                myAlert.render('Saikat wins', 'off')
                botScore.innerText = bot
                
            }, 1500);
            setTimeout(function() {myAlert.close()}, 2500);
            setTimeout(function() {winner()}, 3500);
            
            
        }
}
function clicked(userValue){
    startGame(userValue)
    click.play()
    // console.log(e)
}
function winner(){
 if(play == lifes){
   // alert("hi")
    if (bot>you){myAlert.render('Opps! Saikat is the winner.')}
    else if(bot<you){myAlert.render(`Congratualtions! You won the game.\nYou:${you}, Saikat:${bot}`)}
    else{text2 = myAlert.render('Match Draw!')}
    play = 0;
    bot = 0;
    you = 0;
    round.innerText = `${play}/${lifes}`;
    yourScore.innerText = you
    botScore.innerText = bot
}}
function Alert(){
    this.render = function(text, btn){
         alrt.innerText = text
        alertScrn.style.display = 'flex'
        alertScrn.style.animation = 'render .5s'
        if (btn == 'off'){
        myclose.style.display = 'none'
        alrt.style.alignItems = 'center'
        alrt.style.justifyContent = 'center'
        alrt.style.height = '40vmin'
        }
        else{
        myclose.style.display = 'block'
        alrt.style.alignItems = 'center'
        alrt.style.justifyContent = 'center'
        }
    }
    this.close = function(){
        alertScrn.style.animation = 'close .5s'
    setTimeout(()=>{alertScrn.style.display = 'none'}, 500);   
}}
function renderEmoji(userValue, botValue){
    yourEmoji.innerHTML = list1[userValue]
    botEmoji.innerHTML = list1[botValue]
    yourEmoji.style.animation = "youremoji 2s"
    botEmoji.style.animation = "botemoji 2s"
    setTimeout(function() {
    yourEmoji.style.animation = "none"
    botEmoji.style.animation = "none"
    }, 2000);
}
let myAlert = new Alert()
// Main Scirpt
playing.play()
playing.loop = true;
playing.volume = 0.4
stone.addEventListener('click', ()=>{clicked("stone")});
paper.addEventListener('click', ()=>{clicked("paper")});
sez.addEventListener('click', ()=>{clicked("sez")});

//  Happy Upbeat Ukulele by MaxKoMusic | https://maxkomusic.com/
// Music promoted by https://www.chosic.com/
// Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
// https://creativecommons.org/licenses/by-sa/3.0/
