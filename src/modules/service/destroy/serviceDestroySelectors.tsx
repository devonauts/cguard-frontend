import { createSelector } from 'reselect';

const selectRaw = (state) => state.service.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const serviceDestroySelectors = {
  selectLoading,
};

export default serviceDestroySelectors;
