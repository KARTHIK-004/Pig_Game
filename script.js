'use strict';

const Dice = Math.trunc(Math.random()*6)+1

// Selecting Elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnhold = document.querySelector('.btn--hold')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')

// Starting Condition

let score,currentScore,activeplayer,playing
const init = function(){
    playing = true
    score = [0,0]
    currentScore = 0
    activeplayer = 0
    score0El.textContent=0
    score1El.textContent=0
    current0El.textContent=0
    current1El.textContent=0
    diceEl.classList.add('hidden')
    document.querySelector('.player--'+activeplayer).classList.remove('player--winner')
    document.querySelector('.player--'+activeplayer).classList.remove('player--active')
    player0El.classList.add('player--active')
}

init()


const switchPlayer = function(){
    document.getElementById('current--'+activeplayer).textContent = 0
        currentScore = 0 
        activeplayer = activeplayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
}

// Roll Dice Functionality
btnRoll.addEventListener('click', function(){
    if(playing){
        const Dice = Math.trunc(Math.random()*6)+1
        diceEl.classList.remove('hidden')
        diceEl.src = 'dice-'+Dice+'.png'

        if(Dice!==1){
            currentScore=currentScore+Dice
            document.getElementById('current--'+activeplayer).textContent=currentScore
        }else{
        switchPlayer()
        }
    }   
})

btnhold.addEventListener('click', function(){
    if(playing){
    score[activeplayer] += currentScore
    document.getElementById('score--'+activeplayer).textContent = score[activeplayer]

        if(score[activeplayer] >= 20){
            playing = false 
            diceEl.classList.add('hidden')
            document.querySelector('.player--'+activeplayer).classList.add('player--winner')
            document.querySelector('.player--'+activeplayer).classList.remove('player--active')
            

        }else{
            switchPlayer()
        }   
    }
})

btnNew.addEventListener('click', init)






