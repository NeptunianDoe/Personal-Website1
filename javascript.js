//Top Navigation Bar Function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "myTopnav") {
      x.className += " responsive";
    } else {
      x.className = "myTopnav";
    }
  }

  //When the user scrolls the page, execute myFunction
  window.onscroll = function()  {myFunction()};

  //Get the topnavbar
  let topnavbar = document.getElementById("myTopnav");

  //Get the offset position of the topnavbar 
  let sticky = topnavbar.offsetTop;

  //Add the sticky class to the navbar when you reach its scroll position. Remove "sticky"when you leave the scroll position
  function myFunction()
    if (window.pageYOffset >= sticky) {
        topnavbar.classList.add("sticky")
    }  else  {
        navbar.classList.remove("sticky");
    }

}