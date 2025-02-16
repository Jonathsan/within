import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; // Import ProductCard component

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating fetching products from an API or local data
    const fetchedProducts = [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "/images/headphones.jpg",
      },
      {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "/images/smartwatch.jpg",
      },
      {
        id: 3,
        name: "Gaming Mouse",
        price: 49.99,
        image: "/images/mouse.jpg",
      },
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="container bg-gray-50">
      <h2 className="my-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
