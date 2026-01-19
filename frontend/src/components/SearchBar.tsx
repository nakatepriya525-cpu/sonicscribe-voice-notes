import React, { useState } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { useNotesStore } from '../store/notesStore';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { setSearchFilters } = useNotesStore();

  const handleSearch = (value: string) => {
    setQuery(value);
    setSearchFilters({ query: value });
  };

  const handleClear = () => {
    setQuery('');
    setSearchFilters({});
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search notes..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
        {query && (
          <button className="clear-btn" onClick={handleClear}>
            <X size={16} />
          </button>
        )}
      </div>
      
      <button 
        className="filter-btn"
        onClick={() => setShowFilters(!showFilters)}
        title="Filters"
      >
        <Filter size={18} />
      </button>

      {showFilters && (
        <div className="filters-panel">
          <h4>Filters</h4>
          <p className="coming-soon">Advanced filters coming soon...</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;