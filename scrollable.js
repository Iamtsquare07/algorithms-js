//  Check if the document longer than the screen it's viewed on.
const wrapper =  document.querySelector(".wrapper");
let hasVerticalScrollbar = wrapper.scrollHeight > wrapper.clientHeight;
console.log(hasVerticalScrollbar)