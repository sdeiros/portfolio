// Portfolio items - você pode substituir por seus próprios trabalhos
const portfolioItems = [
  {
    id: 1,
    title: "Pesadelo — Teaser de Evento",
    description: "Vídeo teaser criado para divulgar o evento 'Pesadelo', que acontecerá em setembro no Paradoxo Casa Atelier. A estética onírica e inquietante antecipa o clima do evento, propondo uma imersão visual e sensorial.",
    category: "experimental",
    type: "video",
    media: "https://res.cloudinary.com/ddpvact5z/video/upload/f_auto,q_auto/v1753402915/Untitled_design_4_i9zaqz.mp4",
    date: "Julho 2025",
    featured: false
  },
  {
    id: 2,
    title: "Projeto Apocalipse",
    description: "Material audiovisual criado como expansão do Projeto Apocalipse. Com estética experimental e narrativa simbólica, o vídeo atua como manifesto visual do conceito, ampliando sua presença para além do impresso.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "video",
    type: "video",
    media: "https://res.cloudinary.com/ddpvact5z/video/upload/f_auto,q_auto/v1753402928/APOCALIPSE_n9iikt.mp4",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 4,
    title: "Karaokê Cantare",
    description: "Post desenvolvido para divulgação do evento Karaokê Cantere no Paradoxo Casa Atelier. A estética retrô e a tipografia vibrante evocam a energia divertida da noite.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753372248/karaoke3_kd8mnm.jpg",
    date: "Novembro 2024",
    featured: false
  },
  {
    id: 5,
    title: "O Ser e o Indivíduo",
    description: "Post para a divulgação da exposição O Ser e o Indivíduo, realizada no Paradoxo Casa Atelier.",
    category: "social",
    type: "video",
    media: "https://res.cloudinary.com/ddpvact5z/video/upload/f_auto,q_auto/v1753371683/Composi%C3%A7%C3%A3o_1_1_h4bb0i.mp4",
    date: "Julho 2025",
    featured: true
  },
  {
    id: 6,
    title: "O Ser e o Indivíduo",
    description: "Poster em A3 para a divulgação da exposição O Ser e o Indivíduo, realizada no Paradoxo Casa Atelier.",
    category: "poster",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753372000/Captura_de_tela_24-7-2025_124617__pld4oc.jpg",
    date: "Outubro 2024",
    featured: false
  },
  {
    id: 7,
    title: "Poeticas Gráficas",
    description:
      "Post para a divulgação da turma do curso de Xilografia na UERJ, ministrada pelo artista, professor e montador Hugo Bernabé, realizada no Paradoxo Casa Atelier.",
    category: "social",
    type: "video",
    media: "https://res.cloudinary.com/ddpvact5z/video/upload/f_auto,q_auto/v1753369596/Gravuras_FIM__1_lwxft1.mp4",
    date: "Novembro 2024",
    featured: false
  },
  {
    id: 13,
    title: "Retatos do Tempo Bom",
    description: "Exposção do artista Yago Chedid, realizada no Paradoxo Casa Atelier.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753371430/final1_l5o5gb.jpg",
    date: "Março 2025",
    featured: false

  },
  {
    id: 9,
    title: "Retratos do Tempo Bom — Variação de Arte",
    description: "Versão alternativa do material de divulgação da exposição 'Retratos do Tempo Bom', do artista Yago Chedid. A arte explora novas composições mantendo a estética sensível da mostra.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753372936/final2_qqxue0.jpg",
    date: "Março 2025",
    featured: false
  },
  {
    id: 10,
    title: "Karaokê Cantare",
    description: "Template modular criado para facilitar a divulgação recorrente dos karaokês no Paradoxo. Mantém uma identidade visual coesa, com possibilidade de adaptação para diferentes datas e atrações.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753372719/karaoke-tamplate_sxklim.png",
    date: "Julho 2025",
    featured: false
  },
  {
    id: 11,
    title: "Oficina de Livro de Artista",
    description: "Arte criada para divulgar a Oficina de Livro de Artista, ministrada pela artista Malu Mattos, no Paradoxo nas redes sociais. Com visual minimalista e informativo, o design reforça a identidade artesanal e afetiva da experiência.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753372532/oficina-redes_yseqzr.png",
    date: "Maio 2025",
    featured: false
  },
  {
    id: 12,
    title: "Paradoxo do Ser",
    description:
      "Post para a divulgação da primeira chamada aberta realizada no Paradoxo Casa Atelier.",
    category: "social",
    type: "video",
    media: "https://res.cloudinary.com/ddpvact5z/video/upload/f_auto,q_auto/Untitled_design_3_ns7qnr.mp4",
    date: "Julho 2025",
    featured: true,
  },
  {
    id: 13,
    title: "Poéticas Gráficas — Pôster A3",
    description: "Versão impressa da divulgação do curso de Xilografia na UERJ, ministrado por Hugo Bernabé. O pôster em formato A3 adapta a composição original para circulação física, mantendo o equilíbrio entre o toque acadêmico e o experimental.",
    category: "poster",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753373358/Untitled_design_2_zl4nbg.png",
    date: "Novembro 2024",
    featured: false
  },
  {
    id: 21,
    title: "Projeto Apocalipse — Variação I",
    description: "Primeira variação visual do cartaz do Projeto Apocalipse, com composição intensa e uso marcante do contraste para transmitir urgência e colapso.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "poster",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753392200/Captura_de_tela_24-7-2025_18236__phwun8.jpg",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 22,
    title: "Projeto Apocalipse — Variação II",
    description: "Segunda variação do cartaz do Projeto Apocalipse, com ênfase na tipografia e elementos gráficos descentrados, evocando ruído, falha e desorientação.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "poster",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753392006/Captura_de_tela_24-7-2025_181911__wj3vnr.jpg",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 23,
    title: "Projeto Apocalipse — Variação III",
    description: "Terceira abordagem visual do cartaz do Projeto Apocalipse, com uma estética mais limpa e espaçada, convidando a uma leitura contemplativa do fim e da reconstrução.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "poster",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753391593/Captura_de_tela_24-7-2025_181144__mddbgn.jpg",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 24,
    title: "Projeto Apocalipse — Post para Redes",
    description: "Versão adaptada do Projeto Apocalipse para circulação nas redes sociais. O design verticalizado e de alto contraste busca impacto imediato no feed, mantendo a identidade visual crítica da série.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753393405/WhatsApp_Image_2025-07-24_at_18.43.02_d7r1rn.jpg",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 25,
    title: "Convite — Exposição no Donna Gastrobar",
    description: "Peça desenvolvida para divulgar a participação do Paradoxo Casa Atelier em uma exposição no Donna Gastrobar. A arte mescla sofisticação e identidade visual autoral para comunicar a presença do coletivo em um novo espaço.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753393581/DONNA_kolmnq.png",
    date: "Julho 2025",
    featured: false
  },
  {
    id: 28,
    title: "Retratos Urbanos — Exposição Fotográfica",
    description: "Peça de divulgação para a exposição 'Retratos Urbanos', com curadoria do Paradoxo Casa Atelier. A mostra reúne fotografias que capturam o cotidiano das ruas com olhar sensível e poético, propondo novas leituras sobre o espaço urbano.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753404267/fotografiasfim1_on90rq.png",
    date: "Abril 2025",
    featured: false
  },
  {
    id: 29,
    title: "Retratos Urbanos — Variação de Arte",
    description: "Segunda versão do material de divulgação da exposição 'Retratos Urbanos'. A arte mantém o caráter documental da série, adaptando a composição para outros formatos de circulação e ampliando o alcance da mostra.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753404395/fotografiasfim2_dgjlb3.png",
    date: "Abril 2025",
    featured: false
  },
  {
    id: 30,
    title: "Retratos Urbanos — Pôster A3",
    description: "Versão impressa em A3 criada para divulgação física da exposição 'Retratos Urbanos'. O pôster amplia o alcance da mostra para o espaço público, mantendo a linguagem visual sensível e urbana da série.",
    category: "poster",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753404987/Untitled_design_3_i4xvfy.png",
    date: "Abril 2025",
    featured: false
  },
  {
    id: 31,
    title: "Projeto Apocalipse — Animação para Redes",
    description: "Versão animada do cartaz do Projeto Apocalipse, desenvolvida para circulação em redes sociais. A movimentação gráfica amplia o impacto visual da proposta e reforça a urgência do conceito em ambientes digitais.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "social",
    type: "video",
    media: "https://res.cloudinary.com/ddpvact5z/video/upload/f_auto,q_auto/v1747413525/VIDEO_2_jdby44.mp4",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 32,
    title: "Projeto Apocalipse — Variação IV",
    description: "Quarta variação do cartaz do Projeto Apocalipse, com nova abordagem tipográfica e composição centralizada. Essa versão busca reforçar a força simbólica do título e ampliar a legibilidade em ambientes urbanos.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "poster",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753405340/Untitled_design_4_gifmg3.png",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 33,
    title: "Projeto Apocalipse — Teaser Animado",
    description: "Teaser em formato GIF criado como parte da campanha do Projeto Apocalipse. Com estética glitch e televisiva, a peça instiga o público e antecipa o clima distópico da série.<BR><a href='https://sdeiros.github.io/portfolio/projetos/Apocalipse/apocalipse.html' target='_blank' rel='noopener noreferrer'>Veja Completo aqui</a>.",
    category: "social",
    type: "image",
    media: "https://sdeiros.github.io/portofc/assets/Apocalipse/apocalipsetv.gif",
    date: "Julho 2024",
    featured: false
  },
  {
    id: 34,
    title: "Convite Especial — Duas Exposições no Paradoxo",
    description: "Convite institucional do Paradoxo Casa Atelier para um marco importante em sua história: a realização simultânea das exposições individuais 'A Própria Consequência', de @gapo.o, e 'Corposições', de @chedid_tattoo. A arte celebra a força do coletivo e o diálogo entre corpo, espaço e expressão urbana.",
    category: "social",
    type: "image",
    media: "https://res.cloudinary.com/ddpvact5z/image/upload/f_auto,q_auto/v1753406000/Paradoxo_Casa_Atelier_tem_o_prazer_em_convid%C3%A1-los_para_um_momento_muito_especial_de_sua_hist%C3%B3ri_ffbakv.jpg",
    date: "Fevereiro 2025",
    featured: false
  }, 

]

