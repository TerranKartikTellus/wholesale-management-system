import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import clientPromise from "/lib/mongodb";
import Link from 'next/link'

import { useState } from "react";

export default function Panel({products,retailers}) {

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    <Head>
        <title>Log new Sals </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> 
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className=" overflow-y-auto h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                              <div className="flex flex-row items-center justify-between">
                              <Link href="/panel">

                              <a  className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Back</a>
                              </Link>
                              
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              </div>
                              <div className="p-20 bg-gray-100 mt-10 mx-10 bg-opacity-30">
                                      <div className="text-2xl tracking-wider text-3xl">Add new Sales</div>
                                      <br></br>
                                      <div><Form product={products} retailer={retailers}></Form></div>
                              </div>

                        

                    </div>
          </div>
);
}

function Form({product,retailer}){
         


const [orderid,setorderid] = useState();
const [retailerid,setretailerid ]= useState();
const [timestamp,settimestamp ]= useState();
const [netCost,setnetCost ]=useState();
const [cart,setCart] = useState([]);
const [payment,setpayment] = useState();

const [item,setItem] = useState();
const [qty,setQty] = useState();
const [show,setShow] = useState(false);
 console.log("products: ",product);
 console.log("retailer: ",retailer);
 console.log("cart: ",cart);

 function handleAddNewItem() {
    // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
    
    const updateUsers = [
      // copy the current users state
      ...cart,
      // now you can add a new object to add to the array
      {
        // adding a new user name
        id: item,
        // with a type of member
        quantity: qty
      }
    ];
    // update the state to the updatedUsers
    setCart(updateUsers);
  }

   async function submitForm(e){
                e.preventDefault();
             console.log("sdad");
                     
                     const response = await fetch(
                             '/api/operations/sales/addSales',
                             {
                                     method: 'POST',
                                     body: JSON.stringify(
                                             {
                                                    'orderid':orderid,
                                                    'retailerid':retailerid,
                                                    'timestamp':timestamp,
                                                    'netCost':netCost,
                                                    'cart':cart ,
                                                    'paymentMethod': payment
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
                             window.location.replace("/panel/sales?msg=New%20Sales%20Added");
                     }
                     else {
                             setError(['An Error has Occured','Please Retry'])
                     }
        }
        return(
                <div >
                        {
                                show && 
                                <div className="h-[600px] relative -top-36 bg-gray-100 w-[1100px] bg-opacity-90 -left-20 p-5 rounded shadow-xl">
                                        <div className="flex flex-row justify-between">
                                                <div className="text-3xl">Add Item</div>
                                                <button className="underline" onClick={()=>setShow(!show)}>Close</button>
                                        </div>

                                        <div className="scale-75 flex flex-row text-xl  justify-between my-5">
                                                <div className="w-1/5 text-2xl">Product Id</div>
                                                <input required placeholder="ID" onChange={()=>{ setItem(event.target.value); }} className="mr-5 w-1/5 outline-none p-2 bg-transparent border-b-2 border-gray-900 " type='number'></input>
                                                <input required placeholder="Quantity" onChange={()=>{ setQty(event.target.value); }} className="w-1/5 ml-5  outline-none  p-2 bg-transparent border-b-2 border-gray-900 " type='number'></input>
                                                
                                                <button onClick={ handleAddNewItem} className="w-1/5 mx-10 bg-gray-900 text-gray-100 p-2 shadow-xl rounded">Add</button>
                                        </div>

                                        {cart && <div>
                                                <table className="w-full ">
                                                        <tr>
                                                                <th>Product ID</th>
                                                                <th>Product Quantity</th>
                                                                
                                                        </tr>
                                                {cart.map(i=>(
                                                        <tr className="w-full text-center bg-gray-100 border-b-2 border-gray-800 " key={i.pid}>
                                                           <td className="px-10">{i.id}</td>  
                                                           <td className="px-10">{i.quantity} </td>
                                                        </tr>
                                                ))}
                                                </table>
                                        </div>
                                        }
                                </div>
                        }
                        <form method="POST">
                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Order Id</label>
                         <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                setorderid(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="number"  placeholder="Order ID"></input>
                        </div>
                   

                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Date</label>
                         <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                settimestamp(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="date"  placeholder="22-04-2001"></input>
                        </div>


                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Net Cost</label>
                         <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                setnetCost(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="number"  placeholder="$232342"></input>
                        </div>
                         <div className=" flex flex-row text-xl capitalize justify-start items-center">
                          <div  className="w-1/2 bg-transparent" > Retailer Id:</div>
                               <select onChangeCapture={()=>{setretailerid(event.target.value);}} id="cars" name="cars" className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900">
                             
                            {
                                    retailer.map(i=>(
                                            <option  key={i.rid} value={i.rid}>  {i.rname} | {i.rid}  </option>
                                    ))
                            }
                             
                            
                           </select>
                               
                         
                           
                         </div>
                        <div className=" flex flex-row text-xl capitalize justify-start items-center">
                          <div  className="w-1/2 bg-transparent" > Payment Method:</div>
                           <select onChangeCapture={()=>{setpayment(event.target.value);}} id="cars" name="cars" className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900">
                         
                               <option onClick='' value='Credit'>Credit</option>
                               <option onClick='' value='Cash'>Cash</option>
                               
                               
                           </select>
                           
                         </div>

                       

                         <div className="  mt-5 flex flex-row justify-between items-center">
                                 <div className="text-3xl tracking-widest font-extrabold">Cart</div>
                                 <button onClick={(e)=>{e.preventDefault; setShow(!show);}} className="text-xl tracking-widest  bg-gray-800 text-gray-100 p-2 rounded ">Add Items</button>
                          
                          </div>
                         
                         
                         
                         {cart && <div>
                                  <div  className="flex flex-row justify-between w-[300px] text-2xl rounded mt-5">
                                                  <div className="w-[100px] bg-gray-800 text-gray-100 p-1 text-center font-semibold">Sno</div>
                                                  <div className="w-[100px] bg-gray-800 text-gray-100 p-1 text-center font-semibold">PID</div> 
                                                  <div className="w-[100px] bg-gray-800 text-gray-100 p-1 text-center font-semibold">QTY</div>
                                          
                                  </div>
                          {
                                cart.map((i,x=0)=>(
                                          <div key={i.id} className="flex flex-row justify-between w-[300px] my-2 font-semibold text-xl">
                                                  <div className="w-[100px] text-center tracking-widest bg-slate-50">{x+1}</div>
                                                  <div className="w-[100px] text-center tracking-widest bg-slate-50 ml-1">{i.id}</div> 
                                                  <div className="w-[100px] text-center tracking-widest bg-slate-50 ml-1">{i.quantity}</div>
                                          
                                          </div>
                                  ))
                          }
                          
                                
                         </div>
                        }
                        <button type="submit" onClick={submitForm} className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider" style={{position:'relative', right: '80px'}}>Submit</button>
                        
                        </form>
                </div>
        );
}
export async function getServerSideProps(context) {
 
   const client = await clientPromise;
 const db = client.db("wholesale");
  const products = await db
    .collection("product")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

   const AllRetailers = await db
          .collection("retailer")
          .find({})
          .sort({ metacritic: -1 })
          .limit(20)
          .toArray();
        // console.log(AllRetailers);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      retailers: JSON.parse(JSON.stringify(AllRetailers)),
      
    } // will be passed to the page component as props
  }
}