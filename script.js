function short() {
    let number = document.getElementById('input').value;
  if (number >= 1000000000) {
    console.log((number / 1000000000).toFixed(1) + "B");
    document.getElementById("output").innerHTML = "The Shortform is: "+
      (number / 1000000000).toFixed(1) + "B";
  } else if (number >= 1000000) {
    console.log((number / 1000000).toFixed(1) + "M");
    document.getElementById("output").innerHTML =
      "The Shortform is: " + (number / 1000000).toFixed(1) + "M";
  }
  if (number >= 1000 && number <= 1000000) {
    console.log((number / 1000).toFixed(1) + "K");
    document.getElementById("output").innerHTML =
      "The Shortform is: " + (number / 1000).toFixed(1) + "K";
  } else if (number < 1000) {
    console.log(number / 1000 + "K");
    document.getElementById("output").innerHTML =
      "The Shortform is: " + number / 1000 + "K"; 
  }
  
}
