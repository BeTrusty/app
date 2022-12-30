import React from 'react'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
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

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const session = await getSession(context)
  if (!session) {
    return {
      props: { session }
    }
  }
  if (session !== null || session !== undefined) {
    return {
      props: { session },
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}
