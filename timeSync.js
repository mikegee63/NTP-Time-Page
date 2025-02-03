<!-- Clock and Time Sync Code -->
  <script>
    // "offset" is computed via NTP so that Date.now() + offset gives the true UTC.
    let offset = 0;
    let resyncIntervalId;
    // If a ticker item is clicked, its info is stored in selectedTZ.
    // (If null, the main clock shows the original time.)
    let selectedTZ = null;

    async function syncTime() {
      try {
        const requestStart = Date.now();
        const response = await fetch("/sync");
        const data = await response.json();
        const requestEnd = Date.now();
        const roundTripTime = requestEnd - requestStart;
        const serverProcessingTime = data.serverProcessingTime;
        const networkLatency = roundTripTime - serverProcessingTime;
        const serverTime = new Date(data.time).getTime();
        offset = serverTime + (networkLatency / 2) - Date.now() - 26;

        let differenceSec = offset / 1000;
        let sign = differenceSec >= 0 ? "+" : "-";
        differenceSec = Math.abs(differenceSec);
        let uncertaintySec = (networkLatency / 4) / 1000;
        let differenceFormatted = `${sign}${differenceSec.toFixed(3)} seconds`;
        let uncertaintyFormatted = `±${uncertaintySec.toFixed(3)} seconds`;

        document.getElementById("difference").innerText =
          `Your system time compared to our Stratum 1 reference is ${differenceFormatted} (${uncertaintyFormatted}).`;
      } catch (error) {
        console.error("Failed to sync with NTP:", error);
      }
    }

    // Format a Date (computed from UTC) into a time string (with AM/PM)
    function formatTime(date) {
      let hours = date.getUTCHours();
      let minutes = date.getUTCMinutes();
      let seconds = date.getUTCSeconds();
      const amPm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      if (hours === 0) hours = 12;
      return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} ${amPm}`;
    }

    // Format a Date into a locale date string (using UTC as the timeZone)
    function formatDate(date) {
      return date.toLocaleDateString('en-US', {
        timeZone: 'UTC',
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    }

    function updateClock() {
      if (selectedTZ) {
        // Compute the target time by adding the selected zone’s offset (in minutes) to true UTC.
        let trueUTC = Date.now() + offset;
        let targetTime = new Date(trueUTC + selectedTZ.offsetMinutes * 60000);
        let timeStr = formatTime(targetTime);
        let parts = timeStr.split(" ");
        document.getElementById("clock").innerText = parts[0];
        document.getElementById("ampm").innerText = parts[1];
        document.getElementById("date").innerText = formatDate(targetTime);
      } else {
        // Default behavior: use local formatting.
        const now = new Date(Date.now() + offset);
        let hours = now.getHours();
        let minutes = String(now.getMinutes()).padStart(2, "0");
        let seconds = String(now.getSeconds()).padStart(2, "0");
        const amPm = hours >= 12 ? "pm" : "am";
        if (hours === 0) hours = 12;
        else if (hours > 12) hours -= 12;
        hours = String(hours).padStart(2, "0");
        document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
        document.getElementById("ampm").innerText = amPm;
        document.getElementById("date").innerText = now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        });
      }
    }

    function updateCityClocks() {
      const realNow = new Date(Date.now() + offset);
      document.getElementById("LA-time").innerText =
        realNow.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles" });
      document.getElementById("NY-time").innerText =
        realNow.toLocaleTimeString("en-US", { timeZone: "America/New_York" });
      document.getElementById("London-time").innerText =
        realNow.toLocaleTimeString("en-US", { timeZone: "Europe/London" });
      document.getElementById("Paris-time").innerText =
        realNow.toLocaleTimeString("en-US", { timeZone: "Europe/Paris" });
      document.getElementById("Beijing-time").innerText =
        realNow.toLocaleTimeString("en-US", { timeZone: "Asia/Shanghai" });
      document.getElementById("Tokyo-time").innerText =
        realNow.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
    }

    function tick() {
      updateClock();
      updateCityClocks();
      const now = new Date(Date.now() + offset);
      const ms = now.getMilliseconds();
      const msRemaining = 1000 - ms;
      setTimeout(() => requestAnimationFrame(tick), msRemaining);
    }

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        console.log("Tab is active again, resyncing immediately...");
        clearInterval(resyncIntervalId);
        syncTime().then(() => {
          resyncIntervalId = setInterval(syncTime, 300000);
        });
      }
    });

    window.onload = async () => {
      await syncTime();
      tick();
      resyncIntervalId = setInterval(syncTime, 300000);
    };
  </script>
