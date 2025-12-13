# Nihal Morshed - Portfolio Website

## Complete Technical Documentation

A comprehensive, modern, responsive portfolio website showcasing AI/ML engineering expertise, research publications, projects, and professional experience. Built with vanilla HTML, CSS, and JavaScript with Progressive Web App (PWA) capabilities.

**Live Website:** [https://nihalmorshed.github.io/](https://nihalmorshed.github.io/)

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technology Stack](#technology-stack)
3. [External Libraries & CDNs](#external-libraries--cdns)
4. [File-by-File Documentation](#file-by-file-documentation)
   - [index.html](#indexhtml)
   - [style.css](#stylecss)
   - [main.js](#mainjs)
   - [manifest.json](#manifestjson)
   - [sw.js (Service Worker)](#swjs-service-worker)
   - [static.yml (GitHub Actions)](#staticyml-github-actions)
5. [HTML Structure & Components](#html-structure--components)
6. [CSS Architecture](#css-architecture)
7. [JavaScript Functionality](#javascript-functionality)
8. [Animations & Effects](#animations--effects)
9. [Responsive Design](#responsive-design)
10. [PWA Features](#pwa-features)
11. [SEO & Accessibility](#seo--accessibility)
12. [Customization Guide](#customization-guide)
13. [Deployment](#deployment)
14. [Troubleshooting](#troubleshooting)

---

## Project Structure

```
Portfolio-Website/
├── index.html                 # Main HTML file (single-page application)
├── manifest.json              # PWA manifest configuration
├── sw.js                      # Service Worker for offline caching
├── README.md                  # This documentation file
├── .github/
│   └── workflows/
│       └── static.yml         # GitHub Actions deployment workflow
└── assets/
    ├── css/
    │   ├── style.css          # Main stylesheet (2300+ lines)
    │   └── swiper-bundle.min.css  # Swiper carousel styles
    ├── js/
    │   ├── main.js            # Main JavaScript file (430+ lines)
    │   ├── mixitup.min.js     # MixItUp filtering library
    │   └── swiper-bundle.min.js   # Swiper carousel library
    ├── img/
    │   ├── Portfolio.png      # Profile/avatar image
    │   ├── about-img.png      # About section image
    │   ├── background.png     # Home section dark theme background
    │   ├── background light.png   # Home section light theme background
    │   ├── portfolio bg.png   # Portfolio section background
    │   └── [project images]   # Various project thumbnails
    ├── certificates/          # Certificate images/PDFs for lightbox
    │   ├── iccit-2024.pdf
    │   ├── jsc-achievement-2014.jpg
    │   ├── ssc-achievement-2017.jpg
    │   └── [other certificates]
    └── docs/
        └── Nihal_Morshed_Resume.pdf  # Downloadable resume
```

---

## Technology Stack

| Category | Technology |
|----------|------------|
| **Markup** | HTML5 (Semantic) |
| **Styling** | CSS3 (Custom Properties, Flexbox, Grid) |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **Icons** | Unicons, Boxicons |
| **Animations** | AOS (Animate On Scroll), Particles.js |
| **Carousels** | Swiper.js |
| **Filtering** | MixItUp |
| **Email** | EmailJS |
| **Fonts** | Google Fonts (Poppins, Bona Nova SC) |
| **Deployment** | GitHub Pages with GitHub Actions |
| **PWA** | Service Worker, Web App Manifest |

---

## External Libraries & CDNs

### CSS Libraries

| Library | CDN URL | Purpose |
|---------|---------|---------|
| **Unicons** | `https://unicons.iconscout.com/release/v4.0.8/css/line.css` | Line icons throughout the site |
| **Boxicons** | `https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css` | Additional icon set |
| **AOS CSS** | `https://unpkg.com/aos@2.3.1/dist/aos.css` | Scroll animation styles |
| **Swiper CSS** | Local: `assets/css/swiper-bundle.min.css` | Carousel/slider styles |

### JavaScript Libraries

| Library | CDN/Path | Purpose |
|---------|----------|---------|
| **MixItUp** | Local: `assets/js/mixitup.min.js` | Portfolio filtering |
| **Swiper** | Local: `assets/js/swiper-bundle.min.js` | Testimonial carousel |
| **EmailJS** | `https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js` | Contact form emails |
| **AOS** | `https://unpkg.com/aos@2.3.1/dist/aos.js` | Scroll animations |
| **Particles.js** | `https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js` | Particle background effect |

### Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap');
```

- **Poppins** (300, 400, 500, 600): Primary body font
- **Bona Nova SC**: Decorative/heading font (loaded but not actively used)

---

## File-by-File Documentation

### index.html

**Location:** `/index.html`
**Lines:** ~1743
**Purpose:** Single-page application containing all sections and content

#### Head Section (Lines 1-53)

```html
<!DOCTYPE html>
<html lang="en">
<head>
```

**Meta Tags:**
- `charset="UTF-8"`: Character encoding
- `viewport`: Responsive viewport configuration
- **SEO Meta Tags** (Lines 8-11):
  - `description`: Page description for search engines
  - `keywords`: Relevant search terms
  - `author`: Site author

**Open Graph Tags** (Lines 13-18):
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- Used for social media sharing previews (Facebook, LinkedIn)

**Twitter Cards** (Lines 20-24):
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Used for Twitter/X sharing previews

**External Resources** (Lines 26-50):
- Icon libraries (Unicons, Boxicons)
- Swiper CSS
- AOS CSS
- Main stylesheet
- PWA manifest link
- Theme color meta tag
- Apple touch icon

#### Body Structure

**1. Skip to Content Link** (Line 57)
```html
<a href="#home" class="skip-to-content">Skip to main content</a>
```
- Accessibility feature for keyboard navigation
- Hidden by default, visible on focus (`:focus` state)

**2. Preloader** (Lines 59-65)
```html
<div class="preloader" id="preloader">
    <div class="preloader__content">
        <div class="preloader__spinner"></div>
        <span class="preloader__text">Loading...</span>
    </div>
</div>
```
- Shows spinning animation while page loads
- Hidden via JavaScript after `window.load` event
- CSS animation: `spin` keyframes (360deg rotation)

**3. Scroll Progress Indicator** (Line 68)
```html
<div class="scroll-progress" id="scroll-progress"></div>
```
- Fixed bar at top of viewport
- Width dynamically updated via JavaScript based on scroll position
- Gradient background with glow effect

**4. Theme Toggle Button** (Lines 70-74)
```html
<button class="theme-toggle" id="theme-toggle">
    <i class="uil uil-sun"></i>
    <i class="uil uil-moon"></i>
</button>
```
- Fixed position (top-right)
- Sun icon for light theme, moon icon for dark theme
- Toggle visibility based on `body.light-theme` class

**5. Sidebar Navigation** (Lines 76-126)

```html
<aside class="sidebar" id="sidebar">
    <nav class="nav">
        <div class="nav__logo">M</div>
        <div class="nav__menu">
            <ul class="nav__list">
                <!-- Navigation items -->
            </ul>
        </div>
        <div class="btn__share">...</div>
        <div class="nav__close">...</div>
    </nav>
</aside>
```

**Structure:**
- Fixed left sidebar (100px width on desktop)
- Rotated menu (-90deg) for vertical text display
- Logo circle with initial "M"
- Navigation links to all sections
- Share button at bottom
- Close button (visible on mobile only)

**Navigation Items:**
| Section | href | Display Text |
|---------|------|--------------|
| Home | `#home` | Home |
| About | `#about` | About |
| Qualification | `#qualification` | Qualification |
| Problem Solving | `#problemsolving` | Problem Solving |
| Work | `#work` | Work |
| Services | `#services` | Services |
| Publications | `#publications` | Publications |
| Certifications | `#certifications` | Certifications |
| Contact | `#contact` | Contact |

**6. Main Content** (Lines 129-1640)

Contains all page sections within `<main class="main">`.

---

### Section: Home (Lines 131-198)

```html
<section class="home" id="home">
    <div id="particles-js" class="particles-container"></div>
    <div class="home__container container grid">
        <!-- Social links, image, data, info -->
    </div>
</section>
```

**Components:**

1. **Particles Container** (`#particles-js`):
   - Background particle animation
   - Initialized via Particles.js library
   - Re-initializes on theme change

2. **Social Links** (`.home__social`):
   - "Follow Me" text with decorative line
   - LinkedIn and GitHub icon links
   - Opens in new tab (`target="_blank"`)

3. **Profile Image** (`.home__img`):
   - Hidden on desktop (CSS: `display: none`)
   - Shown on mobile (< 576px)

4. **Home Data** (`.home__data`):
   - Title: "Hi, I'm Nihal Morshed."
   - Subtitle with typing animation:
     ```html
     <span class="typed-text"></span><span class="cursor">|</span>
     ```
   - Description paragraph
   - Two CTA buttons: "Download Resume" and "More About Me"

5. **Info Items** (`.my__info`):
   - LinkedIn handle
   - Email address
   - Hidden on mobile (< 576px)

---

### Section: About (Lines 200-237)

```html
<section class="about section" id="about">
    <h2 data-heading="My Intro" class="section__title">About me</h2>
    <div class="about__container container grid">
        <img src="assets/img/about-img.png" class="about__img" />
        <div class="about__data">
            <!-- Heading, description, info boxes, button -->
        </div>
    </div>
</section>
```

**Components:**

1. **Section Title** with `data-heading` attribute:
   - `::before` pseudo-element displays "My Intro" above title
   - Uses `attr(data-heading)` CSS function

2. **About Image**:
   - Profile photo with border-radius
   - Lazy loading: `loading="lazy"`

3. **Info Boxes** (`.about__box`):
   | Icon | Title | Subtitle |
   |------|-------|----------|
   | `uil-file-alt` | Research | IEEE Published |
   | `uil-code-branch` | Problems Solved | 260+ Challenges |
   | `uil-award` | Certifications | 10+ Completed |

4. **AOS Attributes**:
   - `data-aos="fade-up"`: Animation type
   - `data-aos-delay="200"`: Animation delay (ms)

---

### Section: Qualification (Lines 239-343)

Two-column layout for Education and Experience.

```html
<section class="qualification section" id="qualification">
    <div class="qualification__container container grid">
        <div class="education">
            <h3 class="qualification__title">
                <i class="uil uil-graduation-cap"></i>Education
            </h3>
            <div class="timeline">
                <!-- Timeline items -->
            </div>
        </div>
        <div class="experience">
            <!-- Similar structure -->
        </div>
    </div>
</section>
```

**Timeline Component** (`.timeline__item`):
```html
<div class="timeline__item">
    <div class="circle__dot"></div>
    <h3 class="timeline__title">Institution Name</h3>
    <p class="timeline__text">Degree/Position</p>
    <span class="timeline__date">
        <i class="uil uil-schedule"></i> Date Range
    </span>
</div>
```

**CSS Implementation:**
- Vertical line via `::before` pseudo-element
- Circle dot with hover effect (background color change)
- Left padding creates space for timeline elements

**Experience Modal** (Lines 309-338):
```html
<span class="experience__button">View Responsibilities</span>
<div class="experience__modal">
    <div class="experience__modal-content">
        <i class="uil uil-times experience__modal-close"></i>
        <h3 class="experience__modal-title">Key Responsibilities</h3>
        <div class="experience__modal-project">
            <!-- Project details -->
        </div>
    </div>
</div>
```

**Modal Features:**
- Fixed overlay with semi-transparent background
- Activated via `.active-modal` class
- Contains project cards with technology tags
- Scrollable content area (`max-height: 85vh`, `overflow-y: auto`)

---

### Section: Skills (Lines 345-624)

Tabbed interface for skill categories.

```html
<section class="skills section" id="skills">
    <div class="skills__container container grid">
        <div class="skills__tabs">
            <!-- Tab headers -->
        </div>
        <div class="skills__content">
            <!-- Tab content groups -->
        </div>
    </div>
</section>
```

**Tab Header Structure:**
```html
<div class="skills__header skills__active" data-target="#languages">
    <i class="uil uil-brackets-curly skills__icon"></i>
    <div>
        <h1 class="skills__title">Programming Languages</h1>
        <span class="skills__subtitle">Core Languages</span>
    </div>
    <i class="uil uil-angle-down skills__arrow"></i>
</div>
```

**Tab Categories:**
| ID | Title | Subtitle |
|----|-------|----------|
| `#languages` | Programming Languages | Core Languages |
| `#research` | Specialized Research Areas | AI & Data Science |
| `#backend` | Database & Cloud | Backend Technologies |
| `#frameworks` | Frameworks & Technologies | Development Tools |

**Skill Bar Structure:**
```html
<div class="skills__data">
    <div class="skills__titles">
        <h3 class="skills__name">Python</h3>
        <span class="skills__number">90%</span>
    </div>
    <div class="skills__bar">
        <span class="skills__percentage" style="width: 90%"></span>
    </div>
</div>
```

**CSS Progress Bar:**
- `.skills__bar`: Background track (5px height)
- `.skills__percentage`: Colored fill with inline width

---

### Section: Problem Solving (Lines 626-710)

Two-column grid showcasing competitive programming profiles.

```html
<section class="problemsolving section" id="problemsolving">
    <div class="problemsolving__container container grid">
        <div class="problemsolving__card">
            <!-- LeetCode card -->
        </div>
        <div class="problemsolving__card">
            <!-- Codeforces card -->
        </div>
    </div>
</section>
```

**Card Structure:**
```html
<div class="problemsolving__card">
    <div class="problemsolving__header">
        <i class="uil uil-brackets-curly problemsolving__icon"></i>
        <div class="problemsolving__badge">
            <span class="problemsolving__platform">LeetCode</span>
        </div>
    </div>
    <div class="problemsolving__content">
        <h3 class="problemsolving__username">@nilumorshed</h3>
        <div class="problemsolving__stats">...</div>
        <div class="problemsolving__specialization">
            <h4>Specializations:</h4>
            <div class="problemsolving__tags">
                <span class="problemsolving__tag">Array</span>
                <!-- More tags -->
            </div>
        </div>
        <a href="..." class="problemsolving__link">View Profile</a>
    </div>
</div>
```

**Special Styling:**
- `.problemsolving__badge.codeforces`: Blue background (`#1f8acb`)
- Hover effect: Border color change and translateY

---

### Section: Work/Projects (Lines 712-993)

Portfolio section with filterable project cards.

```html
<section class="work section" id="work">
    <div class="work__filters">
        <span class="work__item active-work" data-filter="all">All</span>
        <span class="work__item" data-filter=".nlp">NLP</span>
        <span class="work__item" data-filter=".cv">Computer Vision</span>
        <span class="work__item" data-filter=".ml">Predictive ML</span>
    </div>
    <div class="work__container container grid">
        <!-- Project cards -->
    </div>
</section>
```

**Filter Mechanism:**
- Uses MixItUp library
- `data-filter` attribute specifies filter class
- Cards have classes like `mix nlp`, `mix cv`, `mix ml`

**Project Card Structure:**
```html
<div class="work__card mix nlp">
    <img src="..." class="work__img" loading="lazy" />
    <h3 class="work__title">Project Name</h3>
    <span class="work__button">
        Details <i class="uil uil-arrow-right work__button-icon"></i>
    </span>
    <div class="portfolio__item-details">
        <!-- Hidden details for popup -->
        <h3 class="details__title">Full Title</h3>
        <p class="details__description">Description</p>
        <ul class="details__info">
            <li>Date - <span>...</span></li>
            <li>Technologies - <span>...</span></li>
            <li>Category - <span>...</span></li>
            <li>View - <a href="..." class="details__link">GitHub</a></li>
        </ul>
    </div>
</div>
```

**Portfolio Popup** (Lines 996-1040):
```html
<div class="portfolio__popup">
    <div class="portfolio__popup-inner">
        <div class="portfolio__popup-content grid">
            <span class="portfolio__popup-close">...</span>
            <div class="pp__thumbnail">
                <img src="..." class="portfolio__popup-img" />
            </div>
            <div class="portfolio__popup-info">
                <!-- Title, description, info -->
            </div>
        </div>
    </div>
</div>
```

**Popup Functionality:**
- Activated via `.open` class
- Content populated dynamically via JavaScript
- Two-column grid (image left, details right)

---

### Section: Services (Lines 1042-1243)

Four-column grid of service offerings with modals.

```html
<div class="services__content">
    <div>
        <i class="uil uil-window services__icon"></i>
        <h3 class="services__title">Frontend<br />Development</h3>
        <span class="services__button">View More</span>
        <div class="services__modal">
            <div class="services__modal-content">
                <i class="uil uil-times services__modal-close"></i>
                <h3 class="services__modal-title">...</h3>
                <p class="services__modal-description">...</p>
                <ul class="services__modal-serevices grid">
                    <li class="services__modal-service">
                        <i class="uil uil-check-circle services__modal-icon"></i>
                        <p class="services__modal-info">Service item</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

**Service Categories:**
1. Frontend Development
2. Backend Development
3. Cloud & Deployment
4. AI/ML Engineering

---

### Section: Publications (Lines 1245-1265)

Research publication cards.

```html
<div class="publication__card">
    <div class="publication__header">
        <i class="uil uil-file-alt publication__icon"></i>
        <span class="publication__year">2025</span>
    </div>
    <h3 class="publication__title">Paper Title</h3>
    <p class="publication__authors">Author Names</p>
    <p class="publication__venue">Conference/Journal Name</p>
    <a href="..." class="publication__link">View on IEEE Xplore</a>
</div>
```

**Card Features:**
- Year badge with skin-color background
- Hover effect: border color and translateY
- External link icon

---

### Section: Certifications (Lines 1267-1550)

Grouped certification lists with lightbox functionality.

**Category Structure:**
```html
<div class="certifications__category">
    <h3 class="certifications__category-title">
        <i class="uil uil-award certifications__category-icon"></i>
        Technical Certifications
    </h3>
    <div class="certifications__list">
        <!-- Certification items -->
    </div>
</div>
```

**Categories:**
1. Technical Certifications
2. Academic & Research Recognition
3. Competition & Community Participation

**Certification Item (Non-clickable):**
```html
<div class="certification__item">
    <div class="certification__icon-wrapper">
        <i class="uil uil-check-circle certification__icon"></i>
    </div>
    <div class="certification__content">
        <h4 class="certification__title">Certificate Name</h4>
        <p class="certification__issuer">Issuer</p>
        <span class="certification__date">Date</span>
        <a href="..." class="certification__verify-link">Verify Credential</a>
    </div>
</div>
```

**Clickable Certificate Item:**
```html
<div class="certification__item certification__item--clickable"
     data-certificate="assets/certificates/file.pdf"
     data-title="Certificate Title">
    <!-- Same structure but with view button instead of verify link -->
    <span class="certification__view-btn">
        <i class="uil uil-image"></i> View Certificate
    </span>
</div>
```

**Data Attributes:**
- `data-certificate`: Path to certificate file (supports JPG and PDF)
- `data-title`: Title displayed in lightbox

---

### Section: Contact (Lines 1552-1590)

Three-column card layout for contact information.

```html
<div class="contact__info">
    <div class="contact__card">
        <i class="uil uil-envelope-edit contact__card-icon"></i>
        <h3 class="contact__card-title">Email</h3>
        <span class="contact__card-data">email@example.com</span>
        <span class="contact__button">Write Me</span>
    </div>
    <!-- More cards -->
</div>
```

**Contact Cards:**
| Icon | Title | Type |
|------|-------|------|
| `uil-envelope-edit` | Email | Static text |
| `uil-graduation-cap` | Google Scholar | External link |
| `uil-linkedin` | LinkedIn | External link |

---

### Footer (Lines 1592-1639)

Three-column footer layout.

```html
<footer class="footer">
    <div class="footer__bg">
        <div class="footer__container container grid">
            <div>
                <h1 class="footer__title">Nihal Morshed</h1>
                <span class="footer__subtitle">AI/ML Engineer...</span>
            </div>
            <ul class="footer__links">
                <li><a href="#services">Services</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="footer__socials">
                <a href="..." class="footer__social"><i class="uil uil-linkedin"></i></a>
                <a href="..." class="footer__social"><i class="uil uil-github"></i></a>
                <a href="..." class="footer__social"><i class="uil uil-graduation-cap"></i></a>
            </div>
        </div>
        <p class="footer__copy">&copy; Morshed Nihal. All rights reserved</p>
    </div>
</footer>
```

---

### Scroll Up Button (Lines 1642-1645)

```html
<a href="#home" class="scrollup" id="scroll-up">
    <i class="uil uil-arrow-up scrollup__icon"></i>
</a>
```

- Fixed position (bottom-right)
- Hidden by default (`bottom: -30%`)
- Shown when scrolling past 560px (`.show-scroll` class)

---

### Certificate Lightbox (Lines 1647-1655)

```html
<div class="certificate__lightbox" id="certificate-lightbox">
    <div class="certificate__lightbox-content">
        <i class="uil uil-times certificate__lightbox-close" id="certificate-close"></i>
        <img src="" class="certificate__lightbox-img" id="certificate-img">
        <iframe src="" class="certificate__lightbox-pdf" id="certificate-pdf" style="display: none;"></iframe>
        <h3 class="certificate__lightbox-title" id="certificate-title"></h3>
    </div>
</div>
```

**Features:**
- Supports both images (`<img>`) and PDFs (`<iframe>`)
- JavaScript detects file extension and shows appropriate element
- Closes via: close button, clicking outside, or Escape key

---

### Script Initialization (Lines 1656-1740)

**Script Loading Order:**
1. MixItUp (local)
2. Swiper (local)
3. EmailJS (CDN)
4. AOS (CDN) + initialization
5. Particles.js (CDN) + initialization
6. main.js (local)

**AOS Configuration:**
```javascript
AOS.init({
    duration: 1000,        // Animation duration (ms)
    easing: 'ease-in-out', // Easing function
    once: true,            // Animate only once
    mirror: false          // No animation on scroll up
});
```

**Particles.js Configuration:**
```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: particleColor },  // Theme-dependent
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
```

**Theme-Dependent Colors:**
- Dark theme: `#d61355` (skin-color)
- Light theme: `#1a1a2e` (dark color)

---

### style.css

**Location:** `/assets/css/style.css`
**Lines:** ~2313
**Purpose:** Complete styling for all components

#### CSS Variables (Lines 5-47)

```css
:root {
    /*===== Colors =====*/
    --hue-color: 242;

    /* Dark Theme (Default) */
    --skin-color: hsl(342, 92%, 46%);           /* #d61355 - Pink/Magenta */
    --title-color: hsl(var(--hue-color), 8%, 95%);  /* Near white */
    --text-color: hsl(var(--hue-color), 8%, 85%);   /* Light gray */
    --body-color: hsl(var(--hue-color), 19%, 5%);   /* Near black */
    --box-color: hsl(var(--hue-color), 14%, 10%);   /* Dark gray */
    --scroll-bar-color: hsl(var(--hue-color), 12%, 38%);
    --scroll-thumb-color: hsl(var(--hue-color), 12%, 26%);

    /*===== Typography =====*/
    --body-font: 'Poppins', sans-serif;
    --biggest-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;

    /*===== Font Weight =====*/
    --font-medium: 500;
    --font-bold: 600;

    /*===== Margins =====*/
    --mb-0-25: .25rem;
    --mb-0-5: .5rem;
    --mb-0-75: .75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /*===== Z-Index =====*/
    --z-fixed: 10;
    --z-modal: 100;
}
```

#### Light Theme Override (Lines 49-57)

```css
body.light-theme {
    --title-color: hsl(var(--hue-color), 8%, 15%);  /* Near black */
    --text-color: hsl(var(--hue-color), 8%, 35%);   /* Dark gray */
    --body-color: hsl(var(--hue-color), 19%, 95%);  /* Near white */
    --box-color: hsl(var(--hue-color), 14%, 90%);   /* Light gray */
    --scroll-bar-color: hsl(var(--hue-color), 12%, 70%);
    --scroll-thumb-color: hsl(var(--hue-color), 12%, 55%);
}
```

#### CSS Reset (Lines 210-260)

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;  /* Smooth anchor scrolling */
}

body, button, input {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
}

/* ... more resets ... */
```

#### Layout Classes (Lines 261-272)

```css
.container {
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
}

.grid {
    display: grid;
    gap: 1.5rem;
}
```

#### Section Styling (Lines 275-293)

```css
.section {
    padding: 6.5rem 0 2rem;
}

.section__title {
    text-align: center;
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-3);
}

.section__title::before {
    content: attr(data-heading);  /* Displays data-heading attribute */
    display: block;
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--skin-color);
}
```

---

### main.js

**Location:** `/assets/js/main.js`
**Lines:** ~433
**Purpose:** All interactive functionality

#### Service Worker Registration (Lines 1-12)

```javascript
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed:', err);
            });
    });
}
```

**Purpose:** Registers service worker for PWA functionality

#### Preloader (Lines 14-23)

```javascript
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    }
});
```

**Behavior:**
- Waits for `load` event
- Adds `hidden` class after 500ms delay
- CSS transition fades out preloader

#### Theme Toggle (Lines 25-47)

```javascript
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
}

// Toggle on click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');

        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}
```

**Features:**
- Persists theme preference in `localStorage`
- Toggles `light-theme` class on body
- Default is dark theme

#### Sidebar Navigation (Lines 49-70)

```javascript
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show sidebar
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');
    });
}

// Hide sidebar
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    });
}
```

**Mobile Behavior:**
- Toggle button adds `show-sidebar` class
- Close button removes class
- CSS transforms handle animation (`translateX`)

#### Skills Tabs (Lines 73-91)

```javascript
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        // Remove active from all
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
```

**Mechanism:**
- `data-target` attribute contains selector (e.g., `#languages`)
- `data-content` attribute marks content areas
- `skills__active` class controls visibility

