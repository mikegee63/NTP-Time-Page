/* Each time zone object contains:
     - abbr: abbreviation text to show
     - name: full time zone name
     - location: region or category (e.g. Military)
     - offset: a string like "UTC +5:30" (if a slash is present, the first value is used)
     - iana: IANA time zone identifier for DST support
*/
const timeZones = [
  { abbr: "A",    name: "Alfa Time Zone",                            location: "Military",                offset: "UTC +1", iana: "Etc/GMT-1" },
  { abbr: "ACDT", name: "Australian Central Daylight Time",          location: "Australia",               offset: "UTC +10:30", iana: "Australia/Adelaide" },
  { abbr: "ACST", name: "Australian Central Standard Time",          location: "Australia",               offset: "UTC +9:30", iana: "Australia/Adelaide" },
  { abbr: "ACT",  name: "Acre Time",                                 location: "South America",           offset: "UTC -5", iana: "America/Recife" },
  { abbr: "ACT",  name: "Australian Central Time",                   location: "Australia",               offset: "UTC +9:30", iana: "Australia/Darwin" },
  { abbr: "ACWST",name: "Australian Central Western Standard Time",  location: "Australia",               offset: "UTC +8:45", iana: "Australia/Eucla" },
  { abbr: "ADT",  name: "Arabia Daylight Time",                      location: "Asia",                    offset: "UTC +4", iana: "Asia/Dubai" },
  { abbr: "ADT",  name: "Atlantic Daylight Time",                    location: "North America Atlantic",  offset: "UTC -3", iana: "America/Halifax" },
  { abbr: "AEDT", name: "Australian Eastern Daylight Time",          location: "Australia",               offset: "UTC +11", iana: "Australia/Sydney" },
  { abbr: "AEST", name: "Australian Eastern Standard Time",          location: "Australia",               offset: "UTC +10", iana: "Australia/Brisbane" },
  { abbr: "AET",  name: "Australian Eastern Time",                   location: "Australia",               offset: "UTC +10:00 / +11:00", iana: "Australia/Sydney" },
  { abbr: "AFT",  name: "Afghanistan Time",                          location: "Asia",                    offset: "UTC +4:30", iana: "Asia/Kabul" },
  { abbr: "AKDT", name: "Alaska Daylight Time",                      location: "North America",           offset: "UTC -8", iana: "America/Anchorage" },
  { abbr: "AKST", name: "Alaska Standard Time",                      location: "North America",           offset: "UTC -9", iana: "America/Anchorage" },
  { abbr: "ALMT", name: "Alma-Ata Time",                             location: "Asia",                    offset: "UTC +6", iana: "Asia/Almaty" },
  { abbr: "AMST", name: "Amazon Summer Time",                        location: "South America",           offset: "UTC -3", iana: "America/Sao_Paulo" },
  { abbr: "AMST", name: "Armenia Summer Time",                       location: "Asia",                    offset: "UTC +5", iana: "Asia/Yerevan" },
  { abbr: "AMT",  name: "Amazon Time",                               location: "South America",           offset: "UTC -4", iana: "America/Sao_Paulo" },
  { abbr: "AMT",  name: "Armenia Time",                              location: "Asia",                    offset: "UTC +4", iana: "Asia/Yerevan" },
  // ... (other time zones)
];

// Function to parse an offset string (e.g. "UTC +10:30" or "UTC -5").
// (Kept for fallback purposes, but DST calculations will use the iana property)
function parseOffset(offsetStr) {
  let s = offsetStr.replace("UTC", "").trim();
  if (s === "") return 0;
  if (s.indexOf("/") !== -1) {
    s = s.split("/")[0].trim();
  }
  const sign = s[0] === "-" ? -1 : 1;
  s = s.substring(1);
  const parts = s.split(":");
  const hours = parseInt(parts[0], 10);
  const minutes = parts.length > 1 ? parseInt(parts[1], 10) : 0;
  return sign * (hours * 60 + minutes);
}

// Compute offsetMinutes for each time zone object (for legacy purposes).
timeZones.forEach(tz => {
  tz.offsetMinutes = parseOffset(tz.offset);
});

document.addEventListener('DOMContentLoaded', function() {
  const tickerContainer = document.querySelector('.ticker-container');
  const ticker = document.querySelector('.ticker');
  
  // Create a ticker item for each time zone.
  timeZones.forEach(tz => {
    const item = document.createElement('div');
    item.className = 'ticker-item';
    item.innerText = tz.abbr;
    // Store tooltip, offset, full name, and iana in data attributes.
    item.setAttribute('data-tooltip', `${tz.name} – ${tz.location} (${tz.offset})`);
    item.setAttribute('data-offset', tz.offsetMinutes);
    item.setAttribute('data-fullname', tz.name);
    item.setAttribute('data-iana', tz.iana);
    ticker.appendChild(item);
  });
  
  // Duplicate the ticker content for seamless scrolling.
  ticker.innerHTML += ticker.innerHTML;

  let isDragging = false;
  let startX;
  let startTransform;
  const autoScrollSpeed = 0.5; // pixels per frame
  let paused = false;

  function getTranslateX(element) {
    const style = window.getComputedStyle(element);
    if (style.transform === 'none') return 0;
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  function animateTicker() {
    if (!paused && !isDragging) {
      const currentX = getTranslateX(ticker);
      const newX = currentX - autoScrollSpeed;
      ticker.style.transform = `translateX(${newX}px)`;
      if (Math.abs(newX) >= ticker.offsetWidth / 2) {
        ticker.style.transform = 'translateX(0px)';
      }
    }
    requestAnimationFrame(animateTicker);
  }

  tickerContainer.addEventListener('mouseenter', () => {
    paused = true;
  });
  tickerContainer.addEventListener('mouseleave', () => {
    paused = false;
  });

  tickerContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    ticker.style.transition = 'none';
    startX = e.pageX;
    startTransform = getTranslateX(ticker);
    paused = true;
  });
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX;
    ticker.style.transform = `translateX(${startTransform + deltaX}px)`;
  });
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      ticker.style.transition = '';
      paused = false;
    }
  });

  tickerContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    ticker.style.transition = 'none';
    startX = e.touches[0].pageX;
    startTransform = getTranslateX(ticker);
    paused = true;
  });
  tickerContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].pageX - startX;
    ticker.style.transform = `translateX(${startTransform + deltaX}px)`;
  });
  tickerContainer.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      ticker.style.transition = '';
      paused = false;
    }
  });

  // Global tooltip handling
  const globalTooltip = document.getElementById('global-tooltip');
  const tickerItems = document.querySelectorAll('.ticker-item');
  tickerItems.forEach(item => {
    item.addEventListener('mouseenter', function(e) {
      const tooltipText = item.getAttribute('data-tooltip');
      globalTooltip.innerText = tooltipText;
      globalTooltip.style.display = 'block';
      globalTooltip.style.left = (e.pageX + 10) + 'px';
      globalTooltip.style.top = (e.pageY - 40) + 'px';
    });
    item.addEventListener('mousemove', function(e) {
      globalTooltip.style.left = (e.pageX + 10) + 'px';
      globalTooltip.style.top = (e.pageY - 40) + 'px';
    });
    item.addEventListener('mouseleave', function() {
      globalTooltip.style.display = 'none';
    });
    // On click, update the main clock's time zone using the full object.
    item.addEventListener('click', function() {
      const iana = item.getAttribute('data-iana');
      selectedTZ = {
        abbr: item.innerText.trim(),
        name: item.getAttribute('data-fullname'),
        iana: iana
      };
      tickerItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  animateTicker();
});
