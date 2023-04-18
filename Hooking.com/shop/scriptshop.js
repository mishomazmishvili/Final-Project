
import products from './data.js';

const container = document.getElementById('products-list');
const cart = [];

products.forEach((product) => {
    container.innerHTML += `
    <div class="container">
      <div class= "imgcontainer">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="mt-3">
        <h1>${product.title}</h1>
        <p> Description:${product.description}</p>
        <p class=price> Price:${product.price}</p>
      </div>
      <button class="add-to-cart-btn">Add to cart</button>
    </div>
  `;
});

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const productTitle = btn.parentElement.children[1].children[0].textContent;
        const selectedProduct = products.find(product => product.title === productTitle);
        cart.push(selectedProduct);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`${productTitle} has been added to the cart`);
    });
});

const cartContent = document.createElement('div');
cartContent.classList.add('cart-content');
document.body.appendChild(cartContent);

let cartItems = [];

const addToCartBtns = document.querySelectorAll('button');
addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const product = btn.parentElement;
        const title = product.querySelector('h1').textContent;
        const price = product.querySelector('p:last-of-type').textContent;
        const item = { title, price };
        cartItems.push(item);
        console.log(cartItems);
    });
});

const shoppingCart = document.getElementById('shopping-cart');
shoppingCart.addEventListener('click', () => {
    if (cart.length > 0) {
        let cartContent = '';
        cart.forEach((item) => {
            cartContent += `
                <div>
                    <p>${item.title}</p>
                    <p>${item.price}</p>
                </div>
            `;
        });
        shoppingCart.innerHTML = cartContent;
    } else {
        shoppingCart.innerHTML = alert('Your cart is empty');
    }
});




