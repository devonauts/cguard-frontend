import { createSelector } from 'reselect';

const selectRaw = (state) => state.videoTutorial.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const videoTutorialDestroySelectors = {
  selectLoading,
};

export default videoTutorialDestroySelectors;
