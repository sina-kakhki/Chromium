import React from 'react'

const Search = () => {
  return (
    <>
      <form>
        <label>
          <input type="text" name="urlField" defaultValue="Search Google or enter a URL" />
        </label>
        <input type="submit" value="Go!" />
      </form>
    </>
  )
}

export default Search
