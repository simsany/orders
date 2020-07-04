var request = require("request");

var express=require("express");
var app=express();
var bodyParser= require("body-parser");
var mongoose=require("mongoose");
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));

var weather;


mongoose.connect("mongodb+srv://sanyika:3956121@cluster0.hg5xp.mongodb.net/orders?retryWrites=true&w=majority")
var orderSchema=new mongoose.Schema({
	name: String,
	email: String,
	address: String,
	comment: String,
	extra: String,
	sauce: String,
	quantity: String,
    price: String,
});var Order=mongoose.model("Order",orderSchema);
request('https://api.openweathermap.org/data/2.5/onecall?lat=48.13&lon=22.32&%20exclude=current,minutely,hourlyl&appid=d2b2eab54bef4bcb5c106c971a67f044', (error, response, body)=> {
  var body=JSON.parse(body);
   weather=((body.daily[0].temp.min+body.daily[0].temp.max)/2- 273.15).toFixed(2);
   
  
console.log(weather);
});
	
app.get("/", (req,res)=>{
	
res.render("index.ejs",{
weather:weather});}
);
	
	
app.post("/", (req,res)=>{
	console.log(req);	
Order.create({
name: req.body.name,
email: req.body.Email,
	address: req.body.address,
	comment: req.body.comment,
	extra: req.body.extras,
	sauce: req.body.sauces,
	quantity: req.body.quantity,
    price: req.body.prices,
}
,function(err,order){
	if(err){ console.log(err)}
	else{
		
		
		
res.redirect("/");}} 
	
	
	
)});
	
	app.get("/orders", (req,res)=>{
	
Order.find({},function(err,orders){
	if(err){console.log("something went wrong");}
	else{
	res.render("order.ejs",{orders:orders,
	weather:weather});}})});
	
	
	app.post("/orders/:id", (req,res)=>{
	Order.findByIdAndRemove(req.params.id,(err)=>{
		if(err){console.log("Went wrong")}
		else{
			
			res.redirect("/orders");
		}
		
	})
}
);
	
	
	
	
	
	
	app.listen(process.env.PORT,()=>console.log("juhu"));
