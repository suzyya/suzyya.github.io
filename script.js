

var link = document.getElementById("links");

var linkclick = btnContainer.getElementsByClassName("xyz");

for (var i = 0; i < linkclick.length; i++) {
  linkclick[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var menuclicks = document.getElementById("menu-clicks");

var navmenulink = btnContainer.getElementsByClassName("nav-menu-link");

for (var i = 0; i < navmenulink.length; i++) {
  menuclicks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


  