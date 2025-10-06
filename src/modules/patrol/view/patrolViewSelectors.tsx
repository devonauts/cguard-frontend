import { createSelector } from 'reselect';

const selectRaw = (state) => state.patrol.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patrolViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default patrolViewSelectors;
