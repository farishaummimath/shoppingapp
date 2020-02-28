const Product = require('../models/Product')

// GET /products - list all products 

module.exports.list = (req,res)=>{
    Product.find().populate('category',['_id','name']).sort({'createdAt': -1})
        .then((products)=>{
            res.json(products)
        })
        .catch(err => res.json(err))
}

// POST /products - create a new product

module.exports.create =(req,res)=>{
    const body = req.body
    const product = new Product(body)
    product.save()
    .then((product) => {
        res.json(product)
    })
    .catch((err) => {
        res.json(err)
    })
}

// GET /products/:id - retrieve a particular product with given id

module.exports.show = (req,res)=>{
    const id = req.params.id
    Product.findById(id)
        .then((product)=>{
            console.log(product,"product")
            if(product) {
                res.json(product)

            } else {// promise resolved, in case of product is null
                res.json({})
            }
        })
        .catch((err)=>{
            console.log("------",err)
            res.json(err)
        })
}

// DELETE /products/:id - delete a particular product with given id

module.exports.destroy = (req,res)=>{
    const id = req.params.id
    Product.findByIdAndDelete(id)
    .then((product)=>{
        if(product){
            res.json(product)
        } else {
            res.json({})
        }

    })
    .catch((err)=>{
        res.json(err)
    })
}


// PUT /products/:id - update a properties of a product with given id

module.exports.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    console.log(body)
    Product.findByIdAndUpdate(id, body,{new : true, runValidators: true})
     .then((product)=>{
         if(product) {
             res.json(product)
         } else {
             res.json({})
         }

     })
     .catch((err)=>{
         res.json(err)

     })

}