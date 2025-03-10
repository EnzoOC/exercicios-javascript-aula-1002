//3. Funções e Escopo
//Função Tradicional:

function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));  // "Olá, Maria!"

//Arrow Function:
const dobro = (num) => num * 2;
console.log(dobro(5));  // 10

//Escopo de Variáveis:
let global = "Sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global);  // OK
    console.log(local);   // OK
}

testarEscopo();
// console.log(local); // Erro! 'local' só existe dentro da função

//Callback Function (introdução):
function processar(callback) {
    console.log("Processando...");
    callback();
}
processar(() => console.log("Finalizado!"));

//Função Assíncrona (introdução):
async function pegarDados() {
    return "Dados recebidos!";
}
pegarDados().then(console.log); // "Dados recebidos!"