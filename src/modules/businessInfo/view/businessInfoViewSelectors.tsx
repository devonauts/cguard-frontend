import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessInfo.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessInfoViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default businessInfoViewSelectors;
