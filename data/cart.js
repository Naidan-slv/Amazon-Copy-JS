export const cart = [];
// now this variable can be used outside of cart.js
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

        
}