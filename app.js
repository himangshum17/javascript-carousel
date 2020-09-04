let carouselItems = document.querySelectorAll(".item");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let current = 0;
let autoPlay = 4000;

// removing active class form carouselitems
function removeActive(){
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove("active");
    }
}

// showing first item of the carousel
function showFirstitem(){
    removeActive();
    carouselItems[0].classList.add("active");
}

showFirstitem();

// showing previous carousel items function
function previousCarousel() {
    removeActive();
    carouselItems[current - 1].classList.add("active");
    current--;
};

// showing next carousel items function
function nextCarousel() {
    removeActive();
    carouselItems[current + 1].classList.add("active");
    current++;
}

// event listner on prevous button
prevBtn.addEventListener("click", function (){
       if( current === 0 ){
          current = carouselItems.length;
       }
       previousCarousel();
});

// event listner on next button
nextBtn.addEventListener("click", function (){
    if( current === carouselItems.length - 1 ){
       current =  -1;
    }
    nextCarousel();
});

// autoplay function
setInterval(function(){
    if( current === carouselItems.length - 1 ){
        current =  -1;
     }
     nextCarousel();
}, autoPlay);

