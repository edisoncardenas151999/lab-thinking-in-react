import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchProduct, setSearchProduct] = useState(products)
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar products={products} setProducts={setProducts} searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>
        <ProductTable products={products} searchProduct={searchProduct} setSearchProduct={setSearchProduct}/>


      </div>    
  )
}
export default ProductsPage;