import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // handles dark mode function. boolean
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  //handles adding a new item. uses spread operator to make a new array and add the new item
  function onItemFormSubmit(newItem) {
    setItems([...items, newItem])
  }

  return (
    // ternary expression, if isDarkMode is true (which is false from above), show dark mode. else, light mdoe which is normal since it is false.  
    <div className={"App " + (isDarkMode ? "dark" : "light")}>

      {/* sending down dark mode to use, and darkmode function to handle click */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />

      {/* sending handleItem function and items down to  use */}
      <ShoppingList onItemFormSubmit={onItemFormSubmit} items={items} />
    </div>
  );
}

export default App;
