window.onmousemove = function(event){ 
 
    const b = event.clientY; 
    h = window.innerHeight; 
    //The code below displays the live Ypos value and the height of the viewport 
      console.log(b + " " + h)

    //Our threshold Ypos value is 500 
    if (b > (500)) 
    { 
    window.scrollBy(0,12); 
    } 
  }; 
