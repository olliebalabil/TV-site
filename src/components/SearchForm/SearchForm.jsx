import React from 'react'
import SortOption from '../SortOption/SortOption'

export default function SearchForm({ handleInput, handleSubmit, inputValue, handleSelect }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} type="text" onChange={handleInput} required placeholder='Enter TV Show...' />
      <input type="submit" value="Search" />
      <SortOption handleSelect={handleSelect}/>
    </form>
  )
}
