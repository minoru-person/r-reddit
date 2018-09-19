
"use strict";

var processEntries = function() {
    
	var subtotal = parseFloat(document.getElementById("subtotal").value);
	var tax_rate = parseFloat(document.getElementById("tax_rate").value);
	
	if (isNaN(subtotal) || subtotal <=0 || subtotal >=10000) {
	    document.getElementById("subtotal_message").firstChild.nodeValue = "Must be > 0 and < 10000";
	    return false;
	} else {
	    document.getElementById("subtotal_message").firstChild.nodeValue = "";	
	}
	if (isNaN(tax_rate) || tax_rate <=0 || tax_rate >=12) {
	    document.getElementById("tax_rate_message").firstChild.nodeValue = "Must be > 0 and < 12";
	    return false;
	} else {
	    document.getElementById("tax_rate_message").firstChild.nodeValue = "";	
	}
    
 
	var sales_tax = (tax_rate / 100) * subtotal;
	var total = (subtotal + sales_tax);
	total = total.toFixed(2);
	sales_tax = sales_tax.toFixed(2);

    
	document.getElementById("total").innerHTML = total;
	document.getElementById("sales_tax").innerHTML = sales_tax;
};
