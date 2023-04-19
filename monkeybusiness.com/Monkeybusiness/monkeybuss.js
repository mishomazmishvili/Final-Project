
// const scrollThreshold = 50;

// window.addEventListener('mousemove', e => {

//     if (e.clientY < scrollThreshold) {
//         window.scrollBy(0, -200);
//     }
//     else if (e.clientY > window.innerHeight - scrollThreshold) {
//         window.scrollBy(0, 200);
//     }
// });

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
    deliveryText.textContent = `For Monkeys time works differently.`;
});

deliveryContainer.addEventListener('mouseout', () => {
    deliveryText.textContent = `Free Delivery across the Country.\n
    Our Monkey express will bring your precious Gems within 24 hours.\n`;
});





