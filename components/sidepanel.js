export default function SidePanel(){
          const name = "Blake Lake";
          const position = "Manager";
          const sex = "Male"
          return (
                    <div className="flex flex-col items-center justify-center">
                              <div className="mt-20 p-1  "><img src="/user1.png" className="w-36 scale-110 brightness-110  object-cover bg-cover bg-center rounded-full h-36"></img></div>
                              <div className="text-2xl tracking-widest mt-3">{name}</div>
                              <div className="text- tracking-widest mt-1">{position}</div>
                              <div className="text-xs tracking-widest mt-1">{sex}</div>
                              
                              
                              <div className="mt-10 ">
                                        <a href="/panel/user/add" className="text-sm hover:text-lg transition-all duration-300 ease-in-out text-black tracking-wider hover:font-semibold">Add new Users</a><br/>
                              <a href="/panel/user" className="text-sm hover:text-lg transition-all duration-300 ease-in-out text-black tracking-wider hover:font-semibold">Manage Users</a><br/>
                              <a href="/panel/userPosition" className="text-sm hover:text-lg transition-all duration-300 ease-in-out text-black tracking-wider hover:font-semibold">Manage User Position </a><br/>
                              <a href="/" className="text-sm hover:text-lg transition-all duration-300 ease-in-out text-black tracking-wider hover:font-semibold ">Apply for Leave</a><br/>
                              <div className="mt-10"><a href="/" className=" bg-gray-900 text-gray-100 hover:text-gray-900 hover:bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300  ease-in-out p-3 text-center rounded-sm translate-y-4">Sign Out</a> </div>
                              </div>

                              <div className="flex flex-row space-x-6 mt-20 justify-center items-center">
                                        <div className="hover:scale-100 scale-95 transition-all duration-300 ease-in-out hover:translate-y-1"><Insta></Insta></div>
                                        <div className="hover:scale-100 scale-95 transition-all duration-300 ease-in-out hover:translate-y-1"><Gmail></Gmail></div>
                                        <div className="hover:scale-100 scale-95 transition-all duration-300 ease-in-out hover:translate-y-1"><Linkdin></Linkdin></div>
                              </div>
                              <div className="bg-gray-800 text-gray-100 w-full p-2 mt-44 text-center tracking-wider">Admin Panel</div>
                              
                    </div>
          );
}
function Insta(){
          return (
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
          );
} 
function Gmail(){
          return (
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-10.333 16.667c-2.581 0-4.667-2.087-4.667-4.667s2.086-4.667 4.667-4.667c1.26 0 2.313.46 3.127 1.22l-1.267 1.22c-.347-.333-.954-.72-1.86-.72-1.593 0-2.893 1.32-2.893 2.947s1.3 2.947 2.893 2.947c1.847 0 2.54-1.327 2.647-2.013h-2.647v-1.6h4.406c.041.233.074.467.074.773-.001 2.666-1.787 4.56-4.48 4.56zm11.333-4h-2v2h-1.334v-2h-2v-1.333h2v-2h1.334v2h2v1.333z"/></svg>
          );
}

function Linkdin(){
          return (
<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          );
}