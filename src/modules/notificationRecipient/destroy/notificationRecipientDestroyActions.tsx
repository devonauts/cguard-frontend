import listActions from 'src/modules/notificationRecipient/list/notificationRecipientListActions';
import NotificationRecipientService from 'src/modules/notificationRecipient/notificationRecipientService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'NOTIFICATIONRECIPIENT_DESTROY';

const notificationRecipientDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: notificationRecipientDestroyActions.DESTROY_STARTED,
      });

      await NotificationRecipientService.destroyAll([id]);

      dispatch({
        type: notificationRecipientDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.notificationRecipient.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/notification-recipient');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: notificationRecipientDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: notificationRecipientDestroyActions.DESTROY_ALL_STARTED,
      });

      await NotificationRecipientService.destroyAll(ids);

      dispatch({
        type: notificationRecipientDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.notificationRecipient.destroyAll.success'),
      );

      getHistory().push('/notification-recipient');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: notificationRecipientDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default notificationRecipientDestroyActions;
