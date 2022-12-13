/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import { signIn } from 'next-auth/react'
import { ButtonLogin } from '@components/ButtonLogin'

function Login () {
  return (
    <section className='flex flex-col justify-center gap-5 text-white text-center max-w-[290px] mx-auto'>
      <h3>Iniciar sesión:</h3>
      <ButtonLogin
        content='Acceder con Google'
        img='/img/logo-google--white.png'
        onClick={() =>
          signIn('google', {
            redirect: false,
            callbackUrl: '/'
          })
        }
      />
      <ButtonLogin
        content='Acceder con Twitter'
        img='/img/logo-twitter--white.png'
        onClick={() =>
          signIn('twitter', {
            redirect: false,
            callbackUrl: '/'
          })
        }
      />
      <ButtonLogin
        content='Link de acceso o email'
        img='/img/logo-link--white.png'
        onClick={() => console.log('Me conecté con email')}
      />
      <button
        onClick={() => console.log('Login')}
        className='px-14 py-2 bg-primary text-dark rounded-3xl text-center text-md'
      >
        Iniciar sesión
      </button>
      <h3>O únete a BeTrusty.</h3>
    </section>
  )
}

export { Login }
