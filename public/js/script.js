// // // Bootstrap Modal

// var myModal = document.getElementById('#myModal')
// var myInput = document.getElementById('#myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

// Bootstrap Modal

// let min = 0;
// let sec = 0;

// function myTimer() {
//   document.querySelector('#timer').innerText = `Last taken ${min}` + ` minutes` + ` and ${sec}` + ` seconds ago`;
//   sec++;
//   if (sec >= 60) {
//     sec = 0;
//     min++;
//   }
// }


// //Start the timer
// document.addEventListener('click', () => {
//   setInterval(myTimer, 1000);
// }, { once: true });
// {/* <div id="timer">click somewhere</div> */}




// document.querySelector('.days').addEventListener('click', newEvent)
// function newEvent(){
//   alert('add a function')
// }




// // /////////////////////////////////////////////////////////////////////////

// const date = new Date();

// const renderCalendar = () => {
//   date.setDate(1);

//   const monthDays = document.querySelector(".days");

//   const lastDay = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDate();

//   const prevLastDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     0
//   ).getDate();

//   const firstDayIndex = date.getDay();

//   const lastDayIndex = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDay();

//   const nextDays = 7 - lastDayIndex - 1;

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//   document.querySelector(".date p").innerHTML = new Date().toDateString();

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// };

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });

// renderCalendar();

//////////////////////////////////////////////////////////

// Call the Date object of javascript to get date time, etc.
// const date = new Date();
// //check in the console... lol
// // console.log(date)


// const renderCalendar = () => {
//       date.setDate(1);
  
//     const monthDays = document.querySelector(".days");
  
//     // defines the last day of a given month, so that months end in the right numbered day.
//     const lastDay = new Date(
//       date.getFullYear(),
//       date.getMonth() + 1,
//       0
//     ).getDate();
  
//     // Gets the last day of the current month.
//     const prevLastDay = new Date(
//       date.getFullYear(),
//       date.getMonth(),
//       0
//     ).getDate();
  
//     const firstDayIndex = date.getDay();
  
//     // will give the index of the last day of the month of the current month, to determine where to start a new "day" count for the roll to next month. 
//     const lastDayIndex = new Date(
//       date.getFullYear(),
//       date.getMonth() + 1,
//       0
//     ).getDay();
  
//     const nextDays = 7 - lastDayIndex - 1;

// // Use Date.getMonth to get current month index in a 0 base index of the year. 
// const month = date.getMonth();
// // Turn that into an array of the year, that includes all the months.


//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];


// // Get the month title of the calendar and name it the month that it currently is, and select the current month.
//   document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//   // And get the date of the current day by selecting the p and change into the current date as a String. 
//   document.querySelector(".date p").innerHTML = new Date().toDateString();

//   let days = "";

//   // figures out which days from the last month to show as dimmed in the front of the calendar of the current displayed month.
//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//   // changes the display of the date in the calendar for the day that is "today". 
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   // loop to determine the next days of the next month, after the last day of the current month, to dim out. 
//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// };

// // Click to go to the previous month. 
// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// // click to go to the next month. 
// document.querySelector(".next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });

// renderCalendar();


// ///////////////Newest Stolen Calendar. /////////////////////


// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let selectYear = document.getElementById("year");
// let selectMonth = document.getElementById("month");

// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// let monthAndYear = document.getElementById("monthAndYear");
// showCalendar(currentMonth, currentYear);


// function next() {
//     currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
//     currentMonth = (currentMonth + 1) % 12;
//     showCalendar(currentMonth, currentYear);
// }

// function previous() {
//     currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
//     currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
//     showCalendar(currentMonth, currentYear);
// }

// function jump() {
//     currentYear = parseInt(selectYear.value);
//     currentMonth = parseInt(selectMonth.value);
//     showCalendar(currentMonth, currentYear);
// }

// function showCalendar(month, year) {

//     let firstDay = (new Date(year, month)).getDay();
//     let daysInMonth = 32 - new Date(year, month, 32).getDate();

