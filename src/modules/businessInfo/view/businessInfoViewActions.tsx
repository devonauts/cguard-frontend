import BusinessInfoService from 'src/modules/businessInfo/businessInfoService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BUSINESSINFO_VIEW';

const businessInfoViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: businessInfoViewActions.FIND_STARTED,
      });

      const record = await BusinessInfoService.find(id);

      dispatch({
        type: businessInfoViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: businessInfoViewActions.FIND_ERROR,
      });

      getHistory().push('/business-info');
    }
  },
};

export default businessInfoViewActions;
