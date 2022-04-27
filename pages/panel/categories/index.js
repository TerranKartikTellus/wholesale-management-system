import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import clientPromise from "/lib/mongodb";

import React ,{useState} from "react"
import { useRouter } from 'next/router';


export default function Panel({Allcategories}) {
 const msgNewCategory =[ null , null ];
// const msgNewSupplier =[ null , null ];
// const msgNewRetailer =[ null , null ];
const router = useRouter()
  // console.log(router.query.newcategory);
// console.log("----",Allcategories);
return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                     <Head>
        <title>View All categories </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className="overflow-y-auto h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                              <div className="flex flex-row items-center justify-between">
                              
                              <a href="/panel" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Back</a>
                              
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              </div>
                              <div className="mt-8 m-3 p-8 mx-auto">
                                <div className="mx-auto text-5xl font-mono font-bold">All categories</div>
                                <div className="mx-auto "><Table msg1={router.query.msg} categories={Allcategories}></Table></div>
                              </div>
                    </div>
                    
          </div>
);
}
 function Table({msg1,categories}){
  const [msg , setmsg] = useState(msg1);
    const [error , setError] = useState();

  const [id , setId] = useState();

  const [upd, setupd] = useState();

//  console.log(categories);


 async function Delete(){
          //  e.preventDefault();
          console.log('--------------------',id);
       
          if(confirm('Are you sure you want to delete this item ?')){
            const response = await fetch(
                        '/api/operations/category/delcategory',
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
                        window.location.replace("/panel/categories?msg=User%20Deleted");
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
        categories
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
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Product Categoryid</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Product category</th>
                 <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Update</th>
                <th className=" text-center px-2 py-1 bg-gray-700 text-gray-100">Delete</th>
                
              </tr>
            
          {categories.map((i,x=1)=>(
            <tr key={i.pCategoryId}  className="border-b-2 border-gray-800 tracking-wider bg-gray-700 bg-opacity-30 hover:bg-opacity-50">
              <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{x+1}</td>
              <td className="text-lg border-r-2  text-center px-2 py-1 bg-opacity-90 font-extrabold" >{i.pCategoryId}</td>
              <td className="text-lg border-r-2 text-center px-2 py-1  bg-opacity-90" >{i.pCategory}</td>

            
              {/* <td className="text-center px-2 py-1 hover:scale-110   bg-opacity-90 hover:bg-sky-600 transition-all duration-300 ease-in-out" >
                <a href={`/panel/user/edit?id=${i._id}`}><img src="/edit.svg" className="w-7 h-7 mx-auto"></img></a>
              </td>
              <td className="text-center px-2 py-1  hover:scale-110   bg-opacity-90  hover:bg-red-600 transition-all duration-300 ease-in-out" >
                <a href={`/panel/user/delete?id=${i._id}`}><img className="w-7 h-7 mx-auto" src="/delete.svg"></img></a>
              </td>
             */}
              
              <td className="w-[100px] h-full" >
                <button className="w-full h-full text-center px-2 py-1
                  hover:scale-110   bg-opacity-90  hover:bg-blue-600
                   transition-all duration-300 ease-in-out"
                 onClick={
                    ()=>{setupd([i._id,i.uid,i.uFname,i.uLname,i.positionId,i.adminPrivilige,i.sex]);}
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
        </div> : <div className="text-3xl bg-gray-800 text-gray-100 ring-2 ring-red-600">No categories found</div>
      }
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
  // console.log(Allcategories);
  
  return {
    props: {
      Allcategories: JSON.parse(JSON.stringify(Allcategories)),
    } // will be passed to the page component as props
  }
}