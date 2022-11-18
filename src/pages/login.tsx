import React from 'react'
import Head from 'next/head'
import { Header } from '@components/Header'
import { Login } from '@components/Login'

function login () {
  return (
    <>
      <Head>
        <title>Login | BeTrusty</title>
        <meta
          name='description'
          content='Inicia sesión para poder utilizar BeTrusty'
        />
      </Head>
      <main className='flex min-h-screen flex-col justify-center p-8 bg-dark mx-auto text-center text-white'>
        <div>
          <Header />
          <Login />
        </div>
      </main>
    </>
  )
}

export default login
