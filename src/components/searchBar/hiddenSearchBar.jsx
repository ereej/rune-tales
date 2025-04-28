import { Search } from "lucide-react";
import "./hiddenSearchBar.css";

const HiddenSearchBar = () => {
  return (
    <div className="hidden-searchbar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-icon-button" aria-label="Search">
        <Search size={20} className="search-icon" />
      </button>
    </div>
  );
};

export default HiddenSearchBar;
