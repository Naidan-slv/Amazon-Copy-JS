export let cart = JSON.parse(localStorage.getItem('cart'));
    // we need to get the cart from local storage
    
    // local storage can only save string so we need to convert it back into an array 
    
if(!cart){
    cart = [{
        productId :'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 2
    },{
        productId :'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity : 1
    }];
}


// we changed it from const to let as we are now changing it

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
    // set item takes two strings, the first is the name of whatever we want to save and the seocond is the value (The data we want to save) first we need to convert the data to a string using JSON.stringify
    }

export  function addToCart(productId){
    let matchingItem;


        cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
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
    saveToStorage();
}



export function removeFromCart(productId){
    const newCart = [];
    
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
        
    });
    cart = newCart;
    saveToStorage();

}
