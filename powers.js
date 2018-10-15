document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);
document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction)
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)
document.querySelector("#activate-all").addEventListener("click", activateHandlerFunction)
document.querySelector("#deactivate-all").addEventListener("click", deactivateHandlerFunction)

function flightHandlerFunction () {
  var flightClass = document.getElementById("flight");
  flightClass.classList.replace("disabled", "enabled");
}

function mindHandlerFunction () {
  var mindClass = document.getElementById("mindreading");
  mindClass.classList.replace("disabled", "enabled");
}

function xrayHandlerFunction () {
  var xrayClass = document.getElementById("xray");
  xrayClass.classList.replace("disabled", "enabled");
}

function activateHandlerFunction () {
  var activeClass = document.getElementsByClassName("power");
  for (let i = 0; i < activeClass.length; i++) {
    activeClass[i].classList.replace("disabled", "enabled");
  }
}

function deactivateHandlerFunction () {
  var deactiveClass = document.getElementsByClassName("power");
  for (let i = 0; i < deactiveClass.length; i++) {
    deactiveClass[i].classList.replace("enabled", "disabled");
  }
}