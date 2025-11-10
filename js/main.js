'use strict'

import { lerContatos, criarContato } from "./contatos.js"

const carregarCards = async () => {
    const contatos = await lerContatos()
    const container = document.getElementById('container')
    const cards = contatos.map(criarCards)
    //os 3 pontos seriam para varrer e espalhar o array pelo container
    container.replaceChildren(...cards)
}

const criarCards = (contato) => {
    const card = document.createElement('div')
    card.classList.add('card-contato')

    const img = document.createElement('img')
    img.src = contato.foto
    img.alt = contato.nome

    const nome = document.createElement('h2')
    nome.textContent = contato.nome

    const celular = document.createElement('p')
    celular.textContent = contato.celular

    card.append(img, nome, celular)

   return card
}

const botaoNovoContato = document.getElementById('novo-contato')
const botaoCancelar = document.getElementById('cancelar')
const main = document.querySelector('main')
const botaoSalvar = document.getElementById('salvar')


const mostrarFormulario = () => {
    main.classList.remove('card-show')
    main.classList.add('form-show')
}

const mostrarCards = () => {
    main.classList.remove('form-show')
    main.classList.add('card-show')
    document.querySelector('form')
    document.getElementById('preview-image').src = './img/preview-icon.png'
}

const salvarContato = async () => {
    const form = document.querySelector('form')
    const contato = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        cidade: document.getElementById('cidade').value,
        endereco: document.getElementById('endereco').value,
    }

    await criarContato(contato)

    alert('Contato salvo com sucesso!')
    mostrarCards()
    carregarCards()

}


botaoSalvar.addEventListener('click', salvarContato)
botaoNovoContato.addEventListener('click', mostrarFormulario)
botaoCancelar.addEventListener('click', mostrarCards)

carregarCards()