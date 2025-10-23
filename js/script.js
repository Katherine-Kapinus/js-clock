const secondHand = document.querySelector('.second');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds * 6) - 90; // 360 degrees / 60 seconds = 6 degrees per second
    const minutesDegrees = (minutes * 6) + (seconds / 60) * 6 - 90; // 360 degrees / 60 minutes = 6 degrees per minute
    const hoursDegrees = (hours % 12) * 30 - 90; // 360 degrees / 12 hours = 30 degrees per hour
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(now);
}

setInterval(setDate, 1000); // Call setDate every second