//     let tbl = document.getElementById("calendar-body"); // body of the calendar

//     // clearing all previous cells
//     tbl.innerHTML = "";

//     // filing data about month and in the page via DOM.
//     monthAndYear.innerHTML = months[month] + " " + year;
//     selectYear.value = year;
//     selectMonth.value = month;

//     // creating all cells
//     let date = 1;
//     for (let i = 0; i < 6; i++) {
//         // creates a table row
//         let row = document.createElement("tr");

//         //creating individual cells, filing them up with data.
//         for (let j = 0; j < 7; j++) {
//             if (i === 0 && j < firstDay) {
//                 let cell = document.createElement("td");
//                 let cellText = document.createTextNode("");
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
//             }
//             else if (date > daysInMonth) {
//                 break;
//             }

//             else {
//                 let cell = document.createElement("td");
//                 let cellText = document.createTextNode(date);
//                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
//                     cell.classList.add("bg-info");
//                 } // color today's date
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
//                 date++;
//             }


//         }

//         tbl.appendChild(row); // appending each row into calendar body.
//     }

// }

// ////////////////////////Newest Stolen Calendar//////////////////////////////




// most recent steal cal
var cal = {
  // (A) PROPERTIES
  // (A1) FLAGS & DATA
  sMon : false, // week start on monday
  data : null, // events for selected period
  sDay : 0, sMth : 0, sYear : 0, // selected day month year

  // (A2) MONTHS & DAY NAMES
  months : [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  days : ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],

  // (A3) HTML ELEMENTS
  hMth : null, hYear : null, // month/year selector
  hWrap : null, // calendar wrapper
  hFormWrap : null, hForm : null, // event form
  hfDate : null, hfTxt : null, hfDel : null, // form fields

  // (B) INIT CALENDAR
  init : () => {
    // (B1) GET HTML ELEMENTS
    cal.hMth = document.getElementById("calMonth");
    cal.hYear = document.getElementById("calYear");
    cal.hWrap = document.getElementById("calWrap");
    cal.hFormWrap = document.getElementById("calForm");
    cal.hForm = cal.hFormWrap.querySelector("form");
    cal.hfDate = document.getElementById("evtDate");
    cal.hfTxt = document.getElementById("evtTxt");
    cal.hfDel = document.getElementById("evtDel");

    // (B2) APPEND MONTHS/YEAR
    let now = new Date(), nowMth = now.getMonth();
    cal.hYear.value = parseInt(now.getFullYear());
    for (let i=0; i<12; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = cal.months[i];
      if (i==nowMth) { opt.selected = true; }
      cal.hMth.appendChild(opt);
    }

    // (B3) ATTACH CONTROLS
    cal.hMth.onchange = cal.draw;
    cal.hYear.onchange = cal.draw;
    cal.hForm.onsubmit = cal.save;
    document.getElementById("evtClose").onclick = () => cal.hFormWrap.close();
    cal.hfDel.onclick = cal.del;

    // (B4) START - DRAW CALENDAR
    if (cal.sMon) { cal.days.push(cal.days.shift()); }
    cal.draw();
  },

  // (C) DRAW CALENDAR FOR SELECTED MONTH
  draw : () => {
    // (C1) DAYS IN MONTH + START/END DAYS
    // note - jan is 0 & dec is 11
    // note - sun is 0 & sat is 6
    cal.sMth = parseInt(cal.hMth.value); // selected month
    cal.sYear = parseInt(cal.hYear.value); // selected year
    let daysInMth = new Date(cal.sYear, cal.sMth+1, 0).getDate(), // number of days in selected month
        startDay = new Date(cal.sYear, cal.sMth, 1).getDay(), // first day of the month
        endDay = new Date(cal.sYear, cal.sMth, daysInMth).getDay(), // last day of the month
        now = new Date(), // current date
        nowMth = now.getMonth(), // current month
        nowYear = parseInt(now.getFullYear()), // current year
        nowDay = cal.sMth==nowMth && cal.sYear==nowYear ? now.getDate() : null ;

    // (C2) LOAD DATA FROM LOCALSTORAGE
    cal.data = localStorage.getItem("cal-" + cal.sMth + "-" + cal.sYear);
    if (cal.data==null) {
      localStorage.setItem("cal-" + cal.sMth + "-" + cal.sYear, "{}");
      cal.data = {};
    } else { cal.data = JSON.parse(cal.data); }

    // (C3) DRAWING CALCULATIONS
    // (C3-1) BLANK SQUARES BEFORE START OF MONTH
    let squares = [];
    if (cal.sMon && startDay != 1) {
      let blanks = startDay==0 ? 7 : startDay ;
      for (let i=1; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && startDay != 0) {
      for (let i=0; i<startDay; i++) { squares.push("b"); }
    }

    // (C3-2) DAYS OF THE MONTH
    for (let i=1; i<=daysInMth; i++) { squares.push(i); }

    // (C3-3) BLANK SQUARES AFTER END OF MONTH
    if (cal.sMon && endDay != 0) {
      let blanks = endDay==6 ? 1 : 7-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && endDay != 6) {
      let blanks = endDay==0 ? 6 : 6-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }

    // (C4) "RESET" CALENDAR
    cal.hWrap.innerHTML = `<div class="calHead"></div>
    <div class="calBody">
      <div class="calRow"></div>
    </div>`;

    // (C5) CALENDAR HEADER - DAY NAMES
    wrap = cal.hWrap.querySelector(".calHead");
    for (let d of cal.days) {
      let cell = document.createElement("div");
      cell.className = "calCell";
      cell.innerHTML = d;
      wrap.appendChild(cell);
    }

    // (C6) CALENDAR BODY - INDIVIDUAL DAYS & EVENTS
    wrap = cal.hWrap.querySelector(".calBody");
    row = cal.hWrap.querySelector(".calRow");
    for (let i=0; i<squares.length; i++) {
      // (C6-1) GENERATE CELL
      let cell = document.createElement("div");
      cell.className = "calCell";
      if (nowDay==squares[i]) { cell.classList.add("calToday"); }
      if (squares[i]=="b") { cell.classList.add("calBlank"); }
      else {
        cell.innerHTML = `<div class="cellDate">${squares[i]}</div>`;
        if (cal.data[squares[i]]) {
          cell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
        }
        cell.onclick = () => { cal.show(cell); };
      }
      row.appendChild(cell);

      // (C6-2) NEXT ROW
      if (i!=(squares.length-1) && i!=0 && (i+1)%7==0) {
        row = document.createElement("div");
        row.className = "calRow";
        wrap.appendChild(row);
      }
    }
  },

  // (D) SHOW EDIT EVENT DOCKET FOR SELECTED DAY
  show : cell => {
    cal.hForm.reset();
    cal.sDay = cell.querySelector(".cellDate").innerHTML;
    cal.hfDate.value = `${cal.sDay} ${cal.months[cal.sMth]} ${cal.sYear}`;
    if (cal.data[cal.sDay] !== undefined) {
      cal.hfTxt.value = cal.data[cal.sDay];
      cal.hfDel.classList.remove("hide");
    } else { cal.hfDel.classList.add("hide"); }
    cal.hFormWrap.show();
  },

  // (E) SAVE EVENT
  save : () => {
    cal.data[cal.sDay] = cal.hfTxt.value;
    localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
    cal.draw();
    cal.hFormWrap.close();
    return false;
  },

  // (F) DELETE EVENT FOR SELECTED DATE
  del : () => { if (confirm("Delete event?")) {
    delete cal.data[cal.sDay];
    localStorage.setItem(`cal-${cal.sMth}-${cal.sYear}`, JSON.stringify(cal.data));
    cal.draw();
    cal.hFormWrap.close();
  }}
};
window.onload = cal.init;
// most recent steal cal.