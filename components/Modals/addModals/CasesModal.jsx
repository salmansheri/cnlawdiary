import React from "react";

const CasesModal = ({ setIsClicked, setData, data, ia, setIa, cases }) => {
  const inputStyles =
    "w-full my-2 border border-gray-700 p-3 rounded-md placeholder:italic focus:border-blue-300 className={inputStyles} focus:outline-none";
  return (
    <div className="flex items-center justify-center h-screen w-screen absolute top-0 right-4  bg-gray-100 bg-opacity-30">
      <div className="bg-white relative p-10 w-[70rem] rounded-lg shadow-lg">
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
        <div className="w-full grid grid-cols-3 gap-5 ">
          <div>
            <label>Reg No:</label>
            <input
              className={inputStyles}
              placeholder="Enter Registration Number"
              onChange={(e) => setData({ ...data, regno: e.target.value })}
            />
          </div>
          <div>
            <label>CNR No:</label>
            <input
              className={inputStyles}
              placeholder="Enter CNR No"
              onChange={(e) => setData({ ...data, cnrno: e.target.value })}
            />
          </div>
          <div>
            <label>Client Name: </label>
            <input
              className={inputStyles}
              placeholder="Enter Client Name"
              onChange={(e) => setData({ ...data, clientName: e.target.value })}
            />
          </div>
          <div>
            <label>Date: </label>
            <input
              className={inputStyles}
              placeholder="Enter Case Date"
              onChange={(e) => setData({ ...data, clientName: e.target.value })}
            />
          </div>

          <div>
            <label>Client Status</label>
            <input
              className={inputStyles}
              placeholder="Enter Client Status"
              onChange={(e) =>
                setData({ ...data, clientStatus: e.target.value })
              }
            />
          </div>
          <div className="">
            <label>I.A</label>
            <input
              className={inputStyles}
              placeholder="Enter I. A"
              onChange={(e) => setIa(e.target.value)}
            />
             <button className="bg-blue-500 mt-5 px-3 py-2 rounded-md shadow-sm text-white hover:bg-blue-700 ">
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
          <button className="bg-green-500 px-3 py-2 rounded-md shadow-sm text-white">
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
