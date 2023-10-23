import React, { useState, useContext, createContext } from "react";

const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [sortOption, setSortOption] = useState('bestMatch')
  function handleSelect(e) {
    setSortOption(e.target.value)
  }
    return (
        <SortContext.Provider value={{ sortOption, setSortOption, handleSelect }}>
            {children}
        </SortContext.Provider>
    );
};

export const useSort = () => useContext(SortContext);
