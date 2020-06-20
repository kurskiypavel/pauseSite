/*  CLEAR SCROLL POSITION ON RESIZE    */
// Scroll top if resized from small to large for homepage

const mobileScreen = 500;
var scrollTopResize = false;
$(window).resize(function () {
    if ($(window).width() > mobileScreen && scrollTopResize === false) {
        scrollTopResize = true;
        $(window).scrollTop(0);
        console.log('true');
    } else if ($(window).width() < mobileScreen && scrollTopResize !== false) {
        scrollTopResize = false;
        console.log('false');

    }
});

/*  HAMBURGER MENU ANIMATION BEGINS    */

var hamburger = document.getElementById('toogle-hamburger');
let mobileMenuHTML = `
       <div  style="position: fixed;top: 0;z-index: 59;height: 100%;background: white;width: 100%;">
           <div style="position: relative;top: 50%; transform: translateY(-50%) translateY(-54px);">
               <ul class="mobileMenuContainer" style="font-family: SFProText-Light;font-size: 48px;text-align: center;line-height: 78px;">
                   <li>Projects</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul>
            </div>
            <div class="footerMobileMenuContainer" style="position: absolute;bottom: 20px;width: 100%;">
                   <div class="contact-mobile-menu">
                        <div class="contact-item">hello@pausesdesign.ca</div>
                        <div class="contact-item">437 886 5526</div>
                    </div>
                    <div class="footer-wrap" style="padding-bottom: 40px;padding-top: 20px;position: relative;bottom: 0;text-align: center;">
                        <div class="footer">
                            <div class="footer-item link-item">
                                instagram
                            </div>
                            <div class="footer-item center link-item">
                                twitter
                            </div>
                            <div class="footer-item link-item">
                                houzz
                            </div>
                        </div>
                    </div>
            </div>
        </div>
`;

function activateMobileMenu() {
    $('#menuModule').toggleClass('active');
    setTimeout(() => {

        $('#menuModule').html(mobileMenuHTML);

        let listItems = $('.mobileMenuContainer li');

        listItems.each(function (index) {
            index++;
            setTimeout(() => {
                $(this).toggleClass('active');
            }, 150 * index);
        });
        setTimeout(() => {
            $('.footerMobileMenuContainer').toggleClass('active');
        }, 450);


    }, 500);

}

function deactivateMobileMenu() {
    $('#menuModule').toggleClass('active');
    $('.footerMobileMenuContainer').toggleClass('active');

    setTimeout(() => {
        $('#menuModule').html("");
    }, 500);
}

hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
        deactivateMobileMenu();
    } else {
        hamburger.classList.add('is-active');
        activateMobileMenu();
    }
});

/*  HAMBURGER MENU ANIMATION ENDS    */


/*  SCROLL ANIMATION BEGINS    */

// SETTERS


var toogleScrollEvent = true;
// in future scroll count equals index and equals lenght of array - 5
var index = 3;
var scrollDirection = '';


// GETTERS
// Array of titles row one
var titleArrayOne = $('.row-one .js-title');
const lastTitleOne = titleArrayOne[0];
const firstTitleOne = titleArrayOne[titleArrayOne.length - 1];
// Global index for slides titles and pages - will be controlled by scroll count

// Array of titles row two
var titleArrayTwo = $('.row-two .js-title');
const lastTitleTwo = titleArrayTwo[0];
const firstTitleTwo = titleArrayTwo[titleArrayTwo.length - 1];

// Array of page numbers 01 - 05
var pagesArray = $('.js-rotate div');
const lastPage = pagesArray[0];
const firstPage = pagesArray[pagesArray.length - 1];

// Array of image slides left side
var slidesArrayLeft = $('#js-slide-l .js-slide-cell');
const lastSlideLeft = slidesArrayLeft[0];
const firstSlideLeft = slidesArrayLeft[slidesArrayLeft.length - 1];

// Array of image slides right side
var slidesArrayRight = $('#js-slide-r .js-slide-cell');
const lastSlideRight = slidesArrayRight[0];
const firstSlideRight = slidesArrayRight[slidesArrayRight.length - 1];


