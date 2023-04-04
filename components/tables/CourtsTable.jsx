import React from 'react'

const CourtsTable = ({courtCases}) => {
  return (
  
        <div className="bg-white mt-10 rounded-lg shadow-md overflow-auto">
            <table className="w-full text-center">
                <thead className="bg-black text-white h-10">
                <tr>
                <th>ID</th>
                    <th>S. NO</th>
                    <th>Court Name</th>
                    <th>Place</th>

                </tr>
                  
                </thead>
                {courtCases.map((cases, index) => (

                <tbody key={cases._id} index={index}>
                    <tr>
                        <td>{cases._id}</td>
                        <td>{index + 1}</td>
                        <td>{cases.courtname}</td>
                        <td>{cases.place}</td>
                    </tr>
                </tbody>
                ))}

            </table>
        </div>
  
  )
}

export default CourtsTable