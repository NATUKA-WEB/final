document.getElementById('name').addEventListener('focus', function() {
    console.log('error');
});

getElementById('name').textContent = 'name';

document.getElementById('from').addEventListener('focus', function() {
    console.log('error');
});

document.getElementById('to').addEventListener('focus', function() {
    console.log('error');
});
document.getElementById('quantity').addEventListener('focus', function() {
    console.log('error');
});

document.getElementById('TBN-cart').addEventListener('click', function() {
    alert('error');
});


// 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" grey", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "red ";
}
