import RequestService from 'src/modules/request/requestService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REQUEST_VIEW';

const requestViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: requestViewActions.FIND_STARTED,
      });

      const record = await RequestService.find(id);

      dispatch({
        type: requestViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: requestViewActions.FIND_ERROR,
      });

      getHistory().push('/request');
    }
  },
};

export default requestViewActions;
