
import React, { useEffect, useState } from 'react'
import Card from '../../pages/Card'
const BestProducts = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const filtered = data.data.filter((product) => product.ratings >= 4.5);
          setProducts(filtered);
        }
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);
  return (
   <div>
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  )
}

export default BestProducts
