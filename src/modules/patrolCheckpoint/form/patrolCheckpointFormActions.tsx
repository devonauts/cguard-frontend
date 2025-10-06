import PatrolCheckpointService from 'src/modules/patrolCheckpoint/patrolCheckpointService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PATROLCHECKPOINT_FORM';

const patrolCheckpointFormActions = {
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
        type: patrolCheckpointFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PatrolCheckpointService.find(id);
      }

      dispatch({
        type: patrolCheckpointFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolCheckpointFormActions.INIT_ERROR,
      });

      getHistory().push('/patrol-checkpoint');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: patrolCheckpointFormActions.CREATE_STARTED,
      });

      await PatrolCheckpointService.create(values);

      dispatch({
        type: patrolCheckpointFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patrolCheckpoint.create.success'),
      );

      getHistory().push('/patrol-checkpoint');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolCheckpointFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: patrolCheckpointFormActions.UPDATE_STARTED,
      });

      await PatrolCheckpointService.update(id, values);

      dispatch({
        type: patrolCheckpointFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patrolCheckpoint.update.success'),
      );

      getHistory().push('/patrol-checkpoint');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolCheckpointFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default patrolCheckpointFormActions;
