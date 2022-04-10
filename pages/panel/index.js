import SidePanel from "/components/sidepanel";

export default function Panel() {
const msgNewProduct = [ null , null ];
const msgNewCategory =[ null , null ];
const msgNewSupplier =[ null , null ];
const msgNewRetailer =[ null , null ];

const msgNewSales =[ null , null ];

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className="h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              <div><AllPages
                                msgNewProduct ={msgNewProduct }   
                                msgNewCategory={msgNewCategory}   
                                msgNewSupplier={msgNewSupplier}   
                                msgNewRetailer={msgNewRetailer}
                                msgNewSales={msgNewSales}   
                              ></AllPages></div>
                    </div>
                    
          </div>
);
}




function AllPages(
          {
                    msgNewProduct ,
                    msgNewCategory,
                    msgNewSupplier,
                    msgNewRetailer,
                    msgNewSales,
          }
){
          return (
                    <div className=" w-full h-full flex flex-row  items-center justify-center p-10">
                        <div className="w-4/12 h-full ">
                                  <Sale imgUrl={'/sale.svg'} Name={"Sales"} AddLink={""} ViewLink={""} msg={msgNewSales}></Sale>
                        </div>
                        <div className="grid w-8/12 grid-cols-2 gap-4 p-10">
                          
                          <div><Block imgUrl={'/product.svg'} Name={"Products"} AddLink={"/panel/products/add"} ViewLink={"/panel/products"}      msg={msgNewProduct } ></Block></div>
                          <div><Block imgUrl={'/category.svg'} Name={"Category"} AddLink={"/panel/categories/add"} ViewLink={"/panel/categories"}  msg={msgNewCategory} ></Block></div>
                          <div><Block imgUrl={'/supplier.svg'} Name={"Supplier"} AddLink={"/panel/suppliers/add"} ViewLink={"/panel/suppliers"}   msg={msgNewSupplier} ></Block></div>
                          <div><Block imgUrl={'/retailer.svg'} Name={"Retailer"} AddLink={"/panel/retailers/add"} ViewLink={"/panel/retailers"}   msg={msgNewRetailer} ></Block></div>
                          
                        </div>
                        <div className="bottom-0 left-0 bg-green-500 w-[30px]"></div>
                        
                    </div>
          );
}
function Block({imgUrl, Name , AddLink , ViewLink , msg}){
          return (
                    <div className="bg-gray-100 hover:translate-y-1 h-full bg-opacity-30 scale-90 hover:translate-y-1 hover:g-gray-200 transition-all duration-300 ease-in-out rounded-lg shadow-xl flex flex-col items-center justify-center">
                              { msg && <div className={msg[1]==null ? "hidden" : msg[0]== 0 ? "bg-red-600 font-medium tracking-wider bg-opacity-40 p-2 text-right rounded-md absolute -top-3 -right-3 max-w-sm w-auto h-auto" : "bg-green-600 font-medium tracking-wider bg-opacity-40 p-2 text-right rounded-md absolute -top-3 -right-3 max-w-sm w-auto h-auto" }>{msg[1]}</div> }
                              <div className="py-5"><img src={imgUrl} className="object-cover bg-center w-24 h-24"></img></div>
                              <div className="text-3xl pb-5 tracking-wider">{Name}</div>
                              <div className="rounded-b-lg w-full flex flex-row items-center justify-center ">
                                        <a href={AddLink} className=" rounded-bl-lg w-1/2 hover:bg-gray-300  hover:text-gray-900 bg-gray-900 p-2 text-center text-gray-100">New</a>
                                        <div className="bg-gray-100 w-[1px]"></div>
                                        <a href={ViewLink} className=" w-1/2 rounded-br-lg hover:bg-gray-300 hover:text-gray-900  bg-gray-900 p-2 text-center text-gray-100">View</a>
                              </div>
                    </div>
          );
}

function Sale({imgUrl, Name , AddLink , ViewLink, msg}){
          return (
                    <div className=" h-[515px]  bg-opacity-30 bg-gradient-to-r hover:-translate-y-1 from-green-600 via-green-500 to-green-400   scale-75 hover: hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-lg shadow-xl flex flex-col items-center justify-center">
                              { msg && <div className={msg[1]==null ? "hidden" : msg[0]== 0 ? "bg-red-600 font-medium tracking-wider bg-opacity-90 text-gray-100 p-2 text-right rounded-md absolute -top-3 -right-3 max-w-sm w-auto h-auto" : "bg-green-600 bg-opacity-90 text-gray-100 font-medium tracking-wider bg-opacity-40 p-2 text-right rounded-md absolute -top-3 -right-3 max-w-sm w-auto h-auto" }>{msg[1]}</div> }
                              
                              <div className="w-full h-full flex flex-row items-center justify-center">
                              <div className="py-5"><img src={imgUrl} className="object-cover bg-center w-24 h-24"></img></div>
                              <br></br>
                              <div className="text-3xl pb-5 tracking-wider">{Name}</div>
                              </div>

                              <div className="px-6 tracking-wide text-justify">
                                        Sales are activities related to selling or the number of goods sold in a given targeted time period.
                              </div>
                              <div className="w-full h-full flex flex-row items-center justify-center">
                              <div className="rounded-b-lg w-full bottom-0 mt-[190px] flex flex-row items-center justify-center ">
                                        <a href={AddLink} className="rounded-bl-lg w-1/2 hover:bg-gray-100  hover:text-gray-900 bg-gray-900 p-2 text-center text-gray-100  bg-opacity- ">New</a>
                                        <a href={ViewLink} className="w-1/2 rounded-br-lg hover:bg-gray-100 hover:text-gray-900  bg-gray-900 p-2 text-center text-gray-100 bg-opacity-">View</a>
                              </div>
                              </div>
                    </div>
          );
}