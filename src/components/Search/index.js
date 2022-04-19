import React from 'react';
import './Search.styles.css';

export default function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." onChange={(event) => handleSearchNote(event.target.value)} />
    </div>
  );
}
