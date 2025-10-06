import { createSelector } from 'reselect';

const selectRaw = (state) => state.additionalService.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const additionalServiceDestroySelectors = {
  selectLoading,
};

export default additionalServiceDestroySelectors;
