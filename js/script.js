  
  //My JavaScript for making the site interesting//
  
  //back to top button//
  var buttonDisplayed = false;
  //Get the button
  var mybutton = document.getElementById("backtotop");
  
  // When the user scrolls down 20px from the top of the document, the button will be shown
  //The button will then shake for a short burst of time
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
	  if (buttonDisplayed==false) {
	  $("#backtotop").effect( "shake", {times:5,distance:2  }, 500 );
	  buttonDisplayed=true;
	  }
    } else {
      mybutton.style.display = "none";
	  buttonDisplayed=false;
    }
  }
  
  // When the user clicks on the button, page will scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }