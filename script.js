

let isWelcomeShown = false;


document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 The Wandering Bloom website loaded successfully');
    initializeWebsite();
});

function initializeWebsite() {
    showWelcomeMessage();
    initializeScrollEffects();
    initializeMobileMenu();
    initializeAnimations();
    console.log('✓ All website features initialized');
}

function showWelcomeMessage() {
    // Check if welcome has been shown in this session
    if (!isWelcomeShown) {
        setTimeout(function() {
            alert('🌸 Welcome to The Wandering Bloom!\n\nDiscover our exquisite collection of handcrafted floral arrangements for every special moment in your life.\n\n✨ Enjoy browsing our curated collections!');
            isWelcomeShown = true;
            console.log('✓ Welcome message displayed to user');
        }, 500);
    }
}

function shopNowClick() {
    console.log('🛍️ User clicked Shop Now button - Navigation triggered');
    alert('🌺 Redirecting to our Shop page...\n\nYou\'ll find our complete collection of beautiful floral arrangements organized by categories!');

    console.log('→ Navigation to shop page initiated');
}

function viewCategory(categoryName) {
    console.log(`👁️ User viewing category: ${categoryName}`);
    
    event.target.textContent = 'Loading...';
    event.target.style.transform = 'scale(0.95)';
    
    setTimeout(function() {
        event.target.textContent = 'View Collection';
        event.target.style.transform = 'scale(1)';
        
        console.log(`✓ ${categoryName} category viewed`);
    }, 300);
}

function viewTheme(themeName) {
    console.log(`🎨 User exploring theme: ${themeName}`);
    
    event.target.textContent = 'Loading...';
    event.target.style.transform = 'scale(0.95)';
    
    setTimeout(function() {
        event.target.textContent = 'Explore';
        event.target.style.transform = 'scale(1)';
        console.log(`✓ ${themeName} theme explored`);
    }, 300);
}

function handleSubscribe(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    console.log('📧 Newsletter subscription attempted');
    console.log(`   Email entered: ${email}`);
    alert('✉️ Thank you for subscribing!\n\nYou\'ll receive:\n• Exclusive offers and discounts\n• Floral care tips\n• Early access to new collections\n• Seasonal inspiration\n\nWelcome to The Wandering Bloom community! 🌸');
    emailInput.value = '';
    console.log('✓ Newsletter subscription confirmed');
    return false;
}

function initializeScrollEffects() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
  
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log('⬆️ User scrolled to top');
    });
    
    console.log('✓ Scroll effects initialized');
}

function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
            console.log('📱 Mobile menu toggled');
        });
    }
    
    console.log('✓ Mobile menu initialized');
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                console.log(`✓ Element animated: ${entry.target.className}`);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.occasion-card, .theme-card, .feature-item');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    console.log('✓ Scroll animations initialized');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log(`🔗 Smooth scroll to: ${this.getAttribute('href')}`);
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
    
        setTimeout(function() {
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '';
    }, 2000);

console.log('%c🌸 The Wandering Bloom 🌸', 'color: #6b8e6b; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to our console! We appreciate developers like you.', 'color: #666; font-size: 12px;');
console.log('%cFor inquiries: wandering_bloom@gmail.com', 'color: #999; font-size: 11px;');

window.addEventListener('error', function(e) {
    console.error('❌ An error occurred:', e.error);
});

window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
});
