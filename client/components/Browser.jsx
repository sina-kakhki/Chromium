import React from 'react'

import Search from './Search'
import Tools from './Tools'

const Browser = () => {
  return (
    <>
      <div className="flex block md:w-auto md:h-auto bg-gray-100">
        <Search />
        <Tools />
      </div>
    </>
  )
}

export default Browser
