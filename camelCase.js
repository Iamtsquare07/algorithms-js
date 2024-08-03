// This algorithm check for the first word in a sentence or heading;
// It capitalizes the first letter of each word in that sequence

function capitalizeFirstLetter(text) {
    // Split the string into words
    const words = text.split(" ");
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the capitalized words back together
    return capitalizedWords.join(" ");
  }