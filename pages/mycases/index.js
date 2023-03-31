import React, { useState } from 'react'; 
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import AddCases from '@/components/AddCases';

const index = () => {

  const [isClicked, setIsClicked] = useState(false)
  
  return (
    <Layout>
    <div className=" h-auto  mt-10 px-2">
    <button className="flex gap-1 mb-7 bg-blue-500 px-2 py-2 rounded-md text-white hover:bg-blue-700 active:bg-blue-900" onClick={() => setIsClicked(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add Cases
</button>
    <Table />
    

    </div>

    {isClicked && (
      <AddCases setIsClicked={setIsClicked} />
    )}

    
     
    
     
    </Layout>
  )
}

export default index