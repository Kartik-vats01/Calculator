const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";
let resetNext = false;

buttons.forEach(btn => {
  btn.addEventListener("click", () => handleInput(btn.innerText));
});

function handleInput(value){
  if(value === "AC"){
    currentValue = "";
    display.innerText = "0";
    return;
  }

  if(value === "DEL"){
    currentValue = currentValue.slice(0, -1);
    display.innerText = currentValue || "0";
    return;
  }

  if(value === "="){
    try{
      currentValue = eval(currentValue).toString();
      display.innerText = currentValue;
      resetNext = true;
    }catch{
      display.innerText = "Error";
      currentValue = "";
    }
    return;
  }

  if(resetNext){
    currentValue = "";
    resetNext = false;
  }

  currentValue += value;
  display.innerText = currentValue;
}
