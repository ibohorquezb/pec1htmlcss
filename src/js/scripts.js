import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faXTwitter, faInstagram, faTiktok, faYoutube, faItunes, faSpotify } from '@fortawesome/free-brands-svg-icons';
import lazyYoutubeEmbed from 'lazy-youtube-embed';

library.add(faFacebook, faXTwitter, faInstagram, faTiktok, faYoutube, faItunes, faSpotify);
dom.watch();

document.addEventListener('DOMContentLoaded', () => {
    lazyYoutubeEmbed();
});

Array.from(document.querySelectorAll(".lazy-youtube-embed img")).forEach((img) => {
    alert(img.parentElement.title);
    img.alt = img.parentElement.title;
    console.log(img.alt);
});

//obtenemos los albums
let albums = document.getElementById("albums");
// Obtener todas las imágenes de los miembros
let images = document.querySelectorAll('#members img');

Array.from(document.getElementsByClassName("fade")).forEach((logo) => {
    //fadeIn(logo);
    logo.classList.add('active');
});

toggleAlbumsButton(document.documentElement.clientWidth);

markCurrentCover();

/*****************************************
************** Eventos *******************
******************************************/

// Recorrer cada imagen
images.forEach(img => {
    // Agregar evento cuando el ratón esta encima
    img.addEventListener('mouseenter', () => {
    // Obtener el texto del figcaption dentro del padre figure
    const caption = img.parentElement.parentElement.querySelector('figcaption');
    // Establecer el alt de la imagen como el texto del figcaption
    caption.textContent = img.alt.replace("Foto de ","");
  });

  // Agregar evento cuando el ratón no esta encima
  img.addEventListener('mouseleave', () => {
    img.parentElement.parentElement.querySelector('figcaption').textContent = "";
  });
});

window.addEventListener('resize', function() {
    toggleAlbumsButton(document.documentElement.clientWidth);
});

if(albums!=null) {
    albums.addEventListener("click", function() {
        let state = this.nextElementSibling.style.display === "none" ? "grid" : "none";
        //let addIcon = state === "none" ? "fa-angle-down" : "fa-angle-up";
        //let removeIcon = state === "none" ? "fa-angle-up" : "fa-angle-down";
        this.nextElementSibling.classList.toggle('active');
        //this.querySelector("i").classList.remove(removeIcon);
        //this.querySelector("i").classList.add(addIcon);
    });
}

/*****************************************
************** Funciones *****************
******************************************/

function markCurrentCover() {
    let cover = document.querySelector(".detalle img");
    if(cover!=null) {
        let alt = cover.getAttribute("alt");
        let miniCover = document.querySelector(".detalle .img-inline img[alt='" + alt + "']");
        miniCover.classList.add('current-cover');
    }
}

function toggleAlbumsButton(width) {
    if(albums != null) {
        if(width < 768) {
            albums.style.display = "block";
            albums.nextElementSibling.style.display = "block";
        } else {
            albums.style.display = "none";
            albums.nextElementSibling.style.display = "grid";
            albums.nextElementSibling.classList.add('active');
        }
    }
}

function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 150);
}

function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 500);
}