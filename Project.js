window.onload = pageLoad;
function pageLoad()
{
    var prev = document.getElementsByClassName("prev");
    var next = document.getElementsByClassName("next");
    prev[0].onclick = function(){plusIndex1(-1)};
    next[0].onclick =  function(){plusIndex1(1)};
    prev[1].onclick = function(){plusIndex2(-1)};
    next[1].onclick =  function(){plusIndex2(1)};
    showWebSlides(webSlideIndex);
    showGameSlides(gameSlideIndex);
}

var webSlideIndex = 1;
var gameSlideIndex = 1;

function plusIndex1(n)
{
    showWebSlides(webSlideIndex += n)
}

function showWebSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("picbox1");
    if(n > slides.length) {webSlideIndex = 1}
    if(n < 1) {webSlideIndex = slides.length}
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[webSlideIndex-1].style.display = "block";
}

function plusIndex2(n)
{
    showGameSlides(gameSlideIndex += n)
}

function showGameSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("picbox2");
    if(n > slides.length) {gameSlideIndex = 1}
    if(n < 1) {gameSlideIndex = slides.length}
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[gameSlideIndex-1].style.display = "block";
}