function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let btn = document.getElementById("btn");
    window.onscroll = function(){handleScroll()};
    function handleScroll() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    }
    
    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }