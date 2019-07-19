// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

 // Create a list that holds all of your cards
var cards = ['fa-bomb','fa-bomb',
             'fa-paper-plane-o','fa-paper-plane-o',
             'fa-anchor','fa-anchor',
             'fa-bolt','fa-bolt',
             'fa-smile-o','fa-smile-o',
             'fa-cube','fa-cube',
             'fa-leaf','fa-leaf',
             'fa-bicycle','fa-bicycle'];

// Display the cards on the page

function generateCard(card){
    return `<li class= "card" data-card= "${card}"><i class= "fa ${card}"></i></li>`;
}

function startGame() {
    var deck = document.querySelector('.deck');
    var cardHTML = shuffle(cards).map(function(card){
      return generateCard(card);
    });
    deck.innerHTML = cardHTML.join('');
}

startGame();

//Making all cards visible
var allcards = document.querySelectorAll('.card');
var openCards = [];
let matchedArray = [];
let moveCount = 0;
let starCount;

//Message poping function
function popmsg(){
  var message = document.querySelector('.msg1');
  message.innerHTML = "Congratulations!!! You Won.";
  var message2 = document.querySelector('.popup');
  message2.innerHTML = "You took "+moveCount+" moves and "+seconds+" seconds. You earned "+starCount+" stars.";
  var deck = document.querySelector('.deck');
  deck.remove();
  var score = document.querySelector('.score-panel');
  score.remove();
  buttonFunction();
  var image = document.querySelector('.image');
  image.setAttribute('src','img/clapping.gif');
}

function buttonFunction(){
  var button = document.createElement("button");
  button.innerText = "Play Again";
  var append = document.querySelector('.buttonFn');
  append.appendChild(button);
  button.addEventListener('click',function(){
    location.reload();
  });
  button.style.backgroundColor = "#00994d";
  button.style.color = "white";
  button.style.fontSize = "18px";
  button.style.cursor = "pointer";
  button.style.marginTop = "2vw";
  button.style.marginLeft = "35%";
}

//Restart function
function restart(){
  let restart = document.querySelector('.restart');
  restart.addEventListener('click',function (){
    location.reload();
  });
}

//Timer setting function
let stopTimer = document.querySelector('.timer');
let time = 0;
let seconds=0;

//Start time
function startClock () {
  time = setInterval ( function (){
    seconds++;
    stopTimer.innerHTML = seconds + ' s';
  }, 1000);
}

//Stop the time function
function stopClock (){
  clearInterval (time);
}

allcards.forEach(function(card){
  card.addEventListener("click",function (eventCard){
    if(moveCount === 0){
      startClock();
    }
     if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')){
       openCards.push(card);
       card.classList.add("open","show");
       //Game restart
       restart();
        //Selecting only two cards at a time
        if(openCards.length == 2){
        //Move counter
          let countMoves = document.querySelector('.moves');
          moveCount++;
          countMoves.innerHTML = moveCount;
          console.log(countMoves);
          //Star rating
          if(moveCount<=15){
            starCount = 3;
          }
          if(moveCount===16){
            let remove1 = document.querySelector('.star1');
            remove1.remove();
            starCount = 2;
          } else if(moveCount===30){
          let remove2 = document.querySelector('.star2');
          remove2.remove();
          starCount = 1;
          }
          //Card matching
          if(openCards[0].dataset.card === openCards[1].dataset.card){
            openCards[0].classList.add('match');
            openCards[0].classList.add('open');
            openCards[0].classList.add('show');

            openCards[1].classList.add('match');
            openCards[1].classList.add('open');
            openCards[1].classList.add('show');

            openCards = [];
            //Winning game, message popup
            matchedArray.push(openCards[0],openCards[1]);
            if(cards.length === matchedArray.length){
              setTimeout(function(){
                stopClock(); //Stopping timer
                popmsg();   //Poping message
                },700);
              }
            //Card mismatch
            } else {
              setTimeout(function() {
                openCards.forEach(function(card) {
                  card.classList.remove('open','show');
                  });
                openCards = [];
                console.log(openCards);
              }, 500);
          }
        }
     }
  });
});