// Animation on scroll forward / DOWN
function animateDown() {
    // Drop styles for last element for new Loop
    if (index === titleArrayOne.length - 2) {
        // ANIMATE TITLES
        lastTitleOne.classList.remove('active');
        lastTitleTwo.classList.remove('active');

        // ANIMATE SLIDES
        lastSlideLeft.classList.remove('active');
        lastSlideRight.classList.remove('active');

        // ANIMATE PAGINATION
        lastPage.classList.remove('rotated');
    }

    // Beginning of loop
    if (index > 0) {


        // ANIMATE TITLES AND SLIDES
        // TITLES
        // Drop current down
        titleArrayOne[index].classList.remove('active');
        titleArrayTwo[index].classList.remove('active');
        // SLIDES
        // Drop current down
        slidesArrayLeft[index].classList.remove('active');
        slidesArrayRight[index].classList.remove('active');
        // wait until current animated


        setTimeout(function () {
            // TITLES
            // Show next title
            titleArrayOne[index - 1].classList.add('active');
            titleArrayTwo[index - 1].classList.add('active');
            // SLIDES
            slidesArrayLeft[index - 1].classList.add('active');
            slidesArrayRight[index - 1].classList.add('active');

            index--;

            // Drop pagination rotated
            $('.js-rotate .rotated').removeClass('rotated');
            // duration = transition in styles

        }, 900);


        // ANIMATE PAGINATION
        // Rotate current down
        pagesArray[index].classList.add('rotated');
        pagesArray[index].classList.remove('active');
        // Show next number
        pagesArray[index - 1].classList.add('active');
        pagesArray[index - 1].classList.remove('rotated');
        // Drop styles for rotated
        if (pagesArray[index + 1]) {
            pagesArray[index + 1].classList.remove('rotated');
        }


    } else {

        // ANIMATE TITLES AND SLIDES
        // Start loop over
        // Drop last element
        // TITLES
        lastTitleOne.classList.remove('active');
        lastTitleTwo.classList.remove('active');
        // SLIDES
        lastSlideLeft.classList.remove('active');
        lastSlideRight.classList.remove('active');
        // wait until current animated
        setTimeout(function () {
            // Show first element
            // TITLES
            firstTitleOne.classList.add('active');
            firstTitleTwo.classList.add('active');
            // SLIDES
            firstSlideLeft.classList.add('active');
            firstSlideRight.classList.add('active');
            // Drop index to initial
            index = 3;

            // Call loop over
            // myLoop();
            // duration = transition in styles

            // Drop pagination rotated
            $('.js-rotate .rotated').removeClass('rotated');
        }, 900);


        // ANIMATE PAGINATION
        // Rotate last element
        lastPage.classList.add('rotated');
        lastPage.classList.remove('active');

        // Show first element
        firstPage.classList.add('active');
        firstPage.classList.remove('rotated');

        // Drop styles for prev last element
        pagesArray[index + 1].classList.remove('rotated');

    }


}


