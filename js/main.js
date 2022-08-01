// let url = `https:viacep.com.br/ws/60115190/json/`
// const consultaCep = fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         if (data.erro) {
//             throw Error('Esse Cep não exite!')
//         }
//         console.log(data)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluido '))

//     console.log(consultaCep)


async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
        let url = `https:viacep.com.br/ws/${cep}/json/`
        var consultaCep = await fetch(url)
        var consultaCepConvertida = await consultaCep.json()
        if (consultaCepConvertida.erro) {
            throw Error('Cep não existente');
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro

        return (consultaCepConvertida);
    }

    catch (erro) {
        mensagemErro.innerHTML = `<p> Cep Inválido!! tente Novamente </p>`
        console.log(erro)
    }


}

// let ceps = ['01001000', '60115190',];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))

// Promise.all(conjuntoCeps)
//     .then(response => console.log(response))


var cep = document.getElementById('cep')

cep.addEventListener('focusout', (event) => {
    buscaEndereco(cep.value)
    
})


