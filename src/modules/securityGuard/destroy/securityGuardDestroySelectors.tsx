import { createSelector } from 'reselect';

const selectRaw = (state) => state.securityGuard.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const securityGuardDestroySelectors = {
  selectLoading,
};

export default securityGuardDestroySelectors;
