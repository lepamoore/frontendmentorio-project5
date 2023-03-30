const callButton = document.getElementById('callScheduleButton');
const callText = document.getElementById('scheduleCallRed');
const contactForm = document.getElementById('contactFormDiv'); 
const formCross = document.getElementById('formCross');
const menuDiv = document.getElementById('menuDiv');
const menuIcon = document.getElementById('hamburgerIcon');
const menuIconSrcBurger = './assets/mobile/icon-hamburger.svg';
const menuIconSrcCross = './assets/mobile/icon-cross.svg';
const sectionTwo = document.getElementById('sectionTwo');
const slideBgOne = document.getElementById('slideBgOne');
const slideBgTwo = document.getElementById('slideBgTwo');
const slideBgThree = document.getElementById('slideBgThree');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const projectHeading = document.getElementById('projectHeading');
let galleryCounter = 1;

function toggleCallVisible() {
    if(getComputedStyle(contactForm).visibility === 'hidden') {
        contactForm.style.visibility = 'visible';
        contactForm.style.opacity = '1';
    } else {
        contactForm.style.opacity = '0';
        contactForm.style.visibility = 'hidden';
    }
}

function toggleMenuVisible() {
    if(menuIcon.src.includes('icon-hamburger')) {
        menuDiv.style.top = '10%';
        menuIcon.src = menuIconSrcCross;
    } else {
        menuDiv.style.top = '-40%';
        menuIcon.src = menuIconSrcBurger;
    }
}


function listOnClick(evt) {
    evt.target.style.backgroundColor = '#F94F4F';
    evt.target.style.fontWeight = '800';
    toggleMenuVisible();
    setTimeout(listOnBlur, 500, evt);
}

function listOnBlur(evt) {
    evt.target.style.backgroundColor = '#191921';
    evt.target.style.fontWeight = '400';
}

function gallerySlideUp() {
    if(galleryCounter === 1) {
        galleryCounter++;
        gallerySlideHandle();
        slideProjectHeading();
    } else if (galleryCounter === 2) {
        galleryCounter++;
        gallerySlideHandle();
        slideProjectHeading();
    } else if (galleryCounter === 3) {
        galleryCounter = galleryCounter;
    }
}

function gallerySlideDown() {
    if(galleryCounter === 1) {
        galleryCounter = galleryCounter;
    } else if (galleryCounter === 2) {
        galleryCounter--;
        gallerySlideHandle();
        slideProjectHeading();
    } else if (galleryCounter === 3) {
        galleryCounter--;
        gallerySlideHandle();
        slideProjectHeading();
    }
}

function prevArrowLight() {
    prevArrow.children[0].style.stroke = '#F09896';
    prevArrow.children[1].style.stroke = '#F09896';
}

function prevArrowStrong() {
    prevArrow.children[0].style.stroke = '#F94F4F';
    prevArrow.children[1].style.stroke = '#F94F4F';
}

function nextArrowLight() {
    nextArrow.children[0].style.stroke = '#F09896';
    nextArrow.children[1].style.stroke = '#F09896';
}

function nextArrowStrong() {
    nextArrow.children[0].style.stroke = '#F94F4F';
    nextArrow.children[1].style.stroke = '#F94F4F';
}

function gallerySlideHandle() {
    switch (galleryCounter) {
        case 1:
            slideBgOne.style.opacity = '1';
            slideBgOne.style.left = '0';
            slideBgOne.style.scale = '1';
            slideBgTwo.style.bottom = '39.5%';
            slideBgTwo.style.left = '100%';
            slideBgTwo.style.opacity = '0';
            slideBgTwo.style.scale = '0.25';
            slideBgThree.style.bottom = '65.5%';
            slideBgThree.style.left = '200%';
            slideBgThree.style.opacity = '0';
            slideBgThree.style.scale = '0.25';
            prevArrowLight();
            nextArrowStrong();
            break;

        case 2:
            slideBgOne.style.opacity = '0';
            slideBgOne.style.left = '-100%';
            slideBgOne.style.scale = '0.25';
            slideBgTwo.style.bottom = '39.5%';
            slideBgTwo.style.left = '0%';
            slideBgTwo.style.opacity = '1';
            slideBgTwo.style.scale = '1';
            slideBgThree.style.bottom = '65.5%';
            slideBgThree.style.left = '100%';
            slideBgThree.style.opacity = '0';
            slideBgThree.style.scale = '0.25';
            prevArrowStrong();
            nextArrowStrong();
            break;

        case 3:
            slideBgOne.style.opacity = '0';
            slideBgOne.style.left = '-200%';
            slideBgOne.style.scale = '0.25';
            slideBgTwo.style.bottom = '39.5%';
            slideBgTwo.style.left = '-100%';
            slideBgTwo.style.opacity = '0';
            slideBgTwo.style.scale = '0.25';
            slideBgThree.style.bottom = '65.5%';
            slideBgThree.style.left = '0%';
            slideBgThree.style.opacity = '1';
            slideBgThree.style.scale = '1';
            prevArrowStrong();
            nextArrowLight();
            break;
    
        default:
            break;
    }
}

function slideProjectHeading() {
    projectHeading.style.opacity = 0;
    setTimeout(slideProjectCases, 250);
    setTimeout(slideHeadingOpacity, 500);
}

function slideHeadingOpacity() {
    projectHeading.style.opacity = 1;
}

function slideProjectCases() {
    switch (galleryCounter) {
        case 1:
            projectHeading.innerText = 'Brand naming & guidelines';
            break;

        case 2:
            projectHeading.innerText = 'Brand identity & merchandise';
            break;

        case 3:
            projectHeading.innerText = 'Brand identity & web design';
            break;
    
        default:
            break;
    }
}

function projectHeadingOne() {

}

function projectHeadingTwo() {
    
}

function projectHeadingThree() {
    
}



// Red '#F94F4F'
// lightRed '#F09896'

callButton.addEventListener('click', toggleCallVisible);
formCross.addEventListener('click', toggleCallVisible);
callText.addEventListener('click', toggleCallVisible);
menuIcon.addEventListener('click', toggleMenuVisible);
document.getElementById('liOneLink').addEventListener('click', listOnClick);
document.getElementById('liTwoLink').addEventListener('click', listOnClick);
document.getElementById('liThreeLink').addEventListener('click', listOnClick);
document.getElementById('liFourLink').addEventListener('click', listOnClick);
prevArrow.addEventListener('click', gallerySlideDown);
nextArrow.addEventListener('click', gallerySlideUp);



