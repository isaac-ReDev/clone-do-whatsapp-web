// const contactList = document.getElementById("contact-list");
const contact = document.querySelector(".contact-list")


for(let i=0;i<contact.childNodes.length;i++){
    if(contact.childNodes[i].className === "contact"){
        contact.childNodes[i].addEventListener("click", (e)=>{
            console.log("OPa") 
        })
    }
}


// contactsList.addEventListener("click", (e)=>{
//     const eventTarget = e.target
//     if(eventTarget.tagName === "li" || eventTarget.childs){
//         console.log(eventTarget)
//     }
// })
// contactsList.addEventListener("click", (e) => {
//     const eventTarget = e.target;
//     const contact = eventTarget.tagName === "li";
//     console.log(contact)
// })

// contactsList.childNodes.forEach(ele => {
//     ele.addEventListener("click", (e) => {
//         console.log(e.target)
//     })
// })

// contactsList.childNodes[0].addEventListener("click", (e)    => {
    // const eventTarget = e.target
    // const li = eventTarget.className === "contact"
    // if(li === "contact"){
    //     console.log("t")
    // }
    // console.log("ok")w
// })


// for(let i=0; i<contactsList.length;i++){
//     contactsList[i].addEventListener("click", (e)=>{
//         const eventTarget = e.target        
//         const contact = e.target.className === "contact"
//         if(contact){
//             console.log(contact)
//         }else{
//             console.log("nao encontrado")
//         }
        
        
//     })
// }

// console.log(contactsList[0])