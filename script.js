function addTask(){
    const inputArea = document.querySelector('input#add-field')
    let list = document.querySelector('ul#list')
    let task = document.createElement('li')
    if (inputArea.value === ''){
    } else {
    task.innerHTML = `${inputArea.value}<button><i class="fa fa-trash-o"></i></button>`
    list.appendChild(task)
    let delButtons = document.querySelectorAll('Button')
        for (let i = 0; i < delButtons.length; i++){
            delButtons[i].onclick = function delButtons(){
                this.parentNode.parentNode.removeChild(this.parentNode)
            let totalTasks = (document.querySelectorAll('li')).length
            const conterArea = document.querySelector('p#counter')
            conterArea.textContent = `You have ${totalTasks} to Do`
            }   
        }
    }
    let totalTasks = (document.querySelectorAll('li')).length
    const conterArea = document.querySelector('p#counter') 
    conterArea.textContent = `You have ${totalTasks} to Do` 
    inputArea.value = ''
}

function clearAllTasks(){
    const listArea = document.querySelector('ul#list')
    listArea.textContent = []
    const conterArea = document.querySelector('p#counter')
    let totalTasks = (document.querySelectorAll('li')).length
    conterArea.textContent = `You have ${totalTasks} to Do`
}