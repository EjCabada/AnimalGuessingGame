import { animals } from "animals.js";

// Main variables
const input = document.querySelector('#animalInput');
const reset = document.querySelector('#reset');
const submit = document.querySelector('#submit');
const allHints = document.querySelectorAll('.hintInText');
const hintsList = document.querySelector('#hintsList');
const scoreCounter = document.querySelector('#counter');
const feedbackText = document.querySelector('#feedbackArea')

let theAnimal = animals[Math.floor(Math.random() * 30)]



//Start of the Game Parameters
// alert(`this is the animal: ${theAnimal}`)
let score = 000
scoreCounter.innerHTML = `Your Score is: 000`




//Submit button events
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && input.value != '') {
      playGame();
    }
  });

submit.addEventListener('click', playGame = () => {

    if (input.value === theAnimal) {
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

    // debug
    if (input.value === 'Debug') {
    input.value = '';
    feedbackText.innerText = ''
    alert(`DEBUG MENU:
   1. type 'Answer' for answer
   2. type 'Reset' for manual reset`)
}

    let explain = () => {
    alert(`this is the answer ${theAnimal}`);
};

    if (input.value === 'Answer') {
    input.value = '';
    feedbackText.innerText = '';
    setTimeout(explain, 1000);
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
    score = 000
    scoreCounter.innerHTML = `Your Score is: 000`
    theAnimal = animals[Math.floor(Math.random() * 25)]
    // alert(`this is the animal: ${theAnimal}`)
    feedbackText.innerText = ''
}

const hintsFunction = () => {
    let hint1 = document.querySelectorAll('.hintInText')[0];
    hint1.innerHTML = `The first letter of the animal's name ${theAnimal.charAt(0)}`;
    let hint2 = document.querySelectorAll('.hintInText')[1];
    if (["Whale", "Dolphin", "Shark", "Otter", "Seal"].includes(theAnimal)) {
        hint2.innerText = 'This animal lives in the ocean';
    } else {
        hint2.innerText = 'This animal doesn\'t live in the ocean';
    }
    let hint3 = document.querySelectorAll('.hintInText')[2];
    if (theAnimal == "Pigeon" || theAnimal == "Parrot" || theAnimal == "Eagle" || theAnimal == "Woodpecker" || theAnimal == "Crow") {
        hint3.innerText = 'This animal is a bird';
    } else {
        hint3.innerText = 'This animal is not a bird';
    }
    let hint4 = document.querySelectorAll('.hintInText')[3];
    hint4.innerHTML = `The second letter of the animal's name ${theAnimal.charAt(1)}`;
    let hint5 = document.querySelectorAll('.hintInText')[4];
    hint5.innerHTML = `The name of the animal is ${theAnimal.length} leters long`;
    let hint6 = document.querySelectorAll('.hintInText')[5];
    hint6.innerHTML = `The third letter of the animal's name ${theAnimal.charAt(2)}`;
    let hint7 = document.querySelectorAll('.hintInText')[6];
    hint7.innerHTML = `Sorry no more hints ¯\\_(ツ)_/¯`;
}









        // const giveFeedback = document.createElement('p');
        // giveFeedback.setAttribute('class', 'feedbackText');
        // giveFeedback.innerText = 'Wrong guess, try again!';
        // giveFeedback.style.color = 'red';
        // giveFeedback.style.fontSize = '.4em'
        // guessInput.appendChild(giveFeedback);