// Animation on scroll backward / UP
function animateUp() {
    // Drop styles for first element for new Loop
    if (index === titleArrayOne.length - 3) {
        // ANIMATE TITLES
        firstTitleOne.classList.remove('active');
        firstTitleTwo.classList.remove('active');

        // ANIMATE SLIDES
        firstSlideLeft.classList.remove('active');
        firstSlideRight.classList.remove('active');

        // ANIMATE PAGINATION
        firstPage.classList.remove('rotated');
    }

    // Beginning of loop
    if (index < 3) {


        // ANIMATE TITLES AND SLIDES
        // TITLES
        // Drop current down
        titleArrayOne[index].classList.remove('active');
        titleArrayTwo[index].classList.remove('active');
        // SLIDES
        // Drop current down
        slidesArrayLeft[index].classList.remove('active');
        slidesArrayRight[index].classList.remove('active');


        // wait until current animated
        setTimeout(function () {
            // TITLES
            // Show next title
            titleArrayOne[index + 1].classList.add('active');
            titleArrayTwo[index + 1].classList.add('active');
            // SLIDES
            slidesArrayLeft[index + 1].classList.add('active');
            slidesArrayRight[index + 1].classList.add('active');

            index++;

            // Drop pagination rotated
            $('.js-rotate .rotated').removeClass('rotated');

            // duration = transition in styles
        }, 900);


        // ANIMATE PAGINATION
        // Rotate current down
        pagesArray[index].classList.add('rotated');
        pagesArray[index].classList.remove('active');
        // Show next number
        pagesArray[index + 1].classList.add('active');
        pagesArray[index + 1].classList.remove('rotated');
        // Drop styles for rotated
        if (pagesArray[index - 1]) {
            pagesArray[index - 1].classList.remove('rotated');
        }


    } else {

        // ANIMATE TITLES AND SLIDES
        // Start loop over
        // Drop first element
        // TITLES
        firstTitleOne.classList.remove('active');
        firstTitleTwo.classList.remove('active');
        // SLIDES
        firstSlideLeft.classList.remove('active');
        firstSlideRight.classList.remove('active');
        // wait until current animated
        setTimeout(function () {
            // Show last element
            // TITLES
            lastTitleOne.classList.add('active');
            lastTitleTwo.classList.add('active');
            // SLIDES
            lastSlideLeft.classList.add('active');
            lastSlideRight.classList.add('active');
            // Drop index to last
            index = 0;

            // Drop pagination rotated
            $('.js-rotate .rotated').removeClass('rotated');

        }, 900);


        // ANIMATE PAGINATION
        // Rotate first element
        firstPage.classList.add('rotated');
        firstPage.classList.remove('active');

        // Show last element
        lastPage.classList.add('active');
        lastPage.classList.remove('rotated');

        // Drop styles for prev first element
        pagesArray[index - 1].classList.remove('rotated');


    }
}


// Main loop for animation
function myLoop() {

    // Scrolled down
    if (scrollDirection === 'down') {
        animateDown();
    } else {
        animateUp();
    }
}


// Global animation for desktop
function animate() {
    // Get scroll direction
    if (event.deltaY > 0) {
        scrollDirection = 'down';
    } else if (event.deltaY < 0) {
        scrollDirection = 'up';
    }
    myLoop();

    // Run animation
    setTimeout(function () {
        $('.page').bind('mousewheel', wheelHandler);
        toogleScrollEvent = true;
    }, 2000);
}

// Global animation for mobile devices
function animateMobile() {
    // Get scroll direction
    if (swipeDirection === 'down') {
        scrollDirection = 'down';
    } else if (swipeDirection === 'up') {
        scrollDirection = 'up';
    }
    myLoop();

    // Run animation
    setTimeout(function () {
        mc.on("swipedown", function (e) {
            // scroll down analog - next items animation
            swipeDirection = 'up';
            swipeHandler();
        });

        mc.on("swipeup", function (e) {
            // scroll up analog - previuos items animation
            swipeDirection = 'down';
            swipeHandler();
        });
        toogleScrollEvent = true;
    }, 2000);
}

// Prevent from many scrolling
function wheelHandler() {
    // console.log(event.deltaX, event.deltaY, event.deltaFactor);
    if (toogleScrollEvent === true) {
        toogleScrollEvent = false;


        // Disable scrolling
        $('.page').unbind('mousewheel', wheelHandler);
        animate();
    }
}

function swipeHandler() {
    if (toogleScrollEvent === true) {
        toogleScrollEvent = false;


        // Disable swiping
        mc.off("swipedown", function (e) {
        });
        mc.off("swipeup", function (e) {
        });
        animateMobile();
    }
}


// Main scroll event listener
// desktop
$('.page').mousewheel(wheelHandler);


// Mobile devices

if ($(window).width() < 768) {
    $('#hammer').removeAttr("style");
} else {
    // Init library
    var myHammer = document.getElementById('hammer');
    var mc = new Hammer(myHammer);
    var swipeDirection = '';
    mc.get('swipe').set({
        direction: Hammer.DIRECTION_ALL
    });
// Add event listeners
// reverse up and down comparing scroll direction
    mc.on("swipedown", function (e) {
        // scroll down analog - next items animation
        swipeDirection = 'up';
        swipeHandler();
    });

    mc.on("swipeup", function (e) {
        // scroll up analog - previuos items animation
        swipeDirection = 'down';
        swipeHandler();
    });
}


