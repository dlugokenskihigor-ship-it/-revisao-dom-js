const btn1 = document.getElementById("btn1");
const titulo = document.getElementById("titulo");

btn1.addEventListener("click", () => { 
    titulo.textContent = "Java script é incrivel";
});




let btn2 = document.getElementById("btn2");
const inputTexto = document.getElementById("inputTexto");
const mensagem = document.getElementById("mensagem");
btn2.addEventListener("click", function(){
mensagem.innerText = "olá " + inputTexto.value + "!";
});

let caixa = document.getElementById("caixa");
caixa.addEventListener("mouseover", function(){
    caixa.style.backgroundColor = "red";
    caixa.style.borderImageOutset
});

// let btn3 = document.createElement("btn3");
// const lista = document.createElement("Item novo adicionado")
// lista.array.forEach(element => {
    
// });