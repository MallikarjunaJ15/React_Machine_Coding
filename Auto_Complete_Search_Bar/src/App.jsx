import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`,
      );
      const data = await res.json();
      setData(data?.recipes?.slice(0, 5));
    };

    const timerID = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timerID);
    };
  }, [input]);

  console.log("recived data is", data);
  const handleOnchange = (e) => {
    setInput(e.target.value);
    setShowDropdown(true);
  };

  const handleSelect = (recipe) => {
    setInput(recipe);
    setShowDropdown(false);
  };
  return (
    <div className="App">
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        value={input}
        onChange={handleOnchange}
        placeholder="Search..."
      />
      <div className="dropdown-container">
        {showDropdown &&
          data.length > 0 &&
          data?.map((item) => (
            <p key={item?.id} onClick={() => handleSelect(item?.name)}>
              {item?.name}
            </p>
          ))}
      </div>
    </div>
  );
}
