import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'


function Home() {
  return (
    <>
        <UserSearch />
        <h1 className='text-6xl'><UserResults /></h1>
    </>
  )
}

export default Home
