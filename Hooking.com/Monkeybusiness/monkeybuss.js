// set the distance from the edge at which scrolling should start
const scrollThreshold = 50;

// add an event listener to the window object to detect mouse movements
window.addEventListener('mousemove', e => {
    // check if the cursor is close to the top of the screen
    if (e.clientY < scrollThreshold) {
        // scroll up by a certain amount
        window.scrollBy(0, -200);
    }
    // check if the cursor is close to the bottom of the screen
    else if (e.clientY > window.innerHeight - scrollThreshold) {
        // scroll down by a certain amount
        window.scrollBy(0, 200);
    }
});
