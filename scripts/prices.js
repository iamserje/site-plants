const closePrices = document.querySelectorAll('.prices__text');
const openPrices = document.querySelectorAll('.prices__item_opend');

openPrices.forEach((el) => el.firstElementChild.classList.add('no-border'));


for (let i=0; i<openPrices.length; i++) {
   openPrices[i].addEventListener('click', (event) => {
      if (event.target.classList.contains('prices__item_title') && openPrices[i].classList.contains('hide-open')) {
         openPrices[i].classList.remove('hide-open');
         openPrices[i].firstElementChild.classList.add('no-border');
      } else {
         openPrices.forEach((el) => el.classList.remove('hide-open'));
         openPrices.forEach((el) => el.firstElementChild.classList.add('no-border'));
         openPrices[i].classList.add('hide-open');
         openPrices[i].firstElementChild.classList.remove('no-border');
      }
   })
}
