Overview:
This is a React + Redux project that allows users to submit queries, store them in Redux, and display the results using a bar chart (powered by recharts). It also includes a loading indicator to enhance the user experience.

Features:

Redux State Management for storing queries & results.

Recharts for visualizing query results.

Loading Indicator to show when data is being processed.

Responsive UI with Tailwind CSS.


Usage:

1. Submit a Query
Enter a query in the input field and click Submit.
The query is stored in Redux and displayed in the Query History.
A simulated API call (2s delay) generates mock data.

2. View Results
Once the API call completes, results appear in a bar chart.
The chart updates dynamically for each submitted query.

3. Query History
Displays all previously submitted queries from Redux state.

Key Technologies Used:
Technology             Purpose
React                  UI Components
Redux Toolkit          State Management
Recharts               Data Visualization
Tailwind CSS           Styling
