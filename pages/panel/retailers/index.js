import SidePanel from "/components/sidepanel";
import Head from 'next/head';
import clientPromise from "/lib/mongodb";

import React ,{useState} from "react"
import { useRouter } from 'next/router';


export default function Panel({AllRetailers}) {

        const msgNewRetailer =[ null , null ];
        const router = useRouter()
        console.log(router.query.newRetailer);
        console.log(AllRetailers);

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                   <Head>
        <title>View all retailers </title>
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
                                      <div className="text-2xl tracking-wider">Retailers</div>
                                      <div className="mx-auto "><Table msg={router.query.newRetailer} retailers={AllRetailers}></Table></div>
                              </div>
                    </div>
          </div>
);
}

function Table({msg,retailers}){
        const [newRetailer , setNewRetailer] = useState(msg);
        const [error , setError] = useState();

        const [id , setId] = useState();
        const [upd, setupd] = useState();
        async function Delete(){
          //  e.preventDefault();
          console.log(id);
       
          if(confirm('Are you sure you want to delete this item ?')){
            const response = await fetch(
                        '/api/operations/retailer/delRetailer',
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
                        window.location.replace("/panel/retailers?newRetailer=Retailer%20Deleted");
                }
                else {
                        setError(['An Error has Occured','Please Retry']);
                        console.log("qw->",error);
                }
          }
                
                
        }


        return(
          <div className="mx-auto flex flex-row items-center justify-center mt-5">
            
            {
        upd && 
          <div className="p-14 absolute top-32 left-auto right-auto z-50 w-9/12 bg-gray-100 bg-opacity-95 scale-90 hover:scale-95 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out ">
            <div className="flex flex-row justify-between items-center text-5xl font-semibold">
              <div>UPDATE</div>
              <div><button onClick={()=>setupd()} ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg></button></div>  
            </div>  

            <div className="py-20">
              <Form upd={upd} ></Form>
            </div>
          </div>   
      }
            
            {
              retailers
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
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Retailer ID</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Retailer Name</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Address</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Contact</th>
                       <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Update</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Delete</th>
                      
                    </tr>
                  
                {retailers.map((i,x=1)=>(
                  <tr key={i.rid}  className="border-b-2 border-gray-800 tracking-wider bg-gray-700 bg-opacity-30 hover:bg-opacity-50">
                    <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{x+1}</td>
                    <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{i.rid}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.rname}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.raddress}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.rcontact}</td>
      
                  
                  <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-blue-600
                   transition-all duration-300 ease-in-out"
                 onClick={
                    ()=>{setupd([i._id,i.rid,i.rname,i.raddress,i.rcontact]);}
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
          .collection("retailer")
          .find({})
          .sort({ metacritic: -1 })
          .limit(20)
          .toArray();
        console.log(AllRetailers);
        
        return {
          props: {
            AllRetailers: JSON.parse(JSON.stringify(AllRetailers)),
          } // will be passed to the page component as props
        }
      }


      
function Form({upd}){
        
        const [retailerId              , setRID]         = useState(upd[1]);         
        const [retailerName            , setRNAME]       = useState(upd[2]); 
        const [retailerAddress         , setRADDRESS]    = useState(upd[3]); 
        const [retailerContactnumber   , setRCONTACT]    = useState(upd[4]); 
        const [error , setError] = useState();

        async function submitForm(e){
                e.preventDefault();
             console.log("sdad");
                     
                     const response = await fetch(
                             '/api/operations/retailer/updateRetailer',
                             {
                                     method: 'POST',
                                     body: JSON.stringify(
                                             {
                                               '_id':upd[0],
                                                     'rid': retailerId,
                                                     'rname': retailerName,
                                                     'raddress': retailerAddress,
                                                     'rcontact': retailerContactnumber
                                             }
                                     ),
                                     headers: {
                                             'Content-Type': 'application/json'
                                     }
                             }
                     );
                     const jsonResponse = await response.json();
                     console.log(jsonResponse); 
                     if(jsonResponse.worked){
                             window.location.replace("/panel/retailers?newRetailer=Retailer%20Updated");
                     }
                     else {
                             setError(['An Error has Occured','Please Retry'])
                     }
             }


        return(
                <div>
                  _id:{upd[0]}
                        <form >

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
                        <label className="w-1/2 bg-transparent" for="rid">Retailer Id <span className="p-1 text-red-500 font-semibold">old value: {upd[1]}</span></label>
                        <input required defaultValue={upd[1]}  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"
                         name="retailerId" onChange={()=>{setRID(event.target.value);}}
                        type="number"  id="123"  placeholder="Enter Id"></input>
                        </div>

                        <br></br>
                        <div className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" for="rname">Product Name <span className="p-1 text-red-500 font-semibold">old value: {upd[2]}</span></label>
                        <input defaultValue={upd[2]} required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"
                         name="retailerName" onChange={()=>{setRNAME(event.target.value);}}
                        type="string"  id="name"  placeholder="Enter Name"></input>
                        </div>
                        <br></br>

                        <div className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" for="raddress">Retailer address <span className="p-1 text-red-500 font-semibold">old value: {upd[3]}</span></label>
                        <input defaultValue={upd[3]} required className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900" onChange={()=>{setRADDRESS(event.target.value);}}
                          name="retaileraddress"
                         type="string"  id="address" placeholder="Enter Address"></input>
                        </div>
                        <br></br>

                        <div className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" for="rcontact">Retailer Contact <span className="p-1 text-red-500 font-semibold">old value: {upd[4]}</span></label>
                        <input defaultValue={upd[4]} required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900" onChange={()=>{setRCONTACT(event.target.value);}}
                         name="retailerContactnumber"
                         type="number"  id="123" placeholder="Enter Contact number"></input>
                        </div>
                        <button onClick={submitForm} type="submit" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider" style={{position:'relative', right: '80px'}}>
                                Submit
                        </button>
                        </form>
                </div>
        );
}