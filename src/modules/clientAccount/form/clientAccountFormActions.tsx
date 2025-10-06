import ClientAccountService from 'src/modules/clientAccount/clientAccountService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CLIENTACCOUNT_FORM';

const clientAccountFormActions = {
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
        type: clientAccountFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ClientAccountService.find(id);
      }

      dispatch({
        type: clientAccountFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: clientAccountFormActions.INIT_ERROR,
      });

      getHistory().push('/client-account');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: clientAccountFormActions.CREATE_STARTED,
      });

      await ClientAccountService.create(values);

      dispatch({
        type: clientAccountFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.clientAccount.create.success'),
      );

      getHistory().push('/client-account');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: clientAccountFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: clientAccountFormActions.UPDATE_STARTED,
      });

      await ClientAccountService.update(id, values);

      dispatch({
        type: clientAccountFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.clientAccount.update.success'),
      );

      getHistory().push('/client-account');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: clientAccountFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default clientAccountFormActions;
