// Скрипт для отображения товаров в корзине
document.addEventListener('DOMContentLoaded', function () {
  var cart = JSON.parse(localStorage.getItem('cart')) || []

  var cartItemsContainer = document.getElementById('cart-items')

  // Отображение каждого товара в корзине
  cart.forEach(function (product) {
    var productElement = document.createElement('div')
    productElement.innerHTML = `<p>${product.name} - ${product.price} ₽</p>`
    cartItemsContainer.appendChild(productElement)
  })
})

// Скрипт для открытия и закрытия модального окна с формой заказа
function showOrderForm() {
  var modal = document.getElementById('order-modal')
  modal.style.display = 'block'
}

function closeOrderForm() {
  var modal = document.getElementById('order-modal')
  modal.style.display = 'none'
}
