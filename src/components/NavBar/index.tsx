import React from 'react'
import { useRouter } from 'next/router'
import { BiLeftArrowAlt } from 'react-icons/bi'

function NavBar ({ title }: NavBar) {
  const router = useRouter()
  return (
    <nav className='flex flex-row items-center justify-start gap-3 w-full text-white text-lg lg:text-2xl p-5 bg-navbar'>
      <span
        className='text-primary text-2xl lg:text-3xl font-bold cursor-pointer'
        onClick={() => router.push('/')}
      >
        <BiLeftArrowAlt />
      </span>
      <h2>{title}</h2>
    </nav>
  )
}

export { NavBar }
