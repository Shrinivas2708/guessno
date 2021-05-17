let secretNo = document.querySelector('.number')
secretNo= Math.trunc(Math.random()*20)+1;

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

let score = 20;
let highScore = 0;

// console.log(secretNo)

const displyMessage = function (message){
    document.querySelector('.message').textContent=message;
}

const displyNumber = function(number){
    document.querySelector('.number').textContent=number;
}

const displyScore = function(score){
    document.querySelector('.score').textContent=score;
}

let check = function() {
        const guess = Number(document.querySelector('.guess').value)
        // console.log(typeof value , value)
    
        if(!guess){
            displyMessage("Enter a Guess !")
        }else if(guess === secretNo){
            displyMessage("💹 You Guessed Correct !")
         document.body.style.backgroundColor='#60b347'
         displyNumber(secretNo)
         document.querySelector('.number').style.width='30rem'

         if(score > highScore){
            document.querySelector('.highscore').textContent=score;
         }
       }else if(guess !== secretNo){
        if(score > 1){
            displyMessage(guess > secretNo ? '📈 Too High' : '📉 Too Low');
            
            score--;
            displyScore(score);
           }
           else {
            displyMessage("Aalas ! You lost the game !")
            displyScore(0);
            document.body.style.backgroundColor="red"
            displyNumber(secretNo)
            document.querySelector('.number').style.width='30rem'
           }
       }
       
}

document.querySelector('.check').addEventListener('click' , check);

document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    secretNo= Math.trunc(Math.random()*20)+1;
    displyMessage("Start guessing...");
    displyScore(score);
    displyNumber("?")
    document.querySelector('.guess').value= ""
    document.body.style.backgroundColor="#222"
    document.querySelector('.number').style.width='15rem'
})

document.body.addEventListener('keydown', function(e){
    // console.log(e.key)
    if(e.key === 'Enter'){
        check();
    }
})



const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
