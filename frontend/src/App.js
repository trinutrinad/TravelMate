import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App = () => {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        const response = await fetch(`http://localhost:5000/api/search?query=${query}`);
        const data = await response.json();
        setResults(data.results);
    };

    return (
        <div>
            <h1>TravelMate</h1>
            <SearchBar onSearch={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
};

export default App;
