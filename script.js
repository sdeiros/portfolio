var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30, // Espaçamento maior para telas grandes
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Quando a tela tem 1440px ou mais
        1440: {
            slidesPerView: 3,
            spaceBetween: 20, // Diminui o espaçamento em telas muito grandes
        },
        // Quando a tela tem entre 1024px e 1439px
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 20, // Espaçamento entre os cards em tamanhos intermediários
        },
        // Quando a tela tem entre 720px e 1023px
        720: {
            slidesPerView: 1.5,
            spaceBetween: 15, // Ajuste para manter um layout agradável
        },
        // Quando a tela tem menos de 720px
        0: {
            slidesPerView: 1,
            spaceBetween: 10, // Mais espaçamento entre cards em telas pequenas
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pausar autoplay ao passar o mouse
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

const currentYear = new Date().getFullYear();

document.getElementById('current-year').textContent = currentYear;

function wrapWords(selector) {
    const element = document.querySelector(selector);
    const words = element.innerText.split(' ');
    element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
}

wrapWords('.h1-wrapper h1'); 

gsap.registerPlugin(ScrollTrigger);

gsap.from(".h1-wrapper h1 .word", {
    duration: 0.8,
    opacity: 0,
    y: 80,
    stagger: 0.2,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".h1-wrapper h1", 
        start: "top 80%", 
        end: "bottom 20%", 
        toggleActions: "play none none none", 
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
    const rect = circle.getBoundingClientRect(); 
    const x = rect.left + rect.width / 2; 
    const y = rect.top + rect.height / 2;

    transitionEffect.style.left = `${x}px`;
    transitionEffect.style.top = `${y}px`;
    transitionEffect.classList.add('active');

    // Usando GSAP para animar o efeito
    gsap.to(transitionEffect, {
        scale: 1.5,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
            transitionEffect.classList.remove('active');
            gsap.set(transitionEffect, { scale: 1, opacity: 1 }); // Reseta a escala e a opacidade
        }
    });
}


document.getElementById("emailLink").addEventListener("click", function(event) {
    event.preventDefault();  

    window.location.href = 'davi.medeiros.silva1@gmail.com';

    setTimeout(function() {
        var modal = document.getElementById("emailModal");
        modal.style.display = 'block';
        setTimeout(function() {
            modal.style.opacity = 1; 
        }, 10); 
    }, 1000); 
});

function copyEmail() {
    const email = 'davi.medeiros.silva1@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        alert('E-mail copiado para a área de transferência!');
    }, function(err) {
        alert('Erro ao copiar o e-mail. Tente manualmente.');
    });
}

function closeModal() {
    var modal = document.getElementById("emailModal");
    gsap.to(modal, { opacity: 0, duration: 0.5, onComplete: () => {
        modal.style.display = 'none'; 
    }});
}

document.getElementById("emailLink").addEventListener("click", function(event) {
    event.preventDefault();  
    window.location.href = 'davi.medeiros.silva1@gmail.com';
    setTimeout(function() {
        var modal = document.getElementById("emailModal");
        modal.style.display = 'block';
        gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.5 }); // Animação de entrada do modal
    }, 1000); 
});

let lastScrollTop = 0; 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
});


