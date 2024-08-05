// This algorithm checks if the user tried to leave the page;
// It will serve as a warning to a user that has not saved their data before leaving

function addBeforeUnloadWarning() {
    // Add the beforeunload event listener
    window.addEventListener("beforeunload", beforeUnloadHandler);
  }
  
  function removeBeforeUnloadWarning() {
    // Remove the beforeunload event listener
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
  
  function beforeUnloadHandler(e) {
    e.preventDefault();
    e.returnValue =
      "You have unsaved changes. Are you sure you want to leave this page?";
  }