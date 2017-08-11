document.addEventListener("DOMContentLoaded", function() {

    var listen = true;
    var paintChipInput = document.querySelector('input[type="color"]')
    document.querySelector('input[type="color"]').onchange=changeEventHandler;
    var color = document.querySelector('input[type="color"]');


    //----------------------------------make divs---------------------------------

    function createDivWithClass(className) {
        var d = document.createElement('div');
        d.className = className
        return d;
    };

    //----------------------------------make canvas---------------------------------

    var cont = document.getElementsByClassName('container')[0]
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(cont);
    for (var i = 0; i < 1170; i++) {
        cont.appendChild(createDivWithClass('pixel'));
    }

    //----------------------------------make palette--------------------------------

    var palette = createDivWithClass('palette')
    var wrapper = document.getElementById('divWrapper');
    wrapper.appendChild(palette)

    function makePalette(num) {
        for (var i = 0; i < num; i++) {
            var paintChips = createDivWithClass('chips diamond')
            palette.appendChild(paintChips)
        }
    }
    makePalette(25);

    //--------------------make emoji section----------------------------------------

    var emoji_palette = createDivWithClass('emoji_palette')
    wrapper.appendChild(emoji_palette)

    function makeEmojis(num) {
        for (var i = 0; i < num; i++) {
            var emoji = createDivWithClass('emoji')
            emoji_palette.appendChild(emoji)
        }
    }
    makeEmojis(4);

    function populateEmojis() {
        var emojis = document.getElementsByClassName('emoji')
        console.log(emojis);
        for (var i = 0; i < 4; i++) {
            var imager = document.createElement('img');
            imager.setAttribute('src', ('./images/'+[i]+'.jpg'));
            emojis[i].appendChild(imager);
        }
    }
    //-------------------------current paint selection------------------------------

    var currentColorCircle = createDivWithClass('lgDiamond')
    emoji_palette.appendChild(currentColorCircle)


    function currentColor(){
      var currentColorIndicator = document.querySelector('input[type="color"]').value
      currentColorCircle.style = currentColorIndicator
      console.log("CHIP", currentColorIndicator);
      color = currentColorIndicator;
      return color;
    }

    function changeEventHandler(event) {
      // You can use “this” to refer to the selected element.
      var currentColorIndicator = document.querySelector('input[type="color"]').value
      currentColorCircle.style.backgroundColor = currentColorIndicator
      console.log(currentColorCircle);
      console.log("CHIP", currentColorIndicator);
    }
    //---------------------------color functionality--------------------------------

    function rgbToHex(color) {
      const [r,g,b] = color.split(',').map(n => parseInt(n))
      console.log("RGB",[r,g,b])
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    function chooseColor() {
        if (event.target.className === 'chips diamond') {
            color = event.target.getAttribute("style");
            currentColorCircle.style = color
            console.log('chips diamond:', currentColorCircle.style);
            let colorFix = color.slice(22);
            hexColorConverted = rgbToHex(colorFix);
            document.querySelector('input[type="color"]').value = hexColorConverted
            console.log("new color choice", color)
            return color;
        }
    }

    function chooseEmoji(){
      if (event.target.className === 'emoji') {
        console.log('emoji', event.target);
      }
    }


// listen equals whether mouse is down or not
    function colorMe() {
    //  listen = true;
      if(listen === true){
        if (event.target.className === 'pixel') {
          cont.addEventListener('mouseup', function() {
              cont.removeEventListener('mousedown', colorMe);
              //listen = false;
          })
          event.target.style.backgroundColor = currentColorCircle.style.backgroundColor;
          cont.addEventListener('mousedown', colorMe)
        }
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
        for (var i = 0; i < paintChips.length; i++) {
            paintChips[i].style.backgroundColor = '#' + Math.floor((Math.random() * 0xF00000) + 0x0FFFFF).toString(16);
        }
    }

    //---------------------------reset the canvas-----------------------------------

    var butn_Reset = document.createElement('button');
    butn_Reset.setAttribute('class', 'btn')
    butn_Reset.innerText = "Start Over"
    wrapper.appendChild(butn_Reset)

    function resetCanvas() {
        window.location.reload(true);
    }

    //----------------------real paintbrush effect----------------------------------


    cont.addEventListener('mousedown', colorMe)

    palette.addEventListener('click', chooseColor)
    emoji_palette.addEventListener('click', chooseEmoji)
    cont.addEventListener('click', colorMe)
    window.addEventListener('load', populateEmojis)
    paintChipInput.addEventListener('click', currentColor)
    butn_Reset.addEventListener('click', resetCanvas)

    //-------start session with a fresh selection of paint chips-------------------

    button_click()
})
