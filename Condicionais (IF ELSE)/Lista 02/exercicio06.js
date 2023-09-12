//Faça um programa que recebe o preço da etiqueta de um produto e em seguida informe o preço deste produto 
//se o pagamento for à vista (10% de desconto), em duas parcelas (valor da etiqueta) ou em quatro parcelas
//(5% de acréscimo).

//FUNCTIONS 
const aVista = function (valor){
    return (valor - (valor * 0.1)).toFixed(2);
}

const duasParcelas = function (valor) {
    return valor;
}

const quatroParcelas = function (valor) {
    let acresc = (valor * 0.05).toFixed(2);
    let novoValor = valor + acresc;
    return novoValor;
}

let valor = Number((Math.random() * 100).toFixed(2));
let modoPagamento = "Quatro parcelas"             //"A vista" ou "Duas parcelas" ou "Quatro parcelas"

console.log(valor, typeof valor);

if(modoPagamento == "A vista"){
    valor  = aVista(valor);
    console.log(`O valor com 10% de desconto é ${valor}`);

}else if(modoPagamento == "Duas parcelas"){
    valor = duasParcelas(valor);
    console.log(`O valor é ${valor}`);

}else if(modoPagamento == "Quatro parcelas"){
    valor = quatroParcelas(valor);
    console.log(`O valor com 5% de acréscimo é ${valor}`);

} else {
    console.log("Método de Pagamento Inválido");
}
