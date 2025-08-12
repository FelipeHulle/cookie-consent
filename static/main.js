function main() {

    // localStorage.clear();  // use this to clear after click in the button  

    if (localStorage.getItem('user')) {
        return ''
    }

    const bodyElem = document.querySelector('body')
    const divElem = document.createElement('div')
    divElem.innerHTML = `<div class="cookies">

      <i class="fa-solid fa-cookie-bite"></i>
      <p>We use cookies to improve your user experience.</p>
      <button class="btn">I like Cookies</button>

    </div>`

    bodyElem.appendChild(divElem)

    const btnElem = document.querySelector('.btn')

    btnElem.addEventListener('click', () => {
        if (btnElem) {
            divElem.innerHTML = ''
        }
        localStorage.setItem('user','acess')
    })
    
}

main()

