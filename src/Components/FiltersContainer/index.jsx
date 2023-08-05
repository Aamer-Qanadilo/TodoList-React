import React from 'react'
import SearchInput from './components/SearchInput'
import FilterInput from './components/FilterInput'

import './styles.css'

const FiltersContainer = ({ filter, searchField, onSearchChange, onFilterChange }) => {
    return (
        <div className='filters mb-3'>
            <SearchInput
                searchField={searchField}
                onSearchChange={onSearchChange}
            />
            <FilterInput filter={filter} onFilterChange={onFilterChange} />
        </div>
    )
}

export default FiltersContainer