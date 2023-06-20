// Cambio de catidad de artículos ingresado por el usuario.

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=> {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=> {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Agregar el total de productos al carrito cuando se presiona el botón ADD TO CART
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=> {
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    priceModal.innerHTML = `$125 x${lastValue} <span>${lastValue*125}.00</span>`;
});

// Mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=> {
    cartModal.classList.toggle('show');

    if(lastValue == 0){
        drawProductInModal();
    }
});


// FUNCIONES
// Borrar el contenido del carrito.
function deleteProduct() {
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    
    deleteProductBtn.addEventListener('click', ()=> {
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty!</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

function drawProductInModal() {
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
            <div>
                <p class="cart-modal__product">Autumn Limited Edition...</p>
                <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();
}