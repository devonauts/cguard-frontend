import { createSelector } from 'reselect';

const selectRaw = (state) => state.completionOfTutorial.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const completionOfTutorialDestroySelectors = {
  selectLoading,
};

export default completionOfTutorialDestroySelectors;
