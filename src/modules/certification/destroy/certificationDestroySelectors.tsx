import { createSelector } from 'reselect';

const selectRaw = (state) => state.certification.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const certificationDestroySelectors = {
  selectLoading,
};

export default certificationDestroySelectors;
