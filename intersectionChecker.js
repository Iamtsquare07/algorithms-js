//  Checking the document for an intersection then do something
let observer = new IntersectionObserver(
    (entries, observer) => { 
      entries.forEach(entry => {
        const badge = document.querySelector("#sonscoreTable");     
        if (entry.isIntersecting) { badge.classList.add("fadein"); }
        else { badge.classList.remove("fadein"); }
        
    });
  });
  
  observer.observe(document.querySelector("#pixel"));
