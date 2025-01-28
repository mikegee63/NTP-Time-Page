const express = require('express');
const ntpClient = require('ntp-client');
const cors = require('cors');
const path = require('path');

const app = express();

const ntpServers = [
  "67.80.15.73", // Replace with your primary NTP server
  "0.north-america.pool.ntp.org",
  "1.north-america.pool.ntp.org",
];
let currentNtpServer = 0;


//this is for ntp lookups of time
async function getTimeFromNTP(ntpServerAddress) {
    try {
        const response = await fetch(`http://${ntpServerAddress}`);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        return new Date(data.receiveTimestamp);
      } catch (error) {
        console.error(`Error fetching time from ${ntpServerAddress}: ${error}`);
        throw error; 
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
      console.log("Trying next NTP server:", ntpServers[currentNtpServer]); // Log the actual server being tried
      res.status(500).json({ error: 'Failed to synchronize time' });
    }
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
