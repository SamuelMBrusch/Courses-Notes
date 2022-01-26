const nome = 'Samuel'; // string literal
let idade = 17; // number literal
let estaAprovado = true; // boolean
let sobrenome = undefined; // valor indefinido
let corSelecionado = null; // redefinir um valor

let pessoa = {
    nome: 'Samuel', 
    idade: 17,
    sobrenome: 'Menguer Brusch',
    estaAprovado: true, 
    altura: 1.85
};
// aqui, 'pessoa' é um exemplo de objeto.
// IMPORTANTE: as propriedades das variáveis declaradas dentro do objeto devem vir após : ao invés de =

let eu = ['Samuel Menguer Brusch', 17, true, undefined, null];
console.log(eu[2]);
console.log(eu.length);

console.log(pessoa)

// para nomear uma funçao, deve-se utilizar: Verbo + Substantivo [+ complemento]
// Exemplo:

let corSite = 'azul';

function resetarCorSite (cor,tonalidade){
    corSite = cor + ' ' + tonalidade
};

console.log(corSite);

resetarCorSite("cinza","chumbo");

console.log(corSite);

console.log('\nCHECKPOINT 1\n\n\n\n\n');




// // TIPOS DE FUNÇÃO:
// tipo1: Realizar uma tarefa, não devolve nada.

function dizerNome(){
    console.log('Samuel');
};

dizerNome();

// tipo2: Faz uma operação e retorna alguma coisa 

function multiplicarPorDois (valor){
    return valor*2
};

let resultado = multiplicarPorDois(46);

console.log(resultado);

console.log('\nCHECKPOINT 2\n\n\n\n\n')

console.log('TIPOS DE OPERADORES');

// Operadores Aritméticos (Matemáticos)
let salário = 1000
// +, -, *, /, **

let idade0 = 17;

console.log(idade0++);
console.log(idade0);
console.log(--idade0);


// Operadores de Atribuição
let valorTecladoGamer = 600;
console.log(valorTecladoGamer);

valorTecladoGamer += valorTecladoGamer;
// equivale a (valorTecladoGamer + valorTecladoGamer = valorTecladoGamer)

console.log(valorTecladoGamer);


// Operadores de Igualdade
// igualdade estrita: Compara não somente o valor, mas o tipo da variável.
console.log(1 === 1); //true
console.log('1' === 1); //false

// igualdade solta: ignora o tipo, considera somente o valor.
console.log(1 == 1); //true
console.log('1' == 1); //true
 
// Operadores Ternário
// Tem um cliente com 100 pontos premium
let pontos = 100;
let tipoCliente = pontos > 100 ? 'premium' : 'comum';
console.log(tipoCliente)
 
// Operadores Lógicos: and, or & not
// operador lógico AND (&&) -> retorna TRUE somente se os dois operandos forem TRUE

console.log(false && true);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// operador lógico OR (||) -> retorna TRUE se um dos operandos for TRUE.

let podeAplicar2 = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar2);

// operador lógico NOT (!)

let candidatoRecusado = !podeAplicar
console.log('Pode aplicar para a vaga: ', podeAplicar)
console.log('Candidato recusado: ', candidatoRecusado)


// Comparações lógicas com valores não booleanos

// VALORES Falsy
// undefined
// null
// 0
// false
// ''
// NaN - Not a Number (cálculos de resultado irracional)

// VALORES Truthy - os que não cumprem os requisitos supracitados, ou seja, todos quantos não forem FALSE
// em uma comparação entre "false || true", sempre retornará o que não é false.

let corPersonalizada = 'Roxo';
let corPadrao = 'Vermelho';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

// Assim que o algoritmo, da esquerda para a direita, encontra qualquer condição TRUE, ele para a leitura.

// Operadores Bitwise

console.log('\nCHECKPOINT 3\n\n\n\n\n'); // começou nos operadores ternários (acho).


// trocar valores de variáveis
let r = 'red';
let b = 'blue';
console.log (r);
console.log (b);

let v = r;
r = 'vermelho';
console.log(r);
// para modificar uma variável existente, é necessário criar outra para armazenar esta primeira antes da modificação.

console.log('CONDICIONAIS')
// If..Else

