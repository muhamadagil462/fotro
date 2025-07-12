document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggler untuk Responsivitas
    const navBurger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');

    navBurger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        navLinkItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        navBurger.classList.toggle('toggle');

        // Toggle body scroll lock (Optional: uncomment if you want to prevent scrolling when menu is open)
        // document.body.classList.toggle('no-scroll');
    });

    // Menutup Navbar saat link diklik (termasuk untuk nav-links di desktop jika ada)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Hanya tutup jika menu burger aktif (untuk mobile)
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                navBurger.classList.remove('toggle');
                navLinkItems.forEach(link => {
                    link.style.animation = ''; // Reset animation
                });
                // document.body.classList.remove('no-scroll'); // Unlock scroll
            }
        });
    });

    // Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animasi Scroll Reveal (Opsional: menggunakan Intersection Observer API untuk performa lebih baik)
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.15 // Persentase elemen yang terlihat untuk memicu animasi
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi pertama
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Pastikan kelas ini ditambahkan hanya sekali dan untuk elemen yang relevan
        if (!section.classList.contains('hidden-section')) {
            section.classList.add('hidden-section'); // Sembunyikan secara default
        }
        sectionObserver.observe(section);
    });

    // Animasi untuk hero section saat load
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image img');

    if (heroText) {
        heroText.style.animation = 'fadeInSlideUp 1.5s ease-out forwards';
    }
    if (heroImage) {
        heroImage.style.animation = 'zoomInBounce 1s ease-out forwards';
    }
});