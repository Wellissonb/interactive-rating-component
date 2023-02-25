var botao = document.querySelector('#botao')
var notas = document.querySelectorAll('.nota')
var resultado = document.querySelector('#notaFinal')
var botao = document.querySelector('#botao')
var rate = document.querySelector('.rate')
var thanks = document.querySelector('.thank')
var escolhida;

notas.forEach((nota)=>{

     nota.addEventListener('click', ()=>{
        for( let i = 0; i < notas.length; i++){
            notas[i].style.backgroundColor = '#7c87981c'
            notas[i].style.color = 'hsl(217, 12%, 63%)'
        }

        nota.style.backgroundColor = '#fb7413'
        nota.style.color = 'white'
        resultado.innerHTML = nota.innerHTML
    });
})



botao.addEventListener('click', ()=>{
    rate.style.display = 'none'
    thanks.style.display = 'flex'
})








