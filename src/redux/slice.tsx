import { createSlice } from "@reduxjs/toolkit";
import washers from "../washers.json";

//dynamic generated content for filter "functions"
const allFunctions: Set<string> = new Set();

washers.washers.forEach((washer) => {
  washer.functions.forEach((func) => {
    allFunctions.add(func);
  });
});

const functionArray = Array.from(allFunctions);
// ============================

const initialState = {
  washers: washers.washers,

  searchedWashers: [] as any[],

  filterFunctions: [] as any[],
  filterClass: [] as any[],
  filterCompasity: [] as any[],

  filteredItems: [] as any[],

  functionsList: functionArray,
  sortKey: '',
  numberOfItemsShow: 3,
  resultNumber: 0,
};

const washersSlice = createSlice({
  name: "washers",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchedWashers = [];
      state.searchedWashers.push(action.payload);
    },
    filterFunctions: (state, action) => {
      state.filterFunctions = [];
      state.filterFunctions.push(action.payload);
    },
    filterClass: (state, action) => {
      state.filterClass = [];
      state.filterClass.push(action.payload);
    },
    filterCompasity: (state, action) => {
      state.filterCompasity = [];
      state.filterCompasity.push(action.payload);
    },
    updateFilteredItems: (state, action) => {
      state.filteredItems = [];
      state.filteredItems.push(action.payload);
    },
    sort: (state, action) => {
      const key  = action.payload;
      state.sortKey = key
    },
    updateNumberOfItemsSow: (state, action) => {
      state.numberOfItemsShow = action.payload
    },
    updateResultNumber: (state, action) => {
      state.resultNumber = action.payload
    }
  },
});

export const { search, sort, updateNumberOfItemsSow, updateResultNumber, filterFunctions, filterClass, filterCompasity,updateFilteredItems } = washersSlice.actions;
export default washersSlice.reducer;