// if(condicao) {
//     codigo a ser executado
// }
// else if(outraCondicao) {
//     codigo a ser executado
// }
// else {
//     codigo a ser executado
// }

let hora = 1
    
if (hora >= 6 && hora <= 12){
    console.log('Bom dia!')
}
else if (hora > 12 && hora <= 18){
    console.log('Boa tarde!')
}
else if (hora > 18 && hora < 24){
    console.log('Boa noite!')
}
else {
    console.log('Vai dormir')
};


console.log('\nCHECKPOINT 4\n\n\n\n\n'); // Continuando as condicionais

// CONDICIONAIS: Switch..case

let permissao = 'gerente'; //comum, gerente, diretor

switch (permissao) {
    case 'comum':
        console.log('Usuário do tipo: Comum')
        break;
    case 'gerente':
        console.log('Usuário do tipo: Gerente')
        break;
    case 'diretor':
        console.log('Usuário do tipo: Diretor')
        break;    
    default:
        console.log('Usiário não reconhecido!')
};


// forma ineficiente ruim desprezível imbecil burra ineficaz de repetir uma ação:
// console.log('Não faça isso!')
// console.log('Não faça isso!')
// console.log('Não faça isso!')
// console.log('Não faça isso!')
// console.log('Não faça isso!')

// LOOPs:
// 1. For
// 2. while 
// 3. Do..while
// 4. For..In
// 5. For..of

console.log('loop for')
//  1. FOR

for(let i = 0; i < 5; i++){
    console.log('Faça assim',i);
}; // i as in 'index'

// caso queira selecionar apeas os números ímpares (em ordem crescente), use:
for(let i = 0; i < 10; i++){
    if(i % 2 !== 0) {
        console.log(i);
    };
};

// !== - Sinal 'diferente de'

// para ordem DECRESCENTE, use:
for(let i = 10; i > 0; i--){
    if(i % 2 !== 0) {
       console.log(i);
    };
};

// para o erro de sintaxe 'Unexpected end of input', feche todas as chaves, colchetes etc.


console.log('\nloop while\n\n');
// 2. WHILE loop
// OBS.: diferente do anterior, a variável deve ser declarada fora do loop.

let i = 5;

while(i >= 1){
    if(i % 2 !== 0) {
        console.log(i);
    }
    i--;
}


console.log('\n\nCHECKPOINT 5\n\n\n\n\n')


console.log('\nloop do..while\n\n');
// 3. DO..WHILE loop

do {
    console.log('digitando...',i);
    i++
} while (i < 5);


console.log('\nloop for..in\n\n');
// 4. FOR..IN loop

const human = {
    name: 'John', // vírgula importante sempre antes do próximo elemento do objeto!!!
    age: 25
};

// 
for(let name in human) {
    console.log(name,human.name, human.age);
};

const cores = ['red','blue','green'];

console.log(cores[0]) // lembre-se dessa estrutura

for(let index in cores){
    console.log(index,cores[index]);
};


console.log('\nloop for..of\n\n');
// FOR..OF loop
// usando o mesmo array 'cores' do tópico passado


for(cor of cores){
    console.log(cor);
};

console.log(cores);

console.log('\n\ndeu de loops(por ora)')

// MAIOR ENTRE 2 NÚMEROS

let valorMaior = mostrarMaiorNumero(644523,546186)
console.log(valorMaior);

function mostrarMaiorNumero(number1,number2){
    if (number1 > number2)
        return number1
    else return number2
};

 function mostrarMaiorNumero(number1,number2){
      return number1>number2 ? number1 : number2
 };

console.log('\n\nfizzBuzz\n\n\n')

// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 = entrada
// Não é um número => 'Não é um número'


const result = fizzBuzz(9);
console.log(result);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um número!';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz'
    if(entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
};

console.log('\n\nCHECKPOINT 6\n\n\n\n\n')

// MEDIDOR DE VELOCIDADE
// Velocidade máxima permitida: 70km/h
// A cada 5km excedidos, o infrator ganha um ponto na carteira
// caso pontos > 12, 'carteira suspensa'

velocidade = 110
velocidadeMaxima = 70
kmPorPonto = 5

verificarVelocidade(velocidade)

function verificarVelocidade(){
    if(velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log('Pontos: ',pontos) 
    };
};

