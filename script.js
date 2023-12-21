let prevScrollPos = window.scrollY;
let showing=true;
const myBody = document.body.innerHTML;



const myheader = document.getElementById("headerDesign");

const mycheckbox = document.querySelector(".checkbox");
const myburger = document.querySelector(".hamburger-lines");






const booking = document.getElementById("booking");
const mysearchbar = document.getElementById("searchBar");
const mynavbar = document.getElementById("navbar");

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    mynavbar.style.position = "fixed";
    mynavbar.style.Top = "-3em";
    mynavbar.style.backgroundColor = "var(--dark-color)";
    mysearchbar.style.top ="4.5em";
    myheader.style.marginTop= "0";
    myheader.style.marginBottom = "0";


    myburger.style.top = "31%";
    mycheckbox.style.top = "31%";



   
  
  } else {
    // user has scrolled down;
    mynavbar.style.position = "absolute";
  
   
    mysearchbar.style.top ="0em";
   
  }




  if(currentScrollPos==0){
    mynavbar.style.backgroundColor = "var(--transparent)";
    myheader.style.marginTop= "3.5em";
   }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});



function bookingShow() {

    if(showing)
    {
        booking.style.display = "none";
        document.body.style.overflowY = "scroll";
        showing =false;
      
      }
      else{
        booking.style.display = "block";
        document.body.style.overflowY = "hidden";
        showing =true;
      }
      
    
    }


 