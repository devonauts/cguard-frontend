import { createSelector } from 'reselect';

const selectRaw = (state) => state.videoTutorial.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const videoTutorialViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default videoTutorialViewSelectors;
