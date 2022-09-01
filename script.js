const object = {
  1: {
    operation: "success",
    color: "blue",
    place: "mumbai",
  },
  2: {
    operation: "failed",
    color: "yellow",
    place: "chennai",
  },
  3: {
    operation: "success",
    color: "red",
    place: "bangalore",
  },
  4: {
    operation: "failed",
    color: "navy",
    place: "kolkatta",
  },
  5: {
    operation: "failed",
    color: "orange",
    place: "hyderabad",
  },
  6: {
    operation: "success",
    color: "purple",
    place: "delhi",
  },
};

Object.keys(object).map(function (key, index) {
  if (object[key].operation === "success") {
    object[key].color = "green";
    console.log(object[key]);
    document.getElementById("output").innerHTML +=
      "<br>" +
      "<ol>" +
      "OPERATION : " +
      "<b>" +
      object[key].operation +
      "</b>" +
      "</ol>" +
      "<br>" +
      "<li>" +
      "COLOR  : " +
      object[key].color +
      "</li>" +
      "<br>" +
      "<li>" +
      "PLACE  : " +
      object[key].place +
      "</li>" +
      "<br><br>";
  }
});
