document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrackProjects")
  const cards = document.querySelectorAll(".projetos .card")
  const nextBtn = document.querySelector(".carousel-btn.next")
  const prevBtn = document.querySelector(".carousel-btn.prev")

  if (!track || cards.length === 0) {
    return
  }

  const cardCount = cards.length
  let currentIndex = 0
  let autoSlideInterval
  let isTransitioning = false
  let touchStartX = 0
  let touchEndX = 0
  let touchStartY = 0
  let touchEndY = 0
  let isDragging = false
  let hasUserInteracted = false
  let isModalOpen = false // NOVA VARIÁVEL PARA CONTROLAR MODAL

  // Debounce function para otimizar performance
  function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  // Throttle function para eventos de alta frequência
  function throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments

      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  function getVisibleCards() {
    const width = window.innerWidth
    if (width <= 810) return 1
    if (width <= 1024) return 2
    return 3
  }

  function getCardWidth() {
    const visibleCards = getVisibleCards()
    return window.innerWidth / visibleCards
  }

  function updateCarousel(immediate = false) {
    if (isTransitioning && !immediate) return

    const cardWidth = getCardWidth()
    const translateX = -currentIndex * cardWidth

    // Usar requestAnimationFrame para melhor performance
    requestAnimationFrame(() => {
      track.style.transform = `translateX(${translateX}px)`
    })
  }

  function moveCarousel(direction, userTriggered = false) {
    if (isTransitioning) return

    if (userTriggered) {
      hasUserInteracted = true
      resetAutoSlide()
    }

    const visibleCards = getVisibleCards()
    const maxIndex = Math.max(0, cardCount - visibleCards)
    const oldIndex = currentIndex

    if (direction === "next") {
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
    } else if (direction === "prev") {
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1
    }

    isTransitioning = true
    track.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"

    updateCarousel(true)

    // Usar setTimeout mais preciso
    const transitionEnd = () => {
      isTransitioning = false
    }

    // Listener para o fim da transição
    track.addEventListener("transitionend", transitionEnd, { once: true })

    // Fallback caso o evento não dispare
    setTimeout(transitionEnd, 550)
  }

  function startAutoSlide() {
    // NÃO INICIAR SE MODAL ESTIVER ABERTO
    if (isModalOpen) return

    if (hasUserInteracted && window.innerWidth <= 810) {
      // No mobile, se o usuário interagiu, espera mais tempo antes de retomar
      setTimeout(() => {
        actuallyStartAutoSlide()
      }, 8000)
    } else {
      actuallyStartAutoSlide()
    }
  }

  function actuallyStartAutoSlide() {
    // NÃO INICIAR SE MODAL ESTIVER ABERTO
    if (isModalOpen) return

    stopAutoSlide()
    autoSlideInterval = setInterval(() => {
      if (!isTransitioning && !isDragging && !isModalOpen) {
        moveCarousel("next", false)
      }
    }, 4500)
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval)
      autoSlideInterval = null
    }
  }

  function resetAutoSlide() {
    // NÃO RESETAR SE MODAL ESTIVER ABERTO
    if (isModalOpen) return

    stopAutoSlide()
    setTimeout(startAutoSlide, 1000)
  }

  // FUNÇÕES PARA CONTROLE EXTERNO (MODAL)
  function pauseAutoSlideForModal() {
    isModalOpen = true
    stopAutoSlide()
  }

  function resumeAutoSlideFromModal() {
    isModalOpen = false
    // Pequeno delay antes de retomar
    setTimeout(() => {
      if (!isModalOpen) {
        startAutoSlide()
      }
    }, 1000)
  }

  // EXPOR FUNÇÕES GLOBALMENTE PARA O MODAL
  window.carouselController = {
    pauseAutoSlide: pauseAutoSlideForModal,
    resumeAutoSlide: resumeAutoSlideFromModal,
  }

  // Event listeners otimizados para botões
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      moveCarousel("next", true)
    })
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      moveCarousel("prev", true)
    })
  }

  // Touch/swipe support otimizado
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
    isDragging = false

    // Parar auto-slide durante o toque
    stopAutoSlide()
  }

  const handleTouchMove = throttle((e) => {
    if (!touchStartX || !touchStartY) return

    const touchCurrentX = e.touches[0].clientX
    const touchCurrentY = e.touches[0].clientY

    const deltaX = Math.abs(touchCurrentX - touchStartX)
    const deltaY = Math.abs(touchCurrentY - touchStartY)

    // Se o movimento horizontal é maior que o vertical, é um swipe horizontal
    if (deltaX > deltaY && deltaX > 10) {
      isDragging = true
      // Prevenir scroll vertical durante swipe horizontal
      e.preventDefault()
    }
  }, 16)

  const handleTouchEnd = (e) => {
    if (!touchStartX) return

    touchEndX = e.changedTouches[0].clientX
    touchEndY = e.changedTouches[0].clientY

    const deltaX = touchStartX - touchEndX
    const deltaY = Math.abs(touchStartY - touchEndY)

    // Só processar como swipe se o movimento horizontal for significativo
    // e maior que o movimento vertical
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
      if (deltaX > 0) {
        moveCarousel("next", true)
      } else {
        moveCarousel("prev", true)
      }
    } else {
      // Se não foi um swipe válido, retomar auto-slide
      setTimeout(startAutoSlide, 1000)
    }

    // Reset valores
    touchStartX = 0
    touchEndX = 0
    touchStartY = 0
    touchEndY = 0
    isDragging = false
  }

  // Adicionar event listeners com passive: false para poder usar preventDefault
  track.addEventListener("touchstart", handleTouchStart, { passive: true })
  track.addEventListener("touchmove", handleTouchMove, { passive: false })
  track.addEventListener("touchend", handleTouchEnd, { passive: true })

  // Resize handler otimizado
  const handleResize = debounce(() => {
    const visibleCards = getVisibleCards()
    const maxIndex = Math.max(0, cardCount - visibleCards)

    if (currentIndex > maxIndex) {
      currentIndex = maxIndex
    }

    // Remover transição temporariamente para reposicionamento
    track.style.transition = "none"
    updateCarousel(true)

    // Restaurar transição após um frame
    requestAnimationFrame(() => {
      track.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    })

    resetAutoSlide()
  }, 250)

  window.addEventListener("resize", handleResize)

  // Pausar auto-slide quando tab não está ativa
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoSlide()
    } else {
      startAutoSlide()
    }
  })

  // Pausar auto-slide ao hover (apenas desktop)
  if (window.innerWidth > 810) {
    track.addEventListener("mouseenter", stopAutoSlide)
    track.addEventListener("mouseleave", startAutoSlide)
  }

  // Inicialização otimizada

  // Configurar estilos iniciais
  track.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  track.style.display = "flex"
  track.style.willChange = "transform" // Otimização para GPU

  // Posição inicial
  updateCarousel(true)

  // Iniciar auto-slide após um delay
  setTimeout(() => {
    startAutoSlide()
  }, 2000)

  // Cleanup ao sair da página
  window.addEventListener("beforeunload", () => {
    stopAutoSlide()
  })
})
