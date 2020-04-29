// === Botón de ir hacia arriba ===
$(document).ready(function () {
    $(".ir-arriba").click(function(){
        $("body, html").animate({
            scrollTop: "0px"
        }, -1000);
    });
});

// === Animaciones de la página ===
var logo = document.getElementById("logo");
logo.style.animation = "animation-logo 2s";

var menu = document.getElementById("menu");
menu.style.animation = "animation-menu 2s";

var tituloBanner = document.getElementById("titulo-banner");
tituloBanner.style.animation = "animation-banner 2s";
var textoBanner = document.getElementById("text-banner");
textoBanner.style.animation = "animation-banner 3s";
