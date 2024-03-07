        function showSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('show');
        }
        function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('show');
        }
        document.addEventListener('DOMContentLoaded', function () {
            const sidebar = document.querySelector('.sidebar');
        
            function showSidebar() {
                sidebar.classList.add('show');
            }
        
            function hideSidebar() {
                sidebar.classList.remove('show');
            }
        
            // Toggle sidebar visibility on button click
            const menuButton = document.querySelector('.menu-button');
            menuButton.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevents the body click event from being triggered
                showSidebar();
            });
        
            // Hide sidebar when clicking outside of it
            document.body.addEventListener('click', function (event) {
                const isMenuButton = event.target.closest('.menu-button');
                const isSidebar = event.target.closest('.sidebar');
        
                if (!isMenuButton && !isSidebar) {
                    hideSidebar();
                }
            });
        
            // Close sidebar when clicking on the hide button
            const hideButton = document.querySelector('.sidebar .hide-button');
            hideButton.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevents the body click event from being triggered
                hideSidebar();
            });
        });
        
        document.addEventListener("DOMContentLoaded", function () {
            // Smooth scrolling for anchor links
            const scrollLinks = document.querySelectorAll('a[href^="#"]');
            scrollLinks.forEach((link) => {
              link.addEventListener("click", (e) => {
                e.preventDefault();
          
                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
          
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust the offset as needed
                    behavior: "smooth",
                  });
                }
              });
            });
          });
          
          function showSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('show');
          }
          
          function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('show');
          }

          // JavaScript to handle the popup functionality
          document.addEventListener("DOMContentLoaded", function () {
            var popupContainer = document.getElementById("popup-container");
            var closeBtn = document.getElementById("close-btn");
            var knowMoreBtn = document.querySelector(".knowmore");
            var skillsSection = document.getElementById("skills");
            var projectsSection = document.getElementById("projects");
            var contactSection = document.getElementById("contact");
            
            var logo = document.querySelector('.logo img');
          
            function openPopup() {
              popupContainer.style.display = "flex";
              skillsSection.style.visibility = "hidden";
              projectsSection.style.visibility = "hidden";
              contactSection.style.visibility = "hidden";
            }
          
            function closePopup() {
              popupContainer.style.display = "none";
              skillsSection.style.visibility = "visible";
              projectsSection.style.visibility = "visible";
              contactSection.style.visibility = "visible";
            }
          
            knowMoreBtn.addEventListener("click", openPopup);
            closeBtn.addEventListener("click", closePopup);
          
            window.addEventListener("click", function (event) {
              if (!popupContainer.contains(event.target) && event.target !== knowMoreBtn) {
                closePopup();
              }
            });
          
            logo.addEventListener('click', function () {
              location.reload();
            });
            
          });

function openResume() {
  // Change the file path accordingly
  var filePath = 'resume.pdf';

  // Open the file in a new window or tab
  window.open(filePath, '_blank');
}
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop -60,
          behavior: "smooth"
        });
      }
    });
  });
  
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween:0,
    loop:true,
    centerSlide:'true',
    face: 'true',
    grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
      dynamicBullets:true,
  },
breakpoints:{
      0: {
          slidesPerView: 1,
      },
        620: {
          slidesPerView: 2,
      },
        1100: {
          slidesPerView: 3,
      },
  },
});
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value}<br>
  E-Mail: ${email.value}<br>
  Phone Number: ${phone.value}<br>
  Message: ${message.value}<br>`;

  Email.send({
      SecureToken : "97350b5a-f6fc-4854-a6a6-dd7c1a376e77",
      Host : "smtp.elasticemail.com",
      Username : "rohithvits116@gmail.com",
      Password : "979BE5B734506A17440FD5286BC1601A6898",
      To : 'rohithvits116@gmail.com',
      From : "rohithvits116@gmail.com",
      Subject : "Portfolio Message Form",
      Body : bodyMessage
  }).then(
    message => {
      if(message == "OK"){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message Sent",
          showConfirmButton: false,
          timer: 2500
        });
      }
    }
  );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

function redirectToPage1() {
  window.open('https://www.linkedin.com/in/thirunalveli-rohith-388718234/');
}
function redirectToPage2() {
  var email = 'rohithvits116@gmail.com';
  var mailtoLink = 'mailto:' + encodeURIComponent(email);
  window.location.href = mailtoLink;
}
function redirectToPage3() {
  window.open('https://github.com/rohith1112?tab=repositories');
}
function redirectToPage4() {
  window.open('https://t.me/rohith11122001');
}
function visit1(){
  window.open('https://65d82633e0c71a9a052ce897--enchanting-crepe-ed312b.netlify.app/');
}
function visit2(){
  window.open('https://rohith1112.github.io/TicTacToeGame/');
}
function visit3(){
  window.open('https://rohith1112.github.io/NoteApp/');
}
function visit4(){
  location.reload();
}
function visit5(){
  window.open('https://rohith1112.github.io/WebDevelopmentEditor/');
}
