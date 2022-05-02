// $('body').hide()

console.log('tra ta ta');

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
let kolshowsli = 4;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("menu-cat__item");
    
    if (n > slides.length-kolshowsli) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length-kolshowsli
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   

    ip=0
    while (ip<=kolshowsli){
        slides[slideIndex + ip-1].style.display  = "inline-block";
        ip++;

    }
}