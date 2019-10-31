
var GET_PARAM = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

$(document).ready(function () {
    var slidersTop = $(".img-sliders")
    
    for (let i = 0; i < 3; i++) {
        topVente = $(".top-vente:nth(" + i + ")")
        
        var randomIndex = Math.floor(Math.random() * catalog.length)
        
        topVente.attr("src", catalog[randomIndex].thumb)
        topVente.attr("title", catalog[randomIndex].name)
        topVente.attr("data-product-id", randomIndex)
        
        topVente.click(function () {
            slidersTop.attr("src", $(this).attr("src"))
            slidersTop.attr("title", $(this).attr("title"))
            var produit_id = $(this).attr("data-product-id")
            var a = slidersTop.parent("a")
            
            a.attr("href","product.html?produit_id=" + produit_id)

        })
        
    }
    var heading = $(".heading")
    
    currentProductId = GET_PARAM("produit_id")
    currentProduct = catalog[currentProductId]


    heading.html(currentProduct.name)
})