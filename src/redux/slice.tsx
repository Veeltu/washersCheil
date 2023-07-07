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

  filterFunctionTarget: "Time Delay",
  // filterFunctionTarget: "",
  filterCLassTarget: "",
  filterCompasityTarget: "",

  filteredItems: [] as any[],

  productNotMatch: false,

  functionsList: functionArray,
  sortKey: "",
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
    updateFilterFunctions: (state, action) => {
      state.filterFunctions = action.payload;
    },
    updateFilterClass: (state, action) => {
      state.filterClass = action.payload;
    },
    filterCompasity: (state, action) => {
      state.filterCompasity = action.payload;
    },
    updateFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
    sort: (state, action) => {
      const key = action.payload;
      state.sortKey = key;
    },
    updateNumberOfItemsSow: (state, action) => {
      state.numberOfItemsShow = action.payload;
    },
    updateResultNumber: (state, action) => {
      state.resultNumber = action.payload;
    },
    updateProductNotMatch: (state, action) => {
      state.productNotMatch = action.payload
    },
    updateFilterFunctionTarget: (state, action) => {
      state.filterFunctionTarget = action.payload
    },
    updateFilterClassTarget: (state, action) => {
      state.filterCLassTarget = action.payload
    },
    updateFilterCompasityTarget: (state, action) => {
      state.filterCompasityTarget = action.payload
    },
  },
});

export const {
  search,
  sort,

  updateNumberOfItemsSow,
  updateResultNumber,
  updateFilterFunctions,
  updateFilterClass,
  filterCompasity,

  updateFilteredItems,

  updateProductNotMatch,

  updateFilterFunctionTarget,
  updateFilterClassTarget,
  updateFilterCompasityTarget
} = washersSlice.actions;
export default washersSlice.reducer;
