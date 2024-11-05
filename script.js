//your JS code here. If required.
function startClock() {
    const timerElement = document.getElementById("timer");

    function updateClock() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        timerElement.textContent = `${date} ${time}`;
    }

    // Update the clock immediately and then every 1 second
    updateClock();
    setInterval(updateClock, 1000);
}

// Start the clock when the page loads
document.addEventListener("DOMContentLoaded", startClock);
