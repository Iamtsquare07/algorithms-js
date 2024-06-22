// This algorithm checks if it a new day in several ways;
// 1: It checks after a page is loaded
// It also checks after the tab is in focus
// It lastly checks at midnight

const checkNewDayAndUpdate = () => {
    const today = new Date().toDateString();
    const lastCheckedDate = localStorage.getItem('lastCheckedDate');
  
    if (lastCheckedDate !== today) {
      console.log('New day detected. Refreshing the page...');
      localStorage.setItem('lastCheckedDate', today);
      location.reload();
    } else {
      console.log('Same day, no need to refresh.');
    }
  };
  
  document.addEventListener('DOMContentLoaded', (event) => {
    checkNewDayAndUpdate();
  });
  
  // Check when the document becomes visible
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkNewDayAndUpdate();
    }
  });
  
  const setDailyCheck = () => {
    const now = new Date();
    const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) - now;
  
    setTimeout(() => {
      checkNewDayAndUpdate();
    }, millisTillMidnight);
  };
  
  setDailyCheck();