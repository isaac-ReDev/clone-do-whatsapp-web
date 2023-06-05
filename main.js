
const inputSearcContacts = document.querySelector("#search-friends")
const contactList = document.querySelector(".contact-list")
const conversationsList = document.querySelector(".conversations-list")
const arrContacts = [
    {
        img:'https://i0.wp.com/film-bunker.com/wp-content/uploads/2019/11/https___hypebeast.com_image_2019_09_dr-stone-documentary-hypebeast-exclusive-clip-00.jpg?fit=900%2C600&ssl=1"alt="contact-image"',
        name:'isaac',
        date:'26/02023',
        lastMsg:"bem",
        conversations:[
            {owner:false, msg:"Opa"},
            {owner:false, msg:"Como vai ?"},
            {owner:true, msg:"Eae"},
            {owner:true, msg:"Bem"}
        ]
    },
    {
        img:'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1',
        name:'Luffy',
        date:'ontem',
        lastMsg:"So se for agora",
        conversations:[
            {owner:false, msg:"Venha"},
            {owner:false, msg:"Vamos procurar o one Piece"},
            {owner:true, msg:"So se for agora"},
        ]
    },
    {
        img:'https://criticalhits.com.br/wp-content/uploads/2022/05/naruto-modo-sabio.jpg',
        name:'Naruto',
        date:'sexta-feira',
        lastMsg:"Onde fica isso ai ?",
        conversations:[
            {owner:false, msg:"Venha para Konohagakure"},
            {owner:true, msg:"Onde fica isso ai ?"},
        ]
    },
    {
        img:'https://dimensaosete.com.br/static/70b47d9b78c88d436346b91e639b0357/a6104/zoro.webp',
        name:'Zoro',
        date:'10:10',
        lastMsg:"Esta perdido novamente ?",
        conversations:[
            {owner:false, msg:"Para onde foi o Luffy ?"},
            {owner:true, msg:"Esta perdido novamente ?"},
        ]
    },
    {
        img:'https://ovicio.com.br/wp-content/uploads/2021/07/20210729-baki-season-4-release-date-netflixs-baki-son-of-ogre-sequel-baki-hanma-manga-1-1024x576-1-555x555.jpg',
        name:'baki',
        date:'8:15',
        lastMsg:"E so marcar o dia, cara",
        conversations:[
            {owner:false, msg:"Quando iremos treinar ?"},
            {owner:true, msg:"E so marcar o dia, cara"},
        ]
    },
    {
        img:'https://sucodemanga.com.br/wp-content/uploads/2022/05/goku-day-dragon-ball-thumb.jpg',
        name:'Goku',
        date:'01/06/2023',
        lastMsg:"provavelmente se metendo em brigas",
        conversations:[
            {owner:false, msg:"Sabe onde o vegeta foi ?"},
            {owner:true, msg:"provavelmente se metendo em brigas"},
        ]
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCt5rgqZyzQcQ-R7yU4K3q93TlQXGqxXXooQ&usqp=CAU',
        name:'Ippo',
        date:'quinta-feira',
        lastMsg:"Acho que no final de dessa semana.",
        conversations:[
            {owner:false, msg:"Opa"},
            {owner:false, msg:"Quandp iremos fazer aquele treino de boxe ?"},
            {owner:true, msg:"Acho que no final dessa semana."},
        ]
    },
    {
        img:'https://criticalhits.com.br/wp-content/uploads/2018/08/my-hero-academia-all-might-1129220-1280x0.jpeg',
        name:'All Might',
        date:'segunda-feira',
        lastMsg:"Acho que na academia de heróis**",
        conversations:[
            {owner:false, msg:"Hello"},
            {owner:false, msg:"Sabe onde foi o jovem Izuku Midoriya"},
            {owner:true, msg:"Acho que na academia de heres"},
            {owner:true, msg:"Acho que na academia de heróis**"},
        ]
    }
]

function settings(str){
    const friendbarInfo = document.querySelector("#friend-bar-img")    
    friendbarInfo.style.display = str
}
settings("none");

