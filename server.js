const express = require('express');
const ntpClient = require('ntp-client');
const cors = require('cors');

const app = express();
app.use(cors());

const NTP_SERVER = '67.80.15.73'; // Your NTP GPS time server
const PORT = process.env.PORT || 3000;

app.get('/time', (req, res) => {
    ntpClient.getNetworkTime(NTP_SERVER, 123, (err, date) => {
        if (err) {
            console.error('NTP Error:', err);
            return res.status(500).json({ error: 'Failed to fetch NTP time' });
        }
        res.json({ time: date.toISOString() });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
