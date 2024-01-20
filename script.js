
// atividade 1
let numero = Number(prompt('Digite um numero'))
if (numero > 0){
    console.log('numero positivo')
}
if(numero % 2 == 0){
    console.log('numero par')
}else{
    console.log('numero impar')
}


// atividade 2
let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite sua altura: '))
let imc =  peso * altura**2
if(imc <= 16.9){
    console.log('Muito abaixo do peso')
}else if(imc >= 17 && imc <= 18.4){
    console.log('Abaixo do peso')
}else if(imc >= 18.5 && imc <= 24.9){
    console.log('Peso normal')
}else if(imc >= 25 && imc <= 29.9){
    console.log('acima do peso')
}else if(imc >= 30 && imc <= 34.9){
    console.log('obesidade 1')
}else if(imc >= 35 && imc <= 40){
    console.log('obesidade 2')
}else if(imc >= 40){
    console.log('obesidade 3')
}

// atividade 3
let idade = Number(prompt('Digite sua idade: '))
let preco = Number(prompt('Digite o preço do produto: '))
if(idade < 18){
    preco = preco - (preco * 0.1)
    console.log('ganhou desconto')
}
console.log(`o preco do produto ficou ${preco}`)


// atividade 4
 let lado1 = Number(prompt('Digite o comprimento do primeiro lado do triangulo: '))
 let lado2 = Number(prompt('Digite o comprimento do segundo lado do triangulo: '))
 let lado3 = Number(prompt('Digite o comprimento do terceiro lado do triangulo: '))

 if(lado1 === lado2){
    if(lado1 === lado3){
        console.log('triangulo equilatero')
    }else{
        console.log('triangulo isoceles')
    }
 }else if(lado2 === lado3){
        console.log('triangulo isoceles')
 }else{
    console.log('triangulo escaleno')
 }

// atividade 5
const verificaLetraMaiuscula = /(([A-Z]+|[A-Z])|([A-Z]+)|([A-Z])+|([\W]))/;
const verificaContemNumero = /\d+/
const verificaCaracteresEspeciais = /[^a-zA-Z 0-9]+/g


const senha = prompt('Digite uma senha: ')
if(senha.length < 8){
    console.log('senha tem que ter mais de 8 caracteres')
}
var letraMaiuscula = verificaLetraMaiuscula.test(senha);
if(!letraMaiuscula){
    console.log('senha tem que conter letra maiuscula')
}
if(!senha.match(verificaContemNumero)){
    console.log('senha deve conter numeros')
}
if(!verificaCaracteresEspeciais.test(senha)){
    console.log('senha deve conter caracteres especiais')
}

// atividade 6
const diaSemana = Number(prompt('Digite uma numero: '))
switch (diaSemana) {
    case (1):
        console.log('Domingo')
        break;
    case (2):
        console.log('Segunda')
        break;
    case (3):
        console.log('Terça')
        break;
    case (4):
        console.log('Quarta')
        break;
    case (5):
        console.log('Quinta')
        break;
    case (6):
        console.log('Sexta')
        break;
    case (7):
        console.log('Sabado')
        break;
}

// atividade 7
const numero = Number(prompt('Digite uma numero: '))
let numerosMultiplos = 0
for(let i = 0; i <= numero; i++){
    if(numero % i == 0){
        numerosMultiplos++
    }
}
numerosMultiplos === 2 ? console.log('numero Primo') : console.log('numero nao primo')

// Desafio

const opcao = Number(prompt('escolha uma opcao: \n 1-Calcular Area do triangulo.\n 2-Calcular area do Retangulo. \n 3-Calcular volume do cubo. \n 4-calcular area do circulo. \n5-sair'))
let base = 0
let altura = 0
let area = 0 
let comprimento = 0
let volume = 0 
let raio = 0
switch (opcao) {
    case (1):
        base = Number(prompt('Area triangulo: \n digite a base do triangulo:'))
        altura = Number(prompt('digite a altura do triangulo:'))
        area = (base * altura) / 2
        console.log(`a area do triangulo e: ${area}`)
        break;
    case (2):
        base = Number(prompt('Area retangulo: \n digite a base do retangulo:'))
        altura = Number(prompt('digite a altura do retangulo:'))
        area = base * altura
        console.log(`a area do retangulo e: ${area}`)
        break;
    case (3):
        comprimento = Number(prompt('Volume cubo: \n digite o comprimento da aresta do cubo:'))
        volume = comprimento ** 3
        console.log(`o volume do cubo e: ${volume}`)
        break;
    case (4):
        raio = Number(prompt('Area Circulo: \n digite o valor do raio :'))
        area = Math.PI (raio**2)
        console.log(`a area do circulo e : ${area}`)
        break;
    case (5):
        console.log('BYE')
        break;
}