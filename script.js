const cards = document.querySelector('.cards')
const abrirIcon = document.querySelector('.toggle')
const fecharIcon = document.querySelector('.toggle-x')
const container = document.querySelector('.principal')
const navMobile = document.querySelector('.navMobile')
const modal = document.querySelector('.modal')
const listas = document.querySelectorAll('.listasMob')

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
    cargo: 'Desenvolvedora',
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
    cargo: 'Desenvolvedora',
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

listas.forEach(listas =>
  listas.addEventListener('click', () => {
    navMobile.style.display = 'none'
    container.style.display = ''
  })
)

dados.forEach(function (dados, i) {
  const renderDados = function (data) {
    const html = `
            <article tabindex="${i}" class="card">
              <div class="icon">
                <img src="${data.foto}" alt="imagem da web" />
                <div class="bolinha">${i + 1}</div>
              </div>
              <div>
                <p>${data.nome}</p>
                <p>${data.cargo}</p>
              </div>
            </article>
    `

    cards.insertAdjacentHTML('beforeend', html)
  }

  renderDados(dados)
})

document.querySelectorAll('.card').forEach(function (card, i) {
  card.addEventListener('click', function () {
    modal.classList.remove('hidden-div')

    modal.innerHTML = ''

    const html = `
    <div class="modalScript">
        <img src=${dados[i].foto} alt="" />
        <div>
          <p>Nome: <span>${dados[i].nome}</span></p>
          <p>Cargo: <span>${dados[i].cargo}</span></p>
          <p>Idade: <span>${dados[i].idade}</span></p>
        </div>
      </div>
    `

    modal.insertAdjacentHTML('afterbegin', html)
  })
})

abrirIcon.addEventListener('click', function () {
  navMobile.style.display = 'flex'
  container.style.display = 'none'
})

fecharIcon.addEventListener('click', function () {
  navMobile.style.display = 'none'
  container.style.display = ''
})
