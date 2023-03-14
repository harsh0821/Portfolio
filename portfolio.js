var buttons = document.querySelectorAll('.filter');
var gallery = document.querySelector('.gallery');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var filter = this.getAttribute('data-filter');

    // Remove active class from all buttons
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }

    // Add active class to the clicked button
    this.classList.add('active');