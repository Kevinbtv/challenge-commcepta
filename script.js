const dados = [
  {
    id: 1,
    foto: 'foto-alberto.png',
    nome: 'Alberto',
    cargo: 'Presidente',
    idade: 20
  },
  {
    id: 2,
    foto: 'foto-bruno.png',
    nome: 'Bruno',
    cargo: 'Diretor',
    idade: 21
  },
  {
    id: 3,
    foto: 'foto-helena.png',
    nome: 'Helena',
    cargo: 'Gerente',
    idade: 22
  },
  {
    id: 4,
    foto: 'foto-fernanda.png',
    nome: 'Fernanda',
    cargo: 'Desenvolvedor',
    idade: 23
  },
  {
    id: 5,
    foto: 'foto-diego.png',
    nome: 'Diego',
    cargo: 'Desenvolvedor',
    idade: 24
  },
  {
    id: 6,
    foto: 'foto-iris.png',
    nome: 'Iris',
    cargo: 'Desenvolvedor',
    idade: 25
  },
  {
    id: 7,
    foto: 'foto-hugo.png',
    nome: 'Hugo',
    cargo: 'Desenvolvedor',
    idade: 26
  },
  {
    id: 8,
    foto: 'foto-gustavo.png',
    nome: 'Gustavo',
    cargo: 'Desenvolvedor',
    idade: 27
  },
  {
    id: 9,
    foto: 'foto-gabriel.png',
    nome: 'Gabriel',
    cargo: 'Desenvolvedor',
    idade: 28
  }
]

document.querySelector('.toggle').addEventListener('click', function () {
  document.querySelector('.nav').style.display = 'flex'
  document.querySelector('.principal').style.display = 'none'
})

document.querySelector('.toggle-x').addEventListener('click', function () {
  document.querySelector('.nav').style.display = 'none'
  document.querySelector('.principal').style.display = ''
})

document.querySelectorAll('.card').forEach(function (card, i) {
  card.addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('hidden-div')

    document.querySelector('.modal').innerHTML = ''

    const html = `
    <div class="modalScript">
        <img src=${dados[i].foto} alt="" />
        <div>
          <p>Nome: ${dados[i].nome}</p>
          <p>Cargo: ${dados[i].cargo}</p>
          <p>Idade: ${dados[i].idade}</p>
        </div>
      </div>
    `

    document.querySelector('.modal').insertAdjacentHTML('afterbegin', html)
  })
})
