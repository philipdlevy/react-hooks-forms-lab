import React from "react";
// receiving the props from app to use. 
function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      {/* calling the darkmodeclick functin on the click event */}
      <button onClick={onDarkModeClick}>
        {/* using the isDarkMode varaible state with a ternary to switch between light and dark mode */}
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
