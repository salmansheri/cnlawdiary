import React, { useState } from 'react'; 
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import AddCases from '@/components/AddCases'

const index = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <Layout>
      <div className="px-2 mt-10">
      <div className="mb-7">
        <button className="bg-blue-500 px-2 py-3 rounded-md shadow-sm text-white flex gap-1" onClick={() => setIsClicked(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

        Add Decided Cases
        </button>
      </div>
      <Table />
        
      </div>

      {isClicked && (
        <div>
        <AddCases decidedSetIsClicked={setIsClicked} />
      </div>

      )}
    
    </Layout>
  )
}

export default index