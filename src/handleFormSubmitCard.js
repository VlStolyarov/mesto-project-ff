import {
  cardNameInput,
  linkInput,
  cardContainer,
  popupPlace,
} from "./globalSelectors.js";
import { closePopup } from "./modal.js";
import { createCard } from "./createCard.js";
import { selectorsCard } from "./selectorsCard.js";

// Обработчик «отправки» формы
function handleFormSubmitCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получаем значение полей linkInput и cardNameInput из свойства value
  const placeName = cardNameInput.value;
  const link = linkInput.value;

  // Добавляем новую карточку в начало контейнера
  const newCard = createCard(placeName, link, selectorsCard);
  cardContainer.prepend(newCard);

  // Закрываем popup
  closePopup(popupPlace);

  // Очищаем форму
  cardElement.reset();
}
