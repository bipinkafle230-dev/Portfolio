document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => preloader.classList.add('loaded'), 250);
        });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const cursor = document.querySelector('.cursor');
    const interactive = document.querySelectorAll('a, button, input, textarea');

    if (cursor && window.innerWidth > 768) {
        document.addEventListener('mousemove', (event) => {
            cursor.style.left = event.clientX + 'px';
            cursor.style.top = event.clientY + 'px';
        });

        interactive.forEach((element) => {
            element.addEventListener('mouseenter', () => cursor.classList.add('grow'));
            element.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((el) => revealObserver.observe(el));

    const filterContainer = document.querySelector('.filter-buttons');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterContainer) {
        filterContainer.addEventListener('click', (event) => {
            const button = event.target.closest('.filter-btn');
            if (!button) return;

            filterContainer.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;

            projectCards.forEach((card) => {
                const category = card.dataset.category || 'all';
                const shouldShow = filter === 'all' || category === filter;
                card.classList.toggle('hide', !shouldShow);
            });
        });
    }
});
