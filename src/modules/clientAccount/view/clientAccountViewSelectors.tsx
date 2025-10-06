import { createSelector } from 'reselect';

const selectRaw = (state) => state.clientAccount.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const clientAccountViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default clientAccountViewSelectors;
