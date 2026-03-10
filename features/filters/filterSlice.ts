import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortType = '' | 'price_asc' | 'price_desc' | 'rating_desc';

interface FilterState {
  categoryId: string;
  sortBy: SortType;
  search: string;
  priceRange?: number | string;
}

const initialState: FilterState = {
  categoryId: '',
  sortBy: '',
  search: '',
  priceRange: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sortBy = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setCategory, setSort, setSearch, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
