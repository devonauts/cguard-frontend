import AdditionalServiceService from 'src/modules/additionalService/additionalServiceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ADDITIONALSERVICE_VIEW';

const additionalServiceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: additionalServiceViewActions.FIND_STARTED,
      });

      const record = await AdditionalServiceService.find(id);

      dispatch({
        type: additionalServiceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: additionalServiceViewActions.FIND_ERROR,
      });

      getHistory().push('/additional-service');
    }
  },
};

export default additionalServiceViewActions;