#### MixItUp Portfolio Filter (Lines 94-112)

```javascript
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 400
    }
});

// Active filter styling
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));
```

**Configuration:**
- Targets `.work__card` elements
- 400ms animation duration
- Filter buttons get `active-work` class

#### Portfolio Popup (Lines 114-132)

```javascript
document.addEventListener('click', e => {
    if (e.target.classList.contains('work__button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp__thumbnail img').src =
        portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML =
        portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML =
        portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}

function togglePortfolioPopup() {
    document.querySelector('.portfolio__popup').classList.toggle('open');
}

document.querySelector('.portfolio__popup-close')
    .addEventListener('click', togglePortfolioPopup);
```

**Data Flow:**
1. Click "Details" button on card
2. Extract image, title, and hidden details from card
3. Populate popup elements
4. Toggle `open` class on popup

#### Services Modal (Lines 133-154)

```javascript
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

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
```

**Index-Based Approach:**
- Each button opens modal at same index
- All modals closed via close button

#### Swiper Testimonial (Lines 157-175)

```javascript
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
```

**Note:** Testimonial section exists in CSS but may not be currently used in HTML.

#### Input Animation (Lines 177-196)

```javascript
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
```

**Floating Label Effect:**
- `focus` class added on input focus
- Label moves up and shrinks (CSS handles animation)
- Stays up if input has value

