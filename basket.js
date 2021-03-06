

$(document).ready(function () {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    currentProductId = GET_PARAM("produit_id")
    currentProduct = catalog[currentProductId]
    var tableBody = $("<tbody></tbody>")
    $(".table").append(tableBody)

    var table2 = $("<table>")
    $(".container").append(table2)
    var tableBody2 = $("<tbody>")
    table2.append(tableBody2)
    var tr2 = $("<tr>")
    tableBody2.append(tr2)
    var th1 = $("<th>Total</th>")
    tr2.append(th1)
    var tr3 = $("<tr>")
    tableBody2.append(tr3)
    var th2 = $("<th>TVA</th>")
    tr3.append(th2)
    var tr4 = $("<tr>")
    tableBody2.append(tr4)
    var th3 = $("<th>Total TTC</th>")
    tr4.append(th3)
    var tdTotal = $("<td>")
    tr2.append(tdTotal)
    var tdTva = $("<td>")
    tr3.append(tdTva)
    var tdTtc = $("<td>")
    tr4.append(tdTtc)


    for (let i = 0; i < cart.length; i++) {
        var cartItem = cart[i]
        var productId = cartItem.productId
        var product = catalog[productId]

        var tr = $("<tr>")
        tableBody.append(tr)
        var th = $("<th>")
        tr.append(th)
        th.html(product.name)

        var td1 = $("<td></td>")
        var input = $("<input type='number'>")
        input.val(cartItem.quantity)
        td1.attr("id", "qty-" + i)
        td1.append(input)
        tr.append(td1)

        var td2 = $("<td></td>")
        td2.attr("id", "pu-" + i)
        td2.html(product.price)
        tr.append(td2)


        var td3 = $("<td></td>")
        input.attr("id", "quantity-" + productId)
        td3.html(cartItem.quantity * product.price)
        tr.append(td3)
        td3.attr("id", "total" + productId)


        var tdBtn = $("<td></td>")
        var btn = $("<button>Remove</button>")
        btn.attr("id", "btn-" + i)
        tr.append(tdBtn)
        tdBtn.append(btn)


        tableBody.append(tr)




        input.change(function () {

            newQuantity = $(this).val()
            priceProd = catalog[$(this).attr('id').replace("quantity-", "")].price
            $('#total' + $(this).attr('id').replace("quantity-", "")).html(newQuantity * priceProd)


            // -- on quantity in the corresponding product in cart
            for (let i = 0; i < cart.length; i++) {

                var inputId = $(this).attr('id').replace("quantity-", "")
                console.log(inputId)
                console.log(cart[i].productId)

                if (cart[i].productId == inputId) {

                    cart[i].quantity = newQuantity
                    var cart_str = JSON.stringify(cart)
                    sessionStorage.setItem("cart", cart_str)
                }

                
            }
            var totalPrice = 0
            $("td[id*=total]").each(function () {
                totalPrice += parseInt($(this).html())

            })
            tdTotal.html(totalPrice)
            

        })

        btn.click(function () {
            $(this).parents("tr").remove()

            var cartId = $(this).attr('id').replace("btn-", "")
            cart.splice(cartId, 1);


            var cart_str = JSON.stringify(cart)
            sessionStorage.setItem("cart", cart_str)

            console.log(cart)

        })
    }



})