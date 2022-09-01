function vowels() {
  let str = document.getElementById("input").value;
  let vowels = /[aeiou]/gi;
  let result = str.match(vowels);
  console.log(result);
  if (result !== null) {
    document.getElementById("output").innerHTML =
      "vowels in the string are : " + result;
  }

  if (result == null) {
    console.log("There is no vowels");
    document.getElementById("output").innerHTML =
      "There is no vowels in the string!";
  }
}
