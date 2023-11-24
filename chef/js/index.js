document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel')
  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRight = document.querySelector('.arrow-right')

  let currentIndex = 0

  arrowLeft.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--
      updateCarousel()
    }
  })

  arrowRight.addEventListener('click', function () {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++
      updateCarousel()
    }
  })

  function updateCarousel() {
    const translateValue = -currentIndex * 130 // Ширина одной картинки
    carousel.style.transform = `translateX(${translateValue}px)`
  }
})

document.getElementById('menuBtn').addEventListener('click', toggleModal)

function toggleModal() {
  var modal = document.getElementById('myModal')
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block'
}

// Добавим обработчик события для подменю
document.getElementById('hotDishes').addEventListener('click', toggleSubmenu1)
document.getElementById('salat').addEventListener('click', toggleSubmenu2)
document
  .getElementById('secondDishes')
  .addEventListener('click', toggleSubmenu3)

function toggleSubmenu1() {
  var submenu = document.getElementById('submenu1')
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'
}

function toggleSubmenu2() {
  var submenu = document.getElementById('submenu2')
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'
}

function toggleSubmenu3() {
  var submenu = document.getElementById('submenu3')
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'
}

________________________________________
/// Объект для хранения заказов
let cart = []

// Функция добавления товара в корзину
function addToCart() {
  const item = {
    name: 'Хинкали традиционные',
    price: 470,
  }

  cart.push(item)
  updateCart()
}

// Функция обновления отображения корзины
function updateCart() {
  const cartButton = document.getElementById('cart-button')
  if (cartButton) {
    cartButton.textContent = `Корзина (${cart.length})`
  }
}

// Функция для открытия модального окна с формой заказа
function openModal() {
  // Ваш код для открытия модального окна
}

// Функция для закрытия модального окна
function closeModal() {
  // Ваш код для закрытия модального окна
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
