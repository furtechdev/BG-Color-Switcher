const buttons = document.querySelectorAll(".button"); 
const body = document.querySelector("body"); 

console.log(buttons) ; 

buttons.forEach(function(button){
    button.addEventListener('click' , function(e){
        console.log(e.target); 
        if 
            (e.target.id === "black"){
                body.style.backgroundColor = e.target.id
            }
            if 
            (e.target.id === "white"){
                body.style.backgroundColor = e.target.id
            }
            if 
            (e.target.id === "red"){
                body.style.backgroundColor = e.target.id
            }
            if 
            (e.target.id === "blue"){
                body.style.backgroundColor = e.target.id
            }

    })
})

function setBodyBackground(color) {
    localStorage.setItem('body-bg', color)
    document.body.style.backgroundColor = color
    }
    
    const initialBodyBackground = localStorage.getItem('body-bg') || "white"
    setBodyBackground(initialBodyBackground)
    
    document.querySelectorAll('button[data-color]').forEach(button => button.addEventListener('click', setBodyBackground.bind(null, button.dataset.color)))
