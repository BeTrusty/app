import React, { useContext, useEffect, useState } from 'react'
import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import SwipeableViews from 'react-swipeable-views'
import { Context } from '../context'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Features } from '@components/Features'
import { Login } from '@components/Login'
import { Session } from 'next-auth'

function Signin ({ session }: Session) {
  const {
    indexSlide,
    setIndexSlide,
    viewButton,
    setViewButton,
    setMySession
  } = useContext(Context)
  useEffect(() => {
    setMySession(session)
  }, [setMySession, session])
  if (indexSlide > 2) {
    setViewButton(false)
  }
  return (
    <>
      <main className='flex min-h-screen flex-col justify-start p-8 bg-dark mx-auto text-center text-white'>
        <Header />
        <SwipeableViews index={indexSlide}>
          <Features
            img='/img/identidad.png'
            text='Identidad digital para tu inmueble.'
          />
          <Features
            img='/img/certificacion.png'
            text='Certificación de la existencia real y trazabilidad.'
          />
          <Features
            img='/img/NFT.png'
            text='Mintea tu NFT y adueñate de tu
          propiedad digital.'
          />
          <Login />
        </SwipeableViews>
        {viewButton && (
          <Button
            content='Continuar'
            onClick={() => setIndexSlide(indexSlide + 1)}
          />
        )}
      </main>
    </>
  )
}

export default Signin

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
