/* Кнопка скролла вверх страницы */

// Находим кнопку по ID
const scrollUpBtn = document.querySelector("#arrowUpBtn");

// Слушаем событие скролла на странице
window.addEventListener("scroll", () => {
    // Если пользователь проскроллил страницу по высоте больше чем высота экрана
    // InnerHeight - вся высота окна (экрана устройства), с которого просматриваем сайт
    // PageYOffset - значение насколько страница проскроллена вниз
    if (window.pageYOffset > window.innerHeight) {
        // То добавляем класс top-link--visible к кнопке, чтоб отобразить ее
        scrollUpBtn.classList.add("top-link--visible");
    } else {
        scrollUpBtn.classList.remove("top-link--visible");
    }
});
