
const contactList = document.querySelector(".contact-list")
const conversationsList = document.querySelector(".conversations-list")
const arrContacts = [
    {
        img:'https://i0.wp.com/film-bunker.com/wp-content/uploads/2019/11/https___hypebeast.com_image_2019_09_dr-stone-documentary-hypebeast-exclusive-clip-00.jpg?fit=900%2C600&ssl=1"alt="contact-image"',
        name:'isaac',
        date:'26/02023',
        lastMsg:"bem",
        conversations:[
            ["opa", "como vai ?"],
            ["Eae", "bem"]
        ]   
    },
    {
        img:'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/05/luffy-one-piece.webp?fit=1200%2C675&ssl=1',
        name:'Luffy',
        date:'ontem',
        lastMsg:"So se for agora",
        conversations:[
            ["Venha", "Vamos procurar o One Piece"],
            ["So se for agora"]
        ]   
    },
    {
        img:'https://criticalhits.com.br/wp-content/uploads/2022/05/naruto-modo-sabio.jpg',
        name:'Naruto',
        date:'sexta-feira',
        lastMsg:"Onde fica isso ai ?",
        conversations:[
            ["Venha para Konohagakure"],
            ["Onde fica isso ai ?"]
        ]   
    },
    {
        img:'https://dimensaosete.com.br/static/70b47d9b78c88d436346b91e639b0357/a6104/zoro.webp',
        name:'Zoro',
        date:'10:10',
        lastMsg:"Esta perdido novamente ?",
        conversations:[
            ["Para onde foi o luffy ?"],
            ["Esta perdido novamente ?"]
        ]
    },
    {
        img:'https://ovicio.com.br/wp-content/uploads/2021/07/20210729-baki-season-4-release-date-netflixs-baki-son-of-ogre-sequel-baki-hanma-manga-1-1024x576-1-555x555.jpg',
        name:'baki',
        date:'8:15',
        lastMsg:"E so marcar o dia, cara",
        conversations:[
            ["Quando iremos treinar ?"],
            ["E so marcar o dia, cara"]
        ]
    },
    {
        img:'https://sucodemanga.com.br/wp-content/uploads/2022/05/goku-day-dragon-ball-thumb.jpg',
        name:'Goku',
        date:'01/06/2023',
        lastMsg:"provavelmente se metendo em brigas",
        conversations:[
            ["Sabe onde o vegeta foi ?"],
            ["provavelmente se metendo em brigas"]
        ]
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCt5rgqZyzQcQ-R7yU4K3q93TlQXGqxXXooQ&usqp=CAU',
        name:'Ippo',
        date:'quinta-feira',
        lastMsg:"Acho que no final de dessa semana.",
        conversations:[
            ["Opa", "Quandp iremos fazer aquele treino de boxe ?"],
            ["Acho que no final de dessa semana."]
        ]
    },
    {
        img:'https://criticalhits.com.br/wp-content/uploads/2018/08/my-hero-academia-all-might-1129220-1280x0.jpeg',
        name:'All Might',
        date:'segunda-feira',
        lastMsg:"Acho que na academia de heróis**",
        conversations:[
            ["Hello", "Sabe onde foi o jovem Izuku Midoriya"],
            ["Acho que na academia de heres", "Acho que na academia de heróis**"]
        ]
    }
]

function settings(){
    const friendbarInfo = document.querySelector("#friend-bar-img")    
    friendbarInfo.style.display = "none"
}
settings();

function switchChatOnClick(index){
    const friendName = document.querySelector(".friend-name")
    const imgFriendBar = document.querySelector("#friend-bar-img")
    const name = arrContacts[index].name;
    const img = arrContacts[index].img;
    const yourConversations = arrContacts[index].conversations[1]
    const friendConversations = arrContacts[index].conversations[0]
    friendName.innerHTML = name
    imgFriendBar.src = img

    // for(let you=0; you<yourConversations.length; you++){
    //     console.log(yourConversations[you])
    //     for(let friend=0; friend<friendConversations.length; friend++){
    //         console.log(friendConversations[friend])
    //     }
    // }

    conversationsList.innerHTML = "";
    
    for(let friend=0; friend<friendConversations.length; friend++){            
        conversationsList.innerHTML += `
            <li class="another-conversation-container">
                <div class="another-conversation">
                    <p class="another-msg msg">${friendConversations[friend]}</p>                          
                </div>                                        
            </li>
        `            
    }
    for(let you=0; you<yourConversations.length; you++){
        yourConversations[you]
        conversationsList.innerHTML += `
            <li class="your-message-container">
                <div class="your-conversation">                        
                    <p class="your-msg msg">${yourConversations[you]}<br><span class="hour">19:14</span> </p>
                </div>
            </li>
        `        
    }
    
}


for(let i=0; i<arrContacts.length;i++){
    // contactList.innerHTML += `
    //     <li data-id="contact" class="contact cursor-pointer">
    //         <span class="contact-img-box center">
    //             <img class="img" src="https://i0.wp.com/film-bunker.com/wp-content/uploads/2019/11/https___hypebeast.com_image_2019_09_dr-stone-documentary-hypebeast-exclusive-clip-00.jpg?fit=900%2C600&ssl=1"alt="contact-image">
    //         </span>
    //         <span class="contact-information">
    //             <div class="top">
    //                 <span class="contact-name">bilogssia</span>
    //                 <span class="data">26/05/2023</span>
    //             </div> 
    //             <div class="bottom">
    //                 <ion-icon class="visualized" name="checkmark-done-sharp"></ion-icon>
    //                 <span class="last-msg">Voce: Como vai ?</span>
    //                 <ion-icon class="fixed" name="chevron-down-sharp"></ion-icon>
    //             </div>
    //         </span>
    //     </li> 
    // `
    // contactList.addEventListener("click", (e)=>{
    //     const eventTarget = e.target;
    //     if(eventTarget.childNodes){
    //         console.log(eventTarget.parentNode)
    //     }
    //     // if(eventTarget.tagName === "IMG"){
    //     //     console.log(eventTarget)
    //     // }
    // })
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
        const eventTarget = e.target;
        const contactndex = ele.getAttribute("id");
        switchChatOnClick(contactndex)
        
    })
})
