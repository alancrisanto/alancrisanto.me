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