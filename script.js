const currentDate = document.querySelector(".current-date");
   daysTag = document.querySelector(".days");
   prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
    let firsetDayOfMonth = new Date(currYear, currMonth, 1).getDay();

let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();

let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

let liTag = '';

for (let i = firsetDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
}

for (let i = 1; i <= lastDateofMonth; i++) {


let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";

    liTag += `<li class="${isToday}">${i}</li>`;
}

for (let i = lastDayofMonth; i < 6; i++) {

    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
}

currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();


prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {

     currMonth = icon.id == "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
renderCalendar();


});


});

//Modal


let modal = document.querySelector(".modal")
let closebtn = document.querySelector(".modal_close")
const cancel = document.querySelector(".cancel")

closebtn.addEventListener("click", () => {
    modal.classList.remove("active")
})

cancel.addEventListener("click", () => {
    modal.classList.remove("active")
})

const selectorday = document.querySelectorAll(".days li")

selectorday.forEach(li => {
    li.addEventListener("click", () => {
        modal.classList.add("active")
    })
})




