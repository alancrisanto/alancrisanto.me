// let daysNames = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];

// let months = [
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
// ];

// let d = new Date();

// let dayName = daysNamesNames[d.getDay()];
// let monthName = months[d.getMonth()]

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    };

    document.getElementById("update")
    .textContent = ` Last Update: ${new Date().toLocaleDateString("en-us", options)} ${new Date().toLocaleTimeString("en-US")}`
} catch (error) {
    alert("Error displaying time udpate")
}