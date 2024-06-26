/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    document.getElementById("my_audio").play();
});

var siteCondition = true;
var letterContainer = document.getElementById("letter");
var siteError = document.getElementById("siteError");
var elementLFT = document.querySelector(".coverTop");
var elementRGT = document.querySelector(".coverBottom");
var opOvrLay = document.getElementById("opovrlay");
if(siteCondition) {
  letterContainer.style.display = "";
  siteError.style.display = "none";
  elementLFT.style.display = "";
  elementRGT.style.display = "";
  opOvrLay.style.display = "";
} else{
  letterContainer.style.display = "none";
  siteError.style.display = "";
  elementLFT.style.display = "none";
  elementRGT.style.display = "none";
  opOvrLay.style.display = "none";
}


function animateOpen(){
	window.scroll(0,0);

  var elementLFT = document.querySelector(".coverTop");
	elementLFT.classList.toggle("openLeft");
	
	  var elementRGT = document.querySelector(".coverBottom");
	elementRGT.classList.toggle("openRight");
	
	
  $("#rightpanel").animate({
    left:'-100%',
    opacity: '0',
	display:'none'
  });
  setTimeout(function(){
       document.getElementById("cover").style.display="none";
	   document.getElementById("opovrlay").style.display="none";
  
  },1000);
	document.getElementById("opovrlay").style.display="none";	
}
 

// Set the date we're counting down to
var countDownDate = new Date("Jul 7, 2022 9:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

var slideIndex = 0;
// showSlides();


function playAudio(){
	 document.getElementById("my_audio").play();
}


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');