/*  SCROLL ANIMATION ENDS    */

/*  NAVIGATION PSEUDO BEGINS    */

// Set the about navigation item
const middleNav = document.getElementById('aboutNav');

// Event listener for navigation items
$('.js-nav-wrap .nav-item').click(function () {

    // Clear active sublings
    $('.js-nav-wrap .nav-item').removeClass('active');
    // Set clicked menu item as active
    $(this).addClass('active');


    // Get clicked navigation item object
    let navObject = this;
    // Run single menu item function
    activateMenu(navObject);

});

// Main function for single menu item
function activateMenu(navObject) {

    // get clicked menu navigation item ID
    let id = navObject.id;

    // get which one is clicked
    if (id === 'aboutNav') {


    } else if (id === 'contactNav') {
        // pseudo animation for middle navigation item
        middleNav.classList.remove('left-origin');
        middleNav.classList.add('right-origin');


    } else {
        // pseudo animation for middle navigation item
        middleNav.classList.remove('right-origin');
        middleNav.classList.add('left-origin');


    }
}

/*  NAVIGATION PSEUDO ENDS    */


/*  PROJECT ANIMATION BEGINS    */

// Animate home page
function disableHomePage() {

    // check if already disabled
    if ($('.js-home-page').hasClass('disabled-by-projects') === false) {

        // duing 900ms hide elements for homepage

        // opacity on text
        $('.desktop.title-wrap').addClass('disabled');
        $('.layer-text').addClass('disabled');

        // move tiles up and down
        $('#js-slide-l').addClass('disabled');
        $('#js-slide-r').addClass('disabled');

        // hide homepage footer
        $('.js-home-page .footer-wrap').addClass('disabled-by-projects');
        // show general footer
        $('.footer-wrap.fixed').removeClass('disabled');
        // disable main footer for project page
        $('.footer-wrap.fixed').addClass('disabled-for-project');


        // special for iPad scroll
        $('.projects-page.disabled').css('display', 'block');

        // animate projects page duting 900ms
        setTimeout(function () {
            $('.page.disabledScroll').removeClass('disabledScroll');
            activateProjects();
        }, 900);
    }

}

function enableHomePage() {
    $(window).scrollTop(0);
    if ($('.js-home-page').hasClass('disabled-by-projects') === true) {
        // remove active from navigation items
        $('.js-nav-wrap .nav-item').removeClass('active');

        $('.page').addClass('disabledScroll');
        deactivateProjects();

        setTimeout(function () {
            // opacity on text
            $('.desktop.title-wrap').removeClass('disabled');
            $('.layer-text').removeClass('disabled');

            // move tiles up and down
            $('#js-slide-l').removeClass('disabled');
            $('#js-slide-r').removeClass('disabled');

            // hide homepage footer
            $('.js-home-page .footer-wrap').removeClass('disabled-by-projects');

            // enable main footer for project page
            $('.footer-wrap.fixed').removeClass('disabled-for-project');
            // show general footer
            $('.footer-wrap.fixed').addClass('disabled');

            // special for iPad scroll
            $('.projects-page').css('display', 'none');
        }, 900);
    }


}

// Animate projects page
function activateProjects() {

    $('.js-projects-page').removeClass('disabled');
    setTimeout(function () {
        $('.js-home-page').addClass('disabled-by-projects');
    }, 900);
}

function deactivateProjects() {

    $('.js-projects-page').addClass('disabled');
    $('.js-home-page').removeClass('disabled-by-projects');
}


// Event listener for navigation project item
$('#projectsNav').click(disableHomePage);

$(function () {
    if(location.hash === '#projects'){
        disableHomePage();
        $.each($('.nav-item'),function( index, value ) {
            $(value).removeClass('active');
        });
        $('#projectsNav').addClass('active');
    }
})


