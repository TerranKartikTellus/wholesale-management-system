import SidePanel from "/components/sidepanel";


export default function Panel() {
const notify = [
          {msg: "User added"},
          {msg: "Used Deleted"},
];

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    {
                            notify ?  notify.map(i=>{
                                      <div className="z-50 bg-gradient-to-r from-cyan-600/40 via-teal-400 to-emerald-400/40 fixed top-5 right-5 m-2 p-3">
                                                {i.msg}
                                      </div>
                              
                            } ) : ""
                    }
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className="h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              <div className="p-20 bg-gray-100 mt-10 mx-10 bg-opacity-30">
                                      <div className="text-2xl tracking-wider">Add New Product</div>
                              </div>
                    </div>
          </div>
);
}