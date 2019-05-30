/*  HAMBURGER MENU ANIMATION BEGINS    */

var hamburger = document.getElementById('toogle-hamburger');
hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
    } else {
        hamburger.classList.add('is-active');
    }
});

/*  HAMBURGER MENU ANIMATION ENDS    */



/*  SCROLL ANIMATION BEGINS    */

// SETTERS


var toogleScrollEvent = true;
// in future scroll count equals index and equals lenght of array - 5
var index = 4;
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
            index = 4;

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
    if (index === titleArrayOne.length - 4) {
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
    if (index < 4) {


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


// Global animation
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


// Main scroll event listener
$('.page').mousewheel(wheelHandler);

/*  SCROLL ANIMATION ENDS    */

/*  NAVIGATION PSEUDO BEGINS    */

// Set the studio navigation item
const middleNav = document.getElementById('studioNav');

// Event listener for navigation items
$('.js-nav-wrap .nav-item').click(function(){
    
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
    if (id === 'studioNav') {

       

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