// exibirTipo(0)
// function exibirTipo(nmr){
//     for(let nmr = 0; nmr <= 12; nmr++);
//     if(nmr % 2 == 0){
//         console.log(nmr,' is a pair')
//     };
//     if(nmr % 2 !== 0){
//         console.log(nmr,' is an unpair');
//     };
// };

let nmr = 0;

while(nmr <= 3){
    if(nmr % 2 !== 0) {
        console.log(nmr,' is an unpair');
    }
    nmr++;
    if(nmr % 2 == 0) {
        console.log(nmr, ' is a pair')
    };
};


// selecionar de um objeto apenas variáveis que forem 'strings' e exibí-las no console.

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    criador : 'Stan Lee',
    personagem : 'Thor'
};

// em se tratando de seleção de itens em objetos, usar o loop for..in

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] == 'string')
            console.log(prop, ':', obj[prop])       
};


exibirPropriedades(cores)
exibirPropriedades(human)

console.log('\n\nCHECKPOINT 7\n\n\n\n')


// exercício: somar múltiplos de 3 e de 5




// somar(15)
// function somar(limite){
//     let multiplosDeTres = 0;
//     let multiplosDeCinco = 0;
//     for(i = 0; i <= limite; i++){
//         if(i % 3 === 0)
//         multiplosDeTres += i;
//         if(i % 5 === 0)
//         multiplosDeCinco += i;
//     }
//     console.log(multiplosDeTres + multiplosDeCinco)
// }



somar(14)

somar(50)
function somar(limit){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i = 0; i <= limit; i++){
        if(i % 3 === 0)
        multiplosDe3 += i;
        if(i % 5 === 0)
        multiplosDe5 += i;
    };
    console.log(multiplosDe5 + multiplosDe3)
};



console.log('\n\nCHECKPOINT 8\n\n\n\n')


let array = [85,70,94];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    let soma = 0
    for(let nota of notas){
        soma += nota;
    }
    let media = soma / (array.length);

    // if(media >= 0 && media <= 59){
    //     console.log('F')
    // }
    // if(media >= 60 && media <= 69){
    //     console.log('D')
    // }
    // if(media >= 70 && media <= 79){
    //     console.log('C')
    // }
    // if(media >=80 && media <= 89){
    //     console.log('B')
    // }
    // else console.log('A')

    if(media<59)return'F';
    if(media<69)return'D';
    if(media<79)return'C';
    if(media<89)return'B';
    return'A'
};




const arranjo = [80,56,21,65,56,51,25]

console.log(mediaAluno2(arranjo))


function mediaAluno2(grades){
    const media = calculateAverage(grades)

    if(media<30)return'bad';
    if(media<45)return'regular';
    if(media<60)return 'good';
    return'excellent';
};

// A função abaixo estava aplicada dentro da acima, então, para torná-la aplicável a outros casos, foi separada em uma segunda função mais genérica.


function calculateAverage(array){
    let sum = 0;
    for(let value of array){
        sum += value;
    };
    return sum / (array.length);
};


// 
// mais um checkpoint
// 

console.log(exibirPropsNumericas(pessoa))

function exibirPropsNumericas(obj){
    for(prop in obj){
        if (typeof obj[prop] === 'number'){
        console.log(prop,':',obj[prop])
    };
    };
};

// prop = nome da propriedade(variável)
// obj[prop] = valor da propriedade



// for(i = 0; i < 5; i++){
//     console.log('só pra reforçar o loop!!!',i)
// };


// o {,i} é importante para que seja impressa todas as vezes na tela.

exibirAsteriscos(5);

function exibirAsteriscos(linhas){
    // let padrao = '';
    // for(let linha = 1; linha <= linhas; linha++){
    //     padrao += '*';
    //     console.log(padrao);
    // }
    
    
// LOOP NESTED: 
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*'
        };
        console.log(padrao);
    };
};



// função que exiba apenas números primos

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){    
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            };
        };

        if(ehPrimo) console.log(numero)
    };
};






let valor = 5700

switch(valor){
    case valor <= 900:
        console.log(valor * 20)
        break;
    case valor <= 1000:
        console.log(valor * 15)
        break;
    case valor <= 2000:
        console.log(valor * 10)
        break;
    case valor <= 3000:
        console.log(valor * 7)
        break;
    default:
        console.log(valor * 5)
};

