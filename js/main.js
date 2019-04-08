document.addEventListener("DOMContentLoaded", function () {
 const myModal = document.querySelector('.modal');
 const signInButton = document.querySelector('.signin');
 const closeButton = document.querySelector('.close');
 const submitButton = document.querySelector('.submit');
 const userField = document.querySelector('.user');
 const passField = document.querySelector('.pass');

 signInButton.addEventListener('click', function() {
   myModal.style.display = 'incline'
 })
 closeButton.addEventListener('click', function() {
   if (myModal.style.display != 'none') {
     myModal.style.display = 'none'
 })

 submitButton.addEventListener('click', function() {
   userField.classList.add('error');
   passField.classList.add('error');
 })

 userField.addEventListener('click', function() {
   userField.classList.remove('error');
 })

 passField.addEventListener('click', function() {
   passField.classList.remove('error');
 })

 myModal.addEventListener('click', function(event) {
   if (myModal == event.target) {
     if (myModal.style.display != 'none') {
       myModal.style.display = 'none'
     }
   }
 })
});
