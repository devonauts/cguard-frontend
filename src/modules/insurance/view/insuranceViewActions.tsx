import InsuranceService from 'src/modules/insurance/insuranceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'INSURANCE_VIEW';

const insuranceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: insuranceViewActions.FIND_STARTED,
      });

      const record = await InsuranceService.find(id);

      dispatch({
        type: insuranceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: insuranceViewActions.FIND_ERROR,
      });

      getHistory().push('/insurance');
    }
  },
};

export default insuranceViewActions;
