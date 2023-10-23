import React from 'react'
import { useSort } from '../../context'

export default function SortOption() {
  const {handleSelect} = useSort()
  return (
    <>
     <select name='order' onChange={handleSelect} >
        <option value="bestMatch">Best Match</option>
        <option value="rating">Highest Rating</option>
      </select>
    </>
  )
}
