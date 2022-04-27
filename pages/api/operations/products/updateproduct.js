// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from '/schema/user';

import clientPromise from "/lib/mongodb";
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
   console.log(
            'api got',req.body
  );
 const client = await clientPromise;
 const db = client.db("wholesale");
  if(!req.body){
    res.status(500).json({ msg: 'Invalid Inputs' })
  }else{
    try{
    if(Update(db,req.body)){
     res.status(201).json({ msg: 'Update Completed',worked: 1 })
    }
    }catch(e){
      res.status(500).json({ msg: 'unable to update' })
    }
  }
  
  
  console.log(
            req.body
  );
}

async function Update(db,data){
  const rowId =  ObjectId(data._id);
  console.log('ddaattaa',data);
  
  const  u =  await db.collection("product")
  .updateOne(
            {  _id: rowId  },
            {
               $set: {
                      "pid": `${data.pid}`,
                      "pname": `${data.pname}`,
                      "mrp": `${data.mrp}`,
                      "originalPrice": `${data.originalPrice}`,
                      "rating": `${data.rating}`,
                      "quantity": `${data.quantity}`,
                      "pCategoryId": `${data.pCategoryId}`
                    } 
    }
 );
 console.log('modifiedCount:',u.modifiedCount);
  return u.modifiedCount ;
}
// db.user.updateOne( {_id: ObjectId('625c3e5b52d6af366088efbd') }, {$set: {uid: 34}} );