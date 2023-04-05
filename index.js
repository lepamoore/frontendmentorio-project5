const callButton = document.getElementById('callScheduleButton');
const callText = document.getElementById('scheduleCallRed');
const contactForm = document.getElementById('contactFormDiv'); 
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
const landingDiv = document.getElementById('landingDiv');
let galleryCounter = 1;

function toggleMenuCB()  {
    menuDiv.style.opacity = '0';
    menuDiv.style.visibility = 'hidden';
}

function toggleMenuVisible() {
    if(menuIcon.src.includes('icon-hamburger')) {
        menuDiv.style.top = '10%';
        menuDiv.style.visibility = 'visible';
        menuDiv.style.opacity = '1';
        menuIcon.src = menuIconSrcCross;
    } else {
        menuDiv.style.top = '-40%';
        menuIcon.src = menuIconSrcBurger;
        setTimeout(toggleMenuCB, 1000);
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
    if(x.matches) {
    switch (galleryCounter) {
            case 1:
                slideBgOne.style.opacity = '1';
                slideBgOne.style.left = '0';
                slideBgOne.style.scale = '1';
                slideBgTwo.style.left = '100%';
                slideBgTwo.style.opacity = '0';
                slideBgTwo.style.scale = '0.25';
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
                slideBgTwo.style.left = '0%';
                slideBgTwo.style.opacity = '1';
                slideBgTwo.style.scale = '1';
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
                slideBgTwo.style.left = '-100%';
                slideBgTwo.style.opacity = '0';
                slideBgTwo.style.scale = '0.25';
                slideBgThree.style.left = '0%';
                slideBgThree.style.opacity = '1';
                slideBgThree.style.scale = '1';
                prevArrowStrong();
                nextArrowLight();
                break;
        
            default:
                break;
        }
    } else if(tabletStart.matches && tabletEnd.matches) {
        switch (galleryCounter) {
            case 1:
                slideBgOne.style.visibility = 'visible';
                slideBgOne.style.scale = '1';
                slideBgOne.style.opacity = '1'
                slideBgTwo.style.visibility = 'hidden';
                slideBgTwo.style.scale = '0';
                slideBgTwo.style.opacity = '0';
                slideBgThree.style.visibility = 'hidden';
                slideBgThree.style.scale = '0';
                slideBgThree.style.opacity = '0';
                prevArrowLight();
                nextArrowStrong();
                break;

            case 2:
                slideBgOne.style.visibility = 'hidden';
                slideBgOne.style.scale = '0';
                slideBgOne.style.opacity = '0'
                slideBgTwo.style.visibility = 'visible';
                slideBgTwo.style.scale = '1';
                slideBgTwo.style.opacity = '1';
                slideBgThree.style.visibility = 'hidden';
                slideBgThree.style.scale = '0';
                slideBgThree.style.opacity = '0';
                prevArrowStrong();
                nextArrowStrong();
                break;

            case 3:
                slideBgOne.style.visibility = 'hidden';
                slideBgOne.style.scale = '0';
                slideBgOne.style.opacity = '0'
                slideBgTwo.style.visibility = 'hidden';
                slideBgTwo.style.scale = '0';
                slideBgTwo.style.opacity = '0';
                slideBgThree.style.visibility = 'visible';
                slideBgThree.style.scale = '1';
                slideBgThree.style.opacity = '1';
                prevArrowStrong();
                nextArrowLight();
                break;
        
            default:
                break;
        }
    } else if(desktopStart.matches) {
        switch (galleryCounter) {
            case 1:
                slideBgOne.style.visibility = 'visible';
                slideBgOne.style.scale = '1';
                slideBgOne.style.opacity = '1'
                slideBgTwo.style.visibility = 'hidden';
                slideBgTwo.style.scale = '0';
                slideBgTwo.style.opacity = '0';
                slideBgThree.style.visibility = 'hidden';
                slideBgThree.style.scale = '0';
                slideBgThree.style.opacity = '0';
                prevArrowLight();
                nextArrowStrong();
                break;

            case 2:
                slideBgOne.style.visibility = 'hidden';
                slideBgOne.style.scale = '0';
                slideBgOne.style.opacity = '0'
                slideBgTwo.style.visibility = 'visible';
                slideBgTwo.style.scale = '1';
                slideBgTwo.style.opacity = '1';
                slideBgThree.style.visibility = 'hidden';
                slideBgThree.style.scale = '0';
                slideBgThree.style.opacity = '0';
                prevArrowStrong();
                nextArrowStrong();
                break;

            case 3:
                slideBgOne.style.visibility = 'hidden';
                slideBgOne.style.scale = '0';
                slideBgOne.style.opacity = '0'
                slideBgTwo.style.visibility = 'hidden';
                slideBgTwo.style.scale = '0';
                slideBgTwo.style.opacity = '0';
                slideBgThree.style.visibility = 'visible';
                slideBgThree.style.scale = '1';
                slideBgThree.style.opacity = '1';
                prevArrowStrong();
                nextArrowLight();
                break;
        
            default:
                break;
        }
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


function removeHash () { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function reloadTablet() {
    if(window.location.hash !== '#tablet') {
        removeHash();
        window.location = window.location + '#tablet';
        window.location.reload();
        return false;
    }
}

function reloadMobile() {
    if(window.location.hash !== '#mobile') {
        removeHash();
        window.location = window.location + '#mobile';
        window.location.reload();
        return false;
    }
}

function reloadDesktop() {
    if(window.location.hash !== '#desktop') {
        removeHash();
        window.location = window.location + '#desktop';
        window.location.reload();
        return false;
    }
}


// Red '#F94F4F'
// lightRed '#F09896'


var x = window.matchMedia("(max-width: 766.49px)");
var tabletStart = window.matchMedia('(min-width: 766.5px)');
var tabletEnd = window.matchMedia('(max-width :1023.49px)');
var desktopStart = window.matchMedia('(min-width: 1023.5px');

function myFunction(x) {
    if (x.matches) { // If media query matches
        window.addEventListener('resize', reloadMobile);
        menuIcon.addEventListener('click', toggleMenuVisible);
        document.getElementById('liFourButton').addEventListener('click', toggleMenuVisible)
        document.getElementById('liOneLink').addEventListener('click', listOnClick);
        document.getElementById('liTwoLink').addEventListener('click', listOnClick);
        document.getElementById('liThreeLink').addEventListener('click', listOnClick);
        prevArrow.addEventListener('click', gallerySlideDown);
        nextArrow.addEventListener('click', gallerySlideUp);
        gallerySlideHandle();
        gallerySlideUp();
        gallerySlideDown();
    } else if(tabletStart.matches && tabletEnd.matches) {
        window.addEventListener('resize', reloadTablet);
        prevArrow.addEventListener('click', gallerySlideDown);
        nextArrow.addEventListener('click', gallerySlideUp);
        gallerySlideHandle();
        gallerySlideUp();
        gallerySlideDown();
    } else if(desktopStart.matches) {
        window.addEventListener('resize', reloadDesktop);
        prevArrow.addEventListener('click', gallerySlideDown);
        nextArrow.addEventListener('click', gallerySlideUp);
        gallerySlideHandle();
        gallerySlideUp();
        gallerySlideDown();
    }
  }

  myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
