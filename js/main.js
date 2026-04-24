//enlever la class no js

import {settings as s} from "./settings";

document.querySelector('html').classList.remove('no-js');
document.querySelector('html').classList.add('js-active');


//quand je clique sur submit de mon email je ne reviens pas en haut de la page.

const form = document.querySelector(s.formulaireNewsletter);
form.addEventListener('submit', function (evt) {
    evt.preventDefault(); // empêche le rechargement

});

//mettre mes element en carre sous forme de carte

const sectionAvis = document.querySelector('.testimonial-element');

sectionAvis.classList.add('js-cards');


//ecouter le click pour que mes cartes se decales de 1


const leftArrow = document.querySelector(s.arrowLeft);
const rightArrow = document.querySelector(s.arrowRight);
const container = document.querySelector(s.advicePart);
const cards = document.querySelectorAll(s.adviceOnly);

const containerParent = container.parentElement;
containerParent.style.overflow = 'hidden';
let currentIndex = 0;

// largeur d’une carte (avec gap)
const cardWidth = cards[0].offsetWidth;
const gap = parseFloat(getComputedStyle(container).gap) || 0;
const step = cardWidth + gap;

// nombre max de décalages possibles
const maxIndex = cards.length - Math.floor(container.parentElement.offsetWidth / step);

// état initial
leftArrow.style.pointerEvents = 'none';
leftArrow.style.opacity = '0.3';

container.style.transition = 'transform 0.5s ease';

rightArrow.addEventListener('click', () => {
    if (currentIndex >= maxIndex) return;

    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * step}px)`;

    leftArrow.style.pointerEvents = 'auto';
    leftArrow.style.opacity = '1';

    if (currentIndex >= maxIndex) {
        rightArrow.style.pointerEvents = 'none';
        rightArrow.style.opacity = '0.3';
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex <= 0) return;

    currentIndex--;
    container.style.transform = `translateX(-${currentIndex * step}px)`;

    rightArrow.style.pointerEvents = 'auto';
    rightArrow.style.opacity = '1';

    if (currentIndex === 0) {
        leftArrow.style.pointerEvents = 'none';
        leftArrow.style.opacity = '0.3';
    }
});


// partie review card l'un a cote de l autre overflow cache

const sectionReview = document.querySelector('.cards-review');
sectionReview.classList.add('js-cards-review');





//changer de video au scroll et sticky seulement lorsque js est activé

const stickyVideo = document.querySelector('.video-display');
stickyVideo.classList.add('video-js-active');

// Récupère tous les articles et vidéo

const articles = document.querySelectorAll(s.articleBegin);
const videos = document.querySelectorAll(s.videoBegin);

function updateVideo() {
    if (window.innerWidth <= 1000) {
        return;
    }

    const windowHeight = window.innerHeight;
    const screenCenter = windowHeight / 2;

    let currentVideoIndex = 0;

    for (let i = 0; i < articles.length - 1; i++) {
        const currentRect = articles[i].getBoundingClientRect();
        const nextRect = articles[i + 1].getBoundingClientRect();

        const gapMiddle = (currentRect.bottom + nextRect.top) / 2;

        if (screenCenter > gapMiddle) {
            currentVideoIndex = i + 1;
        }
    }
    // Active la bonne vidéo
    videos.forEach((video, index) => {
        if (index === currentVideoIndex) {
            video.classList.add('active');
        } else {
            video.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateVideo);
updateVideo();


