const main = document.querySelector('main#main')
main.remove()

const newHeader = document.createElement('h1')

newHeader.setAttribute("id", "victory")


newHeader.innerHTML = ("Jesse is the champion")


document.body.append(newHeader)