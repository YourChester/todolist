//MAIN
const addList = document.querySelector('.button')
const body = document.querySelector('body')
const script = document.querySelector('script')
let todoList = {
    "head" : [],
    "list" : [],
}
//FORM
const div_form = document.querySelector('.div_form')
const addBtn = document.querySelector('#add')
const addToDo = document.querySelector('.div_form__addToDo')
const addToDo_btn = document.querySelector('.div_form__addToDo_btn')
const input_btn = document.querySelector('.div_form__input_btn')

let m = 0

input_btn.addEventListener('click', () => {
    let arrText = []
    const input_text = document.querySelectorAll('.div_form__input_text')
    const input_head = document.querySelector('.div_form__input_head')
    input_text.forEach( (item, key) => {
        arrText[key] = item.value
    })
    todoList.head[m] = input_head.value
    todoList.list[m] = arrText
    m++
    div_form.style.display = "none"
    body.style.overflow = ""
    alert("Comleate")
    createToDoList(todoList)
})

function createToDoList(arr)
{
    if(document.querySelector('.main'))
    {
        const main1 = document.querySelector('.main')
        body.removeChild(main1)
        const main = document.createElement('div')
        main.classList.add('main')
        body.insertBefore(main, script)
        for(let i = 0; i < m; i++){
        const divList = document.createElement('div')
        const divHeader = document.createElement('div')
        divHeader.innerHTML = `<h2>${arr.head[i]}</h2>`
        divList.appendChild(divHeader)
        divHeader.classList.add('div_header')
        divList.classList.add('div_list')
        arr.list[i].map((item) => {
            const p = document.createElement('p')
            p.textContent = item
            divList.appendChild(p)
        })
        main.appendChild(divList) 
        }
    }
    else
    {
        const main = document.createElement('div')
        main.classList.add('main')
        body.insertBefore(main, script)
        for(let i = 0; i < m; i++){
        const divList = document.createElement('div')
        const divHeader = document.createElement('div')
        divHeader.innerHTML = `<h2>${arr.head[i]}</h2>`
        divList.appendChild(divHeader)
        divHeader.classList.add('div_header')
        divList.classList.add('div_list')
        arr.list[i].map((item) => {
            const p = document.createElement('p')
            p.textContent = item
            divList.appendChild(p)
        })
        main.appendChild(divList) 
        }
    }
}

addList.addEventListener('click', () => {
    let n = 0
    div_form.style.display = "block"
    body.style.overflow = "hidden"
    addBtn.addEventListener('click', () => {
        if(n <= 10) {
            const input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.setAttribute('id', `todo_${n}`)
            input.setAttribute('name', `todo_${n}`)
            input.setAttribute('placeholder', 'What do you do')
            input.classList.add('div_form__input_text')
            addToDo.insertBefore(input, addToDo_btn)
            n++
        }
        else {
            alert("This all! Please stop!")
        }
    })
})