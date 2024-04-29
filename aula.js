//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

let nomeDoHeroi = "Leandrudison";

let xpDoHeroi = 7500;

let rank = [
    [1.000, "Ferro"]
    [2.001, "Bronze"]
    [5.001, "Prata"]
    [7.001, "Ouro"]
    [8.001, "Platina"]
    [9.001, "Ascendente"]
    [10.000, "Imortal"]
    [10.001, "Radiante"]
];

let mensagem = "";