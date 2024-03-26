// JavaScript Document
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
];
let currentIndex = 0;
let currentImgElement = null;

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    if (currentImgElement) {
        currentImgElement.classList.remove('active'); // Adjust to remove active class
    }
    setTimeout(() => {
        if (currentImgElement) {
            document.getElementById('slideshow').removeChild(currentImgElement);
        }
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex];
        document.getElementById('slideshow').appendChild(imgElement);
        setTimeout(() => imgElement.classList.add('active'), 100); // Adjust to add active class
        currentImgElement = imgElement;
    }, 300); // Wait for the old image to fade out
}

document.getElementById('next').addEventListener('click', () => changeImage(1));
document.getElementById('prev').addEventListener('click', () => changeImage(-1));

changeImage(0); // Load the initial image

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the default navigation initially

        // Add 'clicked' class to animate
        this.classList.add('clicked');

        // Use setTimeout to delay navigation, allowing the animation to play
        setTimeout(() => {
            // Remove class after animation
            this.classList.remove('clicked');
            
            // Navigate to the href attribute's URL after the animation
            window.location.href = this.getAttribute('href');
        }, 400); // The timeout duration should match the CSS animation duration
    });
});