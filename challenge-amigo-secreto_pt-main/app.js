let amigos = JSON.parse(localStorage.getItem ("amigos"))||[];

function atualizarTooltip() {
    const input = document.getElementById("amigo");
    input.title = amigos.length > 0 ? amigos.join("\n") : "Nenhum amigo adicionado";
}

function adicionarAmigo() {
    const input = document.getElementById("amigo");

    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido");
        return;
    }  
    if(amigos.includes(nome)){
        alert("Esse nome já foi adicionado");
        return;
    } 

    amigos.push(nome);
    
    localStorage.setItem("amigos", JSON.stringify(amigos));    
    input.value = "";
    atualizarTooltip();
}

function sortearAmigo(){
   if(amigos.length=== 0){
    alert("Todos já foram sorteados!");
    return;   
}

const indiceSorteado = Math.floor(Math.random() * amigos.length);
const sorteado = amigos[indiceSorteado];

const resultado = document.getElementById("resultado");
resultado.innerHTML= `<li> Seu amigo secreto é: <strong> ${sorteado}</strong></li>`;
amigos.splice(indiceSorteado,1);
localStorage.setItem("amigos", JSON.stringify(amigos));
atualizarTooltip();

setTimeout(() => {
    resultado.innerHTML = ""
}, 1500);

}
window.onload = atualizarTooltip;

