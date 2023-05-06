import React from "react";

function NavBar({ onCategoryClick, homes, onSearch, onAddHomeClick }) {
  const handleCategoryClick = (category) => {
    onCategoryClick(category);
  };
  function handleSearch(event) {
    event.preventDefault();
    const searchValue = event.target.search.value.toLowerCase();

    // Filter homes based on search query
    const filteredHomes = homes.filter((home) => {
      const lowerCaseTitle = home.title.toLowerCase();
      const lowerCaseLocation = home.location.toLowerCase();

      return (
        lowerCaseTitle.includes(searchValue) ||
        lowerCaseLocation.includes(searchValue)
      );
    });

    onSearch(filteredHomes);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button id="category" onClick={() => handleCategoryClick("sale")}>
          For Sale
        </button>
        <button id="category" onClick={() => handleCategoryClick("rental")}>
          For Rent
        </button>
        <button id="category" onClick={() => onAddHomeClick()}>
          Add Home
        </button>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input type="text" name="search" placeholder="Search Homes" />
        <button id="category" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default NavBar;