import { createSelector } from 'reselect';

const selectRaw = (state) => state.inquiries.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const inquiriesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default inquiriesViewSelectors;
