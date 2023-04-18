
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

const headerContainer = document.getElementById('header-container');
const headerText = document.getElementById('header-text');

headerContainer.addEventListener('mouseover', () => {
    headerText.textContent = `Some say it's stolen but who cares?!\n Definetly not us..`;
});

headerContainer.addEventListener('mouseout', () => {
    headerText.textContent = `Here are Some Gems we have in Store for you!`;
});

const serviceContainer = document.getElementById('service-container');
const serviceText = document.getElementById('service-text');

serviceContainer.addEventListener('mouseover', () => {
    serviceText.textContent = `Don't believe everything you read here.`;
});

serviceContainer.addEventListener('mouseout', () => {
    serviceText.textContent = '48hr refund on your Product in case of damaged or failed Delivery!\nWe are here to make sure you are happy with our service.\nBut We are Monkeys take that into consideration...';
});

const deliveryContainer = document.getElementById('delivery-container');
const deliveryText = document.getElementById('delivery-text');

deliveryContainer.addEventListener('mouseover', () => {
    deliveryText.textContent = `Don't believe everything you read here.`;
});

deliveryContainer.addEventListener('mouseout', () => {
    deliveryText.textContent = `Free Delivery across the Country.\n
    Our Monkey express will bring your precious Gems within 24 hours.\n`;
});





