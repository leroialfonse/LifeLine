// ///////////// Delete for doctors??? //////////////////////////
const dayBtn = document.querySelectorAll('.days')
 Array.from(dayBtn).forEach((el) => 
{el.addEventListener('click', newEvent
 )})


  function newEvent() {

    alert('now add the ability to store an event, bruh!')
  }


// Call the Date object of javascript to get date time, etc.
const date = new Date();
//check in the console... lol
// console.log(date)


const renderCalendar = () => {
      date.setDate(1);
  
    const monthDays = document.querySelector(".days");
  
    // defines the last day of a given month, so that months end in the right numbered day.
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  
    // Gets the last day of the current month.
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
  
    const firstDayIndex = date.getDay();
  
    // will give the index of the last day of the month of the current month, to determine where to start a new "day" count for the roll to next month. 
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
  
    const nextDays = 7 - lastDayIndex - 1;

// Use Date.getMonth to get current month index in a 0 base index of the year. 
const month = date.getMonth();
// Turn that into an array of the year, that includes all the months.


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


// Get the month title of the calendar and name it the month that it currently is, and select the current month.
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  // And get the date of the current day by selecting the p and change into the current date as a String. 
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  // figures out which days from the last month to show as dimmed in the front of the calendar of the current displayed month.
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
  // changes the display of the date in the calendar for the day that is "today". 
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  // loop to determine the next days of the next month, after the last day of the current month, to dim out. 
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

// Click to go to the previous month. 
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

// click to go to the next month. 
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// document.querySelector(".days").addEventListener("click", newEvent)



  // document.querySelector('.days').addEventListener('click', () => {
  //   '#modelWindow'.modal('show');
 
  // })



renderCalendar();
