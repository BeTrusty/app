import React from 'react'
import Image from 'next/image'

function Header () {
  return (
    <header className='p-6 pt-0 mx-auto'>
      <Image
        src='/img/logo.png'
        alt='Logo de BeTrusty'
        width={290}
        height={70}
        objectFit='contain'
        priority
      />
    </header>
  )
}

export { Header }
