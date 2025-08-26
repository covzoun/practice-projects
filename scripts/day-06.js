const myArray = [0, 1, 2, 3, 4];

function destructureArray(array) {
  const [first = 'default', second = 'default', ...rest] = array;

  if (array.length === 0) {
    return('No Value');
  }

  else {
    return { first, second, rest };
  }
}

const value = destructureArray(myArray);

console.log(value.first);
console.log(value.second);
console.log(value.rest);



/*------------------------*/



const myTodoList = [
  {
    task: 'study',
    done: false
  },

  {
    task: 'code',
    done: true
  },

  {
    task: 'draw',
    done: false
  },
];

const listOfPTasks = myTodoList.filter((value, index) => {
  return value.done === false;
});

  const listOfDTasks = myTodoList.filter((value, index) => {
  return value.done === true;
});

console.log(listOfPTasks);
console.log(listOfDTasks);


const pendingTasks = listOfPTasks.map(getTaskName);
const doneTasks = listOfDTasks.map(getTaskName);

console.log(pendingTasks);
console.log(doneTasks);

function getTaskName(value) {
  return value.task
}

const listPending = document.querySelector('.list-pending');
const listDone = document.querySelector('.list-done');

function updateHTML(array, list) {
  for (i = 0; i < array.length; i ++) {
    list.innerHTML += `<p>${array[i]}</p>`;
  }
}

updateHTML(pendingTasks, listPending);
updateHTML(doneTasks, listDone);



/*------------------------*/



const time = document.querySelector('.time-display');
let timeCount = 10;
let inervalID = '';

function updateTimer() {
  if (timeCount > 0) {
    time.innerHTML = `<p>${timeCount = Number(timeCount) - 1}</p>`;
    console.log(timeCount);
  } else {
    timeCount = 10;
    clearInterval(intervalID);
  }
}

function startTimer() {
  time.innerHTML = `<p>${timeCount}</p>`;
  intervalID = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalID);
}

const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);



/*------------------------*/



const getButtons = document.querySelectorAll('.color-button');


getButtons.forEach(button => {
  button.addEventListener('click', setBG);
})

function setBG(event) {
  document.body.style.backgroundColor = event.target.dataset.color;
}

const resetButton = document.querySelector('.reset-button')
  
resetButton.addEventListener('click', resetListener);

function resetListener(event) {
  document.body.style.backgroundColor = 'white';
  getButtons.forEach(button => {
    button.removeEventListener('click', setBG);
  })
}

const enableButtons = document.querySelector('.enable-button');

enableButtons.addEventListener('click', () => {
  getButtons.forEach(button => {
    button.addEventListener('click', setBG);
  })
})



/*------------------------*/



function createMultiplier(multiplier, callback) {
  return function(num) {
    const result = num * multiplier;
    return result;
  }
}

const timesTwo = createMultiplier(2); 
console.log(timesTwo(100));

const timesThree = createMultiplier(3); 
console.log(timesThree(100));

const tenAndLog = createMultiplier (10, function(value) {
  console.log("Callback says: ", value);
})

console.log(tenAndLog(10));