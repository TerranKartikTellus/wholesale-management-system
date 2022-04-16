import SidePanel from "/components/sidepanel";
import Head from 'next/head'
import clientPromise from "/lib/mongodb";


export default function Panel({AllUsers}) {
// const msgNewProduct = [ null , null ];
// const msgNewCategory =[ null , null ];
// const msgNewSupplier =[ null , null ];
// const msgNewRetailer =[ null , null ];

console.log(AllUsers);
return (
          <div className="flex flex-row h-screen items-start overflow-y-hidden">
                     <Head>
        <title>View All users </title>
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
                              <div className="mt-8 m-3 p-8">
                                <div className="text-5xl font-mono font-bold">All users</div>
                                <div><Table users={AllUsers}></Table></div>
                              </div>
                    </div>
                    
          </div>
);
}
function Table({users}){
  return(
    <div className="">
      {
        users 
        ? 
        <div className="grid  grid-cols-4">
          {users.map(i=>(
            <div id={i._id} className="hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-start items-start m-3 text-lg font-mono font-medium rounded-sm">
              <div className="bg-cyan-800 w-56 p-1 rounded-t-sm text-gray-50">UID: {i.uid}</div>
              <div className="bg-cyan-700 w-56 p-1 text-gray-50">First Name: {i.uFname}</div>
              <div className="bg-cyan-600 w-56 p-1 text-gray-50">Last Name: {i.uLname}</div>
              <div className="bg-cyan-500 w-56 p-1 ">Sex: {i.sex}</div>
              <div className="bg-cyan-400 w-56 p-1 ">Position ID: {i.position}</div>
              <div className="bg-cyan-300 w-56 p-1 ">Admin Privilige: {i.adminPrivilige}</div>
              <div className="flex flex-row text-center  bg-cyan-300 w-56  rounded-b-sm">
                <a href={`/api/operations/user/delete/{i.uid}`}  className="hover:text-lg transition-all duration-200 ease-in-out hover:text-gray-200 w-1/2 bg-gray-800 text-xl text-gray-100">Edit</a>
                <a href={"/api/operations/user/edit/{i.uid}"}  className="hover:text-lg transition-all duration-200 ease-in-out hover:text-gray-200 w-1/2 bg-red-700 text-xl text-gray-100">Delete</a>
              </div>
            </div>
          ))}
        </div> : <div className="text-3xl bg-gray-800 text-gray-100 ring-2 ring-red-600">No users found</div>
      }
    </div>
  );
}

export async function getServerSideProps(context) {
 
   const client = await clientPromise;
 const db = client.db("wholesale");
  const AllUsers = await db
    .collection("user")
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