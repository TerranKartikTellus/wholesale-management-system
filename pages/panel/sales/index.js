import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import clientPromise from "/lib/mongodb";

import { useRouter } from 'next/router';
import React ,{useState} from "react"

export default function Panel({sales}) {
        const router = useRouter()
          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                 <Head>
        <title>View Sales </title>
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
                                      <div className="font-extrabold tracking-wider text-3xl">Sales</div>
                                      <div className="text-2xl tracking-wider"><Table msg={router.query.msg} sales={sales} ></Table></div>
                                      
                              </div>
                    </div>
          </div>
);
}

function Table({msg,sales}){
        const [newRetailer , setNewRetailer] = useState(msg);
        const [error , setError] = useState();

        const [id , setId] = useState();
        const [upd, setupd] = useState();
        async function Delete(){
          //  e.preventDefault();
          console.log(id);
       
          if(confirm('Are you sure you want to delete this item ?')){
            const response = await fetch(
                        '/api/operations/sales/delSales',
                        {
                                method: 'POST',
                                body: JSON.stringify(
                                        {
                                                '_id': id
                                        }
                                ),
                                headers: {
                                        'Content-Type': 'application/json'
                                }
                        }
                );
                const jsonResponse = await response.json();
                console.log(jsonResponse); 
                if(jsonResponse.msg == 'Deletion Completed'){
                        window.location.replace("/panel/sales?msg=Item%20Deleted");
                }
                else {
                        setError(['An Error has Occured','Please Retry']);
                        console.log("qw->",error);
                }
          }
                
                
        }

const [ccart,setccart] = useState();
const [showcart,setshowcart] = useState(false);

        return(
          <div className="mx-auto flex flex-row items-center justify-center mt-5">
            
            {
        upd && 
          <div className="p-14 absolute top-32 left-auto right-auto z-50 w-9/12 bg-gray-100 bg-opacity-95 scale-90 hover:scale-95 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out ">
            <div className="flex flex-row justify-between items-center text-5xl font-semibold">
              <div>UPDATE</div>
              <div><button onClick={()=>setupd()} ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg></button></div>  
            </div>  

            {/* <div className="py-20">
              <Form upd={upd} ></Form>
            </div> */}
          </div>   
      }
      {
              showcart && 
              <div className="relative top-0 left-0 ">
                      <table className="absolute w-[700px] scale-90 text-center -top-52 -translate-y-52 left-14  p-5">
                      <div className="bg-gray-100 bg-opacity-90 w-full">Order Cart details</div>
                          <tr className="w-full mt-1 bg-gray-100 bg-opacity-80">
                            <th className="w-[10px] ">sno</th>
                            <th className="w-[100px] ">Product Id</th>
                            <th className="w-[100px] ">Quantity</th>
                          </tr>
      { ccart.map((i,x=0)=>(

                          <tr key={i.pid} className="mt-1 bg-gray-100 border-b-2 border-gray-900">
                            <td className="w-[100px] "> {x+1}. </td>
                            <td className="w-[100px] ">{i.id}</td>
                            <td className="w-[100px] ">{i.quantity}</td>
                          </tr>
                              ))

                        }
                        </table>
                        </div>
      
      }      
            {
              sales
              ? 
              <div className="">
                {
                                              newRetailer && 
                                              <div className="flex flex-row justify-between items-start w-96 p-2 tracking-wider m-1 rounded-lg absolute right-0 top-0 bg-green-600 text-gray-200">
                                                      {
      
                                                              <div >
                                                                      <div className="text-xl">{newRetailer}</div>
                                                                      
                                                                      
                                                              </div>
                                                      }
                                                      <div><button onClick={()=>{setNewRetailer("")}} className=" text-2xl bg-gray-900 p-2 ml-3 rounded-md">X</button></div>        
                                              </div>
                }
                <div>
                  <table className="text-center px-2 py-1 "> 
                    <tr className="font-mono text-xl border-b-4 tracking-widest">
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Sno</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Order ID</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Retailer ID</th>
                
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Contact</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Cost</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Payment Mode</th>
                      
                       <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">View Cart</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Delete</th>
                      
                    </tr>
                  
                {sales.map((i,x=1)=>(
                  <tr key={i.rid}  className="border-b-2 border-gray-800 tracking-wider bg-gray-700 bg-opacity-30 hover:bg-opacity-50">
                    <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{x+1}</td>
                    <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{i.orderid}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.retailerid}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.timestamp}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.netCost}</td>
                        <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.paymentMethod}</td>
      
                  
                  <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-blue-600
                   transition-all duration-300 ease-in-out"
                 onClick={
                    ()=>{setccart(i.cart); setshowcart(!showcart); }
                }
                 >
                   <img src="/edit.svg" className="w-7 h-7 mx-auto"></img>
                </button>
              </td>
                    <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-red-600
                   transition-all duration-300 ease-in-out"
                 onClick={()=>{setId(i._id); Delete(i);}} 
                 onMouseEnter={()=>{setId(i._id); }} >
                   <img className="w-7 h-7 mx-auto" src="/delete.svg"></img>
                </button>
              </td>
                  
                  </tr>
                ))}
                </table>
                </div>
              </div> : <div className="text-3xl bg-gray-800 text-gray-100 ring-2 ring-red-600">No retialers found</div>
            }
          </div>
        );
      }
      
      

            
      export async function getServerSideProps(context) {
       
         const client = await clientPromise;
       const db = client.db("wholesale");
        const AllRetailers = await db
          .collection("sales")
          .find({})
          .sort({ metacritic: -1 })
          .limit(20)
          .toArray();
        console.log(AllRetailers);
        
        return {
          props: {
            sales: JSON.parse(JSON.stringify(AllRetailers)),
          } // will be passed to the page component as props
        }
      }
