// Copyright (c) 2018, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on("Items","price",function(frm,cdt,cdn){
var item_price=frm.doc.items;
var total=0;
for(var i in item_price)
{
total=total+item_price[i].price;
}
frm.set_value("total_cost",total);

	
});
