import React, { useState } from 'react';

function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        // Call search API here
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;
