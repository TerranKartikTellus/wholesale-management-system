import user from '/schema/product';

import clientPromise from "/lib/mongodb";

export default async function handler(req, res) {
   console.log(
            req.body
  );
 const client = await clientPromise;
 const db = client.db("wholesale");
  if(!req.body){
    res.status(500).json({ msg: 'Invalid Inputs' })
  }else{
    try{
    if(Insert(db,req.body)){
    res.status(201).json({ msg: 'Insertion Completed' })
    }
    }catch(e){
      res.status(500).json({ msg: 'unable to insert' })
    }
  }
  res.status(201).json({ name: 'John Doe' })
  console.log(
            req.body
  );
}

async function Insert(db,data){
  const  u =  await db.collection("products").insert(data);
  return u.insertedCount ;
}