import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = () => {
    setSearchTerm(searchTerm); // calls the onSearch prop with the searchTerm which means the parent component will be notified of the search term. the parent component will then be able to use the search term to make an API call.
    console.log(searchTerm);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
