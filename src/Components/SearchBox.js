import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='ma3 pa2'>
            <input type='search'
                   placeholder='search robot'
                   className = "bg-washed-yellow ba"
                   onChange = {searchChange}
                   />
        </div>
    )
}

export default SearchBox
