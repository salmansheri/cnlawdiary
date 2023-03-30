import React from 'react'
import Link from 'next/link'; 
import { useRouter } from 'next/router'; 


const Sidebar = () => {
    const router = useRouter();
   
    const {pathname} = router; 
    console.log(pathname)
    const isMyCases = pathname.includes("mycases")
    const isMyCalender = pathname.includes("mycalender")
    const isMyCourts = pathname.includes("mycourts");
    const isHearing = pathname.includes("hearing"); 
    const isUndatedCases = pathname.includes("undatedcases")
    const isDecidedCases = pathname.includes("decidedcases")
    const isMyProfile = pathname.includes("myprofile")



    const Active = "font-semibold  text-xl bg-blue-500 p-2 rounded-md text-white"

    const NonActive = "font-semibold  text-xl hover:bg-blue-300 p-2 rounded-md rounded-md  cursor-pointer"
  return (
    <div className="px-5 bg-white shadow-lg h-full sticky top-0">
        <div>
            <h1 className="font-bold mt-5 text-3xl text-gray-500 mb-10">Dashboard</h1>
            <Link href="/mycases">
            <div className={ isMyCases ? Active : NonActive}>My Cases</div>
            </Link>
              
            <div className={isMyCalender ? Active : NonActive}>My Calender</div>
            <div className={isMyCourts ? Active : NonActive}>My courts</div>
            <div className={isHearing ? Active : NonActive}>Hearing</div>
            <div className={isUndatedCases ? Active : NonActive}>Undated Cases</div>
            <div className={isDecidedCases ? Active : NonActive}>Decided Cases</div>
            <div className={isMyProfile ? Active:  NonActive}>My Profile</div>
            <div className={NonActive}>E-Courts Website</div>
            <div className={NonActive}>Logout</div>

        </div>
    </div>
  )
}

export default Sidebar