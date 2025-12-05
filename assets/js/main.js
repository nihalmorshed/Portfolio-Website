/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add('show-sidebar')
	})
}



/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove('show-sidebar')
	})
}


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
document.addEventListener('click', e => {
    if (e.target.classList.contains('work__button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
    
    }

function togglePortfolioPopup() {
    document.querySelector('.portfolio__popup').classList.toggle('open');
}
document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup);
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});


/*=============== SWIPER TESTIMONIAL ===============*/
var swiper = new Swiper(".testimonials__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },                          
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    }
});

/*=============== INPUT ANIMATION ===============*/

const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);


function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionID = current.getAttribute("id");
        
        // Fix: Use querySelector with exact matching
        const navLink = document.querySelector(`.nav__menu a[href="#${sectionID}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add("active-link");
        } else {
            navLink?.classList.remove("active-link");
        }
    });
}

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
const contactFormStatus = document.querySelector('.contact__form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show sending message
        contactFormStatus.textContent = 'Sending message...';
        contactFormStatus.style.color = 'var(--skin-color)';

        // EmailJS send function
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs from EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                // Show success message
                contactFormStatus.textContent = 'Message sent successfully!';
                contactFormStatus.style.color = '#4caf50';

                // Clear form
                contactForm.reset();

                // Clear status message after 5 seconds
                setTimeout(() => {
                    contactFormStatus.textContent = '';
                }, 5000);
            }, function(error) {
                // Show error message
                contactFormStatus.textContent = 'Failed to send message. Please try again.';
                contactFormStatus.style.color = '#f44336';
                console.log('EmailJS Error:', error);

                // Clear status message after 5 seconds
                setTimeout(() => {
                    contactFormStatus.textContent = '';
                }, 5000);
            });
    });
}

/*=============== SHOW SCROLL UP ===============*/
