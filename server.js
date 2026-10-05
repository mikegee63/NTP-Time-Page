const express = require('express');
const ntpClient = require('ntp-client');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '/')));

const ntpServers = [
  '192.168.1.99', // LAN stratum 1 NTP server
  'pool.ntp.org', // Fallback DDNS hostname
];
let currentNtpServer = 0;

const PORT = process.env.PORT || 3000;

// Serve the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// NTP sync endpoint
app.get("/sync", (req, res) => {
  const requestReceivedAt = Date.now();

  const attemptNTP = (serverIndex) => {
    ntpClient.getNetworkTime(ntpServers[serverIndex], 123, (err, date) => {
      if (err) {
        console.error(`NTP Error (${ntpServers[serverIndex]}):`, err);
        const nextServerIndex = (serverIndex + 1) % ntpServers.length; // Try the next server
        if(nextServerIndex == 0) {
             return res.status(500).json({ error: 'Failed to fetch NTP time from primary and backup servers' });
        } else {
           console.log(`Trying backup NTP server: ${ntpServers[nextServerIndex]}`);
           attemptNTP(nextServerIndex)
        }


      } else {
        const serverProcessingTime = Date.now() - requestReceivedAt;
        res.json({
          time: date.toISOString(),
          serverProcessingTime: serverProcessingTime,
        });
      }
    });
  }


  attemptNTP(currentNtpServer)
});


app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on port ${PORT}`);
});
