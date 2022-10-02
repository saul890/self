const image82 = document.getElementById('image82');
const image83 = document.getElementById('image83');
const image84 = document.getElementById('image84');
const image85 = document.getElementById('image85');
const image86 = document.getElementById('image86');
const image87 = document.getElementById('image87');
const image88 = document.getElementById('image88');
const image89 = document.getElementById('image89');
const image90 = document.getElementById('image90');
const image91 = document.getElementById('image91');
const image92 = document.getElementById('image92');
const image93 = document.getElementById('image93');
const image94 = document.getElementById('image94');
const image95 = document.getElementById('image95');
const image96 = document.getElementById('image96');
const image97 = document.getElementById('image97');
const image98 = document.getElementById('image98');
const image99 = document.getElementById('image99');
const image100 = document.getElementById('image100');
const image101 = document.getElementById('image101');
const image102 = document.getElementById('image102');
const image103 = document.getElementById('image103');
const image104 = document.getElementById('image104');



var danArray = [image83, image84, image85, image87, image88, image89, image90, image91, image92, image93, image94, image96, image97]
var joeyArray = [image98, image99, image100, image101, image102, image103, image104]
let count = 0
let countTwo = 0


image86.addEventListener('click', function onClick(event) {
    if(count < danArray.length){
        danArray[count].style.display = 'block'
        count ++
        if(count===danArray.length) count =0
      } 
  });

 

image82.addEventListener('click', function onClick(event) {
    if(countTwo < joeyArray.length){
        joeyArray[countTwo].style.display = 'block'
        countTwo ++
        if(countTwo===joeyArray.length) countTwo =0
      } 
  });