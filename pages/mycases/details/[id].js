import Layout from '@/components/Layout'
import React from 'react'

const details = ({caseDetails}) => {
 
  return (
    <Layout>

      <div className="flex items-center justify-center ">
      <div className=" bg-gradient-to-br from-blue-500 to-cyan-200 p-10 rounded-lg shadow-lg text-gray-900 w-[40rem]">
      <h1 className="font-medium text-3xl">Case Details</h1>
      <div className="my-5">
      <label className="font-bold text-xl">REGNo: </label>
       <span className="text-lg">{caseDetails.regno}</span>

      </div>
      <div className="my-5">
      <label className="font-bold text-xl">CNR No: </label>
      <span className="text-lg"> {caseDetails.CNRno}</span>
     

      </div>
      <div className="my-5">
      <label className="font-bold text-xl">Client Name: </label>
      <span className="text-lg"> {caseDetails.clientname}</span>
     

      </div>
      <div className="my-5">
      <label className="font-bold text-xl">client status: </label>
      <span className="text-lg">{caseDetails.CNRno}</span>
      

      </div>
      <div className="my-5">
      <label className="font-bold text-xl">Case Name: </label>
      <span className="text-lg">{caseDetails.CNRno}</span>
   

      </div>

      <div className="my-5">
      <label className="font-bold text-xl">Case Status: </label>
      <span className="text-lg">{caseDetails.casestatus}</span>
     

      </div>

      <div  className="my-5">
      <label className="font-bold text-xl">IA</label>
      {caseDetails.IA.map((ia, index)=> (
        
      
      <li className="text-lg">{ia}</li>

     
        
      ))}
      </div>
     

      
       
       

      </div>
      
        
      </div>
    </Layout>
  )
}


export const getServerSideProps = async ({params}) => {
  const response = await fetch(`http://localhost:3000/api/cases/${params.id}`)

  const data = await response.json(); 

  return{
    props: {
      caseDetails: data, 
    }
  }

}
export default details