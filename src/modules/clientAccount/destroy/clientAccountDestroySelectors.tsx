import { createSelector } from 'reselect';

const selectRaw = (state) => state.clientAccount.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const clientAccountDestroySelectors = {
  selectLoading,
};

export default clientAccountDestroySelectors;
