//Typewriting
//Typewriting for header
var typed = new Typed("#typed-top", {
  stringsElement: "#typed-strings-top",
  typeSpeed: 50,
  backSpeed: 30,
  smartBackspace: true, // this is a default
  loop: true,
});

//Typewriting for left side
var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 50,
  backSpeed: 30,
  smartBackspace: true, // this is a default
  loop: true,
});

//Selecting all menus id
const about = document.querySelector("#aboutMenu");
const resume = document.querySelector("#resumeMenu");
const blog = document.querySelector("#blogMenu");
const work = document.querySelector("#workMenu");
const contact = document.querySelector("#contactMenu");

//Selecting all menus "li" tag for changing color after clicking menus
const menuAbout = document.querySelector("#aboutMenu li");
const menuResume = document.querySelector("#resumeMenu li");
const menuBlog = document.querySelector("#blogMenu li");
const menuWork = document.querySelector("#workMenu li");
const menuContact = document.querySelector("#contactMenu li");

//Selecting all sections class
const sectionAbout = document.querySelector(".about");
const sectionResume = document.querySelector(".resume");
const sectionBlog = document.querySelector(".blog");
const sectionWork = document.querySelector(".work");
const sectionContact = document.querySelector(".contact");

//Menu activation color change
about.addEventListener("click", () => {
  menuAbout.classList.add("active")
  menuResume.classList.remove("active")
  menuBlog.classList.remove("active")
  menuWork.classList.remove("active")
  menuContact.classList.remove("active")
})
resume.addEventListener("click", () => {
  menuResume.classList.add("active")
  menuAbout.classList.remove("active")
  menuBlog.classList.remove("active")
  menuWork.classList.remove("active")
  menuContact.classList.remove("active")
})
blog.addEventListener("click", () => {
  menuBlog.classList.add("active")
  menuAbout.classList.remove("active")
  menuResume.classList.remove("active")
  menuWork.classList.remove("active")
  menuContact.classList.remove("active")
})
work.addEventListener("click", () => {
  menuWork.classList.add("active")
  menuAbout.classList.remove("active")
  menuResume.classList.remove("active")
  menuBlog.classList.remove("active")
  menuContact.classList.remove("active")
})
contact.addEventListener("click", () => {
  menuContact.classList.add("active")
  menuAbout.classList.remove("active")
  menuResume.classList.remove("active")
  menuBlog.classList.remove("active")
  menuWork.classList.remove("active")
})

//----------------------------Amimation----------------------------
//This function will run after clicking any menu expect about
function runAbout() {
  //Amimation for about section
  about.addEventListener("click", () => {
    sectionAbout.classList.add("fadeInLeft", "show");
    sectionAbout.classList.remove("fadeInLeftBack", "hide");
    sectionResume.classList.remove("fadeInLeft");
    sectionResume.classList.add("fadeInLeftBack", "hide");
    sectionBlog.classList.remove("fadeInLeft");
    sectionBlog.classList.add("fadeInLeftBack", "hide");
    sectionWork.classList.remove("fadeInLeft");
    sectionWork.classList.add("fadeInLeftBack", "hide");
    sectionContact.classList.remove("fadeInLeft");
    sectionContact.classList.add("fadeInLeftBack", "hide");
  });
}

//Amimation for resume section
resume.addEventListener("click", () => {
  sectionResume.classList.add("animated", "fadeInLeft", "show");
  sectionResume.classList.remove("fadeInLeftBack", "hide");
  sectionAbout.classList.remove("fadeInLeft", "show");
  sectionAbout.classList.add("fadeInLeftBack", "hide");
  sectionBlog.classList.remove("fadeInLeft");
  sectionBlog.classList.add("fadeInLeftBack", "hide");
  sectionWork.classList.remove("fadeInLeft");
  sectionWork.classList.add("fadeInLeftBack", "hide");
  sectionContact.classList.remove("fadeInLeft");
  sectionContact.classList.add("fadeInLeftBack", "hide");
});

//Amimation for blog section
blog.addEventListener("click", () => {
  sectionBlog.classList.add("animated", "fadeInLeft", "show");
  sectionBlog.classList.remove("fadeInLeftBack", "hide");
  sectionAbout.classList.remove("fadeInLeft", "show");
  sectionAbout.classList.add("fadeInLeftBack", "hide");
  sectionResume.classList.remove("fadeInLeft");
  sectionResume.classList.add("fadeInLeftBack", "hide");
  sectionWork.classList.remove("fadeInLeft");
  sectionWork.classList.add("fadeInLeftBack", "hide");
  sectionContact.classList.remove("fadeInLeft");
  sectionContact.classList.add("fadeInLeftBack", "hide");
});

//Amimation for work section
work.addEventListener("click", () => {
  sectionWork.classList.add("animated", "fadeInLeft", "show");
  sectionWork.classList.remove("fadeInLeftBack", "hide");
  sectionAbout.classList.remove("fadeInLeft", "show");
  sectionAbout.classList.add("fadeInLeftBack", "hide");
  sectionBlog.classList.remove("fadeInLeft");
  sectionBlog.classList.add("fadeInLeftBack", "hide");
  sectionResume.classList.remove("fadeInLeft");
  sectionResume.classList.add("fadeInLeftBack", "hide");
  sectionContact.classList.remove("fadeInLeft");
  sectionContact.classList.add("fadeInLeftBack", "hide");
});

//Amimation for contact section
contact.addEventListener("click", () => {
  sectionContact.classList.add("animated", "fadeInLeft", "show");
  sectionContact.classList.remove("fadeInLeftBack", "hide");
  sectionAbout.classList.remove("fadeInLeft", "show");
  sectionAbout.classList.add("fadeInLeftBack", "hide");
  sectionBlog.classList.remove("fadeInLeft");
  sectionBlog.classList.add("fadeInLeftBack", "hide");
  sectionWork.classList.remove("fadeInLeft");
  sectionWork.classList.add("fadeInLeftBack", "hide");
  sectionResume.classList.remove("fadeInLeft");
  sectionResume.classList.add("fadeInLeftBack", "hide");
});

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

//Mixitup
const config = document.querySelector(".portfolio");
const mixer = mixitup(config);

//Lightbox
$('.captions').lightGallery();
$('.video-gallery').lightGallery();
$('.video-thumbnails').lightGallery({
  loadYoutubeThumbnail: true,
  youtubeThumbSize: 'default',
  loadVimeoThumbnail: true,
  vimeoThumbSize: 'thumbnail_medium',
});
$('.html5-videos').lightGallery();