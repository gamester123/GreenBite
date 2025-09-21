// ===== BREATHING EXERCISE =====
const ripple = document.querySelector(".ripple-container");
const breathingText = document.getElementById("breathing-text");
const breathBtn = document.getElementById("start-breathing");

let breathingInterval = null;
let active = false;

function startBreathing() {
  let phase = 0; // 0=Inhale, 1=Hold, 2=Exhale
  breathingText.textContent = "Inhale...";
  ripple.classList.add("inhale");

  breathingInterval = setInterval(() => {
    if (phase === 0) {
      breathingText.textContent = "Hold...";
      ripple.classList.remove("inhale", "exhale");
      ripple.classList.add("hold");
      phase = 1;
    } else if (phase === 1) {
      breathingText.textContent = "Exhale...";
      ripple.classList.remove("inhale","hold");
      ripple.classList.add("exhale");
      phase = 2;
    } else {
      breathingText.textContent = "Inhale...";
      ripple.classList.remove("exhale","hold");
      ripple.classList.add("inhale");
      phase = 0;
    }
  }, 4000); // every 4s
}

breathBtn.addEventListener("click", () => {
  if (active) {
    clearInterval(breathingInterval);
    breathingInterval = null;
    ripple.classList.remove("inhale","exhale","hold");
    breathingText.textContent = "Ready?";
    breathBtn.textContent = "Start";
    active = false;
  } else {
    startBreathing();
    breathBtn.textContent = "Stop";
    active = true;
  }
});


// ===== Meditation Timer =====
const timeInput = document.getElementById("time");
const startBtn = document.getElementById("startBtn");   // ✅ matches HTML
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const timerText = document.getElementById("timer-text");

let timerInterval = null;
let remainingTime = 0;
let isPaused = false;

// --- Start Timer ---
startBtn.addEventListener("click", () => {
  let minutes = parseInt(timeInput.value);
  if (!minutes || minutes <= 0) {
    alert("Please enter a valid duration!");
    return;
  }
  startTimer(minutes * 60);
});

function startTimer(duration) {
  clearInterval(timerInterval);
  remainingTime = duration;
  isPaused = false;
  updateDisplay();

  timerInterval = setInterval(() => {
    if (!isPaused) {
      remainingTime--;
      updateDisplay();

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        remainingTime = 0;
        updateDisplay();

        // Optional: hook into overlay + completed sessions
        // showSessionComplete();
        trackSession();
      }
    }
  }, 1000);
}

// --- Pause/Resume ---
pauseBtn.addEventListener("click", () => {
  if (!remainingTime) return;
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
});

// --- Stop Timer ---
stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  remainingTime = 0;
  updateDisplay();
  pauseBtn.textContent = "Pause"; // reset text
});

// --- Update Display ---
function updateDisplay() {
  const mins = Math.floor(remainingTime / 60).toString().padStart(2, "0");
  const secs = (remainingTime % 60).toString().padStart(2, "0");
  timerText.textContent = `${mins}:${secs}`;
}

// ===== AMBIENT SOUNDS =====
const soundButtons = document.querySelectorAll('.sound-btn');
const sounds = {
    rain: new Audio('https://actions.google.com/sounds/v1/transportation/slow_wipers_in_rain.ogg'),
    forest: new Audio('https://actions.google.com/sounds/v1/ambiences/spring_day_forest.ogg'),
    fire: new Audio('https://actions.google.com/sounds/v1/ambiences/fire.ogg')
};

sounds.rain.volume = 1.0;   
sounds.forest.volume = 1.0; 
sounds.fire.volume = 1.0;   

let currentSound = null;

soundButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const soundKey = btn.dataset.sound;
        if (currentSound && !currentSound.paused) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
        if (currentSound !== sounds[soundKey]) {
            currentSound = sounds[soundKey];
            currentSound.loop = true;
            currentSound.play();
        } else {
            currentSound = null;
        }
    });
});

// ===== COMPLETED SESSIONS TRACKING =====
function trackSession() {
    let sessions = parseInt(localStorage.getItem('completedSessions') || '0');
    sessions++;
    localStorage.setItem('completedSessions', sessions);
    console.log('Completed sessions:', sessions);
}

// Display completed sessions on page load
window.addEventListener('load', () => {
    const sessions = parseInt(localStorage.getItem('completedSessions') || '0');
    console.log('Completed sessions:', sessions);
});
