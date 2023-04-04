import React from 'react'

const DecidedTable = ({courtCases}) => {
  return (
   
        <div className="bg-white w-full rounded-lg overflow-hidden shadow-md">
     <table className="border  w-full text-md text-center">
        <thead className="h-10 bg-black text-white">
            <tr>
                <th>ID</th>
                <th>CNR No</th>
                <th>Case No</th>
                <th>Court</th>
                <th>Place</th>
                <th>Decided On</th>
                <th>Result</th>
                

                
            </tr>
        </thead>
        {courtCases.filter(cases => cases.casestatus === "decided").map((cases, index) => (
            <tbody key={cases._id} index={index}>
            <tr className="h-10">
                <td>{cases._id}</td>
                <td>{cases.CNRno}</td>
                <td>{cases.regno}</td>
                <td>{cases.courtname}</td>
                <td>{cases.place}</td>
                <td className='py-3'>
                    {cases.decideddate}
                </td>
                <td className="flex justify-center items-center pt-3">
                 {cases.result}
                </td>

               
            </tr>
            </tbody>
        
        ))}
           
      
     </table>

    </div>

 
  )
}

export default DecidedTable