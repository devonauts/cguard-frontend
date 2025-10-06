import RequestService from 'src/modules/request/requestService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'REQUEST_FORM';

const requestFormActions = {
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
        type: requestFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RequestService.find(id);
      }

      dispatch({
        type: requestFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requestFormActions.INIT_ERROR,
      });

      getHistory().push('/request');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: requestFormActions.CREATE_STARTED,
      });

      await RequestService.create(values);

      dispatch({
        type: requestFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.request.create.success'),
      );

      getHistory().push('/request');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requestFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: requestFormActions.UPDATE_STARTED,
      });

      await RequestService.update(id, values);

      dispatch({
        type: requestFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.request.update.success'),
      );

      getHistory().push('/request');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requestFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default requestFormActions;
