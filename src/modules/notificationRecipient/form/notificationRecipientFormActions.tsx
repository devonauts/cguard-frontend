import NotificationRecipientService from 'src/modules/notificationRecipient/notificationRecipientService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'NOTIFICATIONRECIPIENT_FORM';

const notificationRecipientFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: notificationRecipientFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await NotificationRecipientService.find(id);
      }

      dispatch({
        type: notificationRecipientFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: notificationRecipientFormActions.INIT_ERROR,
      });

      getHistory().push('/notification-recipient');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: notificationRecipientFormActions.CREATE_STARTED,
      });

      await NotificationRecipientService.create(values);

      dispatch({
        type: notificationRecipientFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.notificationRecipient.create.success'),
      );

      getHistory().push('/notification-recipient');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: notificationRecipientFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: notificationRecipientFormActions.UPDATE_STARTED,
      });

      await NotificationRecipientService.update(id, values);

      dispatch({
        type: notificationRecipientFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.notificationRecipient.update.success'),
      );

      getHistory().push('/notification-recipient');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: notificationRecipientFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default notificationRecipientFormActions;
