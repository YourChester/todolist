const addBtn = document.querySelector('#add')
const addToDo = document.querySelector('.addToDo')
const addToDo_btn = document.querySelector('.addToDo_btn')

let n = 1

addBtn.addEventListener('click', () => {
    if(n <= 10) {
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('name', `todo_${n}`)
        input.setAttribute('placeholder', 'What do you do')
        input.classList.add('input_text')
        addToDo.insertBefore(input, addToDo_btn)
        n++
    }
    else {
        alert("This all! Please stop!")
    }
})