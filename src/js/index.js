const animals = () => {
  const animalName = document.querySelector('.hero__animal-name');
  const animal = document.querySelector('.hero__image');
  const animals = document.querySelectorAll('.hero__item');
  const list = document.querySelector('.hero__list');
  const who = document.querySelector('.hero__who')

  const tabs = () => {

    list.addEventListener('click', (event) => {
      let target = event.target; 
      
      if (target.textContent == 'Борис') {
        animal.setAttribute('src', 'image/hero/boris_big.png')
        animalName.textContent = 'Борис'
        who.innerHTML = `его`
        remove('Борис');
      } else if (target.textContent == 'Луи') {
        animal.setAttribute('src', 'image/hero/lui_big.png')
        animalName.textContent = 'Луи'
        who.innerHTML = `его`
        remove('Луи');
      } else if (target.textContent == 'Питер') {
        animal.setAttribute('src', 'image/hero/piter_big.png')
        animalName.textContent = 'Питер'
        who.innerHTML = `его`
        remove('Питер');
      } else if (target.textContent == 'Кенни') {
        animal.setAttribute('src', 'image/hero/kenni_big.png')
        animalName.textContent = 'Кенни'
        who.innerHTML = `его`
        remove('Кенни');
      } else if (target.textContent == 'Сара') {
        animal.setAttribute('src', 'image/hero/sara_big.png')
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
        modalForm.slideUp();
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