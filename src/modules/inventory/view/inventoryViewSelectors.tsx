import { createSelector } from 'reselect';

const selectRaw = (state) => state.inventory.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const inventoryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default inventoryViewSelectors;