// Elementos DOM
const introScreen = document.getElementById("introScreen")
const galleryScreen = document.getElementById("galleryScreen")
const masonryGrid = document.getElementById("masonryGrid")
const filterBtns = document.querySelectorAll(".filter-btn")
const modal = document.getElementById("imageModal")
const modalMedia = document.getElementById("modalMedia")
const modalTitle = document.querySelector(".modal-title")
const modalDescription = document.querySelector(".modal-description")
const modalCategory = document.querySelector(".modal-category")
const modalDate = document.querySelector(".modal-date")
const featuredCards = document.getElementById("featuredCards")

// Elementos de pesquisa
const searchInput = document.getElementById("searchInput")
const searchClear = document.getElementById("searchClear")

// Estado atual
let currentFilter = "all"
let currentSearchTerm = ""
let shuffledItems = [...portfolioItems]
let isModalOpen = false
let iso
let allMasonryItems = []

// Import Isotope e imagesLoaded
const Isotope = window.Isotope
const imagesLoaded = window.imagesLoaded

// Função para embaralhar array
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Função para filtrar itens por pesquisa
function filterItemsBySearch(items, searchTerm) {
  if (!searchTerm.trim()) return items

  const term = searchTerm.toLowerCase().trim()
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      getCategoryName(item.category).toLowerCase().includes(term),
  )
}

