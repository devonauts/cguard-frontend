import { createSelector } from 'reselect';

const selectRaw = (state) => state.videoTutorialCategory.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const videoTutorialCategoryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default videoTutorialCategoryViewSelectors;
