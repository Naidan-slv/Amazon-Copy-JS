function Cart(localStorageKey){
    // use pascal case for things that create or generate objects
    const cart = {
        cartItems: undefined,
        // this is the same thing as cart being undefined but we move the value into an object. We change the name to cartItems to make it easier to understand and not be conused by the cart objects 
        loadFromStorage:function(){
    
            this.cartItems = JSON.parse(localStorage.getItem('localStorageKey'));
        
            if (!this.cartItems) {
                this.cartItems = [{
                  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                  quantity: 2,
                  deliveryOptionId: '1'
                }, {
                  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                  quantity: 1,
                  deliveryOptionId: '2'
                }];
              }
              // "This" will give us the outer function so no matter what Cart is itll always be the same
        },
        // the savetostorage is an abbreviation of the function that loads the cart from storage
        saveToStorage() {
          localStorage.setItem('localStorageKey', JSON.stringify(this));
          // change the cart to cart-oop so we dont affect the original cart
        },
    
        addToCart(productId) {
            let matchingItem;
          
            this.cartItems.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                matchingItem = cartItem;
              }
            });
          
            if (matchingItem) {
              matchingItem.quantity += 1;
            } else {
              this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
              });
            }
          
            this.saveToStorage();
          },
    
        removeFromCart(productId) {
        const newCart = [];
        
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
            newCart.push(cartItem);
            }
        });
        
        this.cartItems = newCart;
        
        this.saveToStorage();
        },
    
        updateDeliveryOption(productId, deliveryOptionId){
            let matchingItem;
        
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                matchingItem = cartItem;
                }
            
          });
        
          matchingItem.deliveryOptionId = deliveryOptionId;
          this.saveToStorage();
          // we updated the card so we need to update the storage
        }    
    };
    return cart;
}

const cart = Cart('cart-oop'); // run the function to generate the object
const businessCart = Cart('cart-business'); // We are using a function to generate the object so we can have multiple carts

cart.loadFromStorage();


businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);