// while(valor = 215){
//     if(valor <= 900){
//         console.log(valor * 20);
//     };
//     if(valor <= 1000){
//         console.log(valor * 15);
//     };
//     if(valor <= 2000){
//         console.log(valor * 10);
//     };
//     if(valor <= 3000){
//         console.log(valor * 7);
//     };
//     if(valor>3000) console.log(valor * 5)
// };
// 
// esse código NÃO DEU CERTO!!




console.log('\n\nCHECKPOINT 8\n\n\n\n')

console.log('FACTORY FUNCTIONS')

const celular0 = {
    marcaCelular : 'MOTOROLA',
    tamanhoTela : {
        vertical : 155,
        horizontal : 55
    },
    capacidadeBateria : 5000,
    ligar : function() {
        console.log("Fazendo ligação...")
    }
};

// aplicação das Factory Functions

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular, 
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
};

const celular1 = criarCelular('positivo', 4.6, 800)

console.log(celular1)

console.log('CONSTRUCTOR FUNCTIONS')


function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular, 
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
};


// Pascal Case: UmDoisTresQuatro
// camelCase: umDoisTresQuatro



function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo ligação...');
    }
};

const celular = new Celular('asus', 5.5, 4000);

console.log(celular)





// IMPORTANTE FIXAR!!!: 

function Processador(GHz, nucleos, threads, marcaProcessador, precoProcessador, temGPUintegrada){
    this.GHz = GHz,
    this.nucleos = nucleos,
    this.threads = threads,
    this.marcaProcessador = marcaProcessador,
    this.precoProcessador = precoProcessador,
    this.temGPUintegrada = temGPUintegrada
};

const processador = new Processador(3.6, 8,16,'Intel',1298,false);
console.log(processador);

const processador1 = new Processador(2.4,6,12,'Intel Xeon',250,false);
console.log(processador1);


// Natureza dinâmica dos objetos
// adicionando e removendo propriedades/funções de objetos

const objetoExemplo = {
    altura : 'x',
    largura : 'y'
};

objetoExemplo.addFunction = function addFunction () {
    console.log('you added a function to this object.')
};

objetoExemplo.profundidade = 'z'

console.log('\n',objetoExemplo);

delete objetoExemplo.addFunction;

console.log('\n',objetoExemplo); 

delete objetoExemplo.profundidade;

console.log('\n',objetoExemplo);




console.log('\n\nCHECKPOINT 9\n\n\n\n');




console.log('CLONANDO OBJETOS\n\n');




const objetoClonado = Object.assign({
    addedProp : 'propriedade adicionada ao objeto clonado usando "Object.assign"'
},celular);

console.log(objetoClonado);

// ou também


const objetoClonado1 = {...celular};

console.log(objetoClonado1)


const clonado = {
    a : 'a',
    b : 'b',
    c : 'c'
};

const clone = {...clonado};

console.log('\n',clone,'\n')

const clone1 = Object.assign({
    d : 'd'
},clonado);

console.log(clone1);


const sanduiche = {
    a : 'pão',
    b : 'maionese',
    c : 'tomate',
    d : 'alface',
    e : 'queijo e mortadela'
};

const sanduicheComCebola = Object.assign({
    f : 'cebola'
},sanduiche);

console.log(sanduiche,sanduicheComCebola);







function Cube(eixoX, eixoY, eixoZ){
    this.eixoX = eixoX,
    this.eixoY = eixoY,
    this.eixoZ = eixoZ
};

const rubikCube = new Cube(3,3,3)

console.log(rubikCube)



console.log('\n\nFUNÇÃO NATIVA DO JAVASCRIPT "MATH"\n\n')




console.log(Math.trunc(16.99999999999)) // Retorna apenas o valor inteiro, ignorando os decimais (arredonda para baixo).

console.log(Math.round(4.5)) // Arredonda para o inteiro mais próximo.

console.log(Math.abs(-73)) // Retorna o módulo do número. Ou seja, qualquer número negativo será convertido ao seu positivo, e os positivos continuarão positivos.

console.log(Math.sqrt(9)) // Retorna a Raiz Quadrada

