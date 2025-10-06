import { createSelector } from 'reselect';

const selectRaw = (state) => state.report.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reportViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default reportViewSelectors;
