import SidePanel from "/components/sidepanel";
import Head from 'next/head';
import clientPromise from "/lib/mongodb";
import Link from 'next/link'

import React ,{useState} from "react"
import { useRouter } from 'next/router';


export default function Panel({AllSuppliers}) {

        const msgNewSupplier =[ null , null ];
        const router = useRouter()
        // console.log(router.query.newSupplier);
        // console.log("-----------------------",AllSuppliers);

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                     <Head>
        <title>View Suppliers </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className="h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                              <div className="flex flex-row items-center justify-between">
                              <Link href="/panel">

                              <a  className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Back</a>
                              </Link>
                              
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              </div>
                              <div className="p-20 bg-gray-100 mt-10 mx-10 bg-opacity-30">
                                      <div className="text-2xl tracking-wider">Suppliers</div>

                                      <div className="mx-auto "><Table msg1={router.query.msg} suppliers={AllSuppliers}></Table></div>

                                    
                              </div>
                    </div>
          </div>
);
}


function Table({msg1,suppliers}){
        const [msg , setmsg] = useState(msg1);

       console.log("--------------",suppliers);

        const [error , setError] = useState();

        const [id , setId] = useState();
          const [upd, setupd] = useState();
     
 async function Delete(){
          //  e.preventDefault();
          console.log('--------------------',id);
       
          if(confirm('Are you sure you want to delete this item ?')){
            const response = await fetch(
                        '/api/operations/supplier/delSupplier',
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
                        window.location.replace("/panel/suppliers?msg=User%20Deleted");
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
              <div><button onClick={()=>setupd()} ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg></button></div>  
            </div>  

            <div className="py-20">
              <Form upd={upd} ></Form>
            </div>
          </div>   
      }
            {
              suppliers 
              ? 
              <div className="">
                {
                                              msg && 
                                              <div className="flex flex-row justify-between items-start w-96 p-2 tracking-wider m-1 rounded-lg absolute right-0 top-0 bg-green-600 text-gray-200">
                                                      {
      
                                                              <div >
                                                                      <div className="text-xl">{msg}</div>
                                                                      
                                                                      
                                                              </div>
                                                      }
                                                      <div><button onClick={()=>{setmsg("")}} className=" text-2xl bg-gray-900 p-2 ml-3 rounded-md">X</button></div>        
                                              </div>
                }
                <div>
                  <table className="text-center px-2 py-1 "> 
                    <tr className="font-mono text-xl border-b-4 tracking-widest">
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Sno</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Supplier ID</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Supplier Name</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Address</th>
                      <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Contact</th>
                       <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Update</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Delete</th>
                      
                    </tr>
                  
                {suppliers.map((i,x=1)=>(
                  <tr key={i.sid}  className="border-b-2 border-gray-800 tracking-wider bg-gray-700 bg-opacity-30 hover:bg-opacity-50">
                    <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{x+1}</td>
                    <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{i.sid}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.sname}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.saddress}</td>
                    <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.scontact}</td>
      
                  
                    <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-blue-600
                   transition-all duration-300 ease-in-out"
                 onClick={
                    ()=>{setupd([i._id,i.sid,i.sname,i.saddress,i.scontact]);}
                 }
                 >
                   <img src="/edit.svg" className="w-7 h-7 mx-auto"></img>
                </button>
              </td>
              
              <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-red-600
                   transition-all duration-300 ease-in-out"
                 onClick={()=>{setId(i._id); Delete(i._id);}} 
                 onMouseEnter={()=>{setId(i._id); }} >
                   <img className="w-7 h-7 mx-auto" src="/delete.svg"></img>
                </button>
              </td>
                  
                  </tr>
                ))}
                </table>
                </div>
              </div> : <div className="text-3xl bg-gray-800 text-gray-100 ring-2 ring-red-600">No suppliers found</div>
            }
          </div>
        );
      }
      
      export async function getServerSideProps(context) {
       
         const client = await clientPromise;
       const db = client.db("wholesale");
        const AllSuppliers = await db
          .collection("supplier")
          .find({})
          .sort({ metacritic: -1 })
          .limit(20)
          .toArray();
        // console.log(AllSuppliers);
        
        return {
          props: {
            AllSuppliers: JSON.parse(JSON.stringify(AllSuppliers)),
          } // will be passed to the page component as props
        }
      }



function Form({upd}){

        const [sid, setSID] = useState(upd[1]);
        const [sname, setSNAME] = useState(upd[2]);
        const [saddress, setSADDRESS] = useState(upd[3]);
        const [scontact, setSCONTACT] = useState(upd[4]);
        const [error , setError] = useState();

        async function submitForm(e){
                e.preventDefault();
             console.log("sdad");
                     
                     const response = await fetch(
                             '/api/operations/supplier/updateSupplier',
                             {
                                     method: 'POST',
                                     body: JSON.stringify(
                                             {
                                                '_id':upd[0],
                                                     'sid': sid,
                                                     'sname': sname,
                                                     'saddress': saddress,
                                                     'scontact': scontact
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
                             window.location.replace("/panel/suppliers?msg=Supplier%20Updated");
                     }
                     else {
                             setError(['An Error has Occured','Please Retry'])
                     }
             }

        return(
                <div>
                  _id:{
                    upd[0]
                  }
                        <form>
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


                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" htmlFor="sid">Supplier ID <span className="p-1 text-red-500 font-semibold">old value: {upd[1]}</span></label>
                         <input defaultValue={upd[1]} required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                setSID(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="number"  aria-describedby="emailHelp" placeholder="Enter ID"></input>
                        </div>

                        <br></br>
                        
                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Supplier Name <span className="p-1 text-red-500 font-semibold">old value: {upd[2]}</span></label>
                         <input defaultValue={upd[2]} required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierName" onChange = {() => {setSNAME(event.target.value);}} type="string"  placeholder="Enter Name"></input>
                        </div>
                        <br></br>
                        
                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent " >Supplier Address  <span className="p-1 text-red-500 font-semibold">old value: {upd[3]}</span></label>
                         <input defaultValue={upd[3]}  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierAddress" onChange = {() => {setSADDRESS(event.target.value);}} type="string"   placeholder="Enter Address"></input>
                        </div>
                        <br></br>
                        
                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Contact Number  <span className="p-1 text-red-500 font-semibold">old value: {upd[4]}</span></label>
                         <input defaultValue={upd[4]} required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierContact" onChange = {() => {setSCONTACT(event.target.value);}} type="number"  placeholder="Enter Contact"></input>
                        </div>
                        <button type="submit" onClick={submitForm} className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider" style={{position:'relative', right: '80px'}}>Submit</button>
                        </form>
                </div>
        );
}