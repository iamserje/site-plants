const btnsService = document.querySelectorAll('.services__buttons_links');
const cadrsService = document.querySelectorAll('.service__card');

let numOfBtns = 0;

function turnOnBtn(btn, targ) {
   btn.classList.add('active-button');
   numOfBtns +=1;
   cadrsService.forEach(card => {
      // здесь попробовать сделать цикл по кнопкам с проверкой на активные кнопки чтоб не снимать всем, а только тем у кого нет активных кнопок
      if (numOfBtns === 1 && !card.classList.contains('cards-blur')) {
         card.classList.add('cards-blur');
      }
      if (card.classList[1] === targ.classList[1]) {
         card.classList.remove('cards-blur');
      }
   });
}

function turnOfBtn(btn, targ) {
   btn.classList.remove('active-button');
   numOfBtns -= 1;
   cadrsService.forEach(card => {
      if (card.classList[1] === targ.classList[1]) {
         card.classList.add('cards-blur');
      }
      if (numOfBtns === 0) {
         card.classList.remove('cards-blur');
      }
   });
}

for (let i=0; i<btnsService.length; i++) {
   let btn = btnsService[i];
   btn.addEventListener('click', (event) => {
      if (btn.classList.contains('active-button')) {
         turnOfBtn(btn, event.target);
         console.log(numOfBtns);
      } else if (numOfBtns < 2) {
         turnOnBtn(btn, event.target);
         console.log(numOfBtns, event.target);
      }
   })
}