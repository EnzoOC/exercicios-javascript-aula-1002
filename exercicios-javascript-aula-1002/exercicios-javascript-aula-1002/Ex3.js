//2. Estruturas de Controle Usadas para tomar decisões no código.
//Condicional if-else
let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

//Switch-case:
let cor = "azul";
switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelho.");
        break;
    case "azul":
        console.log("A cor escolhida foi azul.");
        break;
    default:
        console.log("Cor não reconhecida.");
}

//Laços de repetição (for e while)
for (let i = 0; i < 3; i++) {
    console.log("Contador:", i);
}
let contador = 0;
while (contador < 3) {
    console.log("Número:", contador);
    contador++;
}