const main = document.querySelector('.main')
const addList = document.querySelector('.button')

const name = 'today'
const arr = ['buy cookis', 'clean my room', 'cook diner', 'do homework']

function createToDoList(arr, name)
{
    const divList = document.createElement('div')
    const divHeader = document.createElement('div')
    divHeader.innerHTML = `<h2>${name}</h2>`
    divList.appendChild(divHeader)
    divHeader.classList.add('div_header')
    divList.classList.add('div_list')
    arr.map((item) => {
        const p = document.createElement('p')
        p.textContent = item
        divList.appendChild(p)
    })
    main.appendChild(divList)
}

addList.addEventListener('click', () => {
    document.location.href = '/addToDo.html'
})

createToDoList(arr,name)
createToDoList(arr,name)