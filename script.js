// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Crie os ícones
  lucide.createIcons();

  // Menu hamburger functionality
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  // Fechar o menu ao clicar em um item
  const menuItems = mobileMenu.querySelectorAll(".nav-items li");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});

  // Configurações iniciais
  gsap.set("header", { opacity: 0, y: -50 });
  gsap.set(".hero h2", { opacity: 0, y: 50 });
  gsap.set(".hero p", { opacity: 0, y: 30 });
  gsap.set(".hamburger span", { opacity: 0, x: 20 });
  gsap.set(".nav-items li", { opacity: 0, y: 20 });
  gsap.set(".social-icons li", { opacity: 0, y: 20 });

  // Cria a timeline principal
  const masterTL = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animação do header
  masterTL.to("header", {
    opacity: 1,
    y: 0,
    duration: 0.8,
  });

  // Animação do menu hamburguer (mobile)
  masterTL.to(
    ".hamburger span",
    {
      opacity: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.5,
    },
    "-=0.5"
  ); // Overlap com animação anterior

  // Animação dos itens de navegação (desktop)
  masterTL.to(
    ".nav-items li",
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
    },
    "-=0.4"
  );

  // Animação dos ícones sociais (desktop)
  masterTL.to(
    ".social-icons li",
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
    },
    "-=0.6"
  );

  // Animação da seção hero
  masterTL.to(
    ".hero h2",
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "-=0.5"
  );

  masterTL.to(
    ".hero p",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.7"
  );

  // Efeito de background (opcional)
  gsap.to(".hero", {
    backgroundColor: "#222",
    duration: 2,
    ease: "linear",
  });

  // Animação para o menu mobile (quando aberto)
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    const mobileMenuTL = gsap.timeline();

    mobileMenuTL
      .to(".mobile-menu", {
        x: 0,
        opacity: 1,
        duration: 0.5,
      })
      .from(
        ".mobile-menu .nav-items li",
        {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.3"
      )
      .from(
        ".mobile-menu .social-icons li",
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.4"
      );
  });

  // Animação para fechar o menu mobile
  document.querySelector(".close-btn")?.addEventListener("click", () => {
    gsap.to(".mobile-menu", {
      x: "100%",
      opacity: 0,
      duration: 0.4,
    });
  });
;

gsap.from(".titulo1, .desc1", {
  y: 50,
  filter: "blur(2px)",
  opacity: 0,
  duration: 3,
  stagger: .5,
  scrollTrigger: {
    trigger: ".secao1",
    start: "top 50%",
    end: "top 20%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".card1, .card2, .card3, .card4", {
  y: 30,
  filter: "blur(2px)",
  opacity: 0,
  duration: 3,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".cards",
    start: "top 70%",
    end: "top 40%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".feedbacks h2", {
  y: 50,
  filter: "blur(2px)",
  opacity: 0,
  duration: 3,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".feedbacks",
    start: "top 50%",
    end: "top 20%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".menu-title", {
  y: 50,
  filter: "blur(2px)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".menu-section",
    start: "top 20%",
    end: "top 0%",
    scrub: 1.2,
    markers: false
  },
});

gsap.from(".section-title", {
  filter: "blur(2px)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 30%",
    end: "top 20%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".dishes-list .dish-item", {
  x: 80,
  filter: "blur(2px)",
  opacity: 0,
  duration: 3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 20%",
    end: "top 0%",
    scrub: 1.2,
    markers: false,
  },
});