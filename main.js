//==============================================================================================
//      main.js FOR U05 HOMEWORK FULLSTACK DEV BOOTCAMP
//      https://github.com/epowelldev/
//==============================================================================================

// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

//==============================================================================================

// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
let currentDay = $("#currentDay");

// THEN the current day, and time, is displayed at the top of the calendar
function currentTime() {
  let day = moment().format("MMM Do YYYY, HH:mm:ss");
  currentDay.text(day);
}
//keep the time running
setInterval(currentTime, 1000);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function updatePPFColor() {
  let currentHour = moment().format("H");
  for (let i = 09; i <= 17; i++) {
    if (i < currentHour) {
      $("#" + i).addClass("past");
    } else if (i == currentHour) {
      $("#" + i).addClass("present");
    } else if (i > currentHour) {
      $("#" + i).addClass("future");
    }
  }
};

updatePPFColor();

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
$(".saveBtn").click(function() {
  let timeIndex = $(this).parent().attr("id");
  let daySchedule = $(this).parent().find("textarea").val();
  localStorage.setItem(timeIndex, daySchedule);

  console.log(timeIndex, daySchedule);
});

// WHEN I refresh the page
// THEN the saved events persist
function getStoredSchedule() {
  for(let i = 9; i <= 17; i++) {
    let storedSchedule = localStorage.getItem(i);
    $("#"+ i).find("textarea").text(storedSchedule);
  }
}

getStoredSchedule();

//==============================================================================================
