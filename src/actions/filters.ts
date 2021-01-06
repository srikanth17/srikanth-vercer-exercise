import {
  ClearFiltersAction,
  CLEAR_FILTERS,
  Filters,
  SetFiltersAction,
  SET_FILTERS,
} from '../types/types';

export const setFilters = (filters: Filters): SetFiltersAction => ({
  type: SET_FILTERS,
  filters,
});

export const clearFilters = (): ClearFiltersAction => ({
  type: CLEAR_FILTERS,
});
