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

    {isUndatedCases && (
        <div className="bg-white w-full rounded-lg overflow-hidden shadow-md">
     <table className="border  w-full text-md text-center">
        <thead className="h-10 bg-black text-white">
            <tr>
                <th>ID</th>
                <th>Case No</th>
                <th>Client Name</th>
                <th>Previous Date</th>
                <th>Next Date</th>
                <th>Status</th>
                <th>Click to Add</th>

                
            </tr>
        </thead>
        <tbody>
            <tr className="h-10">
                <td>testfsdsdafasdfafdsfdafddsfadfasdfdfsdf</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td className='py-3'>
                    test
                </td>
                <td className="flex justify-center items-center pt-3">
                   testfsdsdafasdfafdsfdafddsfadfasdfdfsdf
                </td>

               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
             
            </tr>
           
        </tbody>
     </table>

    </div>

    )}

    {isDecidedCases && (
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
        <tbody>
            <tr className="h-10">
                <td>testfsdsdafasdfafdsfdafddsfadfasdfdfsdf</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td className='py-3'>
                    test
                </td>
                <td className="flex justify-center items-center pt-3">
                   testfsdsdafasdfafdsfdafddsfadfasdfdfsdf
                </td>

               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                
            </tr>
            <tr className="h-10">
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
               
            </tr>
            <tr className="h-10">
                <td>test</td>
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