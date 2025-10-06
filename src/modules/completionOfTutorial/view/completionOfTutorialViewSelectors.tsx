import { createSelector } from 'reselect';

const selectRaw = (state) => state.completionOfTutorial.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const completionOfTutorialViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default completionOfTutorialViewSelectors;
