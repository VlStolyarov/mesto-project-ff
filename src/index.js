import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard } from "./createCard.js";
import { openModal, closeModal } from "./modal.js";
import { handleFormSubmitProfile } from "./handleFormSubmitProfile.js";
import { handleFormSubmitCard } from "./handleFormSubmitCard.js";
import {
  popupBigImg,
  cardContainer,
  popupPlace,
  profilePopupOpen,
  newCardPopupCloseButton,
  popupEditProfile,
  popupEditProfileOpenButton,
  popupEditProfileCloseButton,
  profileFormElement,
  cardElement,
  imageCloseButton,
} from "./globalSelectors.js";
import { selectorsCard } from "./selectorsCard.js";
import { handleLike } from "./handleLike.js";

//Создание карточек из массива
initialCards.forEach((card) => {
  cardContainer.append(
    createCard(card.name, card.link, selectorsCard, handleLike)
  );
});

profilePopupOpen.addEventListener("click", () => {
  openModal(popupPlace); // Открываем popup при нажатии на кнопку добавления
});

newCardPopupCloseButton.addEventListener("click", () => {
  closeModal(popupPlace); // Закрываем popup при нажатии на кнопку закрытия
});

popupPlace.addEventListener("click", (event) => {
  // Закрытие popup-a при клике на область вне формы
  if (event.target === popupPlace) {
    closeModal(popupPlace); // Закрываем popup
  }
});

// Закрыть popup увеличенного изображения
imageCloseButton.addEventListener("click", () => closeModal(popupBigImg));
popupBigImg.addEventListener("click", (event) => {
  if (event.target === popupBigImg) {
    closeModal(popupBigImg);
  }
});

// Редактирование профиля
popupEditProfileOpenButton.addEventListener("click", () => {
  openModal(popupEditProfile); // Открываем popup редактирования профиля
});

popupEditProfileCloseButton.addEventListener("click", () => {
  closeModal(popupEditProfile); // Закрываем popup редактирования профиля
});

popupEditProfile.addEventListener("click", (event) => {
  if (event.target === popupEditProfile) {
    closeModal(popupEditProfile); // Закрываем popup при клике на область вне формы
  }
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener("submit", handleFormSubmitProfile);

// Прикрепляем обработчик к форме
cardElement.addEventListener("submit", handleFormSubmitCard);
