import React from 'react'; 
import { useRouter } from 'next/router';
import ReactWhatsapp from 'react-whatsapp';


const Table = ({clients}) => {
    const router = useRouter(); 
    const {pathname} = useRouter(); 

    const isMyCases = pathname.includes("mycases")
    const isMyClients = pathname.includes("myclients"); 

    const isMyCourts = pathname.includes("mycourts")

    const isUndatedCases = pathname.includes("undatedcases"); 

    const isDecidedCases = pathname.includes("decidedcases")
  return (
    <>
   

    
        {/* All Courts Table  */}

    {isMyCourts && (
        <div className="bg-white mt-10 rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-center">
                <thead className="bg-black text-white h-10">
                <tr>
                <th>ID</th>
                    <th>S. NO</th>
                    <th>Court Name</th>
                    <th>Place</th>

                </tr>
                  
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )}

    

   

    </>
  )
}

export default Table