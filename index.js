// On Page Load

window.addEventListener('load', function () {
    displaySimpleSiteSubscriptionsAndPaymentFaq();
});

// Navigation Bar Change on Scroll

function changeBackground() {
    let navBar = document.getElementById("nav");
    let scroll = window.scrollY;
    if (scroll > 0) {
        navBar.classList.add("navBgColor");
    }
    else {
        navBar.classList.remove("navBgColor");
    }
}
window.addEventListener("scroll", changeBackground);


// To Redirect the Social Links in the footer to Appwrk Site

function redirectSocialLinks() {
    window.location = ("https://appwrk.com/");
}

// To Display FAQ's of SimpleSite subscriptions and Payment and hide the FAQ's of General use of SimpleSite

function displaySimpleSiteSubscriptionsAndPaymentFaq() {
    let btn = document.getElementById("simpleSiteSubscriptionsAndPaymentBtn");
    document.getElementById("faqPrimary").style.display = 'block';
    document.getElementById("faqSecondry").style.display = 'none';
    btn.style.backgroundColor = 'rgb(186, 58, 22)';
    btn.style.color = 'white';
    document.getElementById("generalUseOfSimpleSiteBtn").style.background = '#EFEFEF';
    document.getElementById("generalUseOfSimpleSiteBtn").style.color = 'black';
}

// to Display FAQ's of General use of SimpleSite and hide the FAQ's of SimpleSite subscriptions and Payment 

function displayGeneralUseOfSimpleSite() {
    let btn = document.getElementById("generalUseOfSimpleSiteBtn");
    document.getElementById("faqPrimary").style.display = 'none';
    document.getElementById("faqSecondry").style.display = 'block';
    btn.style.backgroundColor = 'rgb(186, 58, 22)';
    btn.style.color = 'white';
    document.getElementById("simpleSiteSubscriptionsAndPaymentBtn").style.background = '#EFEFEF';
    document.getElementById("simpleSiteSubscriptionsAndPaymentBtn").style.color = 'black';
}

// To Enable one FAQ to open at a time

function openFaqQues(e) {
    if (document.querySelector('[for="' + e + '"]').classList.contains('faqOpen') == true) {
        document.querySelector('[for="' + e + '"]').classList.remove('faqOpen');    
    }
    else {
        var queslabl = document.querySelectorAll('.faqMargin label');
        for (let i = 0; i < queslabl.length; i++) {
            // if(){

            // }
            queslabl[i].classList.remove("faqOpen")

        }
        document.querySelector('[for="' + e + '"]').classList.add('faqOpen');
    }


}
