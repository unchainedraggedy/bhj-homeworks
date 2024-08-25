const cart = document.querySelector('.cart__products');
const cartTitle = document.querySelector('.cart__title');

function updateCartVisibility() {
    if (cart.children.length === 0) {
        cartTitle.style.display = 'none';
        cart.style.display = 'none';
    } else {
        cartTitle.style.display = 'block';
        cart.style.display = 'block';
    }
}
    
    document.querySelectorAll('.product__quantity-control').forEach(control => {
        control.addEventListener('click', () => {
            const quantityValueElement = control.parentElement.querySelector('.product__quantity-value');
            let quantity = parseInt(quantityValueElement.textContent);

            if (control.classList.contains('product__quantity-control_inc')) {
                quantity++;
            } else if (control.classList.contains('product__quantity-control_dec') && quantity > 1) {
                quantity--;
            }

            quantityValueElement.textContent = quantity;
        });
    });

    document.querySelectorAll('.product__add').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productId = product.dataset.id;
            const productImageSrc = product.querySelector('.product__image').src;
            const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);

            const cart = document.querySelector('.cart__products');
            let cartProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + productQuantity;
            } else {
                cartProduct = document.createElement('div');
                cartProduct.className = 'cart__product';
                cartProduct.dataset.id = productId;

                const imgElement = document.createElement('img');
                imgElement.className = 'cart__product-image';
                imgElement.src = productImageSrc;

                const countElement = document.createElement('div');
                countElement.className = 'cart__product-count';
                countElement.textContent = productQuantity;

                cartProduct.appendChild(imgElement);
                cartProduct.appendChild(countElement);
                cart.appendChild(cartProduct);
            }
        });
    });

