import SecurityGuardService from 'src/modules/securityGuard/securityGuardService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SECURITYGUARD_VIEW';

const securityGuardViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: securityGuardViewActions.FIND_STARTED,
      });

      const record = await SecurityGuardService.find(id);

      dispatch({
        type: securityGuardViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: securityGuardViewActions.FIND_ERROR,
      });

      getHistory().push('/security-guard');
    }
  },
};

export default securityGuardViewActions;
