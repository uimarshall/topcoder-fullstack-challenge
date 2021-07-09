import React, { useState } from 'react';

const SearchField = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    // If keyword exist
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="form-inline mr-auto"
        title="Search Product..."
      >
        <div className="form-group">
          <label for="search-field">
            <i className="fa fa-search"></i>
          </label>
          <input
            className="form-control search-field"
            type="search"
            name="search"
            id="search-field"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default SearchField;
