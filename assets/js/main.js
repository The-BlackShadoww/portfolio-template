/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
     navToggle.addEventListener('click', () =>{
          navMenu.classList.add('show_menu')
     })
}

if(navClose){
     navClose.addEventListener('click', () =>{
          navMenu.classList.remove('show_menu')
     })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
     const navMenu = document.getElementById('nav-menu')
     navMenu.classList.remove('show_menu')
}
navLink.forEach(n => {
     return n.addEventListener('click', linkAction)
})




/*=============== SWIPER PROJECTS ===============*/
let swiperProject = new Swiper(".projects__conatainer", {
        loop: true,
        spaceBetween:24,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        
        breakpoints: {
             1200: {
                  slidesPerView: 2,
                  spaceBetween: -56,
               },
               
          },
});
     
     //    mousewheel: true,
     //    keyboard: true,


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
     grabCursor: true,
     loop:true,
     navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
     },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('conatcat-form'),
      conatctName = document.getElementById('contact-name'),
      conatctEmail = document.getElementById('contact-email'),
      conatctProject = document.getElementById('conatact-project'),
      conatctMessage = document.getElementById('conatact-message')

const sendEmail = (e) =>{
     e.preventDefault()

     // Check if the field has a value
     if(conatctName.value === '' || conatctEmail.value === '' || conatctProject.value === ''){
          // Add and remove color
          conatctMessage.classList.remove('color-blue')
          conatctMessage.classList.add('color-red')
     }
     else{
          // serviceID - templateID - #form - publicKey
          emailjs.sendForm('service_gsn1aa3','template_ly0pr4g','#conatcat-form','66Yi_q9YzESx2GQq3')
          .then(() =>{
               // Show message and add color
               conatctMessage.classList.add('color-blue')
               conatctMessage.textContent = 'Message sent'

               // Remove message after five seconds
               setTimeout(() =>{
                    conatctMessage.textContent = ''
               }, 5000)
          }, (error) =>{
               alert('OOPS! SOMETHING HAS FAILED...', error)
          })



          // To clear the input field
          conatctName.value = ''
          conatctEmail.value = ''
          conatctProject.value = ''
     }

     // Show message
     conatctMessage.textContent = 'Write all the input fields'	
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
     const scrollY = window.pageYOffset

     sections.forEach(current =>{
          const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
               
               if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionClass.classList.add('active-link')
               }
               else{
                    sectionClass.classList.remove('active-link')
               }

     })     
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
     const scrollUp = document.getElementById('scroll-up')
     // when the scroll is higher than the 350 viewport, add show scroll class to the a tag with scrollup
     this.scrollY >= 350 ? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon  = localStorage.getItem('selected-icon')


// we obtain the currnent theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


// we validate if the user  previously chose a topic
if(selectedTheme){
     //If the validation is fulfilled, we assked that the issue was to know if we activated or deactivated the dark theme   
     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deacivate the theme manually with the button
themeButton.addEventListener('click', () => {
     // Add or remove the dark / icon theme
     document.body.classList.toggle(darkTheme)
     themeButton.classList.toggle(iconTheme)
     // we save rheme and the current icon that user chose
     localStorage.setItem('selected-theme', getCurrentTheme())
     localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
     const header = document.getElementById('header')
     // When the scroll is greater than 50 viewport height, add the scroll-header class to header tag
     this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')   
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

