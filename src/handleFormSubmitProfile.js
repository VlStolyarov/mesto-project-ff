import {
  nameInput,
  jobInput,
  profileTitle,
  profileDescription,
  popupEditProfile,
} from "./globalSelectors";
import { closePopup } from "./modal";

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
export function handleFormSubmitProfile(evt) {
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
  closePopup(popupEditProfile);
}
