class ImageSlider {
    constructor(container) {
        this.slider = container;
        this.slides = this.slider.querySelectorAll('.js-image-slider__photo-room');
        this.dots = this.slider.querySelectorAll('.js-image-slider__dot');
        this.nextButton = this.slider.querySelector('.js-image-slider__next');
        this.prevButton = this.slider.querySelector('.js-image-slider__prev');
        this.nextButton.onclick = this.plusSlides.bind(this);
        this.prevButton.onclick = this.currentSlide.bind(this);
        this.slideIndex = 0;
        this.showSlides(0);
        this.bindingDots();
    }
      
    showSlides(n) {
        if (n >= this.slides.length) {
            this.slideIndex = 0;
        } else if (n < 0) {
            this.slideIndex = this.slides.length - 1;
        } else {
            this.slideIndex = n;
        };

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";  
        }
        for (let i = 0; i < this.dots.length; i++) {  
            this.dots[i].className = this.dots[i].className.replace(" js-image-slider__dot_active", "");
        }

        this.slides[this.slideIndex].style.display = "flex";  
        this.toggleActiveDots();
    }

    toggleActiveDots() {
        this.dots[this.slideIndex].className += " js-image-slider__dot_active";
    }

    plusSlides() {
        let n = this.slideIndex + 1;
        this.showSlides(n);
    }

    currentSlide() {
        let n = this.slideIndex - 1;
        this.showSlides(n);
    }

    dotClick(event) {
        let dotIndex = Number(event.currentTarget.getAttribute('data-index'));
        this.showSlides(dotIndex - 1);
    }

    bindingDots() {
        for (let dot of this.dots) {
            dot.onclick = this.dotClick.bind(this);
        }
    }
}

let allImageSliders = document.querySelectorAll('.js-image-slider');

class QuestionsSlider extends ImageSlider {
    constructor(container) {
        super(container);
        this.nextButtons = this.slider.querySelectorAll('.js-image-slider__next');
        this.prevButtons = this.slider.querySelectorAll('.js-image-slider__prev');
        this.lastSlide = this.slider.querySelector('.js-last-slide');
        this.bindingNavigation();
    }

    bindingNavigation() {
        for (button of this.nextButtons) {
            button.onclick = this.plusSlides.bind(this);
        }
        for (button of this.prevButtons) {
            button.onclick = this.currentSlide.bind(this);
        }
    }

    toggleActiveDots() {
        let countSlides = this.slides.length;
        let lastActiveDot = this.slideIndex;

        if (this.slideIndex === 0) {
            this.dots[0].className += " js-image-slider__dot_active";
        } else {
            for (let i = 0; i < countSlides; ++i) {
                lastActiveDot += countSlides;
                if (lastActiveDot < this.dots.length) {
                    this.dots[lastActiveDot].className += " js-image-slider__dot_active";
                }
            }
        }
    }

    plusSlides() {
        if (this.slideIndex === (this.slides.length - 1)) {
            this.goToLastSlide()
        } else {
            let n = this.slideIndex + 1;
            this.showSlides(n);
        }
    }

    goToLastSlide() {
        this.slides[this.slideIndex].style.display = "none"; 
        this.lastSlide.style.display = "flex";  
    }

    bindingDots() {
        let comment = "Выключаем функцию переключения слайдов по точкам";
    }
}

for (let slider of allImageSliders) {
    new QuestionsSlider(slider);
}