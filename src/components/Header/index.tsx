import React from 'react'
import Image from 'next/image'

function Header () {
  return (
    <header className='p-6 mx-auto mb-9'>
      <Image
        src='/img/logo.png'
        alt='Logo de BeTrusty'
        width={290}
        height={70}
        objectFit='contain'
      />
    </header>
  )
}

export { Header }
