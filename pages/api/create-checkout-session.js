/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async(req, res)=> {
    const {items,email}=req.body;
    const transformedItems=items.map(item=>({
        quantity:1,
        price_data:{
            currency:'usd',
            unit_amount:item.price*100,
            product_data:{
                name:item.title,
                images:[item.image]
            },
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:transformedItems,
        mode:"payment",
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/check_out`,
        metadata:{
            email,
            images:JSON.stringify(items.map(item=>item.image))
        },

    })
    res.status(200).json({id:session.id});

  }
