const userInput = document.querySelector('.user-input');

function scanText() {
  const input = userInput.value;
  const wordSplit = input.split(' ');
  const wordCount = wordSplit.length;
  const characterCount = input.length;

  console.log(wordSplit);
  console.log(wordCount);
  console.log(characterCount);
}



/*------------------------*/



const num1 = document.querySelector('.num-1-input');
const num2 = document.querySelector('.num-2-input');

function addNumbers() {
  const input1 = Number(num1.value);
  const input2 = Number(num2.value);

  console.log(input1);
  console.log(input2);

  let total = input1 + input2;

  console.log(total);

}



/*------------------------*/



document.body.onkeydown = function(event) {
  const pressedKey = event.key;


  if (pressedKey === 'r') {
    document.body.style.backgroundColor = 'red';
    console.log(`Key pressed: ${pressedKey}`);
  }

  else if (pressedKey === 'g') {
    document.body.style.backgroundColor = 'green';
    console.log(`Key pressed: ${pressedKey}`);
  }

  else if (pressedKey === 'b') {
    document.body.style.backgroundColor = 'blue';
    console.log(`Key pressed: ${pressedKey}`);
  }

  else {
    document.body.style.backgroundColor = 'white';
  }
};



/*------------------------*/



let userList = [];
const listInput = document.querySelector('.array-input');

function addToList() {
  let item = listInput.value;

  userList.push(item);
  listInput.value = '';

  console.log(userList);

  const uoList = document.querySelector('.user-list');
  uoList.innerHTML = '';  

  for (let i = 0; i < userList.length; i++) {
    const listItem = userList[i];

    uoList.innerHTML += `<li>${listItem}</li>`;
  }
}



/*------------------------*/



function guessNumber() {
  const computerNumber = Math.floor(Math.random() * 11);
  const userGuess = Number(document.querySelector('.user-guess').value);

  console.log(computerNumber);

  if (userGuess === computerNumber) {
    console.log('Correct!');
  } else {
    console.log('Wrong.')
  }
}