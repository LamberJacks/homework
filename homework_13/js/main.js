// const body = document.body
// const nav = document.querySelector('.nav')
// const burger = document.querySelector(".burger-icon")

// nav.addEventListener('click', event => {
//   const target = event.target
//   if (target && target.classList.contains("burger-icon")) {
//     body.classList.toggle("body--opened-menu")
//   }
// })

// burger.addEventListener('click', () => {
//   body.classList.toggle("body--opened-menu")

// })



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
})()