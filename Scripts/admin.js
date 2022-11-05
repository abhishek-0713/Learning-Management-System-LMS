let data = JSON.parse(localStorage.getItem("users")) || [];
let sData = JSON.parse(localStorage.getItem("users")) || [];
class userList {
  constructor() {}
  showUserList() {
    display(data);
    function display(data) {
      document.querySelector(".user-list").innerHTML = "";
      data.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("details");
        div.innerHTML = `
        <p>${elem.email}</p>
          <p>${elem.pass}</p>
          <p>${elem.usertype}</p>
        `;
        let div2 = document.createElement("div");
        let p = document.createElement("p");
        p.setAttribute("id", "remove");
        p.innerText = "Remove";
        p.addEventListener("click", () => {
          removeUser(elem, index);
        });
        div2.append(p);
        div.appendChild(div2);
        document.querySelector(".user-list").append(div);
      });
    }
    function removeUser(elem, index) {
      data.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(data));
      display(data);
    }
  }
  addStudentData(e, p, t) {
    this.email = e;
    this.pass = p;
    this.usertype = t;
    data.push(this);
    localStorage.setItem("users", JSON.stringify(data));
    this.showUserList();
  }
}
function showUser() {
  let list = new userList();
  list.showUserList();
}
showUser();
function addStudent() {
  event.preventDefault();
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  let t = document.getElementById("type").value;
  let student = new userList();
  student.addStudentData(e, p, t);
}
function showData() {
  let emailData = JSON.parse(localStorage.getItem("currentUser"));
  let userData = JSON.parse(localStorage.getItem("currentType"));
  document.querySelector(".guest").innerHTML = `
    <p>${emailData} (${userData})</p>
    `;
}
showData();
