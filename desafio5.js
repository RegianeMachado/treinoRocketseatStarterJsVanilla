// Desafio Promise
// let idade = 17;

// const checaIdade = (idade) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => idade >= 18 ? resolve() :  reject(), 2000)
//     }) 
// }

// checaIdade(idade)
//     .then(() => console.log('Maior de idade'))
//     .catch(() => console.log('Menor de idade'))

//busca github

let user = document.querySelector('#user');
let valueUser = user.value;

let ulListaRepos = document.querySelector('#ul-listaRepos');
let button = document.querySelector('#btn-adicionar');

const getData = () => {
    return axios.get('https://api.github.com/users/' + valueUser + '/repos')
    .then(response => {
        let repositorios = response.data;
        ulListaRepos.innerHTML = '';

        repositorios.forEach((repositorio, index) => {
        
            let nomeRepos = repositorio.name;
                
            let liListaRepos = document.createElement('li');

            let textLiListaRepos = document.createTextNode(nomeRepos);
        
            liListaRepos.appendChild(textLiListaRepos)
            ulListaRepos.appendChild(liListaRepos);

            })    
    })
    .catch(error => error.request.status === 404 ? alert('usuário não existe') : error);
}

button.onclick = () => {
    valueUser = user.value
    getData()
}
