import { createSelector } from 'reselect';

const selectRaw = (state) => state.inventory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const inventoryDestroySelectors = {
  selectLoading,
};

export default inventoryDestroySelectors;
