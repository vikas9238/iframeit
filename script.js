const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* loader */
var loader = document.getElementById("preloader");
        window.addEventListener("load", function(){
            loader.style.display = "none";
        })
        
// contact FormData
function sendEmail() {
  Email.send({
    SecureToken: "42b6c6c9-bea7-4860-b7c9-0a72dd9db737",
    To: "support@iframeit.in",
    From: "kamakshisevasansthanhelp@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Subject: " +
      document.getElementById("subject").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message send Succesfully"));
}
