let prompt = document.querySelector("#prompt")
let chatContainer = document.querySelector(".chat-container")

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCFj1A5AcLPQz7bSrGUcAOpjj71Ibp_Kp4"
let user = {
    data:null,
}
function createChatBox(html,classes){
    let div = document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div
}

function generateResponse(){

}

function handleChatResponse (message){
    let html=`<img src="images/userProfile.png" alt="" id="userImage" width="50">
    <div class="user-chat-area">
    ${message}
    </div>`
    prompt.value = null;
    let userChatBox = createChatBox(html,"user-chat-box")
    chatContainer.appendChild(userChatBox)

    setTimeout(()=>{
    let html = `<img src="images/AI_Chat_Box.jpeg" alt="" id="aiImage" width="50">
        <div class="ai-chat-area">
        <img src="images/loading.gif" alt="" class="load" width="50px">
        </div>`
        let aiChatBox = createChatBox(html,"ai-chat-box")
        chatContainer.appendChild(aiChatBox)
        generateResponse(aiChatBox)
    },600)
}

prompt.addEventListener("keydown",(e)=>{
    console,console.log(e)
    if(e.key=="Enter"){
        // console.log(prompt.value)
        handleChatResponse(prompt.value)

    }
})