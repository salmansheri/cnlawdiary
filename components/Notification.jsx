import React from "react";


const Notification = () => {
 
  return (
    <>
      <div className="flex items-center justify-around space-x-10 h-[400px]">
        
          <div className="bg-white px-7 py-5 rounded-lg shadow-lg ">
            <h1 className="font-bold text-3xl">Undated Cases</h1>
            <div className="flex gap-1">
              <p className="font-semibold text-2xl">Pending: </p>
              <span className="text-2xl">15</span>
            </div>
          </div>
       
    
          <div className="bg-white py-5 px-8 rounded-lg shadow-lg">
            <h1 className="font-bold text-2xl">Today Hearing</h1>
            <p className="text-center font-semibold text-2xl">10</p>
          </div>
      
      
          <div className="bg-white py-5 px-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">Tomorrow's Hearing</h1>
            <p className="text-center text font-semibold text-2xl">10</p>
          </div>
     
      </div>
    </>
  );
};

export default Notification;
