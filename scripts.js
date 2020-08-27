const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = "https://cdn.glitch.com/0fcbe60d-029b-4604-8e8e-6a67e3db6b90%2Fsportstakeone.png?v=1598308681415"

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

const card = document.createElement('div')
card.setAttribute('class', 'card')

const h1 = document.createElement('h1')
h1.textContent = movie.title

const p = document.createElement('p')

container.appendChild(card)
card.appendChild(h1)
card.appendChild(p)
  
