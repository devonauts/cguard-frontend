import PatrolLogService from 'src/modules/patrolLog/patrolLogService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PATROLLOG_VIEW';

const patrolLogViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patrolLogViewActions.FIND_STARTED,
      });

      const record = await PatrolLogService.find(id);

      dispatch({
        type: patrolLogViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patrolLogViewActions.FIND_ERROR,
      });

      getHistory().push('/patrol-log');
    }
  },
};

export default patrolLogViewActions;
