const data=require('../assets/product.json')
const mongoose=require('mongoose')
const Data0 = mongoose.model('Data')



module.exports.getProduct=((req,res)=>{

    res.send(data);

})

module.exports.addProducts=((req,res)=>{
    var d = new Data0();
    d.title = "I Am Title"
    d.price = 35
    d.description =""
    d.image=""
    d.category="" 

    d.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.send(['Unable to add product details'])
        }
    })

})