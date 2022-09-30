const image51 = document.getElementById('image51');
const image52 = document.getElementById('image52');
const image53 = document.getElementById('image53');
const image54 = document.getElementById('image54');
const image55 = document.getElementById('image55');
const image56 = document.getElementById('image56');
const image57 = document.getElementById('image57');
const image58 = document.getElementById('image58');
const image59 = document.getElementById('image59');

var tayArray = [image52, image53, image54, image55, image56, image57, image58, image59]
let count = 0


image51.addEventListener('click', function onClick(event) {
    if(count < tayArray.length){
        tayArray[count].style.display = 'block'
        count ++
        if(count===tayArray.length) count =0
      } 
  });

 