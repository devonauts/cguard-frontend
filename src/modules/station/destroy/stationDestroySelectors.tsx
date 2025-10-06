import { createSelector } from 'reselect';

const selectRaw = (state) => state.station.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const stationDestroySelectors = {
  selectLoading,
};

export default stationDestroySelectors;
