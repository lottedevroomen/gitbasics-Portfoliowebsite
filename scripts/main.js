
var myIndex = 0;
carouseleen();

function carouseleen() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carouseleen, 3000); 
}


var myIndex = 0;
carouseltwee();

function carouseltwee() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carouseltwee, 3000); 
}