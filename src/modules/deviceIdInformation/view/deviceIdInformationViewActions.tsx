import DeviceIdInformationService from 'src/modules/deviceIdInformation/deviceIdInformationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DEVICEIDINFORMATION_VIEW';

const deviceIdInformationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: deviceIdInformationViewActions.FIND_STARTED,
      });

      const record = await DeviceIdInformationService.find(id);

      dispatch({
        type: deviceIdInformationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deviceIdInformationViewActions.FIND_ERROR,
      });

      getHistory().push('/device-id-information');
    }
  },
};

export default deviceIdInformationViewActions;
