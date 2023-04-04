import React from "react";

const CasesModal = ({ setIsClicked, setData, data, ia, setIa, cases, setIaList, iaList }) => {
  const inputStyles =
    "w-full my-2 border border-gray-700 p-3 rounded-md placeholder:italic focus:border-blue-300 className={inputStyles} focus:outline-none";

    const handleSave = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cases", {
          method: "POST", 
          headers: {
            'Content-type':'application/json'
          }, 
          body: JSON.stringify({
            regno: data.regno, 
            CNRno: data.cnrno, 
            clientname: data.clientName, 
            clientstatus: data.clientStatus, 
            casename: data.casename, 
            data: data.date,
            IA: iaList, 
            act: data.act, 
            oppositionparty: data.oppositionParty, 
            oppositionadvocate: data.oppositeAdvocate, 
            
  
            
          })
        })
  
      
        alert("successfully Created")

      } catch(err) {
        console.log(err); 

      }
    

    }


    const addIa = () => {
      iaList.push(ia); 
      setIaList(iaList); 
      alert("added")
      

    }
  return (
    <div className="flex items-center justify-center h-screen w-screen absolute top-0 right-4  bg-gray-100 bg-opacity-30">
      <div className="bg-white relative p-10 w-[70rem] rounded-lg shadow-lg mt-96 md:m-0">
        <div
          className="bg-black text-white w-8 h-8 rounded-full  flex justify-center items-center absolute right-0 top-0 cursor-pointer font-bold"
          onClick={() => setIsClicked(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="font-bold text-3xl mb-3">Add Cases</h1>
        <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
          <div>
            <label>Reg No:</label>
            <input
            type="number"
              className={inputStyles}
              placeholder="Enter Registration Number"
              onChange={(e) => setData({ ...data, regno: e.target.value })}
              required
            
            />
          </div>
          <div>
            <label>CNR No:</label>
            <input
            type="number"
              className={inputStyles}
              placeholder="Enter CNR No"
              onChange={(e) => setData({ ...data, cnrno: e.target.value })}
              required
            
            />
          </div>
          <div>
            <label>Client Name: </label>
            <input
            type="text"
              className={inputStyles}
              placeholder="Enter Client Name"
              onChange={(e) => setData({ ...data, clientName: e.target.value })}
              required
            
            />
          </div>
          <div>
            <label>Case Name: </label>
            <input
            type="text"
              className={inputStyles}
              placeholder="Enter Case Name"
              onChange={(e) => setData({ ...data, casename: e.target.value })}
              required
            
            />
          </div>
          <div>
            <label>Date: </label>
            <input
            type="date"
              className={inputStyles}
              placeholder="Enter Case Date"
              onChange={(e) => setData({ ...data, clientName: e.target.value })}
              required
            
            />
          </div>

          <div>
            <label>Client Status</label>
            <input
            type="text"
              className={inputStyles}
              placeholder="Enter Client Status"
              onChange={(e) =>
                setData({ ...data, clientStatus: e.target.value })
              
              }
              required
            />
          </div>
          <div className="">
            <label>I.A</label>
            <input
            type="text"
              className={inputStyles}
              placeholder="Enter I. A"
              onChange={(e) => setIa(e.target.value)}
              required
            
            />
             <button className="bg-blue-500 mt-5 px-3 py-2 rounded-md shadow-sm text-white hover:bg-blue-700 " onClick={addIa}>
              Add I. A
            </button>
          </div>
          
           
        

          <div>
            <label>ACT</label>
            <input
              className={inputStyles}
              placeholder="Enter I.A"
              onChange={(e) => setData({ ...data, act: e.target.value })}
            />
          </div>

          <div>
            <label>Opposite Party: </label>
            <input
              className={inputStyles}
              placeholder="Enter Opposition Party"
              onChange={(e) =>
                setData({ ...data, oppositionParty: e.target.value })
              }
            />
          </div>
          <div>
            <label>Opposite Advocate</label>
            <input
              className={inputStyles}
              placeholder="Enter Advocate"
              onChange={(e) =>
                setData({ ...data, oppositeAdvocate: e.target.value })
              }
            />
          </div>
          <div>
            <label>Case Description</label>
            <textarea
              className={inputStyles}
              placeholder="Enter Case Description"
            />
          </div>
        </div>
        <div className="mt-5 flex gap-5 items-center justify-content">
          <button className="bg-green-500 px-3 py-2 rounded-md shadow-sm text-white" onClick={handleSave}>
            Save
          </button>
          <button className="bg-blue-500 py-2 px-3 rounded-md shadow-sm text-white">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasesModal;
