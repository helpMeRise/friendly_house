export const burger = () => {
  const burgerBtn = $('.header__menu');
  const burger = $('.burger')

  burgerBtn.click(function() {
    burger.toggleClass('burger__active')
  });
}