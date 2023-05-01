function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:47,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items:1
        },
        1160:{
            items:2
        }
    }
})