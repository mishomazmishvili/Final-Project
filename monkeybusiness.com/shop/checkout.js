// const cart = JSON.parse(localStorage.getItem('cart'));


// const addToCartBtns = document.querySelectorAll('button');
// addToCartBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         const product = btn.parentElement;
//         const title = product.querySelector('h1').textContent;
//         const price = product.querySelector('p:last-of-type').textContent;
//         const item = { title, price };
//         cart.push(item);
//         console.log(cart);
//     });
// });

const cart = JSON.parse(localStorage.getItem('cart'));
const CartObj = JSON.parse(CartMovies);

const IMG_PATH = `https://image.tmdb.org/t/p/w1280${CartMoviesObj.Poster}`;

const MovieDescription = document.getElementById("MovieDescription");

function ShowMovie() {
  MovieDescription.innerHTML = `
        <div class= "container">
            <div class="row">
                <div class="col-12">
                    <img src="${IMG_PATH}" alt="Movie Poster" class="img-fluid"/>
                </div>
                <div class="col-12">
                    <h1>${CartMoviesObj.Title}</h1>    
            </div>
            <p>${CartMoviesObj.Overview}</p>
            <p>${CartMoviesObj.Rating}</p>
            <p>${CartMoviesObj.Count}</p>
        </div>
        `;
}

ShowMovie()
