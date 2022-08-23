const btnPlayAgain = document.querySelector("#btnPlayAgain")
const inputNumber = document.querySelector("#inputNumber")
const wrongNumber = document.querySelector(".wrongNumber")

let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

function handleClick(event){
    event.preventDefault()
    wrongNumber.innerHTML = ""
    
    if(!inputNumber.value){
        window.alert("Por favor, insira um número entre 0 e 10")
    }
    
    if(inputNumber.value <0 || inputNumber.value > 10 ){
        wrongNumber.innerHTML = "O número digitado deve estar entre 0 e 10. Tente novamente"
        xAttempts--
    }

    if(randomNumber == Number(inputNumber.value)){
        toggleScreen()
        document.querySelector(".screen2 h2").innerHTML = `Você acertou em ${xAttempts} tentativas`
    }

    xAttempts++
    console.log(xAttempts)
}

btnPlayAgain.addEventListener('click', function(){
    toggleScreen()
    randomNumber = Math.round(Math.random()*10)
    xAttempts = 1
    inputNumber.value = ""
})

function toggleScreen(){
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")
}