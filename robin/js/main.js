var buttons = document.getElementsByClassName("button");
var photos = document.getElementsByClassName("photo");

function showPhotos(index) {
  // Скрыть все фотографии
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  
  // Удалить класс "active" у всех кнопок
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  // Показать фотографии выбранной страны
  var countryClass = "country" + (index + 1);
  var countryPhotos = document.getElementsByClassName(countryClass);
  for (var i = 0; i < countryPhotos.length; i++) {
    countryPhotos[i].style.display = "block";
  }
  
  // Добавить класс "active" выбранной кнопке
  buttons[index].classList.add("active");
}

// Показать фотографии первой страны при открытии страницы
showPhotos(0);



const links = document.querySelectorAll('.choise a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});




// Плавный скролл к блоку при нажатии на ссылку
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".choise a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });
  
  function scrollToSection(event) {
    event.preventDefault();
    
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});



jquery('.send-form').clic( function(){
  var form = jquery(this).closest('form');

  if ( form.valid()) {

    var actUrl = form.attr('action');
    jquery.ajax({
      url: actUrl,
      type: 'post',
      dataType: 'html',
      data: form.serialize(),
      success:function(data) {


        form.find('.status').html('form send');
      },
      error: function(){
        form.find('.status').html('error');
      }
    });
  }
});