// Função para mostrar galeria
function showGallery() {
  console.log("showGallery chamada!")

  shuffledItems = shuffleArray(portfolioItems)
  console.log("Items embaralhados:", shuffledItems.length)

  introScreen.classList.add("hidden")
  console.log("Classe hidden adicionada ao introScreen")

  document.body.style.overflow = "hidden"
  console.log("Overflow do body definido para hidden.")

  setTimeout(() => {
    galleryScreen.classList.add("active")
    console.log("Classe active adicionada ao galleryScreen")

    galleryScreen.style.overflowY = "auto"
    console.log("Overflow-y da galleryScreen definido para auto.")

    renderFeaturedCards()
    renderGallery()
    console.log("renderGallery chamada")

    galleryScreen.scrollTop = 0
    console.log("Scroll da galeria resetado para o topo.")
  }, 400)
}

// Função para mostrar intro
function showIntro() {
  galleryScreen.classList.remove("active")

  setTimeout(() => {
    introScreen.classList.remove("hidden")
    history.pushState(null, "", window.location.pathname)

    document.body.style.overflow = "auto"
    console.log("Overflow do body restaurado para auto.")
    galleryScreen.style.overflowY = "hidden"
    console.log("Overflow-y da galleryScreen definido para hidden.")
  }, 400)
}

