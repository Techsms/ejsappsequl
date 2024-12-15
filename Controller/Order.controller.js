import Order from"../Model/Order.model.js"


export const createOrder=(request,response,next)=>{
    Order.create(request.body)
    .then((result)=>{
        return response.status(200).json({msg:"order created successfully"})
    }).catch((err)=>{
        return response.status(500).jsaon({msg: "order not created"})
    })
}
export const deleteOrder=(request,response,next)=>{
    let name = request.params.name;
        Order.destroy({where:{name}})
        .then(result=>{
          return result ? response.status(200).json({message: "Order removed.."}) : response.status(404).json({error: "Request resource not found | Order not exist"});
        }).catch(err=>{
            console.log(err);
        });
    }


export const orderHistory=


