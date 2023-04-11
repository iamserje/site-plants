const contactsSelect = document.querySelector('.contacts__select');
const contactsSelectValue = document.querySelector('.contacts__select_value');
const option = document.querySelectorAll('.option');
const cityForm = document.querySelector('.contacts__city-form');
const cityFormButton = document.querySelector('.city-form__button');
const cityFormList = document.querySelector('.city-form__list');
// const cityFormItem = document.querySelectorAll('.city-form__item');
const cityFormItem = document.querySelectorAll('.city-form__item > span:last-child');
const contacts = document.querySelector('.contacts');
const mediaQuery = window.matchMedia('(max-width: 768px)');

const namesOfCities = {
   'Canandaigua, NY': [
      'Canandaigua, NY',
      '+1 585 393 0001',
      '151 Charlotte Street'
      ],
   'New York City': [
      'New York City',
      '+1	212	456 0002',
      '9 East 91st Street'
      ],
   'Yonkers, NY': [
      'Yonkers, NY',
      '+1	315	908 0004',
      '511 Warburton Ave'
      ],
   'Sherrill, NY': [
      'Sherrill, NY',
      '+1 585 393 0001',
      '14 WEST Noyes BLVD'
      ]
};

function signForm(cityName, namesOfCities) {
   console.log(cityName);
   if (cityFormItem[0].textContent !== cityName) {
      for (let i=0; i<cityFormItem.length; i++) {
         cityFormItem[i].textContent = namesOfCities[cityName][i];
         // console.log('From Fun: ', cityFormItem[i].children[1]);
      }
   }
   cityFormButton.setAttribute('href', `tel:${cityFormItem[1].innerHTML}`);
   cityFormButton.addEventListener('mouseenter', () => {
      cityFormButton.style.color = '#fff';
      cityFormButton.style.background = '#E06733';
   })
   cityFormButton.addEventListener('mouseout', () => {
      cityFormButton.style.color = '#717171';
      cityFormButton.style.background = 'transparent';
   })
}

// function signForm(cityName, namesOfCities) {
//    console.log(cityName);
//    if (cityFormItem[0].children[1].innerHTML !== cityName) {
//       for (let i=0; i<cityFormItem.length; i++) {
//          cityFormItem[i].children[1].innerHTML = namesOfCities[cityName][i];
//       }
//    }
// }


function toggleSelectList() {
   if (contactsSelect.getAttribute('data-state') === 'active') {
      contactsSelect.setAttribute('data-state', '');
   } else {
      contactsSelect.setAttribute('data-state', 'active');
   }
}

contactsSelectValue.addEventListener('click', toggleSelectList);

for (let i=0; i<option.length;i++) {
   option[i].addEventListener('click', (evt) => {
      contactsSelectValue.textContent = evt.target.textContent;
      signForm(evt.target.textContent, namesOfCities);
      // console.log(typeof evt.target.textContent);
      contactsSelect.setAttribute('data-state', '');
      cityForm.classList.add('city-form__active');
   })
}

function closeForm() {
      cityForm.classList.remove('city-form__active');
      contactsSelectValue.textContent = contactsSelectValue.getAttribute('data-default');
}
cityFormButton.addEventListener('click', () => {
   closeForm();
})
