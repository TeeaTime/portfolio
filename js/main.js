const buttonOpen = document.querySelector('.button-menu')
const buttonClose = document.querySelector('.button-close')
const header = document.querySelector('header')
const menuItems = document.querySelectorAll('.header__nav-list-item-link')

buttonOpen.addEventListener('click', function () {
    header.classList.add('open')
    header.classList.remove('close')
})
buttonClose.addEventListener('click', function () {
    header.classList.add('close')
    header.classList.remove('open')
})

for (let i = 0; i < menuItems.length; i++) {
    const link = menuItems[i]
    link.addEventListener('click', function () {
        header.classList.add('close')
        header.classList.remove('open')
    })
}