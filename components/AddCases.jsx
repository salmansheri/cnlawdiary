import React from 'react'

const AddCases = ({setIsClicked}) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen absolute top-0 right-4  bg-gray-100 bg-opacity-30">
    <div className="bg-white relative p-10">
    <div className="bg-black text-white w-5 h-5 rounded-full  flex justify-center items-center absolute right-0 top-0 cursor-pointer" onClick={() => setIsClicked(false)}>x</div>
      <form>
        <h1>Add Cases</h1>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
        <div>
          <label>Reg No:</label>
          <input />
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddCases