const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Обработчики событий для ссылок
// MO
link1.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описание1.style.display = "block";
    описание2.style.display = "none";
    описание3.style.display = "none";
  });
  
  link2.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описание1.style.display = "none";
    описание2.style.display = "block";
    описание3.style.display = "none";
  });
  
  link3.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описание1.style.display = "none";
    описание2.style.display = "none";
    описание3.style.display = "block";
  });

  //MP////////////////////////////////////////////////////////////////////////////////
  linkMP1.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеMP1.style.display = "block";
    описаниеMP2.style.display = "none";
    описаниеMP3.style.display = "none";
  });
  
  linkMP2.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеMP1.style.display = "none";
    описаниеMP2.style.display = "block";
    описаниеMP3.style.display = "none";
  });
  
  linkMP3.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеMP1.style.display = "none";
    описаниеMP2.style.display = "none";
    описаниеMP3.style.display = "block";
  });
/////////////////////////////////////////////////////////////////////////////////   
  
//KN////////////////////////////////////////////////////////////////////////////
linkKN1.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеKN1.style.display = "block";
    описаниеKN2.style.display = "none";
    описаниеKN3.style.display = "none";
  });
  
  linkKN2.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеKN1.style.display = "none";
    описаниеKN2.style.display = "block";
    описаниеKN3.style.display = "none";
  });
  
  linkKN3.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеKN1.style.display = "none";
    описаниеKN2.style.display = "none";
    описаниеKN3.style.display = "block";
  });
////////////////////////////////////////////////////////////////////////////////

//LV////////////////////////////////////////////////////////////////////////////
linkLV1.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеLV1.style.display = "block";
    описаниеLV2.style.display = "none";
    описаниеLV3.style.display = "none";
  });
  
  linkLV2.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеLV1.style.display = "none";
    описаниеLV2.style.display = "block";
    описаниеLV3.style.display = "none";
  });
  
  linkLV3.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеLV1.style.display = "none";
    описаниеLV2.style.display = "none";
    описаниеLV3.style.display = "block";
  });
///////////////////////////////////////////////////////////////////////////////

//IL////////////////////////////////////////////////////////////////////////////
linkIL1.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеIL1.style.display = "block";
    описаниеIL2.style.display = "none";
    описаниеIL3.style.display = "none";
  });
  
  linkIL2.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеIL1.style.display = "none";
    описаниеIL2.style.display = "block";
    описаниеIL3.style.display = "none";
  });
  
  linkIL3.addEventListener("click", function(event) {
    event.preventDefault(); // Отмена стандартного действия браузера
    описаниеIL1.style.display = "none";
    описаниеIL2.style.display = "none";
    описаниеIL3.style.display = "block";
  });
////////////////////////////////////////////////////////////////////////////////
  const links = document.querySelectorAll('.link');

  links.forEach(link => {
    link.addEventListener('click', () => {
      // Сброс цвета у всех ссылок
      links.forEach(link => link.classList.remove('active'));
      
      // Установка активного цвета для выбранной ссылки
      link.classList.add('active');
    });
  });


  const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Удаление класса "selected" у всех карточек
    cards.forEach(card => card.classList.remove('selected'));

    // Добавление класса "selected" для выбранной карточки
    card.classList.add('selected');
  });
  card.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('selected'));
    card.classList.add('selected');
  });

});


///////////////////прокрутка до секции
function scrollToSection() {
    // Находим первый элемент с указанным классом
    var section = document.getElementsByClassName("sectionSale")[0]; // Например, вторая секция с классом "my-section"
  
    // Проверяем, что элемент найден
    if (section) {
      // Выполняем прокрутку до этого элемента
      section.scrollIntoView({ behavior: "smooth" });
    }
  }