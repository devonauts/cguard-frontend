import { createSelector } from 'reselect';

const selectRaw = (state) => state.guardShift.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const guardShiftViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default guardShiftViewSelectors;
