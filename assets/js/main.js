const logo = document.getElementById('myLogin');
logo.onclick = function () {
    window.location.href = "index.html"
}

const arrowClick = document.getElementById('arrowCupom');
arrowClick.addEventListener('click', function() {
    window.open('cupomPage.html', '_self');
});

const login = document.getElementById('clickArrowLogin');
login.addEventListener('click', function() {
    window.open('loginPage.html', '_self');
});

// codigo para a area de endereço e seus promps de comando 
const endereco = document.getElementById('clickEndereco');
endereco.addEventListener('click', function() {
    // Coletar dados do usuário
    let ruaDaCasaDoUsuario = prompt('Digite sua Rua:'); 
    let numberDaCasaDoUsuario = prompt('Digite o Número da sua Casa:');
    let lugarDeReferenciaDaCasaDoUsuario = prompt('Digite um Ponto de Referência:');

    // Salvar em um objeto
    let enderecoDoUsuario = {
        rua: ruaDaCasaDoUsuario,
        numero: numberDaCasaDoUsuario,
        referencia: lugarDeReferenciaDaCasaDoUsuario
    };

    // Exibir o endereço em um alerta
    alert(`Seu endereço é:\nRua: ${enderecoDoUsuario.rua}\nNúmero: ${enderecoDoUsuario.numero}\nReferência: ${enderecoDoUsuario.referencia}`);
});

// codigo para modal do carrinho de compras

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

    // Quando o usuário clica no botão, abre o modal
openModalBtn.onclick = function() {
    modal.classList.remove("hidden");
}

    // Quando o usuário clica no botão de fechar, fecha o modal
closeModalBtn.onclick = function() {
    modal.classList.add("hidden");
}

    // Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.add("hidden");                
    }
}

// modal do login
const modalLogin = document.getElementById("modalLogin");
const openModalLogin= document.getElementById("openModalLogin");
const closeModalLogin = document.getElementById("closeModalLogin");

    // Quando o usuário clica no botão, abre o modal
openModalLogin.onclick = function() {
    modalLogin.classList.remove("hidden");
}

    // Quando o usuário clica no botão de fechar, fecha o modal
closeModalLogin.onclick = function() {
    modalLogin.classList.add("hidden");
}

    // Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target === modalLogin) {
        modalLogin.classList.add("hidden");                
    }
}


// codigo para criação de objetos de restaurantes
// let restaurantes = {
//     "name": "bar do bode",
//     "endereco": {
//         "rua": "rua 1",
//         "numero": 123
//     },
//     "classificacao": "3 estrelas",
//     "telefones": ["1234-5678", "8765-4321"],
//     // "logo": 
// }