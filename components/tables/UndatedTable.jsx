import React from "react";

const UndatedTable = ({ courtCases }) => {
   

    
  return (
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
          </tr>
        </thead>
        {courtCases
          .filter((cases) => cases.casestatus === "undated")
          .map((cases, index) => (
            <tbody key={cases._id} index={index}>
              <tr className="h-10">
                <td>{cases._id}</td>
                <td>{cases.regno}</td>
                <td>{cases.clientname}</td>
                <td>{cases.date}</td>
                <td>{cases.hearingdate}</td>
                <td>{cases.casestatus}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default UndatedTable;
