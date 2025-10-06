import { createSelector } from 'reselect';

const selectRaw = (state) => state.service.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const serviceViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default serviceViewSelectors;
