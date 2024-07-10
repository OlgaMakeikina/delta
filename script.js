gsap.registerPlugin(ScrollTrigger);

gsap.from(".main_header", { opacity: 0, y: -100, duration: 2, delay: 0.5 });
gsap.from(".main_header_text", { opacity: 0, y: 100, duration: 2, delay: 1 });
gsap.from(".info_about", { opacity: 0, x: -300, duration: 1, delay: 2, stagger: 1 });
gsap.from(".logo", { opacity: 0, x: 200, duration: 2, delay: 0.5 });

document.addEventListener('DOMContentLoaded', function () {
    let isAnimationTriggered = false;
  
    // Анимация при прокрутке
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
  
    // Плавная прокрутка и анимация при нажатии на ссылку
    document.querySelector('.link[href="#about_company"]').addEventListener('click', function (e) {
      e.preventDefault();
  
      // Плавный переход к разделу "О компании"
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#about_company",
          offsetY: 70 // Настройте значение отступа по своему усмотрению
        },
        onComplete: function() {
          // Анимация после прокрутки
          if (!isAnimationTriggered) {
            gsap.fromTo(".company_box", 
              { opacity: 0 }, 
              { opacity: 1, duration: 3 }
            );
            isAnimationTriggered = true;
          }
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Плавная прокрутка для раздела "Документация"
    document.querySelector('.link[href="#documents"]').addEventListener('click', function (e) {
      e.preventDefault();
  
      // Плавный переход к разделу "Документация"
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#documents",
          offsetY: 70 // Настройте значение отступа по своему усмотрению
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Плавная прокрутка для раздела "Документация"
    document.querySelector('.link[href="#contacts"]').addEventListener('click', function (e) {
      e.preventDefault();
  
      // Плавный переход к разделу "Документация"
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#contacts",
          offsetY: 70 // Настройте значение отступа по своему усмотрению
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    let isAnimationTriggered = false;
  
    // Анимация при прокрутке для каждого элемента .cont_office
    gsap.utils.toArray(".cont_office").forEach(function (office) {
      gsap.from(office, {
        scrollTrigger: {
          trigger: office,
          start: "top center",
          end: "top 100px",
          scrub: true,
          onEnter: () => { isAnimationTriggered = true; }
        },
        delay: 0.7,
        duration: 3,
        opacity: 0,
      });
    });
  
    document.querySelector('.link[href="#objects"]').addEventListener('click', function (e) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#objects",
          offsetY: 70 // Настройте значение отступа по своему усмотрению
        }
      });
    });
  
    document.querySelector('.link[href="#documents"]').addEventListener('click', function (e) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#documents",
          offsetY: 70 // Настройте значение отступа по своему усмотрению
        }
      });
    });
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    // Плавная прокрутка для раздела "Документация"
    document.querySelector('.link[href="#news"]').addEventListener('click', function (e) {
      e.preventDefault();
  
      // Плавный переход к разделу "Документация"
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#news",
          offsetY: 70 // Настройте значение отступа по своему усмотрению
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu_btn');
    const menuIcon = document.getElementById('menu_icon');
    const nav = document.getElementById('nav');
    const menuItems = nav.getElementsByTagName('li');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');

        // Меняем иконку кнопки
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
  document.getElementById('ustav').addEventListener('click', function() {
    window.open('ystavpao.pdf', '_blank');
});

document.getElementById('otchet3').addEventListener('click', function() {
    window.open('year2012.pdf', '_blank');
});
document.getElementById('otchet6').addEventListener('click', function() {
    window.open('year2013.pdf', '_blank');
});
document.getElementById('otchet8').addEventListener('click', function() {
    window.open('financial_year2014.pdf', '_blank');
});

document.getElementById('otchet2').addEventListener('click', function() {
    window.open('audit2012.pdf', '_blank');
});
document.getElementById('otchet5').addEventListener('click', function() {
    window.open('audit2013.pdf', '_blank');
});
document.getElementById('otchet7').addEventListener('click', function() {
    window.open('audit.pdf', '_blank');
});

document.getElementById('otchet1').addEventListener('click', function() {
    window.open('buh2012.pdf', '_blank');
});
document.getElementById('otchet4').addEventListener('click', function() {
    window.open('buh2013.pdf', '_blank');
});


document.getElementById('soobshenie24').addEventListener('click', function() {
    window.open('Soobshenie_akcioneram_ao_delta_2024.pdf', '_blank');
});
document.getElementById('soobshenie23').addEventListener('click', function() {
    window.open('Soobshenie_akcioneram_ao_delta_2023.pdf', '_blank');
});
document.getElementById('soobshenie22').addEventListener('click', function() {
    window.open('Soobshenie_akcioneram_ao_delta_2022.pdf', '_blank');
});
document.getElementById('soobshenie21').addEventListener('click', function() {
    window.open('Soobshenie_akcioneram_ao_delta_2021.pdf', '_blank');
});


document.getElementById('golosovanie24').addEventListener('click', function() {
    window.open('golos_2024.pdf', '_blank');
});
document.getElementById('golosovanie23').addEventListener('click', function() {
    window.open('golos_2023.pdf', '_blank');
});
document.getElementById('golosovanie22').addEventListener('click', function() {
    window.open('golos_2022.pdf', '_blank');
});
document.getElementById('golosovanie21').addEventListener('click', function() {
    window.open('golos_2021.pdf', '_blank');
});
document.getElementById('golosovanie20').addEventListener('click', function() {
    window.open('golos_2020.pdf', '_blank');
});
document.getElementById('golosovanie19').addEventListener('click', function() {
    window.open('golos_2019.pdf', '_blank');
});


document.getElementById('ocenka1').addEventListener('click', function() {
    window.open('Otchet ocenka arendi sklad Alt 41-1.pdf', '_blank');
});
document.getElementById('ocenka6').addEventListener('click', function() {
    window.open('Otchet ocenka arendi sklad Alt 41-6.pdf', '_blank');
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

    // Clone first and last items for infinite effect
    const firstItems = Array.from(items).slice(0, itemsToShow).map(item => item.cloneNode(true));
    const lastItems = Array.from(items).slice(-itemsToShow).map(item => item.cloneNode(true));
    firstItems.forEach(item => carouselTrack.appendChild(item));
    lastItems.forEach(item => carouselTrack.insertBefore(item, items[0]));

    // Update current index and translateX value
    currentIndex = itemsToShow; // Starting point with offset
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
                }, 500); // Timeout must match the CSS transition duration
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
                }, 500); // Timeout must match the CSS transition duration
            }
        }
    });

    // Initialize carousel
    updateCarousel();
});

// accordion
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.getElementsByClassName('accordion');

    for (const button of accordions) {
        button.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            const isOpen = panel.classList.contains('open');

            // Закрытие всех панелей
            for (const otherButton of accordions) {
                const otherPanel = otherButton.nextElementSibling;
                if (otherPanel !== panel) {
                    otherPanel.style.transition = 'none'; // Отключение анимации
                    otherPanel.style.maxHeight = null;
                    otherPanel.classList.remove('open');
                    otherButton.classList.remove('active');
                    // Принудительное выполнение стилей
                    otherPanel.offsetHeight;
                    otherPanel.style.transition = ''; // Включение анимации
                }
            }

            // Переключение текущей панели
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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev_news');
  const nextButton = document.querySelector('.next_news');

  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 3;
      updateSliderPosition();
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < slides.length - 3) ? currentIndex + 1 : 0;
      updateSliderPosition();
  });

  function updateSliderPosition() {
      const transformValue = -(currentIndex * 100 / 3);
      slider.style.transform = `translateX(${transformValue}%)`;
  }
});

document.getElementById('news_btn').addEventListener('click', function() {
  window.open('Soobshenie_akcioneram_ao_delta_2024.pdf', '_blank');
});
      