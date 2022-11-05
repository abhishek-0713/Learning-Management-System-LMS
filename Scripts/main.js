class user {
  constructor() {}
  login(useremail, userpass, us) {
    let users = JSON.parse(localStorage.getItem("users"));
    let data = true;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email === useremail &&
        users[i].pass === userpass &&
        users[i].usertype === us
      ) {
        data = true;
        localStorage.setItem("currentUser", JSON.stringify(useremail));
        localStorage.setItem("currentType", JSON.stringify(us));
        break;
      } else {
        data = false;
      }
      if (data == true) {
        break;
      }
    }
    if (data == true) {
      if (us == "student") {
        window.location = "user.html";
      } else {
        window.location = "admin.html";
      }
    } else {
      alert("Wrong Credentials");
    }
  }
}
function loginUser() {
  event.preventDefault();
  let useremail = document.getElementById("email").value;
  let userpass = document.getElementById("password").value;
  let us = document.getElementById("user").value;
  let User = new user();
  User.login(useremail, userpass, us);
}
