conn = new Mongo();
db = conn.getDB("pizza_planet_mo");

db.createCollection('city')
db.createCollection('client')
db.createCollection('employee')
db.createCollection('restaurant')
db.createCollection('product')

db.province.insertOne({
    "_id" : "CAL",
    "name" : "California",
})

db.city.insertOne({
    "_id" : "SF",
    "name" : "San Francisco",
    "province_id" : "CAL"
})


db.client.insertOne({
    "_id" : ObjectId("52ffc33cd85242f436000001"),
    "name": "Michael", 
    "surnames": "Scott",
    "address": { 
        "street"  : "123 Ventura Blvd",
        "building"  : "3",
        "floor" : "2",
        "door" : "1",
        "zipcode" : "21010"
        },
    "phone" : "1-3184892710",
    "city_id" : "SF"  
})


db.restaurant.insertOne({
    "_id" : ObjectId("52ffc33cd85242f436000000"),
    "address" :  { 
        "street" : "108-4905 Felis. Rd.",
        "building" : "1",
        "floor" : "",
        "door" : "",
        "zipcode" : "98110"
        },
    "city_id" : "SF"
})

db.employee.insertOne({
    "personal data" : {
        "name" : "Dwight",
        "surname 1" : "Schrute",
        "surname 2" : "96075",
        "nif" : "9854426979",
        "phone" : "1-9603313780"
        },
    "address" :  { 
        "street"  : "Ridiculus Rd.",
        "building"  :"398",
        "floor" : "",
        "door" : "",
        "zipcode" : "96075"
        },
    "role" : "driver",
    "driver_license" : "DRI321",
    "restaurant_id" : ObjectId("52ffc33cd85242f436000000")
})

db.product.insertOne({
    "_id" : ObjectId("23ffc33cd85242f436000000"),
    "name" : "Pizza Tropical",
    "specs" : {
        "description" : "A super yummy pizza",
        "picture" : "www.someURL.com"
    },
    "price" : 12.00,
    "product type" :  {
        "_id" : "pizza",
        "name" : "pizza"
    },
    "product category" : {
        "_id" : "vegan",
        "name" : "Vegan"
    }
})



db.order.insertOne({
    "registration date" : new Date("2016-05-18T16:00:00Z"),
    "type" : "delivery",
    "total price" : 12.00,
    "products" : {
        "product_id" : ObjectId("23ffc33cd85242f436000000"),
        "qty" : 1,
        "unit price" : 12.00 
    },
    "delivery details" : {
        "delivery date" : new Date("2016-05-18T16:00:00Z"),
        "driver license" : "DRI321",
    },
    "client_id" : ObjectId("52ffc33cd85242f436000001"),
    "restaurant_id" : ObjectId("52ffc33cd85242f436000000")
})


