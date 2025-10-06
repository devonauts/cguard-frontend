import { createSelector } from 'reselect';

const selectRaw = (state) => state.inventoryHistory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const inventoryHistoryDestroySelectors = {
  selectLoading,
};

export default inventoryHistoryDestroySelectors;
