document.addEventListener("DOMContentLoaded", function() {
//----------------------------------make divs---------------------------------

    function createDivWithClass(className) {
        var d = document.createElement('div');
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

//----------------------------------make canvas---------------------------------

    var cont = document.getElementsByClassName('container')[0]
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(cont);
    for (var i = 0; i < 1170; i++) {
        cont.appendChild(createDivWithClass('pixel'));
    }

//----------------------------------make palette--------------------------------

    var palette = createDivWithClass('palette')
    var wrapper = document.getElementById("divWrapper");
    wrapper.appendChild(palette)

    function makePalette(num) {
        for (var i = 0; i < num; i++) {
            var paintChips = createDivWithClass('chips diamond')
            palette.appendChild(paintChips)
        }
    }
    makePalette(25);
//-------------------------make current paint chip------------------------------



//---------------------------color functionality--------------------------------
var color='';
function chooseColor(){
  if (event.target.className === 'chips diamond') {

    color = event.target.getAttribute("style");
      console.log(event.target);
      console.log("new color choice", color);
  }
}
function colorMe() {
    if (event.target.className === 'pixel') {
        event.target.style = color;
        console.log("COLOR", color);
        console.log("target hit", event.target);
        console.log("BACKGROUND STYLE", event.target.style);
        console.log("BACKGROUND COLOR", event.target.style.backgroundColor);
        cont.addEventListener('mouseover', colorMe)
        cont.addEventListener('mouseup', removeTheEventListener)

    }
}

    //----------------------------------button---------------------------------

    var butn = document.createElement('button');
    butn.setAttribute('class', 'btn');
    butn.innerHTML = 'Choose New Palette';

    var wrapper = document.getElementById("divWrapper");
    wrapper.appendChild(butn);
    butn.addEventListener("click", button_click)

//-----------------------------random color picker------------------------------

    function button_click() {
        var paintChips = document.getElementsByClassName('chips')
        console.log("PAINTCHIPS", paintChips);
        for (var i = 0; i < paintChips.length; i++) {
            console.log(paintChips[i]);
            paintChips[i].style.backgroundColor = '#' + Math.floor((Math.random() * 0xF00000) + 0x0FFFFF).toString(16);
        }
    }
//---------------------------reset the canvas-----------------------------------

var butn_Reset = document.createElement('button');
butn_Reset.setAttribute('class', 'btn')
butn_Reset.innerText = "Start Over"
wrapper.appendChild(butn_Reset)

butn_Reset.addEventListener('click', resetCanvas)

function resetCanvas(){
 window.location.reload(true);
}

//----------------------real paintbrush effect----------------------------------
// e mousedown, mouseenter, and mouseup even
// onmousedown="colorMe()"
function removeTheEventListener(){
  cont.removeEventListener("mouseover", colorMe);
}
cont.addEventListener('mousedown', colorMe)
palette.addEventListener("click", chooseColor)
cont.addEventListener("click", colorMe)


//-------start session with a fresh selection of paint chips-------------------

button_click()
})
