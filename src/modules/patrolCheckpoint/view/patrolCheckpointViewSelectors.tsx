import { createSelector } from 'reselect';

const selectRaw = (state) => state.patrolCheckpoint.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patrolCheckpointViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default patrolCheckpointViewSelectors;
