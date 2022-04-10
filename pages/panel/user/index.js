import SidePanel from "/components/sidepanel";

export default function Panel() {
const msgNewProduct = [ null , null ];
const msgNewCategory =[ null , null ];
const msgNewSupplier =[ null , null ];
const msgNewRetailer =[ null , null ];

          return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                    
                    <div className="h-full bg-gray-200  w-3/12"><SidePanel></SidePanel></div>
                    <div className="h-full bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-fuchsia-500/30 w-9/12">
                              <div className="text-5xl  tracking-wide mt-5 mr-5  text-right">
                                        WholeSale Management <br></br> System
                              </div>
                              <div>
                                        Manage users
                              </div>
                    </div>
                    
          </div>
);
}