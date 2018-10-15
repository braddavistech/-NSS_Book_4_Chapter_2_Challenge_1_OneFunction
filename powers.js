let buttonPowers = document.querySelectorAll("button");
eventListener(buttonPowers);
document.querySelector("#activate-all").addEventListener("click", activateHandlerFunction)
document.querySelector("#deactivate-all").addEventListener("click", deactivateHandlerFunction)

function eventListener () {
  for (let i = 0; i < buttonPowers.length; i++){
    buttonPowers[i].addEventListener("click", powerFunction);
  }
}

function powerFunction () {
  if (event.target.id == "activate-flight"){
    let targetItem = document.getElementById("flight");
    targetItem.classList.replace("disabled", "enabled");
  } else if (event.target.id == "activate-mindreading"){
    let targetItem = document.getElementById("mindreading");
    targetItem.classList.replace("disabled", "enabled");
  } else if (event.target.id == "activate-xray"){
    let targetItem = document.getElementById("xray");
    targetItem.classList.replace("disabled", "enabled");
  }   
};

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