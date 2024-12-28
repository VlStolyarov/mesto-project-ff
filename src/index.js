import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard } from "./card.js";
import { openModal, closeModal } from "./modal.js";
import { selectorsCard } from "./selectorsCard.js";
import { handleLike } from "./card.js";
import { deleteCard } from "./card.js";
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
  popupTitle,
  popupImage,
  profileTitle,
  profileDescription,
  nameInput,
  jobInput,
  cardNameInput,
  linkInput,
} from "./globalSelectors.js";

export function openImagePopup(imageSrc, imageAlt) {
  // Функция для открытия popup-а изображения
  popupImage.src = imageSrc; // Источник изображения
  popupImage.alt = imageAlt; // Альтернативный текст
  popupTitle.textContent = imageAlt; // Текст подписи
  openModal(popupBigImg); // Открываем popup
}

//Создание карточек из массива
initialCards.forEach((card) => {
  cardContainer.append(
    createCard(
      card.name,
      card.link,
      selectorsCard,
      handleLike,
      openImagePopup,
      deleteCard
    )
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

// Обработчик «отправки» формы доб карточки
function handleFormSubmitCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получаем значение полей linkInput и cardNameInput из свойства value
  const placeName = cardNameInput.value;
  const link = linkInput.value;

  // Добавляем новую карточку в начало контейнера
  const newCard = createCard(
    placeName,
    link,
    selectorsCard,
    handleLike,
    openImagePopup,
    deleteCard
  );
  cardContainer.prepend(newCard);

  // Закрываем popup
  closeModal(popupPlace);

  // Очищаем форму
  cardElement.reset();
}

// Редактирование профиля
popupEditProfileOpenButton.addEventListener("click", () => {
  const currentName = profileTitle.textContent; // Текущее имя
  const currentJob = profileDescription.textContent; // Текущая работа

  // Заполняем инпуты значениями
  nameInput.value = currentName; // Вставляем текущее имя в инпут
  jobInput.value = currentJob; // Вставляем текущее описание в инпут

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

function handleFormSubmitProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  const name = nameInput.value;
  const job = jobInput.value;

  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = name;
  profileDescription.textContent = job;

  // Закрываем попап после сохранения
  closeModal(popupEditProfile);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener("submit", handleFormSubmitProfile);

// Прикрепляем обработчик к форме
cardElement.addEventListener("submit", handleFormSubmitCard);
