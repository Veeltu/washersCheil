import { createSlice } from "@reduxjs/toolkit";
import washers from "../washers.json";

//dynamic generated content for filter "functions"
const allFunctions: Set<string> = new Set();

washers.washers.forEach((washer) => {
  washer.functions.forEach((func) => {
    allFunctions.add(func);
  });
});

const functionArray: Array<string> = Array.from(allFunctions);

interface Washer {
  image:string;
  title:string;
  capacity:string;
  measurements:string;
  functions: Array<string>;
  class:string;
  valid:string;
  price:string;
  rates:string
}

interface State {
  washers: Washer[];
  searchedWashers: Washer[];
  displayedWashers: string;
  filterFunctionTarget: string;
  filterClassTarget: string;
  filterCapasityTarget: string;
  filterUsed: boolean;
  productNotMatch: boolean;
  functionsList: string[];
  sortKey: string;
  numberOfItemsShow: number;
  resultNumber: number;
}

const initialState: State= {
  washers: washers.washers as Washer[],
  searchedWashers: washers.washers as Washer[],
  displayedWashers: "",
  filterFunctionTarget: "#",
  filterClassTarget: "#",
  filterCapasityTarget: "#",
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
      state.searchedWashers = action.payload;
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
      state.productNotMatch = action.payload;
    },
    updateFilterFunctionTarget: (state, action) => {
      state.filterFunctionTarget = action.payload;
    },
    updateFilterClassTarget: (state, action) => {
      state.filterClassTarget = action.payload;
    },
    updateFilterCapacityTarget: (state, action) => {
      state.filterCapasityTarget = action.payload;
    },
    updateFilterUsed: (state, action) => {
      state.filterUsed = action.payload;
    },
    updateDisplayedWashers: (state, action) => {
      state.displayedWashers = action.payload;
    },
  },
});

export const {
  search,
  sort,
  updateNumberOfItemsSow,
  updateResultNumber,
  updateProductNotMatch,
  updateFilterUsed,
  updateDisplayedWashers,
  updateFilterFunctionTarget,
  updateFilterClassTarget,
  updateFilterCapacityTarget,
} = washersSlice.actions;
export default washersSlice.reducer;
