const monthNames = [
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

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const specialMoments = [
    { date: "2024-07-04", name: "Independence Day", image: "images/fireworks.jpg" },
    { date: "2024-12-25", name: "Christmas", image: "images/christmas-tree.jpg" },
    // Add more special moments here
];

const importantDates = [
    { date: "2024-08-15", name: "Birthday", image: "images/birthday-cake.jpg" },
    { date: "2024-10-10", name: "Meeting", image: "images/meeting.jpg" },
    // Add more important dates here
];

const monthYearElement = document.getElementById("month-year");
const daysElement = document.querySelector(".days");

function generateCalendar(date = new Date()) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Get the number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Clear previous days
    daysElement.innerHTML = "";

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day");
        daysElement.appendChild(emptyCell);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;

        // Check for special moments and important dates
        const specialMoment = specialMoments.find(
            (moment) => moment.date === `${currentYear}-${currentMonth + 1}-${i}`
        );
        const importantDate = importantDates.find(
            (date) => date.date === `${currentYear}-${currentMonth + 1}-${i}`
        );

        if (specialMoment) {
            day.classList.add("special-day");
            const img = document.createElement("img");
            img.src = specialMoment.image;
            day.appendChild(img);
            day.title = specialMoment.name;
        } else if (importantDate) {
            day.classList.add("important-day");
            const img = document.createElement("img");
            img.src = importantDate.image;
            day.appendChild(img);
            day.title = importantDate.name;
        }

        daysElement.appendChild(day);
    }
}

generateCalendar();

// Optional: Add navigation buttons
const prevMonthButton = document.createElement("button");
prevMonthButton.textContent = "Previous";
prevMonthButton.addEventListener("click", () => {
    const currentDate = new Date(monthYearElement.textContent);
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
});

const nextMonthButton = document.createElement("button");
nextMonthButton.textContent = "Next";
nextMonthButton.addEventListener("click", () => {
    const currentDate = new Date(monthYearElement.textContent);
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
});

// Add navigation buttons to the DOM (optional)
// document.body.appendChild(prevMonthButton);
// document.body.appendChild(nextMonthButton);
