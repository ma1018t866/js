/* Базовые функции для изменения главного блока (работают и для мыши, и для клавиатуры) */
function upDate(previewPic) {
    console.log("Событие активации сработало (mouseover/focus)!");
    console.log("Альтернативный текст: " + previewPic.alt);
    console.log("Путь к файлу: " + previewPic.src);

    const mainImage = document.getElementById("image");
    mainImage.textContent = previewPic.alt;
    mainImage.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Событие деактивации сработало (mouseleave/blur)!");
    
    const mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url('')";
    mainImage.textContent = "Наведите курсор на изображение ниже или используйте Tab";
}

/* ==========================================================================
   Новая логика автоматизации доступности клавиатуры (Домашнее задание)
   ========================================================================== */

// 1. Добавляем слушатель события onload, который запускает функцию при загрузке страницы
window.onload = function() {
    addTabFocusAttributes();
};

// 2. Новая функция для автоматического добавления tabindex ко всем миниатюрам
function addTabFocusAttributes() {
    // Выводим сообщение в консоль для проверки срабатывания onload
    console.log("Страница успешно загружена! Запускается добавление tabindex.");

    // Находим все изображения с классом preview
    const images = document.querySelectorAll(".preview");

    // 3. Пишем цикл for для перебора каждого изображения в галерее
    for (let i = 0; i < images.length; i++) {
        // 4. Динамически добавляем атрибут tabindex="0", делая картинки доступными для клавиши Tab
        images[i].setAttribute("tabindex", "0");
        console.log("Добавлен tabindex для картинки №" + (i + 1));
    }
}
