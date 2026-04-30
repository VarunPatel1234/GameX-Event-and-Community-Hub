const cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} added to cart!`);
    updateCartUI();
}

// Interactive Navigation (Hamburger Menu)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
