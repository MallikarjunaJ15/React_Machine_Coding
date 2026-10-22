import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = data.length;
  const perPageContent = 30;
  const totalPage = Math.ceil(totalProducts / perPageContent);
  const startIndex = (currentPage - 1) * perPageContent;
  const endIndex = currentPage * perPageContent;
  const currentData = data.slice(startIndex, endIndex);

  console.log("this page data is", currentData);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      const data = await res.json();
      setData(data.products);
    };
    fetchData();
  }, []);

  if (data.length === 0) return <div>Loading products...</div>;
  return (
    <div className="App">
      <Card data={currentData} />
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