#### Scroll Active Link (Lines 199-221)

```javascript
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionID = current.getAttribute("id");

        const navLink = document.querySelector(
            `.nav__menu a[href="#${sectionID}"]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add("active-link");
        } else {
            navLink?.classList.remove("active-link");
        }
    });
}
```

**Algorithm:**
1. Get all sections with `id` attribute
2. On scroll, check which section is in viewport
3. Add `active-link` to corresponding nav item

#### Experience Modal (Lines 264-288)

```javascript
const experienceBtn = document.querySelector('.experience__button');
const experienceModal = document.querySelector('.experience__modal');
const experienceClose = document.querySelector('.experience__modal-close');

if (experienceBtn) {
    experienceBtn.addEventListener('click', () => {
        experienceModal.classList.add('active-modal');
    });
}

if (experienceClose) {
    experienceClose.addEventListener('click', () => {
        experienceModal.classList.remove('active-modal');
    });
}

// Close on outside click
if (experienceModal) {
    experienceModal.addEventListener('click', (e) => {
        if (e.target === experienceModal) {
            experienceModal.classList.remove('active-modal');
        }
    });
}
```

#### Scroll Progress (Lines 290-303)

```javascript
const scrollProgress = document.getElementById('scroll-progress');

function updateScrollProgress() {
    if (!scrollProgress) return;

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight -
                         document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    scrollProgress.style.width = progress + '%';
}

