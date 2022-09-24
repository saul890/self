const imageOne = document.getElementById('imageOne');
const imageTwo = document.getElementById('imageTwo');
const imageThree = document.getElementById('imageThree');

imageOne.addEventListener('click', function onClick(event) {
  imageTwo.style.display = 'block';
  imageThree.style.display = 'block';
});