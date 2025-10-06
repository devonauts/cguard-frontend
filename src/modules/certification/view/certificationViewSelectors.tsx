import { createSelector } from 'reselect';

const selectRaw = (state) => state.certification.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const certificationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default certificationViewSelectors;
