import { createSelector } from 'reselect';

const selectRaw = (state) => state.notificationRecipient.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const notificationRecipientViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default notificationRecipientViewSelectors;
