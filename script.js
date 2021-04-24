let state = false;

function turnOn() {
 console.log('stet')
 let offImg = "./img/OFFbulb.jpg";
 let onImg = "./img/ONbulb.jpg";
 var imgElement = document.getElementById('test');

 if (state === true) {
  imgElement.src = offImg
  state = false;
 } else {
  imgElement.src = onImg
  state = true;
 }

}