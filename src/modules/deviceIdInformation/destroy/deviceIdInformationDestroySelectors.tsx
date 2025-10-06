import { createSelector } from 'reselect';

const selectRaw = (state) => state.deviceIdInformation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const deviceIdInformationDestroySelectors = {
  selectLoading,
};

export default deviceIdInformationDestroySelectors;
