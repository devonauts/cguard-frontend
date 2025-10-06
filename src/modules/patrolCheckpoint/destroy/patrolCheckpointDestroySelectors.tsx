import { createSelector } from 'reselect';

const selectRaw = (state) => state.patrolCheckpoint.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patrolCheckpointDestroySelectors = {
  selectLoading,
};

export default patrolCheckpointDestroySelectors;
