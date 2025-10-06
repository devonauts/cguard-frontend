import listActions from 'src/modules/patrolCheckpoint/list/patrolCheckpointListActions';
import PatrolCheckpointService from 'src/modules/patrolCheckpoint/patrolCheckpointService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PATROLCHECKPOINT_DESTROY';

const patrolCheckpointDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patrolCheckpointDestroyActions.DESTROY_STARTED,
      });

      await PatrolCheckpointService.destroyAll([id]);

      dispatch({
        type: patrolCheckpointDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.patrolCheckpoint.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/patrol-checkpoint');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patrolCheckpointDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: patrolCheckpointDestroyActions.DESTROY_ALL_STARTED,
      });

      await PatrolCheckpointService.destroyAll(ids);

      dispatch({
        type: patrolCheckpointDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.patrolCheckpoint.destroyAll.success'),
      );

      getHistory().push('/patrol-checkpoint');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patrolCheckpointDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default patrolCheckpointDestroyActions;
