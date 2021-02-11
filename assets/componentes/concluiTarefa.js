const BotaoConclui = () =>{ 
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText= 'concluir'
    

    botaoConclui.addEventListener('click', concluiTarefa) 
        /*console.log('fui clicado')*/


    return botaoConclui
}

const concluiTarefa = (evento) => {
    const botaoConclui = evento.target /* descobre onde foi clicado*/

    const tarefaCompleta = botaoConclui.parentElement
    
    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui