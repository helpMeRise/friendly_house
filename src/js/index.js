const animals = () => {
  const animalName = document.querySelector('.hero__animal-name');
  const animalWrap = document.querySelector('.hero__image');
  const animal = animalWrap.querySelector('img');
  const animalSource = animalWrap.querySelectorAll('source');
  const animals = document.querySelectorAll('.hero__item');
  const list = document.querySelector('.hero__list');
  const who = document.querySelector('.hero__who')

  const tabs = () => {

    list.addEventListener('click', (event) => {
      let target = event.target; 
      
      if (target.textContent == 'Борис') {
        animal.setAttribute('src', 'image/hero/boris_big.png')
        animalSource[0].setAttribute('srcset', 'image/hero/boris_big.avif')
        animalSource[1].setAttribute('srcset', 'image/hero/boris_big.webp')
        animalName.textContent = 'Борис'
        who.innerHTML = `его`
        remove('Борис');
      } else if (target.textContent == 'Луи') {
        animal.setAttribute('src', 'image/hero/lui_big.png')
        animalSource[0].setAttribute('srcset', 'image/hero/lui_big.avif')
        animalSource[1].setAttribute('srcset', 'image/hero/lui_big.webp')
        animalName.textContent = 'Луи'
        who.innerHTML = `его`
        remove('Луи');
      } else if (target.textContent == 'Питер') {
        animal.setAttribute('src', 'image/hero/piter_big.png')
        animalSource[0].setAttribute('srcset', 'image/hero/piter_big.avif')
        animalSource[1].setAttribute('srcset', 'image/hero/piter_big.webp')
        animalName.textContent = 'Питер'
        who.innerHTML = `его`
        remove('Питер');
      } else if (target.textContent == 'Кенни') {
        animal.setAttribute('src', 'image/hero/kenni_big.png')
        animalSource[0].setAttribute('srcset', 'image/hero/kenni_big.avif')
        animalSource[1].setAttribute('srcset', 'image/hero/kenni_big.webp')
        animalName.textContent = 'Кенни'
        who.innerHTML = `его`
        remove('Кенни');
      } else if (target.textContent == 'Сара') {
        animal.setAttribute('src', 'image/hero/sara_big.png')
        animalSource[0].setAttribute('srcset', 'image/hero/sara_big.avif')
        animalSource[1].setAttribute('srcset', 'image/hero/sara_big.webp')
        animalName.textContent = 'Сара'
        who.innerHTML = `её`
        remove('Сара');
      }
    })
  }

  const remove = (name) => {
    for ( let i = 0; i < animals.length; i++ ) {
      if (animals[i].textContent == name) {
        animals[i].classList.add('hero__item_show');
      } 
      else {
        animals[i].classList.remove('hero__item_show');
      }
    }
  }

  tabs();
}

const burger = () => {
  const burgerBtn = $('.header__menu');
  const burger = $('.burger')

  burgerBtn.click(function() {
    burger.toggleClass('burger__active')
  });
}

const forms = () => {
  const modalBtnHero = $('.hero__button');
  const modalBtnHelp = $('.help__button');
  const modal = $('.modal');
  const modalContainer = $('.modal__container');
  const modalForm = $('.modal__form');

  modalBtnHero.click( function() {
    modal.toggleClass('modal_active');
  })

  modalBtnHelp.click( function() {
    modal.toggleClass('modal_active');
  })

  modal.click(function(event) {
    if ($(event.target).hasClass('modal')) {
      modal.toggleClass('modal_active');
    }
  })

  modalForm.submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      type: 'POST',
      data: $(this).serialize(),
      success(data) {
        $('.modal__title').text('Спасибо за заявку');
        $('.modal__contacts').slideUp();
        $('.modal__text').slideUp();
        modalForm.slideUp();
      },
      error() {
        $('.modal__title').text('Попробуйте позже');
      }
    })
  })

  const contactForm = $('.contact__form');

  contactForm.submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      type: 'POST',
      data: $(this).serialize(),
      success(data) {
        $('.contact__title').text('Спасибо за заявку');
        $('.contact__contacts').slideUp();
        $('.contact__text').slideUp();
        contactForm.slideUp();
      },
      error() {
        $('.contact__title').text('Попробуйте позже');
      }
    })
  })
}

animals();
burger();
forms();


const slider = () => {
  const wrap = document.querySelector('.slider');
  const slides = wrap.querySelectorAll('.slider__item');

  let current = 0;
  slides[current].classList.add('slider__item_active');
  wrap.addEventListener('click', event => {
    let target = event.target;
    if ( target.closest('.slider__left') ) {
      slides[current].classList.remove('slider__item_active');
      current--;
      if ( current < 0 ) {
        current = slides.length - 1;
      }
      slides[current].classList.add(`slider__item_active`);
    } else if ( target.closest('.slider__right') ) {
      slides[current].classList.remove('slider__item_active');
      current++;
      if ( current > slides.length - 1 ) {
        current = 0;
      }
      slides[current].classList.add(`slider__item_active`);
    }
  })

}

if (window.innerWidth <= 1024) {
  slider();
}

let myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.849206, 37.375674], 
        zoom: 13,
        controls: [],
    });

    const mark = new ymaps.Placemark([55.849206, 37.375674], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'image/footer/mark.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-40, -40]  
    });

    myMap.geoObjects.add(mark);
}

const modalForm = $('#modal__form');


