// Main variables
const input = document.querySelector('#animalInput');
const reset = document.querySelector('#reset');
const submit = document.querySelector('#submit');
const allHints = document.querySelectorAll('.hintInText');
const hintsList = document.querySelector('#hintsList');
const animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Kangaroo",
    "Panda",
    "Gorilla",
    "Monkey",
    "Hippopotamus",
    "Bear",
    "Zebra",
    "Raccoon",
    "Squirrel",
    "Deer",
    "Fox",
    "Wolf",
    "Leopard",
    "Cheetah",
    "Jaguar",
    "Puma",
    "Otter",
    "Seal",
    "Whale",
    "Dolphin",
    "Shark",
    "Pigeon",
    "Parrot",
    "Eagle",
    "Woodpecker",
    "Crow"
];
let theAnimal = animals[Math.floor(Math.random() * 30)]



//Start of the Game or Reload
alert(`this is the animal: ${theAnimal}`)




//Submit button events
submit.addEventListener('click', function () {

    if (input.value === theAnimal) {
        alert('You Win!!!!!')
        input.value = '';
        allHints.forEach(hint => hint.remove());
        hintsList.innerHTML = '';
        theAnimal = animals[Math.floor(Math.random() * 25)]
        alert(`this is the animal: ${theAnimal}`)

    }
    else {
        if (hintsList.children.length <= 6) {
            const hint = document.createElement('li');
            hint.innerText = 'this is a hint';
            hintsList.appendChild(hint);
            hint.style.margin = '.4em';
            hint.setAttribute('class', 'hintInText');
            input.value = '';

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
    }
});




//Reset Button Events
reset.addEventListener('click', function () {
    input.value = '';
    allHints.forEach(hint => hint.remove());
    hintsList.innerHTML = '';
    theAnimal = animals[Math.floor(Math.random() * 25)]
    alert(`this is the animal: ${theAnimal}`)
});
