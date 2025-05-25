import React, { useState } from "react";
import AllProductsTable from "../../components/ui/adminUi/AllProductsTable";
import useProducts from "../../hooks/useProducts";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { products, loading, totalPages } = useProducts({ searchTerm, page, limit: 5 });

  return (
    <div className="container mx-auto mt-6">
      <AllProductsTable
        products={products}
      />
    </div>
  );
};

export default ProductsPage;