function switchChatOnClick(index){
    const friendName = document.querySelector(".friend-name")
    const imgFriendBar = document.querySelector("#friend-bar-img")
    const name = arrContacts[index].name;
    const img = arrContacts[index].img;
    friendName.innerHTML = name
    imgFriendBar.src = img

    settings("block")

    conversationsList.innerHTML = "";
    
    for(let j=0;j<arrContacts[index].conversations.length;j++){
        if(arrContacts[index].conversations[j].owner == true){
            conversationsList.innerHTML += `
                <li class="your-message-container">
                    <div class="your-conversation">                        
                        <p class="your-msg msg">${arrContacts[index].conversations[j].msg}<br><span class="hour">19:14</span></p>
                    </div>
                </li>
            `            
        }else{
            conversationsList.innerHTML += `
                <li class="another-conversation-container">
                    <div class="another-conversation">
                        <p class="another-msg msg">${arrContacts[index].conversations[j].msg}<br><span class="hour">19:14</span></p> 
                    </div>                                        
                </li>            
            `
        }
    }            
}


for(let i=0; i<arrContacts.length;i++){
    const newContact = document.createElement("li");
    const contBox = document.createElement("span")
    const contInformation = document.createElement("span")
    const divContInfoTop = document.createElement("div")
    const spanContName   = document.createElement("span")
    const spanContDate   = document.createElement("span")
    const divContInfoBottom = document.createElement("div")
    const imgContact = document.createElement("img")

    const iconCheckMarck = document.createElement("ion-icon")
    const lastMsg = document.createElement("span")
    const fixed = document.createElement("ion-icon")

    //?icons
    iconCheckMarck.setAttribute("class", "visualized")
    iconCheckMarck.setAttribute("name", "checkmark-done-sharp")
    lastMsg.setAttribute("class", "last-msg")
    fixed.setAttribute("name", "chevron-down-sharp")
    fixed.setAttribute("class", "fixed")

    newContact.classList.add("contact", "cursor-pointer")
    newContact.setAttribute("id", i)
    imgContact.setAttribute("class", "img")
    contInformation.setAttribute("class", "contact-information")
    divContInfoTop.setAttribute("class", "top")
    divContInfoBottom.setAttribute("class", "bottom")
    spanContName.setAttribute("class", "contact-name")
    spanContDate.setAttribute("class", "data")
    contBox.setAttribute("class","contact-img-box"," center" )

    imgContact.src = arrContacts[i].img
    spanContName.innerHTML = arrContacts[i].name
    spanContDate.innerHTML = arrContacts[i].date
    lastMsg.innerHTML      = arrContacts[i].lastMsg

    contBox.appendChild(imgContact)
    newContact.appendChild(contBox)
    newContact.appendChild(contInformation)
    contInformation.append(divContInfoTop)
    divContInfoTop.append(spanContName)
    divContInfoTop.append(spanContDate)
    divContInfoBottom.append(iconCheckMarck)
    divContInfoBottom.append(lastMsg)
    divContInfoBottom.append(fixed)
    contInformation.append(divContInfoBottom)

    contactList.append(newContact)
}
const contacts    = document.querySelectorAll(".contact")

contacts.forEach(ele => {
    ele.addEventListener("click", (e)=>{
        const contactndex = ele.getAttribute("id");
        switchChatOnClick(contactndex)
        
    })
})

const hideContacts = (list, str)=>{
    list
        .filter(conts => !conts.textContent.toLowerCase().includes(str))
        .forEach(conts => {
            conts.classList.add("hidden")
        })
}
const showContacts = (list, str)=>{
    list
        .filter(conts => conts.textContent.toLowerCase().includes(str))
        .forEach(conts => {
            conts.classList.remove("hidden")
        })
}
inputSearcContacts.addEventListener("input", (e)=> {
    const str = e.target.value.trim().toLowerCase()    
    const newContactList = Array.from(contactList.children)
    hideContacts(newContactList, str)
    showContacts(newContactList, str)
})