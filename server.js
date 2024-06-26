const express = require('express');
const path = require('path');
const productsData = require('./views/products');
const app = express();
const bodyParser = require('body-parser'); // Add this line
const PORT = 8082;

app.use(bodyParser.urlencoded({ extended: true })); // Add this line
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    const cars= [{
        Model: "Range Rover"  , Price: "30 Lakhs"},
        { Model:"SUV"  , Price:"20 Lakhs" },{
            Model:"Tesla" ,Price:"75 lakhs"
        }]

        const bikes =[{
            Model: "Hero"  , Price: "2 Lakhs"},
            { Model:"Royal Enfield"  , Price:"5 Lakhs" },{
                Model:"Splender" ,Price:"2 lakhs" 
        }]
        const tv =[{
            Model: "MI"  , Price: "Rs 30000"},
            { Model:"Samsung"  , Price:"Rs 70000" },{
                Model:"Sony" ,Price:"Rs 60000" 
        }]
        const mobile =[{
            Model: "MI"  , Price: "Rs 10000"},
            { Model:"Samsung"  , Price:"Rs 20000" },{
                Model:"Apple" ,Price:"Rs 100000" 
        }]
res.render('home',{cars,bikes,tv,mobile});
})

// app.post('/add-product',(req,res)=>{
//     const{model , price} = req.body;
//     products.push({Model:model, Price:price});
//     res.json({Model:model, Price:price});
   
// })

app.get('/products/add',(req,res)=>{
 const Data ={
    pageTitle:'Add Product'
 };
 res.render('AddProducts',Data);
})


app.post('/products/add',(req,res)=>{
    const product = {
        title: req.body.title
    };
    productsData.addProduct(product);
    res.redirect('/');
    
})

// function errorHandler(err, req, res, next) {
//     console.error(err.stack); // Log the error stack trace for debugging purposes
//     res.status(500).json({ error: 'Something went wrong!' }); // Respond with a generic error message
// }

// app.use(errorHandler);

app.use((req,res,next)=>{
    res.status(404).render('error');
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})




