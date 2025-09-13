const modal = document.querySelector(".modal")
const btn_open = document.querySelector(".btn-open")
const body = document.body
// const btn_close = document.querySelector(".modal__close-btn")

// btn_close.addEventListener("click", () => {
//   modal.classList.remove("open")
// })

function closeModal() {
  modal.classList.remove("modal--open")
  body.classList.remove("body--fixed")
}
function openModal() {
  modal.classList.add("modal--open")
  body.classList.add("body--fixed")
}

btn_open.addEventListener("click", openModal)


modal.addEventListener('click', (event) => {
  target = event.target
  if (target && target.classList.contains("modal__close-btn") || target.classList.contains("modal"))
    closeModal()
})

document.addEventListener('keydown', event => {
  if (event.code === 'Escape' && modal.classList.contains("modal--open")) {
    closeModal()
  }
})