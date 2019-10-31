$(document).ready(function () {

    var slidersTop = $(".img-sliders")

    for (let i = 0; i < 3; i++) {
        topVente = $(".top-vente:nth(" + i + ")")
        console.log(topVente);
        var randomIndex = Math.floor(Math.random() * catalog.length)

        topVente.attr("src", catalog[randomIndex].thumb)
        topVente.attr("title", catalog[randomIndex].name)

        topVente.click(function () {
            slidersTop.attr("src", $(this).attr("src"))
            slidersTop.attr("title", $(this).attr("title"))
        })
    }




})