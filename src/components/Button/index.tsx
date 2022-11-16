import React from 'react'

function Button ({ content, onClick }: Button) {
  return (
    <button
      onClick={onClick}
      className='px-14 py-2 bg-primary text-dark rounded-3xl text-center text-xl w-full max-w-[320px] mx-auto'
    >
      {content}
    </button>
  )
}

export { Button }
