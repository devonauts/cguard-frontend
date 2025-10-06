import ReportService from 'src/modules/report/reportService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'REPORT_FORM';

const reportFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: reportFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ReportService.find(id);
      }

      dispatch({
        type: reportFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reportFormActions.INIT_ERROR,
      });

      getHistory().push('/report');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: reportFormActions.CREATE_STARTED,
      });

      await ReportService.create(values);

      dispatch({
        type: reportFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.report.create.success'),
      );

      getHistory().push('/report');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reportFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: reportFormActions.UPDATE_STARTED,
      });

      await ReportService.update(id, values);

      dispatch({
        type: reportFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.report.update.success'),
      );

      getHistory().push('/report');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reportFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default reportFormActions;
