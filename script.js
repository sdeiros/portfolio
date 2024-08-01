var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            console.log('Swiper initialized');
        },
        slideChange: function () {
            // Atualiza a cor do botão esquerdo quando o slide muda
            updateButtonColors();
        }
    }
});

function updateButtonColors() {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    // Muda a cor do botão esquerdo quando o botão direito é clicado
    if (swiper.isEnd) {
        prevButton.classList.add('black');
    } else {
        prevButton.classList.remove('black');
    }
}

// Adiciona um ouvinte de evento ao botão direito
document.querySelector('.swiper-button-next').addEventListener('click', () => {
    updateButtonColors();
});
