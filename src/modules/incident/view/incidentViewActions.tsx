import IncidentService from 'src/modules/incident/incidentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'INCIDENT_VIEW';

const incidentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: incidentViewActions.FIND_STARTED,
      });

      const record = await IncidentService.find(id);

      dispatch({
        type: incidentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: incidentViewActions.FIND_ERROR,
      });

      getHistory().push('/incident');
    }
  },
};

export default incidentViewActions;
