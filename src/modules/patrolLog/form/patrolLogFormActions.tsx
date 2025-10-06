import PatrolLogService from 'src/modules/patrolLog/patrolLogService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PATROLLOG_FORM';

const patrolLogFormActions = {
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
        type: patrolLogFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PatrolLogService.find(id);
      }

      dispatch({
        type: patrolLogFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolLogFormActions.INIT_ERROR,
      });

      getHistory().push('/patrol-log');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: patrolLogFormActions.CREATE_STARTED,
      });

      await PatrolLogService.create(values);

      dispatch({
        type: patrolLogFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patrolLog.create.success'),
      );

      getHistory().push('/patrol-log');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolLogFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: patrolLogFormActions.UPDATE_STARTED,
      });

      await PatrolLogService.update(id, values);

      dispatch({
        type: patrolLogFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patrolLog.update.success'),
      );

      getHistory().push('/patrol-log');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolLogFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default patrolLogFormActions;
