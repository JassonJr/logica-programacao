//console.log("Olá mundo!")

//document.write('Ué')

//Problema: receber 3 notas de um aluno,
//calcular e apresentar a média e o resultado
//se o aluno foi aprovado ou não.

// console.log('\nInicio do programa')

// let nota = [7,6,5]
// let media1 = 0
// let media2 = 0
// let aluno = " "

// let notas = []
// for (let a=0;a<nota.length;a++) {
//     media1 += nota[a]
//     //notas[a] = parseInt(prompt('digite a nota '+(a+1)))
//     media2 += notas[a]
//     //console.log('a nota',(a+1),'é:',nota[a])
//     console.log('a nota',(a+1),'é:',notas[a])
    
// }

// media1 = media1/nota.length
// media2 = media2/nota.length
// //console.log(media)

// if (media2 >= 7) aluno = "APROVADO"
// else if (media2 >= 5) aluno = "EXAME"
// else aluno = "REPROVADO"
// console.log(aluno)
// console.log('Fim do programa')
function mediaAluno() {
    console.log('\nInicio do programa')
    //declaração das variaveis
    const nota1 = parseInt(document.getElementById('nota1').value)
    const nota2 = parseInt(document.getElementById('nota2').value)
    const nota3 = parseInt(document.getElementById('nota3').value)
    const result = document.getElementById('result')
    
    //Calculo média
    const media = (nota1 + nota2 + nota3) / 3
    result.innerHTML = 'A média do aluno é: ' + media + '<br>';

    if (media >= 7) result.innerHTML  += 'APROVADO'
    else if (media >= 5) result.innerHTML  += 'EXAME'
    else result.innerHTML += 'REPROVADO'

    console.log('Fim do programa')
}