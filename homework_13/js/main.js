
(function () {
  document.addEventListener('click', burgerInin)

  function burgerInin(e) {
    const target = e.target
    const burgerIcon = target.closest(".burger-icon")
    const burgerNavLink = target.closest(".nav__link")
    const width = document.documentElement.clientWidth

    if (width <= 900 && (burgerIcon || burgerNavLink)) {
      document.body.classList.toggle("body--opened-menu")
    }
  }
  const about__img = document.querySelector(".about__img-button")
  const modal = document.querySelector(".modal")

  about__img.addEventListener('click', modaOpen)
  modal.addEventListener("click", modalClose)

  function modaOpen(e) {
    e.preventDefault()
    document.body.classList.add("body--opened-modal")
  }

  function modalClose(e) {
    e.preventDefault()
    const target = e.target
    if (target.closest('.modal__canel') || target.classList.contains('modal')) {
      document.body.classList.remove("body--opened-modal")
    }

  }
})()