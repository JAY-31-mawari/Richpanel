const johnSelector=document.getElementById('john-selector')
const janeSelector=document.getElementById('jane-selector')
const heading=document.querySelector('.heading')
const chatMessages=document.querySelector('.chat-messages')
const chatInput=document.querySelector('.chat-input')
const send=document.querySelector('.chat-button')

const chatMessageElement = (message) => `
    <div class="message ${message.sender==='jane'?'blue-bg main':'gray-bg'}">
        <div class="message-sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    </div>
    `

let messageSender='john'

const updateMessageSender = (name) =>{
    messageSender=name
    heading.innerText=`Typing ${messageSender}`
    if(name ==='john')
    {
        johnSelector.classList.add('active-person')
        janeSelector.classList.remove('active-person')
    }
    else{
        janeSelector.classList.add('active-person')
        johnSelector.classList.remove('active-person')
    }
}

johnSelector.onclick=()=>updateMessageSender('john')
janeSelector.onclick=()=>updateMessageSender('jane')

send.addEventListener('click',()=>{
    const message={
        sender:messageSender,
        text:chatInput.value,
        timestamp:new Date().toLocaleString('en-US',{hour:'numeric',minute:'numeric',hour12:true})
    }
    chatMessages.innerHTML+=chatMessageElement(message)
    
    chatMessages.scrollTop=chatMessages.scrollHeight
})