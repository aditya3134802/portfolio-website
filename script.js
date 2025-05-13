// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    let menuOpen = false;
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                navLinks.classList.add('show');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('show');
                menuOpen = false;
            }
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (menuOpen) {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('show');
                menuOpen = false;
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Active navigation on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real scenario, you would send this data to a server
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // For demo purposes, just display a success message
            alert('Thank you for your message! In a real website, this would be sent to a server.');
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Add additional CSS for menu button animation
    const style = document.createElement('style');
    style.innerHTML = `
        .menu-btn__burger {
            width: 25px;
            height: 3px;
            background: var(--secondary-color);
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,.2);
            transition: all .5s ease-in-out;
        }
        
        .menu-btn__burger::before,
        .menu-btn__burger::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 3px;
            background: var(--secondary-color);
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,.2);
            transition: all .5s ease-in-out;
        }
        
        .menu-btn__burger::before {
            transform: translateY(-8px);
        }
        
        .menu-btn__burger::after {
            transform: translateY(8px);
        }
        
        /* ANIMATION */
        .menu-btn.open .menu-btn__burger {
            transform: translateX(-50px);
            background: transparent;
            box-shadow: none;
        }
        
        .menu-btn.open .menu-btn__burger::before {
            transform: rotate(45deg) translate(35px, -35px);
        }
        
        .menu-btn.open .menu-btn__burger::after {
            transform: rotate(-45deg) translate(35px, 35px);
        }
        
        .nav-links.show {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            background: white;
            padding: 20px;
            box-shadow: 0 10px 15px rgba(0,0,0,.1);
            z-index: 999;
        }
        
        .nav-links.show li {
            margin-bottom: 15px;
        }
        
        .nav-links a.active {
            color: var(--primary-color);
        }
        
        .nav-links a.active::after {
            width: 100%;
        }
        
        header.sticky {
            padding: 10px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,.1);
        }
    `;
    
    document.head.appendChild(style);
    
    // Typing animation for hero section
    const heroTitle = document.querySelector('.hero-text h1 span');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});