let currentOpenModal = null;

addEventListener("click", event => {
    if (event.target.id) {
        const targetId = event.target.id;
        const targetPopup = document.querySelector(`#${targetId}_popup`);
        if (targetId) {
            if (targetId !== "close_modal_img") {
                // Открываем модальное окно
                targetPopup.classList.add("open");
                // Запоминаем текущее открытое модальное окно
                currentOpenModal = targetPopup;
            } else {
                // Закрываем текущее открытое модальное окно
                if (currentOpenModal) {
                    currentOpenModal.classList.remove("open");
                    // Сбрасываем текущее открытое модальное окно
                    currentOpenModal = null;
                }
            }
        }
    }
});