import { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    // Add more items to the data array as needed
  ];

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setQuery(userInput);
    filterItems(userInput);
  };

  const filterItems = (searchQuery) => {
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search items..."
      />

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
