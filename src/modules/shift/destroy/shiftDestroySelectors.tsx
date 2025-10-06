import { createSelector } from 'reselect';

const selectRaw = (state) => state.shift.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shiftDestroySelectors = {
  selectLoading,
};

export default shiftDestroySelectors;
