import SidePanel from "/components/sidepanel";
import Head from 'next/head'



export default function Panel() {


          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                     <Head>
        <title>Add new retailer </title>
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
                                      <div className="text-2xl tracking-wider">Add New Retailers</div>
                                      <br></br>
                                      <div><Form></Form></div>
                              </div>
                              
                    </div>
          </div>
);
}
function Form(){
        return(
                <>
                
                        <form>
                        <div class="form-group">
                        <label for="rid">Retailer ID</label>
                        <input type="number" class="form-control" aria-describedby="emailHelp" placeholder="Enter ID"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="rname">Retailer Name</label>
                        <input type="text" class="form-control" placeholder="Enter Name"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="text">Retailer Address</label>
                        <input type="password" class="form-control" placeholder="Enter Address"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="rcontact">Contact Number</label>
                        <input type="number" class="form-control" placeholder="Enter Contact"></input>
                        </div>
                        <button type="submit" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider" style={{position:'relative', right: '80px'}}>Submit</button>
                        </form>
                </>
        );
}