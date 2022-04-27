import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import { useState } from "react";



export default function Panel() {

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    <Head>
        <title>Add new Category </title>
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
                                      <div className="text-2xl tracking-wider">Add New Categories</div>
                                      <br></br>
                                      <div><Form></Form></div>
                              </div>
                    </div>
          </div>
);
}
function Form(){
        
        const [pCategoryId   , setPCATEGORYID]       = useState("");         
        const [pCategory     , setPCATEGORY]         = useState(""); 
  const [error , setError] = useState();
        
        
       async function submitForm(e){
           e.preventDefault();
        console.log('--------------------------',pCategoryId,'---------',pCategory);
                
                const response = await fetch(
                        '/api/operations/category/addcategory',
                        {
                                method: 'POST',
                                body: JSON.stringify(
                                        {
                                                'pCategoryId':pCategoryId,
                                                'pCategory':pCategory
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
                        window.location.replace("/panel/categories?newUser=New%20User%20Added");
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
           
                         <div className="w-1/2 bg-transparent">Product Category:</div>
                          <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900" type="text" name="pcategory"
                         onChange={()=>{setPCATEGORY(event.target.value);}}
                         ></input>
                         </div>    
                         <div className=" flex flex-row text-xl capitalize justify-start items-center"> 
                         <div className="w-1/2 bg-transparent">Product Category Id: </div>
                         <input  required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"
                         onChange={()=>{setPCATEGORYID(event.target.value);}}
                         type="number" name=""></input>        
                         </div>

                         
                         <div><button onClick={submitForm}  name="Submit" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider">Add Products</button></div>
                 </form>
         </div>
 );
}
