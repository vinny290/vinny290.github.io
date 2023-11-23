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
