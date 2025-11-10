const togglebtn = document.querySelector('.toggle')
const navigationn = document.querySelector('.navigationn')


togglebtn.addEventListener('click', () => {
    togglebtn.classList.toggle('active')
    navigationn.classList.toggle('active')
})
