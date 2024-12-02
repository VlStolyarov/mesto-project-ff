// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


    const cardTemplate = document.querySelector("#card-template").content; //Поиск шаблона карточки для добавления
    const cardContainer = document.querySelector(".places__list"); //Поиск раздела, куда будут добавляться карточки

    function createCard(name, link) {
      const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // Клонируем содержимое шаблона

      // Заполняем данные карточки из template
      const image = cardElement.querySelector(".card__image");
      const cardTitle = cardElement.querySelector(".card__title");
      const deleteButton = cardElement.querySelector(".card__delete-button");
      const likeButton = cardElement.querySelector(".card__like-button");

      image.src = link; // Значение Link для ссылки
      cardTitle.textContent = name; // Name для заголовка
      image.alt = name;    // Текст для скриндеров

      // Удаление карточки
      deleteButton.addEventListener("click", () => {
        cardElement.remove(); // Удаляем карточку при нажатии на кнопку удаления
      });
      // Состояние Like
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("card__like-button--active"); // Like active
      });

      return cardElement; // Возвращаем созданный элемент карточки
    }

//Создание карточек из массива
initialCards.forEach((card) => {
    cardContainer.append(createCard(card.name, card.link));
  });