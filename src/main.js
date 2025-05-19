import './style.scss'

const burgerBtn = document.querySelector(".burger")
const listElement = document.querySelector(".menu__list")

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active')
  listElement.classList.toggle('open')
})
