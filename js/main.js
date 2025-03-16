$('.start__slider').slick({
    infinite: true,
    arrows :true,
    prevArrow: "<img src='images/icons/prev.svg' class='prev' alt='1'>",
    nextArrow: "<img src='images/icons/next.svg' class='next' alt='2'>",
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: 'slick-dots'

});
$('.services__items-slider, .docs__items-slider, .technics__items-slider').slick({
    infinite: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 500,
            settings: {
                dots: true,
                dotsClass: 'slick-dots',
                infinite: true,
            }
        },

    ]


});

$('.news__items').slick({
    infinite: false,
    arrows :true,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [


        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]


});









function togglePopup() {
    let popup = document.querySelector(".rent__popup-one");
    let overlay = document.querySelector(".rent__popup-overlay");
    if (getComputedStyle(popup).getPropertyValue("display") === "none") {
        popup.style.display = "block";
        overlay.style.display = "block";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
}



function togglePopupTwo() {
    let popup = document.querySelector(".rent__popup-two");
    let overlay = document.querySelector(".rent__popup-overlay__two");
    if (getComputedStyle(popup).getPropertyValue('display') === 'none') {
        popup.style.display = "block";
        overlay.style.display = "block";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
}


function togglePopupNormal() {
    let popup = document.querySelector(".normal__popup-one");
    let overlay = document.querySelector(".normal__popup-overlay ");
    if (getComputedStyle(popup).getPropertyValue('display') === "none") {
        popup.style.display = "block";
        overlay.style.display = "block";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
}

function togglePopupNormalTwo() {
    let popup = document.querySelector(".normal__popup-two");
    let overlay = document.querySelector(".normal__popup-overlay__two");
    if (getComputedStyle(popup).getPropertyValue('display') === "none") {
        popup.style.display = "block";
        overlay.style.display = "block";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
}

//
// const burgerMenu = document.querySelector('.burger-menu');
// const headerNav = document.querySelector('.header__nav');
//
// burgerMenu.addEventListener('click', () => {
//     headerNav.classList.toggle('header__nav--open');
//     burgerMenu.classList.toggle('burger-menu--open');
// });
//









function toggleMenuClass() {
    let headerMenu = document.querySelector('.header__menu');
    if (headerMenu.classList.contains('active')) {
        headerMenu.classList.remove('active');
        document.querySelector('.header__overlay').classList.remove('header__overlay--active');
        document.body.classList.remove('scroll-disabled');
    } else {
        headerMenu.classList.add('active');
        document.querySelector('.header__overlay').classList.add('header__overlay--active');
        document.body.classList.add('scroll-disabled');
    }
    const headerOverlay = document.querySelector('.header__overlay');
    headerOverlay.addEventListener('click', function(event) {
        // Проверяем, кликнули ли мы на сам оверлей или на его дочерние элементы
        if (event.target === headerOverlay) {
            toggleMenuClass();
        }
    });
}

// $(window).on('load', function () {
//
//     $('.preloaders').find('preloader__img').fadeOut().end().delay(400).fadeOut('slow');
//
// });



const body = document.querySelector('body');
const menuButton = document.querySelector('.header__burger');
const menuItems = document.querySelector('.header__menu');

// Обработчик события для кнопки меню
menuButton.addEventListener('click', () => {
    // Проверяем, есть ли у body класс modal-open
    const isOpen = body.classList.contains('modal-open');

    // Открываем или закрываем меню и добавляем/удаляем класс modal-open
    menuItems.classList.toggle('open');
    body.classList.toggle('modal-open', !isOpen);
});









function showList(listId, button) {
    let x = document.getElementById(listId).querySelectorAll(".hidden");
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.display === "" || x[i].style.display === "none") {
            x[i].style.display = "flexА";
        } else {
            x[i].style.display = "none";
        }
    }
    if (button.innerText === "Раскрыть") {
        button.innerText = "Скрыть";
    } else {
        button.innerText = "Раскрыть";
    }
}






/*
window.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone-input');

    phoneInput.addEventListener('input', () => {
        let currentValue = phoneInput.value.trim();

        if (!currentValue.startsWith('+7')) {
            currentValue = '+7' + currentValue.substring(1);
            phoneInput.value = currentValue;
        }

        if (event.inputType === 'deleteContentBackward' && currentValue.length > 0) {
            currentValue = currentValue.substring(0, currentValue.length - 1);
            phoneInput.value = currentValue;
        }
    });
});
*/



function toggleSubMenu() {
    let subMenu = document.querySelector('.header__submenu-one');
    subMenu.classList.toggle('header__submenu--show');
}
function toggleSubMenuTwo() {
    let subMenuTwo = document.querySelector('.header__submenu-two');
    subMenuTwo.classList.toggle('header__submenu--show');
}
function showList(listId, button) {
    let x = document.getElementById(listId).querySelectorAll(".hidden");

    for (let i = 0; i < x.length; i++) {
        if (x[i].style.display === "" || x[i].style.display === "none") {
            x[i].style.display = "list-item";
        } else {
            x[i].style.display = "none";
        }
    }

    if (button.innerText === "Скрыть") {
        button.innerText = "Раскрыть";
    } else {
        button.innerText = "Скрыть";
    }
}
function toMail() {
	  document.querySelector('.successForm').style.display = "block";		
}
function successFormClose(){
	document.querySelector('.successForm').style.display = "none";
}






