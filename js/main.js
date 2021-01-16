// funcao com botão

function onClick(){
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
   //console.log(document.getElementById("agradecimento"));
    // alert("Função onClick executada!");
}

function redirecionar(){
    window.open("https://github.com/Yzhark/Javascript");
    //window.location.href = "https://github.com/Yzhark/Javascript";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
}    

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}


function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


// função exemplo
/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;
function validaIdade(idade){    
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

validaIdade(prompt("Qual sua idade? "));
console.log(validar);
//alert(soma(5, 20));

*/


// trabalhando com Data
/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


// laço exemplo - For
/*
var count;
for(count=0; count<=5; count++){
    console.log(count);
    alert(count);
}
*/

// laço exemplo - While
/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++; // ou count = count + 1
}
*/

//condição exemplo
/* 
var idade = prompt("Informe sua idade");
if (idade < 18 ){
    alert("Menor de idade");   
}else{
    alert("Maior de idade");
};
*/

//Lista de dicionarios

/*
var filme = [{nome:"Evil Dead", genero:"Terror"}, {nome:"Asorak", genero:"Aventura"}]
console.log(filme);
alert(filme[1].nome);
*/

// dicionario exemplo

/*
var filme = {nome:"Evil Dead", genero:"Terror"}
console.log(filme);
alert(filme.genero);
*/


//Array exemplo

//var lista = ["Terror","Ação","Aventura"]
//lista.push("Ficção"); //insere um registro no fim
//lista.pop(); //retira
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert(lista[2]);


//Alert e console exemplo

//var nome = 'Alex Aráujo';
//var idade = 35;
//var frase = "Teste de java script";
//alert(nome + " tem " + idade + " anos de idade.");
//console.log(nome);
//console.log(idade);
//console.log(frase.toLowerCase());