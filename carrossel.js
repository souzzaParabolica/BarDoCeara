document.addEventListener("DOMContentLoaded", function () {
  // Menu Hamburguer
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", () => mobileMenu.classList.add("active"));
  closeBtn.addEventListener("click", () =>
    mobileMenu.classList.remove("active")
  );

  mobileMenu.querySelectorAll(".nav-items li").forEach((item) => {
    item.addEventListener("click", () => mobileMenu.classList.remove("active"));
  });

  // Carrossel de Feedbacks (sem autoplay)
  const initCarousel = () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".carousel-dot");
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Mostra o slide especificado
    const showSlide = (index, direction = "next") => {
      // Remove todas as classes ativas
      slides.forEach((slide) => {
        slide.classList.remove("active", "next", "prev");
      });

      // Atualiza o índice atual
      currentIndex = (index + totalSlides) % totalSlides;

      // Configura animação baseada na direção
      slides[currentIndex].classList.add("active");

      if (direction === "next") {
        slides[(currentIndex + 1) % totalSlides].classList.add("next");
      } else {
        slides[(currentIndex - 1 + totalSlides) % totalSlides].classList.add(
          "prev"
        );
      }

      // Atualiza os dots de navegação
      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-white/80", i === currentIndex);
        dot.classList.toggle("bg-white/30", i !== currentIndex);
      });
    };

    // Navegação pelos dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const newIndex = parseInt(dot.getAttribute("data-index"));
        const direction = newIndex > currentIndex ? "next" : "prev";
        showSlide(newIndex, direction);
      });
    });

    // Controles de touch para mobile
    let touchStartX = 0;
    const carousel = document.querySelector(".carousel");

    carousel.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );

    carousel.addEventListener(
      "touchend",
      (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) {
          // Swipe para a esquerda (próximo)
          showSlide(currentIndex + 1, "next");
        } else if (diff < -50) {
          // Swipe para a direita (anterior)
          showSlide(currentIndex - 1, "prev");
        }
      },
      { passive: true }
    );

    // Inicializa mostrando o primeiro slide
    showSlide(0);
  };

  initCarousel();
});
