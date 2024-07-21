// document.addEventListener('DOMContentLoaded', function () {
//     const scrollContainer = document.querySelector('.scroll-container');

//     scrollContainer.addEventListener('wheel', (event) => {
//         event.preventDefault();
//         scrollContainer.scrollLeft += event.deltaY;
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const scrollContainer = document.querySelector('.scroll-container');
//     const sections = document.querySelectorAll('.scroll-section');
//     let isScrolling;

//     scrollContainer.addEventListener('wheel', (event) => {
//         clearTimeout(isScrolling);
//         isScrolling = setTimeout(() => {
//             let scrollLeft = scrollContainer.scrollLeft;
//             let sectionWidth = sections[0].offsetWidth;

//             let targetIndex = Math.round(scrollLeft / sectionWidth);
//             scrollContainer.scrollTo({
//                 left: targetIndex * sectionWidth,
//                 behavior: 'smooth'
//             });
//         }, 100);
//     });
// });

// document.addEventListener('wheel', (event) => {
//     const container = document.querySelector('.container');
//     const delta = Math.sign(event.deltaY);
//     if (delta > 0) {
//         container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
//     } else {
//         container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.container');
//     const leftArrow = document.getElementById('left-arrow');
//     const rightArrow = document.getElementById('right-arrow');

//     let currentIndex = 0;
//     const sections = document.querySelectorAll('.section');

//     const scrollToSection = (index) => {
//         if (index >= 0 && index < sections.length) {
//             container.scrollTo({
//                 left: sections[index].offsetLeft,
//                 behavior: 'smooth'
//             });
//             currentIndex = index;
//         }
//     };

//     leftArrow.addEventListener('click', () => {
//         scrollToSection(currentIndex - 1);
//     });

//     rightArrow.addEventListener('click', () => {
//         scrollToSection(currentIndex + 1);
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const scrollContainer = document.getElementById('scroll-container');
//     const leftArrow = document.getElementById('left-arrow');
//     const rightArrow = document.getElementById('right-arrow');

//     leftArrow.addEventListener('click', () => {
//         scrollContainer.scrollBy({
//             left: -window.innerWidth,
//             behavior: 'smooth'
//         });
//     });

//     rightArrow.addEventListener('click', () => {
//         scrollContainer.scrollBy({
//             left: window.innerWidth,
//             behavior: 'smooth'
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scroll-container');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    
    // Scroll to the left
    leftArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -window.innerWidth,
            behavior: 'smooth'
        });
    });

    // Scroll to the right
    rightArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: window.innerWidth,
            behavior: 'smooth'
        });
    });

    // Intersection Observer setup
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null, // viewport
        threshold: 0.5 // when 50% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add dark mode class when the section is in view
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
            } else {
                // Remove dark mode class when the section is out of view
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initial background color
    document.body.classList.add('light-mode');
});
