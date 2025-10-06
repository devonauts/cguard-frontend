import { createSelector } from 'reselect';

const selectRaw = (state) => state.incident.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const incidentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default incidentViewSelectors;
