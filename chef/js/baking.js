document.getElementById('menuBtn').addEventListener('click', toggleModal)

function toggleModal() {
  var modal = document.getElementById('myModal')
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block'
}

// Добавим обработчик события для подменю
document.getElementById('hotDishes').addEventListener('click', toggleSubmenu)

function toggleSubmenu() {
  var submenu = document.getElementById('submenu')
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'
}
