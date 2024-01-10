

var navList = document.getElementById('navList');
const web = document.getElementById('web')
const mobile = document.getElementById('mobile')
const showClient = document.getElementById('showClient')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const isMobile = navigator.userAgentData.mobile;

// navbar  
function showList() {
  navList.classList.toggle('showNav');
}

// for webClient and mobile client
if (isMobile) {
  web.style.display = 'none';
} else {
  mobile.style.display = 'none';
}


function show() {
  showClient.classList.toggle('showClient')
}

// Financial management show hide logic

function management(id) {
  id.classList.toggle('ManagementshowBtn')
}


// image slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// accordion section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}