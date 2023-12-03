import { createSlice } from "@reduxjs/toolkit";
const Dataslice = createSlice({
  name: "list",
  initialState: {
    listresult: {},
    filter:{},
  },
  reducers: {
    addlist: (state, action) => {
      state.listresult = action.payload;
    },
    filtereddata:(state,action)=>{
     state.filter=action.payload;
    }
  },
});

export const { addlist,filtereddata } = Dataslice.actions;

export default Dataslice.reducer;
