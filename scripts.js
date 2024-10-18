// Function to calculate days remaining until the event date
function calculateDaysRemaining() {
  const eventDate = new Date("2024-12-07");
  const today = new Date();
  const timeDiff = eventDate - today;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const daysElement = document.getElementById("days-remaining");

  if (daysRemaining > 0) {
    daysElement.textContent = `${daysRemaining} days to go`;
  } else if (daysRemaining === 0) {
    daysElement.textContent = "Today is the big day!";
  } else {
    daysElement.textContent = `${Math.abs(daysRemaining)} days ago`;
  }
}

// Function to add the event to Google Calendar or mobile native calendar
// Function to add the event to Google Calendar or mobile native calendar
function addToCalendar() {
  const event = {
    title: "Aniket & Upasana Wedding",
    location: "Atithya Party Plot",
    startDate: "2024-12-07T08:00:00",
    endDate: "2024-12-07T23:59:59",
    description: "Join us to celebrate the wedding of Aniket and Upasana.",
  };

  // Create Google Calendar URL
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;

  if (window.navigator && window.navigator.userAgent.indexOf("Mobile") > -1) {
    // Mobile calendar integration using iCalendar link
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
DTSTART:${event.startDate.replace(/[-:]/g, "")}
DTEND:${event.endDate.replace(/[-:]/g, "")}
END:VEVENT
END:VCALENDAR
`;
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "event.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Open Google Calendar for desktop
    window.open(calendarUrl, "_blank");
  }
}

// Call the function to calculate days remaining when the page loads
document.addEventListener("DOMContentLoaded", calculateDaysRemaining);

// Toggle Music
function toggleMusic() {
  var audio = document.getElementById("background-music");
  if (audio.paused) {
    audio.play();
    audio.volume = 0.1;
  } else {
    audio.pause();
  }
}

// Show the scroll up button after scrolling down
window.onscroll = function () {
  const scrollBtn = document.querySelector(".scroll-up-btn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll
  });
}
