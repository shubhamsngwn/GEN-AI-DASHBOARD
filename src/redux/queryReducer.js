import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: [],
  result: [],
  loading: false,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      console.log("Query Submitted:", action.payload);
      state.queries.push(action.payload);
      state.loading = true;
    },
    setResult: (state, action) => {
      console.log("Setting Result:", action.payload);
      return {
        ...state,
        result: action.payload,
        loading: false,
      };
    },
  },
});

export const { addQuery, setResult } = querySlice.actions;
export default querySlice.reducer;
