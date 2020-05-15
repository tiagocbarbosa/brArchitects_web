function myFunction(x) {
    var divHeader = document.getElementById("header");
    if (!x.matches) { // If media query not matches        
        divHeader.classList.add("container");
    } else {
        divHeader.classList.remove("container");
    }
  }
  
  var x = window.matchMedia("(max-width: 1502px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes