document.querySelectorAll('.cartt').forEach(button => {
    button.addEventListener('click', function() {
        var productName = this.parentElement.querySelector('.card-text').textContent;
        var cartItem = document.createElement('li');
        cartItem.textContent = productName; 
        
        document.getElementById('cart-items').appendChild(cartItem);
    });
});