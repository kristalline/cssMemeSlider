const slider = document.querySelector('.slider');
const content = document.querySelector('.slider-content');

const slides = content.children;
const totalSlides = slides.length;
console.log('total:', totalSlides)
//???
const options = {
    spaceBetween: 20
}

const sliderWidth = slider.offsetWidth;

[...slides][0].classList.add('slide-active');

//only 1 slide on page  del ??? ---
const setPropeties = () => {    
    const currentWidth = slider.offsetWidth;
    Array.from(slides).map((slide) => {
        slide.style.setProperty("width", `${currentWidth}px`);
    });
};
setPropeties();
//---

const createBullet = () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.classList.add('bullet');
    div.append(span)
    return div;
};


const createSlider = () => {
    //Array.from(slides)[1].style.setProperty("left", `${sliderWidth}px`);
    const pagination = document.querySelector('.pagination');

    //pagination:
    let index = totalSlides;
    while (index > 0) {
        pagination.append(createBullet())
        index -= 1;        
    };

    pagination.addEventListener('click', (e) => {
        const bullet = e.target.closest('.bullet');
        const index = [...pagination.childNodes].indexOf(bullet);

        const nextSlide = slides[index];
        const currentActiveSlide = content.querySelector('.slide-active');

        if(nextSlide === currentActiveSlide) {
            console.log('dont move');
            return
        };

        bullet.classList.add('active');
        nextSlide.classList.add('slide-active');
        currentActiveSlide.classList.remove('slide-active');

        setTimeout(() => {
            const distance = sliderWidth * index;
            content.classList.add('animate');
            setTimeout(() => {
        
                console.log(content, sliderWidth * index);
                content.style.setProperty('transform', `translateX(-${distance}px)`);
                
            }, 200);
            setTimeout(() => {
                content.classList.remove('animate');
            }, 700)

        }, 10);


        console.log(bullet, index);
    })
};

createSlider();