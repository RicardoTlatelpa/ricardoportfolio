const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header-menu');
    const navLinks = document.querySelectorAll('.header-menu a');
    burger.addEventListener('click', () =>{
        header.classList.toggle('header-active');
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
            }
          
        })
    });
   
}

navSlide();