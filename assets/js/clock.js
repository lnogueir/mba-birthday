// Update the count down every 1 second
var interval = setInterval(function() {
    // set dates
    var startDate = new Date(new Date(start).toISOString().substr(0, 10));
    var endingDate = new Date();
    day = endingDate.getDate() - 1;
    endingDate.setDate(day);
    endingDate = endingDate.toISOString().substr(0, 10);
    //calculate differences
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
      const swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }

    // Get today's date and time
    var now = new Date();

    // Output the result in the elements
    if (!document.getElementById("year")) {
      clearInterval(interval);
      return;
    }
    if (document.getElementById("year")) {
      document.getElementById("year").innerHTML = yearDiff;
    }
    if (document.getElementById("month")) {
      document.getElementById("month").innerHTML = monthDiff; 
    }
    if (document.getElementById("day")) {
      document.getElementById("day").innerHTML = dayDiff;
    }
    if (document.getElementById("hour")) {
      document.getElementById("hour").innerHTML = now.getHours();
    }
    if (document.getElementById("min")) {
      document.getElementById("min").innerHTML = now.getMinutes();
    }
    if (document.getElementById("sec")) {
      document.getElementById("sec").innerHTML = now.getSeconds();
    }
}, 1000);
