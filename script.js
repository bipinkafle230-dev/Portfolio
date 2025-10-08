document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('loaded');
    });

    // --- CUSTOM CURSOR ---
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a, button');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('grow');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
        });
    });

    // --- ON-SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});

// --- ADD THIS TO YOUR EXISTING script.js FILE ---
// (inside the DOMContentLoaded listener)

document.addEventListener('DOMContentLoaded', () => {

    // --- (Existing preloader and cursor code here) ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('loaded');
    });

    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a, button');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('grow');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('grow');
        });
    });

    // --- (Existing scroll reveal code here) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- NEW: WORK SECTION FILTER LOGIC ---
    const filterContainer = document.querySelector('.filter-buttons');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                // Remove active class from all buttons
                filterContainer.querySelector('.active').classList.remove('active');
                // Add active class to clicked button
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const cardCategories = card.dataset.category.split(' ');
                    
                    if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            }
        });
    }

}); // End of DOMContentLoaded