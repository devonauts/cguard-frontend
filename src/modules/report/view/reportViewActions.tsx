import ReportService from 'src/modules/report/reportService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REPORT_VIEW';

const reportViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: reportViewActions.FIND_STARTED,
      });

      const record = await ReportService.find(id);

      dispatch({
        type: reportViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reportViewActions.FIND_ERROR,
      });

      getHistory().push('/report');
    }
  },
};

export default reportViewActions;
