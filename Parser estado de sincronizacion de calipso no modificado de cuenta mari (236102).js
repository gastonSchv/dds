function (salesOrder, parse) {
    if (salesOrder.deliveryMethod == "ToBeConfirmed") {
            salesOrder.contact.location = {}
            salesOrder.contact.location.streetName = "Mosconi";
            salesOrder.contact.location.streetNumber = "553";
            salesOrder.contact.location.zipCode = "1643";
        }
    return parse(salesOrder).tap(function (venta) {
        if (salesOrder.contact.billingInfo.docType == "DNI"){
            venta.cliente.tipoiva = "F";
        } else if (salesOrder.contact.billingInfo.taxPayerType == "Monotributo") {
            venta.cliente.tipoiva = "M";
        } else if (salesOrder.contact.billingInfo.taxPayerType == "Exento") {
            venta.cliente.tipoiva = "X";
        } else {
            venta.cliente.tipoiva = "C";
        }
    })

}//esto es lo que cambio