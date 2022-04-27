import user from '/schema/product';

import clientPromise from "/lib/mongodb";
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
   console.log(
            '--------------------',req.body._id
  );
  const id = req.body._id
 const client = await clientPromise;
 const db = client.db("wholesale");
  if(!req.body){
    res.status(500).json({ msg: 'Invalid Inputs' })
  }else{
    try{
    if(Delete(db,id)){
    res.status(201).json({ msg: 'Deletion Completed' })
    }
    }catch(e){ 
              console.log(e);
      res.status(500).json({ msg: 'Unable to perform delete' })
    }
  }
  res.status(201).json({ name: 'John Doe' })
  
}

async function Delete(db,id){
        const rowId =  ObjectId(id);
  const  u =  await db.collection("product").deleteOne({ "_id": rowId });
  console.log("Message from mongodb after performing deleteop",u);
  return u.deletedCount ;
}
