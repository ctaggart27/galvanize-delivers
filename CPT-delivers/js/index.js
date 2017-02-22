$(document).ready(function() {
    let subTotes = 0

    function almostTotal() {
        let intVal = Number(($(event.target).parent().parent().find('p').text().replace(/[^0-9\.]+/g, "")))
        let subtotal = subTotes += intVal
        return subtotal.toFixed(2)
    }


    $('.addItem').click(function() {
        let row = $('<tr>')
        let item = $('<td class="left-align">' + $(event.target).parent().parent().find('.card-title').text() + '</td>')
        let price = $('<td class="right-align">' + $(event.target).parent().parent().find('p').text() + '</td>')
        row.append(item)
        row.append(price)
        $('tbody').append(row)
        let subtotalValue = $('#subtotal').text(almostTotal())
        let taxValue = $('#tax').text(((almostTotal() * 0.05).toFixed(2)))
        let totalValue = (Number(subtotalValue.text()) + Number(taxValue.text()))
        $("#total").text(totalValue.toFixed(2))
    })



$('#placeOrder').click(function(){
  // console.log('clicked')
  var nameInput=$('#name').val()
  // console.log(nameInput);
  var numberInput= $('#phone_number').val()
  var addressInput= $('#address').val()
  if (nameInput.length >0 && addressInput.length>0 && numberInput.length>0) {
    alert('Alert your party ships on the way!')
  } else {
    alert('We need your infos')
    event.preventDefault()
  }
})
});
