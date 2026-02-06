const elogios = [
    "Dona do sorriso mais lindo do mundo! ✨",
    "Uma alma radiante que ilumina tudo ao redor.",
    "Inteligente, forte e inspiradora. 🌹",
    "Aialla, você é a definição de perfeição.",
    "Seu brilho é único e sua doçura é contagiante.",
    "O mundo fica mais bonito com você nele. ❤️"
];

function mudarElogio() {
    const textoElogio = document.getElementById('elogio');
    const aleatorio = Math.floor(Math.random() * elogios.length);
    
    // Adiciona uma pequena animação de fade
    textoElogio.style.opacity = 0;
    
    setTimeout(() => {
        textoElogio.innerText = elogios[aleatorio];
        textoElogio.style.opacity = 1;
    }, 300);
}
const player = document.getElementById('musica');
const btnMusica = document.getElementById('btn-musica');
const iconeMusica = document.getElementById('icone-musica');

function toggleMusica() {
    if (player.paused) {
        player.play();
        btnMusica.classList.add('tocando');
        iconeMusica.innerText = '⏸️';
        btnMusica.innerHTML = '<span id="icone-musica">⏸️</span> Pausar Música';
    } else {
        player.pause();
        btnMusica.classList.remove('tocando');
        iconeMusica.innerText = '🎵';
        btnMusica.innerHTML = '<span id="icone-musica">🎵</span> Ouvir com música';
    }
}

// Opcional: Volume um pouco mais baixo para ser agradável
player.volume = 0.4;