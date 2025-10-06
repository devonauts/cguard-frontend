import { createSelector } from 'reselect';

const selectRaw = (state) => state.request.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const requestDestroySelectors = {
  selectLoading,
};

export default requestDestroySelectors;
