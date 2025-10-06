import { createSelector } from 'reselect';

const selectRaw = (state) => state.patrolLog.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patrolLogDestroySelectors = {
  selectLoading,
};

export default patrolLogDestroySelectors;
