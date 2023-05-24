const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", function() {
    console.log('Cliquei no robô.');
});

function dizOi(nome) {
    console.log(nome);
    console.log('Bem vindo ao Robotron 2000');
}

dizOi('Pedro');