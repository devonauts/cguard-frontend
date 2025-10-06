import { createSelector } from 'reselect';

const selectRaw = (state) => state.notificationRecipient.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const notificationRecipientDestroySelectors = {
  selectLoading,
};

export default notificationRecipientDestroySelectors;
