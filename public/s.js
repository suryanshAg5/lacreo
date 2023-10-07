var i = 0;
var txt = 'La Martiniere for Boys';
var speed = 50;
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("animate").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


  window.onload = function() {
    typeWriter();
  };