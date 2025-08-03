// Select all "Agregar al carrito" buttons
const addToCartButtons = document.querySelectorAll('.producto button');

// Select the "Ir al carrito" button
const cartButton = document.querySelector('.carrito button');

// Initialize a counter for the cart
let cartCount = 0;

// Add event listeners to each "Agregar al carrito" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Increment the cart count
        cartCount++;

        // Update the text of the "Ir al carrito" button
        cartButton.textContent = `Ir al carrito (${cartCount})`;
    });
});

function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.push({ nombre, precio });

    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`${nombre} agregado al carrito.`);
}

