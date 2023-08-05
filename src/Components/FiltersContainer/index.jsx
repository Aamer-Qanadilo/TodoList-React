import React from 'react'
import SearchInput from './components/SearchInput'
import FilterInput from './components/FilterInput'

import './styles.css'

const FiltersContainer = ({ filter, searchField, handleSearchChange, handleFilterChange }) => {
    return (
        <div className='filters mb-3'>
            <SearchInput
                searchField={searchField}
                onSearchChange={handleSearchChange}
            />
            <FilterInput filter={filter} onFilterChange={handleFilterChange} />
        </div>
    )
}

export default FiltersContainer