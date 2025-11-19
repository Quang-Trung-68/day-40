import React from "react";
import { useFetchProducts } from "@/services/product";

function Home() {
  const { isLoading, products } = useFetchProducts();

  return (
    <>
      <h1>Home</h1>
      <ul>
        {!isLoading ? (
          products.map((product) => (
            <li key={product.id}>
              {product.id} - {product.title} - {product.price}
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </>
  );
}

export default Home;