// Função para obter nome da categoria
function getCategoryName(category) {
  const names = {
    poster: "Pôster A3",
    social: "Social Media",
    video: "Audiovisual",
    experimental: "Experimental",
  }
  return names[category] || category
}

// Função para criar cards em destaque - SIMPLIFICADA
function renderFeaturedCards() {
  const featuredItems = portfolioItems.filter((item) => [1, 2, 3].includes(item.id))

  featuredCards.innerHTML = featuredItems
    .map((item) => {
      let mediaElement
      if (item.type === "video") {
        mediaElement = `<video muted autoplay loop playsinline class="featured-card-image">
                        <source src="${item.media}" type="video/mp4">
                      </video>`
      } else {
        mediaElement = `<img src="${item.media}" alt="${item.title}" class="featured-card-image">`
      }

      return `
      <div class="featured-card" onclick="openModal(portfolioItems.find(p => p.id === ${item.id}))">
        ${mediaElement}
        <div class="featured-card-overlay">
          <h3 class="featured-card-title">${item.title}</h3>
        </div>
      </div>
    `
    })
    .join("")
}

// Função para criar item do portfólio
function createPortfolioItem(item, index) {
  const div = document.createElement("div")
  div.className = "masonry-item"
  div.dataset.category = item.category
  div.dataset.id = item.id

  let mediaElement
  if (item.type === "video") {
    mediaElement = `<video muted autoplay loop playsinline>
          <source src="${item.media}" type="video/mp4">
      </video>`
  } else {
    mediaElement = `<img src="${item.media}" alt="${item.title}">`
  }

  div.innerHTML = `
      ${mediaElement}
      <div class="item-overlay">
          <h3 class="item-title">${item.title}</h3>
      </div>
  `

  div.addEventListener("click", () => openModal(item))
  return div
}

// Função para renderizar galeria com pesquisa
function renderGallery(filter = "all", searchTerm = "") {
  console.log("renderGallery iniciada com filtro:", filter, "e pesquisa:", searchTerm)

  // Filtrar itens por pesquisa primeiro
  let filteredItems = filterItemsBySearch(shuffledItems, searchTerm)

  // Depois filtrar por categoria se não for "all"
  if (filter !== "all") {
    filteredItems = filteredItems.filter((item) => item.category === filter)
  }

  if (!iso) {
    // Primeira vez renderizando
    masonryGrid.innerHTML = ""
    allMasonryItems = []

    // Cria todos os itens inicialmente (sem filtro de pesquisa na primeira renderização)
    shuffledItems
      .filter((item) => ![1, 2, 3].includes(item.id))
      .forEach((item, index) => {
        const portfolioItemElement = createPortfolioItem(item, index)
        masonryGrid.appendChild(portfolioItemElement)
        allMasonryItems.push(portfolioItemElement)
      })

    imagesLoaded(masonryGrid, () => {
      console.log("Images loaded for isotope grid! Initializing Isotope.")
      iso = new Isotope(masonryGrid, {
        itemSelector: ".masonry-item",
        layoutMode: "masonry",
        masonry: {
          gutter: 10,
        },
        percentPosition: true,
        fitWidth: true,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
      })

      // Aplica filtros iniciais
      applyFilters(filter, searchTerm)
      iso.layout()
      console.log("Isotope initialized and layout forced.")

      // 🔽 OCULTA O LOADING
      const loadingOverlay = document.getElementById('loadingOverlay')
      if (loadingOverlay) loadingOverlay.style.display = 'none'
    })

  } else {
    // Renderizações subsequentes
    applyFilters(filter, searchTerm)
    iso.layout()
    console.log("Isotope arranged and layout forced after filter.")
  }

  console.log("Galeria renderizada com filtros aplicados")
}

