import {
  cardNameInput,
  linkInput,
  cardContainer,
  popupPlace,
} from "./globalSelectors.js";
import { closeModal } from "./modal.js";
import { createCard } from "./createCard.js";
import { selectorsCard } from "./selectorsCard.js";
import { cardElement } from "./globalSelectors.js";
import { handleLike } from "./handleLike.js";
import { openImagePopup } from "./index.js";
import { deleteCard } from "./deleteCard.js";

// Обработчик «отправки» формы
export function handleFormSubmitCard(evt) {
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
