let lightBox = document.querySelectorAll ('.portfolio-image');
let image1 = document.querySelector ('#image-1');

function openLightBox() {
    let galleryLightbox = this.dataset.member 

    document.querySelector('#gallery-lightbox').style.display = 'grid';

    document.querySelector('#gallery-pic').src = "images/lightbox_pictures/" + galleryLightbox + ".webp";
}

lightBox.forEach(lightbox => lightbox.addEventListener('click', openLightBox))
image1.addEventListener('click', openLightBox)
