import { useSelector } from "react-redux";

const QueryHistory = () => {
  const queries = useSelector((state) => state.query.queries);

  return (
    <div className="p-4 border-t">
      <h2 className="text-lg font-bold">Query History</h2>
      <ul>
        {queries.map((q, index) => (
          <li key={index} className="p-2 border-b">{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
