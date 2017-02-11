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

//---------------------------color functionality--------------------------------

    function colorMe() {
        if (event.target.className === 'pixel') {
            event.target.classList.toggle('red');
            console.log("target hit", event.target);
        }
    }
    cont.addEventListener("click", colorMe)

//----------------------------------make palette--------------------------------

    var palette = createDivWithClass('palette')
    var wrapper = document.getElementById("divWrapper");
    wrapper.appendChild(palette)

    function makePalette(num) {
        for (var i = 0; i < num; i++) {
            var paintBlobs = createDivWithClass('blobs diamond')
            palette.appendChild(paintBlobs)
        }
    }
    makePalette(10);

    //----------------------------------button---------------------------------

    var butn = document.createElement('button');

    butn.setAttribute('content', 'test content');
    butn.setAttribute('class', 'btn');
    butn.innerHTML = 'Click for Pallete';

    var wrapper = document.getElementById("divWrapper");
    wrapper.appendChild(butn);

    butn.addEventListener("click", button_click)

    function button_click() {
        var paintBlobs = document.getElementsByClassName('blobs')
        console.log("PAINTBLOBS", paintBlobs);

//-----------------------------random color picker------------------------------

        for (var i = 0; i < paintBlobs.length; i++) {
            console.log(paintBlobs[i]);
            paintBlobs[i].style.backgroundColor = '#' + Math.floor((Math.random() * 0xF00000) + 0x0FFFFF).toString(16);
        }
    }









})
