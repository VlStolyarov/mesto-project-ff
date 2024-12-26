const cardTemplate = document.querySelector("#card-template").content; //Поиск шаблона карточки для добавления
const cardContainer = document.querySelector(".places__list"); //Поиск раздела, куда будут добавляться карточки
const popupPlace = document.querySelector(".popup_type_new-card"); // Поиск popup-a редактирования карточек
const popupChangeForm = popupPlace.querySelector(".popup__form_new-place"); // Поиск формы для изменения карточек
const profilePopupOpen = document.querySelector(".profile__add-button"); //Поиск кнопки добавления карточек
const popupCloseButton = popupPlace.querySelector(".popup__close"); // Поиск кнопки закрытия Popup
const popupBigImg = document.querySelector(".popup_type_image"); // Поиск popup-а отображения увеличенного изображения
const popupImage = document.querySelector(".popup__image"); // Поиск изображения
const popupTitle = document.querySelector(".popup__caption"); // Поиск описания карточки
const popupEditProfile = document.querySelector(".popup_type_edit"); // Поиск popup-а редактирования профиля
const popupEditProfileOpenButton = document.querySelector(
  ".profile__edit-button"
); // Кнопка для открытия popup-a редактирования
const popupEditProfileCloseButton =
  popupEditProfile.querySelector(".popup__close"); // Крестик закрытия popup-а редактирования профиля
const profileFormElement = document.querySelector(".popup__form"); // поиск формы редактирования профиля
const nameInput = profileFormElement.querySelector('input[name="name"]'); // Поле для имени
const jobInput = profileFormElement.querySelector('input[name="description"]'); // Поле для информации о себе
const cardElement = document.querySelector('.popup__form[name="new-place"]'); // поиск формы карточки
const cardNameInput = cardElement.querySelector('input[name="place-name"]');
const linkInput = cardElement.querySelector('input[name="link"]');
const imageCloseButton = popupBigImg.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

export {
  cardTemplate,
  cardContainer,
  popupPlace,
  popupChangeForm,
  profilePopupOpen,
  popupCloseButton,
  popupBigImg,
  popupImage,
  popupTitle,
  popupEditProfile,
  popupEditProfileOpenButton,
  profileFormElement,
  nameInput,
  jobInput,
  cardElement,
  linkInput,
  cardNameInput,
  imageCloseButton,
  profileTitle,
  profileDescription,
  popupEditProfileCloseButton,
};
