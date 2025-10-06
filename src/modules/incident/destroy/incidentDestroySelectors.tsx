import { createSelector } from 'reselect';

const selectRaw = (state) => state.incident.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const incidentDestroySelectors = {
  selectLoading,
};

export default incidentDestroySelectors;
