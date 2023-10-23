import React, { useEffect, useState } from 'react'
import ShowCard from '../ShowCard/ShowCard'
import SearchForm from '../SearchForm/SearchForm'

export default function SearchWidget() {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [showData, setShowData] = useState([])
  const [sortOption, setSortOption] = useState('bestMatch')

  function compareRating(a, b) {
    if (a.rating.average > b.rating.average) {
      return -1;
    } else if (a.rating.average < b.rating.average) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
      const data = await response.json()
      const newData = data.map(s => s.show)
      if (sortOption === "rating") {
        setShowData(newData.sort(compareRating))
      } else {
      setShowData(newData)
      }
    }
    searchAPI()
  }, [searchValue])

  function handleInput(e) {
    const newInput = e.target.value
    setInputValue(newInput)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSearchValue(inputValue)
    setInputValue('')
  }

  function handleSelect(e) {
    setSortOption(e.target.value)
  }

  return (
    <>
      <SearchForm handleInput={handleInput} handleSubmit={handleSubmit} inputValue={inputValue} handleSelect={handleSelect} />
      {
        showData.filter(show => show.image).map((show) => <ShowCard key={show.id} show={show} />)
      }
    </>
  )
}