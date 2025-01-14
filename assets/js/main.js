/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => { 
    tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
        tabContent.classList.remove('skills__active');
    });
    target.classList.add('skills__active');

    tabs.forEach(tab => {
        tab.classList.remove('skills__active');
    });
    tab.classList.add('skills__active');
});
});


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 400
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
        linkWork.forEach(l => l.classList.remove('active-work'));
        this.classList.add('active-work');
    
}
linkWork.forEach(l => l.addEventListener('click', activeWork));

/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
