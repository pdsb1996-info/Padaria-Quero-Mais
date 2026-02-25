<<<<<<< HEAD
//Uma função que exiba uma mensagem de boas-vindas

// Uma função que calcule o subtotal de itens (receba preço e quantidade)

//Uma função que calcule o desconto(receba valor e percentual de desconto)

//Uma função que calcule a taxa de entrega baseada na distância


function calcularTaxaEntrega() {
    if (distancia <= 5) {
        console.log("A sua entrega é grátis!")
    } else if (distancia <= 10) {
        console.log("Sua entrega custa R$15,00")
    } else{
        console.log("Sua entrega custa R$20,00")
    }
}
calcularTaxaEntrega(20)


// ----------------------------------//-------------------------------------------------------

function saudacao(){
    console.log("Seja bem vindo (a)!")
}
saudacao()
//------------------------------------//--------------------------------------------
// 🛒 Uma função que calcule o subtotal de itens (receba preço e quantidade)
function calcularSubTotal(preco, quantidade) {
    return preco * quantidade
}
 
let resultado = calcularSubTotal (50, 3);
console.log(resultado);
 
//---------------------------------------------------------------------------------------- 
// 🎁 Uma função que calcule desconto (receba valor e percentual de desconto)
function calcularDesconto(valor, percentual){
    return valor - (valor * percentual / 100)
}
 
let desconto = calcularDesconto(200, 100);
console.log(desconto);
 


//função tradicional

function calcularPreco(preco,produto){
    return preco * produto;
}

//arrow function

const calcularPrecos = (preco, produto) => preco * produto;
=======
>>>>>>> 8d8d6ba (Atualização da Padaria)
