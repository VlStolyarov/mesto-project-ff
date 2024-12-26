function handleEscClose(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closePopup(popup); // Закрываем текущий открытый popup
  }
}
export function openPopup(popup) {
  popup.classList.add("popup_is-opened"); // Добавляем класс для открытия
  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened"); // Убираем класс для закрытия
  document.removeEventListener("keydown", handleEscClose);
}
