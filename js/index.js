$(document).ready(function(){
    $('.nav-burger').click(function(){
        $('.nav').toggleClass('nav-active');
        $('.nav-burger').css('display','none');
        $('.cancel-btn').css({'display':'block','color':'#0e918b'}).addClass('up');
    });
    $('.cancel-btn').click(function() {
        $('.nav').removeClass('nav-active');
        $('.nav-burger').css('display','block').addClass('down');
        $('.cancel-btn').css('display','none');
    });
});

$(function() {
    $(".rslides").responsiveSlides({
        auto: true, 
        speed: 500,
        timeout: 3000, 
        nav: true, 
        pauseControls: true,
        prevText: "<i class='fas fa-angle-left'></i>",
        nextText: "<i class='fas fa-angle-right'></i>",
    });
});

$('.owl-carousel').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    nav:true,
    dots:false,
    mouseDrag:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

lightbox.option({
    'resizeDuration': 400,
    'wrapAround': true
});

let btnItems = document.querySelectorAll('.money-box .money');
let btnBox   = document.querySelector('.money-box');

btnBox.addEventListener('click',function (e) {
    btnItems.forEach(function (el) {
        if(el.classList.contains('money-active')){
            el.classList.remove('money-active');
        }
        let toBeActive = e.target;
        let parent     = toBeActive.parentElement;
        parent.classList.add('money-active');
        if(document.getElementById('helpBox').classList.contains('money-active')){
            document.getElementById('helpBox').classList.remove('money-active');

        }else if(document.getElementById('moneyBox').classList.contains('money-active')){
            document.getElementById('moneyBox').classList.remove('money-active');
        }
    })
});