console.log('Minha nota é: ',Math.round(9.5)) // 9.5 === 10




console.log('\nVocabulary\n\n')

const variavel = ' string '

const outraVariavel = new String(' presentation')



console.log(outraVariavel.length); // Mostra a quantidade de elementos de um objeto (no caso dessa string, o número de caracteres, incluindo espaços)

console.log(outraVariavel[7]); // retorna o elemento correspondente ao número (começando a contar do 0)

console.log(outraVariavel.includes(Number)); // verifica se contém tal coisa dentro ali do troço, tlgd

console.log(outraVariavel.startsWith(' '));

console.log(outraVariavel.endsWith(' '));

console.log(outraVariavel.indexOf('s'));

console.log(outraVariavel.replace('ation','',)); // não muda permanentemente o valor da variável, apenas nesta exibição 
console.log(outraVariavel.replace(' ','',));

console.log(outraVariavel.trim()) // tira os espaços das extremidades da string

console.log(outraVariavel.split('t')) // separa tudo o que estiver "ao redor" do que for escrito ali, não sei dizer direito mas tu é inteligente, vai entender.

console.log('\n\nCHECKPOINT 10\n\n\n\n')



// TEMPLATE LITERAL
// pesquisar: escape sequences

const mensagem = 'Olá, essa é minha\n \"primeira\" mensagem!'

// Mesma coisa usando Template Literal (``):

const outraMensagem = `Olá, essa é minha
"primeira" mensagem!`;

console.log(outraMensagem, '\n\n');
const nome1 = 'John';

const email = 
`Olá ${nome1},

Obrigado pelo feedback,

Em breve, novas atualizações para o aplicativo serão lançadas, que melhorarão o desempenho deste.

Atenciosamente,
SMBDev Corporation`;


// LIDANDO COM DATAS

const data = new Date(); // retorna a data atual
const data1 = new Date('January 13 2022 8:56 AM');
const data2 = new Date(2022,00,13,8,58);

// Para usar informações 'isoladas' das datas, use "variavelData.get..."
// Para mudar informações das datas, use "variavelData.set..."

data2.setFullYear(2023);
console.log(data2.toDateString());

data2.toISOString();

console.log(email);


console.log('\n\nCHECKPOINT 11\n\n\n\n');

// criar objeto 'endereco' que contenha:
// Rua, Cidade, CEP, exibirEndereço(endereco)


let endereco = {
    rua : 'Tenente Alpoin',
    numero : 777,
    cidade : 'Porto Alegre',
    estado : 'Rio Grande do Sul',
    cep : 91510740
};

function exibirEndereco(endereco){
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
};

// AQUI, o uso do 'chave' serve para falar o nome da variavel seguido da informação, ou seja,
// retornará "rua Tenente Alpoin", "numero 777", "cidade Porto Alegre" etc

// caso não use a sintaxe acima, printa o objeto de forma "corrida"

exibirEndereco(endereco);

function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade, 
    this.cep = cep
};

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');
const enderecotres = endereco1;


function saoIguais(endereco1,endereco2){
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep
};

// compara cada uma das props, se iguais retorna "true"

console.log(saoIguais(endereco1,endereco2));



function mesmaMemoria(endereco1,enderecotres){
    return endereco1 === enderecotres
};

// verifica se ocupam o mesmo espaço memória (quando são literalmente a mesma variável, podendo ter sido nomeadas diferente [ou não])

console.log(mesmaMemoria(endereco1,enderecotres));


for(i = 0; i < 3; i++){
    console.log("reforçando...",i)
};

// objeto postagem:
// titulo, mensagem, autor, comentarios(autor, mensagem), estaAoVivo
// depois criar a function CriarPostagem

const postagem = {
    titulo : "Título clickbait da Postagem",
    mensagem : "Mensagem muito genérica", 
    autor : "Um cara beeem mediano",
    comentarios : [
        {autor: "fulano", comentario: "bla bla bla"}
    ],
    estaAoVivo : false
};


function Post(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = []
    this.estaAoVivo = false
};

const postagem1 = new Post("Título clickbait demais","Mensagem muito genérica","Um cara beeem mediano",50.5,false);

console.log(postagem1);





