exports.post_it = function(req, res) {

var Whiplash = new require('whiplash');
var whiplash = new Whiplash();


var cjson = req.body;
console.log('req.body', cjson);
console.log('shipping', cjson.buyer.shipping)

// Sample of the 'Create Order' array format according to Celery's API
// var cjson = {"order": {
// 	"seller_id":"00000",
// 	"buyer": {
// 		"email":"pmcote1@gmail.com",
// 		"name":"Paige Cote",
// 		"shipping": {
// 			"street":"348 Leaches Pt Rd",
// 			"city":"Orland", 
// 			"state":"ME",
// 			"zip":"04472",
// 			"country":"USA"
// 		}
// 	},
// 	"products":[
// 		{
// 			"slug":"blank",
// 			"quantity":"1"
// 		}
// 	]
// }
// }

// Sample of the 'Create Order' arry format according to the Whiplash API
var wjson = {
	"method":"POST",
	"url":"orders/",
	"billed":false,
	"created_at":"2013-06-06T15:55:30-04:00",
	"days_in_transit":1,
	"email":"billmurray@gmail.com", //buyer.email
	"gift":false,
	"id":97782, 
	"originator_notified":false,
	"pack_fee_actual":null,
	"packaging_fee_actual":null,
	"pick_fee_actual":null,
	"public_note":null,
	"req_ship_method_price":"3.31",
	"req_ship_method_text":"Media Mail (LP's and CD's only)",
	"ship_3rdparty_cost":"0.0",
	"ship_actual_cost":null,
	"ship_method":null,
	"ship_notes":null,
	"shipped_on":null,
	"shipping_address_1":"1800 Hemlock St.", //buyer.shipping.street
	"shipping_address_2":null,
	"shipping_city":"Beverley Hills", //buyer.shipping.city
	"shipping_company":null,
	"shipping_country":"United States", //buyer.shipping.country
	"shipping_country_iso2":"US",
	"shipping_name":"Bill Murray", //buyer.name
	"shipping_phone":"",
	"shipping_state":"California", //buyer.shipping.state
	"shipping_zip":"90210", //buyer.shipping.zip
	"status":100,
	"total_fee_actual":null,
	"tracking_sent":false,
	"updated_at":"2013-06-06T15:55:30-04:00",
	"tracking":[],
	"originator_id":"170741375",
	"provider":"api",
	"insure": false,
	"require_signature": false,
	"insurance_value": "21.98",
	"order_items":[ //products
	   {
	   "available":true,
	   "created_at":"2013-06-06T15:55:31-04:00",
	   "description":"Modest Mouse Sad Sappy Sucker, LP",
	   "id":202109,
	   "item_id":2638,
	   "order_id":97782,
	   "package_id":90104,
	   "packaging":false,
	   "packed":0,
	   "picked":0,
	   "price":"21.98",
	   "quantity":1,
	   "sku":"78956113118",
	   "updated_at":"2013-06-06T15:55:32-04:00",
	   "originator_id":"288618017",
	   "provider":"api"
	   }
	]
}

//Maps -- possibly do with JSON2JSON npm module
var buyer = cjson.order.buyer;

console.log('shipping name',wjson.shipping_name);
console.log('buyername', buyer.name);
console.log('boop1');

wjson.shipping_name = buyer.name;
wjson.email = buyer.email;
console.log('buyer.street', buyer.street);
wjson.shipping_address_1 = buyer.street;
wjson.shipping_city = buyer.city;
wjson.shipping_state = buyer.state;
wjson.shipping_zip = buyer.zip;
wjson.shipping_country = buyer.country;
console.log('boop2');

console.log('wjson', wjson);

//need information on IDs
whiplash.request(wjson, 
	function (err, body) {
	if (err) console.log(err);
	console.log('Response body:', body);
	res.render('post_it');
	console.log('boop3');
});
};

