// Mobile navigation toggle
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  if (primaryNavigation.hasAttribute('data-visible')) {
    navToggle.setAttribute('aria-expanded', false);
  } else {
    navToggle.setAttribute('aria-expanded', true);
  }

  primaryNavigation.toggleAttribute('data-visible');
});


// Product gallery controls
const productImage = document.querySelector('.product-image-display img');
const thumbnails = document.querySelectorAll('.product-thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const thumbnailSrc = this.src;
    const imageSrc = thumbnailSrc.replace('-thumbnail', '');
    productImage.src = imageSrc;
    
    thumbnails.forEach(thumbnail => thumbnail.parentElement.classList.remove('selected'));
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    this.parentElement.classList.add('selected');
    this.classList.add('active');
  });
});

// Product quantity controls
const quantityNumber = document.querySelector('.product-quantity-number');
const increaseButton = document.querySelector('.increase-quantity-button');
const reduceButton = document.querySelector('.reduce-quantity-button');

let quantityValue = 0;

function increaseQuantity() {
  quantityValue++;
  quantityNumber.textContent = `${quantityValue}`;
}

function reduceQuantity() {
  if (quantityValue > 0) {
    quantityValue--;
    quantityNumber.textContent = `${quantityValue}`;
  }
}

increaseButton.addEventListener('click', increaseQuantity);
reduceButton.addEventListener('click', reduceQuantity);

// cart controls
const addToCartButton = document.querySelector('.add-to-cart-button');

addToCartButton.addEventListener('click', function () {
  console.log('added');
})

