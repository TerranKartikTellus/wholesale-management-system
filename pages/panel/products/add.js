import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import { useState } from "react";


export default function Panel() {


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
                                      <div><Form></Form></div>
                              </div>
                              
                    </div>
          </div>
);
}
function Form(){
        
        const [pid             , setPID]           = useState("");         
        const [productName     , setPNAME]         = useState(""); 
        const [productMRP      , setMRP]           = useState(""); 
        const [productOPRICE   , setOriginalPrice] = useState(""); 
        const [productRating   , setRATING]        = useState(""); 
        const [productQuantity , setQUANTITY]      = useState(""); 
        const [productCategory , setCATEGORY]      = useState(""); 
        
        
        async function submitForm(e){
                e.preventDefault();
                console.log(pid,productName,productMRP,productOPRICE,productRating,productQuantity,productCategory);

        }
        return(
                <>
                        <form >
                        <div className="form-group">
                        <label for="pid">Product ID</label>
                        <input
                         name="productID" onChange={
                                 ()=>{
                                         setPID(event.target.value);
                                         console.log(pid);}
                                }
                        type="number" className="form-control" id="123" placeholder="Enter ID"></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label for="pname">Product Name</label>
                        <input 
                         name="productName" onChange={()=>{setPNAME(event.target.value);}}
                        type="charecterdata" className="form-control" id="name"  placeholder="Enter Name"></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label for="mrp">Maximum Retail Price</label>
                        <input onChange={()=>{setMRP(event.target.value);}}
                          name="productMRP"
                         type="number" className="form-control" id="123" placeholder="Enter MRP"></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label for="originalPrice">Original Price</label>
                        <input onChange={()=>{setOriginalPrice(event.target.value);}}
                         name="productOriginalPrice"
                         type="number" className="form-control" id="123" placeholder="Enter Original price"></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label for="rating">Please suggest a quality rating for the product </label>
                        <input onChange={()=>{setRATING(event.target.value);}} 
                        name="productRating" type="number" className="form-control" id="5" placeholder="Enter Rating"></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input onChange={()=>{ setQUANTITY(event.target.value);}}
                        name="productQuantity" type="number" className="form-control" id="124" placeholder="Please input the quantity "></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label for="productcategoryId">Product category Id</label>
                        <input onChange={()=>{setCATEGORY(event.target.value);}}
                         name="productCaretoryId"
                         type="number" className="form-control" id="123" placeholder="Enter Id"></input>
                        </div>
                        <button onClick={submitForm} type="submit" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider" style={{position:'relative', right: '80px'}}>
                                Submit
                        </button>
                        </form>
                </>
        );
}