import React from 'react'; 
import { useRouter } from 'next/router';

const AddCases = ({setIsClicked, clientSetIsClicked, 
  courtSetIsClicked, undatedSetIsClicked, decidedSetIsClicked}) => {

  const router = useRouter(); 
  const {pathname} = router; 
  const isMyCases = pathname.includes("mycases")
  const isMyClients = pathname.includes("myclients"); 
  const isMyCourts = pathname.includes("/mycourts");
  const isUndated = pathname.includes("undatedcases"); 
  const isDecided = pathname.includes("decidedcases")


  

  const inputStyles =
    "w-full my-2 border border-gray-700 p-3 rounded-md placeholder:italic focus:border-blue-300 className={inputStyles} focus:outline-none";

  
  return (

   <>
   
   


{isUndated && (


<div className="flex items-center justify-center h-screen w-screen absolute top-0 right-4  bg-gray-100 bg-opacity-30">
<div className="bg-white relative p-10 w-[70rem] rounded-lg shadow-lg">
<div className="bg-black text-white w-8 h-8 rounded-full  flex justify-center items-center absolute right-0 top-0 cursor-pointer font-bold" onClick={() =>undatedSetIsClicked(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
<h1 className="font-bold text-3xl mb-3">Add Clients</h1>
  <div className="w-full  gap-5 grid grid-cols-2">
   
    <div>
      <label>CNR No:</label>
      <input className={inputStyles} placeholder="Enter Clients Name" />
    </div>
    <div>
      <label>Case No: </label>
      <textarea className={inputStyles} placeholder="Enter Address" />
    </div>
    <div>
      <label>Court Name</label>
      <input type="number" className={inputStyles} placeholder="Enter Client Name" />
    </div>
    <div>
      <label>Place </label>
      <input className={inputStyles} placeholder="Enter Client Status" />
    </div>
    <div>
      <label>Previous Date:  </label>
      <input className={inputStyles} placeholder="Enter Client Status" />
    </div>
    <div>
      <label>Next Date:  </label>
      <input className={inputStyles} placeholder="Enter Client Status" />
    </div>
    <div>
      <label>Status  </label>
      <input className={inputStyles} placeholder="Enter Client Status" />
    </div>
   
   
  </div>
  <div className="mt-5 flex gap-5 items-center justify-content">
      <button className="bg-green-500 px-3 py-2 rounded-md shadow-sm text-white">Save</button>
      <button className="bg-blue-500 py-2 px-3 rounded-md shadow-sm text-white">Update</button>
    </div>
</div>
</div>
)}


    </>
  )
}

export default AddCases