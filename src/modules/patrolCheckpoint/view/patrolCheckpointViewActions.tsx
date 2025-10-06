import PatrolCheckpointService from 'src/modules/patrolCheckpoint/patrolCheckpointService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PATROLCHECKPOINT_VIEW';

const patrolCheckpointViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patrolCheckpointViewActions.FIND_STARTED,
      });

      const record = await PatrolCheckpointService.find(id);

      dispatch({
        type: patrolCheckpointViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolCheckpointViewActions.FIND_ERROR,
      });

      getHistory().push('/patrol-checkpoint');
    }
  },
};

export default patrolCheckpointViewActions;
