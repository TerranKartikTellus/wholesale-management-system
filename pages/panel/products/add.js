import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import { useState } from "react";
import clientPromise from "/lib/mongodb";


export default function Panel({Allcategories}) {


          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    <Head>
        <title>Add new Products </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className="h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                             <div className="flex flex-row items-center justify-between">
                              
                              <a href="/panel" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Back</a>
                              
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              </div>
                              <div className="p-20 bg-gray-100 mt-10 mx-10 bg-opacity-30">
                                      <div className="text-2xl tracking-wider">Add New Product</div>
                                      <br></br>
                                      <div><Form cate={Allcategories}></Form></div>
                              </div>
                              
                    </div>
          </div>
);
}
function Form({cate}){
        
        const [pid             , setPID]           = useState("");         
        const [pname     , setPNAME]         = useState(""); 
        const [mrp      , setMRP]           = useState(""); 
        const [originalPrice   , setOriginalPrice] = useState(""); 
        const [rating   , setRATING]        = useState("");
        const [quantity , setQUANTITY]      = useState(""); 
        const [pCategoryId , setPCATEGORYID]      = useState(""); 
         const [error , setError] = useState();
        async function submitForm(e){
         e.preventDefault();
                   console.log("sdad");
                
         const response = await fetch(
                 '/api/operations/products/addproduct',
                 {
                         method: 'POST',
                         body: JSON.stringify(
                                 {
                                         'pid': pid,
                                         'pname': pname,
                                         'mrp': mrp,
                                         'originalPrice': originalPrice,
                                         'rating': rating,
                                         'quantity': quantity,
                                         'pCategoryId': pCategoryId
                                 }
                                 ),
                                headers: {
                                        'Content-Type': 'application/json'
                                }
                        }
                );
         const jsonResponse = await response.json();
         console.log(jsonResponse); 
         if(jsonResponse.msg == 'Insertion Completed'){
                 window.location.replace("http://localhost:3000/panel/products");
         }
         else {
                 setError(['An Error has Occured','Please Retry'])
         }
 }
 return (
         <div>
                 <form  >
                         {
                                 error && 
                                 <div className="flex flex-row justify-between items-start w-96 p-2 tracking-wider m-1 rounded-lg absolute right-0 top-0 bg-red-600 text-gray-200">
                                         {

                                                 <div >
                                                         <div className="text-xl">{error[0]}</div>
                                                         <div className="text-base">{error[1]}</div>
                                                         
                                                 </div>
                                         }
                                         <div><button onClick={()=>{setError("")}} className=" text-2xl bg-gray-900 p-2 ml-3 rounded-md">X</button></div>        
                                 </div>
                         }
                         <div className=" flex flex-row text-xl capitalize justify-start items-center">
                         <div className="w-1/2 bg-transparent">pid:</div> 
                         <input required className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900" type="number" name="pid"
                         onChange={()=>{setPID(event.target.value);}}
                         ></input><br></br>
                        </div>
                        <div className=" flex flex-row text-xl capitalize justify-start items-center">
                         <div  className="w-1/2 bg-transparent" >pname:</div>
                          <input required className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900" type="text" name="pname"
                         onChange={()=>{setPNAME(event.target.value);}}
                         ></input>
                         </div>

                         <div className=" flex flex-row text-xl capitalize justify-start items-center">
                         <div  className="w-1/2 bg-transparent" >mrp:</div> 
                         <input required className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"
                         onChange={()=>{setMRP(event.target.value);}}
                         type="number" name="mrp"></input>        
                         </div>

                         <div className=" flex flex-row text-xl capitalize justify-start items-center">
                         <div  className="w-1/2 bg-transparent" >originalPrice:</div>
                          <input required className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"
                          onChange={()=>{setOriginalPrice(event.target.value);}}
                         type="text" name="position"></input>
                         </div>
                         <div className=" flex flex-row text-xl capitalize justify-start items-center">
                         <div  className="w-1/2 bg-transparent" >rating:</div> 
                         <input  required className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"
                         onChange={()=>{setRATING(event.target.value);}}
                         type="number" name="rating"></input>        
                         </div>
                         <div className=" flex flex-row text-xl capitalize justify-start items-center">
                         <div  className="w-1/2 bg-transparent" >quantity: 
                         </div>
                         <input  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"
                         onChange={()=>{setQUANTITY(event.target.value);}}
                         type="number" name="quantity"></input>        
                         </div>
                         <div className=" flex flex-row text-xl capitalize justify-start items-center">
                          <div  className="w-1/2 bg-transparent" > Product Category Id:</div>
                           <select onChangeCapture={()=>{setPCATEGORYID(event.target.value);}} id="cars" name="cars" className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900">
                             
                            {
                                    cate.map(i=>(
                                            <option onClick={()=>{setPCATEGORYID(event.target.value);}} key={i.pCategoryId} value={i.pCategoryId}>{i.pCategory}</option>
                                    ))
                            }
                             
                            
                           </select>
                           
                           {/* <input  "
                         onChange={()=>{setPCATEGORYID(event.target.value);}}
                         type="number" name=""></input>         */}
                         </div>

                         
                         <div><button onClick={submitForm}  name="Submit" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Add Products</button></div>
                 </form>
         </div>
 );
}

export async function getServerSideProps(context) {
 
   const client = await clientPromise;
 const db = client.db("wholesale");
  const Allcategories = await db
    .collection("productCategory")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  console.log(Allcategories);
  
  return {
    props: {
      Allcategories: JSON.parse(JSON.stringify(Allcategories)),
    } // will be passed to the page component as props
  }
}