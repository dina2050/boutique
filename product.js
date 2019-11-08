var GET_PARAM = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};


$(document).ready(function () {
    var cart = sessionStorage.getItem("cart");
    if ( cart == null){
        cart = []
    } else {
        cart = JSON.parse(cart)
    }
    
    console.log(cart);
    
    currentProductId = GET_PARAM("produit_id")
    currentProduct = catalog[currentProductId]
    $(".heading").html(currentProduct.name)
    $(".img-product").attr("src", currentProduct.thumb)
    $(".price").html(currentProduct.price + "$")
    $(".text").html(currentProduct.description)
    
    $("#btnBasket").click(function(){
        // cart.push(cartItem)
        // var cart_str = JSON.stringify(cart)
        // sessionStorage.setItem("cart",cart_str)
        
        found = false
        for(let i=0; i<cart.length; i++){
            if (cart[i].productId == currentProductId){
                cart[i].quantity+=1
                found = true
            }
        }

        if (found == false){
            var cartItem = {
                productId : currentProductId,
                quantity : 1
            }
            cart.push(cartItem)
        }
        
        var cart_str = JSON.stringify(cart)
        sessionStorage.setItem("cart",cart_str)
        console.log(cart_str)
    })
})