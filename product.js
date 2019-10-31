var GET_PARAM = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

$(document).ready(function () {


    currentProductId = GET_PARAM("produit_id")
    currentProduct = catalog[currentProductId]

    $(".heading").html(currentProduct.name)
    $(".img-product").attr("src", currentProduct.thumb)
    $(".price").html(currentProduct.price + "$")
    $(".text").html(currentProduct.description)
})