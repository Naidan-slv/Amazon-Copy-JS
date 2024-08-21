let productsHTML ='';

// down below we have a accumlator pattern to create a string of html
products.forEach((product)=>{
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
            Add to Cart
            </button>
        </div>
    `;
})

// the purpose a data attribute is to store data in the DOM in a way that is accessible to JavaScript
// we can attach the products name to the button and when we click on it we can access the name of the product
// when using data attributes in HTML, the convention is to use lowercase and hyphens (Kebab)

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId; // it goes from kebab case to camel case (Check the console without the .productName)
        
        let matchingItem;


        cart.forEach((item)=>{
            if(productId === item.productId){
                matchingItem = item;
            }
        });
        if(matchingItem){
            matchingItem.quantity += 1;
        }
        else{
            cart.push({
                productId: productId,
                quantity : 1
            });
        }
        
        console.log(cart);
    }); 
});
