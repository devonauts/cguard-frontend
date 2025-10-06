import { createSelector } from 'reselect';

const selectRaw = (state) => state.billing.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const billingViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default billingViewSelectors;
