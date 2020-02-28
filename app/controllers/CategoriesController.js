const Category = require('../models/Category')
const Product = require('../models/Product')

// GET /categories - list categories with number of products as response
module.exports.list = (req,res)=>{
      
            Promise.all([Category.find(),Product.find()])
            .then((values)=>{
                const [categories,products] = values
                const productCount = categories.map(c=> {
                    const len = products.filter(p=>p.category==String(c._id)).length
                    let obj = c.toObject()
                    obj.length = len
                    return obj
                })
                res.json(productCount)
            })
            .catch((err) => console.log(err))
}
// POST /categories- create a new category

module.exports.create =(req,res)=>{
    const body = req.body
    const category = new Category(body)
    category.save()
    .then((category) => {
        res.json(category)
    })
    .catch((err) => {
        res.json(err)
    })
}

// GET /categories/:id - retrieve a category with given id
module.exports.show = (req,res)=>{
    const id = req.params.id
    Category.findById(id)
        .then((category)=>{
            if(category) {
                res.json(category)

            } else {// promise still resolved, in case of category is null
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

// PUT /categories/:id - updates a properties of category with given id

module.exports.update = (req,res)=>{
    console.log("..")
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body,{new : true, runValidators: true})
     .then((category)=>{
         if(category) {
             res.json(category)
         } else {
             res.json({})
         }

     })
     .catch((err)=>{
         res.json(err)

     })

}

// DELETE /categories/:id - delete a category with given id

module.exports.destroy = (req,res)=>{
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then((category)=>{
        if(category){
            res.json(category)
        } else {
            res.json({})
        }

    })
    .catch((err)=>{
        res.json(err)
    })
}