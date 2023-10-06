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