var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('menu-superior').outerHTML = this.responseText;
  }
}
xhttp.open('GET' , 'menu-superior.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('menu-superior-ad').outerHTML = this.responseText;
  }
}
xhttp.open('GET' , 'menu-superior-ad.html', true);
xhttp.send();



function mostrarPopup() {
    document.getElementById("miPopup").style.display = "block";
  }

  function ocultarPopup() {
    document.getElementById("miPopup").style.display = "none";
  }

