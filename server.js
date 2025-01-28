const express = require('express');
const ntpClient = require('ntp-client');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '/')));

const NTP_SERVER = '67.80.15.73'; // Your NTP server
const PORT = process.env.PORT || 3000;

// Serve the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// NTP sync endpoint
app.get("/sync", (req, res) => {
  const requestReceivedAt = Date.now(); // timestamp on arrival

  ntpClient.getNetworkTime(NTP_SERVER, 123, (err, date) => {
    if (err) {
      console.error('NTP Error:', err);
      return res.status(500).json({ error: 'Failed to fetch NTP time' });
    }

    const serverProcessingTime = Date.now() - requestReceivedAt;

    res.json({
      time: date.toISOString(),
      serverProcessingTime: serverProcessingTime
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
