import { createSelector } from 'reselect';

const selectRaw = (state) => state.shift.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shiftViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default shiftViewSelectors;
