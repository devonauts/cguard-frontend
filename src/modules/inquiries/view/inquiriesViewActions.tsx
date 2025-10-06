import InquiriesService from 'src/modules/inquiries/inquiriesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'INQUIRIES_VIEW';

const inquiriesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: inquiriesViewActions.FIND_STARTED,
      });

      const record = await InquiriesService.find(id);

      dispatch({
        type: inquiriesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: inquiriesViewActions.FIND_ERROR,
      });

      getHistory().push('/inquiries');
    }
  },
};

export default inquiriesViewActions;
