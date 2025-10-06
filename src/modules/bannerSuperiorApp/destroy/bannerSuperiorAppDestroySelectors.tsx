import { createSelector } from 'reselect';

const selectRaw = (state) => state.bannerSuperiorApp.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const bannerSuperiorAppDestroySelectors = {
  selectLoading,
};

export default bannerSuperiorAppDestroySelectors;
