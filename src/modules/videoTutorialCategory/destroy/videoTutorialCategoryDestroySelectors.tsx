import { createSelector } from 'reselect';

const selectRaw = (state) => state.videoTutorialCategory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const videoTutorialCategoryDestroySelectors = {
  selectLoading,
};

export default videoTutorialCategoryDestroySelectors;
