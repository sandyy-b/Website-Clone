// var acc = document.getElementsByClassName("accordion");
// // let i;

// for (var i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("panel");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }





// Navigation Bar Change on Scroll

function changeBackground() {
    let navBar = document.getElementById("nav");
    let scroll = window.scrollY;
    if(scroll > 0){
        navBar.classList.add("navBgColor");
    }
    else{
        navBar.classList.remove("navBgColor");
    }
}

window.addEventListener("scroll",changeBackground);