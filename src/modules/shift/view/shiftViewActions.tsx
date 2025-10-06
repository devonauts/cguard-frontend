import ShiftService from 'src/modules/shift/shiftService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SHIFT_VIEW';

const shiftViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: shiftViewActions.FIND_STARTED,
      });

      const record = await ShiftService.find(id);

      dispatch({
        type: shiftViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shiftViewActions.FIND_ERROR,
      });

      getHistory().push('/shift');
    }
  },
};

export default shiftViewActions;
