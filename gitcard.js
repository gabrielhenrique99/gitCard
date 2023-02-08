const linkImagem = document.querySelector(".avatar");
const imagem = linkImagem.querySelector("img");
const nome = document.querySelector(".content h1");
const repositorios = document.querySelector('#repositorios');
const gists = document.querySelector('#gists');
const seguidores = document.querySelector('#seguidores');
const usuario = document.querySelector("#usuario-github");
const buscar = document.querySelector("#buscar-github");
const link = document.querySelector("a");

buscar.addEventListener("click", e => {
    e.preventDefault();
    getGitHubInfo(usuario.value);
})

const getGitHubInfo = function (username) {

    var url = `https://api.github.com/users/${username}`;

    var ajax = new XMLHttpRequest();
    
    ajax.onreadystatechange = function () {

        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            imagem.src = ajax.avatar_url;
            linkImagem.href = ajax.html_url;
            nome.innerText = ajax.name;
            seguidores.innerText = ajax.followers;
            gists.innerText = ajax.public_gists;
            repositorios.innerText = ajax.public_repos;
            console.log(ajax);
        }
        
    };

    ajax.open('GET', url, true);
    ajax.send();

};


