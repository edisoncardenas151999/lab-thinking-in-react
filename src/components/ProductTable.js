import ProductRow from './ProductRow';

function ProductTable({ products ,searchProduct, setSearchProduct}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow products={products} searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
      </tbody>
    </table>
  );
}

export default ProductTable;
