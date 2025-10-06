import ServiceService from 'src/modules/service/serviceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SERVICE_VIEW';

const serviceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: serviceViewActions.FIND_STARTED,
      });

      const record = await ServiceService.find(id);

      dispatch({
        type: serviceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: serviceViewActions.FIND_ERROR,
      });

      getHistory().push('/service');
    }
  },
};

export default serviceViewActions;
