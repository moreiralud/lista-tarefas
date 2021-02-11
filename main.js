import BotaoConclui from './assets/componentes/concluiTarefa.js'
import BotaoDeleta from './assets/componentes/deletaTarefa.js'

    const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('.form-input')
    const valor = input.value

    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`/* recebe html e js (acentograve) `<p>${ }</p>*/

    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa) /*sempre coloca a tarefa no final do nó. Todo nó do DOM pode ser acessado via Js*/
    input.value = " "
}

const novaTarefa = document.querySelector('.form-button')
novaTarefa.addEventListener('click', criarTarefa)









