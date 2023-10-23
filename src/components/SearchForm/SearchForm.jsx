import React from 'react'

export default function SearchForm({ handleInput, handleSubmit, inputValue, handleSelect }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} type="text" onChange={handleInput} required placeholder='Enter TV Show...' />
      <input type="submit" value="Search" />
      <select name='order' onChange={handleSelect} >
        <option value="bestMatch">Best Match</option>
        <option value="rating">Highest Rating</option>
      </select>
    </form>
  )
}
