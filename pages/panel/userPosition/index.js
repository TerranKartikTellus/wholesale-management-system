import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import clientPromise from "/lib/mongodb";

import React ,{useState} from "react"
import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Panel({AllUsers}) {
// const msgNewProduct = [ null , null ];
// const msgNewCategory =[ null , null ];
// const msgNewSupplier =[ null , null ];
// const msgNewRetailer =[ null , null ];
const router = useRouter()
  console.log(router.query.msg);
console.log(AllUsers);
return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                     <Head>
        <title>View user positions </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className="overflow-y-auto h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                              <div className="flex flex-row items-center justify-between">
                              <Link href="/panel">

                              <a  className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Back</a>
                              </Link>
                              
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              </div>
                              <div className="mt-8 m-3 p-8 mx-auto">
                                <div className="mx-auto text-5xl font-mono font-bold">View User Position</div>
                                <div className="mx-auto "><Table msg={router.query.msg} users={AllUsers}></Table></div>
                              </div>
                    </div>
                    
          </div>
);
}
 function Table({msg,users}){
  const [newUser , setNewUser] = useState(msg);
  const [error , setError] = useState();

  const [id , setId] = useState();

  const [upd, setupd] = useState();

  
   async function Delete(){
          //  e.preventDefault();
          console.log('ddddd-------',id);
       
          if(confirm('Are you sure you want to delete this item ?')){
            console.log('id',id);
            const response = await fetch(
                        '/api/operations/userPosition/del',
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
                        window.location.replace("/panel/userPosition?msg=User%20Deleted");
                }
                else {
                        setError(['An Error has Occured','Please Retry']);
                        console.log("qw->",error);
                }
          }
                
                
        }
        console.log('---',upd);
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
        error && <div>{error}</div>
      }
      {
        users 
        ? 
        <div className="">
          {
                                        newUser && 
                                        <div className="flex flex-row justify-between items-start w-96 p-2 tracking-wider m-1 rounded-lg absolute right-0 top-0 bg-green-600 text-gray-200">
                                                {

                                                        <div >
                                                                <div className="text-xl">{newUser}</div>
                                                                
                                                                
                                                        </div>
                                                }
                                                <div ><button onClick={()=>{setNewUser("")}} className=" text-2xl bg-gray-900 p-2 ml-3 rounded-md">X</button></div>        
                                        </div>
          }
          <div>
            <table className="text-center px-2 py-1 "> 
              <tr className="font-mono text-xl border-b-4 tracking-widest">
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Sno</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Position Id</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Position Name</th>
                
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Update</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Delete</th>
                
              </tr>
            
          {users.map((i,x=1)=>(
            <tr key={i._id}  className="border-b-2 border-gray-800 tracking-wider bg-gray-700 bg-opacity-30 hover:bg-opacity-50">
              <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{x+1}</td>
              <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{i.pid}</td>
              <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.pname}</td>
             
            
             
              <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-blue-600
                   transition-all duration-300 ease-in-out"
                 onClick={
                    ()=>{setupd([i._id,i.pid,i.pname]);}
                 }
                 >
                   <img src="/edit.svg" className="w-7 h-7 mx-auto"></img>
                </button>
              </td>
             
              <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-red-600
                   transition-all duration-300 ease-in-out"
                 onClick={()=>{setId(i._id);  Delete();}} 
                 onMouseEnter={()=>{setId(i._id);console.log(i._id); }} >
                   <img className="w-7 h-7 mx-auto" src="/delete.svg"></img>
                </button>
              </td>


            </tr>
          ))}
          </table>
          </div>
        </div> : <div className="text-3xl bg-gray-800 text-gray-100 ring-2 ring-red-600">No users found</div>
      }
    </div>
  );
}

export async function getServerSideProps(context) {
 
   const client = await clientPromise;
 const db = client.db("wholesale");
  const AllUsers = await db
    .collection("userPosition")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  console.log(AllUsers);
  
  return {
    props: {
      AllUsers: JSON.parse(JSON.stringify(AllUsers)),
    } // will be passed to the page component as props
  }
}

function Tank({upd}){
  console.log('qqqqqqq',upd);
  return(
    <div>
      
      {upd[0]}
      {upd[2]}
      {upd[3]}
      {upd[4]}
      {upd[5]}
      {upd[6]}
    </div>
  );
}

 function Form ({upd}){

        
        console.log('sexxxx',upd[0]);

        const [pid , setUid] = useState(upd[1]);
        const [pname , setUname] = useState(upd[2]);
       
        const [error , setError] = useState();
        async function submitForm(e){
           e.preventDefault();
        
                
                const response = await fetch(
                        '/api/operations/userPosition/updateUserPosition',
                        {
                                method: 'POST',
                                body: JSON.stringify(
                                        {
                                                '_id': upd[0],
                                                'pid': pid,
                                                'pname': pname,
                                               
                                        }
                                ),
                                headers: {
                                        'Content-Type': 'application/json'
                                }
                        }
                );
                const jsonResponse = await response.json();
                console.log('json ressssppp',jsonResponse); 
                if(jsonResponse.worked){
                        window.location.replace("/panel/userPosition?msg=Updated%20User");
                }
                else {
                        setError(['An Error has Occured','Please Retry'])
                }
        }
        return (
                <div>
                  _id: {upd[0]}
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
                                <div   className="w-1/2 bg-transparent" >PID: <span className="p-1 text-red-500 font-semibold">old value: {upd[1]}</span></div> 
                                <input defaultValue={upd[1]} className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900" required type="number" name="uid"
                                onChange={()=>{setUid(event.target.value);}}
                                ></input><br></br>
                                </div>
                                <div className=" flex flex-row text-xl capitalize justify-start items-center">
                                <div  className="w-1/2 bg-transparent" >Position Name: <span className="p-1 text-red-500 font-semibold">old value: {upd[2]}</span></div> 
                                <input defaultValue={upd[2]} className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900" required type="text" name="uname"
                                onChange={()=>{setUname(event.target.value);}}
                                ></input>
                                </div>
                               
                                
                                
                                <div><button onClick={submitForm}  name="Submit" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Update User</button></div>
                        </form>
                </div>
        );
}
