const nav = document.querySelector("#navigation")
const button = nav.querySelector('button')
const drop = nav.querySelector('ul')
const label = nav.querySelector('#menu-label')
const body = document.querySelector('body')
const anchor = document.querySelectorAll('a')

let displayMenu = false
const buttonIcon = {
    firstLine: nav.querySelector("svg > line:nth-child(2)"),
    secondLine: nav.querySelector("svg > line:nth-child(3)"),
    thirdLine: nav.querySelector("svg > line:last-child"),
};


const toggleClasses = ['-translate-x-full']

button.addEventListener('click',()=>{
    if(displayMenu){
        displayMenu = false
        drop.classList.add(toggleClasses)
        label.textContent = 'Menu'
        buttonIcon.firstLine.style.transform= "translate(0px,0px) rotate(0deg)" 
        buttonIcon.secondLine.style.opacity= "1" 
        buttonIcon.thirdLine.style.transform= "translate(0px,0px) rotate(0deg)" 
        body.classList.remove('overflow-hidden')
    }else{
        displayMenu=true
        drop.classList.remove(toggleClasses)
        label.textContent = 'Fermer'
        body.classList.add('overflow-hidden')
        window.scrollTo(0,0)
        buttonIcon.firstLine.style.transform= "translate(9px,4px) rotate(45deg)" 
        buttonIcon.secondLine.style.opacity= "0" 
        buttonIcon.thirdLine.style.transform= "translate(-8px,12px) rotate(-45deg)" 
    }
})

anchor.forEach(a=>{
    a.addEventListener('click',()=>{
        displayMenu = false
        drop.classList.add(toggleClasses)
        label.textContent = 'Menu'
        buttonIcon.firstLine.style.transform= "translate(0px,0px) rotate(0deg)" 
        buttonIcon.secondLine.style.opacity= "1" 
        buttonIcon.thirdLine.style.transform= "translate(0px,0px) rotate(0deg)" 
        body.classList.remove('overflow-hidden')
    })
})


const links = document.querySelectorAll('.switch')
links.forEach(link=>{
    link.href = link.href.replace('$','')
    link.href = link.href.replace('!','@')
    link.textContent = link.textContent.replace('!','@')
})