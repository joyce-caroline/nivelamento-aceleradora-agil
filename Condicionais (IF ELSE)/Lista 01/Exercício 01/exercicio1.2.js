//Mostrar o resultado da divisão entre dois números

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

console.log(`Números gerados: ${num1}, ${num2}`);

if(num2 === 0) {
    console.log("Não é possível realizar divisão por zero.");
}else {
    let resultado =(num1 / num2).toFixed(2);
    console.log(`O resultado da divisão é ${resultado}`);
}
