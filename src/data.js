var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tienda");
    dbo.createCollection("clientes", function (err, res) {
        if (err) throw err;
        console.log("Collection created");
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tienda");
    var myobj = {name: "Empresas S.A", address: "cll 19 # 19-50"};
    dbo.collection("clientes").insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log("documento 1 insertado");
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tienda");
    dbo.collection("clientes").findOne({}, function(err, res){
        if (err) throw err;
        console.log(res.name);
        db.close();
    });
});
*/

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tienda");
    var myquery = {address:'cll 19 # 19-50'}
    dbo.collection("clientes").deleteOne({}, function(err, obj){
        if (err) throw err;
        console.log(obj + " Borrado");
        db.close();
    });
});