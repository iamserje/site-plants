(function () {
   const burgerItem = document.querySelector('.nav__burger');
   const navItem = document.querySelector('.nav');
   const closeNav = document.querySelector('.nav__close');
   const body = document.querySelector('body');
   const navItems380 = document.querySelectorAll('.nav__list_links');

   // call burgermenu and lock scroll on body
   burgerItem.addEventListener('click', () => {
      navItem.classList.add('nav__active');
      body.classList.add('lock');
   })

   // remove burgermenu and unlock scroll body
   closeNav.addEventListener('click', () => {
      navItem.classList.remove('nav__active');
      body.classList.remove('lock');
   })

   // add on element of burgermenu possible to remove it, and scroll to section
   for (let i=0; i<navItems380.length; i++) {
      navItems380[i].addEventListener('click', () => {
         navItem.classList.remove('nav__active');
         body.classList.remove('lock');
      })
   }
   // Select
   const contactsSelect = document.querySelector('.contacts__select');
      console.log(contactsSelect.textContent);
}());
