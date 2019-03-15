
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

//TweenMax.staggerFrom(".grid-item", 2, {opacity: 0, rotation:5}, 0.5);

//TweenMax.from(".tekstbox", 2, {opacity: 0, rotation:5}, 0.5);
