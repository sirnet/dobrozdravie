$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1400:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

var routineBtn = document.getElementById('routine-btn');
var modalClose = document.getElementById('modal-close');
var routineModal = document.getElementById('routine-modal');

routineBtn.onclick = function(e){
    e.preventDefault();
    routineModal.classList.remove("visually-hidden");
};

modalClose.onclick = function(){
    routineModal.classList.add("visually-hidden");
}