import { createSelector } from 'reselect';

const selectRaw = (state) => state.deviceIdInformation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const deviceIdInformationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default deviceIdInformationViewSelectors;
