const express = require('express');
const ntpClient = require('ntp-client');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '/')));

// server.js
const ntpServers = [
    "67.80.15.73", // Your existing NTP server (replace with the actual value)
    "0.north-america.pool.ntp.org",
    "1.north-america.pool.ntp.org",
    const PORT = process.env.PORT || 3000;
  ];
  let currentNtpServer = 0;


  async function getTimeFromNTP(ntpServerAddress) {
    try {
      const response = await fetch(`http://${ntpServerAddress}`); // Use fetch API for HTTP requests
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
      const data = await response.json(); // Assuming NTP server returns JSON. Adjust if needed.
      // Process the returned time data, handle offsets, etc. as needed
    return new Date(data.receiveTimestamp);
    } catch (error) {
      console.error(`Error fetching time from ${ntpServerAddress}: ${error}`);
      throw error; // Re-throw the error to be handled by the calling function
    }

}




app.get('/sync', async (req, res) => {
  const startTime = Date.now();
  try {

    const serverTime = await getTimeFromNTP(ntpServers[currentNtpServer]);


    const endTime = Date.now();
    res.json({ time: serverTime, serverProcessingTime: endTime - startTime });
  } catch (error) {
        console.error("NTP Sync Error:", error);

        currentNtpServer = (currentNtpServer + 1) % ntpServers.length;
        console.log("Trying next NTP server:", currentNtpServer)


      res.status(500).json({ error: 'Failed to synchronize time' });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
