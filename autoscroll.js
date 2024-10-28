window.onmousemove = function (event) {
  const b = event.clientY;
  h = window.innerHeight;
  console.log(b + " " + h);

  //Our threshold Ypos value is 500
  if (b > 500) {
    window.scrollBy(0, 12);
  }
};