const pcGamer  = {
    cpu : 1800,
    motherboard : 750,
    ram : 500,
    gpu : 6000,
    ssd : 340,
    hd : 390,
    fonte : 770,
    waterCooler : 400,
    gabinete : 1500
};



// fazer um array q defina uma faixa de preço 

let faixasDePreco = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'a partir de R$1000', minimo: 1000, maximo: 99999999}
];

console.log(faixasDePreco)
// segunda opção

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
};

let faixas = [
    new FaixaPreco('até R$500',0,500),
    new FaixaPreco('de R$500 a 1000',500,1000),
    new FaixaPreco('de R$1000 a R$5000',1000,5000)
]
console.log(faixas)



console.log('\n\nCHECKPOINT 11\n\n\n\n');

// INTRODUÇÃO A ARRAYS
// adicionar elementos, encontra elementos, remover elementos, dividir elementos, dividir arrays, combinar arrays 

// ADICIONAR ELEMENTOS A UM ARRAY


const numeros = [0,1,2,2,1]

// no inicio
numeros.unshift('start');
console.log(numeros)

// no meio
numeros.splice(4,0,'mid') // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log(numeros)

// no fim
numeros.push('final')
console.log(numeros)


// ENCONTRAR ELEMENTOS DENTRO DO ARRAY

console.log(numeros.indexOf('mid'))
console.log(numeros.lastIndexOf(2) !== -1) // quando o elemento não é encontrado no array, sempre retorna -1
// ou
console.log(numeros.includes(2))



// FUNÇÃO NATIVA "FIND"

const marcas = [
    {nome: 'Chevrolet', valor: 1000},
    {nome: 'Volkswagen', valor: 650},
    {nome: 'Fiat', valor: 2400},
    {nome: 'Renault', valor: 400}
]



let find = numeros.find(element => element < 1);

console.log(find);


const marca = marcas.find(function(marca){
    return marca // .valor, .nome, + um parâmetro. Nesse caso, não adicionei pois esse parâmetro não será exibido
});
// ou, mais clean

console.log(marcas.find(marca => marca.nome === 'Fiat'));

console.log(marca);

// REMOVENDO ELEMENTOS DE UM ARRAY

const randomNumbers = [10,85,65,21,56,84,6];
console.log('\n\n',randomNumbers,'\n');


// do FIM:

const ultimo = randomNumbers.pop(); // se exibido no console, mostrará o último elemento do array, que está sendo removido
console.log('\nexibindo último elemento do array usando "array.pop":',ultimo);
console.log('\n\n',randomNumbers,'\n');


// do MEIO:

console.log('\n\n',randomNumbers.splice(3,1));
console.log(randomNumbers);


// do INÍCIO:

console.log('\n\n',randomNumbers.shift());
console.log(randomNumbers);


// ESVAZIANDO UM ARRAY

console.log(randomNumbers.splice(0)) 
console.log(randomNumbers)


randomNumbers.length = 0;
console.log(randomNumbers)



// JUNTANDO E DIVIDINDO ARRAYS

const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
// Concatenar (juntar os dois arrays)
const concatenados = array1.concat(array2);
console.log(concatenados);

// Ou também (utilizando 'spread')
const concatenados1 = [...array1, 'adição à concatenação de arrays',...array2]
console.log(concatenados1,'\n');


// Dividir arrays
const sliceDeOutroArray = concatenados.slice(3); // primeiro parâmetro declara o (índice) ponto de partida, o segundo será o índice do último, que não será acrescido.
console.log(sliceDeOutroArray);

// Clonar array usando o operador 'spread'
const clone0 = [...concatenados1]
console.log(clone0, '\n_____',concatenados1)


// ITERANDO UM ARRAY

for(concatenado of concatenados){
    console.log(concatenado)
}
// método .forEach
concatenados.forEach((concatenado,indice) => console.log(concatenado,indice))


// COMBINANDO ARRAYS

const numeros1 = [1,2,3,4,5];

const combinado = numeros1.join('-')
console.log(combinado)

const frase = 'estou terminando o curso'
const fraseDividida = frase.split(' ')
console.log(fraseDividida)

const fraseDividida1 = frase.replaceAll(' ','-')
console.log(fraseDividida1)



