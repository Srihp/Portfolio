function move() {
    var elem = document.getElementById("table");   
    var width = 1;
    var id = setInterval(frame, 12);
    function frame() {
      if (width >= 190) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%';
        setInterval(s,1800)    
      }
    }
    function s() { 
        
        var url = "second.html";
        window.open(url, '_self');
    } 
}
