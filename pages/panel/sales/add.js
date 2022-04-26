import SidePanel from "/components/sidepanel";
import Head from 'next/head'



export default function Panel() {

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    <Head>
        <title>Log new Sals </title>
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
                                      <div className="text-2xl tracking-wider">Add new Sales</div>
                                      <br></br>
                                      <div><Form></Form></div>
                              </div>

                        

                    </div>
          </div>
);
}

function Form(){
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
        return(
                <>
                        <form>
                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Order Id</label>
                         <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                setSID(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="number"  placeholder="ORDER ID"></input>
                        </div>

                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Retailer Id</label>
                         <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                setSID(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="number"  placeholder="ORDER ID"></input>
                        </div>

                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Date</label>
                         <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                setSID(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="date"  placeholder="ORDER ID"></input>
                        </div>


                        <div  className=" flex flex-row text-xl capitalize justify-start items-center">
                        <label className="w-1/2 bg-transparent" >Net Cost</label>
                         <input required  className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900"  name = "supplierID" 
                        onChange = {() => {
                                setSID(event.target.value); 
                                console.log(event.target.value)}
                                } 
                                type="number"  placeholder="ORDER ID"></input>
                        </div>

                        <div className=" flex flex-row text-xl capitalize justify-start items-center">
                          <div  className="w-1/2 bg-transparent" > Product Category Id:</div>
                           <select onChangeCapture={()=>{setPCATEGORYID(event.target.value);}} id="cars" name="cars" className="w-1/2 bg-transparent border-b-2 px-2 py-1 border-gray-900">
                         
                               <option onClick='' value='Credit'>Credit</option>
                               <option onClick='' value='Cash'>Cash</option>
                               
                               
                           </select>
                           
                         </div>



                         <div>
                                 <div>Cart</div>
                                 <div>
                                         <table>
                                                 <thead>
                                                         <th>Product</th>
                                                         <th>Prize</th>
                                                         
                                                         
                                                 </thead>
                                         </table>
                                 </div>
                         </div>
                        <button type="submit" onClick={submitForm} className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider" style={{position:'relative', right: '80px'}}>Submit</button>
                        
                        </form>
                </>
        );
}
