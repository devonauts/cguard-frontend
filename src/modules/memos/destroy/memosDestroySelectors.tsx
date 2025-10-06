import { createSelector } from 'reselect';

const selectRaw = (state) => state.memos.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const memosDestroySelectors = {
  selectLoading,
};

export default memosDestroySelectors;
