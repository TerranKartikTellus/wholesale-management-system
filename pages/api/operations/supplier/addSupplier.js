// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import supplier from '/schema/supplier';

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
  res.status(201).json({ sname: 'Supplier Name' })
  console.log(
            req.body
  );
}

async function Insert(db,data){
  const  u =  await db.collection("supplier").insert(data);
  return u.insertedCount ;
}