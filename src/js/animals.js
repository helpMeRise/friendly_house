export const animals = () => {
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