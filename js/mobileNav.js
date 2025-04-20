/* Мобильная навигация */

const openMobNavBtn = document.querySelector("#openMobileNav");
const closeMobNavBtn = document.querySelector("#closeMobileNav");
const sectionMobNav = document.querySelector(".mobile-nav");

openMobNavBtn.addEventListener("click", () => {
    sectionMobNav.classList.add("mobile-nav--open");
    // Отключаем прокрутку страницы
    document.body.classList.add("no-scroll");
});

closeMobNavBtn.addEventListener("click", () => {
    sectionMobNav.classList.remove("mobile-nav--open");
    // Включаем назад прокрутку страницы
    document.body.classList.remove("no-scroll");
});

// Закрыть моб навигацию по "клику" на ссылки внутри нее
const mobNavLinks = sectionMobNav.querySelectorAll("a, button");

mobNavLinks.forEach((item) => {
    // Теперь для каждого элемента коллекции делаем прослушку по "клику"
    item.addEventListener("click", () => {
        sectionMobNav.classList.remove("mobile-nav--open");
        // Включаем назад прокрутку страницы
        document.body.classList.remove("no-scroll");
    });
});
