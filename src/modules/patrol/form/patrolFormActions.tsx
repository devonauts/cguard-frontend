import PatrolService from 'src/modules/patrol/patrolService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PATROL_FORM';

const patrolFormActions = {
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
        type: patrolFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PatrolService.find(id);
      }

      dispatch({
        type: patrolFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolFormActions.INIT_ERROR,
      });

      getHistory().push('/patrol');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: patrolFormActions.CREATE_STARTED,
      });

      await PatrolService.create(values);

      dispatch({
        type: patrolFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patrol.create.success'),
      );

      getHistory().push('/patrol');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: patrolFormActions.UPDATE_STARTED,
      });

      await PatrolService.update(id, values);

      dispatch({
        type: patrolFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patrol.update.success'),
      );

      getHistory().push('/patrol');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default patrolFormActions;
