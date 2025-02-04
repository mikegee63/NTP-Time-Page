// Set your desired timezone offset in minutes relative to UTC.
// For example, Eastern Standard Time (EST) is UTC-5 hours = -300 minutes.
const timezoneOffsetInMinutes = -300; // Adjust as needed

function setClock() {
  // Get current time in UTC
  const nowUTC = new Date(new Date().toUTCString());
  
  // Adjust by the desired timezone offset:
  // Create a new Date that represents the target timezone.
  const now = new Date(nowUTC.getTime() + timezoneOffsetInMinutes * 60 * 1000);

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate degrees for each hand:
  const secondsDegrees = ((seconds / 60) * 360) + 90; // +90 to offset initial CSS position
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const hoursDegrees = ((hours % 12) / 12 * 360) + ((minutes/60)*30) + 90;

  // Select the hands
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  // Update the CSS transform properties
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Initialize clock and update every second
setClock();
setInterval(setClock, 1000);
