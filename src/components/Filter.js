import React from "react";

// receives the props from shopping list to use. 
// receives onCategoryChange which is a function to get the value when selecting the category dropdown. for the filter by category, not the create new item category
// receives the handleSearchTerm function that gets back the value of what you search for or type in the items. 
// receives searchTerm which is the state which is an empty string until text is put in. 
function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input onChange={onSearchChange} type="text" name="search" placeholder="Search..." value={search} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
