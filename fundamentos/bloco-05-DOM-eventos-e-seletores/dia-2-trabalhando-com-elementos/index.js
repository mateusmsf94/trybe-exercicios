let h1 = document.createElement("h1")
h1.innerText = "Exercicios 5.2 - JavaScript DOM"
document.body.appendChild(h1)

let principal = document.createElement("main")
principal.className = 'main-content'
document.body.appendChild(principal)

let contCentro = document.createElement("section")
contCentro.className = 'center-content'
principal.appendChild(contCentro)

let paragrafo = document.createElement('p')
paragrafo.textContent = "paragrafo"
contCentro.appendChild(paragrafo)

let contLeft = document.createElement('section')
contLeft.className = "left-content"
principal.appendChild(contLeft)

let contRight = document.createElement('section')
contRight.className = "right-content"
principal.appendChild(contRight)

let img = document.createElement('img')
img.src = "https://picsum.photos/200"
img.className = "small-image"
contLeft.appendChild(img)

let list = document.createElement("ul")
list.innerHTML = `
  <li>um</li>
  <li>dois</li>
  <li>tres</li>
  <li>quatro</li>
  <li>cinco</li>
  <li>seis</li>
  <li>sete</li>
  <li>oito</li>
  <li>nove</li>
  <li>dez</li>
`
contRight.appendChild(list)

for (let i = 0; i < 3; i++) {
  const elH3 = document.createElement('h3')
  elH3.innerHTML = "show " + i
  principal.appendChild(elH3)
}