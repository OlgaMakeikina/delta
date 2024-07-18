gsap.registerPlugin(ScrollTrigger);

gsap.from(".main_header", { opacity: 0, y: -100, duration: 2, delay: 0.5 });
gsap.from(".main_header_text", { opacity: 0, y: 100, duration: 2, delay: 1 });
gsap.from(".info_about", { opacity: 0, x: -300, duration: 1, delay: 2, stagger: 1 });
gsap.from(".logo", { opacity: 0, x: 200, duration: 2, delay: 0.5 });

document.addEventListener('DOMContentLoaded', function () {
    let isAnimationTriggered = false;
  
    gsap.from(".company_box", {
        scrollTrigger: {
            trigger: "#about_company",
            start: "top center",
            end: "top 100px",
            scrub: true,
            onEnter: () => { isAnimationTriggered = true; }
        },
        delay: 0.7,
        duration: 3,
        opacity: 0,
    });

    
    document.querySelectorAll('.link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = e.target.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetId,
                        offsetY: 70 
                    },
                    onComplete: function() {
                        if (targetId === '#about_company' && !isAnimationTriggered) {
                            gsap.fromTo(".company_box", { opacity: 0 }, { opacity: 1, duration: 3 });
                            isAnimationTriggered = true;
                        }
                    }
                });
            }
        });
    });

    gsap.utils.toArray(".cont_office").forEach(function (office) {
        gsap.fromTo(office, 
            { opacity: 0 }, 
            { 
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: office,
                    start: "top center",
                    end: "top 100px",
                    scrub: true,
                    toggleActions: "play none none none"
                }
            }
        );
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu_btn');
    const menuIcon = document.getElementById('menu_icon');
    const nav = document.getElementById('nav');
    const menuItems = nav.getElementsByTagName('li');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');

        if (nav.classList.contains('open')) {
            menuIcon.src = 'close.png';
            menuIcon.alt = 'Закрыть';
        } else {
            menuIcon.src = 'menu.png';
            menuIcon.alt = 'Открыть';
        }
    });

    for (const item of menuItems) {
        item.addEventListener('click', () => {
            nav.classList.remove('open');
            menuIcon.src = 'menu.png';
            menuIcon.alt = 'Открыть';
        });
    }
});

// кнопка Подробнее
function toggleMoreInfo() {
  var moreInfo = document.getElementById("more_info");
  if (moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
  } else {
      moreInfo.style.display = "none";
  }
}

// карусель фото
const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
let i=0;
next.addEventListener('click', () => {
    i++;
    if (i > photos.length-1) {
        i=0;
    }
    document.querySelector('#pictures').src=photos[i];
    })
back.addEventListener('click', () => {
    i--;
    if (i<0) {
        i = photos.length-1;
    }
    document.querySelector('#pictures').src=photos[i];
})


  // Открытие PDF в новой вкладке
  document.querySelectorAll('.accordion_btn').forEach(button => {
    button.addEventListener('click', function() {
        const file = button.getAttribute('data-file');
        window.open(file, '_blank');
    });
});


