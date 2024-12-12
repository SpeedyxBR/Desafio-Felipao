let nomeHeroi = prompt("Digite o nome do herói:"); 
// Solicita ao usuário o nome do herói e armazena na variável 'nomeHeroi'.

let xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:")); 
// Solicita ao usuário a quantidade de experiência (XP), converte o valor para um número inteiro e armazena na variável 'xpHeroi'.

let nivel; 
// Declara a variável 'nivel', que será usada para armazenar a classificação do herói com base no XP.

// Classifica o nível do herói com base no valor de 'xpHeroi' usando uma estrutura condicional.
if (xpHeroi < 1000) {
  nivel = "Ferro"; 
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivel = "Bronze"; 
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivel = "Prata"; 
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  nivel = "Ouro"; 
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivel = "Platina"; 
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivel = "Ascendente"; 
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivel = "Imortal"; 
} else {
  nivel = "Radiante";
}

// Exibe o nome do herói e o nível no console com formatação.
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`); 
// Usa template literals para construir e exibir a mensagem formatada no console.
