import React from 'react'; 
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Layout = ({children}) => {
  return (
    <>
     <Header />

{/* Side bar  */}
<main className="flex">
<div className="w-[300px] h-[calc(100vh-80px)] sticky top-[70px] bg-white z-[999]">
<Sidebar />

</div>

<div className="grow">
    {children}
</div>

</main>

    </>
   
   
  )
}

export default Layout