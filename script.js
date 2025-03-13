document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality for buyer/seller benefits
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            // Show the corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const body = document.body;
    
    // Create mobile menu and overlay elements
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    // Clone navigation elements for mobile menu
    const navLinks = document.querySelector('.nav-links').cloneNode(true);
    const ctaButtons = document.querySelector('.cta-buttons').cloneNode(true);
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-menu-close';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    
    // Append elements to mobile menu
    mobileMenu.appendChild(closeBtn);
    mobileMenu.appendChild(navLinks);
    mobileMenu.appendChild(ctaButtons);
    
    // Append mobile menu and overlay to body
    body.appendChild(mobileMenu);
    body.appendChild(overlay);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
    });
    
    // Close mobile menu
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }
    
    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add animation on scroll
    const animatedElements = document.querySelectorAll('.feature-card, .project-card, .step, .solana-feature, .benefit-card');
    
    function checkScroll() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight * 0.8) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animated elements
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Add parallax effect on hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 600) { // Only apply effect when hero is visible
                heroSection.style.backgroundPosition = `center ${scrollPosition * 0.05}px`;
            }
        });
    }
    
    // Check scroll position on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
});
