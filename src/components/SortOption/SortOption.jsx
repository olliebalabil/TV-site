import React from 'react'

export default function SortOption({handleSelect}) {
  return (
    <>
     <select name='order' onChange={handleSelect} >
        <option value="bestMatch">Best Match</option>
        <option value="rating">Highest Rating</option>
      </select>
    </>
  )
}
