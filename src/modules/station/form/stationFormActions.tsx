import StationService from 'src/modules/station/stationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'STATION_FORM';

const stationFormActions = {
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
        type: stationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await StationService.find(id);
      }

      dispatch({
        type: stationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stationFormActions.INIT_ERROR,
      });

      getHistory().push('/station');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: stationFormActions.CREATE_STARTED,
      });

      await StationService.create(values);

      dispatch({
        type: stationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.station.create.success'),
      );

      getHistory().push('/station');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: stationFormActions.UPDATE_STARTED,
      });

      await StationService.update(id, values);

      dispatch({
        type: stationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.station.update.success'),
      );

      getHistory().push('/station');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default stationFormActions;
