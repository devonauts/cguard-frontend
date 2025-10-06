import { createSelector } from 'reselect';

const selectRaw = (state) => state.businessInfo.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const businessInfoDestroySelectors = {
  selectLoading,
};

export default businessInfoDestroySelectors;
