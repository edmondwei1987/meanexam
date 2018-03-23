var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public/dist')));
//add mongoose-start
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codingdojo');
var ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name is blank'],
        minlength:[3,'product name too short'],
    },
    qty:{
        type:Number,
        required:[true,'product qty is blank'],
        min:[0,'qty need to greater or equal to zero']
    },
    price:{
        type:Number,
        required:[true,'product price is blank'],
        min:[0,'price need to greater or equal to zero']
    }
});
mongoose.model('Product',ProductSchema);
var Product=mongoose.model('Product');
//add mongoose-end
//add the routing-start
app.get('/api/products',(req,res)=>{
    Product.find({},(err,products)=>{
        if(err){
            res.json(err);
        }else{
            res.json(products);
        }
    });
});
app.post('/api/products',(req,res)=>{
    Product.create(req.body,(err,product)=>{
        if(err){
            res.json(err);
        }else{
            res.json(product);
        }
    })
});
app.get('/api/products/:id',(req,res)=>{
    Product.findOne({_id:req.params.id},(err,product)=>{
        if(err){
            res.json(err);
        }else{
            res.json(product);
        }
    });
})

app.delete('/api/products/:id',(req,res)=>{
    Product.remove({_id:req.params.id},(err,msg)=>{
        if(err){
            res.json(err);
        }else{
            res.json(msg);
        }
    })
});
app.put('/api/products/:id',(req,res)=>{
    Product.findOne({_id:req.params.id},(err,foundProduct)=>{
        foundProduct.name=req.body.name;
        foundProduct.qty=req.body.qty;
        foundProduct.price=req.body.price;
        foundProduct.save((err,product)=>{
            if(err){
                res.json(err);
            }else{
                res.json(product);
            }
        })
    });
});
//add the routing-end
app.all('*',(req,res,next)=>{
    res.sendFile(path.resolve('./public/dist/index.html'));
});
app.listen(8000,()=>{
    console.log('listen on port 8000');
});