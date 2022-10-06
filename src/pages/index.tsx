import React, { useContext, useState } from 'react'
import { NextPage } from 'next'
//import { trpc } from '../utils/trpc'
import SwipeableViews from 'react-swipeable-views'
import { Context } from '../context'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Features } from '@components/Features'
import { Login } from '@components/Login'

const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }])
  const { indexSlide, setIndexSlide, viewButton, setViewButton } = useContext(
    Context
  )
  if (indexSlide > 2) {
    setViewButton(false)
  }
  return (
    <>
      <main className='flex min-h-screen flex-col justify-start p-8 bg-dark'>
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

export default Home
