const cardTemplate = document.querySelector("#card-template").content; //Поиск шаблона карточки для добавления
const cardContainer = document.querySelector(".places__list"); //Поиск раздела, куда будут добавляться карточки
const popupPlace = document.querySelector(".popup_type_new-card"); // Поиск popup-a редактирования карточек
const popupChangeForm = popupPlace.querySelector(".popup__form_new-place"); // Поиск формы для изменения карточек
const popupOpen = document.querySelector(".profile__add-button"); //Поиск кнопки добавления карточек
const popupCloseButton = popupPlace.querySelector(".popup__close"); // Поиск кнопки закрытия Popup
const popupBigImg = document.querySelector(".popup_type_image"); // Поиск popup-а отображения увеличенного изображения
const popupImage = document.querySelector(".popup__image"); // Поиск изображения
const popupTitle = document.querySelector(".popup__caption"); // Поиск описания карточки
const popupEditProfile = document.querySelector(".popup_type_edit"); // Поиск popup-а редактирования профиля
const popupEditProfileOpenButton = document.querySelector(".profile__edit-button"); // Кнопка для открытия popup-a редактирования
const popupEditProfileCloseButton = popupEditProfile.querySelector(".popup__close");// Крестик закрытия popup-а редактирования профиля
const formElement = document.querySelector('.popup__form'); // поиск формы редактирования профиля
const nameInput = formElement.querySelector('input[name="name"]'); // Поле для имени
const jobInput = formElement.querySelector('input[name="description"]'); // Поле для информации о себе
const cardElement = document.querySelector('.popup__form[name="new-place"]'); // поиск формы карточки

// Находим поля формы в DOM
const cardNameInput = cardElement.querySelector('input[name="place-name"]');
const linkInput = cardElement.querySelector('input[name="link"]');





function openImagePopup(imageSrc, imageAlt) {
  // Функция для открытия popup-а изображения
  popupImage.src = imageSrc; // Источник изображения
  popupImage.alt = imageAlt; // Альтернативный текст
  popupTitle.textContent = imageAlt; // Текст подписи
  openPopup(popupBigImg); // Открываем popup
}

function deleteCard(cardElement) {
  cardElement.remove(); // Удаляем карточку из DOM
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

  deleteButton.addEventListener("click", () => {
    deleteCard(cardElement); // Удаляем карточку
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

let currentPopup = null; // Переменная для отслеживания открытого popup-a

function openPopup(popup) {
  popup.classList.add("popup_is-opened"); // Добавляем класс для открытия
  currentPopup = popup; // Устанавливаем текущий открытый popup
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened"); // Убираем класс для закрытия
  if (currentPopup === popup) {
    currentPopup = null; // Сбрасываем текущий открытый popup
  }
}

function handleEscClose(event) {
  if (event.key === "Escape" && currentPopup) {
    closePopup(currentPopup); // Закрываем текущий открытый popup
  }
}

// Добавляем обработчик события keydown на документ
document.addEventListener("keydown", handleEscClose);

popupOpen.addEventListener("click", () => {
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
const imageCloseButton = popupBigImg.querySelector(".popup__close");
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

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const name = nameInput.value;
    const job = jobInput.value;

     // Выберите элементы, куда должны быть вставлены значения полей
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = name;
    profileDescription.textContent = job;

    // Закрываем попап после сохранения
    closePopup(popupEditProfile);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

//      //Добавление карточки

// Обработчик «отправки» формы
function handleFormSubmitCard(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получаем значение полей linkInput и cardNameInput из свойства value
    const placeName = cardNameInput.value;
    const link = linkInput.value;

    // Получаем шаблон карточки
    const cardTemplate = document.getElementById('card-template').content.cloneNode(true);

    // Заполняем шаблон данными
    const cardTitle = cardTemplate.querySelector('.card__title');
    const cardImage = cardTemplate.querySelector('.card__image');

    cardTitle.textContent = placeName;
    cardImage.src = link;
    cardImage.alt = placeName;

    // Добавляем новую карточку в начало контейнера
    const cardContainer = document.querySelector('.places__list');
    cardContainer.prepend(cardTemplate);

    // Закрываем popup
    closePopup(document.querySelector('.popup_type_new-card'));

    // Очищаем форму
    cardElement.reset();
}

// Прикрепляем обработчик к форме
cardElement.addEventListener('submit', handleFormSubmit);