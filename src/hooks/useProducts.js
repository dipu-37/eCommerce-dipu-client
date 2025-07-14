
import { useEffect, useState } from "react";

const useProducts = ({ searchTerm, page = 1, limit = 10 }) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let url = `https://e-commerce-1-jztd.onrender.com/api/v1/products?page=${page}&limit=${limit}`;
      if (searchTerm) {
        url += `&searchTerm=${encodeURIComponent(searchTerm)}`;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.success) {
          setProducts(data.data);
          setTotalPages(data.meta.totalPage);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm, page, limit]);

  return { products, totalPages, loading };
};

export default useProducts;
