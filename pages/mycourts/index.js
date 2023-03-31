import React, { useState } from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import AddCases from "@/components/AddCases";

const index = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Layout>
      <div className="px-2">
        <button className="mt-10 bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm flex gap-1" onClick={() => setIsClicked(true)}>
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Courts
        </button>
        <Table />
      </div>

      {isClicked && (
        <div>
        <AddCases courtSetIsClicked={setIsClicked} />
        
      </div>

      )}
     
    </Layout>
  );
};

export default index;