// Карусель
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemsToShow = 3;
    const totalItems = items.length;
    let currentIndex = 0;


    const firstItems = Array.from(items).slice(0, itemsToShow).map(item => item.cloneNode(true));
    const lastItems = Array.from(items).slice(-itemsToShow).map(item => item.cloneNode(true));
    firstItems.forEach(item => carouselTrack.appendChild(item));
    lastItems.forEach(item => carouselTrack.insertBefore(item, items[0]));

   
    currentIndex = itemsToShow; 
    updateCarousel();

    function updateCarousel() {
        const itemWidth = items[0].clientWidth;
        const newTransform = -currentIndex * itemWidth;
        carouselTrack.style.transform = `translateX(${newTransform}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
            if (currentIndex === 0) {
                setTimeout(() => {
                    currentIndex = totalItems;
                    carouselTrack.style.transition = 'none';
                    updateCarousel();
                    setTimeout(() => {
                        carouselTrack.style.transition = 'transform 0.5s ease';
                    });
                }, 500); 
            }
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems + itemsToShow) {
            currentIndex++;
            updateCarousel();
            if (currentIndex === totalItems + itemsToShow) {
                setTimeout(() => {
                    currentIndex = itemsToShow;
                    carouselTrack.style.transition = 'none';
                    updateCarousel();
                    setTimeout(() => {
                        carouselTrack.style.transition = 'transform 0.5s ease';
                    });
                }, 500); 
            }
        }
    });

    updateCarousel();
});

// accordion
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.getElementsByClassName('accordion');

    for (const button of accordions) {
        button.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            const isOpen = panel.classList.contains('open');

        
            for (const otherButton of accordions) {
                const otherPanel = otherButton.nextElementSibling;
                if (otherPanel !== panel) {
                    otherPanel.style.transition = 'none'; 
                    otherPanel.style.maxHeight = null;
                    otherPanel.classList.remove('open');
                    otherButton.classList.remove('active');
                    
                    otherPanel.offsetHeight;
                    otherPanel.style.transition = ''; 
                }
            }

            if (isOpen) {
                panel.style.maxHeight = null;
                panel.classList.remove('open');
                this.classList.remove('active');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "700px";
                panel.classList.add('open');
                this.classList.add('active');
            }
        });
    }
});

// scroll to up
const mybutton = document.querySelector("#toTop");
const call = document.querySelector("#call_us");
const message = document.querySelector("#write_us");

window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
        call.style.display = "block";
        message.style.display = "block";
    } else {
        mybutton.style.display = "none";
        call.style.display = "none";
        message.style.display = "none";
    }
});

mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// новости карусель
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev_news');
    const nextButton = document.querySelector('.next_news');
    const slider = document.querySelector('.slider');
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 1;
  
    function cloneSlides() {
      const firstSlide = slides[0].cloneNode(true);
      const secondSlide = slides[1].cloneNode(true);
      const thirdSlide = slides[2].cloneNode(true);
      const lastSlide = slides[slides.length - 1].cloneNode(true);
      const secondLastSlide = slides[slides.length - 2].cloneNode(true);
      const thirdLastSlide = slides[slides.length - 3].cloneNode(true);
  
      slider.appendChild(firstSlide);
      slider.appendChild(secondSlide);
      slider.appendChild(thirdSlide);
      slider.insertBefore(thirdLastSlide, slides[0]);
      slider.insertBefore(secondLastSlide, slides[0]);
      slider.insertBefore(lastSlide, slides[0]);
  
      slides = document.querySelectorAll('.slide');
    }
  
    function updateSlidePosition(instant = false) {
      const slideWidth = slides[0].clientWidth;
      if (instant) {
        slider.style.transition = 'none';
      } else {
        slider.style.transition = 'transform 0.5s ease';
      }
      slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  
    function showSlide(index) {
      const totalSlides = slides.length;
  
      if (index < 0) {
        currentIndex = totalSlides - 6; 
      } else if (index >= totalSlides - 3) { 
        currentIndex = 3; 
      } else {
        currentIndex = index;
      }
  
      updateSlidePosition();
  
      slider.addEventListener('transitionend', () => {
        if (currentIndex === totalSlides - 3) { 
          currentIndex = 3; 
          updateSlidePosition(true);
        } else if (currentIndex === 0) {
          currentIndex = totalSlides - 6; 
          updateSlidePosition(true);
        }
      }, { once: true });
    }
  
    prevButton.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  
    nextButton.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  
    window.addEventListener('resize', () => {
      updateSlidePosition(true);
    });
  
    cloneSlides();
    updateSlidePosition(true);
  });
  
  
document.getElementById('news_btn').addEventListener('click', function() {
  window.open('Soobshenie_akcioneram_ao_delta_2024.pdf', '_blank');
});


