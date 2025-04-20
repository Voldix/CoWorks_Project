/* Tiny Slider */

const slider = tns({
    container: ".slider",
    items: 2,
    gutter: 10, // Расстояние между изображениями в пикселях
    mouseDrag: true, // Перелестывание мышью
    speed: 400,
    autoWidth: true,
    lazyload: true,
    swipeAngle: true,

    controlsContainer: ".location__controller", // В этом блоке идет поиск классов prev|next для кнопок
    nav: false, // Отключаем блок tns-nav, ибо занимает место на странице
});

// Кнопки управления слайдером на мобильной версии
const prevMobBtn = document.querySelector(
    ".location__controller--mobile .prev"
);
const nextMobBtn = document.querySelector(
    ".location__controller--mobile .next"
);

prevMobBtn.addEventListener("click", () => {
    slider.goTo("prev");
});

nextMobBtn.addEventListener("click", () => {
    slider.goTo("next");
});

// Можно сократить код
// prevMobBtn.onClick = function () {
//     slider.goTo("prev");
// }

// nextMobBtn.onClick = function() {
//     slider.goTo("next");
// }
