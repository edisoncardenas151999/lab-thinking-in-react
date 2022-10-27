

import React, { useState } from 'react';

function SearchBar({products, setProducts,searchProduct, setSearchProduct}) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
    let match = products.filter((product) => product.name.toLowerCase().includes(e.target.value))
    setSearchProduct(match)
  }
  return (
    <div>
      <input type="text" name="name" onChange={handleChange} value={name} />
    </div>
  );

}
export default SearchBar;
