import BillingService from 'src/modules/billing/billingService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BILLING_VIEW';

const billingViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: billingViewActions.FIND_STARTED,
      });

      const record = await BillingService.find(id);

      dispatch({
        type: billingViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: billingViewActions.FIND_ERROR,
      });

      getHistory().push('/billing');
    }
  },
};

export default billingViewActions;
