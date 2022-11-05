let data = JSON.parse(localStorage.getItem("assignments")) || [];
class lectureList {
  constructor() {}
  showLectureList() {
    display(data);
    function display(data) {
      document.querySelector(".section").innerHTML = "";
      data.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("lectures");
        div.innerHTML = `
          <div class="details">
          <span>${elem.title}</span>
          <button class="type">${elem.type}</button>
          <p><b>${elem.instructor}</b> scheduled <b>Assignment problem's</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
        <div><button class="new">New</button></div>
        `;
        document.querySelector(".section").append(div);
      });
    }
  }
  filterByTiltle(value) {
    let datas = data.filter((elem) => {
      return elem.title == value;
    });
    if (value == "All") {
      document.querySelector(".section").innerHTML = "";
      data.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("lectures");
        div.innerHTML = `
          <div class="details">
          <span>${elem.title}</span>
          <button class="type">${elem.type}</button>
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
        `;
        document.querySelector(".section").append(div);
      });
    } else {
      document.querySelector(".section").innerHTML = "";
      datas.forEach((elem, index) => {
        let div = document.createElement("div");
        div.classList.add("lectures");
        div.innerHTML = `
          <div class="details">
          <span>${elem.title}</span>
          <button class="type">${elem.type}</button>
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
        `;
        document.querySelector(".section").append(div);
      });
    }
  }
  filterByDate(values) {
    let database = data.filter((elem) => {
      return elem.schedule == values;
    });
    document.querySelector(".section").innerHTML = "";
    database.forEach((elem, index) => {
      let div = document.createElement("div");
      div.classList.add("lectures");
      div.innerHTML = `
          <div class="details">
          <span>${elem.title}</span>
          <button class="type">${elem.type}</button>
          <p><b>${elem.instructor}</b> scheduled <b>${elem.category}</b> at ${elem.schedule}
            - ${elem.time}</p>
        </div>
        `;
      document.querySelector(".section").append(div);
    });
  }
}
function showLecture() {
  let list = new lectureList();
  list.showLectureList();
}
showLecture();
function showData() {
  let emailData = JSON.parse(localStorage.getItem("currentUser"));
  let userData = JSON.parse(localStorage.getItem("currentType"));
  document.querySelector(".guest").innerHTML = `
    <p>${emailData} (${userData}) </p>
    `;
}
showData();
function filterTitle() {
  let value = document.getElementById("title").value;
  let tiltleFilter = new lectureList();
  tiltleFilter.filterByTiltle(value);
}
function filterDate() {
  let dateValue = document.getElementById("schedule").value;
  let filterDate = new lectureList();
  filterDate.filterByDate(dateValue);
}
function resetFilter() {
  window.location.reload();
}
