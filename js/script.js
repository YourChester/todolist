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
let m = 0

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
    const formBody1 = document.querySelector('.div_form__body')
    if(formBody1)
    {
        div_form.removeChild(formBody1)
        const formBody = document.createElement('div')
        formBody.classList.add('div_form__body')
        formBody.innerHTML = `
        <form method="POST">
            <div class="div_form__addToDo">
                <input class="div_form__input_head" type="text" name="header" placeholder="Name your todo list" id="input_header">
                <input class="div_form__input_text" type="text" name="todo_0" placeholder="What do you do" id="todo_0">
                <div class="div_form__addToDo_btn">
                    <div id="add" >
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 491.86 491.86" style="enable-background:new 0 0 491.86 491.86;" xml:space="preserve"><path d="M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69 C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69 s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z"/></svg>     
                    </div>
                    <input class="div_form__input_btn" type="button" value="submin">
                </div>
            </div>
        </form>
        `
        div_form.appendChild(formBody)
    }
    else {
        const formBody = document.createElement('div')
        formBody.classList.add('div_form__body')
        formBody.innerHTML = `
        <form method="POST">
            <div class="div_form__addToDo">
                <input class="div_form__input_head" type="text" name="header" placeholder="Name your todo list" id="input_header">
                <input class="div_form__input_text" type="text" name="todo_0" placeholder="What do you do" id="todo_0">
                <div class="div_form__addToDo_btn">
                    <div id="add" >
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 491.86 491.86" style="enable-background:new 0 0 491.86 491.86;" xml:space="preserve"><path d="M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69 C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69 s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z"/></svg>     
                    </div>
                    <input class="div_form__input_btn" type="button" value="submin">
                </div>
            </div>
        </form>
        `
        div_form.appendChild(formBody)
    }
    const addToDo = document.querySelector('.div_form__addToDo')
    const addToDo_btn = document.querySelector('.div_form__addToDo_btn')
    const input_btn = document.querySelector('.div_form__input_btn')
    const addBtn = document.querySelector('#add')
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