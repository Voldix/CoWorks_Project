/* Аккордеон для секции FAQ */

const topics = document.querySelectorAll(".topic");

topics.forEach((topic) => {
    topic.addEventListener("click", (event) => {
        // Проверяем, был "клик" внутри кнопки или нет
        // Проверка идет на то, что "клик" был сделан по элементу, который размещен внутри кнопки,
        // то есть внутри блока с классом .topic__btn, в нашем случае это кнопка
        if (event.target.closest(".topic__btn")) {
            const isOpened = topic.classList.toggle("topic--open");
            const img = topic.querySelector(".topic__icon");
            const content = topic.querySelector(".topic__content");
            if (isOpened == true) {
                img.src = "./img/icons/btn-minus.svg";
                // content.scrollHeight - высота контента, возвращаем в пикселях. Теперь каждый
                // topic будет открываться на нужную ему высоту для отображения внутреннего контента
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                img.src = "./img/icons/btn-plus.svg";
                content.style.maxHeight = "0px";
            }
        }
    });
});
