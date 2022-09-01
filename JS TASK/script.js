var users = [];
var image = "";
var tempCards = "";
var selected = null;
var smallImage = document.getElementById("small_image");

var profile = "";
function onLoad() {
  getDataFromLocal();
  displayUsers();
}
onLoad();
function getDataFromLocal() {
  users = JSON.parse(localStorage.getItem("users") ?? "[]");
}

function setDataToLocal() {
  localStorage.setItem("users", JSON.stringify(users));
}

function alertUser(image) {
  smallImage.innerHTML = image;
  document.getElementById("alert").innerHTML = "Your avatar is ready!";
  document.getElementById("submit").disabled = false;
  // window.alert("Your avatar is ready!");
}

function displayLoading() {
  smallImage.innerHTML = `<img src="./Assets/loading.gif" />
    `;
}

function getavatar() {
  let count = Math.floor(Math.random() * 1000);
  count += 1;
  console.log(count);
  let file = "https://api.multiavatar.com/" + count + '"';
  displayLoading();
  fetch(file)
    .then((x) => x.text())
    .then((y) => {
      image = y;
      console.log(image);

      alertUser(image);
    });
  if (image === "") {
    document.getElementById("submit").disabled = false;
    
  }
}

function onSubmit(image) {
  var name = document.getElementById("name").value;
  var category = document.getElementById("category").value;
  var type = document.getElementById("type").value;
  profile = image;
  var discription = document.getElementById("discription").value;

  if (name !== "" && category !== "" && type !== "" && image !== "") {
    let tempObj = {
      name: name,
      category: category,
      type: type,
      profile: image,
      discription: discription,
    };
    console.log(selected);

    if (selected == null) {
      users.push(tempObj);
    } else {
      updateRecord();
    }
    setDataToLocal();
    displayUsers();
    // filterdUsers();
    reset();
    document.getElementById("alert").style.display = "none";
    // window.location.reload();
    
  } else {
    document.getElementById("alert").innerHTML =
      "please fill all mendatory fields!";
      // smallImage.innerHTML = image;
  }
  // document.getElementById("alert").innerHTML = "";
  // document.getElementById("small_image").innerHTML = "";
  // image = "";
    
}

function displayUsers() {
  let tempCards = "";
  let new_card = "";
  profile = "";
  // console.log(users[0].profile);

  Object.keys(users).map(function (key) {
    new_card =
      `<div id="card">` +
      `<p id="card_name">` +
      `NAME : ` +
      users[key].name +
      `</p>` +
      `<div id="card_body">` +
      `<div id="api">
                ` +
      users[key].profile +
      `
            </div>` +
      `<table id='card_details'>
          <td>TYPE : ` +
      users[key].type +
      `</td>
          <td>CATAGORY : ` +
      users[key].category +
      `</td>
          <td>DISCRIPTION : ` +
      `</td><td>` +
      users[key].discription +
      `</td>
   </table>` +
      `</div>` +
      ` <div id="card_footer">
            <button onclick="onEdit('${key}')">EDIT</button>
            <button onclick="onDelete('${key}')">DELETE</button>
        </div>` +
      `</div>`;
    tempCards += new_card;
  });
  document.getElementById("cardContainer").innerHTML = tempCards;
  document.getElementById("remove_all").style.display = "block";
}

function onEdit(x) {
  console.log(x);
  selected = x;
  document.getElementById("name").value = users[x].name;
  document.getElementById("category").value = users[x].category;
  document.getElementById("type").value = users[x].type;
  document.getElementById("discription").value = users[x].discription;

  document.getElementById("small_image").innerHTML = users[x].profile;
  image = users[x].profile;
}
function updateRecord(index) {
  console.log(index);
  if (
    (users[selected].name !== "" &&
      users[selected].category !== "" &&
      users[selected].type !== "" &&
      users[selected].profile !== "") ||
    image !== ""
  ) {
    users[selected].name = document.getElementById("name").value;
    users[selected].category = document.getElementById("category").value;
    users[selected].type = document.getElementById("type").value;
    users[selected].discription = document.getElementById("discription").value;
    users[selected].profile = image;
  }
  console.log(users[selected]);
  displayUsers();
}

function filterdUsers(str) {
  let tempCards = "";
  let new_card = "";
  Object.keys(users).map(function (key, index) {
    if (users[key].category === str) {
      console.log(users[key]);
      document.getElementById("cardContainer").innerHTML += new_card =
        `<div id="card">` +
        `<p id="card_name">` +
        `NAME : ` +
        users[key].name +
        `</p>` +
        `<div id="card_body">` +
        `<div id="api">
                ` +
        users[key].profile +
        `
            </div>` +
        `<table id='card_details'>
          <td>TYPE : ` +
        users[key].type +
        `</td>
          <td>CATAGORY : ` +
        users[key].category +
        `</td>
          <td>DISCRIPTION : ` +
        `</td><td>` +
        users[key].discription +
        `</td>
   </table>` +
        `</div>` +
        ` <div id="card_footer">
            <button onclick="onEdit('${key}')">EDIT</button>
            <button onclick="onDelete('${key}')">DELETE</button>
        </div>` +
        `</div>`;
      tempCards += new_card;
      document.getElementById("cardContainer").innerHTML = tempCards;
    } else if (users[key].category !== str) {
      document.getElementById("cardContainer").innerHTML = tempCards;
    }
  });
  document.getElementById("remove_all").style.display = "none";
}

function removeAll() {
  localStorage.clear();
  getDataFromLocal();
  displayUsers();
}
function reset() {
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("type").value = "";
  document.getElementById("discription").value = "";
  displayUsers();
}
function onDelete(index) {
  var temp = "";
  temp = users[index].category;
  if (index > 0) {
    console.log(index);
    users.splice(index, 1);
    filterdUsers(temp);
  } else if (index == 0) {
    console.log(index);
    users.splice(index, 1);
    filterdUsers(temp);
  }
  setDataToLocal();

  // displayUsers();
}