// Função para aplicar filtros combinados (categoria + pesquisa)
function applyFilters(categoryFilter, searchTerm) {
  if (!iso) return

  // Filtrar por pesquisa e categoria
  const filteredItems = filterItemsBySearch(shuffledItems, searchTerm)
  const validIds = new Set(filteredItems.map((item) => item.id.toString()))

  // Criar seletor que combina categoria e pesquisa
  let filterValue = "*"

  if (categoryFilter !== "all" || searchTerm.trim()) {
    filterValue = (itemElem) => {
      const itemId = itemElem.dataset.id
      const itemCategory = itemElem.dataset.category

      // Verificar se o item passa no filtro de pesquisa
      const passesSearch = !searchTerm.trim() || validIds.has(itemId)

      // Verificar se o item passa no filtro de categoria
      const passesCategory = categoryFilter === "all" || itemCategory === categoryFilter

      return passesSearch && passesCategory
    }
  }

  iso.arrange({ filter: filterValue })
  console.log("Filtros aplicados - Categoria:", categoryFilter, "Pesquisa:", searchTerm)
}

// Event listeners para pesquisa
searchInput.addEventListener("input", (e) => {
  currentSearchTerm = e.target.value

  // Mostrar/esconder botão de limpar
  if (currentSearchTerm.trim()) {
    searchClear.style.display = "flex"
  } else {
    searchClear.style.display = "none"
  }

  // Aplicar filtros com debounce
  clearTimeout(searchInput.debounceTimer)
  searchInput.debounceTimer = setTimeout(() => {
    renderGallery(currentFilter, currentSearchTerm)
  }, 300)
})

searchClear.addEventListener("click", () => {
  searchInput.value = ""
  currentSearchTerm = ""
  searchClear.style.display = "none"
  renderGallery(currentFilter, "")
})

// Função para abrir modal
function openModal(item) {
  if (isModalOpen) return;

  isModalOpen = true;

  let mediaElement;
  if (item.type === "video") {
    mediaElement = `<video controls autoplay>
      <source src="${item.media}" type="video/mp4">
    </video>`;
  } else {
    mediaElement = `<img src="${item.media}" alt="${item.title}">`;
  }

  modalMedia.innerHTML = mediaElement;
  modalTitle.textContent = item.title;
  modalDescription.innerHTML = item.description;
  modalCategory.textContent = getCategoryName(item.category);
  modalDate.textContent = item.date;

  document.body.classList.add("modal-open");
  modal.style.display = "block";

  modal.offsetHeight;
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  const url = new URL(window.location);
  url.searchParams.set("projeto", item.id);
  history.pushState(null, "", url);

  // ⛔ Pausar vídeos da galeria e destaque
  document.querySelectorAll('.masonry-grid video, .featured-card video').forEach((vid) => {
    vid.pause();
  });
}


// Função para fechar modal
function closeModal() {
  if (!isModalOpen) return;

  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");

    // ▶️ Retomar vídeos da galeria e destaque
    document.querySelectorAll('.masonry-grid video, .featured-card video').forEach((vid) => {
      vid.play();
    });

    isModalOpen = false;

    const url = new URL(window.location);
    url.searchParams.delete("projeto");
    history.pushState(null, "", url);
  }, 400);
}


// Função para abrir projeto via URL
function openProjectFromURL() {
  const urlParams = new URLSearchParams(window.location.search)
  const projectId = urlParams.get("projeto")

  if (projectId) {
    const item = portfolioItems.find((p) => p.id == projectId)
    if (item) {
      showGallery()
      setTimeout(() => {
        openModal(item)
      }, 800)
    }
  }
}

// Event Listeners para filtros
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    currentFilter = btn.dataset.filter
    renderGallery(currentFilter, currentSearchTerm)
  })
})

// Fechar modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isModalOpen) {
    closeModal()
  }
})

// Navegação do browser
window.addEventListener("popstate", () => {
  const urlParams = new URLSearchParams(window.location.search)
  if (!urlParams.get("projeto") && isModalOpen) {
    closeModal()
  }
})

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  shuffledItems = shuffleArray(portfolioItems)
  openProjectFromURL()

  if (!new URLSearchParams(window.location.search).get("projeto")) {
    renderGallery()
  }
})

// Tornar funções globais
window.showGallery = showGallery
window.showIntro = showIntro
window.closeModal = closeModal

// Debug
console.log("Elements check:", {
  introScreen: !!introScreen,
  galleryScreen: !!galleryScreen,
  masonryGrid: !!masonryGrid,
  portfolioItems: portfolioItems.length,
  searchInput: !!searchInput,
  featuredCards: !!featuredCards,
})

