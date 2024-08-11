// This algorithm remind the user to drink water after a certain amount of time;
// It check the last time the user last drank water.
// It can be used in combination with an alarm sound.

let hydrationTimeoutId;
let hydrationStartTime;

function setupHydrationReminder() {
  // Initialize or update the start time
  if (!hydrationStartTime) {
    hydrationStartTime = Date.now();
  }

  // Function to calculate the time difference in hours
  function getElapsedHours(startTime) {
    const now = Date.now();
    return Math.floor((now - startTime) / (1000 * 60 * 60));
  }

  // Function to display the reminder
  function remindToDrinkWater() {
    const elapsedHours = getElapsedHours(hydrationStartTime);

    // Schedule the next reminder for the start of the next 2-hour period
    const nextReminderInMs =
      1000 * 60 * 60 * 2 * (Math.floor(elapsedHours / 2) + 1) -
      (Date.now() - hydrationStartTime);
    hydrationTimeoutId = setTimeout(remindToDrinkWater, nextReminderInMs);
    alert("Woohoo! It's time to drink some water.");
  }

  // Cancel any existing timeout
  if (hydrationTimeoutId) {
    clearTimeout(hydrationTimeoutId);
  }

  // Schedule the first reminder for the start of the next 2-hour period
  const elapsedHours = getElapsedHours(hydrationStartTime);
  const firstReminderInMs =
    1000 * 60 * 60 * 2 * (Math.floor(elapsedHours / 2) + 1) -
    (Date.now() - hydrationStartTime);
  hydrationTimeoutId = setTimeout(remindToDrinkWater, firstReminderInMs);
}


setupHydrationReminder();
localStorage.setItem("firstInitialization", true);
