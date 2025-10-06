import NotificationRecipientService from 'src/modules/notificationRecipient/notificationRecipientService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'NOTIFICATIONRECIPIENT_VIEW';

const notificationRecipientViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: notificationRecipientViewActions.FIND_STARTED,
      });

      const record = await NotificationRecipientService.find(id);

      dispatch({
        type: notificationRecipientViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: notificationRecipientViewActions.FIND_ERROR,
      });

      getHistory().push('/notification-recipient');
    }
  },
};

export default notificationRecipientViewActions;
