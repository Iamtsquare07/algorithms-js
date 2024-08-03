// This algorthm format time with milliseconds;
// It check if the time is in hours, minutes and seconds
// It format in hours, minutes, seconds and the appropriate suffix

function formatTime(timeInSeconds) {
    if (timeInSeconds >= 3600) {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      if (hours <= 1 && minutes <= 1) {
        return `${hours} hour, ${minutes} minute, ${seconds} seconds`;
      } else if (minutes <= 1) {
        return `${hours} hours, ${minutes} minute, ${seconds} seconds`;
      } else if (hours <= 1) {
        return `${hours} hour, ${minutes} minutes, ${seconds} seconds`;
      } else {
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      }
    } else if (timeInSeconds >= 60) {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      if (minutes <= 1) {
        return `${minutes} minute, ${seconds} seconds`;
      } else {
        return `${minutes} minutes, ${seconds} seconds`;
      }
    } else {
      return `${timeInSeconds} seconds`;
    }
  }