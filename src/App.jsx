import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    fetch("https://dummyjson.com/products").then((response) =>
      response.json().then(
        (data) => {
          setProducts(data.products);
        },
        (error) => console.log(error?.message)
      )
    );
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {products?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  );
}

export default App;
