document.addEventListener("DOMContentLoaded", function() {

    var color = '';
    var listen = true;

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
    var wrapper = document.getElementById("divWrapper");
    wrapper.appendChild(palette)

    function makePalette(num) {
        for (var i = 0; i < num; i++) {
            var paintChips = createDivWithClass('chips diamond')
            palette.appendChild(paintChips)
        }
    }
    makePalette(25);
    //--------------------make emoji section----------------------------------------

    var emoji_palette = createDivWithClass('emoji-palette')
    wrapper.appendChild(emoji_palette)

    function makeEmojis(num) {
        for (var i = 0; i < num; i++) {
            var emoji = createDivWithClass('emoji')
            emoji_palette.appendChild(emoji)
        }
    }
    makeEmojis(5);

    function populateEmojis() {
        var emojis = document.getElementsByClassName('emoji')
        console.log(emojis);
        for (var i = 1; i < 4; i++) {
            // var imager = document.createElement('img');
            // imager.setAttribute('src', ("/images/"+[i]+".jpg"));
            var temp = '<img src = /images/' + [i] + '.jpg>'
            emojis[i].innerHTML = temp
            // emojis[i].appendChild(imager);
        }
    }
    //-------------------------current paint selection------------------------------

    var currentColor = createDivWithClass('lgDiamond')
    emoji_palette.appendChild(currentColor)

    // Trying to get it to work with the input value here:
    // var currentColorIndicator = document.getElementById('input').value
    // console.log("CHIP",currentColorIndicator);

    //---------------------------color functionality--------------------------------

    function chooseColor() {
        if (event.target.className === 'chips diamond') {
            color = event.target.getAttribute("style");
            currentColor.style = color
            // console.log(event.target);
            // console.log("new color choice", color);
        } else if (event.target.className === 'emoji') {
            // color = event.target
            // currentColor.style = color
            // currentColor.style = color
            // console.log(event.target);
            // console.log("new color choice", color);
        }
    }

    function findValue(){
      let inputValue = document.getElementById('input').value;
      console.log("HERE",inputValue);
      input.addEventListener("click", button_click)
    }

    function removeTheEventListener() {
        listen = false
        cont.removeEventListener("mouseover", colorMe);
    }
//listen equals whether mouse is down or not
    function colorMe() {
      listen = true;
      if(listen === true){
        if (event.target.className === 'pixel') {
          event.target.style = color;
          // console.log("COLOR", color);
          // console.log("target hit", event.target);
          // console.log("BACKGROUND STYLE", event.target.style);
          // console.log("BACKGROUND COLOR", event.target.style.backgroundColor);
          cont.addEventListener('mouseover', colorMe)
          cont.addEventListener('mouseup', removeTheEventListener)
          //cont.addEventListener('doubleClick', removeTheEventListener)
        }
      }else{
        cont.removeEventListener("mouseover", colorMe);
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
        //console.log("PAINTCHIPS", paintChips);
        for (var i = 0; i < paintChips.length; i++) {
            //console.log(paintChips[i]);
            paintChips[i].style.backgroundColor = '#' + Math.floor((Math.random() * 0xF00000) + 0x0FFFFF).toString(16);
        }
    }

    //------------------------input color ------------------------------------------

    // var theInput = document.getElementById("input");
    // var theColor = theInput.value;
    // theInput.addEventListener("input", function() {
    // document.getElementById("hex").innerHTML = theInput.value;
    // }, false);
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
    palette.addEventListener("click", chooseColor)
    cont.addEventListener("click", colorMe)
    window.addEventListener('load', populateEmojis)
    butn_Reset.addEventListener('click', resetCanvas)

    //-------start session with a fresh selection of paint chips-------------------

    button_click()
})
