document.addEventListener("DOMContentLoaded", function() {
  function createDivWithClass(className) {
      var d = document.createElement('div');
      //d.classList.add(className);
      d.className = className
      return d;
  };
// function sizeOfCanvas(size){
//   if(size === "small"){
//     for (var i = 0; i < 10; i++) {
//       createDivWithClass('pixel')
//     }
//     createDivWithClass(small)
//   }
var cont = document.getElementsByClassName('container')[0]
let body = document.getElementsByTagName('body')[0];
body.appendChild(cont);
for (var i = 0; i < 1170; i++) {
  cont.appendChild(createDivWithClass('pixel'));
}
//this is where the functionality really happens
function colorMe(){
  if(event.target.className === 'pixel'){
    event.target.classList.toggle('red');
    console.log("target hit", event.target);
}
}
cont.addEventListener("click", colorMe)

function makePalette(num){
var palette = createDivWithClass(palette)
body.appendChild(palette)
for (var i = 0; i < num; i++) {
  var paintBlobs = createDivWithClass(blobs)
  palette.appendChild(paintBlobs)
}
}
makePalette(5);
// add style to 3 boxes
// function button_click() {
//     index = (index + 1) % colors.length;
//     document.getElementById("box").style.backgroundColor = colors[index];
//     document.getElementById("asd").style.backgroundColor = colors[index];
//     document.getElementById("fgh").style.backgroundColor = colors[index];
// }


// returns the current color of #box
// function getColor() {
//        return document.getElementById("box").style.backgroundColor;
// }
//
// function whichIsColor(color) {
//       // select all elements
//       var els = document.getElementsByTagName("div");
//       //iterate through them
//       for(var i in els) {
//            // if matches the color passed in argument:
//            if(els[i].style.backgroundColor === color) {
//               return els[i];
//            }
//       }
// }

















})
