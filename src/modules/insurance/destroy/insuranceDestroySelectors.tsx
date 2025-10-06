import { createSelector } from 'reselect';

const selectRaw = (state) => state.insurance.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const insuranceDestroySelectors = {
  selectLoading,
};

export default insuranceDestroySelectors;
