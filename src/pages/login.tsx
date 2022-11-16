import React from 'react'
import { Header } from '@components/Header'
import { Login } from '@components/Login'

function login () {
  return (
    <main className='flex min-h-screen flex-col justify-center p-8 bg-dark mx-auto text-center text-white'>
      <div>
        <Header />
        <Login />
      </div>
    </main>
  )
}

export default login
