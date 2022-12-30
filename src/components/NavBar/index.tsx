import React from 'react'
import Link from 'next/link'
import { BiLeftArrowAlt } from 'react-icons/bi'

function NavBar ({ title }: NavBar) {
  return (
    <nav className='flex flex-row items-center justify-start gap-3 w-full text-white text-lg lg:text-2xl p-5 bg-navbar'>
      <Link href='/'>
        <a className='text-primary text-2xl lg:text-3xl font-bold cursor-pointer p-1'>
          <BiLeftArrowAlt />
        </a>
      </Link>
      <h2>{title}</h2>
    </nav>
  )
}

export { NavBar }
