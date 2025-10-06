import { createSelector } from 'reselect';

const selectRaw = (state) => state.report.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const reportDestroySelectors = {
  selectLoading,
};

export default reportDestroySelectors;
