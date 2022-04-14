import React, {useState} from "react";
import { v4 as uuid } from "uuid";

// receives handleAddItem prop from shopping list that got it from app component that adds the new item to the array
function ItemForm({ onItemFormSubmit }) {
  const [nameInput, setNameInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Produce")

  // this function handles the submit for adding a new item. We make a new object to add. 
  function handleSubmit(event) {
    event.preventDefault();
    const newItemData = {
      id: uuid(),
      name: nameInput,
      category: categoryInput
    }
    // we take our prop passed down twice from app to use on the new object data that is created
    onItemFormSubmit(newItemData)
  }
  // this function gets the value of what new item you type in to add
  function handleNameInput(event) {
    setNameInput(event.target.value)
  }
  // this function gets the value of what category you choose for the new item that you add
  function handleCategoryInput(event) {
    setCategoryInput(event.target.value)
  }

  return (
    // onSubmit function handles the submit from above that adds the new object we made to the DOM
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        {/* we need on onChange eventlistener because we are typing and changing the value input */}
        <input type="text" name="name" onChange={handleNameInput} />
      </label>

      <label>
        Category:
        {/* We need an onChange eventlistener because the value of the category change will change for what we select */}
        <select name="category" onChange={handleCategoryInput}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
