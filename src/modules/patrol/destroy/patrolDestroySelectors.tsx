import { createSelector } from 'reselect';

const selectRaw = (state) => state.patrol.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patrolDestroySelectors = {
  selectLoading,
};

export default patrolDestroySelectors;
