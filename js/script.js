const main = document.querySelector('.main')
const addList = document.querySelector('.button')

function createToDoList(arr)
{
    const length = arr.head.length
    for(let i = 0; i < length; i++){
        const divList = document.createElement('div')
        const divHeader = document.createElement('div')
        divHeader.innerHTML = `<h2>${arr.head[i]}</h2>`
        divList.appendChild(divHeader)
        divHeader.classList.add('div_header')
        divList.classList.add('div_list')
        arr.text[i].map((item) => {
            const p = document.createElement('p')
            p.textContent = item
            divList.appendChild(p)
        })
        main.appendChild(divList)
    }
}

addList.addEventListener('click', () => {
    document.location.href = '/addToDo.html'
})

fetch('js/db.json')
    .then(response => response.json())
    .then(json => createToDoList(json.allToDo))