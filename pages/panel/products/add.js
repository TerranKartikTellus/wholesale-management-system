import SidePanel from "/components/sidepanel";
import Head from 'next/head'



export default function Panel() {


          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    <Head>
        <title>Add new Products </title>
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
                                      <div className="text-2xl tracking-wider">Add New Product</div>
                              </div>
                              <div><Form></Form></div>
                    </div>
          </div>
);
}
function Form(){
        return(
                <>
                        <form>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Product ID</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Product Name</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Name"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Maximum Retail Price</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter MRP"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Original Price</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Original price"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Please suggest a quality rating for the product </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Rating"></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Quantity</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Please input the quantity "></input>
                        </div>
                        <br></br>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Product category Id</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Id"></input>
                        </div>
                        <button type="submit" className="bg-gray-800 text-gray-100 ml-20 p-3 rounded-md hover:bg-gray-100 hover:text-gray-900 font-semibold px-5 translate-y-16 hover:bg-opacity-30 tracking-wider" style={{position:'relative', right: '80px'}}>
                                Submit
                        </button>
                        </form>
                </>
        );
}