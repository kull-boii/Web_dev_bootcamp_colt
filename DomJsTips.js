// 1] Get the text that the user has selected
const getSelectedText = () => window.getSelection().toString();
getSelectedText();

// 2] Set a key of an object dynamically using square brackets
// if the user selects a car model and we have to make the object dynamically
// i.e according to the selected model by the user the obj should be updated
// for eg by dom we get
const model = "Panamera";
const variant = "LXI"; // VXI etc
const car = {
  brand: "Porsche",
  [model]: variant,
};

// 3] Improve custom cursor performance by using “translate3d”
/* 
Nowadays, a lot of websites use custom cursors.
There’s a huge debate going on about IF you should do this or not, but if you HAVE to do it, please use this simple trick to improve your performance.
You should transform the cursor’s position using “translate3d” instead of using its “top” and “left” properties.

Why?
2 reasons.
First, updating a top/right/bottom/left property of a DOM element will trigger a redraw of the layout layer. Avoiding this would be great for performance!
Secondly, using “translate3d” instead of the regular “translate” will force the animation into hardware acceleration. This will speed up performance and will make the animation/transition a lot smoother.
*/
// Slow :(
customCursor.style.top = "100px"; 
customCursor.style.left = "50px";
// Better! :D 
customCursor.style.transform = `translate3d(${xPosition}, ${yPosition}, 0)`;

// ref : https://blog.prototypr.io/6-essential-javascript-tips-for-the-developer-of-2020-6128c0181625
