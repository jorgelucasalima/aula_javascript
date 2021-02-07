/*var nome = "Jorge Lucas";
var idade = "26 ";
var idade2 = 23;
var frase = "Japão é lindo";
//alert(nome + " Tem " + idade + " Cús");

console.log(idade + idade2);

console.log(frase.replace("Japão", "Brasil"));


//var lista = ["maça", "pêra", "laranja", "Abacate", "Maracujá"];
//lista.push("Ayra");
//lista.pop();
//console.log(lista.join(" | "));

//var frutas = [{ nome: "Maça", cor: "Vermelha" }, { nome: "uva", cor: "roxo" }];
//console.log(frutas);



var idade = prompt("Qual sua idade : ")

if (idade >= 18) {
    alert("Maior de Idade, pode ser preso");
} else {
    alert("Menor de idade");
}




var contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
};



var contador;
for (contador = 0; contador <= 5; contador++) {
    console.log(contador);
};




var data = new Date();
console.log(data.getHours());


function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 2));

*/

function botao(params) {
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar otaru"
}

function redirecionar(params) {
    window.open("https://google.com/");
}

function trocar(params) {
    alert("trocar texto");
}