import Head from 'next/head'
import Image from 'next/image'


import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import Notification from '@/components/Notification'; 
import dynamic from 'next/dynamic';
const Graph = dynamic(
  () => import('../components/Graph'),
  { ssr: false }
)






export default function Home() {

  const router = useRouter();


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/* Header  */}

     <Layout>
     <div>
     <div>
     <Notification />
      
     </div>
     <div>
     <Graph />

     </div>

     </div>
    
     
 

   
    
    

     
     </Layout>

     
  
     
    


     



    





    </>
  )
}
