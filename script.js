console.log("Olá mundo!")

document.write('Ué')

//Problema: receber 3 notas de um aluno,
//calcular e apresentar a média e o resultado
//se o aluno foi aprovado ou não.

console.log('\nInicio do programa')

let nota = [7,6,5]
let media1 = 0
let media2 = 0
let aprovado = false

let notas = []
for (let a=0;a<nota.length;a++) {
    media1 += nota[a]
    notas[a] = parseInt(prompt('digite a nota '+(a+1)))
    media2 += notas[a]
    //console.log('a nota',(a+1),'é:',nota[a])
    console.log('a nota',(a+1),'é:',notas[a])
    
}

media1 = media1/nota.length
media2 = media2/nota.length
//console.log(media)

if (media1 || media2 >= 6) aprovado = true

console.log(aprovado)
console.log('Fim do programa')

