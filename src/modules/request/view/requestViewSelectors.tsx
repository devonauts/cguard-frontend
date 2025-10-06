import { createSelector } from 'reselect';

const selectRaw = (state) => state.request.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const requestViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default requestViewSelectors;
