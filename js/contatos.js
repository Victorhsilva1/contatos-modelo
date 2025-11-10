
export async function lerContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const response = await fetch(url)

    const contatos = await response.json()

    console.log(contatos)

    return contatos
}

export async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(contato),
    }

    const response = await fetch(url, options)

    console.log(response.ok)


    return response.ok
}

export async function deletarContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE',
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(contato),
    }

    const response = await fetch(url, options)

    console.log(response.ok)


    return response.ok
}

const novoContato = {
    "nome": "SANTOS PARTE 2",
    "celular": "11 9 1411-6464",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "ana@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Sorocaba"
}

// criarContato(novoContato)
lerContatos()
