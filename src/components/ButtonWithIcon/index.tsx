import React from 'react'
import { BtnWithIcon } from '@src/types/index'

function ButtonWithIcon ({ content, children, onClick }: BtnWithIcon) {
  return (
    <button
      onClick={onClick}
      className='flex flex-row justify-center items-center gap-2 px-14 py-2 bg-primary text-dark rounded-3xl text-center text-xl w-full max-w-[320px] mx-auto'
    >
      <span>{children}</span>
      {content}
    </button>
  )
}

export { ButtonWithIcon }
