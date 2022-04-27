// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from '/schema/user';

import clientPromise from "/lib/mongodb";

export default async function handler(req, res) {
   console.log(
            '0000000000000000000000',req.body
  );
 const client = await clientPromise;
 const db = client.db("wholesale");
  if(!req.body){
    res.status(500).json({ msg: 'Invalid Inputs' });
  }else{
    try{
          let r =    Valid(db,req.body.id,req.body.pass);
    console.log('r==========================================',r);
          if(r){
         res.status(201).json({ msg: 'Login'  });
    }
    }catch(e){
      res.status(500).json({ msg: 'unable to login' })
    }
  }
  res.status(201).json({ name: 'John Doe' });
 
}

async function Valid(db,id,pass){
   const AllUsers = await db
    .collection("user")
    .find( {  uid: id , uFname: pass  })
    .toArray();

console.log("match",AllUsers);

 return AllUsers;

}