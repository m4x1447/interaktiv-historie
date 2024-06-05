
var root2 = document.getElementById('root2');
root2.style.display = 'none';

function exitC() {
    alert("U cannot exit this page!\nLooser!😂");
}

function exploreC() {
    var root1 = document.getElementById('root');
    var root2 = document.getElementById('root2');

    root1.style.display = 'none';
    root2.style.display = 'block';
    setTimeout(hidegif, 5500)
}

function hidegif() {
    document.getElementById("hidegif1").style.display = 'none';
    document.getElementById("hidegif2").style.display = 'block';
}

function exploreC2() {
    var root2 = document.getElementById('root2');
    var root3 = document.getElementById('root3');

    root2.style.display = 'none';
    root3.style.display = 'block';
}

function freezeGIF() {
    var gif = document.querySelector('.freeze');
    setTimeout(function() {
        gif.style.animationPlayState = 'paused';
    }, 6000);
}

window.onload = freezeGIF;