import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// receiving the items props and the adding the item function to use. 
// receiving from app component
function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchTerm] = useState("")

  // getting the value when selecting the category dropdown. for the filter by category, not the create new item category
  //we are getting the value of what they select
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  //filtering through the items that are displayed, if the state or what is selected is all, return true which gets everything
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    // or return the category you picked. 
    return item.category === selectedCategory;
    // then, for the filtering by search bar, filter through items, and if the search term is equal to anything that matches, return true and the items whether or not you type in upper case. 
  }).filter((item) => {
    if (search === "") return true;

    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  // function that gets back the value of what you search for in the items. 
  function onSearchChange(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="ShoppingList">
      {/* sending down handleAddItem from the props which we got from the app component that adds a new item to the list */}
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      {/* sending down the function that gets the value of what you search in the bar, and the function that gets the value of the category change, and the state variable to search */}
      <Filter onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
