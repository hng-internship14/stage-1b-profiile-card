const readableEl = document.getElementById("readable-time");
const msEl = document.getElementById("time");

function updateTime() {
  const now = new Date();

  // Format: HH:MM:SS
  const time = now.toLocaleTimeString();

  readableEl.textContent = time;

  // Keep milliseconds for test (hidden)
  msEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);