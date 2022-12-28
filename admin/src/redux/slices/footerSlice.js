import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  rows: [
    {
      name: "",
      link: "",
      isRelativeUrl: false,
    },
  ],
  filteredData: [],
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    addNewRow: (state, action) => {
      state.rows.push({
        name: "",
        link: "",
        isRelativeUrl: false,
      });
    },
    removeRow: (state, action) => {
      const filteredRows = state.rows?.filter((_, index) => {
        return index !== action.payload;
      });
      state.rows = filteredRows;
    },
    handleRowItemChange: (state, action) => {
        state.rows[action.payload.index][action.payload.name] = action.payload.value
    },
    filteredRowsData: (state,action) => {
        let prices = state.rows?.filter((row) => {
            if(row?.name && row?.link && row?.isRelativeUrl) {
                return {
                    name: row?.name,
                    link: row?.link,
                    isRelativeUrl: row?.isRelativeUrl
                }
            }
            return '';
        })
        state.filteredData = prices
    },
  },
});

export const {
  addNewRow,
  removeRow,
  handleRowItemChange,
  filteredRowsData,
} = footerSlice.actions;

export default footerSlice.reducer;
