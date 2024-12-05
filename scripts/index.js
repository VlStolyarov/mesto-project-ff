
const cardTemplate = document.querySelector("#card-template").content; //Поиск шаблона карточки для добавления
const cardContainer = document.querySelector(".places__list"); //Поиск раздела, куда будут добавляться карточки
const popupPlace = document.querySelector(".popup_type_new-card"); // Поиск popup-a редактирования карточек
const popupChangeForm = popupPlace.querySelector(".popup__form_new-place"); // Поиск формы для изменения карточек
const popupOpen = document.querySelector(".profile__add-button"); //Поиск кнопки добавления карточек
const popupCloseButton = popupPlace.querySelector(".popup__close"); // Поиск всех кнопок закрытия Popup
const popupBigImg = document.querySelector(".popup_type_image"); // Поиск popup-а отображения увеличенного изображения
const popupImage = document.querySelector(".popup__image"); // Поиск изображения
const popupTitle = document.querySelector(".popup__caption"); // Поиск описания карточки

function openImagePopup(imageSrc, imageAlt) {
  // Функция для открытия popup-а изображения
  popupImage.src = imageSrc; // Источник изображения
  popupImage.alt = imageAlt; // Альтернативный текст
  popupTitle.textContent = imageAlt; // Текст подписи
  openPopup(popupBigImg); // Открываем popup
}

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true); // Клонируем содержимое шаблона

  // Заполняем данные карточки из template
  const image = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  image.src = link; // Значение Link для ссылки
  cardTitle.textContent = name; // Name для заголовка
  image.alt = name; // Текст для скриндеров

  // Добавляем обработчик для открытия popup-а с изображением
  image.addEventListener("click", () => {
    openImagePopup(link, name); // Открывает popup с изображением и заголовком
  });

  // Удаление карточки
  deleteButton.addEventListener("click", () => {
    cardElement.remove(); // Удаляем карточку при нажатии на кнопку удаления
  });
  // Состояние Like
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active"); // Like active
  });

  return cardElement; // Возвращаем созданный элемент карточки
}

//Создание карточек из массива
initialCards.forEach((card) => {
  cardContainer.append(createCard(card.name, card.link));
});

function openPopup(popup) {
  // Функция для открытия popup-а
  popup.classList.add("popup_is-opened"); // Добавляем класс для открытия
}

function closePopup(popup) {
  // Функция для закрытия popup-а
  popup.classList.remove("popup_is-opened"); // Убираем класс для закрытия
}

popupOpen.addEventListener("click", () => {
  openPopup(popupPlace); // Открываем popup при нажатии на кнопку добавления
});

popupCloseButton.addEventListener("click", () => {
  closePopup(popupPlace); // Закрываем popup при нажатии на кнопку закрытия
});

popupPlace.addEventListener("click", (event) => {
  // Закрытие popup-a при клике на область вне формы
  if (event.target === popupPlace) {
    // Проверяем, что клик был именно по области popup-a
    closePopup(popupPlace); // Закрываем popup
  }
});

// Закрыть popup увеличенного изображения
const imageCloseButton = popupBigImg.querySelector(".popup__close");
imageCloseButton.addEventListener("click", () => closePopup(popupBigImg));
popupBigImg.addEventListener("click", (event) => {
  if (event.target === popupBigImg) {
    closePopup(popupBigImg);
  }
});
