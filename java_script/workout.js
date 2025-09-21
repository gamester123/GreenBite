document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const workoutGrid = document.getElementById("workout-plan");
  const statusText = document.getElementById("workout-status"); // from our placeholder text
  const timerDiv = document.getElementById("timer");

  const workouts = {
    full: {
      none: ["Jumping Jacks", "Push-ups", "Squats", "Plank"],
      dumbbells: ["Dumbbell Squats", "Bicep Curls", "Shoulder Press", "Lunges"],
      "resistance-band": ["Band Squats", "Band Rows", "Band Chest Press", "Band Side Steps"]
    },
    arms: {
      none: ["Push-ups", "Tricep Dips"],
      dumbbells: ["Bicep Curls", "Overhead Tricep Extension"],
      "resistance-band": ["Band Curls", "Band Tricep Pushdowns"]
    },
    legs: {
      none: ["Squats", "Lunges", "Wall Sit"],
      dumbbells: ["Dumbbell Lunges", "Goblet Squats"],
      "resistance-band": ["Band Squats", "Band Kickbacks"]
    },
    core: {
      none: ["Sit-ups", "Plank", "Bicycle Crunches"],
      dumbbells: ["Weighted Sit-ups", "Russian Twists"],
      "resistance-band": ["Band Woodchoppers", "Band Deadbug"]
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bodyPart = document.getElementById("body-part").value;
    const equipment = document.getElementById("equipment").value;

    if (!bodyPart || !equipment) {
      alert("Please select options first!");
      return;
    }

    const selectedWorkouts = workouts[bodyPart][equipment];
    const randomExercises = shuffleArray(selectedWorkouts).slice(0, 3);

    // Clear old results
    workoutGrid.innerHTML = "";
    timerDiv.innerHTML = "";
    statusText.style.display = "none"; // hide the "waiting" message

    // Inject new workout cards
    randomExercises.forEach(ex => {
      const card = document.createElement("div");
      card.classList.add("workout-card");
      card.innerHTML = `
        <h3>${ex}</h3>
        <button class="btn"><span>START</span></button>
      `;
      // attach event
      card.querySelector(".btn").addEventListener("click", () => startTimer(ex));
      workoutGrid.appendChild(card);
    });
  });

  // Countdown timer
  function startTimer(exercise) {
    let time = 10; // seconds

    clearInterval(timerDiv.dataset.intervalId); // stop old timer if running

    timerDiv.innerHTML = `
      <h3>${exercise}</h3>
      <p id="clock">00:${time < 10 ? "0" + time : time}</p>
    `;

    const clock = document.getElementById("clock");

    const interval = setInterval(() => {
      time--;
      clock.textContent = `00:${time < 10 ? "0" + time : time}`;

      // flash red in last 3 sec
      if (time <= 3 && time > 0) {
        clock.classList.add("flash");
      }

      if (time < 0) {
        clearInterval(interval);
        clock.textContent = "Done ✅";
        clock.classList.remove("flash");
        playBeep();
      }
    }, 1000);

    timerDiv.dataset.intervalId = interval; // store so we can clear later
  }

  // Beep sound
  function playBeep() {
    const beep = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
    beep.play();
  }

  // Utility shuffle
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
});