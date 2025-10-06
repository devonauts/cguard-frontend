import { createSelector } from 'reselect';

const selectRaw = (state) => state.tutorial.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tutorialViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default tutorialViewSelectors;
