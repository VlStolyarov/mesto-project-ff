import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard } from "./createCard.js";
import { openPopup, closePopup } from "./modal.js";
import { handleFormSubmitProfile } from "./handleFormSubmitProfile.js";
import { handleFormSubmitCard } from "./handleFormSubmitCard.js";
import {
  popupBigImg,
  cardContainer,
  popupPlace,
  profilePopupOpen,
  popupCloseButton,
  popupEditProfile,
  popupEditProfileOpenButton,
  popupEditProfileCloseButton,
  profileFormElement,
  cardElement,
  imageCloseButton,
} from "./globalSelectors.js";
import { selectorsCard } from "./selectorsCard.js";

//Создание карточек из массива
initialCards.forEach((card) => {
  cardContainer.append(createCard(card.name, card.link, selectorsCard));
});

profilePopupOpen.addEventListener("click", () => {
  openPopup(popupPlace); // Открываем popup при нажатии на кнопку добавления
});

popupCloseButton.addEventListener("click", () => {
  closePopup(popupPlace); // Закрываем popup при нажатии на кнопку закрытия
});

popupPlace.addEventListener("click", (event) => {
  // Закрытие popup-a при клике на область вне формы
  if (event.target === popupPlace) {
    closePopup(popupPlace); // Закрываем popup
  }
});

// Закрыть popup увеличенного изображения
imageCloseButton.addEventListener("click", () => closePopup(popupBigImg));
popupBigImg.addEventListener("click", (event) => {
  if (event.target === popupBigImg) {
    closePopup(popupBigImg);
  }
});

// Редактирование профиля
popupEditProfileOpenButton.addEventListener("click", () => {
  openPopup(popupEditProfile); // Открываем popup редактирования профиля
});

popupEditProfileCloseButton.addEventListener("click", () => {
  closePopup(popupEditProfile); // Закрываем popup редактирования профиля
});

popupEditProfile.addEventListener("click", (event) => {
  if (event.target === popupEditProfile) {
    closePopup(popupEditProfile); // Закрываем popup при клике на область вне формы
  }
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener("submit", handleFormSubmitProfile);

// Прикрепляем обработчик к форме
cardElement.addEventListener("submit", handleFormSubmitCard);
