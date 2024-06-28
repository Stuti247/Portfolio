/*NAVBAR*/

function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/*WORKS*/

$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});

/*HERO SECTION*/

$(document).ready(function(){
    
    var typedOptions = {
        strings: ["Web Developer,", "3D Designer,", "Student,"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    var typed = new Typed(".typing", typedOptions);
});

/*CONTACT SECTION*/

function scrollToTopAndClearForm() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    clearForm();
}

function clearForm() {
    document.getElementById("myform").reset();
  }
