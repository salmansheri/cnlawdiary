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
  <div className="min-w-[300px] h-screen fixed top-[70px] bg-white z-40">
<Sidebar />

</div>

)}


<div className="w-full px-5 md:mx-auto lg:mx-auto mt-[100px]">
    {children}
</div>

</main>

    </>
   
   
  )
}

export default Layout