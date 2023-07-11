let numeroHabitantes = 100_000;
let aux = numeroHabitantes;

console.log(`NUMERO DE HABITANTES EM GRAVATÁ NA MINHA OPINIÃO = ${aux}`);

numeroHabitantes = 86_516;

if (aux != numeroHabitantes) {
    console.log(`NÚMERO DE HABITANTES EM GRAVATÁ SEGUNDO SENSO [2022] = ${numeroHabitantes}`);
    if (aux != numeroHabitantes) {
        if (aux - numeroHabitantes < 0) {
            console.log(`MEU PALPITE FOI ERRADO POR UMA DIFERENÇA DE ${(aux - numeroHabitantes) * (-1)} HABITANTES.`);
        } else {
            console.log(`ERREI O PALPITE POR ${aux - numeroHabitantes} HABITANTES.`);
        }
    }
}