import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuery, setResult } from "../redux/queryReducer";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {//checks if query is empty 
      dispatch(addQuery(query));

      setTimeout(() => {
        const mockData = [
          { name: "Sales", value: Math.floor(Math.random() * 500) },
          { name: "Revenue", value: Math.floor(Math.random() * 1000) },
        ];
        console.log("Mock Data Generated:", mockData);
        dispatch(setResult(mockData));//sends data to the result array for displaying
      }, 2000);

      setQuery(""); // Clear input field
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-grow"
          placeholder="Ask a business question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryInput;
