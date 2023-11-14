// objetos

const user = {
  nickname: "shell",
  name: "Diego",
  idade: 27,
  address: {
    street: "Rua teste",
    number: 176,
  },
}

// Desestruturação
function mostraIdade({ idade }) {
  return idade
}

//const { name, idade, ...rest } = user

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [first, second, ...rest] = array

document.body.innerText = JSON.stringify({ first, second, rest })
