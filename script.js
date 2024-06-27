import { animals } from "./animals.js";

// Main variables
const input = document.querySelector('#animalInput');
const reset = document.querySelector('#reset');
const submit = document.querySelector('#submit');
const allHints = document.querySelectorAll('.hintInText');
const hintsList = document.querySelector('#hintsList');
const scoreCounter = document.querySelector('#counter');
const feedbackText = document.querySelector('#feedbackArea')

let theAnimal = animals[Math.floor(Math.random() * animals.length)]



//Start of the Game Parameters
// alert(`this is the animal: ${theAnimal}`)
let score = 0;
scoreCounter.innerHTML = `Your Score is: 000`




//Submit button events
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && input.value != '') {
      playGame();
    }
  });

submit.addEventListener('click', playGame = () => {

    if (input.value.toLowerCase() === theAnimal) {
        alert('You Win!!!!!')
        input.value = '';
        allHints.forEach(hint => hint.remove());
        hintsList.innerHTML = '';
        score += 100
        scoreCounter.innerHTML = `Your Score is: ${score}`
        feedbackText.innerText = ''
        theAnimal = animals[Math.floor(Math.random() * 25)]
        // alert(`this is the animal: ${theAnimal}`)

    }

    //debug_menu
    if (input.value.toLowerCase === 'Debug') {
        input.value = '';
        feedbackText.innerText = ''
        alert(`DEBUG MENU:
        1. type 'Answer' for answer
        2. type 'Reset' for manual reset`)
    }

    if (input.value.toLowerCase() === 'Answer') {
        input.value = '';
        feedbackText.innerText = '';
        setTimeout( alert(`this is the answer ${theAnimal}`), 1000);
    }


    else {
        if (hintsList.children.length <= 6 && input.value != 'Answer' && input.value != 'Debug' && input.value != 'Reset' && input.value != '') {
            const hint = document.createElement('li');
            hint.innerText = 'this is a hint';
            hintsList.appendChild(hint);
            hint.style.margin = '.4em';
            hint.setAttribute('class', 'hintInText');
            input.value = '';
            feedbackText.innerText = 'Wrong guess, please try again'
            hintsFunction()

        }
    }
});


//Reset Button Events
reset.addEventListener('click', function () {
    input.value = '';
    allHints.forEach(hint => hint.remove());
    hintsList.innerHTML = '';
    randAnimalReset()
});

//////////////////////////////////////////////////////////////////////////////////////
//Reset counter and give new animal
const randAnimalReset = () => {
    score = 0;
    scoreCounter.innerHTML = `Your Score is: 000`
    theAnimal = animals[Math.floor(Math.random() * 25)]
    // alert(`this is the animal: ${theAnimal}`)
    feedbackText.innerText = ''
}

const hintsFunction = () => {
    const hints = document.querySelectorAll('.hintInText');

    hints[0].innerHTML = `The first letter of the animal's name is ${theAnimal.name.charAt(0)}`;
    hints[1].innerText = (theAnimal.habitat === "water") ? 'This animal lives in the water' : 'This animal doesn\'t live in the water';
    hints[2].innerText = (theAnimal.habitat === "air") ? 'This animal can fly' : 'This animal cannot fly';
    hints[3].innerHTML = `The second letter of the animal's name is ${theAnimal.name.charAt(1)}`;
    hints[4].innerHTML = `Random fact: ${theAnimal.fact}`; 
    hints[5].innerHTML = `Another random fact: ${theAnimal.fact2}`; 
    hints[6].innerHTML = `Sorry, no more hints ¯\\_(ツ)_/¯`;
};









        // const giveFeedback = document.createElement('p');
        // giveFeedback.setAttribute('class', 'feedbackText');
        // giveFeedback.innerText = 'Wrong guess, try again!';
        // giveFeedback.style.color = 'red';
        // giveFeedback.style.fontSize = '.4em'
        // guessInput.appendChild(giveFeedback);



