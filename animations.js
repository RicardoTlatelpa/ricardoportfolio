const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header-menu');
   
    burger.addEventListener('click', () =>{
        header.classList.toggle('header-active');
    });
}

navSlide();