class Cart{
    // we can think of this as an object constructor/generator
    // they use a slightly different syntax than objects
    cartItems; // we can remove undefined as it is not needed
    localStorageKey = undefined;

    constructor(localStorageKey){
        // this is a special method that runs when we create a new instance of the class
        // we can use this to set up the object
        // we can also pass in arguments to the constructor
        // we can also have multiple constructors
        // we can also have default values for arguments
        // has to be named constructed and cannot return anything

        this.localStorageKey = localStorageKey;

        this.loadFromStorage();
        // we use this instead as it points to the object which we generated

    }

    loadFromStorage(){
    
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
    
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
          
    }
    
    saveToStorage() {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this));
    
    }

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
      }

    removeFromCart(productId) {
    const newCart = [];
    
    this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
        newCart.push(cartItem);
        }
    });
    
    this.cartItems = newCart;
    
    this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        
      });
    
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
      
    }
}


const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

// each object we generate is an instance of the Cart class
// when we call this class between the paramaters we can put the paramaters for the constructor 



console.log(cart);
console.log(businessCart);

businessCart instanceof Cart; // true (This will check if this class is an instance of the Cart class)
