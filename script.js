document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg','image11.jpg',
        'image12.jpg','image13.jpg','image14.jpg','image15.jpg','image16.jpg','image17.jpg','image18.jpg','image19.jpg','image20.jpg','image21.jpg','image22.jpg',
        'image23.jpg','image24.jpg','image25.jpg','image26.jpg','image27.jpg','image28.jpg','image29.jpg','image30.jpg','image31.jpg','image32.jpg','image33.jpg',
        'image34.jpg','image35.jpg','image36.jpg','image37.jpg','image38.jpg','image39.jpg','image40.jpg','image41.jpg','image42.jpg','image43.jpg','image44.jpg',
        'image45.jpg','image46.jpg','image47.jpg' 
    ];

    const slideshowContainer = document.getElementById('slideshow-container');
    let slideIndex = 0;
    let slideshowInterval;

    function showSlide(index) {
        const slides = document.getElementsByClassName('slide');

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slides[index].style.display = 'block';
    }

    function changeSlide(n) {
        slideIndex += n;

        const slides = document.getElementsByClassName('slide');

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        showSlide(slideIndex);
    }

    function toggleSlideshow() {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowToggleBtn.textContent = 'Start Slideshow';
        } else {
            slideshowInterval = setInterval(function() {
                changeSlide(1);
            }, 3000); 
            slideshowToggleBtn.textContent = 'Stop Slideshow';
        }
    }

    for (let i = 0; i < images.length; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide fade';

        const img = document.createElement('img');
        img.src = images[i];
        img.alt = 'Slide ' + (i + 1);

        slide.appendChild(img);
        slideshowContainer.insertBefore(slide, slideshowContainer.childNodes[0]);
    }

    showSlide(slideIndex);

    const slideshowToggleBtn = document.getElementById('slideshow-toggle');
    slideshowToggleBtn.addEventListener('click', function() {
        toggleSlideshow();
    });
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
        const dropdown = dropdowns[i];
        if (dropdown.style.display === 'block' && !event.target.matches('.dropbtn')) {
            dropdown.style.display = 'none';
        }
    }

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });
});
