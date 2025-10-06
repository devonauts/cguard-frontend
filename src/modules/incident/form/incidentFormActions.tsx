import IncidentService from 'src/modules/incident/incidentService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'INCIDENT_FORM';

const incidentFormActions = {
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
        type: incidentFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await IncidentService.find(id);
      }

      dispatch({
        type: incidentFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: incidentFormActions.INIT_ERROR,
      });

      getHistory().push('/incident');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: incidentFormActions.CREATE_STARTED,
      });

      await IncidentService.create(values);

      dispatch({
        type: incidentFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.incident.create.success'),
      );

      getHistory().push('/incident');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: incidentFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: incidentFormActions.UPDATE_STARTED,
      });

      await IncidentService.update(id, values);

      dispatch({
        type: incidentFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.incident.update.success'),
      );

      getHistory().push('/incident');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: incidentFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default incidentFormActions;
