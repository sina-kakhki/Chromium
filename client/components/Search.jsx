import React from 'react'

const Search = () => {
  return (
    <>
      <form className="font-mono space-x-4">
        <label >
          <input className="w-96" type="text" name="urlField" placeholder="Search Google or enter a URL" />
        </label>
        <input className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit" value="Go!" />
      </form>
    </>
  )
}

export default Search
