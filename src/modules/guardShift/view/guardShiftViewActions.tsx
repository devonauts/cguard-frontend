import GuardShiftService from 'src/modules/guardShift/guardShiftService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'GUARDSHIFT_VIEW';

const guardShiftViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: guardShiftViewActions.FIND_STARTED,
      });

      const record = await GuardShiftService.find(id);

      dispatch({
        type: guardShiftViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: guardShiftViewActions.FIND_ERROR,
      });

      getHistory().push('/guard-shift');
    }
  },
};

export default guardShiftViewActions;
