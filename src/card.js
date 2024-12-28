import { cardTemplate } from "./globalSelectors";

export function createCard(
  name,
  link,
  selectors,
  likeHandler,
  openImagePopup,
  deleteCard
) {
  const cardElement = cardTemplate
    .querySelector(selectors.selectorCard)
    .cloneNode(true); // Клонируем содержимое шаблона

  // Заполняем данные карточки из template
  const image = cardElement.querySelector(selectors.selectorImage);
  const cardTitle = cardElement.querySelector(selectors.selectorCardTitle);
  const deleteButton = cardElement.querySelector(
    selectors.selectorDeleteButton
  );
  const likeButton = cardElement.querySelector(selectors.selectorLikeButton);

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
    likeHandler(likeButton, selectors); // Like active
  });

  return cardElement; // Возвращаем созданный элемент карточки
}

export function deleteCard(cardElement) {
  cardElement.remove(); // Удаляем карточку из DOM
}

export function handleLike(likeButton, selectors) {
  likeButton.classList.toggle(selectors.selectorToggleLikeButton); // Like active
}
