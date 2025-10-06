import { createSelector } from 'reselect';

const selectRaw = (state) => state.billing.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const billingDestroySelectors = {
  selectLoading,
};

export default billingDestroySelectors;
