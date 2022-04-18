import {connectToDatabase} from "/lib/mongodb";

export default function handler(req, res) {

  const productID = req.body.name
//   ValidateProductInputs();
//   //are all inputs correct
//   if(ValidInputs==true){



//   }else{
//           const WhichInputIsWrong = ['name'];
//           res.status(200).json(
//                     { 
//                               msg: 'Invalid Input Found',
//                               detail: WhichInputIsWrong 
//           });          
//   }

  const {db} = await connectToDatabase();
  const data = db.collection('product');
  res.status(200).json({ name: 'John Doe' })

}
