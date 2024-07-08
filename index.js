var menuCounter = 0;
var VFG1Counter = 0;

function ChangeIcon(t) {
  if (t.id == "exploreMyWork") {
    document.getElementById("greaterThan").style.transform =
      "translateX(10px)";
    document.getElementById("greaterThan").style.transition = "0.7s";
  }
  else if (t.id == "workWithMe") {

    document.getElementById("greaterThan1").style.transform =
      "translateX(10px)";
    document.getElementById("greaterThan1").style.transition = "0.7s";

  } else if (t.id == "emailMe") {

    document.getElementById("greaterThan2").style.transform =
      "translateX(10px)";
    document.getElementById("greaterThan2").style.transition = "0.7s";

  }


}
function ResetIcon(t) {

  if (t.id == "exploreMyWork") {

    document.getElementById("greaterThan").style.transform =
      "translateX(0px)";
  }
  else if (t.id == "workWithMe") {


    document.getElementById("greaterThan1").style.transform =
      "translateX(0px)";

  } else if (t.id == "emailMe") {


    document.getElementById("greaterThan2").style.transform =
      "translateX(0px)";

  }


}

function displayMenu() {
  if (menuCounter % 2 == 0) {
    
    var delayInMilliseconds = 100; //1 second
    document.getElementById("menu-content").style.display = "inline-block";
setTimeout(function() {

    document.getElementById("menu-content").style.height = "180px";
    document.getElementById("menu-content").style.opacity = "1";
  //your code to be executed after 1 second
}, delayInMilliseconds);

   
    menuCounter++;
  } else {
    document.getElementById("menu-content").style.height = "0";
    document.getElementById("menu-content").style.opacity = "0";
    
    var delayInMilliseconds = 200; //1 second

setTimeout(function() {

    document.getElementById("menu-content").style.display = "none";
  //your code to be executed after 1 second
}, delayInMilliseconds);

    menuCounter++;
  }
}

function ChangeThisIcon(t) {
  if (t.id == "VFG1") {
    if (VFG1Counter % 2 == 0) {
      document.getElementById("invImg1").className = "visibleImages";
      document.getElementById("arrow1").src = "toUp.svg";
      VFG1Counter++;
    } else {
      document.getElementById("invImg1").className = "invisibleImages";
      document.getElementById("arrow1").src = "toDown.svg";
      VFG1Counter++;
    }
  }
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (window.pageYOffset >= 0 && window.pageYOffset <= 20) {

    document.querySelector("#middleOfBar").style.opacity = "1";

    document.querySelector("#hunterSpan").style.opacity = "1";
    document.querySelector("#hunterSpan").style.marginRight = "10px";
    document.querySelector("#hunterSpan").innerHTML = "Hunter";
    document.querySelector("#hunter").style.width = "130px";
  } else {

    document.querySelector("#hunterSpan").style.marginRight = "0px";
  }
  if (window.pageYOffset > 20 && window.pageYOffset <= 40) {

    document.querySelector("#middleOfBar").style.opacity = "0.7";

    document.querySelector("#hunterSpan").style.opacity = "0.8";

    document.querySelector("#hunterSpan").innerHTML = "Hunte";

    document.querySelector("#hunter").style.width = "113px";

  }
  if (window.pageYOffset > 40 && window.pageYOffset <= 60) {

    document.querySelector("#middleOfBar").style.opacity = "0.4";



    document.querySelector("#hunterSpan").style.opacity = "0.6";

    document.querySelector("#hunterSpan").innerHTML = "Hu";
    document.querySelector("#hunter").style.width = "84px";

  }
  if (window.pageYOffset > 60) {

    document.querySelector("#middleOfBar").style.opacity = "0";




    document.querySelector("#hunterSpan").innerHTML = "";
    document.querySelector("#hunter").style.width = "60px";

  }


  if (window.pageYOffset > 500 && window.pageYOffset < 1200) {

    document.querySelector("#hello").className = "MWF slideUp";
    document.querySelector("#hello").style.visibility = "visible";
  }

  if (window.pageYOffset > 1100 && window.pageYOffset < 1900) {
    document.querySelector("#AboutImage1").style.paddingRight = 0;

    document.querySelector("#thirdTitle").className = "slideUp";
    document.querySelector("#thirdTitle").style.visibility = "visible";

  }
  if (window.pageYOffset > 1400 && window.pageYOffset < 1900) {


    document.querySelector("#AboutImage2").style.paddingLeft = 0;
  }
  if (window.pageYOffset > 1900 && window.pageYOffset < 2500) {

    document.querySelector("#logoIpsum1").className = "logoIpsum slideUp";
    document.querySelector("#logoIpsum1").style.visibility = "visible";

  }
  if (window.pageYOffset > 2200 && window.pageYOffset < 2700) {

    document.querySelector("#logoIpsum2").className = "logoIpsum slideUp";
    document.querySelector("#logoIpsum2").style.visibility = "visible";

  }
  if (window.pageYOffset > 2400) {

    document.querySelector("#logoIpsum3").className = "logoIpsum slideUp";
    document.querySelector("#logoIpsum3").style.visibility = "visible";

  }
}