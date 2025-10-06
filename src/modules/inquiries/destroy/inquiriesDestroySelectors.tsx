import { createSelector } from 'reselect';

const selectRaw = (state) => state.inquiries.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const inquiriesDestroySelectors = {
  selectLoading,
};

export default inquiriesDestroySelectors;
