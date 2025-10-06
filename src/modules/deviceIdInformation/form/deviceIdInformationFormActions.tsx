import DeviceIdInformationService from 'src/modules/deviceIdInformation/deviceIdInformationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DEVICEIDINFORMATION_FORM';

const deviceIdInformationFormActions = {
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
        type: deviceIdInformationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DeviceIdInformationService.find(id);
      }

      dispatch({
        type: deviceIdInformationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceIdInformationFormActions.INIT_ERROR,
      });

      getHistory().push('/device-id-information');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: deviceIdInformationFormActions.CREATE_STARTED,
      });

      await DeviceIdInformationService.create(values);

      dispatch({
        type: deviceIdInformationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.deviceIdInformation.create.success'),
      );

      getHistory().push('/device-id-information');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceIdInformationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: deviceIdInformationFormActions.UPDATE_STARTED,
      });

      await DeviceIdInformationService.update(id, values);

      dispatch({
        type: deviceIdInformationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.deviceIdInformation.update.success'),
      );

      getHistory().push('/device-id-information');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceIdInformationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default deviceIdInformationFormActions;
