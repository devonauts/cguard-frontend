import { createSelector } from 'reselect';

const selectRaw = (state) => state.tutorial.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tutorialDestroySelectors = {
  selectLoading,
};

export default tutorialDestroySelectors;
