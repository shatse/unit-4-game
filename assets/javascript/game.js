
let goalNum
let currNum
let wins = 0
let losses = 0
let isDone = false

const init = _ => {
  isDone = false
  currNum = 0
  goalNum = Math.floor(Math.random() * 100) + 1
  document.querySelector('#goalNum').textContent = `Goal Number : ${goalNum}`
  document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
  document.querySelector('#result').textContent = ''
  document.querySelector('#buttons').innerHTML = ''

  for (let i = 0; i < 3; i++) {
    let btnElem = document.createElement('button')
    btnElem.textContent = '???'
    btnElem.className = 'numBtn'
    btnElem.setAttribute('data-value', Math.floor(Math.random() * 20) + 1)
    document.querySelector('#buttons').append(btnElem)
  }
}

document.addEventListener('click', e => {
  if (e.target.className === 'numBtn' && !isDone) {
    currNum += parseInt(e.target.dataset.value)
    document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
    if (currNum === goalNum) {
      document.querySelector('#result').textContent = 'Congrats! You Won!'
      wins++
      document.querySelector('#wins').textContent = `Wins : ${wins}`
      isDone = true
    } else if (currNum > goalNum) {
      document.querySelector('#result').textContent = 'Congrats! You Lost! Good Job!'
      losses++
      document.querySelector('#losses').textContent = `Losses: ${losses}`
      isDone = true
    } else {
      document.querySelector('#result').textContent = 'Keep adding numbers...'
    }
  }
})

init()
