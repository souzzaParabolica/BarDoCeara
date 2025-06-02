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
