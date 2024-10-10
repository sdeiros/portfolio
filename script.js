var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1000, // Velocidade da transição mais suave (1 segundo)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // quando a tela tem 1024px ou mais
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        // quando a tela tem entre 768px e 1023px
        720: {
            slidesPerView: 1.1,
            spaceBetween: 0,
        },
        // quando a tela tem menos de 768px
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false, // continua após interação
    },
    on: {
        init: function () {
            console.log('Swiper initialized');
        },
        slideChange: function () {
            updateButtonColors();
        }
    }
});

function updateButtonColors() {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    if (swiper.isEnd) {
        prevButton.classList.add('black');
    } else {
        prevButton.classList.remove('black');
    }
}

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    updateButtonColors();
});

// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Atualiza o conteúdo do span com o ano atual
document.getElementById('current-year').textContent = currentYear;

function wrapWords(selector) {
    const element = document.querySelector(selector);
    const words = element.innerText.split(' ');
    element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
}

wrapWords('.h1-wrapper h1'); // Envolve as palavras do h1 em spans

// Ativar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação que ocorre quando o h1 entra em evidência
gsap.from(".h1-wrapper h1 .word", {
    duration: 0.8,
    opacity: 0,
    y: 80,
    stagger: 0.2,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".h1-wrapper h1", // Dispara a animação quando o h1 estiver visível
        start: "top 80%", // Início da animação (80% da viewport)
        end: "bottom 20%", // Fim da animação (20% da viewport)
        toggleActions: "play none none none", // A animação só acontece uma vez
    }
});

const blackCircle = document.querySelector('.circle.black');
const whiteCircle = document.querySelector('.circle.white');
const transitionEffect = document.getElementById('transition-effect');

blackCircle.addEventListener('click', () => {
    applyDarkTheme();
    createWaveEffect(blackCircle);
});

whiteCircle.addEventListener('click', () => {
    removeDarkTheme();
    createWaveEffect(whiteCircle);
});

function applyDarkTheme() {
    document.body.classList.add('dark-theme');
}

function removeDarkTheme() {
    document.body.classList.remove('dark-theme');
}

function createWaveEffect(circle) {
    const rect = circle.getBoundingClientRect(); // Posição do círculo
    const x = rect.left + rect.width / 2; // Centro do círculo
    const y = rect.top + rect.height / 2;

    // Define a posição da animação
    transitionEffect.style.left = `${x}px`;
    transitionEffect.style.top = `${y}px`;
    transitionEffect.classList.add('active');

    // Remove a animação após a conclusão
    setTimeout(() => {
        transitionEffect.classList.remove('active');
    }, 500); // Duração da animação deve corresponder à transição CSS
}

function sendEmail() {
    // Tenta abrir o aplicativo de e-mail padrão usando o mailto:
    var emailLink = document.createElement('a');
    emailLink.href = 'mailto:davi.medeiros.silva1@gmail.com';
    emailLink.click();

    // Fallback para Gmail após uma pequena pausa (tempo para detectar o cliente de e-mail)
    setTimeout(function() {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=davi.medeiros.silva1@gmail.com&su=Contato%20via%20site&body=Olá%20Davi,', '_blank');
    }, 500); // Ajuste o tempo conforme necessário
}
