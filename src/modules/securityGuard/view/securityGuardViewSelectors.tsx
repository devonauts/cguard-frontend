import { createSelector } from 'reselect';

const selectRaw = (state) => state.securityGuard.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const securityGuardViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default securityGuardViewSelectors;
