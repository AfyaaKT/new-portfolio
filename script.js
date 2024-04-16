'use strict';

const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__sm-menu')

burger.addEventListener('click' , ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.add('visible');
        menu.classList.remove('hidden')
    }else{
        menu.classList.remove('visible')
        menu.classList.add('hidden')
    }

})

function checkWindowSize(){
    if(window.innerWidth >= 768){
        menu.classList.remove('visible')
        menu.classList.add('hidden')
    }
}

checkWindowSize()

window.addEventListener('resize' , checkWindowSize)

const links = document.querySelectorAll('.header__sm-menu-link');

links.forEach(link => {
    link.addEventListener('click', () => {
        
        menu.classList.add('hidden');
        menu.classList.remove('visible');
    });
});


// reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
  const elmsToReveal = document.querySelectorAll('.reveal');

  for (let i = 0; i < elmsToReveal.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = elmsToReveal[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      elmsToReveal[i].classList.add('active');
    }
    // else {
    //   elmsToReveal[i].classList.remove('active');
    // }
  }
}