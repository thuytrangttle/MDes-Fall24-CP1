
let taskInput = document.getElementById('taskInput')
let addTaskBtn = document.getElementById('addTaskBtn')
let taskList = document.getElementById('taskList')

let successMsg = document.getElementById('successMsg')
let successImg = document.getElementById('successImg')




addTaskBtn.addEventListener('click', addTask)


function addTask() {

    let taskText = taskInput.value.trim()


    if (taskText !== '') {

        let li = document.createElement('li')
        li.textContent = taskText




        let removeBtn = document.createElement('button')
        removeBtn.textContent = 'Mark as Done'
        removeBtn.addEventListener('click', removeTask)


        li.appendChild(removeBtn);


        taskList.appendChild(li);


        taskInput.value = ''

        successMsg.style.display = 'none'
        successImg.style.display = 'none'

    } else {
        alert('Please enter a task!')
    }
}



function removeTask(event) {
    let li = event.target.parentElement
    taskList.removeChild(li)

    if (taskList.children.length === 0) {
        showSuccessM()
    }
}

function showSuccessM() {
    successMsg.style.display = 'block'
    successImg.style.display = 'block'
}