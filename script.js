var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800, // Velocidade da transição mais suave (1 segundo)
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
        disableOnInteraction: false, 
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

    setTimeout(() => {
        transitionEffect.classList.remove('active');
    }, 500); 
}

document.getElementById("emailLink").addEventListener("click", function(event) {
    event.preventDefault();  

    window.location.href = 'mailto:davi.medeiros.silva1@gmail.com';

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
    modal.style.opacity = 0; 
    setTimeout(function() {
        modal.style.display = 'none'; 
    }, 500); 
}
