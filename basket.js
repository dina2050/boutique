

$(document).ready(function (){
    var cart = [
        {
            productId : 1,
            quantity : 1
        },
        {
            productId : 42,
            quantity : 2
        },
            {
            productId : 5,
            quantity : 7
        },
     ];
var tableBody = $("<tbody></tbody>")
$(".table").append(tableBody)
for(let i=0;i<cart.length;i++){
    var tr = $("<tr></tr>")
    tableBody.append(tr)
    tr.attr("id",i)
    var th = $("<th></th>")
    tr.append(th)
    th.html(catalog[cart[i].productId].name)
    var input = $("<input type = number>")
    tr.append(input)
    input.val(cart[i].quantity)
    input.attr("id",i)
    var thisInput = input.attr("id")
    
    
    for(let j=0;j<2;j++){
        var td = $("<td></td>")
        tr.append(td)
        td.attr("id",j)
        var priceId = td.attr("id")
        if (priceId == 0) {
            td.html(catalog[cart[i].productId].price)
        }
        else {
            catalog[cart[i].productId].price*input.val()
            console.log(catalog[cart[i].productId].price*input.val())
        }
         
        
        
        
    }
        
    
}

});