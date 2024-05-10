import { createSlice } from '@reduxjs/toolkit';

const openaiSlice = createSlice({
  name: "openai",
  initialState: {
    responses: [] 
  },
  reducers: {
    addResponses: (state, action) => {
      state.responses.push(...action.payload);
    }
  }
});

export const { addResponses } = openaiSlice.actions;
export default openaiSlice.reducer;