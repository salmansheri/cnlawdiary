import React, { useState } from 'react'; 
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Layout = ({children}) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <>
     <Header setIsClicked={setIsClicked} isClicked={isClicked} />

{/* Side bar  */}
<main className="flex">
{isClicked && (
  <div className="min-w-[300px] h-screen fixed top-[70px] bg-white">
<Sidebar />

</div>

)}


<div className="flex items-center h-screen justify-center w-full">
    {children}
</div>

</main>

    </>
   
   
  )
}

export default Layout