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
________________________________________
function openOrderModal(itemName, itemPrice) {
  document.getElementById('itemName').value = itemName
  document.getElementById('itemPrice').value = itemPrice + ' ₽'
  document.getElementById('orderModal').style.display = 'block'
}

function closeOrderModal() {
  document.getElementById('orderModal').style.display = 'none'
}

// Закрытие модального окна при щелчке вне его области
window.onclick = function (event) {
  var modal = document.getElementById('orderModal')
  if (event.target == modal) {
    closeOrderModal()
  }
}