window.addEventListener('scroll', updateScrollProgress);
```

**Calculation:**
- `scrollTop`: Current scroll position
- `scrollHeight - clientHeight`: Total scrollable distance
- `progress`: Percentage (0-100)

#### Scroll Up Button (Lines 305-318)

```javascript
const scrollUp = document.getElementById('scroll-up');

function showScrollUp() {
    if (!scrollUp) return;

    if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', showScrollUp);
```

#### Typing Animation (Lines 320-361)

```javascript
const typedTextElement = document.querySelector('.typed-text');
const textArray = [
    'AI/ML Engineer',
    'Full Stack Developer',
    'NLP Researcher',
    'Deep Learning Enthusiast',
    'Problem Solver'
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeText() {
    if (!typedTextElement) return;

    const currentText = textArray[textArrayIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
        timeout = pauseTime;  // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;  // Next word
    }

    setTimeout(typeText, timeout);
}

// Start on DOM load
document.addEventListener('DOMContentLoaded', () => {
    if (typedTextElement) {
        setTimeout(typeText, 500);
    }
});
```

**Animation Flow:**
1. Type characters one by one (100ms interval)
2. Pause at complete word (2000ms)
3. Delete characters (50ms interval)
4. Move to next word in array
5. Loop infinitely

**To Modify Text Array:**
Edit line 322-328 in `main.js`:
```javascript
const textArray = ['Your', 'Custom', 'Titles', 'Here'];
```

#### Certificate Lightbox (Lines 363-430)

```javascript
const certificateLightbox = document.getElementById('certificate-lightbox');
const certificateImg = document.getElementById('certificate-img');
const certificatePdf = document.getElementById('certificate-pdf');
const certificateTitle = document.getElementById('certificate-title');
const certificateClose = document.getElementById('certificate-close');

const clickableCertificates = document.querySelectorAll('.certification__item--clickable');

clickableCertificates.forEach(cert => {
    cert.addEventListener('click', () => {
        const filePath = cert.dataset.certificate;
        const title = cert.dataset.title;

        if (filePath && certificateLightbox) {
            // Detect PDF files
            const isPdf = filePath.toLowerCase().endsWith('.pdf');

            if (isPdf) {
                certificateImg.style.display = 'none';
                certificatePdf.style.display = 'block';
                certificatePdf.src = filePath;
            } else {
                certificatePdf.style.display = 'none';
                certificateImg.style.display = 'block';
                certificateImg.src = filePath;
            }

            certificateTitle.textContent = title || '';
            certificateLightbox.classList.add('active');
        }
    });
});

// Close handlers
if (certificateClose) {
    certificateClose.addEventListener('click', () => {
        certificateLightbox.classList.remove('active');
        certificateImg.src = '';
        certificatePdf.src = '';
    });
}

if (certificateLightbox) {
    certificateLightbox.addEventListener('click', (e) => {
        if (e.target === certificateLightbox) {
            certificateLightbox.classList.remove('active');
            certificateImg.src = '';
            certificatePdf.src = '';
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certificateLightbox?.classList.contains('active')) {
        certificateLightbox.classList.remove('active');
        certificateImg.src = '';
        certificatePdf.src = '';
    }
});
```

**Supported Formats:**
- Images: JPG, PNG, GIF, WebP, etc.
- Documents: PDF (displayed in iframe)

---

### manifest.json

**Location:** `/manifest.json`
**Purpose:** PWA configuration

```json
{
    "name": "Nihal Morshed - Portfolio",
    "short_name": "NM Portfolio",
    "description": "AI/ML Engineer & Full-Stack Developer Portfolio",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0a0a0f",
    "theme_color": "#d61355",
    "orientation": "portrait-primary",
    "icons": [
        {
            "src": "assets/img/Portfolio.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
        },
        {
            "src": "assets/img/Portfolio.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ]
}
```

**Properties:**
| Property | Value | Description |
|----------|-------|-------------|
| `name` | Full app name | Shown in app install prompt |
| `short_name` | Abbreviated name | Shown on home screen |
| `display` | `standalone` | Runs without browser UI |
| `background_color` | `#0a0a0f` | Splash screen background |
| `theme_color` | `#d61355` | Address bar color |
| `orientation` | `portrait-primary` | Locks to portrait |

---

### sw.js (Service Worker)

**Location:** `/sw.js`
**Purpose:** Offline caching for PWA

```javascript
const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/js/main.js',
    '/assets/img/Portfolio.png',
    '/assets/img/about-img.png',
    '/assets/img/background.png'
];

// Install: Cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch: Serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

// Activate: Clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
```

**To Add Files to Cache:**
Edit `urlsToCache` array (line 2-10)

**To Update Cache:**
Increment version in `CACHE_NAME` (e.g., `portfolio-cache-v2`)

---

### static.yml (GitHub Actions)

**Location:** `/.github/workflows/static.yml`
**Purpose:** Automated deployment to GitHub Pages

```yaml
name: Deploy static content to Pages

on:
    push:
        branches: ["main"]
    workflow_dispatch:

permissions:
    contents: read
    pages: write
    id-token: write

concurrency:
    group: "pages"
    cancel-in-progress: false

jobs:
    deploy:
        environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/configure-pages@v5
            - uses: actions/upload-pages-artifact@v3
              with:
                  path: '.'
            - uses: actions/deploy-pages@v4
              id: deployment
```

**Triggers:**
- Push to `main` branch
- Manual trigger via Actions tab

---

## Animations & Effects

### 1. Preloader Spinner
**File:** `style.css` (Lines 143-154)

```css
.preloader__spinner {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

### 2. Cursor Blink
**File:** `style.css` (Lines 514-517)

```css
.cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
```

### 3. Button Hover Scale Effect
**File:** `style.css` (Lines 566-583)

```css
.button::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #343a40;
    transform: scale(0);
    transition: .4s;
    z-index: -1;
}

.button:hover::after {
    transform: scale(1);
}
```

### 4. Timeline Dot Hover
**File:** `style.css` (Lines 684-686)

```css
.timeline__item:hover .circle__dot {
    background-color: var(--body-color);
}
```

### 5. Card Hover Effects
**File:** `style.css` (Various locations)

```css
/* Generic hover pattern used across cards */
.card:hover {
    border-color: var(--skin-color);
    transform: translateY(-5px);
}
```

### 6. Arrow Icon Hover
**File:** `style.css` (Lines 1083-1090)

```css
.work__button:hover .work__button-icon {
    transform: translateX(.25rem);
}
```

### 7. AOS Scroll Animations
**Applied via HTML attributes:**
- `data-aos="fade-up"`: Fade in from below
- `data-aos-delay="200"`: 200ms delay

### 8. Particles.js Background
**File:** `index.html` (Lines 1682-1737)

Interactive particle network that responds to mouse hover and click.

---

## Responsive Design

### Breakpoints

| Breakpoint | Target Devices |
|------------|----------------|
| `> 1408px` | Large desktops |
| `1216px - 1408px` | Desktops |
| `1024px - 1216px` | Small desktops/Large tablets |
| `768px - 1024px` | Tablets |
| `576px - 768px` | Large phones |
| `350px - 576px` | Small phones |
| `< 350px` | Very small devices |

### Key Responsive Changes

**At 1024px and below:**
- Sidebar transforms to mobile menu
- Main content loses left margin
- About section becomes single column
- Two-column grids become single column

**At 768px and below:**
- Qualification section becomes single column
- Skills section becomes single column
- Services grid: 2 columns
- Footer: 2 columns

**At 576px and below:**
- Home background image removed
- Profile image shown
- Social links move to right side (vertical)
- Info items hidden
- Nav toggle moves to left
- All grids become single column

**At 350px and below:**
- Further padding/margin reductions
- Smaller font sizes
- Certification items stack vertically

---

## PWA Features

### Installation
The site can be installed as a standalone app on:
- Android (Chrome, Edge)
- iOS (Safari - Add to Home Screen)
- Desktop (Chrome, Edge)

### Offline Support
Basic offline functionality via service worker caching.

### To Test PWA:
1. Open Chrome DevTools
2. Go to Application > Service Workers
3. Check "Offline"
4. Reload page - should still display cached content

---

## SEO & Accessibility

### SEO Features
- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Descriptive alt text on images
- Clean URL structure

### Accessibility Features
- Skip to content link
- ARIA labels on buttons
- Focus indicators (`:focus` styles)
- Color contrast (dark/light themes)
- Keyboard navigation support
- Screen reader friendly structure

---

## Customization Guide

### Change Primary Color (skin-color)

**File:** `style.css` (Line 10)
```css
--skin-color: hsl(342, 92%, 46%);  /* Change HSL values */
```

**Also update:**
- `manifest.json` (Line 8): `"theme_color"`
- `index.html` (Line 49): `<meta name="theme-color">`
- Particles.js config in `index.html`: `particleColor` variable

### Add New Section

1. **HTML:** Add section in `index.html`:
```html
<section class="newsection section" id="newsection">
    <h2 data-heading="Subheading" class="section__title">Title</h2>
    <div class="newsection__container container">
        <!-- Content -->
    </div>
</section>
```

2. **CSS:** Add styles in `style.css`

3. **Navigation:** Add link in sidebar:
```html
<li class="nav__item">
    <a href="#newsection" class="nav__link">New Section</a>
</li>
```

### Add New Project

In `index.html`, add to `.work__container`:
```html
<div class="work__card mix category">
    <img src="assets/img/project.png" class="work__img" loading="lazy" />
    <h3 class="work__title">Project Title</h3>
    <span class="work__button">Details <i class="uil uil-arrow-right"></i></span>
    <div class="portfolio__item-details">
        <h3 class="details__title">Full Project Title</h3>
        <p class="details__description">Description here</p>
        <ul class="details__info">
            <li>Date - <span>2024</span></li>
            <li>Technologies - <span>Tech stack</span></li>
            <li>Category - <span>Category name</span></li>
            <li>View - <a href="URL" class="details__link">GitHub</a></li>
        </ul>
    </div>
</div>
```

Replace `category` with: `nlp`, `cv`, or `ml`

### Add New Certificate

In `index.html`, add to appropriate `.certifications__list`:
```html
<div class="certification__item certification__item--clickable"
     data-certificate="assets/certificates/filename.jpg"
     data-title="Certificate Title">
    <div class="certification__icon-wrapper">
        <i class="uil uil-star certification__icon"></i>
    </div>
    <div class="certification__content">
        <h4 class="certification__title">Certificate Name</h4>
        <p class="certification__issuer">Issuing Organization</p>
        <span class="certification__date">Date</span>
        <span class="certification__view-btn">
            <i class="uil uil-image"></i> View Certificate
        </span>
    </div>
</div>
```

### Modify Typing Text

**File:** `main.js` (Lines 322-328)
```javascript
const textArray = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3'
];
```

### Update Personal Information

Search and replace in `index.html`:
- Name: "Nihal Morshed"
- Email: "nihalmorshed2000@gmail.com"
- LinkedIn: URL and username
- GitHub: URL and username

---

## Deployment

### GitHub Pages (Current Setup)

1. Push changes to `main` branch
2. GitHub Actions automatically deploys
3. Site available at `https://username.github.io/`

### Manual Deployment

If not using GitHub Actions:
1. Go to repository Settings > Pages
2. Select branch: `main`
3. Select folder: `/ (root)`
4. Save

### Custom Domain

1. Add `CNAME` file with domain name
2. Configure DNS at domain registrar:
   - A records pointing to GitHub IPs
   - CNAME record for www subdomain

---

## Troubleshooting

### Service Worker Not Updating

**Solution:** Increment cache version in `sw.js`:
```javascript
const CACHE_NAME = 'portfolio-cache-v2';  // Change version
```

### Theme Not Persisting

**Check:** Browser localStorage is not blocked
**Clear:** Run in console: `localStorage.removeItem('theme')`

### Particles Not Showing

**Check:**
1. Particles.js CDN is loading
2. `#particles-js` element exists
3. No JavaScript errors in console

### Modal Not Opening

**Check:**
1. JavaScript event listeners attached
2. Modal element has correct class
3. No CSS override hiding modal

### Filter Not Working

**Check:**
1. MixItUp library loaded
2. Cards have `mix` class
3. Filter values match card classes

### Images Not Loading

**Check:**
1. File paths are correct
2. File extensions match exactly
3. Files exist in `assets/img/` folder

### PDF Not Displaying in Lightbox

**Check:**
1. PDF file exists at specified path
2. Path ends with `.pdf` (case-insensitive)
3. Browser supports PDF in iframe

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Initial | Base portfolio implementation |
| 1.1 | - | Added particle animation |
| 1.2 | - | Added certificate lightbox modal |
| 1.3 | - | Added PDF support in lightbox |

---

## License

All rights reserved. This portfolio website and its contents are the intellectual property of Nihal Morshed.

---

## Contact

- **Email:** nihalmorshed2000@gmail.com
- **LinkedIn:** [nihalmorshed2000](https://www.linkedin.com/in/nihalmorshed2000/)
- **GitHub:** [nihalmorshed](https://github.com/nihalmorshed)
- **Google Scholar:** [Publications](https://scholar.google.com/citations?user=1Yzue-8AAAAJ&hl=en)
