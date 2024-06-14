let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
var sorte = document.querySelector(".sorte p");


function handleClick(event) {
  event.preventDefault()
  let randomNumber = Math.round(Math.random() * 10)
  
  if (randomNumber == 0) {
    sorte.innerText = 'A vida trará coisas boas se tiver paciência.'
  } else if (randomNumber == 1) {
    sorte.innerText = 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'
  } else if (randomNumber == 2) {
    sorte.innerText = 'Não compense na ira o que lhe falta na razão.'
  } else if (randomNumber == 3) {
    sorte.innerText = 'Defeitos e virtudes são apenas dois lados da mesma moeda.'
  } else if (randomNumber == 4) {
    sorte.innerText = 'A maior de todas as torres começa no solo.'
  } else if (randomNumber == 5) {
    sorte.innerText = 'Não há que ser forte. Há que ser flexível.'
  } else if (randomNumber == 6) {
    sorte.innerText = 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'
  } else if (randomNumber == 7) {
    sorte.innerText = 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
  } else if (randomNumber == 8) {
    sorte.innerText = 'A juventude não é uma época da vida, é um estado de espírito.'
  } else if (randomNumber == 9) {
    sorte.innerText = 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
  } else if (randomNumber == 9) {
    sorte.innerText = 'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.'
  }
  
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
  
}


function exitClick(event) {
  event.preventDefault()
  
  randomNumber = 0

  screen1.classList.remove("hide");
  screen2.classList.add("hide");
}


