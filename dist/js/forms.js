export const forms = () => {
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