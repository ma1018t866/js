function upDate(previewPic) {
    // Проверка работы события и вывод параметров в консоль
    console.log("Событие наведения мыши сработало!");
    console.log("Текст alt: " + previewPic.alt);
    console.log("Ссылка src: " + previewPic.src);

    const mainImageDiv = document.getElementById("image");

    // Меняем текст на alt миниатюры
    mainImageDiv.textContent = previewPic.alt;

    // Меняем фон на src миниатюры
    mainImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Событие ухода мыши сработало!");
    
    const mainImageDiv = document.getElementById("image");

    // Возвращаем исходный пустой фон
    mainImageDiv.style.backgroundImage = "url('')";

    // Возвращаем дефолтный текст обратно
    mainImageDiv.textContent = "Наведите курсор на изображение ниже, чтобы отобразить его здесь";
}
