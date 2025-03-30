import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import LoadingIndicator from "./LoadingIndicator";

const ResultsDisplay = () => {
  const result = useSelector((state) => state.query.result);
  const loading = useSelector((state) => state.query.loading);

  console.log("Current result state:", result); // Debugging line

  if (loading) return <LoadingIndicator />;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Results</h2>
      {result.length === 0 ? (
        <p>No data available. Submit a query.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={result}>{/*The result prop is passed to the BarChart component from recharts. */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />{/* Shows details on hover. */}
            <Bar dataKey="value" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ResultsDisplay;
