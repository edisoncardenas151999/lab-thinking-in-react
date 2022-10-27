

function ProductRow({products,searchProduct, setSearchProduct}) {
  const renderProduct = searchProduct.map((product) => {
    return (
        <tr key={product.id}>
          <td> {product.name}</td>
          <td className={!product.inStock ? "background-red" : "" }> {product.price} </td>
        </tr>

    );
  });
  return renderProduct
}
export default ProductRow;
