const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'I made a message!',
    'Oops...I did it again!',
    'This notification is toasty!',
    'Notifications everywhere!'
]

const loggers = ['info', 'success', 'warning', 'error']

button.addEventListener('click', () => {
    createNotification()
})

function createNotification() {
    const noti = document.createElement('div')
    noti.classList.add('toast')
    noti.classList.add(getRandomLog())
    
    noti.innerText = getRandomMessage()
    
    toasts.appendChild(noti)

    setTimeout(() => {
        noti.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomLog() {
    return loggers[Math.floor(Math.random() * loggers.length)]
}