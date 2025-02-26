window.addEventListener('scroll', function() {
    const image = document.querySelector('.gallery');
    const text = document.querySelector('.director-details');

    
    const scrollPosition = window.scrollY;
    
   
    if (scrollPosition > 100) {
        image.style.opacity = 1;
        image.style.transform = 'translatex(0)'
        image.style.transition = '1s';
    } else {
        image.style.opacity = 0;
        image.style.transform = 'translateY(50px)';
    }

   
    if (scrollPosition > 500) {
        text.style.opacity = 1;
        text.style.transform = 'translateY(0)'
        text.style.transition = '2s';
    } else {
        text.style.opacity = 0;
         text.style.transform = 'translateX(900px)'
    }
});