// row-zero--vertical-image
$('.row-zero--vertical-image').mouseenter(() => {
    $('#row-zero--vertical-tile').addClass('hover');
});

$('.row-zero--vertical-image').mouseleave(() => {
    $('#row-zero--vertical-tile').removeClass('hover');
});

// row-one--vertical-image
$('.row-one--vertical-image').mouseenter(() => {
    $('#row-one--vertical-tile').addClass('hover');
});

$('.row-one--vertical-image').mouseleave(() => {
    $('#row-one--vertical-tile').removeClass('hover');
});

// row-one--horizontal-image
$('.row-one--horizontal-image').mouseenter(() => {
    $('#row-one--horizontal-tile').addClass('hover');
});

$('.row-one--horizontal-image').mouseleave(() => {
    $('#row-one--horizontal-tile').removeClass('hover');
});

// row-two--vertical-image
$('.row-two--vertical-image').mouseenter(() => {
    $('#row-two--vertical-tile').addClass('hover');
});

$('.row-two--vertical-image').mouseleave(() => {
    $('#row-two--vertical-tile').removeClass('hover');
});

// row-two--horizontal-image
$('.row-two--horizontal-image').mouseenter(() => {
    $('#row-two--horizontal-tile').addClass('hover');
});

$('.row-two--horizontal-image').mouseleave(() => {
    $('#row-two--horizontal-tile').removeClass('hover');
});


/*  PROJECT ANIMATION ENDS    */


/*  LOGO CLICK ANIMATION BEGINS    */

// Event listener for navigation project item
$('#headerLogo').click(enableHomePage);

/*  LOGO CLICK ANIMATION ENDS    */


/*  CURSOR EVENTS BEGINS    */

/* Animating the Small Dot Cursor   */

// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        // if you are already using TweenMax in your project, you might as well
        // use TweenMax.set() instead
        // TweenMax.set(innerCursor, {
        //   x: clientX,
        //   y: clientY
        // });

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();

// Setting up the Circle on Canvas
let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
    const canvas = document.querySelector(".cursor--canvas");
    const shapeBounds = {
        width: 75,
        height: 75
    };
    paper.setup(canvas);
    const strokeColor = "rgba(0, 0, 0, 0.5)";
    const strokeColorHover = "rgba(0, 0, 0, 0)";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;

    // we'll need these later for the noisy circle
    const noiseScale = 150; // speed
    const noiseRange = 4; // range of distortion
    let isNoisy = false; // state

    // the base shape for the noisy circle
    const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
    );
    polygon.strokeColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.smooth();
    group = new paper.Group([polygon]);
    group.applyMatrix = false;

    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];

    // function for linear interpolation of values
    const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
    };

    // function to map a value from one range to another range
    const map = (value, in_min, in_max, out_min, out_max) => {
        return (
            ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    };

    // the draw loop of Paper.js 
    // (60fps with requestAnimationFrame under the hood)
    paper.view.onFrame = event => {
        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
    }
    const initHovers = () => {

        // find the center of the link element and set stuckX and stuckY
        // these are needed to set the position of the noisy circle
        const handleMouseEnter = e => {
            polygon.strokeColor = strokeColorHover;
        };

        // reset isStuck on mouseLeave
        const handleMouseLeave = () => {
            polygon.strokeColor = strokeColor;
        };

        // add event listeners to all items
        const linkItems = document.querySelectorAll(".link-item");
        linkItems.forEach(item => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });
    };

    initHovers();


}

initCanvas();

/*  CURSOR EVENTS ENDS    */

/*  TILE IMAGE MOVE HOMEPAGE  BEGINS    */

function imageMoveByMouse() {

    $('.slide-l .js-slide-cell')
        .on('mousemove', function (e) {
            $(this).children('img').css({
                'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
            });
        });
    $('.slide-r .js-slide-cell')
        .on('mousemove', function (e) {
            $(this).children('img').css({
                'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
            });
        });
}

imageMoveByMouse();
/*    TILE IMAGE MOVE HOMEPAGE ENDS    */

