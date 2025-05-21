import { useEffect, useState } from "react";
import Card from "../../pages/Card"; 

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
