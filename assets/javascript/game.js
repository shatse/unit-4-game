
// let goalNum
// let currNum
// let wins = 0
// let losses = 0
// let isDone = false

// const init = _ => {
//   isDone = false
//   currNum = 0
//   goalNum = Math.floor(Math.random() * 100) + 1
//   document.querySelector('#goalNum').textContent = `Goal Number : ${goalNum}`
//   document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
//   document.querySelector('#result').textContent = ''
//   document.querySelector('#buttons').innerHTML = ''

//   for (let i = 0; i < 3; i++) {
//     let btnElem = document.createElement('button')
//     btnElem.textContent = '???'
//     btnElem.className = 'numBtn'
//     btnElem.setAttribute('data-value', Math.floor(Math.random() * 20) + 1)
//     document.querySelector('#buttons').append(btnElem)
//   }
// }

// document.addEventListener('click', e => {
//   if (e.target.className === 'numBtn' && !isDone) {
//     currNum += parseInt(e.target.dataset.value)
//     document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
//     if (currNum === goalNum) {
//       document.querySelector('#result').textContent = 'Congrats! You Won!'
//       wins++
//       document.querySelector('#wins').textContent = `Wins : ${wins}`
//       isDone = true
//     } else if (currNum > goalNum) {
//       document.querySelector('#result').textContent = 'Congrats! You Lost! Good Job!'
//       losses++
//       document.querySelector('#losses').textContent = `Losses: ${losses}`
//       isDone = true
//     } else {
//       document.querySelector('#result').textContent = 'Keep adding numbers...'
//     }
//   }
// })

// init()


let goalNum;
let currNum;
let wins = 0;
let losses = 0;
let isDone = false;
var crystal1;
var crystal2;
var crystal3;

function gameStart() {
  // creating a random number for starting goal
  goalNum = Math.floor(Math.random() * 80) + 1;
  currNum = 0;
  isDone = false;
  // giving each crystal a random number between _ number 
  crystal1 = Math.floor(Math.random() * 20) + 1;
  crystal2 = Math.floor(Math.random() * 15) + 1;
  crystal3 = Math.floor(Math.random() * 10) + 1;
  // using jquery to set an attribute to the buttons, the value is defined in line above for each crystal
  $('#crystal1').attr('data-value', crystal1);
  $('#crystal2').attr('data-value', crystal2);
  $('#crystal3').attr('data-value', crystal3);
  // use jquery to change html divs for scores
  $('#currNum').html('Current Score: ' + currNum);
  $('#goalNum').html('Goal Number: ' + goalNum);
  $('#results').html('');
}

$('.buttons').click(function() {
  console.log($(this).attr('data-value'));
  // added numbers to currNum with values set on each button. turned string into integer
  currNum += parseInt($(this).attr('data-value'));
  console.log(currNum);
  $('#currNum').html('Current Score: ' + currNum);
  if (currNum === goalNum) {
    // user cant click
    // add to wins
    // display congrats message
    wins ++;
    $('#wins').html('Wins: ' + wins);
    $('#result').html('Congrats! You Won!');
  }
  else if (currNum > goalNum) {
    // add to losses
    // display losing message
    losses ++;
    $('#losses').html('Losses: ' + losses);
    $('#result').html('Congrats! You Lose.');
  }

  

});

gameStart();