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


function toggleMenuVisible() {
    if(menuIcon.src.includes('icon-hamburger')) {
        menuDiv.style.top = '10%';
        menuDiv.style.visibility = 'visible';
        menuDiv.style.opacity = '1';
        menuIcon.src = menuIconSrcCross;
    } else {
        menuDiv.style.top = '-160%';
        menuIcon.src = menuIconSrcBurger;
        menuDiv.style.opacity = '0';
        menuDiv.style.visibility = 'hidden';
    }
}


function listOnClick(evt) {
    evt.target.style.fontWeight = '800';
    toggleMenuVisible();
    setTimeout(() => {
        evt.target.style.fontWeight = '400';
    }, 500,);
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

function placeDesktopMenu() {
    menuDiv.style = {};
    menuDiv.style.width = '50%';
    menuDiv.style.minHeight = '115.2px';
    menuDiv.style.height = '15vh';
    menuDiv.style.position = 'fixed';
    menuDiv.style.top = '0';
    menuDiv.style.right = '0';
    menuDiv.style.zIndex = '999';
    menuDiv.style.backgroundColor = '#F94F4F';
    menuDiv.style.display = 'flex';
    menuDiv.style.alignItems = 'center';
    menuDiv.style.justifyContent = 'center';
}

function placeTabletMenu() {
    menuDiv.style = {};
    menuDiv.style.width = '60%';
    menuDiv.style.height = '15vh';
    menuDiv.style.position = 'fixed';
    menuDiv.style.top = '0';
    menuDiv.style.right = '0';
    menuDiv.style.zIndex = '999';
    menuDiv.style.backgroundColor = '#F94F4F';
    menuDiv.style.display = 'flex';
    menuDiv.style.alignItems = 'center';
    menuDiv.style.justifyContent = 'center';
}

function placeMobileMenu() {
    menuDiv.style = {};
    menuDiv.style.width = '60%';
    menuDiv.style.textAlign = 'center';
    menuDiv.style.visibility = 'hidden';
    menuDiv.style.opacity = '0';
    menuDiv.style.position = 'fixed';
    menuDiv.style.top = '-40%';
    menuDiv.style.left = '32.5%';
    menuDiv.style.zIndex = '998';
    menuDiv.style.backgroundColor = '#191921';
    menuDiv.style.transition = 'top 1s';
}

// Red '#F94F4F'
// lightRed '#F09896'


const x = window.matchMedia("(max-width: 766.5px)");
const tabletStart = window.matchMedia('(min-width: 767px)');
const tabletEnd = window.matchMedia('(max-width :1023.5px)');
const desktopStart = window.matchMedia('(min-width: 1024px');

function myFunction() {
    if (x.matches) { // If media query matches
        menuIcon.addEventListener('click', toggleMenuVisible);
        document.getElementById('liFourButton').addEventListener('click', toggleMenuVisible)
        document.getElementById('liOneLink').addEventListener('click', listOnClick);
        document.getElementById('liTwoLink').addEventListener('click', listOnClick);
        document.getElementById('liThreeLink').addEventListener('click', listOnClick);
        placeMobileMenu();
        gallerySlideHandle();
        gallerySlideUp();
        gallerySlideDown();
    } else if(tabletStart.matches && tabletEnd.matches) {
        menuIcon.removeEventListener('click', toggleMenuVisible);
        document.getElementById('liFourButton').removeEventListener('click', toggleMenuVisible)
        document.getElementById('liOneLink').removeEventListener('click', listOnClick);
        document.getElementById('liTwoLink').removeEventListener('click', listOnClick);
        document.getElementById('liThreeLink').removeEventListener('click', listOnClick);
        placeTabletMenu();
        gallerySlideHandle();
        gallerySlideUp();
        gallerySlideDown();
    } else if(desktopStart.matches) {
        menuIcon.removeEventListener('click', toggleMenuVisible);
        document.getElementById('liFourButton').removeEventListener('click', toggleMenuVisible)
        document.getElementById('liOneLink').removeEventListener('click', listOnClick);
        document.getElementById('liTwoLink').removeEventListener('click', listOnClick);
        document.getElementById('liThreeLink').removeEventListener('click', listOnClick);
        placeDesktopMenu();
        gallerySlideHandle();
        gallerySlideUp();
        gallerySlideDown();
    }
  }

  myFunction(); // Call listener function at run time
x.addEventListener('change', myFunction); // Attach listener function on state changes
tabletStart.addEventListener('change', myFunction);
tabletEnd.addEventListener('change', myFunction);
desktopStart.addEventListener('change', myFunction);
prevArrow.addEventListener('click', gallerySlideDown);
nextArrow.addEventListener('click', gallerySlideUp);