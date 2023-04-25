import React from 'react'

const MyProfile = ({user}) => {
  console.log(user)
  return (

    <div>
    
      
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
  const response = await fetch(`http://localhost:3000/api/users/${params.id}`, {
    method: "GET", 
    headers: {
      'Content-Type':'application/json', 
    }

  })

  const data = await response.json(); 

  return {
    props: {
      user: data, 
    }
  }

}

export default MyProfile