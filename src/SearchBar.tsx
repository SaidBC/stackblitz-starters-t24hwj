import React from 'react';
export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input className="searchBox" placeholder="Search" />
      <div className="editBox">
        <i className="fa-regular fa-pen-to-square"></i>
      </div>
    </div>
  );
};
