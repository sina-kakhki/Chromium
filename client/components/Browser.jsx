import React from 'react'

import Search from './Search'
import Tools from './Tools'
import Content from './Content'

const Browser = () => {
  return (
    <>
      <div className="flex flex-col md:w-auto md:h-auto bg-gray-100">

        <div className="flex flex-wrap flex-row items stretch">

          <div className="flex flex-column w-1/5">
            <Tools />
          </div>
          <div className="flex flex-column w-4/5">
            <Search />
          </div>

        </div>

        <div>
          <Content />
        </div>

      </div>
    </>
  )
}

export default Browser
