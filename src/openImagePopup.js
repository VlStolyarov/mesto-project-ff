import { popupImage, popupTitle, popupBigImg } from "./globalSelectors.js";
import { openModal } from "./modal.js";

export function openImagePopup(imageSrc, imageAlt) {
  // Функция для открытия popup-а изображения
  popupImage.src = imageSrc; // Источник изображения
  popupImage.alt = imageAlt; // Альтернативный текст
  popupTitle.textContent = imageAlt; // Текст подписи
  openModal(popupBigImg); // Открываем popup
}
