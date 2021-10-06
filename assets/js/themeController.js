document.addEventListener('DOMContentLoaded', () => {

    let url1 = 'assets/css/style.css'
    let url2 = 'assets/css/style2.css'
    let button = document.querySelector('.buttontheme-btn')
    let icon1 = document.querySelector('#butttontheme-i-1')
    let icon2 = document.querySelector('#butttontheme-i-2')

    style(button)

    function style(button) {
        button.addEventListener('click', e => {
            if (button.getAttribute('value') == 0) {
                button.setAttribute('value', '1')
                icon2.classList.add('fa-active')
                icon1.classList.remove('fa-active')
                createTag(url2)
            } else if (button.getAttribute('value') == 1) {
                button.setAttribute('value', '0')
                icon1.classList.add('fa-active')
                icon2.classList.remove('fa-active')
                createTag(url1)
            }
        })
    }

    function createTag(url) {
        let style = document.createElement('link')
        style.rel = 'stylesheet'
        style.type = 'text/css'
        style.href = url
        document.body.appendChild(style)
    }

})