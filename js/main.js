// $('body').hide()

console.log('tra ta ta');

console.log("adsfadff")

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
let tovIndex = 2;
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
    
    if (n > slides.length-4) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length-4
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display  = "inline-block";
    slides[slideIndex].style.display  = "inline-block";
    slides[slideIndex + 1].style.display  = "inline-block";
    slides[slideIndex + 2].style.display  = "inline-block";
    slides[slideIndex + 3].style.display  = "inline-block";
}


// интерьер

/* Устанавливаем индекс слайда по умолчанию */
let interier_slideIndex = 2;
interier_showSlides(interier_slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function interier_nextSlide() {
    interier_showSlides(interier_slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function interier_previousSlide() {
    interier_showSlides(interier_slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function interier_currentSlide(n) {
    interier_showSlides(interier_slideIndex = n);
}

/* Функция перелистывания */
function interier_showSlides(n) {
    let i;
    let interier_slides = document.getElementsByClassName("interier-foto__item");
    
    if (n > interier_slides.length) {
        interier_slideIndex = 2
    }
    if (n < 2) {
        interier_slideIndex = 2
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let interier_slide of interier_slides) {
        interier_slide.style.display = "none";
    }   
    interier_slides[interier_slideIndex - 2].style.display  = "inline-block";
    interier_slides[interier_slideIndex - 2].style.filter  = "blur(3px)";
    interier_slides[interier_slideIndex - 1].style.display  = "inline-block";
    interier_slides[interier_slideIndex - 1].style.filter  = "none";
    interier_slides[interier_slideIndex].style.display  = "inline-block";
    interier_slides[interier_slideIndex].style.filter  = "blur(3px)";
}

// категории и товары

$(document).ready(function(){
    let items = document.getElementsByClassName("item");
    for (let item of items) {
        item.style.display = "none";
    }   
    $('.menu-cat__item').click(function(){
        interier_slideIndex=2;
        let cats = document.getElementsByClassName('menu-cat__item');
        for (let cat of cats) {
            cat.classList.remove("active_cat")};
        this.classList.add("active_cat");

      let res = this.classList[1];
        console.log(res);
        console.log(this);
        let itemstovs = document.getElementsByClassName(res);
        for (let item of items) {
        item.style.display = "none";
    }   
        if (itemstovs.length>1){
            console.log(itemstovs.length)
            itemstovs[1].style.display = "inline-block"; 
            itemstovs[2].style.display = "inline-block"; 
            itemstovs[3].style.display = "inline-block";
        }
         
    });
  });


  $('.tovari-stranici__menu-right').click(function(){
      let active_cat = document.getElementsByClassName('active_cat')[0].classList[1];
    console.log(active_cat);
    tov_showSlides(interier_slideIndex += 1, active_cat);
  });

  function tov_showSlides(n, active_cat){
    let tov_cats = document.getElementsByClassName(active_cat);
    let len_tov = document.getElementsByClassName(active_cat).length;
    console.log(len_tov);
    if (interier_slideIndex>len_tov-3){
        interier_slideIndex=2;
        for (let item of tov_cats) {
            item.style.display = "none";}
        
        tov_cats[0].style.display = "inline-block"; 
        tov_cats[1].style.display = "inline-block"; 
        tov_cats[2].style.display = "inline-block"; 
        tov_cats[3].style.display = "inline-block"; 
    }
    else{
        tov_cats[interier_slideIndex-2].style.display = "none"; 
        tov_cats[interier_slideIndex+1].style.display = "inline-block"; 
    }
  }

  $('.tovari-stranici__menu-left').click(function(){
    let active_cat = document.getElementsByClassName('active_cat')[0].classList[1];
  console.log(active_cat);
  tov_showSlides1(interier_slideIndex -= 1, active_cat);
});

function tov_showSlides1(n, active_cat){
  let tov_cats = document.getElementsByClassName(active_cat);
  let len_tov = document.getElementsByClassName(active_cat).length;
  console.log(len_tov);
  console.log(interier_slideIndex);
  if (interier_slideIndex<3){
      interier_slideIndex=2;
      for (let item of tov_cats) {
          item.style.display = "none";}
    tov_cats[0].style.display = "inline-block";
      tov_cats[1].style.display = "inline-block"; 
      tov_cats[2].style.display = "inline-block"; 
      tov_cats[3].style.display = "inline-block"; 
  }
  else{
      tov_cats[interier_slideIndex+2].style.display = "none"; 
      tov_cats[interier_slideIndex-1].style.display = "inline-block"; 
  }
}