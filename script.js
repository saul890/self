const imageOne = document.getElementById('imageOne');
const imageTwo = document.getElementById('imageTwo');
const imageThree = document.getElementById('imageThree');
const imageFour = document.getElementById('imageFour');
const imageFive = document.getElementById('imageFive');

imageOne.addEventListener('click', function onClick(event) {
  imageTwo.style.display = 'block';
  imageThree.style.display = 'block';
  imageFour.style.display = 'block';
});

imageFour.addEventListener('click', function onClick(event) {
  imageFive.style.display = 'block';
});