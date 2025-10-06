import { createSelector } from 'reselect';

const selectRaw = (state) => state.insurance.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const insuranceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default insuranceViewSelectors;
