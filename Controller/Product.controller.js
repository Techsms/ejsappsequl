import Product from "../Model/Product.model.js"

export const saveInBulk = (request,response,next)=>{
    let data = [];
    for(let product of request.body.products){
        let name = product.category;
        delete product.category;
        product.categoryName = name;
        data.push(product);
    }
    Product.bulkCreate(data)
    .then(result=>{
        return response.status(201).json({message: "All product saved.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    })
}

export const productList = (request,response,next)=>{
    Product.findAll({raw: true})
    .then(result=>{
      return response.status(200).json({product: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}

export const deleteProduct = (request,response,next)=>{
    let id = request.params.id;
    Product.destroy({where:{id}})
    .then(result=>{
      return result ? response.status(200).json({message: "Product removed.."}) : response.status(404).json({error: "Product not find"});
    }).catch(err=>{
        console.log(err);
    });
}