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

  filterFunctionTarget: "#",
  filterCLassTarget: "#",
  filterCapasityTarget: "#",

  filteredItems: [] as any[],

  filterUsed: false,

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
     updateFilterCapacityTarget: (state, action) => {
      state.filterCapasityTarget = action.payload
    },
    updateFilterUsed: (state, action) => {
      state.filterUsed = action.payload
    },
  },
});

export const {
  search,
  sort,

  updateNumberOfItemsSow,
  updateResultNumber,

  updateFilteredItems,

  updateProductNotMatch,
  updateFilterUsed,

  updateFilterFunctionTarget,
  updateFilterClassTarget,
   updateFilterCapacityTarget
} = washersSlice.actions;
export default washersSlice.reducer;
