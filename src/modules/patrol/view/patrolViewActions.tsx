import PatrolService from 'src/modules/patrol/patrolService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PATROL_VIEW';

const patrolViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patrolViewActions.FIND_STARTED,
      });

      const record = await PatrolService.find(id);

      dispatch({
        type: patrolViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolViewActions.FIND_ERROR,
      });

      getHistory().push('/patrol');
    }
  },
};

export default patrolViewActions;
