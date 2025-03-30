import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold text-center">Gen AI Query Dashboard</h1>
      <QueryInput />
      <ResultsDisplay />
      <QueryHistory />
    </div>
  );
}

export default App;
