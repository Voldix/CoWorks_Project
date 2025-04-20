/* Модальные окна */

const openModal = document.querySelectorAll("[data-action='modal']"); // Кнопка открытия модалки
const closeModal = document.querySelector("#closeModal"); // Кнопка закрытия модалки
const modal = document.querySelector(".modal"); // Модалка
const modalBody = document.querySelector(".modal__body"); // Блок с контентом модального окна
const arrowUpBtn = document.querySelector("#arrowUpBtn"); // Боковая кнопка вверх

function openModalWindow() {
    // Создаем функцию (открытия), чтоб использовать ее множество раз
    modal.classList.add("modal--open");
    document.body.classList.add("no-scroll");
    // Возвращаем кнопку вверх при открытии
    if (arrowUpBtn.classList.contains("top-link--visible")) {
        arrowUpBtn.classList.remove("top-link--visible");
    }
}

function closeModalWindow() {
    // Создаем функцию (закрытия), чтоб использовать ее множество раз
    modal.classList.remove("modal--open");
    document.body.classList.remove("no-scroll");
    // Возвращаем кнопку вверх при закрытии 
    if (window.pageYOffset > window.innerHeight) {
        arrowUpBtn.classList.add("top-link--visible");
    }
}

/* Открытие модалки по "клику" */

openModal.forEach((item) => {
    item.addEventListener("click", openModalWindow);
});

/* Закрытие модалки по "клику" */

closeModal.addEventListener("click", closeModalWindow);

/* Закрытие модалки по "клику" на оверлей */

modal.addEventListener("click", closeModalWindow);
modalBody.addEventListener("click", (e) => {
    e.stopPropagation();
});

/* Закрыть модалку кнопкой ESC */

document.addEventListener("keydown", (e) => {
    // (e.keyCode == 27), но лучше использовать (e.key == 'Escape') или (e.code == 'Escape')
    if (e.key == "Escape") {
        closeModalWindow();
    }
});
