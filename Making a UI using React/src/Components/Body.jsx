import React from 'react'
import Left from './Left'
import Right from './Right'

const Body = () => {
  return (
    <>
      <div className=" flex gap-7  mx-12">
        <Left />
        <Right />
      </div>
    </>
  )
}

export default Body